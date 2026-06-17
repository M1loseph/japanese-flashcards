import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_3_10: TranslatedJapaneseText[] = [
    {
        id: '5aeb99d3-c0a9-44bf-8060-e587ef39a618',
        type: 'noun',
        en: 'Vodka',
        pl: 'Wódka',
        jp: { text: 'ウォッカ' },
    },
    {
        id: '879622cb-8781-499d-acbb-5f39c8e70707',
        type: 'verb',
        verb_type: 'ichidan',
        en: 'Be late / Fall behind schedule',
        pl: 'Spóźnić się / Opóźnić się',
        jp: { text: '遅れる', pronunciation: 'おくれる' },
    },
    {
        id: 'f5c8385a-4056-4df1-8e5e-8a67c763d254',
        type: 'phrase',
        en: "I'm sorry for my lateness.",
        pl: 'Przepraszam za spóźnienie.',
        jp: { text: '遅れてすみません。', pronunciation: 'おくれてすみません。' },
    },
    {
        id: '461cca9e-3023-45e0-8b3e-41c6676b7837',
        type: 'noun',
        en: 'Suitcase',
        pl: 'Walizka',
        jp: { text: 'スーツケース' },
    },
    {
        id: '2c0330c5-2da8-4bb1-8522-fc269c37c667',
        type: 'phrase',
        en: 'A book is on the bookshelf.',
        pl: 'Książka jest na regale.',
        jp: { text: '本は棚の中にあります。', pronunciation: 'ほんはたなのなかにあります。' },
        description:
            'Word 中 indicates that the book is inside the bookshelf, emphasizing the location. We don\'t use 上 here even though in English we would use "on".',
    },
    {
        id: '863a4dd2-0ce2-4bd6-bf8f-66b3a67ca519',
        type: 'noun',
        en: 'Thing / Object',
        pl: 'Rzecz / Przedmiot',
        jp: { text: '物', pronunciation: 'もの' },
    },
    {
        id: '34a478e8-6ab5-421b-9c50-88f387ce6a6c',
        type: 'noun',
        en: 'Clothing',
        pl: 'Ubranie',
        jp: { text: '服', pronunciation: 'ふく' },
    },
    {
        id: '2108ea8c-233d-4410-b4e0-4f1a875d45d9',
        type: 'noun',
        en: 'Hawaii',
        pl: 'Hawaje',
        jp: { text: 'ハワイ' },
    },
    {
        id: '511ff878-65f1-46ef-ac5b-b4b28722ccc8',
        type: 'verb',
        verb_type: 'ichidan',
        en: 'Answer / Reply',
        pl: 'Odpowiadać',
        jp: { text: '答える', pronunciation: 'こたえる' },
    },
    {
        id: 'b1dd784f-ba95-4661-8817-e8cbc4fd09a6',
        type: 'noun',
        en: 'App',
        pl: 'Aplikacja',
        jp: { text: 'アプリ' },
    },
    {
        id: 'c766ab6e-b39c-4ea2-983d-17869dedabfb',
        type: 'noun',
        en: 'Karaoke',
        pl: 'Karaoke',
        jp: { text: 'カラオケ' },
    },
    {
        id: 'c2e47898-693d-4750-8209-ae18285a717c',
        type: 'noun',
        en: 'Mannequin',
        pl: 'Manekin',
        jp: { text: 'マネキン' },
    },
];

export const sakura3_10Bag: WordBag = {
    id: 'bf31baf5-0f52-4f23-9dcc-057b91e1878c',
    name: 'Sakura #3.10',
    words: sakura_3_10,
};
