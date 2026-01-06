export const NOT_AVAILABLE = 'N/A';

export const WordTypes = {
    VERB: 'verb',
    PHRASE: 'phrase',
    NOUN: 'noun',
    ADJECTIVE: 'adjective',
    PRONOUN: 'pronoun',
    SUFFIX: 'suffix',
} as const;

export type WordType = (typeof WordTypes)[keyof typeof WordTypes];

export interface JapaneseWord {
    type?: WordType;
    en: string;
    pl: string;
    jp: string;
    jp_pronunciation?: string;
    jp_description?: string | string[];
}

export interface WordBag {
    id: string;
    name: string;
    words: JapaneseWord[];
}
