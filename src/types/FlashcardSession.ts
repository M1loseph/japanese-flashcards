import * as z from 'zod';

export const FlashcardSessionSchema = z.object({
    wordId: z.string(),
    answered: z.boolean(),
    correct: z.boolean(),
});

export type FlashcardSession = z.infer<typeof FlashcardSessionSchema>;
