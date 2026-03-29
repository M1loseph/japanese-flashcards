import { useEffect, useState, type FC, type ReactNode } from 'react';
import * as z from 'zod';
import type { TranslatedJapaneseText } from '../../japanese';
import { HardTextContext } from './HardTextContext';

const HARD_TEXT_KEY = 'hardWords';

interface HardTextProviderProps {
    children: ReactNode;
}

const HardWordsSchema = z.object({
    version: z.literal(1),
    hardWords: z.array(z.string()),
});

type HardWords = z.infer<typeof HardWordsSchema>;

export const HardTextProvider: FC<HardTextProviderProps> = ({ children }) => {
    const [hardTexts, setHardText] = useState<Set<string>>(() => {
        try {
            const saved = localStorage.getItem(HARD_TEXT_KEY);
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
            hardWords: Array.from(hardTexts),
        };
        localStorage.setItem(HARD_TEXT_KEY, JSON.stringify(data));
    }, [hardTexts]);

    const isHardText = (text: TranslatedJapaneseText) => {
        const textId = text.jp.text;
        return hardTexts.has(textId);
    };

    const toggleHardText = (text: TranslatedJapaneseText) => {
        const textId = text.jp.text;
        setHardText((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(textId)) {
                newSet.delete(textId);
            } else {
                newSet.add(textId);
            }
            return newSet;
        });
    };

    return <HardTextContext.Provider value={{ isHardText, toggleHardText }}>{children}</HardTextContext.Provider>;
};
