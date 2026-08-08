import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { type ReactNode } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { availableWordBags } from '../../japanese';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';
import { TimeContextProvider } from '../Time';
import { MINIMUM_LEVEL } from './Stages';
import { useAddNewWordsToSRS, useReplaceSRSWords, useSRSWord, useSRSWords } from './srsHooks';
import { db } from './srsdb';

const createQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: { retry: false },
            mutations: { retry: false },
        },
    });

const createWrapper = (queryClient: QueryClient) => {
    return ({ children }: { children: ReactNode }) => {
        return (
            <QueryClientProvider client={queryClient}>
                <TimeContextProvider
                    timeProvider={{
                        now: () => new Date('2026-01-01T00:00:00.000Z'),
                    }}
                >
                    {children}
                </TimeContextProvider>
            </QueryClientProvider>
        );
    };
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
            const now = new Date('2026-01-01T00:00:00.000Z');

            const queryClient = createQueryClient();
            const addNewWordstoSRS = renderHook(() => useAddNewWordsToSRS(), {
                wrapper: createWrapper(queryClient),
            });
            const srsWords = renderHook(() => useSRSWords(), { wrapper: createWrapper(queryClient) });

            await act(async () => {
                await addNewWordstoSRS.result.current.mutateAsync(wordIds);
            });

            await waitFor(() => expect(addNewWordstoSRS.result.current.isSuccess).toBe(true));
            await waitFor(() => expect(srsWords.result.current.isSuccess).toBe(true));

            const records = await srsWords.result.current.data;

            expect(records).toBeDefined();
            expect(records).toHaveLength(2);
            expect(records?.map((record) => record.wordId)).toEqual(wordIds);
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
            records?.forEach((record) => {
                expect(record.nextReview).toStrictEqual(now);
            });
        });

        it('does nothing for an empty list', async () => {
            const queryClient = createQueryClient();
            const addNewWordstoSRS = renderHook(() => useAddNewWordsToSRS(), { wrapper: createWrapper(queryClient) });
            const srsWords = renderHook(() => useSRSWords(), { wrapper: createWrapper(queryClient) });
            await act(async () => {
                await addNewWordstoSRS.result.current.mutateAsync([]);
            });
            await waitFor(() => expect(addNewWordstoSRS.result.current.isSuccess).toBe(true));
            await waitFor(() => expect(srsWords.result.current.isSuccess).toBe(true));

            expect(srsWords.result.current.data).toEqual([]);
        });

        it('propagates duplicate word ID failures', async () => {
            const wordId = getWordBag().words[0].id;
            const addNewWordstoSRS = renderHook(() => useAddNewWordsToSRS(), {
                wrapper: createWrapper(createQueryClient()),
            });
            await act(async () => {
                await addNewWordstoSRS.result.current.mutateAsync([wordId]);
            });
            await waitFor(() => expect(addNewWordstoSRS.result.current.isSuccess).toBe(true));
            await expect(
                act(async () => {
                    await addNewWordstoSRS.result.current.mutateAsync([wordId]);
                }),
            ).rejects.toThrow();
        });
    });

    describe('useSRSWords', () => {
        it('returns all valid progress records', async () => {
            const queryClient = createQueryClient();
            const wordBag = getWordBag(2);
            const insertedWords = wordBag.words.slice(0, 2);

            const addNewWordstoSRS = renderHook(() => useAddNewWordsToSRS(), { wrapper: createWrapper(queryClient) });
            const sRSWords = renderHook(() => useSRSWords(), { wrapper: createWrapper(queryClient) });
            await act(async () => {
                await addNewWordstoSRS.result.current.mutateAsync(insertedWords.map((word) => word.id));
            });
            await waitFor(() => expect(sRSWords.result.current.isSuccess).toBe(true));

            expect(sRSWords.result.current.data).toEqual([
                {
                    wordId: insertedWords[0].id,
                    level: MINIMUM_LEVEL,
                    lastReviewed: undefined,
                    nextReview: new Date('2026-01-01T00:00:00.000Z'),
                },
                {
                    wordId: insertedWords[1].id,
                    level: MINIMUM_LEVEL,
                    lastReviewed: undefined,
                    nextReview: new Date('2026-01-01T00:00:00.000Z'),
                },
            ]);
            expect(
                queryClient.getQueryCache().find({ queryKey: ['databaseWords'] })?.observers[0]?.options.staleTime,
            ).toBe(5 * 60 * 1000);
        });

        it('removes orphaned progress records before returning the result', async () => {
            const validRecord = getWordBag().words[0].id;
            const orphanRecord = 'missing-vocabulary-word';

            const queryClient = createQueryClient();
            const addNewWordstoSRS = renderHook(() => useAddNewWordsToSRS(), { wrapper: createWrapper(queryClient) });
            const sRSWords = renderHook(() => useSRSWords(), { wrapper: createWrapper(queryClient) });
            await act(async () => {
                await addNewWordstoSRS.result.current.mutateAsync([validRecord, orphanRecord]);
            });

            await waitFor(() => expect(addNewWordstoSRS.result.current.isSuccess).toBe(true));
            await waitFor(() => expect(sRSWords.result.current.isSuccess).toBe(true));

            expect(sRSWords.result.current.data).toEqual([
                {
                    wordId: validRecord,
                    level: MINIMUM_LEVEL,
                    lastReviewed: undefined,
                    nextReview: new Date('2026-01-01T00:00:00.000Z'),
                },
            ]);
        });
    });

    describe('useAddNewWordsToSRS', () => {
        it('adds only missing words from the preferred bags and invalidates the words query', async () => {
            const wordBag = getWordBag(3);
            const existingWordId = wordBag.words[0].id;
            const queryClient = createQueryClient();
            const addNewWordstoSRS = renderHook(() => useAddNewWordsToSRS(), {
                wrapper: createWrapper(queryClient),
            });
            const srsWords = renderHook(() => useSRSWords(), { wrapper: createWrapper(queryClient) });
            await act(async () => {
                await addNewWordstoSRS.result.current.mutateAsync([existingWordId]);
            });

            const invalidateQueries = vi.spyOn(queryClient, 'invalidateQueries');
            const addNewWordsToSRS = renderHook(() => useAddNewWordsToSRS(), {
                wrapper: createWrapper(queryClient),
            });

            await act(async () => {
                await addNewWordsToSRS.result.current.mutateAsync([wordBag.words[1].id, wordBag.words[2].id]);
            });
            await waitFor(() => expect(addNewWordsToSRS.result.current.isSuccess).toBe(true));
            await waitFor(() => expect(srsWords.result.current.isSuccess).toBe(true));

            const records = srsWords.result.current.data;
            const preferredWordIds = new Set(wordBag.words.map((word) => word.id));

            expect(records).toHaveLength(3);
            expect(records?.map((record) => record.wordId)).toContain(existingWordId);
            expect(records?.every((record) => preferredWordIds.has(record.wordId))).toBe(true);
            expect(invalidateQueries).toHaveBeenCalledWith({ queryKey: ['databaseWords'] });
        });
    });

    describe('useReplaceSRSWords', () => {
        it('replaces all records and invalidates the words query', async () => {
            const wordBag = getWordBag(3);
            const queryClient = createQueryClient();
            const addNewWordstoSRS = renderHook(() => useAddNewWordsToSRS(), { wrapper: createWrapper(queryClient) });
            const sRSWords = renderHook(() => useSRSWords(), { wrapper: createWrapper(queryClient) });
            await act(async () => {
                await addNewWordstoSRS.result.current.mutateAsync([wordBag.words[0].id]);
            });
            await waitFor(() => expect(addNewWordstoSRS.result.current.isSuccess).toBe(true));

            const replacementRecords = wordBag.words
                .slice(1, 3)
                .map((word, index) => createProgress(word.id, { level: index + 3 }));
            const replaceSRSWords = renderHook(() => useReplaceSRSWords(), {
                wrapper: createWrapper(queryClient),
            });

            await act(async () => {
                await replaceSRSWords.result.current.mutateAsync(replacementRecords);
            });
            await waitFor(() => expect(replaceSRSWords.result.current.isSuccess).toBe(true));
            await waitFor(() => expect(sRSWords.result.current.isSuccess).toBe(true));

            expect(sRSWords.result.current.data).toEqual(replacementRecords);
        });

        it('clears all records when given an empty replacement', async () => {
            const wordBag = getWordBag(1);
            const queryClient = createQueryClient();
            const sRSWords = renderHook(() => useSRSWords(), { wrapper: createWrapper(queryClient) });
            const addNewWordstoSRS = renderHook(() => useAddNewWordsToSRS(), { wrapper: createWrapper(queryClient) });
            await act(async () => {
                await addNewWordstoSRS.result.current.mutateAsync([wordBag.words[0].id]);
            });
            const replaceSRSWords = renderHook(() => useReplaceSRSWords(), {
                wrapper: createWrapper(queryClient),
            });

            await act(async () => {
                await replaceSRSWords.result.current.mutateAsync([]);
            });
            await waitFor(() => expect(replaceSRSWords.result.current.isSuccess).toBe(true));
            await waitFor(() => expect(sRSWords.result.current.isSuccess).toBe(true));

            expect(sRSWords.result.current.data).toEqual([]);
        });
    });

    describe('useSRSWord', () => {
        it('returns the stored progress record for its word ID', async () => {
            const wordId = getWordBag().words[0].id;
            const queryClient = createQueryClient();
            const addNewWordstoSRS = renderHook(() => useAddNewWordsToSRS(), { wrapper: createWrapper(queryClient) });
            await act(async () => {
                await addNewWordstoSRS.result.current.mutateAsync([wordId]);
            });

            const sRSWord = renderHook(() => useSRSWord(wordId), { wrapper: createWrapper(queryClient) });

            await waitFor(() => expect(sRSWord.result.current.isSuccess).toBe(true));

            expect(sRSWord.result.current.data).toEqual({
                wordId: wordId,
                level: MINIMUM_LEVEL,
                lastReviewed: undefined,
                nextReview: new Date('2026-01-01T00:00:00.000Z'),
            });
        });

        it('returns null rather than undefined for a missing word ID', async () => {
            const queryClient = createQueryClient();

            const sRSWord = renderHook(() => useSRSWord('not-in-progress'), { wrapper: createWrapper(queryClient) });

            await waitFor(() => expect(sRSWord.result.current.isSuccess).toBe(true));

            expect(sRSWord.result.current.data).toBeNull();
        });
    });
});
