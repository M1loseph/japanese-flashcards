import { createContext, useContext } from 'react';

export interface HardWordsContextType {
    isHardWord: (wordId: string) => boolean;
    toggleHardWord: (wordId: string) => void;
}

export const HardWordsContext = createContext<HardWordsContextType | undefined>(undefined);

export const useHardWords = () => {
    const context = useContext(HardWordsContext);
    if (!context) {
        throw new Error('useHardWords must be used within a HardWordsProvider');
    }
    return context;
};
