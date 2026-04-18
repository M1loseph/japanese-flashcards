import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingAge: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'One year old',
        pl: 'Jeden rok (wiek)',
        jp: { text: '一歳', pronunciation: 'いっさい' },
    },
    {
        type: 'noun',
        en: 'Two years old',
        pl: 'Dwa lata (wiek)',
        jp: { text: '二歳', pronunciation: 'にさい' },
    },
    {
        type: 'noun',
        en: 'Three years old',
        pl: 'Trzy lata (wiek)',
        jp: { text: '三歳', pronunciation: 'さんさい' },
    },
    {
        type: 'noun',
        en: 'Four years old',
        pl: 'Cztery lata (wiek)',
        jp: { text: '四歳', pronunciation: 'よんさい' },
    },
    {
        type: 'noun',
        en: 'Five years old',
        pl: 'Pięć lat (wiek)',
        jp: { text: '五歳', pronunciation: 'ごさい' },
    },
    {
        type: 'noun',
        en: 'Six years old',
        pl: 'Sześć lat (wiek)',
        jp: { text: '六歳', pronunciation: 'ろくさい' },
    },
    {
        type: 'noun',
        en: 'Seven years old',
        pl: 'Siedem lat (wiek)',
        jp: { text: '七歳', pronunciation: 'ななさい' },
    },
    {
        type: 'noun',
        en: 'Eight years old',
        pl: 'Osiem lat (wiek)',
        jp: { text: '八歳', pronunciation: 'はっさい' },
    },
    {
        type: 'noun',
        en: 'Nine years old',
        pl: 'Dziewięć lat (wiek)',
        jp: { text: '九歳', pronunciation: 'きゅうさい' },
    },
    {
        type: 'noun',
        en: 'Ten years old',
        pl: 'Dziesięć lat (wiek)',
        jp: { text: '十歳', pronunciation: 'じゅっさい' },
    },
    {
        type: 'noun',
        en: 'Eleven years old',
        pl: 'Jedenaście lat (wiek)',
        jp: { text: '十一歳', pronunciation: 'じゅういっさい' },
    },
    {
        type: 'noun',
        en: 'Seventeen years old',
        pl: 'Siedemnaście lat (wiek)',
        jp: { text: '十七歳', pronunciation: 'じゅうななさい' },
    },
    {
        type: 'noun',
        en: 'Nineteen years old',
        pl: 'Dziewiętnaście lat (wiek)',
        jp: { text: '十九歳', pronunciation: 'じゅうきゅうさい' },
    },
    {
        type: 'noun',
        en: 'Twenty years old',
        pl: 'Dwadzieścia lat (wiek)',
        jp: { text: '二十歳', pronunciation: 'はたち' },
    },
    {
        type: 'noun',
        en: 'Twenty eight years old',
        pl: 'Dwadzieścia osiem lat (wiek)',
        jp: { text: '二十八歳', pronunciation: 'にじゅうはっさい' },
    },
    {
        type: 'noun',
        en: 'Thirty years old',
        pl: 'Trzydzieści lat (wiek)',
        jp: { text: '三十歳', pronunciation: 'さんじゅっさい' },
    },
    {
        type: 'phrase',
        en: 'How old are you? (informal)',
        pl: 'Ile masz lat? (nieformalnie)',
        jp: { text: '何歳ですか。', pronunciation: 'なんさいですか。' },
    },
    {
        type: 'phrase',
        en: 'How old are you? (formal)',
        pl: 'Ile ma pan/pani lat? (formalnie)',
        jp: { text: 'おいくつですか。' },
    },
    {
        type: 'phrase',
        en: 'How old is your mother? (formal)',
        pl: 'Ile lat ma twoja mama? (formalnie)',
        jp: { text: 'お母さんはおいくつですか。', pronunciation: 'おかあさんはおいくつですか。' },
    },
];

export const countingAgeBag: WordBag = {
    id: '29b48948-426e-4054-87e1-15b03cfdf017',
    name: 'Counting Age',
    words: countingAge,
};
