import { describe, expect, it, vi } from 'vitest';
import dayjs from '../../dayjs';
import { createSRSStages } from './Stages';

describe('SRS stages', () => {
    it.each([
        [0, dayjs.duration({ hours: 4 })],
        [1, dayjs.duration({ hours: 4 })],
        [2, dayjs.duration({ hours: 8 })],
        [3, dayjs.duration({ days: 1 })],
        [4, dayjs.duration({ days: 2 })],
        [5, dayjs.duration({ days: 7 })],
        [6, dayjs.duration({ days: 14 })],
        [7, dayjs.duration({ months: 1 })],
        [8, dayjs.duration({ months: 4 })],
    ] as const)('uses the expected wait duration for stage %i', (stageIndex, expectedDuration) => {
        const stages = createSRSStages(() => 0);

        expect(stages[stageIndex].waitDuration()).toEqual(expectedDuration);
    });

    it('uses an 8-month duration for Sage when the random generator returns 0', () => {
        const randomGenerator = vi.fn(() => 0);
        const stages = createSRSStages(randomGenerator);

        expect(stages[9].waitDuration().asMilliseconds()).toBe(dayjs.duration({ months: 8 }).asMilliseconds());
        expect(randomGenerator).toHaveBeenCalledOnce();
    });

    it('uses a 9-month duration for Sage when the random generator returns 0.5', () => {
        const randomGenerator = vi.fn(() => 0.5);
        const stages = createSRSStages(randomGenerator);
        const expectedDuration = dayjs.duration({ months: 8 }).add(dayjs.duration({ days: 30 }));

        expect(stages[9].waitDuration().asMilliseconds()).toBe(expectedDuration.asMilliseconds());
        expect(expectedDuration.asMonths()).toBeCloseTo(9, 1);
        expect(randomGenerator).toHaveBeenCalledOnce();
    });
});
