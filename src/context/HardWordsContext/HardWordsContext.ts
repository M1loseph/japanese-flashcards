import { createContext, useContext } from 'react';
import type { JapaneseWord } from '../../japanese';

export interface HardWordsContextType {
    isHardWord: (word: JapaneseWord) => boolean;
    toggleHardWord: (word: JapaneseWord) => void;
}

export const HardWordsContext = createContext<HardWordsContextType | undefined>(undefined);

export const useHardWords = () => {
    const context = useContext(HardWordsContext);
    if (!context) {
        throw new Error('useHardWords must be used within a HardWordsProvider');
    }
    return context;
};
