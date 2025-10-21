export const NOT_AVAILABLE = "N/A";

export interface JapaneseWord {
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
