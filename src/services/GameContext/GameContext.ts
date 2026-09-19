import { createContext, useContext } from 'react';
import type { GameState, GameType } from '../../types/GameState';

interface GameContextType {
    gameState: GameState | undefined;
    clearGame: () => void;
    markCurrentFlashcard: (correct: boolean) => Promise<void>;
    createNewGameFromWrongAnswers: () => void;
    createNewGame: (wordIds: string[], title: string, gameType: GameType) => void;
    skipRemainingFlashcards: () => Promise<void>;
    undoLastAction: () => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};
