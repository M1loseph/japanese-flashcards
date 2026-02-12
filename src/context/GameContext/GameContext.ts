import { createContext, useContext } from 'react';
import type { GameState } from '../../types/GameState.ts';

interface GameContextType {
    gameState: GameState | undefined;
    setGameState: (state: GameState) => void;
    clearGame: () => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};
