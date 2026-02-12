import { useEffect, useMemo, useState, type FC, type ReactNode } from 'react';
import { GameContext } from './GameContext.ts';
import type { GameState } from '../../types/GameState.ts';

export const GameContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [gameState, setGameState] = useState<GameState | undefined>(() => {
        try {
            const saved = localStorage.getItem('randomShuffleGameState');
            return saved ? JSON.parse(saved) : undefined;
        } catch (e) {
            console.error('Failed to parse saved game state:', e);
            return undefined;
        }
    });

    useEffect(() => {
        if (gameState) {
            localStorage.setItem('randomShuffleGameState', JSON.stringify(gameState));
        }
    }, [gameState]);

    const gameContextValue = useMemo(() => {
        const clearGame = () => {
            localStorage.removeItem('randomShuffleGameState');
            setGameState(undefined);
        };
        return { gameState, setGameState, clearGame };
    }, [gameState, setGameState]);

    return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
};
