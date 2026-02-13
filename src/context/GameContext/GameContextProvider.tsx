import { useEffect, useMemo, useState, type FC, type ReactNode } from 'react';
import { GameContext } from './GameContext.ts';
import { GameStateSchema, type GameState } from '../../types/GameState.ts';

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

    const gameContextValue = useMemo(() => {
        const clearGame = () => {
            localStorage.removeItem(RANDOM_SHUFFLE_GAME_STATE_KEY);
            setGameState(undefined);
        };
        return { gameState, setGameState, clearGame };
    }, [gameState, setGameState]);

    return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
};
