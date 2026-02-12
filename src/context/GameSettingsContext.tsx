import { createContext, type FC, type ReactNode, useContext, useMemo, useState } from 'react';
import { type TranslationLanguage, TranslationLanguages } from '../TranslationLanguage';

interface GameSettingsContextType {
    selectedLanguage: TranslationLanguage;
    setSelectedLanguage: (lang: TranslationLanguage) => void;
    selectedWordBags: Set<string>;
    toggleWordBag: (id: string) => void;
    selectBags: (ids: string[]) => void;
    deselectBags: (ids: string[]) => void;
}

const GameSettingsContext = createContext<GameSettingsContextType | undefined>(undefined);

export const useGameSettings = () => {
    const context = useContext(GameSettingsContext);
    if (!context) {
        throw new Error('useGameSettings must be used within a GameSettingsProvider');
    }
    return context;
};

interface GameSettingsProviderProps {
    children: ReactNode;
}

export const GameSettingsProvider: FC<GameSettingsProviderProps> = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<TranslationLanguage>(TranslationLanguages.ENGLISH);
    const [selectedWordBags, setSelectedWordBags] = useState<Set<string>>(new Set());

    const value = useMemo<GameSettingsContextType>(() => {
        const toggleWordBag = (id: string) => {
            setSelectedWordBags((prev) => {
                const newSet = new Set(prev);
                if (newSet.has(id)) {
                    newSet.delete(id);
                } else {
                    newSet.add(id);
                }
                return newSet;
            });
        };

        const selectBags = (ids: string[]) => {
            setSelectedWordBags((prev) => {
                const newSet = new Set(prev);
                ids.forEach((id) => newSet.add(id));
                return newSet;
            });
        };

        const deselectBags = (ids: string[]) => {
            setSelectedWordBags((prev) => {
                const newSet = new Set(prev);
                ids.forEach((id) => newSet.delete(id));
                return newSet;
            });
        };

        return {
            selectedLanguage,
            setSelectedLanguage,
            selectedWordBags,
            toggleWordBag,
            selectBags,
            deselectBags,
        };
    }, [selectedLanguage, selectedWordBags]);

    return <GameSettingsContext.Provider value={value}>{children}</GameSettingsContext.Provider>;
};
