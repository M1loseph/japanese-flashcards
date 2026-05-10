import { createContext, useContext } from 'react';
import type { GameState, GameType } from '../../types/GameState';
import type { TranslationLanguage } from '../../types/TranslationLanguage';

interface GameContextType {
    gameState: GameState | undefined;
    clearGame: () => void;
    markCurrentFlashcard: (correct: boolean) => Promise<void>;
    createNewGameFromWrongAnswers: () => void;
    createNewGame: (
        wordIds: string[],
        selectedLanguage: TranslationLanguage,
        title: string,
        gameType: GameType,
    ) => void;
    updateLanguage: (language: TranslationLanguage) => void;
    updateSimplifiedMode: (enabled: boolean) => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};
