import { createContext, useContext } from 'react';
import { type TranslationLanguage } from '../../TranslationLanguage';

export interface GameSettingsContextType {
    selectedLanguage: TranslationLanguage;
    setSelectedLanguage: (lang: TranslationLanguage) => void;
    selectedWordBags: Set<string>;
    toggleWordBag: (id: string) => void;
    selectBags: (ids: string[]) => void;
    deselectBags: (ids: string[]) => void;
}

export const GameSettingsContext = createContext<GameSettingsContextType | undefined>(undefined);

export const useGameSettings = () => {
    const context = useContext(GameSettingsContext);
    if (!context) {
        throw new Error('useGameSettings must be used within a GameSettingsProvider');
    }
    return context;
};
