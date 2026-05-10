import { useEffect, useState, type FC, type ReactNode } from 'react';
import * as z from 'zod';
import dayjs from '../../dayjs';
import { StreakContext } from './StreakContext';

const STREAK_DATA_KEY = 'streakData';

const StreakDataSchema = z.object({
    version: z.literal(1),
    lastActivityDate: z.iso.date(),
    currentStreak: z.number(),
});

type StreakData = z.infer<typeof StreakDataSchema>;

const loadStreakData = (): StreakData | undefined => {
    try {
        const saved = localStorage.getItem(STREAK_DATA_KEY);
        if (!saved) return undefined;
        return StreakDataSchema.parse(JSON.parse(saved));
    } catch (e) {
        console.error('Failed to parse streak data:', e);
        localStorage.removeItem(STREAK_DATA_KEY);
        return undefined;
    }
};

interface StreakContextProviderProps {
    children: ReactNode;
}

export const StreakContextProvider: FC<StreakContextProviderProps> = ({ children }) => {
    const [streakData, setStreakData] = useState<StreakData | undefined>(loadStreakData);

    useEffect(() => {
        if (streakData) {
            localStorage.setItem(STREAK_DATA_KEY, JSON.stringify(streakData));
        }
    }, [streakData]);

    const recordActivity = () => {
        const today = dayjs().format('YYYY-MM-DD');
        const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD');

        setStreakData((prev) => {
            if (!prev) {
                return { version: 1, lastActivityDate: today, currentStreak: 1 };
            }
            if (prev.lastActivityDate === today) {
                return prev;
            }
            const currentStreak = prev.lastActivityDate === yesterday ? prev.currentStreak + 1 : 1;

            return { version: 1, lastActivityDate: today, currentStreak };
        });
    };

    const currentStreak = streakData?.currentStreak ?? 0;

    return <StreakContext.Provider value={{ currentStreak, recordActivity }}>{children}</StreakContext.Provider>;
};
