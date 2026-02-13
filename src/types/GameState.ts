import { FlashcardSessionSchema } from './FlashcardSession';
import { TranslationLanguagesSchema } from './TranslationLanguage';
import * as z from 'zod';

export const GameStateSchema = z.object({
    version: z.literal(1),
    initialWordBags: z.array(z.string()),
    flashcards: z.array(FlashcardSessionSchema),
    gameStartTimeMs: z.number(),
    currentFlashcardIndex: z.number(),
    selectedLanguage: TranslationLanguagesSchema,
});

export type GameState = z.infer<typeof GameStateSchema>;
