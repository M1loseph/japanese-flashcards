export interface JapaneseWord {
    en: string;
    pl: string;
    jp: string | "N/A";
    jp_pronounciation?: string;
    jp_description?: string;
}

export interface WordBag {
    id: string;
    name: string;
    words: JapaneseWord[];
}
