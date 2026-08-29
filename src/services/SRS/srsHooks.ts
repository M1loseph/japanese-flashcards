import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import dayjs from '../../dayjs';
import { findWordById } from '../../japanese/search';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';
import { useTimeContext } from '../Time';
import { db } from './srsdb';
import { MAXIMUM_LEVEL, MINIMUM_LEVEL, SRS_STAGES } from './Stages';

const addWordsToSRS = async (wordIds: string[], now: Date) => {
    const newProgressEntries = wordIds.map((wordId) => ({
        wordId,
        lastReviewed: undefined,
        nextReview: now,
        level: MINIMUM_LEVEL,
    }));
    await db.wordProgress.bulkAdd(newProgressEntries);
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

export const useAddNewWordsToSRS = () => {
    const queryClient = useQueryClient();
    const timeProvider = useTimeContext();

    return useMutation({
        mutationKey: ['addNewWordsToSRS'],
        mutationFn: async (wordIds: string[]) => {
            const now = timeProvider.currentTime();
            await addWordsToSRS(wordIds, now);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['databaseWords'] });
            queryClient.invalidateQueries({ queryKey: ['srsWord'] });
        },
    });
};

export const useReplaceSRSWords = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['replaceSRSWords'],
        mutationFn: async (newWords: readonly WordLearningProgress[]) => {
            await db.transaction('rw', db.wordProgress, async () => {
                await db.wordProgress.clear();
                await db.wordProgress.bulkAdd(newWords);
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['databaseWords'] });
            queryClient.invalidateQueries({ queryKey: ['srsWord'] });
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

const markWordAsReviewed = async (wordId: string, correct: boolean, now: Date) => {
    const word = await db.wordProgress.get({ wordId });
    if (!word) return;

    let level = word.level;

    if (correct) {
        level = Math.min(level + 1, MAXIMUM_LEVEL);
    } else {
        level = Math.max(level - 2, MINIMUM_LEVEL);
    }

    const timeToNextReview = SRS_STAGES[level].waitDuration().asMilliseconds();
    const nextReview = new Date(now.getTime() + timeToNextReview);

    await db.wordProgress.put({
        wordId: word.wordId,
        lastReviewed: now,
        nextReview,
        level,
    });
};

export const useMarkWordsAsReviewedBatch = () => {
    const queryClient = useQueryClient();
    const timeProvider = useTimeContext();

    return useMutation({
        mutationKey: ['markWordsAsReviewedBatch '],
        mutationFn: async (reviews: { wordId: string; correct: boolean }[]) => {
            await db.transaction('rw', db.wordProgress, async () => {
                for (const { wordId, correct } of reviews) {
                    await markWordAsReviewed(wordId, correct, timeProvider.currentTime());
                }
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['databaseWords'] });
            queryClient.invalidateQueries({ queryKey: ['srsWord'] });
        },
    });
};
