import * as z from 'zod';
import { JapaneseWordSchema } from '../japanese/types';

export const FlashcardSessionSchema = z.object({
    word: JapaneseWordSchema,
    wordBag: z.string(),
    answered: z.boolean(),
    correct: z.boolean(),
});

export type FlashcardSession = z.infer<typeof FlashcardSessionSchema>;
