import * as z from 'zod';

const TranslationSchema = z.object({
    en: z.string(),
    pl: z.string(),
    jp: z.string(),
    jp_pronunciation: z.string().optional(),
    jp_description: z.string().optional(),
});

const VerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    verb_type: z.enum(['godan', 'ichidan', 'irregular']),
    masu_form: z.string(),
    masen_form: z.string(),
});

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

const AdjectiveSchema = TranslationSchema.extend({
    type: z.literal('adjective'),
    adjective_type: z.enum(['i-adjective', 'na-adjective']),
});

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

export const JapaneseWordSchema = z.discriminatedUnion('type', [
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

export type JapaneseWord = z.infer<typeof JapaneseWordSchema>;

export type WordType = JapaneseWord['type'];

export const WordBagSchema = z.object({
    id: z.string(),
    name: z.string(),
    words: z.array(JapaneseWordSchema),
});

export type WordBag = z.infer<typeof WordBagSchema>;
