import { describe, expect, it } from 'vitest';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';
import { generateUpcomingReviewSchedule } from './srsFunctions';

const makeWord = (nextReview: Date): WordLearningProgress => ({
    wordId: nextReview.toISOString(),
    nextReview,
    level: 1,
});

describe('generateUpcomingReviewSchedule', () => {
    it('groups future reviews by local calendar day and hour', () => {
        const now = new Date(2026, 8, 20, 14, 30);
        const schedule = generateUpcomingReviewSchedule(
            [
                makeWord(new Date(2026, 8, 20, 14, 29)),
                makeWord(new Date(2026, 8, 20, 14, 30)),
                makeWord(new Date(2026, 8, 20, 15, 0)),
                makeWord(new Date(2026, 8, 20, 18, 42)),
                makeWord(new Date(2026, 8, 26, 23, 0)),
                makeWord(new Date(2026, 8, 27, 0, 0)),
            ],
            now,
        );

        expect(schedule.map((day) => day.reviewCount)).toEqual([2, 0, 0, 0, 0, 0, 1]);
        expect(schedule[0].hourlyReviewCounts[15]).toBe(1);
        expect(schedule[0].hourlyReviewCounts[18]).toBe(1);
        expect(schedule[6].hourlyReviewCounts[23]).toBe(1);
    });
});
