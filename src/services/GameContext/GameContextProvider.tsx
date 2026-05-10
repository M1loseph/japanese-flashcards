import { useEffect, useState, type FC, type ReactNode } from 'react';
import { findWordById } from '../../japanese/search';
import { GameStateSchema, type GameState, type GameType } from '../../types/GameState';
import type { TranslationLanguage } from '../../types/TranslationLanguage';
import { shuffleArray } from '../../utils';
import { markWordsAsReviewedBatch } from '../SRS';
import { GameContext } from './GameContext';

const RANDOM_SHUFFLE_GAME_STATE_KEY = 'randomShuffleGameState';

export const GameContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
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
        } catch (e) {
            localStorage.removeItem(RANDOM_SHUFFLE_GAME_STATE_KEY);
            console.error('Failed to parse saved game state:', e);
            return undefined;
        }
    });

    useEffect(() => {
        if (gameState) {
            localStorage.setItem(RANDOM_SHUFFLE_GAME_STATE_KEY, JSON.stringify(gameState));
        }
    }, [gameState]);

    const createNewGame = (
        wordIds: string[],
        selectedLanguage: TranslationLanguage,
        title: string,
        gameType: GameType,
    ) => {
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
            selectedLanguage,
            simplifiedMode: false,
            gameStartTimeMs: Date.now(),
        };

        setGameState(newGameState);
    };

    const clearGame = () => {
        localStorage.removeItem(RANDOM_SHUFFLE_GAME_STATE_KEY);
        setGameState(undefined);
    };

    const updateLanguage = (language: TranslationLanguage) => {
        setGameState((prev) => {
            if (!prev) throw new Error('Can only update language if the game is in progress');
            return {
                ...prev,
                selectedLanguage: language,
            };
        });
    };

    const markCurrentFlashcard = async (correct: boolean) => {
        if (!gameState || gameState.type !== 'in-progress')
            throw new Error('Can only mark flashcards if the game is in progress');

        const currentCard = gameState.flashcards[gameState.currentFlashcardIndex];
        const updatedCard = { ...currentCard, answered: true, correct };
        const updatedFlashcards = [...gameState.flashcards];
        updatedFlashcards[gameState.currentFlashcardIndex] = updatedCard;

        if (gameState.currentFlashcardIndex === gameState.flashcards.length - 1) {
            if (gameState.gameType === 'srs') {
                const reviews = gameState.flashcards.map((card) => ({
                    wordId: card.wordId,
                    correct: card.correct,
                }));
                await markWordsAsReviewedBatch(reviews);
            }
            const { version, title, gameType, selectedLanguage, gameStartTimeMs, simplifiedMode } = gameState;
            setGameState({
                version,
                type: 'finished',
                gameType,
                gameStartTimeMs,
                title,
                selectedLanguage,
                flashcards: updatedFlashcards,
                simplifiedMode,
                gameEndTimeMs: Date.now(),
            });
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
            const { version, title, gameType, selectedLanguage, simplifiedMode } = prev;

            return {
                version,
                type: 'in-progress',
                gameType,
                title,
                selectedLanguage,
                simplifiedMode,
                currentFlashcardIndex: 0,
                flashcards: newFlashcards,
                gameStartTimeMs: Date.now(),
            };
        });
    };

    const updateSimplifiedMode = (enabled: boolean) => {
        setGameState((prev) => {
            if (!prev) throw new Error('Can only update simplified mode if the game is in progress');
            return {
                ...prev,
                simplifiedMode: enabled,
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
                updateLanguage,
                updateSimplifiedMode,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
