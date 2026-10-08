import { describe, expect, it } from 'vitest';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';
import { SRSReviewReadModel } from './SRSReviewReadModel';
import { generateUpcomingReviewSchedule, listWordsToReview } from './srsFunctions';

const makeWord = (nextReview: Date): WordLearningProgress => ({
    wordId: nextReview.toISOString(),
    nextReview,
    level: 1,
});

describe('SRSReviewReadModel', () => {
    it('rounds to the nearest local hour without changing the source record', () => {
        const beforeHalfHour = makeWord(new Date(2026, 8, 20, 14, 29));
        const atHalfHour = makeWord(new Date(2026, 8, 20, 14, 30));
        const storedReviewTimes = [beforeHalfHour, atHalfHour].map((word) => word.nextReview.getTime());
        const beforeHalfHourReadModel = new SRSReviewReadModel(beforeHalfHour);
        const atHalfHourReadModel = new SRSReviewReadModel(atHalfHour);

        expect(beforeHalfHourReadModel.reviewAt).toEqual(new Date(2026, 8, 20, 14, 0));
        expect(atHalfHourReadModel.reviewAt).toEqual(new Date(2026, 8, 20, 15, 0));
        expect(beforeHalfHourReadModel.toEntity()).toEqual(beforeHalfHour);
        expect(atHalfHourReadModel.toEntity()).toEqual(atHalfHour);
        expect([beforeHalfHour, atHalfHour].map((word) => word.nextReview.getTime())).toEqual(storedReviewTimes);
    });
});

describe('listWordsToReview', () => {
    it('uses the same rounded review time as the schedule', () => {
        const reviews = [
            new Date(2026, 8, 20, 14, 29),
            new Date(2026, 8, 20, 14, 30),
            new Date(2026, 8, 20, 14, 31),
        ].map((nextReview) => new SRSReviewReadModel(makeWord(nextReview)));

        expect(listWordsToReview(reviews, new Date(2026, 8, 20, 14, 59))).toEqual([reviews[0].wordId]);
        expect(listWordsToReview(reviews, new Date(2026, 8, 20, 15, 0))).toEqual(
            reviews.map((review) => review.wordId),
        );
    });
});

describe('generateUpcomingReviewSchedule', () => {
    it('groups future reviews by their rounded local calendar day and hour', () => {
        const now = new Date(2026, 8, 20, 14, 30);
        const reviews = [
            new Date(2026, 8, 20, 14, 29),
            new Date(2026, 8, 20, 14, 30),
            new Date(2026, 8, 20, 15, 0),
            new Date(2026, 8, 20, 18, 42),
            new Date(2026, 8, 26, 23, 0),
            new Date(2026, 8, 27, 0, 0),
        ].map((nextReview) => new SRSReviewReadModel(makeWord(nextReview)));
        const schedule = generateUpcomingReviewSchedule(reviews, now);

        expect(schedule.map((day) => day.reviewCount)).toEqual([3, 0, 0, 0, 0, 0, 1]);
        expect(schedule[0].hourlyReviewCounts[15]).toBe(2);
        expect(schedule[0].hourlyReviewCounts[19]).toBe(1);
        expect(schedule[6].hourlyReviewCounts[23]).toBe(1);
    });

    it('moves a rounded review into the next local day when needed', () => {
        const review = new SRSReviewReadModel(makeWord(new Date(2026, 8, 20, 23, 30)));
        const schedule = generateUpcomingReviewSchedule([review], new Date(2026, 8, 20, 23, 0));

        expect(schedule[0].reviewCount).toBe(0);
        expect(schedule[1].reviewCount).toBe(1);
        expect(schedule[1].hourlyReviewCounts[0]).toBe(1);
    });
});
