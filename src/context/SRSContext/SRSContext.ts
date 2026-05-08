import { createContext, useContext } from 'react';

interface AsyncOperation<T> {
    data?: T;
}

interface SRSStatistics {
    buckets: Map<number, number>;
}

export interface SRSContextType {
    addNewRandomWords: (count: number, preferredWordBags?: string[]) => void;
    wordsToReview: AsyncOperation<string[]>;
    statistics: AsyncOperation<SRSStatistics>;
    markWordAsReviewed: (wordId: string, correct: boolean) => void;
}

export const SRSContext = createContext<SRSContextType | undefined>(undefined);

export const useSRSContext = () => {
    const context = useContext(SRSContext);
    if (!context) {
        throw new Error('useSRSContext must be used within a SRSProvider');
    }
    return context;
};
