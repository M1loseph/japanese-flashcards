import { type ReactNode } from 'react';
import * as z from 'zod';

const PronunciationSchema = z.string().or(z.string().array()).optional();

export type Pronunciation = z.infer<typeof PronunciationSchema>;

const TextWithPronunciationSchema = z
    .object({
        text: z.string(),
        pronunciation: PronunciationSchema,
    })
    .readonly();

export type TextWithPronunciation = z.infer<typeof TextWithPronunciationSchema>;

const TranslationSchema = z.object({
    id: z.uuidv4(),
    en: z.string(),
    pl: z.string(),
    jp: TextWithPronunciationSchema,
    description: z.string().optional(),
    image_url: z.string().optional(),
});

// TODO: unify verb types so that there is no repetition of the same fields in each verb type
const TransitivitySchema = z.enum(['transitive', 'intransitive', 'ambitransitive']);

export type Transitivity = z.infer<typeof TransitivitySchema>;

const AuxiliaryVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    transitivity: TransitivitySchema.optional(),
    verb_type: z.literal('auxiliary'),
}).readonly();

const GodanVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    transitivity: TransitivitySchema.optional(),
    verb_type: z.literal('godan'),
    te_form: TextWithPronunciationSchema.optional(),
}).readonly();

const IchidanVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    transitivity: TransitivitySchema.optional(),
    verb_type: z.literal('ichidan'),
    te_form: TextWithPronunciationSchema.optional(),
}).readonly();

const IrregularVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    transitivity: TransitivitySchema.optional(),
    verb_type: z.literal('irregular'),
    stem_form: TextWithPronunciationSchema,
    te_form: TextWithPronunciationSchema,
}).readonly();

const SuruVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    transitivity: TransitivitySchema.optional(),
    verb_type: z.literal('suru'),
}).readonly();

const KuruVerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    transitivity: TransitivitySchema.optional(),
    verb_type: z.literal('kuru'),
}).readonly();

const VerbSchema = z
    .discriminatedUnion('verb_type', [
        AuxiliaryVerbSchema,
        SuruVerbSchema,
        KuruVerbSchema,
        GodanVerbSchema,
        IchidanVerbSchema,
        IrregularVerbSchema,
    ])
    .readonly();

export type AuxiliaryVerb = z.infer<typeof AuxiliaryVerbSchema>;

export type GodanVerb = z.infer<typeof GodanVerbSchema>;

export type IchidanVerb = z.infer<typeof IchidanVerbSchema>;

export type IrregularVerb = z.infer<typeof IrregularVerbSchema>;

export type KuruVerb = z.infer<typeof KuruVerbSchema>;

export type Verb = z.infer<typeof VerbSchema>;

const NounSchema = TranslationSchema.extend({
    type: z.literal('noun'),
}).readonly();

const AdverbSchema = TranslationSchema.extend({
    type: z.literal('adverb'),
}).readonly();

const PhraseSchema = TranslationSchema.extend({
    type: z.literal('phrase'),
}).readonly();

const PreNounAdjectiveSchema = TranslationSchema.extend({
    type: z.literal('pre-noun-adjective'),
}).readonly();

const IAdjectiveSchema = TranslationSchema.extend({
    type: z.literal('adjective'),
    adjective_type: z.literal('i-adjective'),
}).readonly();

const IIrregularAdjectiveSchema = TranslationSchema.extend({
    type: z.literal('adjective'),
    adjective_type: z.literal('i-adjective-irregular'),
    negative: TextWithPronunciationSchema,
    te_form: TextWithPronunciationSchema,
}).readonly();

const NaAdjectiveSchema = TranslationSchema.extend({
    type: z.literal('adjective'),
    adjective_type: z.literal('na-adjective'),
}).readonly();

const AdjectiveSchema = z.discriminatedUnion('adjective_type', [
    IAdjectiveSchema,
    IIrregularAdjectiveSchema,
    NaAdjectiveSchema,
]);

export type Adjective = z.infer<typeof AdjectiveSchema>;

const PronounSchema = TranslationSchema.extend({
    type: z.literal('pronoun'),
}).readonly();

const PrefixSchema = TranslationSchema.extend({
    type: z.literal('prefix'),
}).readonly();

const SuffixSchema = TranslationSchema.extend({
    type: z.literal('suffix'),
}).readonly();

const NumeralSchema = TranslationSchema.extend({
    type: z.literal('numeral'),
}).readonly();

const ParticleSchema = TranslationSchema.extend({
    type: z.literal('particle'),
}).readonly();

const ConjunctionSchema = TranslationSchema.extend({
    type: z.literal('conjunction'),
}).readonly();

export const TranslatedJapaneseTextSchema = z.discriminatedUnion('type', [
    VerbSchema,
    NounSchema,
    PhraseSchema,
    AdjectiveSchema,
    PronounSchema,
    PrefixSchema,
    SuffixSchema,
    NumeralSchema,
    AdverbSchema,
    PreNounAdjectiveSchema,
    ParticleSchema,
    ConjunctionSchema,
]);

export type TranslatedJapaneseText = z.infer<typeof TranslatedJapaneseTextSchema>;

export type TranslatedJapaneseTextType = TranslatedJapaneseText['type'];

const WordBagCategorySchema = z.enum([
    'time',
    'counting',
    'essentials',
    'genki',
    'sakura',
    'duolingo',
    'geography',
    'japanesePod101',
]);

export type WordBagCategory = z.infer<typeof WordBagCategorySchema>;

export const WordBagSchema = z
    .object({
        id: z.uuidv4(),
        name: z.string(),
        category: WordBagCategorySchema,
        words: z.array(TranslatedJapaneseTextSchema).readonly(),
        cultureNotes: z.custom<ReactNode>().optional(),
    })
    .readonly();

export type WordBag = z.infer<typeof WordBagSchema>;
