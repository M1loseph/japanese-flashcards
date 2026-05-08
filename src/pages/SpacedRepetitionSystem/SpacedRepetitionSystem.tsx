import {
    IconArrowRight,
    IconBolt,
    IconFlame,
    IconListDetails,
    IconPlus,
} from '@tabler/icons-react';
import { useState, type FC } from 'react';
import { SRS_STAGES, useSRSContext } from '../../context/SRSContext';
import { ScrollablePage } from '../common/ScrollablePage';

const HARDCODED_STATS = {
    dayStreak: 14,
    wordsInSRS: 842,
    stages: {
        apprentice: 142,
        guru: 315,
        master: 184,
        enlightened: 96,
        burned: 105,
    },
};

const WORD_COUNT_OPTIONS = [5, 10, 15] as const;

type WordCountOption = (typeof WORD_COUNT_OPTIONS)[number];

export const SpacedRepetitionSystemPage: FC = () => {
    const { wordsToReview, addNewRandomWords, statistics } = useSRSContext();
    const { data: wordsToReviewData } = wordsToReview;
    const [selectedWordCount, setSelectedWordCount] = useState<WordCountOption>(10);

    const handleWordCountSelect = (count: WordCountOption) => {
        setSelectedWordCount(count);
    };

    const handleWordCountKeyDown = (e: React.KeyboardEvent, count: WordCountOption) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedWordCount(count);
        }
    };

    const handleStartReview = () => {
        addNewRandomWords(selectedWordCount);
    };

    const handleStartReviewKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleStartReview();
        }
    };

    const handleConfirmAdd = () => {
        addNewRandomWords(selectedWordCount);
    };

    const handleConfirmAddKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleConfirmAdd();
        }
    };

    const numberOfWordsToReview = wordsToReviewData ? wordsToReviewData.length : 0;

    return (
        <ScrollablePage>
            <p className="text-base-content/70 mb-6">Optimize your memory retention through precision-timed reviews.</p>

            <section aria-label="Review and statistics" className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                <div className="card bg-base-200 lg:col-span-2 border border-base-300 rounded-lg shadow-lg p-4">
                    <div className="card-body gap-4">
                        {numberOfWordsToReview > 0 && (
                            <div>
                                <span className="badge badge-primary gap-1">
                                    <IconBolt size={14} aria-hidden="true" />
                                    Session Ready
                                </span>
                            </div>
                        )}
                        <h2 className="text-4xl font-bold leading-tight">Ready for Review</h2>
                        <p className="text-base-content/70 max-w-sm">
                            {numberOfWordsToReview === 0
                                ? 'No items are due for review right now. Great job keeping up with your studies!'
                                : `You have ${numberOfWordsToReview} items due for review. Keeping your streak active is the key to mastery.`}
                        </p>
                        <div>
                            <button
                                className="btn btn-primary"
                                disabled={numberOfWordsToReview === 0}
                                onClick={handleStartReview}
                                onKeyDown={handleStartReviewKeyDown}
                                aria-label={`Start review session with ${numberOfWordsToReview} items`}
                                tabIndex={0}
                            >
                                Start Review ({numberOfWordsToReview})
                                <IconArrowRight size={18} aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border border-base-300 rounded-lg shadow-lg p-4">
                    <div className="card bg-base-200 flex-1">
                        <div className="card-body p-4 gap-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-sm">Day Streak</span>
                                <IconFlame size={20} className="text-primary" aria-hidden="true" />
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">{HARDCODED_STATS.dayStreak}</span>
                                <span className="text-sm text-base-content/70">days</span>
                            </div>
                            <progress
                                className="progress progress-primary w-full"
                                value={HARDCODED_STATS.dayStreak}
                                max={30}
                                aria-label={`Day streak: ${HARDCODED_STATS.dayStreak} days`}
                            />
                        </div>
                    </div>

                    <div className="card bg-base-200 flex-1">
                        <div className="card-body p-4 gap-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-sm">Words in SRS</span>
                                <IconListDetails size={20} className="text-primary" aria-hidden="true" />
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">{HARDCODED_STATS.wordsInSRS}</span>
                                <span className="text-sm text-base-content/70">vocabulary items</span>
                            </div>
                            <div className="flex gap-1">
                                <span className="w-3 h-3 rounded-full bg-primary" aria-hidden="true" />
                                <span className="w-3 h-3 rounded-full bg-primary" aria-hidden="true" />
                                <span className="w-3 h-3 rounded-full bg-primary" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                aria-label="SRS stages distribution"
                className="mb-8 border border-base-300 rounded-lg shadow-lg p-4"
            >
                <h2 className="text-xl font-bold mb-4">SRS Stages Distribution</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {SRS_STAGES.map((stage, index) => (
                        <div key={stage.label} className="card bg-base-200 p-4 text-center items-center gap-2">
                            <span className="text-primary" aria-hidden="true">
                                {<stage.icon size={24} />}
                            </span>
                            <span className="text-xs uppercase tracking-wide font-semibold text-base-content/70">
                                {stage.label}
                            </span>
                            <span className="text-3xl font-bold">{statistics.data?.buckets.get(index) ?? 0}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section aria-label="Expand vocabulary" className="mb-8 border border-base-300 rounded-lg shadow-lg p-4">
                <div className="card bg-base-200">
                    <div className="card-body p-6 gap-4">
                        <div>
                            <h2 className="text-xl font-bold">Expand Vocabulary</h2>
                            <p className="text-base-content/70 mt-1">
                                Ready for a challenge? Add new vocabulary items to your SRS queue.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between w-full">
                            <div className="flex items-center gap-2">
                                {WORD_COUNT_OPTIONS.map((count) => (
                                    <button
                                        key={count}
                                        className={`btn ${selectedWordCount === count ? 'btn-primary' : ''}`}
                                        onClick={() => handleWordCountSelect(count)}
                                        onKeyDown={(e) => handleWordCountKeyDown(e, count)}
                                        aria-pressed={selectedWordCount === count}
                                        aria-label={`Select ${count} words`}
                                        tabIndex={0}
                                    >
                                        {count} Words
                                    </button>
                                ))}
                            </div>
                            <button
                                className="btn btn-primary mt-6 md:mt-0"
                                onClick={handleConfirmAdd}
                                onKeyDown={handleConfirmAddKeyDown}
                                aria-label={`Confirm and add ${selectedWordCount} words to SRS queue`}
                                tabIndex={0}
                            >
                                <IconPlus size={16} aria-hidden="true" />
                                Confirm &amp; Add
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollablePage>
    );
};
