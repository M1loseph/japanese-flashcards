import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingLoavesOfBread: TranslatedJapaneseText[] = [
    {
        id: 'e9c635cb-6177-4d31-b073-5ba09ba4a24b',
        type: 'numeral',
        en: 'One loaf of bread',
        pl: 'Jeden bochenek chleba',
        jp: { text: '一斤', pronunciation: 'いっきん' },
    },
    {
        id: '0db0e047-1bf6-4975-8bdc-34077d026426',
        type: 'numeral',
        en: 'Two loaves of bread',
        pl: 'Dwa bochenki chleba',
        jp: { text: '二斤', pronunciation: 'にきん' },
    },
    {
        id: 'ec2a9cfd-fc59-44ae-a3b9-cada39dde844',
        type: 'numeral',
        en: 'Three loaves of bread',
        pl: 'Trzy bochenki chleba',
        jp: { text: '三斤', pronunciation: 'さんきん' },
    },
    {
        id: '6220225b-cebc-4ff9-ae9a-e8076c65bc66',
        type: 'numeral',
        en: 'Four loaves of bread',
        pl: 'Cztery bochenki chleba',
        jp: { text: '四斤', pronunciation: 'よんきん' },
    },
    {
        id: '1f16ab44-9d63-4ce3-9239-57b1aefed617',
        type: 'numeral',
        en: 'Five loaves of bread',
        pl: 'Pięć bochenków chleba',
        jp: { text: '五斤', pronunciation: 'ごきん' },
    },
    {
        id: '90d54121-9d09-447c-83d3-2872abb74423',
        type: 'numeral',
        en: 'Six loaves of bread',
        pl: 'Sześć bochenków chleba',
        jp: { text: '六斤', pronunciation: 'ろっきん' },
    },
    {
        id: '3b0e3129-5653-4818-8a0c-1162bf7b2fdc',
        type: 'numeral',
        en: 'Seven loaves of bread',
        pl: 'Siedem bochenków chleba',
        jp: { text: '七斤', pronunciation: 'ななきん' },
    },
    {
        id: 'ba91999b-76e8-44d3-99ae-ddae546dcf06',
        type: 'numeral',
        en: 'Eight loaves of bread',
        pl: 'Osiem bochenków chleba',
        jp: { text: '八斤', pronunciation: 'はっきん' },
    },
    {
        id: '8e5e8e05-2a60-456f-926f-e74f1b13ad81',
        type: 'numeral',
        en: 'Nine loaves of bread',
        pl: 'Dziewięć bochenków chleba',
        jp: { text: '九斤', pronunciation: 'きゅうきん' },
    },
    {
        id: '70fbe0d8-8007-48bc-a6d7-93ee0ca76369',
        type: 'numeral',
        en: 'Ten loaves of bread',
        pl: 'Dziesięć bochenków chleba',
        jp: { text: '十斤', pronunciation: 'じゅっきん' },
    },
];

export const countingLoavesOfBreadBag: WordBag = {
    id: 'b82cc85c-d865-47ab-8edc-0567cabe5108',
    name: 'Counting Loaves of Bread',
    category: 'counting',
    words: countingLoavesOfBread,
};
