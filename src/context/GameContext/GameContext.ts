import { createContext, useContext } from 'react';
import type { GameState } from '../../types/GameState.ts';
import type { JapaneseWord } from '../../japanese/types.ts';
import type { TranslationLanguage } from '../../types/TranslationLanguage.ts';

export interface SelectedJapaneseWord {
    word: JapaneseWord;
    wordBag: string;
}

interface GameContextType {
    gameState: GameState | undefined;
    clearGame: () => void;
    markCurrentFlashcard: (correct: boolean) => void;
    createNewGameFromWrongAnswers: () => void;
    createNewGame: (flashcards: SelectedJapaneseWord[], selectedLanguage: TranslationLanguage) => void;
    updateLanguage: (language: TranslationLanguage) => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};
