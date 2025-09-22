import {createContext} from "react";

export const POLISH = "pl"
export const ENGLISH = "en"
const languages = [POLISH, ENGLISH] as const
export type TranslationLanguage = typeof languages[number]

export interface LessonContextType {
    selectedLanguage: TranslationLanguage;
    setSelectedLanguage: (lang: TranslationLanguage) => void;
    selectedWordBags: Set<string>;
    setSelectedWordBags: (bags: Set<string>) => void;
}

export const LessonContext = createContext<LessonContextType>(
    {
        selectedLanguage: ENGLISH,
        setSelectedLanguage: () => {
        },
        selectedWordBags: new Set(),
        setSelectedWordBags: () => {
        }
    }
)
