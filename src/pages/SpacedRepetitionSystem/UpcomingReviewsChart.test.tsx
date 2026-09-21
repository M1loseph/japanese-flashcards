import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { UpcomingReviewDay } from '../../services/SRS';
import { generateUpcomingReviewSchedule } from '../../services/SRS';
import { UpcomingReviewsChart } from './UpcomingReviewsChart';

vi.mock('../../services/SRS', () => ({
    generateUpcomingReviewSchedule: vi.fn(),
}));

const createDay = (dayOffset: number, reviewCount: number, hourlyReviewCounts: number[]): UpcomingReviewDay => ({
    date: new Date(2026, 8, 21 + dayOffset, 12),
    reviewCount,
    hourlyReviewCounts,
});

const createEmptyHourlyReviewCounts = () => Array<number>(24).fill(0);

const renderChart = () => render(<UpcomingReviewsChart srsWords={[]} chartStartDate={new Date(2026, 8, 21, 12)} />);

describe('UpcomingReviewsChart', () => {
    beforeEach(() => {
        vi.mocked(generateUpcomingReviewSchedule).mockReset();
    });

    it('keeps zero-review days visible but non-interactive', () => {
        vi.mocked(generateUpcomingReviewSchedule).mockReturnValue(
            Array.from({ length: 7 }, (_, dayOffset) => createDay(dayOffset, 0, createEmptyHourlyReviewCounts())),
        );

        renderChart();

        expect(screen.getByText('Mon').closest('button')).toBeNull();
        expect(screen.queryByRole('button', { name: /show hourly schedule/i })).not.toBeInTheDocument();
        expect(screen.getByLabelText('Upcoming reviews').querySelector('.card-body')).toHaveClass('h-[19.5rem]');
    });

    it('shows only hours with scheduled reviews', async () => {
        const user = userEvent.setup();
        const hourlyReviewCounts = createEmptyHourlyReviewCounts();
        hourlyReviewCounts[9] = 2;
        hourlyReviewCounts[17] = 1;

        vi.mocked(generateUpcomingReviewSchedule).mockReturnValue([
            createDay(0, 3, hourlyReviewCounts),
            ...Array.from({ length: 6 }, (_, dayOffset) =>
                createDay(dayOffset + 1, 0, createEmptyHourlyReviewCounts()),
            ),
        ]);

        renderChart();

        await user.click(screen.getByRole('button', { name: /show hourly schedule/i }));

        expect(screen.getByText('09:00')).toBeInTheDocument();
        expect(screen.getByText('17:00')).toBeInTheDocument();
        expect(screen.queryByText('00:00')).not.toBeInTheDocument();
        expect(screen.queryByText('23:00')).not.toBeInTheDocument();
        expect(screen.getByLabelText('Upcoming reviews').querySelector('.card-body')).toHaveClass('h-[19.5rem]');
    });
});
