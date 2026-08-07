import { type FC, type ReactNode } from 'react';
import { TimeContext, type TimeContextType } from './TimeContext';

interface TimeContextProviderProps {
    children: ReactNode;
}

export const TimeContextProvider: FC<TimeContextProviderProps> = ({ children }) => {
    const value: TimeContextType = {
        currentTime: () => new Date(),
    };

    return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};
