export const NOT_AVAILABLE = 'N/A';

export type WordType = 'noun' | 'verb' | 'adjective' | 'particle' | 'phrase' | 'other' | 'suffix';

export interface JapaneseWord {
    type: WordType;
    en: string;
    pl: string;
    jp: string;
    jp_pronunciation?: string;
    jp_description?: string;
}

export interface WordBag {
    id: string;
    name: string;
    words: JapaneseWord[];
}
