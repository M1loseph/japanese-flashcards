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

const VerbSchema = TranslationSchema.extend({
    type: z.literal('verb'),
    verb_type: z.enum(['godan', 'ichidan', 'irregular']),
    present: z.object({
        masu: z.object({
            affirmative: TextWithPronunciationSchema,
            negative: TextWithPronunciationSchema,
        }),
    }),
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
});

export type WordBag = z.infer<typeof WordBagSchema>;
