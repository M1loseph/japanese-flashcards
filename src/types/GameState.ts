import * as z from 'zod';
import { FlashcardSessionSchema } from './FlashcardSession';
import { TranslationLanguagesSchema } from './TranslationLanguage';

const GameTypeSchema = z.union([z.literal('practice'), z.literal('srs')]);

const CommonGameStateSchema = z.object({
    version: z.literal(1),
    title: z.string(),
    gameType: GameTypeSchema,
    flashcards: z.array(FlashcardSessionSchema).readonly(),
    gameStartTimeMs: z.number(),
    simplifiedMode: z.boolean(),
    selectedLanguage: TranslationLanguagesSchema,
});

const GameInProgressStateSchema = CommonGameStateSchema.extend({
    type: z.literal('in-progress'),
    currentFlashcardIndex: z.number(),
}).readonly();

const GameFinishedStateSchema = CommonGameStateSchema.extend({
    type: z.literal('finished'),
    gameEndTimeMs: z.number(),
}).readonly();

export const GameStateSchema = z.discriminatedUnion('type', [GameInProgressStateSchema, GameFinishedStateSchema]);

export type GameState = z.infer<typeof GameStateSchema>;

export type GameType = z.infer<typeof GameTypeSchema>;
