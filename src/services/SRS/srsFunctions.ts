import { availableWordBags } from '../../japanese';
import { shuffleArray } from '../../utils';
import type { SRSReviewReadModel } from './SRSReviewReadModel';

export const listWordsToReview = (reviews?: readonly SRSReviewReadModel[], now: Date = new Date()) => {
    const wordsToReview = (reviews ?? []).filter((review) => review.reviewAt <= now);
    return wordsToReview.map((review) => review.wordId);
};

interface SRSStatistics {
    buckets: Map<number, number>;
}

export interface UpcomingReviewDay {
    date: Date;
    reviewCount: number;
    hourlyReviewCounts: number[];
}

export const generateStatistics = (words?: readonly Pick<SRSReviewReadModel, 'level'>[]): SRSStatistics => {
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
    reviews: readonly SRSReviewReadModel[],
    now: Date = new Date(),
): UpcomingReviewDay[] => {
    const days = Array.from({ length: 7 }, (_, dayOffset) => ({
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + dayOffset),
        reviewCount: 0,
        hourlyReviewCounts: Array.from({ length: 24 }, () => 0),
    }));
    const daysByDate = new Map(days.map((day) => [day.date.toDateString(), day]));

    for (const review of reviews) {
        const reviewAt = review.reviewAt;
        if (reviewAt <= now) {
            continue;
        }

        const day = daysByDate.get(reviewAt.toDateString());
        if (!day) {
            continue;
        }

        day.reviewCount += 1;
        day.hourlyReviewCounts[reviewAt.getHours()] += 1;
    }

    return days;
};

export const selectNewRandomWords = (
    wordsInProgress: readonly Pick<SRSReviewReadModel, 'wordId'>[],
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
