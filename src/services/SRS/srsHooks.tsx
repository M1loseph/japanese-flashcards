import { useMutation, useQuery } from '@tanstack/react-query';
import { availableWordBags } from '../../japanese';
import { findWordById } from '../../japanese/search';
import { queryClient } from '../../queryClient';
import { shuffleArray } from '../../utils';
import { db } from './srsdb';
import { SRS_STAGES } from './Stages';

const MINIMUM_LEVEL = 0;
const MAXIMUM_LEVEL = SRS_STAGES.length - 1;

const addNewRandomWords = async (count: number, preferredWordBags?: string[]) => {
    const wordsInProgress = (await db.wordProgress.toArray()).map((w) => w.wordId);
    const allWords = availableWordBags
        .filter((bag) => !preferredWordBags || preferredWordBags.includes(bag.name))
        .flatMap((bag) => bag.words)
        .map((w) => w.id);

    const newWords = allWords.filter((id) => !wordsInProgress.includes(id));
    const wordsToAdd = shuffleArray(newWords).slice(0, count);

    const now = new Date();
    const newProgressEntries = wordsToAdd.map((wordId) => ({
        wordId,
        lastReviewed: undefined,
        nextReview: now,
        level: MINIMUM_LEVEL,
    }));
    await db.wordProgress.bulkAdd(newProgressEntries);
};

const markWordAsReviewed = async (wordId: string, correct: boolean) => {
    const word = await db.wordProgress.get({ wordId });
    if (!word) return;

    let level = word.level;

    if (correct) {
        level = Math.min(level + 1, MAXIMUM_LEVEL);
    } else {
        level = Math.max(level - 2, MINIMUM_LEVEL);
    }

    const now = new Date();
    const timeToNextReview = SRS_STAGES[level].waitDuration.asMilliseconds();
    const nextReview = new Date(now.getTime() + timeToNextReview);

    await db.wordProgress.put({
        wordId: word.wordId,
        lastReviewed: now,
        nextReview,
        level,
    });
};

export const useSRSWords = () => {
    return useQuery({
        queryKey: ['databaseWords'],
        queryFn: async () => {
            const words = await db.wordProgress.toArray();
            const orphanIds = words.filter((word) => !findWordById(word.wordId)).map((word) => word.wordId);
            await Promise.all(orphanIds.map((id) => db.wordProgress.delete(id)));
            return words.filter((word) => !orphanIds.includes(word.wordId));
        },
    });
};

export const useAddNewRandomWords = () => {
    return useMutation({
        mutationKey: ['addNewRandomWords'],
        mutationFn: ({ count, preferredWordBags }: { count: number; preferredWordBags?: string[] }) =>
            addNewRandomWords(count, preferredWordBags),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['databaseWords'] });
        },
    });
};

export const useMarkWordAsReviewed = () => {
    return useMutation({
        mutationKey: ['markWordAsReviewed'],
        mutationFn: ({ wordId, correct }: { wordId: string; correct: boolean }) => markWordAsReviewed(wordId, correct),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['databaseWords'] });
        },
    });
};
