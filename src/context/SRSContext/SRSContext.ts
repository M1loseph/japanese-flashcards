import { createContext, useContext } from 'react';

export interface SRSContextType {
    addNewRandomWords: (count: number, preferredWordBags?: string[]) => Promise<void>;
    listWordsToReview: () => Promise<string[]>;
    markWordAsReviewed: (wordId: string, correct: boolean) => Promise<void>;
}

export const SRSContext = createContext<SRSContextType | undefined>(undefined);

export const useSRSContext = () => {
    const context = useContext(SRSContext);
    if (!context) {
        throw new Error('useSRSContext must be used within a SRSProvider');
    }
    return context;
};
