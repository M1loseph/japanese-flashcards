import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingPeople: TranslatedJapaneseText[] = [
    {
        type: 'numeral',
        en: 'One person',
        pl: 'Jedna osoba',
        jp: { text: '一人', pronunciation: 'ひとり' },
    },
    {
        type: 'numeral',
        en: 'Two people',
        pl: 'Dwie osoby',
        jp: { text: '二人', pronunciation: 'ふたり' },
    },
    {
        type: 'numeral',
        en: 'Three people',
        pl: 'Trzy osoby',
        jp: { text: '三人', pronunciation: 'さんにん' },
    },
    {
        type: 'numeral',
        en: 'Four people',
        pl: 'Cztery osoby',
        jp: { text: '四人', pronunciation: 'よにん' },
    },
    {
        type: 'numeral',
        en: 'Five people',
        pl: 'Pięć osób',
        jp: { text: '五人', pronunciation: 'ごにん' },
    },
    {
        type: 'numeral',
        en: 'Six people',
        pl: 'Sześć osób',
        jp: { text: '六人', pronunciation: 'ろくにん' },
    },
    {
        type: 'numeral',
        en: 'Seven people',
        pl: 'Siedem osób',
        jp: { text: '七人', pronunciation: 'ななにん' },
    },
    {
        type: 'numeral',
        en: 'Eight people',
        pl: 'Osiem osób',
        jp: { text: '八人', pronunciation: 'はちにん' },
    },
    {
        type: 'numeral',
        en: 'Nine people',
        pl: 'Dziewięć osób',
        jp: { text: '九人', pronunciation: 'きゅうにん' },
    },
    {
        type: 'numeral',
        en: 'Ten people',
        pl: 'Dziesięć osób',
        jp: { text: '十人', pronunciation: 'じゅうにん' },
    },
    {
        type: 'numeral',
        en: 'Eleven people',
        pl: 'Jedenaście osób',
        jp: { text: '十一人', pronunciation: 'じゅういちにん' },
    },
    {
        type: 'numeral',
        en: 'Twelve people',
        pl: 'Dwanaście osób',
        jp: { text: '十二人', pronunciation: 'じゅうににん' },
    },
    {
        type: 'numeral',
        en: 'How many people',
        pl: 'Ile osób',
        jp: { text: '何人', pronunciation: 'なんにん' },
    },
];

export const countingPeopleBag: WordBag = {
    id: 'cfa8bb1a-71de-4ff5-8572-5f9e1f3c8aa6',
    name: 'Counting People',
    words: countingPeople,
};
