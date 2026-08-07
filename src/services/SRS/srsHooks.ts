import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import dayjs from '../../dayjs';
import { availableWordBags } from '../../japanese';
import { findWordById } from '../../japanese/search';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';
import { shuffleArray } from '../../utils';
import { useTimeContext } from '../Time';
import { db } from './srsdb';
import { MAXIMUM_LEVEL, MINIMUM_LEVEL, SRS_STAGES } from './Stages';

const addNewRandomWords = async (count: number, now: Date, preferredWordBags?: string[]): Promise<number> => {
    const wordsInProgress = (await db.wordProgress.toArray()).map((w) => w.wordId);
    const allWords = availableWordBags
        .filter((bag) => !preferredWordBags || preferredWordBags.includes(bag.id))
        .flatMap((bag) => bag.words)
        .map((w) => w.id);

    const newWords = allWords.filter((id) => !wordsInProgress.includes(id));
    const wordsToAdd = shuffleArray(newWords).slice(0, count);
    return addWordsToSRS(wordsToAdd, now);
};

export const addWordsToSRS = async (wordIds: string[], now: Date) => {
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

export const useAddNewRandomWords = () => {
    const queryClient = useQueryClient();
    const timeProvider = useTimeContext();

    return useMutation({
        mutationKey: ['addNewRandomWords'],
        mutationFn: ({ count, preferredWordBags }: { count: number; preferredWordBags?: string[] }) =>
            addNewRandomWords(count, timeProvider.currentTime(), preferredWordBags),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['databaseWords'] });
        },
    });
};

export const useReplaceSRSWords = () => {
    const queryClient = useQueryClient();
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

const markWordAsReviewed = async (wordId: string, correct: boolean, now: Date) => {
    const word = await db.wordProgress.get({ wordId });
    if (!word) return;

    let level = word.level;

    if (correct) {
        level = Math.min(level + 1, MAXIMUM_LEVEL);
    } else {
        level = Math.max(level - 2, MINIMUM_LEVEL);
    }

    const timeToNextReview = SRS_STAGES[level].waitDuration.asMilliseconds();
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
