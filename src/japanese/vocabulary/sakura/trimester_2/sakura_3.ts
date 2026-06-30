import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_2_3: TranslatedJapaneseText[] = [
    {
        id: 'fbe3b6ed-5d18-4d21-aa6e-43efaa75810e',
        type: 'noun',
        en: 'Reading (process)',
        pl: 'Czytanie',
        jp: { text: '読書', pronunciation: 'どくしょ' },
    },
    {
        id: 'ae4da776-e1b8-4da7-967e-475cbe603f16',
        type: 'noun',
        en: 'Distance',
        pl: 'Odległość',
        jp: { text: '距離', pronunciation: 'きょり' },
    },
    {
        id: '97281f35-3eb8-48f5-a3e7-fe4ff3453885',
        type: 'verb',
        verb_type: 'godan',
        en: 'Calm down / Chill / Refrigerate',
        pl: 'Ochłonąć / Schłodzić',
        jp: { text: '冷やす', pronunciation: 'ひやす' },
    },
    {
        id: '65c23eed-3a5a-4d1c-8f3d-f142d83ed54b',
        type: 'adjective',
        adjective_type: 'i-adjective',
        en: 'Brown',
        pl: 'Brązowy',
        jp: { text: '茶色い', pronunciation: 'ちゃいろい' },
    },
    {
        id: '5a98e28f-f816-4b6c-b27a-d50e36dbea63',
        type: 'noun',
        en: 'Prisoner',
        pl: 'Więzień',
        jp: { text: '囚人', pronunciation: 'しゅうじん' },
    },
    {
        id: '0f5bd78a-362c-4b09-8f06-5d4ee851b5f7',
        type: 'noun',
        en: 'Landlord / Landlady',
        pl: 'Właściciel / Właścicielka',
        jp: { text: '大家', pronunciation: 'おおや' },
    },
    {
        id: '15ef2b7f-5a12-4de7-9956-68664078f416',
        type: 'noun',
        en: 'Century',
        pl: 'Wiek / Stulecie',
        jp: { text: '世紀', pronunciation: 'せいき' },
    },
    {
        id: '5e6240fb-3017-4d9f-adf6-47347c4b5fc7',
        type: 'noun',
        en: 'Seat',
        pl: 'Miejsce (siedzące)',
        jp: { text: '席', pronunciation: 'せき' },
    },
    {
        id: 'e303878b-771a-48a3-9773-359a7438402b',
        type: 'phrase',
        en: 'How many hours do you sleep?',
        pl: 'Ile godzin śpisz?',
        jp: { text: '何時間寝ますか。', pronunciation: 'なんじかんねますか。' },
    },
    {
        id: '3a98eccf-2b43-4259-9717-1fca22fcf48e',
        type: 'phrase',
        en: 'I always sleep 7 hours.',
        pl: 'Zawsze śpię 7 godzin.',
        jp: { text: 'いつも七時間寝ます。', pronunciation: 'いつもしちじかんねます。' },
        description: 'Note there is no particle "に" after the time duration.',
    },
    {
        id: 'f820edd0-d026-4eea-beff-b1be3c8d00ad',
        type: 'phrase',
        en: 'I go to school for 30 minutes.',
        pl: 'Idę do szkoły przez 30 minut.',
        jp: { text: '三十分学校に行きます。', pronunciation: 'さんじゅっぷんがっこうにいきます。' },
        description: 'Note there is no particle "に" after the time duration.',
    },
    {
        id: '41bbbf67-8aac-4436-813c-174a8db84ca9',
        type: 'phrase',
        en: 'I work for around 8 hours every day.',
        pl: 'Pracuję około 8 godzin każdego dnia.',
        jp: { text: '毎日八時間ぐらい仕事をします。', pronunciation: 'まいにちはちじかんぐらいしごとをします。' },
    },
];

export const sakura2_3Bag: WordBag = {
    id: '0dc6626f-d9e0-4a8b-abb5-9e4948ea30f2',
    name: 'Sakura #2.3',
    words: sakura_2_3,
};
