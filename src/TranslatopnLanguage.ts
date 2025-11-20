export const TranslationLanguages = {
    POLISH: "pl", ENGLISH: "en",
} as const
export type TranslationLanguage = typeof TranslationLanguages[keyof typeof TranslationLanguages]
