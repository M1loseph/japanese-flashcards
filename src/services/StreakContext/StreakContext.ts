import { createContext, useContext } from 'react';

export interface StreakContextType {
    currentStreak: number;
    recordActivity: () => void;
}

export const StreakContext = createContext<StreakContextType | undefined>(undefined);

export const useStreak = () => {
    const context = useContext(StreakContext);
    if (!context) {
        throw new Error('useStreak must be used within a StreakContextProvider');
    }
    return context;
};
