import type { TranslatedJapaneseText, WordBag } from '../../types';

const dual_8_10: TranslatedJapaneseText[] = [
    {
        id: 'a5643c79-71fa-485f-9e06-815b0b60486c',
        type: 'noun',
        en: 'Taste / Flavor',
        pl: 'Smak',
        jp: { text: '味', pronunciation: 'あじ' },
    },
    {
        id: '58b4cd53-903b-41bc-897c-38318cf019b4',
        type: 'noun',
        en: 'Typhoon',
        pl: 'Tajfun',
        jp: { text: '台風', pronunciation: 'たいふう' },
    },
    {
        id: '80f4cbf8-fe58-412c-a41f-e1b9aa6fc296',
        type: 'noun',
        en: 'Tableware',
        pl: 'Naczynia stołowe',
        jp: { text: '食器', pronunciation: 'しょっき' },
    },
    {
        id: '13186dbc-8cd3-40ca-8e97-df82a0f2bad7',
        type: 'noun',
        en: 'Drinking glass',
        pl: 'Szklanka do picia',
        jp: { text: 'コップ' },
    },
    {
        id: 'ac34ace2-75aa-4779-a6c1-69a68ce02680',
        type: 'noun',
        en: 'Courtain',
        pl: 'Zasłona',
        jp: { text: 'カーテン' },
    },
    {
        id: '702f64df-02e3-4ae0-8242-3982f4d3b991',
        type: 'phrase',
        formality: 'does-not-apply',
        en: 'etc',
        pl: 'itd.',
        jp: { text: 'など' },
    },
    {
        id: '996a099f-c698-4c86-b8f4-638e92790958',
        type: 'phrase',
        formality: 'informal',
        en: 'One, two, three etc. are numbers.',
        pl: 'Jeden, dwa, trzy itd. to liczby.',
        jp: { text: '一、二、三などは数字です。', pronunciation: 'いち、に、さんなどはすうじです。' },
    },
];

export const dual8_10Bag: WordBag = {
    id: 'cbea1bd9-ebda-450b-b765-7be965b6e6db',
    name: 'Dual 8-10',
    category: 'dual',
    words: dual_8_10,
};
