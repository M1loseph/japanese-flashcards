import { FlashcardSessionSchema } from './FlashcardSession';
import { TranslationLanguagesSchema } from './TranslationLanguage';
import * as z from 'zod';

export const CommonGameStateSchema = z.object({
    version: z.literal(1),
    initialWordBags: z.array(z.string()),
    flashcards: z.array(FlashcardSessionSchema),
    gameStartTimeMs: z.number(),
    simplifiedMode: z.boolean(),
    selectedLanguage: TranslationLanguagesSchema,
});

export const GameInProgressStateSchema = CommonGameStateSchema.extend({
    type: z.literal('in-progress'),
    currentFlashcardIndex: z.number(),
});

export const GameFinishedStateSchema = CommonGameStateSchema.extend({
    type: z.literal('finished'),
    gameEndTimeMs: z.number(),
});

export const GameStateSchema = z.discriminatedUnion('type', [GameInProgressStateSchema, GameFinishedStateSchema]);

export type GameState = z.infer<typeof GameStateSchema>;
