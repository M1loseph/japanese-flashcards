import { useMemo, type FC } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useGameContext } from '../context/GameContext';
import { shuffleArrayInPlace } from '../utils.ts';
import { FixedSizePage } from './common/FixedSizePage.tsx';
import { IconHome, IconRepeat } from '@tabler/icons-react';
import { PaperPlaneIcon } from '../assets/PaperPlaneIcon.tsx';

interface SessionStats {
    totalCards: number;
    accuracy: number;
    accuracyLabel: 'High' | 'Medium' | 'Low';
    accuracyColor: 'text-success' | 'text-warning' | 'text-error';
    elapsedTime: string;
}

const SummaryPage: FC = () => {
    const navigate = useNavigate();
    const { gameState, setGameState, clearGame } = useGameContext();

    const wrongAnswers = useMemo(() => {
        if (!gameState) return [];
        return gameState.flashcards.filter((card) => card.answered && !card.correct);
    }, [gameState]);

    const stats: SessionStats = useMemo(() => {
        if (!gameState || gameState.type !== 'finished') {
            return {
                totalCards: 0,
                accuracy: 0,
                accuracyLabel: 'High',
                accuracyColor: 'text-success',
                elapsedTime: '',
            };
        }

        const totalCards = gameState.flashcards.length;
        const correctCards = gameState.flashcards.filter((card) => card.answered && card.correct).length;
        const accuracy = totalCards > 0 ? Math.round((correctCards / totalCards) * 100) : 0;

        const accuracyLabel = accuracy >= 90 ? 'High' : accuracy >= 70 ? 'Medium' : 'Low';
        const accuracyColor = accuracy >= 90 ? 'text-success' : accuracy >= 70 ? 'text-warning' : 'text-error';

        const elapsedMs = gameState.gameEndTimeMs - gameState.gameStartTimeMs;
        const totalSeconds = Math.floor(elapsedMs / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const elapsedTime = (() => {
            if (hours > 0) {
                return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
            return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        })();

        return { totalCards, accuracy, accuracyLabel, accuracyColor, elapsedTime };
    }, [gameState]);

    if (!gameState) {
        return <Navigate to="/" replace />;
    }

    if (gameState.type !== 'finished') {
        return <Navigate to="/game/shuffle" replace />;
    }

    const prepareSetForRepeat = () => {
        const wrongAnswers = gameState.flashcards.filter((card) => card.answered && !card.correct);

        const newFlashcards = wrongAnswers.map((card) => ({ ...card, answered: false }));
        shuffleArrayInPlace(newFlashcards);

        setGameState({
            version: gameState.version,
            type: 'in-progress',
            selectedLanguage: gameState.selectedLanguage,
            initialWordBags: gameState.initialWordBags,
            gameStartTimeMs: Date.now(),
            flashcards: newFlashcards,
            currentFlashcardIndex: 0,
        });
        navigate('/game/shuffle');
    };

    const handleFinish = () => {
        clearGame();
        navigate('/');
    };

    const handleHomeNavigation = () => {
        if (stats.accuracy === 100) {
            clearGame();
        }
    };

    const hasMistakes = wrongAnswers.length > 0;

    return (
        <FixedSizePage preHomeNavigationHook={handleHomeNavigation}>
            <div className="h-full flex flex-col items-center justify-center px-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-base-content/50 mb-6">
                    Session Results
                </p>

                <div className="relative h-[12rem] aspect-square mb-8">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-400 to-sky-200 shadow-lg rotate-6" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-400 to-sky-100 shadow-xl flex items-center justify-center">
                        <PaperPlaneIcon className="w-20 h-20 drop-shadow-md -rotate-12" aria-hidden="true" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-base-content mb-1">Deck Mastered!</h2>
                <p className="text-lg text-success font-medium mb-8">おめでとう！(Congratulations!)</p>

                <div className="flex w-full rounded-xl border border-base-300 bg-base-200/50 divide-x divide-base-300 mb-10">
                    <div className="flex-1 flex flex-col items-center py-4 gap-0.5">
                        <span className="text-xs font-semibold tracking-wider uppercase text-base-content/50">
                            Cards
                        </span>
                        <span className="text-2xl font-bold text-base-content">{stats.totalCards}</span>
                    </div>

                    <div className="flex-1 flex flex-col items-center py-4 gap-0.5">
                        <span className="text-xs font-semibold tracking-wider uppercase text-base-content/50">
                            Accuracy
                        </span>
                        <span className="text-2xl font-bold text-base-content">{stats.accuracy}%</span>
                        <span className={`text-sm font-medium ${stats.accuracyColor}`}>{stats.accuracyLabel}</span>
                    </div>

                    <div className="flex-1 flex flex-col items-center py-4 gap-0.5">
                        <span className="text-xs font-semibold tracking-wider uppercase text-base-content/50">
                            Time
                        </span>
                        <span className="text-2xl font-bold text-base-content">{stats.elapsedTime}</span>
                    </div>
                </div>

                <div className="flex flex-col w-full items-stretch md:flex-1 md:flex-row justify-center gap-3">
                    <button
                        className="btn btn-primary md:flex-1 md:max-w-lg btn-lg rounded-xl text-white"
                        onClick={prepareSetForRepeat}
                        aria-label={`Repeat ${wrongAnswers.length} mistakes`}
                        tabIndex={0}
                        disabled={!hasMistakes}
                    >
                        <IconRepeat />
                        {hasMistakes ? `Repeat Mistakes (${wrongAnswers.length})` : 'No Mistakes!'}
                    </button>
                    <button
                        className={`btn btn-primary ${hasMistakes && 'btn-outline'} md:flex-1 md:max-w-lg btn-lg rounded-xl`}
                        onClick={handleFinish}
                        aria-label="Go back to decks"
                        tabIndex={0}
                    >
                        <IconHome />
                        Back to Home
                    </button>
                </div>
            </div>
        </FixedSizePage>
    );
};

export default SummaryPage;
