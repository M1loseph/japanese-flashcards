import { useEffect, useMemo, useState, type FC, type ReactNode } from 'react';
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

    const updateLanguage = useMemo(
        () => (language: TranslationLanguage) => {
            setGameState((prev) => {
                if (!prev) return undefined;
                return {
                    ...prev,
                    selectedLanguage: language,
                };
            });
        },
        [setGameState],
    );

    useEffect(() => {
        if (gameState) {
            localStorage.setItem(RANDOM_SHUFFLE_GAME_STATE_KEY, JSON.stringify(gameState));
        }
    }, [gameState]);

    const gameContextValue = useMemo(() => {
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
                gameStartTimeMs: Date.now(),
            };

            setGameState(newGameState);
        };

        const clearGame = () => {
            localStorage.removeItem(RANDOM_SHUFFLE_GAME_STATE_KEY);
            setGameState(undefined);
        };

        return { gameState, setGameState, clearGame, createNewGame, updateLanguage };
    }, [gameState, updateLanguage, setGameState]);

    return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
};
