import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingPeoplePolite: TranslatedJapaneseText[] = [
    {
        id: 'b984cfc5-cc4b-47d4-8e00-c3ad92e0622e',
        type: 'numeral',
        en: 'One person (polite)',
        pl: 'Jedna osoba (grzecznościowo)',
        jp: { text: '一名', pronunciation: 'いちめい' },
    },
    {
        id: 'cc72fa90-e2f0-4c9e-91ce-a51df895fd0a',
        type: 'numeral',
        en: 'Two people (polite)',
        pl: 'Dwie osoby (grzecznościowo)',
        jp: { text: '二名', pronunciation: 'にめい' },
    },
    {
        id: 'a2f7451d-8267-415c-980b-9ce706cd14b6',
        type: 'numeral',
        en: 'Three people (polite)',
        pl: 'Trzy osoby (grzecznościowo)',
        jp: { text: '三名', pronunciation: 'さんめい' },
    },
    {
        id: '46826747-a1b3-43e5-8acb-7b37f1541242',
        type: 'numeral',
        en: 'Four people (polite)',
        pl: 'Cztery osoby (grzecznościowo)',
        jp: { text: '四名', pronunciation: 'よんめい' },
    },
    {
        id: '5993fd3d-c12d-4f1d-88ab-1834a7a910cb',
        type: 'numeral',
        en: 'Five people (polite)',
        pl: 'Pięć osób (grzecznościowo)',
        jp: { text: '五名', pronunciation: 'ごめい' },
    },
    {
        id: '6c90c06e-2802-4fde-950b-ae381b280f17',
        type: 'numeral',
        en: 'Six people (polite)',
        pl: 'Sześć osób (grzecznościowo)',
        jp: { text: '六名', pronunciation: 'ろくめい' },
    },
    {
        id: '0c7a920c-756c-479c-8ca7-75f82b8f2967',
        type: 'numeral',
        en: 'Seven people (polite)',
        pl: 'Siedem osób (grzecznościowo)',
        jp: { text: '七名', pronunciation: 'ななめい' },
    },
    {
        id: 'a1ba9bf4-97cb-4b3d-a66f-824f5d9d329d',
        type: 'numeral',
        en: 'Eight people (polite)',
        pl: 'Osiem osób (grzecznościowo)',
        jp: { text: '八名', pronunciation: 'はちめい' },
    },
    {
        id: '8cf81fdf-e504-4ce9-9b5a-0547516331b6',
        type: 'numeral',
        en: 'Nine people (polite)',
        pl: 'Dziewięć osób (grzecznościowo)',
        jp: { text: '九名', pronunciation: 'きゅうめい' },
    },
    {
        id: 'f699155f-8909-473a-ae25-d13bb0ee4df0',
        type: 'numeral',
        en: 'Ten people (polite)',
        pl: 'Dziesięć osób (grzecznościowo)',
        jp: { text: '十名', pronunciation: 'じゅうめい' },
    },
    {
        id: '8290daad-2019-4839-9729-6059c355e107',
        type: 'numeral',
        en: 'Eleven people (polite)',
        pl: 'Jedenaście osób (grzecznościowo)',
        jp: { text: '十一名', pronunciation: 'じゅういちめい' },
    },
    {
        id: '98e3dcf1-c9ff-49fa-ac2a-e3e7dc0165f5',
        type: 'numeral',
        en: 'Twenty people (polite)',
        pl: 'Dwadzieścia osób (grzecznościowo)',
        jp: { text: '二十名', pronunciation: 'にじゅうめい' },
    },
    {
        id: 'd9fcc3a3-4b5c-4d8c-9d17-6a1e2b960b7b',
        type: 'numeral',
        en: 'How many people (polite)',
        pl: 'Ile osób (grzecznościowo)',
        jp: { text: '何名', pronunciation: 'なんめい' },
    },
];

export const countingPeoplePoliteBag: WordBag = {
    id: 'ecce8b0e-56d1-4290-9bff-db386687c32b',
    name: 'Counting People (Polite)',
    category: 'counting',
    words: countingPeoplePolite,
};
