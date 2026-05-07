import { type FC, type ReactNode } from 'react';
import dayjs from '../../dayjs';
import { availableWordBags } from '../../japanese';
import { shuffleArray } from '../../utils';
import { SRSContext } from './SRSContext';
import { db } from './srsdb';

interface SRSContextProviderProps {
    children: ReactNode;
}

const REVIEW_INTERVALS = [
    dayjs.duration({ hours: 4 }),
    dayjs.duration({ hours: 8 }),
    dayjs.duration({ days: 1 }),
    dayjs.duration({ days: 2 }),
    dayjs.duration({ days: 7 }),
    dayjs.duration({ days: 14 }),
    dayjs.duration({ months: 1 }),
    dayjs.duration({ months: 2 }),
    dayjs.duration({ months: 4 }),
];

const MINIMUM_LEVEL = 1;
const MAXIMUM_LEVEL = REVIEW_INTERVALS.length;

export const SRSContextProvider: FC<SRSContextProviderProps> = ({ children }) => {
    const listWordsToReview = async () => {
        const now = new Date().getTime();
        const words = await db.wordProgress.where('nextReview').belowOrEqual(now).toArray();
        return words.map((w) => w.wordId);
    };

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
            level: 0,
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
            level = Math.max(level - 1, MINIMUM_LEVEL);
        }

        const now = new Date();
        const timeToNextReview = REVIEW_INTERVALS[level - 1].asMilliseconds();
        const nextReview = new Date(now.getTime() + timeToNextReview);
        await db.wordProgress.put({
            wordId: word.wordId,
            lastReviewed: now,
            nextReview,
            level,
        });
    };

    return (
        <SRSContext.Provider value={{ listWordsToReview, addNewRandomWords, markWordAsReviewed }}>
            {children}
        </SRSContext.Provider>
    );
};
