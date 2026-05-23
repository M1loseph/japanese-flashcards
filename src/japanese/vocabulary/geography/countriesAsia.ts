import type { TranslatedJapaneseText, WordBag } from '../../types';

const countriesAsia: TranslatedJapaneseText[] = [
    {
        id: '746b15eb-ac13-45c6-8a07-479f717fff93',
        type: 'noun',
        en: 'China',
        pl: 'Chiny',
        jp: { text: '中国', pronunciation: 'ちゅうごく' },
    },
    {
        id: 'd29cadbb-61e4-4542-b362-3b40e1017b83',
        type: 'noun',
        en: 'Japan',
        pl: 'Japonia',
        jp: { text: '日本', pronunciation: 'にほん / にっぽん' },
    },
    {
        id: '565f5776-81bb-4117-b66f-4f37e3b8bd01',
        type: 'noun',
        en: 'Taiwan',
        pl: 'Tajwan',
        jp: { text: '台湾', pronunciation: 'たいわん' },
    },
    {
        id: '47429784-082f-43b8-a739-c207e8c757a0',
        type: 'noun',
        en: 'India',
        pl: 'Indie',
        jp: { text: 'インド' },
    },
    {
        id: 'ade6e742-e668-4ba6-a3e5-df5c146917fe',
        type: 'noun',
        en: 'South Korea',
        pl: 'Korea Południowa',
        jp: { text: '韓国', pronunciation: 'かんこく' },
    },
    {
        id: 'fb1d2229-ba22-49db-b19f-7bf8716d3afa',
        type: 'noun',
        en: 'Vietnam',
        pl: 'Wietnam',
        jp: { text: 'ベトナム' },
    },
    {
        id: 'c27a8b04-f190-4b54-a3fa-8b53c719942e',
        type: 'noun',
        en: 'Malaysia',
        pl: 'Malezja',
        jp: { text: 'マレーシア' },
    },
    {
        id: '3844d8cd-c472-48fd-9037-fdae8ed96a00',
        type: 'noun',
        en: 'Philippines',
        pl: 'Filipiny',
        jp: { text: 'フィリピン' },
    },
    {
        id: '024cb50c-5975-4b30-8c69-1941fec9ea10',
        type: 'noun',
        en: 'Thailand',
        pl: 'Tajlandia',
        jp: { text: 'タイ' },
    },
    {
        id: '2f92a4d2-84c4-451c-a0d4-0272015dd469',
        type: 'noun',
        en: 'Indonesia',
        pl: 'Indonezja',
        jp: { text: 'インドネシア' },
    },
];

export const countriesAsiaBag: WordBag = {
    id: '9889adb4-0777-4983-8a12-d580accb3ce4',
    name: 'Countries Asia',
    words: countriesAsia,
};
