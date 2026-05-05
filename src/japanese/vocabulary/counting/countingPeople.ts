import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingPeople: TranslatedJapaneseText[] = [
    {
        id: 'a508fd33-da59-4aa3-99fb-7af38023431a',
        type: 'numeral',
        en: 'One person',
        pl: 'Jedna osoba',
        jp: { text: '一人', pronunciation: 'ひとり' },
    },
    {
        id: '647f754a-b98c-43c8-baee-4a5291abecb7',
        type: 'numeral',
        en: 'Two people',
        pl: 'Dwie osoby',
        jp: { text: '二人', pronunciation: 'ふたり' },
    },
    {
        id: '9ccf40d8-d678-4472-a94c-86ac7ee46f7f',
        type: 'numeral',
        en: 'Three people',
        pl: 'Trzy osoby',
        jp: { text: '三人', pronunciation: 'さんにん' },
    },
    {
        id: 'c62b3a51-71ce-48c7-abc2-26266475c838',
        type: 'numeral',
        en: 'Four people',
        pl: 'Cztery osoby',
        jp: { text: '四人', pronunciation: 'よにん' },
    },
    {
        id: '169fcc26-ea5d-4c5d-bcab-645b684d24af',
        type: 'numeral',
        en: 'Five people',
        pl: 'Pięć osób',
        jp: { text: '五人', pronunciation: 'ごにん' },
    },
    {
        id: 'ae3a2cf0-9c22-4a20-a075-4942ac9e60d5',
        type: 'numeral',
        en: 'Six people',
        pl: 'Sześć osób',
        jp: { text: '六人', pronunciation: 'ろくにん' },
    },
    {
        id: '94190d76-3479-4d5a-9ff8-9e11dc4c3340',
        type: 'numeral',
        en: 'Seven people',
        pl: 'Siedem osób',
        jp: { text: '七人', pronunciation: 'ななにん' },
    },
    {
        id: '866af7e9-f3b1-4de0-acce-0e2c3d09f04f',
        type: 'numeral',
        en: 'Eight people',
        pl: 'Osiem osób',
        jp: { text: '八人', pronunciation: 'はちにん' },
    },
    {
        id: '336e85d8-3355-4bd7-80e4-e78136c2911a',
        type: 'numeral',
        en: 'Nine people',
        pl: 'Dziewięć osób',
        jp: { text: '九人', pronunciation: 'きゅうにん' },
    },
    {
        id: '0467f56f-4a9b-44e6-89dc-8c27a6acdf0b',
        type: 'numeral',
        en: 'Ten people',
        pl: 'Dziesięć osób',
        jp: { text: '十人', pronunciation: 'じゅうにん' },
    },
    {
        id: 'a7707181-d48b-4677-b195-4c18541b0f5a',
        type: 'numeral',
        en: 'Eleven people',
        pl: 'Jedenaście osób',
        jp: { text: '十一人', pronunciation: 'じゅういちにん' },
    },
    {
        id: '25eeb83f-b7a2-4e53-b6a7-b4166651c4ce',
        type: 'numeral',
        en: 'Twelve people',
        pl: 'Dwanaście osób',
        jp: { text: '十二人', pronunciation: 'じゅうににん' },
    },
    {
        id: 'b02238ce-3bcc-4643-8180-a2e41e9629ec',
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
