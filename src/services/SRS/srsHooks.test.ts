import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { createElement, type ReactNode } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { availableWordBags } from '../../japanese';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';
import { MINIMUM_LEVEL } from './Stages';
import { addWordsToSRS, useAddNewRandomWords, useReplaceSRSWords, useSRSWord, useSRSWords } from './srsHooks';
import { db } from './srsdb';

const createQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: { retry: false },
            mutations: { retry: false },
        },
    });

const createWrapper = (queryClient: QueryClient) => {
    return ({ children }: { children: ReactNode }) =>
        createElement(QueryClientProvider, { client: queryClient }, children);
};

const createProgress = (wordId: string, overrides: Partial<WordLearningProgress> = {}): WordLearningProgress => ({
    wordId,
    lastReviewed: new Date('2026-01-01T00:00:00.000Z'),
    nextReview: new Date('2026-01-02T00:00:00.000Z'),
    level: 2,
    ...overrides,
});

const getWordBag = (minimumWords = 1) => {
    const wordBag = availableWordBags.find((bag) => bag.words.length >= minimumWords);

    if (!wordBag) {
        throw new Error(`Expected a word bag with at least ${minimumWords} words.`);
    }

    return wordBag;
};

afterEach(async () => {
    await db.wordProgress.clear();
});

describe('SRS hooks', () => {
    describe('addWordsToSRS', () => {
        it('creates minimum-level progress records and returns the number added', async () => {
            const wordBag = getWordBag(2);
            const wordIds = wordBag.words.slice(0, 2).map((word) => word.id);
            const beforeAdd = new Date();

            await expect(addWordsToSRS(wordIds)).resolves.toBe(2);

            const records = await db.wordProgress.toArray();
            const afterAdd = new Date();

            expect(records).toHaveLength(2);
            expect(records.map((record) => record.wordId)).toEqual(wordIds);
            expect(records).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        wordId: wordIds[0],
                        lastReviewed: undefined,
                        level: MINIMUM_LEVEL,
                    }),
                    expect.objectContaining({
                        wordId: wordIds[1],
                        lastReviewed: undefined,
                        level: MINIMUM_LEVEL,
                    }),
                ]),
            );
            records.forEach((record) => {
                expect(record.nextReview).toBeInstanceOf(Date);
                expect(record.nextReview.getTime()).toBeGreaterThanOrEqual(beforeAdd.getTime());
                expect(record.nextReview.getTime()).toBeLessThanOrEqual(afterAdd.getTime());
            });
        });

        it('does nothing for an empty list', async () => {
            await expect(addWordsToSRS([])).resolves.toBe(0);
            await expect(db.wordProgress.toArray()).resolves.toEqual([]);
        });

        it('propagates duplicate word ID failures', async () => {
            const wordId = getWordBag().words[0].id;
            await addWordsToSRS([wordId]);

            await expect(addWordsToSRS([wordId])).rejects.toThrow();
        });
    });

    describe('useSRSWords', () => {
        it('returns all valid progress records', async () => {
            const wordBag = getWordBag(2);
            const records = wordBag.words.slice(0, 2).map((word, index) => createProgress(word.id, { level: index }));
            await db.wordProgress.bulkAdd(records);
            const queryClient = createQueryClient();

            const { result } = renderHook(() => useSRSWords(), { wrapper: createWrapper(queryClient) });

            await waitFor(() => expect(result.current.isSuccess).toBe(true));

            expect(result.current.data).toEqual(records);
            // expect(queryClient.getQueryCache().find({ queryKey: ['databaseWords'] })?.options.staleTime).toBe(
            //     5 * 60 * 1000,
            // );
        });

        it('removes orphaned progress records before returning the result', async () => {
            const validRecord = createProgress(getWordBag().words[0].id);
            const orphanRecord = createProgress('missing-vocabulary-word');
            await db.wordProgress.bulkAdd([validRecord, orphanRecord]);
            const queryClient = createQueryClient();

            const { result } = renderHook(() => useSRSWords(), { wrapper: createWrapper(queryClient) });

            await waitFor(() => expect(result.current.isSuccess).toBe(true));

            expect(result.current.data).toEqual([validRecord]);
            await expect(db.wordProgress.get(orphanRecord.wordId)).resolves.toBeUndefined();
        });
    });

    describe('useAddNewRandomWords', () => {
        it('adds only missing words from the preferred bags and invalidates the words query', async () => {
            const wordBag = getWordBag(3);
            const existingWordId = wordBag.words[0].id;
            await addWordsToSRS([existingWordId]);
            const queryClient = createQueryClient();
            const invalidateQueries = vi.spyOn(queryClient, 'invalidateQueries');
            const { result } = renderHook(() => useAddNewRandomWords(), {
                wrapper: createWrapper(queryClient),
            });

            let addedCount = 0;
            await act(async () => {
                addedCount = await result.current.mutateAsync({ count: 2, preferredWordBags: [wordBag.id] });
            });
            await waitFor(() => expect(result.current.isSuccess).toBe(true));

            const records = await db.wordProgress.toArray();
            const preferredWordIds = new Set(wordBag.words.map((word) => word.id));

            expect(addedCount).toBe(2);
            expect(records).toHaveLength(3);
            expect(records.map((record) => record.wordId)).toContain(existingWordId);
            expect(records.every((record) => preferredWordIds.has(record.wordId))).toBe(true);
            expect(invalidateQueries).toHaveBeenCalledWith({ queryKey: ['databaseWords'] });
        });

        it('returns zero when no preferred bag can supply words', async () => {
            const queryClient = createQueryClient();
            const { result } = renderHook(() => useAddNewRandomWords(), {
                wrapper: createWrapper(queryClient),
            });

            let addedCount = -1;
            await act(async () => {
                addedCount = await result.current.mutateAsync({ count: 3, preferredWordBags: ['does-not-exist'] });
            });
            await waitFor(() => expect(result.current.isSuccess).toBe(true));

            expect(addedCount).toBe(0);
            await expect(db.wordProgress.toArray()).resolves.toEqual([]);
        });
    });

    describe('useReplaceSRSWords', () => {
        it('replaces all records and invalidates the words query', async () => {
            const wordBag = getWordBag(3);
            await db.wordProgress.bulkAdd([createProgress(wordBag.words[0].id)]);
            const replacementRecords = wordBag.words
                .slice(1, 3)
                .map((word, index) => createProgress(word.id, { level: index + 3 }));
            const queryClient = createQueryClient();
            const invalidateQueries = vi.spyOn(queryClient, 'invalidateQueries');
            const { result } = renderHook(() => useReplaceSRSWords(), {
                wrapper: createWrapper(queryClient),
            });

            await act(async () => {
                await result.current.mutateAsync(replacementRecords);
            });
            await waitFor(() => expect(result.current.isSuccess).toBe(true));

            await expect(db.wordProgress.toArray()).resolves.toEqual(replacementRecords);
            expect(invalidateQueries).toHaveBeenCalledWith({ queryKey: ['databaseWords'] });
        });

        it('clears all records when given an empty replacement', async () => {
            await db.wordProgress.bulkAdd([createProgress(getWordBag().words[0].id)]);
            const queryClient = createQueryClient();
            const { result } = renderHook(() => useReplaceSRSWords(), {
                wrapper: createWrapper(queryClient),
            });

            await act(async () => {
                await result.current.mutateAsync([]);
            });
            await waitFor(() => expect(result.current.isSuccess).toBe(true));

            await expect(db.wordProgress.toArray()).resolves.toEqual([]);
        });
    });

    describe('useSRSWord', () => {
        it('returns the stored progress record for its word ID', async () => {
            const record = createProgress(getWordBag().words[0].id);
            await db.wordProgress.add(record);
            const queryClient = createQueryClient();

            const { result } = renderHook(() => useSRSWord(record.wordId), { wrapper: createWrapper(queryClient) });

            await waitFor(() => expect(result.current.isSuccess).toBe(true));

            expect(result.current.data).toEqual(record);
        });

        it('returns null rather than undefined for a missing word ID', async () => {
            const queryClient = createQueryClient();

            const { result } = renderHook(() => useSRSWord('not-in-progress'), { wrapper: createWrapper(queryClient) });

            await waitFor(() => expect(result.current.isSuccess).toBe(true));

            expect(result.current.data).toBeNull();
        });
    });
});
