import type { TranslatedJapaneseText, WordBag } from '../../types';

const ordinalNumbers: TranslatedJapaneseText[] = [
    {
        id: 'f3cf7899-60ea-4257-903f-e85b93898839',
        type: 'numeral',
        en: 'First',
        pl: 'Pierwszy',
        jp: { text: '一番', pronunciation: 'いちばん' },
    },
    {
        id: 'ebdd9103-3120-499f-806e-c3db81993647',
        type: 'numeral',
        en: 'Second',
        pl: 'Drugi',
        jp: { text: '二番', pronunciation: 'にばん' },
    },
    {
        id: 'a7327bee-145c-4605-b92f-1253da7da7e8',
        type: 'numeral',
        en: 'Third',
        pl: 'Trzeci',
        jp: { text: '三番', pronunciation: 'さんばん' },
    },
    {
        id: '8b2dbeab-b6ae-4b1e-a7f6-3d51e6a7c68f',
        type: 'numeral',
        en: 'Fourth',
        pl: 'Czwarty',
        jp: { text: '四番', pronunciation: 'よんばん' },
    },
    {
        id: '1221983c-d157-4498-8c8a-554189577a57',
        type: 'numeral',
        en: 'Fifth',
        pl: 'Piąty',
        jp: { text: '五番', pronunciation: 'ごばん' },
    },
    {
        id: '5605a6ea-a0fa-4381-9d25-c2a596e0d06a',
        type: 'numeral',
        en: 'Sixth',
        pl: 'Szósty',
        jp: { text: '六番', pronunciation: 'ろくばん' },
    },
    {
        id: '093ad132-f405-48ee-91cf-b1acd82c0962',
        type: 'numeral',
        en: 'Seventh',
        pl: 'Siódmy',
        jp: { text: '七番', pronunciation: 'ななばん' },
    },
    {
        id: '2dd15ece-3342-467f-9157-8f94203c8712',
        type: 'numeral',
        en: 'Eighth',
        pl: 'Ósmy',
        jp: { text: '八番', pronunciation: 'はちばん' },
    },
    {
        id: '0570f9f7-e65c-4312-a906-946e5b1f1cdc',
        type: 'numeral',
        en: 'Ninth',
        pl: 'Dziewiąty',
        jp: { text: '九番', pronunciation: 'きゅうばん' },
    },
    {
        id: '1a10b683-4f4f-4783-be49-7bd23e71a163',
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
