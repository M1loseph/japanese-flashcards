import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_5_8: TranslatedJapaneseText[] = [
    {
        id: '6dae0183-2d73-473f-a2cd-de010fdc0383',
        type: 'noun',
        en: 'Video',
        pl: 'Filmik',
        jp: { text: '動画', pronunciation: 'どうが' },
    },
    {
        id: '433cba1f-6405-4907-a302-19ef86024a78',
        type: 'noun',
        en: 'Denial / Negation',
        pl: 'Zaprzeczenie',
        jp: { text: '否定', pronunciation: 'ひてい' },
    },
    {
        id: '7b057abb-2cd6-4195-933c-17db2e626df0',
        type: 'noun',
        en: 'Past',
        pl: 'Przeszłość',
        jp: { text: '過去', pronunciation: 'かこ' },
    },
    {
        id: '38906b84-f0fd-44d6-8616-1b5d4820b254',
        type: 'verb',
        verb_type: 'ichidan',
        transitivity: 'ambitransitive',
        en: 'To receive / To take (a test)',
        pl: 'Otrzymać / Zdawać (test)',
        jp: { text: '受ける', pronunciation: 'うける' },
    },
    {
        id: '1de890d5-4a81-4393-99d0-54a82b883439',
        type: 'phrase',
        formality: 'formal',
        en: 'I climbed a mountain.',
        pl: 'Wspiąłem się na górę.',
        jp: { text: '山に登りました。', pronunciation: 'やまにのぼりました。' },
        description: 'You can also use particle を.',
    },
    {
        id: 'e41e1e82-8107-4a51-928b-8540a25f2567',
        type: 'noun',
        en: 'End / Conclusion / Last',
        pl: 'Koniec / Zakończenie / Ostatni',
        jp: { text: '最後', pronunciation: 'さいご' },
    },
    {
        id: 'd5c8d331-b5d3-4cda-a55e-0d03e26a60d6',
        type: 'phrase',
        formality: 'formal',
        en: 'Please submit your homework.',
        pl: 'Proszę oddać swoją pracę domową.',
        jp: { text: '宿題を出してください。', pronunciation: 'しゅくだいをだしてください。' },
    },
    {
        id: 'acd202bb-98c5-40dc-b64f-b41ed84742df',
        type: 'noun',
        en: 'Amount / Portion (of food)',
        pl: 'Ilość / Porcja (jedzenia)',
        jp: { text: '量', pronunciation: 'りょう' },
    },
];

export const sakura5_8Bag: WordBag = {
    id: '01c0b902-6922-4bb2-a81f-ac1c26eebe6d',
    name: 'Sakura #5.8',
    category: 'sakura',
    words: sakura_5_8,
};
