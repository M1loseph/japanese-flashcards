import { createContext } from "react";

export const TranslationLanguages = {
    POLISH: "pl", ENGLISH: "en",
} as const
export type TranslationLanguage = typeof TranslationLanguages[keyof typeof TranslationLanguages]

export interface LessonContextType {
    selectedLanguage: TranslationLanguage;
    setSelectedLanguage: (lang: TranslationLanguage) => void;
    selectedWordBags: Set<string>;
    setSelectedWordBags: (bags: Set<string>) => void;
}

export const LessonContext = createContext<LessonContextType>(
    {
        selectedLanguage: TranslationLanguages.ENGLISH,
        setSelectedLanguage: () => {
        },
        selectedWordBags: new Set(),
        setSelectedWordBags: () => {
        },
    },
)
