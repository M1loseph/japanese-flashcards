import { type FC, useEffect, useState } from 'react';
import Flashcard from '../../components/Flashcard.tsx';
import ProgressBar from '../../components/ProgressBar.tsx';
import { Navigate, useNavigate } from 'react-router';
import { usePreventAccidentalLeave } from '../../hooks/usePreventAccidentalLeave.ts';
import { useGameContext } from '../../context/GameContext/index.ts';
import { FlashcardButtons } from '../../components/FlashcardButtons.tsx';
import { FixedSizePage } from '../common/FixedSizePage.tsx';
import { IconSettings } from '@tabler/icons-react';
import { GameSettingsModal } from './GameSettingsModal.tsx';

const RandomShuffleGamePage: FC = () => {
    const { gameState, updateLanguage, markCurrentFlashcard, updateSimplifiedMode } = useGameContext();
    const [sessionTime, setSessionTime] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const navigate = useNavigate();

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
        if (gameFinished) {
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

    const handleCorrect = () => {
        markCurrentFlashcard(true);
    };

    const handleMistake = () => {
        markCurrentFlashcard(false);
    };

    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const handleCorrectPressed = () => {
        setShowAnswer(false);
        handleCorrect();
    };

    const handleMistakePressed = () => {
        setShowAnswer(false);
        handleMistake();
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

    return (
        <FixedSizePage additionalHeaderComponents={headerSettings}>
            <div className="h-full flex flex-col items-stretch space-y-6">
                <ProgressBar
                    wordBags={gameState.initialWordBags}
                    currentIndex={gameState.currentFlashcardIndex}
                    total={gameState.flashcards.length}
                    timeInSeconds={sessionTime}
                />
                <Flashcard
                    card={card.word}
                    selectedLanguage={gameState.selectedLanguage}
                    showAnswer={showAnswer}
                    simplifiedMode={gameState.simplifiedMode}
                />
                <FlashcardButtons
                    showAnswer={showAnswer}
                    toggleAnswer={handleToggleAnswer}
                    correctPressed={handleCorrectPressed}
                    mistakePressed={handleMistakePressed}
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
