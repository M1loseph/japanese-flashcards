export const NOT_AVAILABLE = 'N/A';

export type QuestionType = 'verb' | 'phrase' | 'noun' | 'adjective';

export interface JapaneseWord {
    type?: QuestionType;
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
