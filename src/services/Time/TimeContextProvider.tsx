import { type FC, type ReactNode } from 'react';
import { TimeContext, type TimeContextType } from './TimeContext';

interface TimeContextProviderProps {
    children: ReactNode;
    timeProvider?: TimeProvider;
}

interface TimeProvider {
    now: () => Date;
}

const defaultTimeProvider: TimeProvider = {
    now: () => new Date(),
};

export const TimeContextProvider: FC<TimeContextProviderProps> = ({ children, timeProvider = defaultTimeProvider }) => {
    const value: TimeContextType = {
        currentTime: () => timeProvider.now(),
    };

    return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};
