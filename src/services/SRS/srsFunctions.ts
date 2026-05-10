import { queryClient } from '../../queryClient';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';
import { db } from './srsdb';
import { MAXIMUM_LEVEL, MINIMUM_LEVEL, SRS_STAGES } from './Stages';

export const listWordsToReview = (words?: WordLearningProgress[]) => {
    const now = new Date();
    const wordsToReview = (words ?? []).filter((word) => word.nextReview <= now);
    return wordsToReview.map((w) => w.wordId);
};

interface SRSStatistics {
    buckets: Map<number, number>;
}

export const generateStatistics = (words?: WordLearningProgress[]): SRSStatistics => {
    if (!words) {
        return { buckets: new Map() };
    }
    const buckets = words.reduce((acc, word) => {
        const level = word.level;
        acc.set(level, (acc.get(level) || 0) + 1);
        return acc;
    }, new Map<number, number>());
    return { buckets };
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

export const markWordsAsReviewedBatch = async (reviews: { wordId: string; correct: boolean }[]) => {
    await db.transaction('rw', db.wordProgress, async () => {
        for (const { wordId, correct } of reviews) {
            await markWordAsReviewed(wordId, correct);
        }
    });
    queryClient.invalidateQueries({ queryKey: ['databaseWords'] });
};
