import { IconSettings } from '@tabler/icons-react';
import { type FC, useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { usePreventAccidentalLeave } from '../../hooks/usePreventAccidentalLeave';
import { findWordById } from '../../japanese/search';
import { useGameContext } from '../../services/GameContext';
import { useStreak } from '../../services/StreakContext';
import { FixedSizePage } from '../common/FixedSizePage';
import Flashcard, { type FlashcardHandle } from './flashcard/Flashcard';
import { FlashcardButtons } from './flashcard/FlashcardButtons';
import ProgressBar from './flashcard/ProgressBar';
import { GameSettingsModal } from './GameSettingsModal';

const RandomShuffleGamePage: FC = () => {
    const {
        gameState,
        updateLanguage,
        markCurrentFlashcard,
        updateSimplifiedMode,
        skipRemainingFlashcards,
        undoLastAction,
    } = useGameContext();
    const [sessionTime, setSessionTime] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [disableButtons, setDisableButtons] = useState(false);
    const navigate = useNavigate();
    const { recordActivity } = useStreak();

    const flashcardRef = useRef<FlashcardHandle>(null);
    const timerRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!gameState) return;
        const interval = setInterval(() => {
            const diff = Date.now() - gameState.gameStartTimeMs;
            setSessionTime(Math.floor(diff / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [gameState]);

    const gameFinished = gameState?.type === 'finished';

    const { showPrompt, confirmLeave, cancelLeave } = usePreventAccidentalLeave(!gameFinished);

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    useEffect(() => {
        if (!gameFinished) {
            return;
        }
        recordActivity();
        navigate('/game/summary');
    }, [gameFinished, recordActivity, navigate]);

    if (!gameState) {
        return <Navigate to="/" replace />;
    }

    if (gameFinished) {
        return null;
    }

    const card = gameState.flashcards[gameState.currentFlashcardIndex];

    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const handleAnswer = (correct: boolean) => {
        flashcardRef.current?.playAnimation(correct);
        setDisableButtons(true);
        timerRef.current = setTimeout(async () => {
            await markCurrentFlashcard(correct);
            setShowAnswer(false);
            setDisableButtons(false);
        }, 600);
    };

    const handleOpenSettings = () => {
        setShowSettings(true);
    };

    const headerSettings = (
        <div className="flex justify-end items-center">
            <button className="btn btn-ghost btn-circle" onClick={handleOpenSettings}>
                <IconSettings />
            </button>
        </div>
    );

    const word = findWordById(card.wordId);

    if (!word) {
        throw new Error(
            `Word with id ${card.wordId} not found. This should have been handled when fetching words or deserializing the game.`,
        );
    }

    const handleUndoLastAction = () => {
        setShowAnswer(false);
        undoLastAction();
    };

    return (
        <FixedSizePage additionalHeaderComponents={headerSettings}>
            <div className="h-full flex flex-col items-stretch space-y-6">
                <ProgressBar
                    title={gameState.title}
                    currentIndex={gameState.currentFlashcardIndex}
                    total={gameState.flashcards.length}
                    timeInSeconds={sessionTime}
                />
                <Flashcard
                    ref={flashcardRef}
                    card={word}
                    selectedLanguage={gameState.selectedLanguage}
                    showAnswer={showAnswer}
                    undoLastAction={handleUndoLastAction}
                    disableGoBack={gameState.currentFlashcardIndex === 0}
                />
                <FlashcardButtons
                    showAnswer={showAnswer}
                    toggleAnswer={handleToggleAnswer}
                    correctPressed={() => handleAnswer(true)}
                    mistakePressed={() => handleAnswer(false)}
                    disableButtons={disableButtons}
                    skipRemainingFlashcards={skipRemainingFlashcards}
                />
                <dialog className={`modal ${showPrompt ? 'modal-open' : ''}`}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Leave game?</h3>
                        <p className="py-4">
                            Are you sure you want to leave? Your current progress in this round will be saved. You can
                            resume it later from the main page.
                        </p>
                        <div className="modal-action">
                            <button className="btn" onClick={cancelLeave}>
                                Stay
                            </button>
                            <button className="btn btn-error" onClick={confirmLeave}>
                                Leave
                            </button>
                        </div>
                    </div>
                    <div className="modal-backdrop" onClick={cancelLeave}></div>
                </dialog>
            </div>
            <GameSettingsModal
                open={showSettings}
                onClose={() => setShowSettings(false)}
                currentLanguage={gameState.selectedLanguage}
                updateLanguage={updateLanguage}
                simplifiedMode={gameState.simplifiedMode}
                updateSimplifiedMode={updateSimplifiedMode}
            />
        </FixedSizePage>
    );
};

export default RandomShuffleGamePage;
