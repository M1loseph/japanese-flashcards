import { useEffect, useState, type FC, type ReactNode } from 'react';
import * as z from 'zod';
import { availableWordBags, type TranslatedJapaneseText } from '../../japanese';
import { HardTextContext } from './HardTextContext';

const HARD_TEXT_KEY = 'hardWords';

interface HardTextProviderProps {
    children: ReactNode;
}

const HardWordsV1Schema = z.object({
    version: z.literal(1),
    hardWords: z.array(z.string()),
});

type HardWordsV1 = z.infer<typeof HardWordsV1Schema>;

const HardWordsV2Schema = z.object({
    version: z.literal(2),
    hardWords: z.array(z.string()),
});

type HardWordsV2 = z.infer<typeof HardWordsV2Schema>;

const HardWordsSchema = z.discriminatedUnion('version', [HardWordsV1Schema, HardWordsV2Schema]);

type HardWords = z.infer<typeof HardWordsSchema>;

const convertV1ToV2 = (data: HardWordsV1): HardWordsV2 => {
    const allWords = availableWordBags.flatMap((bag) => bag.words);
    const ids = data.hardWords
        .map((text) => allWords.find((word) => word.jp.text === text)?.id)
        .filter((id) => id !== undefined);
    return {
        version: 2,
        hardWords: ids,
    };
};

export const HardTextProvider: FC<HardTextProviderProps> = ({ children }) => {
    const [hardTexts, setHardText] = useState<Set<string>>(() => {
        try {
            const saved = localStorage.getItem(HARD_TEXT_KEY);
            if (!saved) return new Set();
            const parsed = HardWordsSchema.parse(JSON.parse(saved));
            if (parsed.version === 1) {
                const converted = convertV1ToV2(parsed);
                localStorage.setItem(HARD_TEXT_KEY, JSON.stringify(converted));
                return new Set(converted.hardWords);
            }
            if (parsed.version === 2) {
                return new Set(parsed.hardWords);
            }
            const _exhaustiveCheck: never = parsed;
            return _exhaustiveCheck;
        } catch (e) {
            console.error('Failed to parse hard words:', e);
            return new Set();
        }
    });

    useEffect(() => {
        const data: HardWords = {
            version: 2,
            hardWords: Array.from(hardTexts),
        };
        localStorage.setItem(HARD_TEXT_KEY, JSON.stringify(data));
    }, [hardTexts]);

    const isHardText = (text: TranslatedJapaneseText) => {
        const textId = text.id;
        return hardTexts.has(textId);
    };

    const toggleHardText = (text: TranslatedJapaneseText) => {
        const textId = text.id;
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

    const getHardTextList = () => {
        return Array.from(hardTexts);
    };

    const overrideHardTextList = (hardTextList: string[]) => {
        setHardText(new Set(hardTextList));
    };

    return (
        <HardTextContext.Provider value={{ isHardText, toggleHardText, getHardTextList, overrideHardTextList }}>
            {children}
        </HardTextContext.Provider>
    );
};
