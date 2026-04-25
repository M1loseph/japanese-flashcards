import type { TranslatedJapaneseText, WordBag } from '../../types';

const ordinalNumbers: TranslatedJapaneseText[] = [
    {
        type: 'numeral',
        en: 'First',
        pl: 'Pierwszy',
        jp: { text: '一番', pronunciation: 'いちばん' },
    },
    {
        type: 'numeral',
        en: 'Second',
        pl: 'Drugi',
        jp: { text: '二番', pronunciation: 'にばん' },
    },
    {
        type: 'numeral',
        en: 'Third',
        pl: 'Trzeci',
        jp: { text: '三番', pronunciation: 'さんばん' },
    },
    {
        type: 'numeral',
        en: 'Fourth',
        pl: 'Czwarty',
        jp: { text: '四番', pronunciation: 'よんばん' },
    },
    {
        type: 'numeral',
        en: 'Fifth',
        pl: 'Piąty',
        jp: { text: '五番', pronunciation: 'ごばん' },
    },
    {
        type: 'numeral',
        en: 'Sixth',
        pl: 'Szósty',
        jp: { text: '六番', pronunciation: 'ろくばん' },
    },
    {
        type: 'numeral',
        en: 'Seventh',
        pl: 'Siódmy',
        jp: { text: '七番', pronunciation: 'ななばん' },
    },
    {
        type: 'numeral',
        en: 'Eighth',
        pl: 'Ósmy',
        jp: { text: '八番', pronunciation: 'はちばん' },
    },
    {
        type: 'numeral',
        en: 'Ninth',
        pl: 'Dziewiąty',
        jp: { text: '九番', pronunciation: 'きゅうばん' },
    },
    {
        type: 'numeral',
        en: 'Tenth',
        pl: 'Dziesiąty',
        jp: { text: '十番', pronunciation: 'じゅうばん' },
    },
];

export const ordinalNumbersBag: WordBag = {
    id: '3c8e3c11-2d6c-4364-92d6-dfeb1b80663d',
    name: 'Ordinal Numbers',
    words: ordinalNumbers,
};
