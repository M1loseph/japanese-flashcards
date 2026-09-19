import { useState, type FC, type ReactNode } from 'react';
import { GameSettingsContext } from './GameSettingsContext';

interface GameSettingsProviderProps {
    children: ReactNode;
}

export const GameSettingsProvider: FC<GameSettingsProviderProps> = ({ children }) => {
    const [selectedWordBags, setSelectedWordBags] = useState<Set<string>>(new Set());

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

    const value = {
        selectedWordBags,
        toggleWordBag,
        selectBags,
        deselectBags,
    };

    return <GameSettingsContext.Provider value={value}>{children}</GameSettingsContext.Provider>;
};
