import { useEffect, useState, type FC, type ReactNode } from 'react';
import { GameContext, type SelectedJapaneseWord } from './GameContext.ts';
import { GameStateSchema, type GameState } from '../../types/GameState.ts';
import { shuffleArray } from '../../utils.ts';
import type { TranslationLanguage } from '../../types/TranslationLanguage.ts';

const RANDOM_SHUFFLE_GAME_STATE_KEY = 'randomShuffleGameState';

export const GameContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [gameState, setGameState] = useState<GameState | undefined>(() => {
        try {
            const saved = localStorage.getItem(RANDOM_SHUFFLE_GAME_STATE_KEY);
            if (!saved) return undefined;
            return GameStateSchema.parse(JSON.parse(saved));
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

    const createNewGame = (selectedWords: SelectedJapaneseWord[], selectedLanguage: TranslationLanguage) => {
        const initialWordBags = Array.from(new Set(selectedWords.map((w) => w.wordBag)));

        const flashcards = shuffleArray(selectedWords).map(({ word, wordBag }) => ({
            word,
            wordBag,
            answered: false,
            correct: false,
        }));

        const newGameState: GameState = {
            version: 1,
            type: 'in-progress',
            initialWordBags,
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

    const markCurrentFlashcard = (correct: boolean) => {
        setGameState((prev) => {
            if (!prev || prev.type !== 'in-progress')
                throw new Error('Can only mark flashcards if the game is in progress');

            const currentCard = prev.flashcards[prev.currentFlashcardIndex];
            const updatedCard = { ...currentCard, answered: true, correct };
            const updatedFlashcards = [...prev.flashcards];
            updatedFlashcards[prev.currentFlashcardIndex] = updatedCard;

            if (prev.currentFlashcardIndex === prev.flashcards.length - 1) {
                const { version, initialWordBags, selectedLanguage, gameStartTimeMs, simplifiedMode } = prev;
                return {
                    version,
                    type: 'finished',
                    gameStartTimeMs,
                    initialWordBags,
                    selectedLanguage,
                    flashcards: updatedFlashcards,
                    simplifiedMode,
                    gameEndTimeMs: Date.now(),
                };
            }

            return {
                ...prev,
                flashcards: updatedFlashcards,
                currentFlashcardIndex: prev.currentFlashcardIndex + 1,
            };
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
            const { version, initialWordBags, selectedLanguage, simplifiedMode } = prev;

            return {
                version,
                type: 'in-progress',
                initialWordBags,
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
