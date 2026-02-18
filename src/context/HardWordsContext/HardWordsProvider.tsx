import { useEffect, useMemo, useState, type FC, type ReactNode } from 'react';
import { HardWordsContext, type HardWordsContextType } from './HardWordsContext';
import * as z from 'zod';

const HARD_WORDS_KEY = 'hardWords';

interface HardWordsProviderProps {
    children: ReactNode;
}

const HardWordsSchema = z.object({
    version: z.literal(1),
    hardWords: z.array(z.string()),
});

type HardWords = z.infer<typeof HardWordsSchema>;

export const HardWordsProvider: FC<HardWordsProviderProps> = ({ children }) => {
    const [hardWords, setHardWords] = useState<Set<string>>(() => {
        try {
            const saved = localStorage.getItem(HARD_WORDS_KEY);
            if (!saved) return new Set();
            const parsed = HardWordsSchema.parse(JSON.parse(saved));
            return new Set(parsed.hardWords);
        } catch (e) {
            console.error('Failed to parse hard words:', e);
            return new Set();
        }
    });

    useEffect(() => {
        const data: HardWords = {
            version: 1,
            hardWords: Array.from(hardWords),
        };
        localStorage.setItem(HARD_WORDS_KEY, JSON.stringify(data));
    }, [hardWords]);

    const value: HardWordsContextType = useMemo(() => {
        const isHardWord = (wordId: string) => hardWords.has(wordId);

        const toggleHardWord = (wordId: string) => {
            setHardWords((prev) => {
                const newSet = new Set(prev);
                if (newSet.has(wordId)) {
                    newSet.delete(wordId);
                } else {
                    newSet.add(wordId);
                }
                return newSet;
            });
        };

        return { isHardWord, toggleHardWord };
    }, [hardWords]);

    return <HardWordsContext.Provider value={value}>{children}</HardWordsContext.Provider>;
};
