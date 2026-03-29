import { IconHome, IconRepeat } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { useMemo, useState, type FC } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { PaperPlaneIcon } from '../../assets/PaperPlaneIcon';
import { useGameContext } from '../../context/GameContext';
import { FixedSizePage } from '../common/FixedSizePage';
import { Confetti } from './Confetti';
import { useCountUp } from './useCountUp';

interface SessionStats {
    totalCards: number;
    accuracy: number;
    accuracyLabel: 'High' | 'Medium' | 'Low';
    accuracyColor: 'text-success' | 'text-warning' | 'text-error';
    elapsedTime: string;
}

const SummaryPage: FC = () => {
    const navigate = useNavigate();
    const { gameState, clearGame, createNewGameFromWrongAnswers } = useGameContext();

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
        const accuracyColor = (() => {
            if (accuracyLabel === 'High') return 'text-success';
            if (accuracyLabel === 'Medium') return 'text-warning';
            return 'text-error';
        })();

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

    const hasMistakes = wrongAnswers.length > 0;
    const [planeFloating, setPlaneFloating] = useState(false);

    const animatedCards = useCountUp(stats.totalCards, 800, 1000);
    const animatedAccuracy = useCountUp(stats.accuracy, 1200, 1200);

    if (!gameState) {
        return <Navigate to="/" replace />;
    }

    if (gameState.type !== 'finished') {
        return <Navigate to="/game/shuffle" replace />;
    }

    const prepareSetForRepeat = () => {
        createNewGameFromWrongAnswers();
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

    return (
        <FixedSizePage preHomeNavigationHook={handleHomeNavigation}>
            <Confetti />
            <div className="h-full flex flex-col items-center justify-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    className="text-xs font-semibold tracking-widest uppercase text-base-content/50 mb-6"
                >
                    Session Results
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.3, rotate: 6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 6 }}
                    transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
                    className="relative h-[12rem] aspect-square mb-8"
                >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-400 to-sky-200 shadow-lg rotate-6" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-400 to-sky-100 shadow-xl flex items-center justify-center">
                        <motion.div
                            className="w-20 h-20 drop-shadow-md"
                            initial={planeFloating ? false : { opacity: 0, x: -60, y: 40, rotate: 10, scale: 0.5 }}
                            animate={
                                planeFloating
                                    ? { x: [0, 4, 0], y: [0, -6, 0], rotate: [-12, -16, -12] }
                                    : { opacity: 1, x: 0, y: 0, rotate: -12, scale: 1 }
                            }
                            transition={
                                planeFloating
                                    ? { duration: 3, ease: 'easeInOut', repeat: Infinity }
                                    : { delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
                            }
                            onAnimationComplete={() => {
                                if (!planeFloating) setPlaneFloating(true);
                            }}
                        >
                            <PaperPlaneIcon className="w-full h-full" aria-hidden="true" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: [0, 1, 1, 1], scale: [0.3, 1.1, 0.95, 1] }}
                    transition={{ duration: 0.7, times: [0, 0.5, 0.7, 1], ease: [0.34, 1.56, 0.64, 1], delay: 0.5 }}
                    className="text-3xl font-bold text-base-content mb-1"
                >
                    Deck Mastered!
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                    className="text-lg text-success font-medium mb-8"
                >
                    おめでとう！(Congratulations!)
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                    className="flex w-full rounded-xl border border-base-300 bg-base-200/50 divide-x divide-base-300 mb-10"
                >
                    <div className="flex-1 flex flex-col items-center py-4 gap-0.5">
                        <span className="text-xs font-semibold tracking-wider uppercase text-base-content/50">
                            Cards
                        </span>
                        <span className="text-2xl font-bold text-base-content">{animatedCards}</span>
                    </div>

                    <div className="flex-1 flex flex-col items-center py-4 gap-0.5">
                        <span className="text-xs font-semibold tracking-wider uppercase text-base-content/50">
                            Accuracy
                        </span>
                        <span className="text-2xl font-bold text-base-content">{animatedAccuracy}%</span>
                        <span className={`text-sm font-medium ${stats.accuracyColor}`}>{stats.accuracyLabel}</span>
                    </div>

                    <div className="flex-1 flex flex-col items-center py-4 gap-0.5">
                        <span className="text-xs font-semibold tracking-wider uppercase text-base-content/50">
                            Time
                        </span>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
                            className="text-2xl font-bold text-base-content"
                        >
                            {stats.elapsedTime}
                        </motion.span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
                    className="flex flex-col w-full items-stretch md:flex-1 md:flex-row justify-center gap-3"
                >
                    <button
                        className="btn btn-primary md:flex-1 md:max-w-lg btn-lg rounded-xl text-white"
                        onClick={prepareSetForRepeat}
                        aria-label={`Repeat ${wrongAnswers.length} mistakes`}
                        disabled={!hasMistakes}
                    >
                        <IconRepeat />
                        {hasMistakes ? `Repeat Mistakes (${wrongAnswers.length})` : 'No Mistakes!'}
                    </button>
                    <button
                        className={`btn btn-primary ${hasMistakes && 'btn-outline'} md:flex-1 md:max-w-lg btn-lg rounded-xl`}
                        onClick={handleFinish}
                        aria-label="Go back to decks"
                    >
                        <IconHome />
                        Back to Home
                    </button>
                </motion.div>
            </div>
        </FixedSizePage>
    );
};

export default SummaryPage;
