import { type ReactNode } from 'react';
import * as z from 'zod';

const TextWithPronunciationSchema = z.object({
    text: z.string(),
    pronunciation: z.string().optional(),
});

export type TextWithPronunciation = z.infer<typeof TextWithPronunciationSchema>;

const TranslationSchema = z.object({
    en: z.string(),
    pl: z.string(),
    jp: TextWithPronunciationSchema,
    description: z.string().optional(),
    image_url: z.string().optional(),
});

const PresentFormSchema = z.object({
    masu: z.object({ affirmative: TextWithPronunciationSchema, negative: TextWithPronunciationSchema }),
});

const AuxiliaryVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    verb_type: z.literal('auxiliary'),
});

const GodanVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    verb_type: z.literal('godan'),
    present: PresentFormSchema,
});

const IchidanVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    verb_type: z.literal('ichidan'),
    present: PresentFormSchema,
});

const IrregularVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    verb_type: z.literal('irregular'),
    present: PresentFormSchema,
});

const VerbSchema = z.discriminatedUnion('verb_type', [
    AuxiliaryVerbSchema,
    GodanVerbSchema,
    IchidanVerbSchema,
    IrregularVerbSchema,
]);

export type AuxiliaryVerb = z.infer<typeof AuxiliaryVerbSchema>;

export type GodanVerb = z.infer<typeof GodanVerbSchema>;

export type IchidanVerb = z.infer<typeof IchidanVerbSchema>;

export type IrregularVerb = z.infer<typeof IrregularVerbSchema>;

export type Verb = z.infer<typeof VerbSchema>;

const NounSchema = TranslationSchema.extend({
    type: z.literal('noun'),
});

const AdverbSchema = TranslationSchema.extend({
    type: z.literal('adverb'),
});

const PhraseSchema = TranslationSchema.extend({
    type: z.literal('phrase'),
});

const PreNounAdjectiveSchema = TranslationSchema.extend({
    type: z.literal('pre-noun-adjective'),
});

const IAdjectiveSchema = TranslationSchema.extend({
    type: z.literal('adjective'),
    adjective_type: z.literal('i-adjective'),
});

const IIrregularAdjectiveSchema = TranslationSchema.extend({
    type: z.literal('adjective'),
    adjective_type: z.literal('i-adjective-irregular'),
    negative: TextWithPronunciationSchema,
});

const NaAdjectiveSchema = TranslationSchema.extend({
    type: z.literal('adjective'),
    adjective_type: z.literal('na-adjective'),
});

const AdjectiveSchema = z.discriminatedUnion('adjective_type', [
    IAdjectiveSchema,
    IIrregularAdjectiveSchema,
    NaAdjectiveSchema,
]);

export type Adjective = z.infer<typeof AdjectiveSchema>;

const PronounSchema = TranslationSchema.extend({
    type: z.literal('pronoun'),
});

const SuffixSchema = TranslationSchema.extend({
    type: z.literal('suffix'),
});

const NumeralSchema = TranslationSchema.extend({
    type: z.literal('numeral'),
});

const ParticleSchema = TranslationSchema.extend({
    type: z.literal('particle'),
});

const ConjunctionSchema = TranslationSchema.extend({
    type: z.literal('conjunction'),
});

const UnknownWordSchema = TranslationSchema.extend({
    type: z.literal('unknown'),
});

export const TranslatedJapaneseTextSchema = z.discriminatedUnion('type', [
    VerbSchema,
    NounSchema,
    PhraseSchema,
    AdjectiveSchema,
    PronounSchema,
    SuffixSchema,
    NumeralSchema,
    AdverbSchema,
    PreNounAdjectiveSchema,
    ParticleSchema,
    ConjunctionSchema,
    UnknownWordSchema,
]);

export type TranslatedJapaneseText = z.infer<typeof TranslatedJapaneseTextSchema>;

export type TranslatedJapaneseTextType = TranslatedJapaneseText['type'];

export const WordBagSchema = z.object({
    id: z.string(),
    name: z.string(),
    words: z.array(TranslatedJapaneseTextSchema),
    cultureNotes: z.custom<ReactNode>().optional(),
});

export type WordBag = z.infer<typeof WordBagSchema>;
