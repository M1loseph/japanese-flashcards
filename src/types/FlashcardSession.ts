import * as z from 'zod';
import { TranslatedJapaneseTextSchema } from '../japanese/types';

export const FlashcardSessionSchema = z.object({
    word: TranslatedJapaneseTextSchema,
    wordBag: z.string(),
    answered: z.boolean(),
    correct: z.boolean(),
});

export type FlashcardSession = z.infer<typeof FlashcardSessionSchema>;
