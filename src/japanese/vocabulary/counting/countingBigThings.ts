import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingBigThings: TranslatedJapaneseText[] = [
    {
        id: 'bda89a74-c242-4a92-b3e4-3bc4d79dded2',
        type: 'numeral',
        en: 'One big thing',
        pl: 'Jedna duża rzecz',
        jp: { text: '一つ', pronunciation: 'ひとつ' },
    },
    {
        id: '9a2a093a-bbd4-4b14-a0df-d66f379ce2a6',
        type: 'numeral',
        en: 'Two big things',
        pl: 'Dwie duże rzeczy',
        jp: { text: '二つ', pronunciation: 'ふたつ' },
    },
    {
        id: 'a07f6041-bdbb-4161-8f9c-0d55c182f3f4',
        type: 'numeral',
        en: 'Three big things',
        pl: 'Trzy duże rzeczy',
        jp: { text: '三つ', pronunciation: 'みっつ' },
    },
    {
        id: 'd37d6e24-9ee6-4435-b419-3f90ebdfeba0',
        type: 'numeral',
        en: 'Four big things',
        pl: 'Cztery duże rzeczy',
        jp: { text: '四つ', pronunciation: 'よっつ' },
    },
    {
        id: 'cbe1b93e-1512-4de0-a6e6-080ee70649c5',
        type: 'numeral',
        en: 'Five big things',
        pl: 'Pięć dużych rzeczy',
        jp: { text: '五つ', pronunciation: 'いつつ' },
    },
    {
        id: 'a4ddf9ec-bdf1-46a5-8802-09f5a2bd5d25',
        type: 'numeral',
        en: 'Six big things',
        pl: 'Sześć dużych rzeczy',
        jp: { text: '六つ', pronunciation: 'むっつ' },
    },
    {
        id: 'ef8c8663-d1ca-4ff1-8a26-9718c0a14422',
        type: 'numeral',
        en: 'Seven big things',
        pl: 'Siedem dużych rzeczy',
        jp: { text: '七つ', pronunciation: 'ななつ' },
    },
    {
        id: '412b8a15-e061-4d32-baff-05de92537676',
        type: 'numeral',
        en: 'Eight big things',
        pl: 'Osiem dużych rzeczy',
        jp: { text: '八つ', pronunciation: 'やっつ' },
    },
    {
        id: '7712e136-028f-4da1-9bc1-82a2234e4f94',
        type: 'numeral',
        en: 'Nine big things',
        pl: 'Dziewięć dużych rzeczy',
        jp: { text: '九つ', pronunciation: 'ここのつ' },
    },
    {
        id: 'e8054872-b9dc-486c-bc1e-c2d607e220ee',
        type: 'numeral',
        en: 'Ten big things',
        pl: 'Dziesięć dużych rzeczy',
        jp: { text: '十', pronunciation: 'とお' },
    },
    {
        id: '24958697-c7a6-4f43-aec4-5dab9e115a06',
        type: 'phrase',
        formality: 'formal',
        en: 'How many bowls of ramen do you want?',
        pl: 'Ile ramenów chciałbyś?',
        jp: { text: 'ラーメンがいくつ欲しいですか。', pronunciation: 'ラーメンがいくつほしいですか。' },
    },
    {
        id: 'f9fc4523-e6b4-4df1-ac64-a05a94bac9e2',
        type: 'numeral',
        en: 'How many things',
        pl: 'Ile rzeczy',
        jp: { text: 'いくつ' },
    },
];

export const countingBigThingsBag: WordBag = {
    id: 'f1f12e01-87cf-437d-b67f-696a17be41d5',
    name: 'Counting Big Things',
    category: 'counting',
    words: countingBigThings,
};
