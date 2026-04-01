import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingPeoplePolite: TranslatedJapaneseText[] = [
    {
        type: 'numeral',
        en: 'One person (polite)',
        pl: 'Jedna osoba (grzecznościowo)',
        jp: { text: '一名', pronunciation: 'いちめい' },
    },
    {
        type: 'numeral',
        en: 'Two people (polite)',
        pl: 'Dwie osoby (grzecznościowo)',
        jp: { text: '二名', pronunciation: 'にめい' },
    },
    {
        type: 'numeral',
        en: 'Three people (polite)',
        pl: 'Trzy osoby (grzecznościowo)',
        jp: { text: '三名', pronunciation: 'さんめい' },
    },
    {
        type: 'numeral',
        en: 'Four people (polite)',
        pl: 'Cztery osoby (grzecznościowo)',
        jp: { text: '四名', pronunciation: 'よんめい' },
    },
    {
        type: 'numeral',
        en: 'Five people (polite)',
        pl: 'Pięć osób (grzecznościowo)',
        jp: { text: '五名', pronunciation: 'ごめい' },
    },
    {
        type: 'numeral',
        en: 'Six people (polite)',
        pl: 'Sześć osób (grzecznościowo)',
        jp: { text: '六名', pronunciation: 'ろくめい' },
    },
    {
        type: 'numeral',
        en: 'Seven people (polite)',
        pl: 'Siedem osób (grzecznościowo)',
        jp: { text: '七名', pronunciation: 'ななめい' },
    },
    {
        type: 'numeral',
        en: 'Eight people (polite)',
        pl: 'Osiem osób (grzecznościowo)',
        jp: { text: '八名', pronunciation: 'はちめい' },
    },
    {
        type: 'numeral',
        en: 'Nine people (polite)',
        pl: 'Dziewięć osób (grzecznościowo)',
        jp: { text: '九名', pronunciation: 'きゅうめい' },
    },
    {
        type: 'numeral',
        en: 'Ten people (polite)',
        pl: 'Dziesięć osób (grzecznościowo)',
        jp: { text: '十名', pronunciation: 'じゅうめい' },
    },
    {
        type: 'numeral',
        en: 'Eleven people (polite)',
        pl: 'Jedenaście osób (grzecznościowo)',
        jp: { text: '十一名', pronunciation: 'じゅういちめい' },
    },
    {
        type: 'numeral',
        en: 'Twenty people (polite)',
        pl: 'Dwadzieścia osób (grzecznościowo)',
        jp: { text: '二十名', pronunciation: 'にじゅうめい' },
    },
    {
        type: 'numeral',
        en: 'How many people (polite)',
        pl: 'Ile osób (grzecznościowo)',
        jp: { text: '何名', pronunciation: 'なんめい' },
    },
];

export const countingPeoplePoliteBag: WordBag = {
    id: 'ecce8b0e-56d1-4290-9bff-db386687c32b',
    name: 'Counting People (Polite)',
    words: countingPeoplePolite,
};
