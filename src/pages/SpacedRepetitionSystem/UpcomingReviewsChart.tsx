import { IconArrowLeft } from '@tabler/icons-react';
import { useState, type FC } from 'react';
import { Card } from '../../components/Card';
import { generateUpcomingReviewSchedule } from '../../services/SRS';
import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';

interface UpcomingReviewsChartProps {
    srsWords?: readonly WordLearningProgress[];
    chartStartDate: Date;
}

interface ReviewBarProps {
    label: string;
    reviewCount: number;
    largestReviewCount: number;
    onClick?: () => void;
    ariaLabel?: string;
}

const getBarWidth = (reviewCount: number, largestReviewCount: number) => {
    if (largestReviewCount === 0) {
        return '0%';
    }

    return `${(reviewCount / largestReviewCount) * 100}%`;
};

const ReviewBar: FC<ReviewBarProps> = ({ label, reviewCount, largestReviewCount, onClick, ariaLabel }) => {
    const content = (
        <>
            <span className="text-left font-medium">{label}</span>
            <span className="h-5 overflow-hidden rounded-sm" aria-hidden="true">
                <span
                    className="block h-full rounded-sm bg-primary transition-[width] duration-200"
                    style={{ width: getBarWidth(reviewCount, largestReviewCount) }}
                />
            </span>
            <span className="text-right font-semibold tabular-nums">{reviewCount}</span>
        </>
    );

    if (!onClick) {
        return <div className="grid grid-cols-[3rem_minmax(0,1fr)_2.5rem] items-center gap-3 p-1 pr-2">{content}</div>;
    }

    return (
        <button
            type="button"
            className="grid w-full cursor-pointer grid-cols-[3rem_minmax(0,1fr)_2.5rem] items-center gap-3 rounded-sm p-1 pr-2 text-left transition-colors hover:bg-base-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {content}
        </button>
    );
};

const getWeekdayLabel = (date: Date) => new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);

export const UpcomingReviewsChart: FC<UpcomingReviewsChartProps> = ({ srsWords, chartStartDate }) => {
    const [selectedDayIndex, setSelectedDayIndex] = useState<number>();
    const schedule = srsWords ? generateUpcomingReviewSchedule(srsWords, chartStartDate) : undefined;
    const selectedDay = selectedDayIndex === undefined ? undefined : schedule?.[selectedDayIndex];
    const hourlyReviews =
        selectedDay?.hourlyReviewCounts.flatMap((reviewCount, hour) =>
            reviewCount === 0 ? [] : [{ hour, reviewCount }],
        ) ?? [];

    const handleSelectDay = (dayIndex: number) => {
        setSelectedDayIndex(dayIndex);
    };

    const handleBackToOverview = () => {
        setSelectedDayIndex(undefined);
    };

    const dailyLargestReviewCount = Math.max(...(schedule?.map((day) => day.reviewCount) ?? [0]));
    const hourlyLargestReviewCount = selectedDay ? Math.max(...selectedDay.hourlyReviewCounts) : 0;

    return (
        <section aria-label="Upcoming reviews" className="mb-8">
            <Card>
                <div className="card-body h-[19.5rem] gap-4 overflow-hidden p-6">
                    {!schedule ? (
                        <div className="flex items-center gap-3" role="status">
                            <span className="loading loading-spinner loading-sm" aria-hidden="true" />
                            <span className="text-base-content/70">Loading upcoming reviews</span>
                        </div>
                    ) : selectedDay ? (
                        <>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className="btn btn-ghost btn-sm"
                                    onClick={handleBackToOverview}
                                    aria-label="Back to 7 days"
                                >
                                    <IconArrowLeft size={18} aria-hidden="true" />
                                    <h2 className="text-xl ml-2 font-bold">{getWeekdayLabel(selectedDay.date)}</h2>
                                </button>
                            </div>
                            <div className="min-h-0 flex-1 space-y-1 overflow-y-auto">
                                {hourlyReviews.map(({ hour, reviewCount }) => (
                                    <ReviewBar
                                        key={hour}
                                        label={`${hour.toString().padStart(2, '0')}:00`}
                                        reviewCount={reviewCount}
                                        largestReviewCount={hourlyLargestReviewCount}
                                        ariaLabel={`${hour.toString().padStart(2, '0')}:00: ${reviewCount} upcoming reviews`}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className="text-xl font-bold">Upcoming Reviews</h2>
                            <div className="space-y-1">
                                {schedule.map((day, index) => (
                                    <ReviewBar
                                        key={day.date.toISOString()}
                                        label={getWeekdayLabel(day.date)}
                                        reviewCount={day.reviewCount}
                                        largestReviewCount={dailyLargestReviewCount}
                                        onClick={day.reviewCount > 0 ? () => handleSelectDay(index) : undefined}
                                        ariaLabel={
                                            day.reviewCount > 0
                                                ? `${day.date.toLocaleDateString()}: ${day.reviewCount} upcoming reviews. Show hourly schedule.`
                                                : undefined
                                        }
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Card>
        </section>
    );
};
