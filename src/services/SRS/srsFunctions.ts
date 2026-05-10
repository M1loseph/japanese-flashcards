import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';

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
