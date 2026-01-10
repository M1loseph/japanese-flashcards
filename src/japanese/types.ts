export const WordTypes = {
    VERB: 'verb',
    PHRASE: 'phrase',
    NOUN: 'noun',
    ADJECTIVE: 'adjective',
    PRONOUN: 'pronoun',
    SUFFIX: 'suffix',
    NUMERAL: 'numeral',
    UNKNOWN: 'unknown',
} as const;

export type WordType = (typeof WordTypes)[keyof typeof WordTypes];

type Translation = {
    en: string;
    pl: string;
    jp: string;
    jp_pronunciation?: string;
    jp_description?: string;
}

export type Verb = Translation & {
    type: 'verb';
    verb_type: 'godan' | 'ichidan' | 'irregular';
    masu_form: string;
    masen_form: string;
}

export type Noun = Translation & {
    type: 'noun';
}

export type Phrase = Translation & {
    type: 'phrase';
}

export type Adjective = Translation & {
    type: 'adjective';
}

export type Pronoun = Translation & {
    type: 'pronoun';
}

export type Suffix = Translation & {
    type: 'suffix';
}

export type Numeral = Translation & {
    type: 'numeral';
}

export type UnknownWord = Translation & {
    type: 'unknown';
}

export type JapaneseWord = Verb | Noun | Phrase | Adjective | Pronoun | Suffix | Numeral | UnknownWord;

export interface WordBag {
    id: string;
    name: string;
    words: JapaneseWord[];
}
