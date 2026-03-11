import type { TranslatedJapaneseText, WordBag } from '../../types';

const hours: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: "1 o'clock",
        pl: 'Pierwsza godzina',
        jp: { text: '一時', pronunciation: 'いちじ' },
    },
    {
        type: 'noun',
        en: "2 o'clock",
        pl: 'Druga godzina',
        jp: { text: '二時', pronunciation: 'にじ' },
    },
    {
        type: 'noun',
        en: "3 o'clock",
        pl: 'Trzecia godzina',
        jp: { text: '三時', pronunciation: 'さんじ' },
    },
    {
        type: 'noun',
        en: "4 o'clock",
        pl: 'Czwarta godzina',
        jp: { text: '四時', pronunciation: 'よじ' },
    },
    {
        type: 'noun',
        en: "5 o'clock",
        pl: 'Piąta godzina',
        jp: { text: '五時', pronunciation: 'ごじ' },
    },
    {
        type: 'noun',
        en: "6 o'clock",
        pl: 'Szósta godzina',
        jp: { text: '六時', pronunciation: 'ろくじ' },
    },
    {
        type: 'noun',
        en: "7 o'clock",
        pl: 'Siódma godzina',
        jp: { text: '七時', pronunciation: 'しちじ' },
    },
    {
        type: 'noun',
        en: "8 o'clock",
        pl: 'Ósma godzina',
        jp: { text: '八時', pronunciation: 'はちじ' },
    },
    {
        type: 'noun',
        en: "9 o'clock",
        pl: 'Dziewiąta godzina',
        jp: { text: '九時', pronunciation: 'くじ' },
    },
    {
        type: 'noun',
        en: "10 o'clock",
        pl: 'Dziesiąta godzina',
        jp: { text: '十時', pronunciation: 'じゅうじ' },
    },
    {
        type: 'noun',
        en: "11 o'clock",
        pl: 'Jedenasta godzina',
        jp: { text: '十一時', pronunciation: 'じゅういちじ' },
    },
    {
        type: 'noun',
        en: "12 o'clock",
        pl: 'Dwunasta godzina',
        jp: { text: '十二時', pronunciation: 'じゅうにじ' },
    },
    {
        type: 'suffix',
        en: 'Hour',
        pl: 'Godzina',
        jp: { text: '時', pronunciation: 'じ' },
    },
];

export const hoursBag: WordBag = {
    id: 'c67e0046-1cca-4ec6-87c9-be345d790236',
    name: 'Hours',
    words: hours,
};
