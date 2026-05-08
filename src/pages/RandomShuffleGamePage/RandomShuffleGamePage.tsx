import { IconSettings } from '@tabler/icons-react';
import { type FC, useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useGameContext } from '../../context/GameContext';
import { useSRSContext } from '../../context/SRSContext';
import { useStreak } from '../../context/StreakContext';
import { usePreventAccidentalLeave } from '../../hooks/usePreventAccidentalLeave';
import { findWordById } from '../../japanese/search';
import { FixedSizePage } from '../common/FixedSizePage';
import Flashcard, { type FlashcardHandle } from './flashcard/Flashcard';
import { FlashcardButtons } from './flashcard/FlashcardButtons';
import ProgressBar from './flashcard/ProgressBar';
import { GameSettingsModal } from './GameSettingsModal';

const RandomShuffleGamePage: FC = () => {
    const { gameState, updateLanguage, markCurrentFlashcard, updateSimplifiedMode } = useGameContext();
    const { markWordAsReviewed } = useSRSContext();
    const [sessionTime, setSessionTime] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const navigate = useNavigate();
    const { recordActivity } = useStreak();

    const flashcardRef = useRef<FlashcardHandle>(null);
    const [lastFlashcardAnswer, setLastFlashcardAnswer] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (!gameState) return;
        const interval = setInterval(() => {
            const diff = Date.now() - gameState.gameStartTimeMs;
            setSessionTime(Math.floor(diff / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [gameState]);

    useEffect(() => {
        if (lastFlashcardAnswer === undefined) return;
        const result = lastFlashcardAnswer;
        const handle = setTimeout(() => {
            setLastFlashcardAnswer(undefined);
            if (result) {
                markCurrentFlashcard(true);
            } else {
                markCurrentFlashcard(false);
            }
            setShowAnswer(false);
        }, 600);
        return () => clearTimeout(handle);
    }, [lastFlashcardAnswer, markCurrentFlashcard]);

    const gameFinished = gameState?.type === 'finished';

    const { showPrompt, confirmLeave, cancelLeave } = usePreventAccidentalLeave(!gameFinished);

    useEffect(() => {
        if (gameFinished) {
            if (gameState.gameType === 'srs') {
                gameState.flashcards.forEach((card) => {
                    markWordAsReviewed(card.wordId, card.correct);
                });
            }
            recordActivity();
            navigate('/game/summary');
        }
    }, [gameFinished, navigate]);

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

    const handleCorrectPressed = () => {
        flashcardRef.current?.playAnimation(true);
        setLastFlashcardAnswer(true);
    };

    const handleMistakePressed = () => {
        flashcardRef.current?.playAnimation(false);
        setLastFlashcardAnswer(false);
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
                    // TODO: handle case when word is not found (shouldn't happen, but better be safe)
                    card={word!!}
                    selectedLanguage={gameState.selectedLanguage}
                    showAnswer={showAnswer}
                />
                <FlashcardButtons
                    showAnswer={showAnswer}
                    toggleAnswer={handleToggleAnswer}
                    correctPressed={handleCorrectPressed}
                    mistakePressed={handleMistakePressed}
                    disableButtons={lastFlashcardAnswer !== undefined}
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
