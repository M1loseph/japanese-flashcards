import { createContext, useContext } from 'react';
import type { TranslatedJapaneseText } from '../../japanese';

export interface HardTextContextType {
    isHardText: (text: TranslatedJapaneseText) => boolean;
    toggleHardText: (text: TranslatedJapaneseText) => void;
}

export const HardTextContext = createContext<HardTextContextType | undefined>(undefined);

export const useHardText = () => {
    const context = useContext(HardTextContext);
    if (!context) {
        throw new Error('useHardText must be used within a HardTextProvider');
    }
    return context;
};
