import { type FC, useEffect, useState } from 'react';
import Flashcard from '../components/Flashcard.tsx';
import ProgressBar from '../components/ProgressBar.tsx';
import { Navigate } from 'react-router';
import { usePreventAccidentalLeave } from '../hooks/usePreventAccidentalLeave.ts';
import { useGameContext } from '../context/GameContext/index.ts';
import type { FlashcardSession } from '../types/FlashcardSession.ts';
import { FlashcardButtons } from '../components/FlashcardButtons.tsx';
import { FixedSizePage } from './common/FixedSizePage.tsx';

const RandomShuffleGamePage: FC = () => {
    const { gameState, setGameState } = useGameContext();
    const [sessionTime, setSessionTime] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        if (!gameState) return;
        const interval = setInterval(() => {
            const diff = Date.now() - gameState.gameStartTimeMs;
            setSessionTime(Math.floor(diff / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [gameState]);

    const gameFinished = gameState ? gameState.currentFlashcardIndex === gameState.flashcards.length : false;

    const { showPrompt, confirmLeave, cancelLeave } = usePreventAccidentalLeave(!gameFinished);

    if (!gameState) {
        return <Navigate to="/" replace />;
    }

    if (gameFinished) {
        return <Navigate to="/game/summary" />;
    }

    const card = gameState.flashcards[gameState.currentFlashcardIndex];

    const replaceCard = (newCard: FlashcardSession): FlashcardSession[] => {
        const flashCardsCopy = [...gameState.flashcards];
        flashCardsCopy[gameState.currentFlashcardIndex] = newCard;
        return flashCardsCopy;
    };

    const handleCorrect = () => {
        const answeredCard = {
            ...card,
            answered: true,
            correct: true,
        };
        const updatedCards = replaceCard(answeredCard);

        setGameState({
            ...gameState,
            flashcards: updatedCards,
            currentFlashcardIndex: gameState.currentFlashcardIndex + 1,
        });
    };

    const handleMistake = () => {
        const answeredCard = {
            ...card,
            answered: true,
            correct: false,
        };
        const updatedCards = replaceCard(answeredCard);

        setGameState({
            ...gameState,
            flashcards: updatedCards,
            currentFlashcardIndex: gameState.currentFlashcardIndex + 1,
        });
    };

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const correctPressed = () => {
        setShowAnswer(false);
        handleCorrect();
    };

    const mistakePressed = () => {
        setShowAnswer(false);
        handleMistake();
    };

    return (
        <FixedSizePage>
            <div className="h-full flex flex-col items-stretch space-y-6">
                <ProgressBar
                    wordBags={gameState.initialWordBags}
                    currentIndex={gameState.currentFlashcardIndex}
                    total={gameState.flashcards.length}
                    timeInSeconds={sessionTime}
                />
                <Flashcard card={card.word} selectedLanguage={gameState.selectedLanguage} showAnswer={showAnswer} />
                <FlashcardButtons
                    showAnswer={showAnswer}
                    toggleAnswer={toggleAnswer}
                    correctPressed={correctPressed}
                    mistakePressed={mistakePressed}
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
        </FixedSizePage>
    );
};

export default RandomShuffleGamePage;
