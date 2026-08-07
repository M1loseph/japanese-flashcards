import { createContext, useContext } from 'react';

export interface TimeContextType {
    currentTime: () => Date;
}

export const TimeContext = createContext<TimeContextType | undefined>(undefined);

export const useTimeContext = () => {
    const context = useContext(TimeContext);
    if (!context) {
        throw new Error('useTime must be used within a TimeContextProvider');
    }
    return context;
};
