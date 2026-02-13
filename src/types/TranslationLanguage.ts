import * as z from 'zod';

export const TranslationLanguages = {
    POLISH: 'pl',
    ENGLISH: 'en',
} as const;

export const TranslationLanguagesSchema = z.enum(TranslationLanguages);

export type TranslationLanguage = z.infer<typeof TranslationLanguagesSchema>;
