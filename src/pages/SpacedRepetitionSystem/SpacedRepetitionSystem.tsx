import { IconArrowRight, IconBolt, IconFlame, IconListDetails, IconPlus } from '@tabler/icons-react';
import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExistingGameAlert } from '../../components/ExistingGameAlert';
import { Toast } from '../../components/Toast';
import { availableWordBags } from '../../japanese';
import { useGameContext } from '../../services/GameContext';
import { useGameSettingsContext } from '../../services/GameStateContext';
import {
    generateStatistics,
    listWordsToReview,
    SRS_STAGES,
    useAddNewRandomWords,
    useSRSWords,
} from '../../services/SRS';
import { useStreak } from '../../services/StreakContext';
import { ScrollablePage } from '../common/ScrollablePage';

const WORD_COUNT_OPTIONS = [5, 10, 15] as const;

type WordCountOption = (typeof WORD_COUNT_OPTIONS)[number];

export const SpacedRepetitionSystemPage: FC = () => {
    const navigate = useNavigate();
    const { createNewGame } = useGameContext();
    const { selectedLanguage } = useGameSettingsContext();
    const { data: srsWords } = useSRSWords();
    const wordsToReview = listWordsToReview(srsWords);
    const statistics = generateStatistics(srsWords);
    const { mutateAsync: addNewRandomWords } = useAddNewRandomWords();
    const [selectedWordCount, setSelectedWordCount] = useState<WordCountOption>(10);
    const { currentStreak } = useStreak();
    const [selectedWordBag, setSelectedWordBag] = useState<string | undefined>();

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'warning'>('success');

    const wordBagsWithNewWords = availableWordBags.filter((bag) => {
        const bagWordIds = bag.words.map((w) => w.id);
        const wordsInProgressIds = srsWords ? srsWords.map((w) => w.wordId) : [];
        return bagWordIds.some((id) => !wordsInProgressIds.includes(id));
    });

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
        const title = `Review Session - ${wordsToReview.length} items`;

        createNewGame(wordsToReview, selectedLanguage, title, 'srs');
        navigate('/game/shuffle');
    };

    const handleStartReviewKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleStartReview();
        }
    };

    const handleConfirmAdd = async () => {
        const preferredWordBags = selectedWordBag ? [selectedWordBag] : undefined;
        const numberOfAddedWords = await addNewRandomWords({ count: selectedWordCount, preferredWordBags });
        if (numberOfAddedWords > 0) {
            if (selectedWordBag) {
                const bagName = availableWordBags.find((bag) => bag.id === selectedWordBag)?.name || 'Unknown Bag';
                setToastMessage(`${numberOfAddedWords} new words from "${bagName}" added successfully!`);
            } else {
                setToastMessage(`${numberOfAddedWords} new words added successfully!`);
            }
            setToastType('success');
            setShowToast(true);
        } else {
            setToastMessage('No new words were added.');
            setToastType('warning');
            setShowToast(true);
        }
    };

    const handleConfirmAddKeyDown = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            await handleConfirmAdd();
        }
    };

    const handleWordBagSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        if (selected === '') {
            setSelectedWordBag(undefined);
            return;
        }
        setSelectedWordBag(selected);
    };

    const numberOfWordsToReview = wordsToReview ? wordsToReview.length : 0;
    const totalWordsInSRS = Array.from(statistics.buckets.values()).reduce((sum, count) => sum + count, 0);
    const newWordsInStage0 = statistics.buckets.get(0);
    const disableAddFunctionality = (newWordsInStage0 ?? 0) > 0 && numberOfWordsToReview > 0;

    return (
        <ScrollablePage>
            <ExistingGameAlert />

            <Toast message={toastMessage} type={toastType} open={showToast} handleClose={() => setShowToast(false)} />

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
                                <span className="text-4xl font-bold">{currentStreak}</span>
                                <span className="text-sm text-base-content/70">days</span>
                            </div>
                            <progress
                                className="progress progress-primary w-full"
                                value={currentStreak}
                                max={30}
                                aria-label={`Day streak: ${currentStreak} days`}
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
                                <span className="text-4xl font-bold">{totalWordsInSRS}</span>
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

            <section aria-label="Expand vocabulary" className="mb-8 border border-base-300 rounded-lg shadow-lg p-4">
                <div className="card bg-base-200">
                    <div className="card-body p-6 gap-4">
                        <div>
                            <h2 className="text-xl font-bold">Expand Vocabulary</h2>
                            <p className="text-base-content/70 mt-1">
                                {disableAddFunctionality
                                    ? 'You have new words waiting in the first stage. Review them before adding more to keep your learning focused.'
                                    : 'Ready for a challenge? Add new vocabulary items to your SRS queue.'}
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
                            <div className="flex items-center gap-2">
                                {WORD_COUNT_OPTIONS.map((count) => (
                                    <button
                                        key={count}
                                        disabled={disableAddFunctionality}
                                        className={`btn ${selectedWordCount === count ? 'btn-primary' : ''}`}
                                        onClick={() => handleWordCountSelect(count)}
                                        onKeyDown={(e) => handleWordCountKeyDown(e, count)}
                                        aria-pressed={selectedWordCount === count}
                                        aria-label={`Select ${count} words`}
                                    >
                                        {count} Words
                                    </button>
                                ))}
                            </div>
                            <select
                                value={selectedWordBag}
                                disabled={disableAddFunctionality}
                                className="select w-full lg:flex-1"
                                onChange={handleWordBagSelect}
                            >
                                <option selected />
                                {wordBagsWithNewWords.map((bag) => (
                                    <option key={bag.id} value={bag.id}>
                                        {bag.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            className="btn btn-primary mt-6 lg:max-w-md lg:self-end"
                            onClick={handleConfirmAdd}
                            onKeyDown={handleConfirmAddKeyDown}
                            disabled={disableAddFunctionality}
                            aria-label={`Confirm and add ${selectedWordCount} words to SRS queue`}
                        >
                            <IconPlus size={16} aria-hidden="true" />
                            Confirm &amp; Add
                        </button>
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
                                <stage.icon size={24} />
                            </span>
                            <span className="text-xs uppercase tracking-wide font-semibold text-base-content/70">
                                {stage.label}
                            </span>
                            <span className="text-3xl font-bold">{statistics.buckets.get(index) ?? 0}</span>
                        </div>
                    ))}
                </div>
            </section>
        </ScrollablePage>
    );
};
