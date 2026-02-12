import { useMemo, useState, type FC, type ReactNode } from 'react';
import { GameSettingsContext, type GameSettingsContextType } from './GameSettingsContext';
import { TranslationLanguages, type TranslationLanguage } from '../../types/TranslationLanguage';

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
