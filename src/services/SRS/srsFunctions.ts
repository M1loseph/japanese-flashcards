import { availableWordBags } from '../../japanese';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';
import { shuffleArray } from '../../utils';

export const listWordsToReview = (words?: WordLearningProgress[]) => {
    const now = new Date();
    const wordsToReview = (words ?? []).filter((word) => word.nextReview <= now);
    return wordsToReview.map((w) => w.wordId);
};

interface SRSStatistics {
    buckets: Map<number, number>;
}

export interface UpcomingReviewDay {
    date: Date;
    reviewCount: number;
    hourlyReviewCounts: number[];
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

export const generateUpcomingReviewSchedule = (
    words: readonly WordLearningProgress[],
    now: Date = new Date(),
): UpcomingReviewDay[] => {
    const days = Array.from({ length: 7 }, (_, dayOffset) => ({
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + dayOffset),
        reviewCount: 0,
        hourlyReviewCounts: Array.from({ length: 24 }, () => 0),
    }));
    const daysByDate = new Map(days.map((day) => [day.date.toDateString(), day]));

    for (const word of words) {
        if (word.nextReview <= now) {
            continue;
        }

        const day = daysByDate.get(word.nextReview.toDateString());
        if (!day) {
            continue;
        }

        day.reviewCount += 1;
        day.hourlyReviewCounts[word.nextReview.getHours()] += 1;
    }

    return days;
};

export const selectNewRandomWords = (
    wordsInProgress: WordLearningProgress[],
    count: number,
    preferredWordBags?: string[],
): string[] => {
    const allWords = availableWordBags
        .filter((bag) => !preferredWordBags || preferredWordBags.includes(bag.id))
        .flatMap((bag) => bag.words)
        .map((w) => w.id);

    const wordsInProgressIds = new Set(wordsInProgress.map((w) => w.wordId));

    const newWords = allWords.filter((id) => !wordsInProgressIds.has(id));
    return shuffleArray(newWords).slice(0, count);
};
