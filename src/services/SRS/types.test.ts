import { describe, expect, it } from 'vitest';
import { WordLearningProgress, WordLearningProgressEntity } from './types';

const makeWord = (nextReview: Date): WordLearningProgressEntity => ({
    wordId: nextReview.toISOString(),
    nextReview,
    level: 1,
});

describe('WordLearningProgress', () => {
    it('rounds to the nearest local hour without changing the source record', () => {
        const beforeHalfHour = makeWord(new Date(2026, 8, 20, 14, 29));
        const atHalfHour = makeWord(new Date(2026, 8, 20, 14, 30));
        const storedReviewTimes = [beforeHalfHour, atHalfHour].map((word) => word.nextReview.getTime());
        const beforeHalfHourReadModel = new WordLearningProgress(beforeHalfHour);
        const atHalfHourReadModel = new WordLearningProgress(atHalfHour);

        expect(beforeHalfHourReadModel.reviewAt).toEqual(new Date(2026, 8, 20, 14, 0));
        expect(atHalfHourReadModel.reviewAt).toEqual(new Date(2026, 8, 20, 15, 0));
        expect(beforeHalfHourReadModel.toEntity()).toEqual(beforeHalfHour);
        expect(atHalfHourReadModel.toEntity()).toEqual(atHalfHour);
        expect([beforeHalfHour, atHalfHour].map((word) => word.nextReview.getTime())).toEqual(storedReviewTimes);
    });

    it('clears seconds and milliseconds and rolls over to the next local day', () => {
        const nextReviewDates = [
            new Date(2026, 8, 20, 14, 29, 59, 999),
            new Date(2026, 8, 20, 14, 30, 0, 1),
            new Date(2026, 8, 20, 23, 30, 59, 999),
        ];
        const reviews = nextReviewDates.map((nextReview) => new WordLearningProgress(makeWord(nextReview)));

        expect(reviews.map((review) => review.reviewAt)).toEqual([
            new Date(2026, 8, 20, 14, 0),
            new Date(2026, 8, 20, 15, 0),
            new Date(2026, 8, 21, 0, 0),
        ]);
        expect(nextReviewDates).toEqual([
            new Date(2026, 8, 20, 14, 29, 59, 999),
            new Date(2026, 8, 20, 14, 30, 0, 1),
            new Date(2026, 8, 20, 23, 30, 59, 999),
        ]);
    });

    it('copies incoming dates in the constructor', () => {
        const originalNextReview = new Date(2026, 8, 20, 14, 29, 45, 123);
        const originalLastReviewed = new Date(2026, 8, 18, 10, 11, 12, 13);
        const expectedNextReview = new Date(originalNextReview.getTime());
        const expectedLastReviewed = new Date(originalLastReviewed.getTime());
        const source = {
            ...makeWord(originalNextReview),
            lastReviewed: originalLastReviewed,
        };
        const progress = new WordLearningProgress(source);

        source.nextReview.setTime(0);
        source.lastReviewed.setTime(0);

        expect(progress.reviewAt).toEqual(new Date(2026, 8, 20, 14, 0));
        expect(progress.lastReviewed).toEqual(expectedLastReviewed);
        expect(progress.toEntity().nextReview).toEqual(expectedNextReview);
    });

    it('maps all fields to entity and exported models', () => {
        const source = {
            ...makeWord(new Date(2026, 8, 20, 14, 30)),
            lastReviewed: new Date(2026, 8, 18, 10, 0),
        };
        const progress = new WordLearningProgress(source);

        expect(progress.toEntity()).toEqual(source);
        expect(progress.toExportedSRSWordModel()).toEqual(source);
    });

    it('keeps an undefined lastReviewed in the entity and omits it from the exported model', () => {
        const progress = new WordLearningProgress(makeWord(new Date(2026, 8, 20, 14, 30)));
        const entity = progress.toEntity();
        const exportedModel = progress.toExportedSRSWordModel();

        expect(entity).toHaveProperty('lastReviewed', undefined);
        expect(exportedModel).not.toHaveProperty('lastReviewed');
    });

    it('does not expose mutable dates through getters or conversion methods', () => {
        const originalNextReview = new Date(2026, 8, 20, 14, 29, 30, 456);
        const originalLastReviewed = new Date(2026, 8, 18, 10, 11, 12, 13);
        const source = {
            ...makeWord(originalNextReview),
            lastReviewed: originalLastReviewed,
        };
        const progress = new WordLearningProgress(source);
        const lastReviewed = progress.lastReviewed;
        const reviewAt = progress.reviewAt;
        const entity = progress.toEntity();
        const exportedModel = progress.toExportedSRSWordModel();

        expect(lastReviewed).not.toBe(originalLastReviewed);
        expect(entity.lastReviewed).not.toBe(originalLastReviewed);
        expect(entity.nextReview).not.toBe(originalNextReview);
        expect(exportedModel.lastReviewed).not.toBe(originalLastReviewed);
        expect(exportedModel.nextReview).not.toBe(originalNextReview);

        lastReviewed?.setTime(0);
        reviewAt.setTime(0);
        entity.lastReviewed?.setTime(0);
        entity.nextReview.setTime(0);

        expect(exportedModel.lastReviewed).toEqual(originalLastReviewed);
        expect(exportedModel.nextReview).toEqual(originalNextReview);

        exportedModel.lastReviewed?.setTime(0);
        exportedModel.nextReview.setTime(0);

        expect(progress.lastReviewed).toEqual(originalLastReviewed);
        expect(progress.reviewAt).toEqual(new Date(2026, 8, 20, 14, 0));
        expect(progress.toEntity().lastReviewed).toEqual(originalLastReviewed);
        expect(progress.toEntity().nextReview).toEqual(originalNextReview);
        expect(progress.toExportedSRSWordModel().lastReviewed).toEqual(originalLastReviewed);
        expect(progress.toExportedSRSWordModel().nextReview).toEqual(originalNextReview);
    });
});