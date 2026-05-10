import { useMutation, useQuery } from '@tanstack/react-query';
import { availableWordBags } from '../../japanese';
import { findWordById } from '../../japanese/search';
import { queryClient } from '../../queryClient';
import { shuffleArray } from '../../utils';
import { db } from './srsdb';
import { MINIMUM_LEVEL } from './Stages';

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
