import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import dayjs from '../../dayjs';
import { availableWordBags } from '../../japanese';
import { findWordById } from '../../japanese/search';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';
import { shuffleArray } from '../../utils';
import { db } from './srsdb';
import { MINIMUM_LEVEL } from './Stages';

const addNewRandomWords = async (count: number, preferredWordBags?: string[]): Promise<number> => {
    const wordsInProgress = (await db.wordProgress.toArray()).map((w) => w.wordId);
    const allWords = availableWordBags
        .filter((bag) => !preferredWordBags || preferredWordBags.includes(bag.id))
        .flatMap((bag) => bag.words)
        .map((w) => w.id);

    const newWords = allWords.filter((id) => !wordsInProgress.includes(id));
    const wordsToAdd = shuffleArray(newWords).slice(0, count);
    return addWordsToSRS(wordsToAdd);
};

export const addWordsToSRS = async (wordIds: string[]) => {
    const now = new Date();
    const newProgressEntries = wordIds.map((wordId) => ({
        wordId,
        lastReviewed: undefined,
        nextReview: now,
        level: MINIMUM_LEVEL,
    }));
    await db.wordProgress.bulkAdd(newProgressEntries);
    return wordIds.length;
};

export const useSRSWords = () => {
    return useQuery({
        queryKey: ['databaseWords'],
        staleTime: dayjs.duration(5, 'minutes').asMilliseconds(),
        queryFn: async () => {
            const words = await db.wordProgress.toArray();
            const orphanIds = words.filter((word) => !findWordById(word.wordId)).map((word) => word.wordId);
            await Promise.all(orphanIds.map((id) => db.wordProgress.delete(id)));
            return words.filter((word) => !orphanIds.includes(word.wordId));
        },
    });
};

export const useAddNewRandomWords = (queryClient: QueryClient) => {
    return useMutation({
        mutationKey: ['addNewRandomWords'],
        mutationFn: ({ count, preferredWordBags }: { count: number; preferredWordBags?: string[] }) =>
            addNewRandomWords(count, preferredWordBags),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['databaseWords'] });
        },
    });
};

export const useReplaceSRSWords = (queryClient: QueryClient) => {
    return useMutation({
        mutationKey: ['replaceSRSWords'],
        mutationFn: async (newWords: WordLearningProgress[]) => {
            await db.transaction('rw', db.wordProgress, async () => {
                await db.wordProgress.clear();
                await db.wordProgress.bulkAdd(newWords);
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['databaseWords'] });
        },
    });
};

export const useSRSWord = (wordId: string) => {
    return useQuery<WordLearningProgress | null>({
        queryKey: ['srsWord', wordId],
        queryFn: async () => {
            const result = await db.wordProgress.get({ wordId });
            return result || null;
        },
    });
};
