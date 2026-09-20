import { useEffect, useState, type FC, type ReactNode } from 'react';
import { findWordById } from '../../japanese/search';
import type { FlashcardSession } from '../../types/FlashcardSession';
import { GameStateSchema, type GameState, type GameType } from '../../types/GameState';
import { shuffleArray } from '../../utils';
import { useMarkWordsAsReviewedBatch } from '../SRS';
import { GameContext } from './GameContext';

const RANDOM_SHUFFLE_GAME_STATE_KEY = 'randomShuffleGameState';

export const GameContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const markWordsAsReviewedBatch = useMarkWordsAsReviewedBatch();

    const [gameState, setGameState] = useState<GameState | undefined>(() => {
        try {
            const saved = localStorage.getItem(RANDOM_SHUFFLE_GAME_STATE_KEY);
            if (!saved) return undefined;
            const game = GameStateSchema.parse(JSON.parse(saved));
            const finalCards = game.flashcards.filter((card) => {
                return findWordById(card.wordId) !== undefined;
            });
            if (finalCards.length === 0) {
                return undefined;
            }
            return { ...game, flashcards: finalCards };
        } catch (error) {
            localStorage.removeItem(RANDOM_SHUFFLE_GAME_STATE_KEY);
            console.error('Failed to parse saved game state:', error);
            return undefined;
        }
    });

    useEffect(() => {
        if (gameState) {
            localStorage.setItem(RANDOM_SHUFFLE_GAME_STATE_KEY, JSON.stringify(gameState));
        }
    }, [gameState]);

    const createNewGame = (wordIds: string[], title: string, gameType: GameType) => {
        const flashcards = shuffleArray(wordIds).map((wordId) => ({
            wordId,
            answered: false,
            correct: false,
        }));

        const newGameState: GameState = {
            version: 1,
            type: 'in-progress',
            title,
            gameType,
            flashcards,
            currentFlashcardIndex: 0,
            gameStartTimeMs: Date.now(),
        };

        setGameState(newGameState);
    };

    const clearGame = () => {
        localStorage.removeItem(RANDOM_SHUFFLE_GAME_STATE_KEY);
        setGameState(undefined);
    };

    const saveProgressForSRSGame = async (gameType: GameType, updatedFlashcards: FlashcardSession[]) => {
        if (gameType === 'srs') {
            const reviews = updatedFlashcards.map((card) => ({
                wordId: card.wordId,
                correct: card.correct,
            }));
            await markWordsAsReviewedBatch.mutateAsync(reviews);
        }
    };

    const markCurrentFlashcard = async (correct: boolean) => {
        if (!gameState || gameState.type !== 'in-progress') {
            throw new Error('Can only mark flashcards if the game is in progress');
        }

        const currentCard = gameState.flashcards[gameState.currentFlashcardIndex];
        const updatedCard = { ...currentCard, answered: true, correct };
        const updatedFlashcards = [...gameState.flashcards];
        updatedFlashcards[gameState.currentFlashcardIndex] = updatedCard;

        if (gameState.currentFlashcardIndex === gameState.flashcards.length - 1) {
            await saveProgressForSRSGame(gameState.gameType, updatedFlashcards);
            const { version, title, gameType, gameStartTimeMs } = gameState;
            setGameState({
                version,
                type: 'finished',
                gameType,
                gameStartTimeMs,
                title,
                flashcards: updatedFlashcards,
                gameEndTimeMs: Date.now(),
            });
            return;
        }

        setGameState({
            ...gameState,
            flashcards: updatedFlashcards,
            currentFlashcardIndex: gameState.currentFlashcardIndex + 1,
        });
    };

    const createNewGameFromWrongAnswers = () => {
        setGameState((prev) => {
            if (!prev || prev.type !== 'finished')
                throw new Error('Can only create new game from wrong answers if previous game is finished');

            const wrongAnswers = prev.flashcards.filter((card) => card.answered && !card.correct);

            if (wrongAnswers.length === 0) {
                throw new Error('No wrong answers to create a new game from');
            }

            const newFlashcards = shuffleArray(wrongAnswers.map((card) => ({ ...card, answered: false })));
            const { version, title, gameType } = prev;

            return {
                version,
                type: 'in-progress',
                gameType,
                title,
                currentFlashcardIndex: 0,
                flashcards: newFlashcards,
                gameStartTimeMs: Date.now(),
            };
        });
    };

    const skipRemainingFlashcards = async () => {
        if (!gameState || gameState.type !== 'in-progress') {
            throw new Error('Can only skip flashcards if the game is in progress');
        }
        const { version, title, gameType, gameStartTimeMs } = gameState;
        const answeredFlashcards = gameState.flashcards.filter((card) => card.answered);
        await saveProgressForSRSGame(gameType, answeredFlashcards);
        setGameState({
            version,
            type: 'finished',
            gameType,
            gameStartTimeMs,
            title,
            flashcards: answeredFlashcards,
            gameEndTimeMs: Date.now(),
        });
    };

    const undoLastAction = () => {
        setGameState((prev) => {
            if (!prev || prev.type !== 'in-progress') {
                throw new Error('Can only undo last action if the game is in progress');
            }
            if (prev.currentFlashcardIndex === 0) {
                return prev;
            }
            const previousIndex = prev.currentFlashcardIndex - 1;
            const updatedFlashcards = [...prev.flashcards];
            updatedFlashcards[previousIndex] = {
                wordId: updatedFlashcards[previousIndex].wordId,
                correct: false,
                answered: false,
            };
            return {
                ...prev,
                flashcards: updatedFlashcards,
                currentFlashcardIndex: previousIndex,
            };
        });
    };

    return (
        <GameContext.Provider
            value={{
                gameState,
                clearGame,
                markCurrentFlashcard,
                createNewGameFromWrongAnswers,
                createNewGame,
                skipRemainingFlashcards,
                undoLastAction,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
