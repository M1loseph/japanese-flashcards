import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_3_7: TranslatedJapaneseText[] = [
    {
        id: 'd1478608-2a8f-4905-8d5b-a48ce247afe8',
        type: 'noun',
        en: 'Eraser',
        pl: 'Gumka do mazania',
        jp: { text: '消しゴム', pronunciation: 'けしゴム' },
    },
    {
        id: 'e9be9cba-be47-4b22-b669-4ca459c2a07c',
        type: 'noun',
        en: 'Motorcycle (formal)',
        pl: 'Motocykl (formalnie)',
        jp: { text: 'オートバイ' },
    },
    {
        id: 'f04a29fc-c88a-47a9-a58c-3217b7a71cce',
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'Straight',
        pl: 'Prosty',
        jp: { text: 'まっすぐ' },
    },
    {
        id: '82795e3e-968b-45d7-a524-23ee279f86e1',
        type: 'phrase',
        en: 'Please go straight.',
        pl: 'Proszę idź prosto.',
        jp: { text: 'まっすぐ行ってください。', pronunciation: 'まっすぐいってください。' },
    },
    {
        id: '1988c20a-56b0-4bb9-8b41-0774b49df6e6',
        type: 'phrase',
        en: 'Please go left.',
        pl: 'Proszę idź w lewo.',
        jp: { text: '左に行ってください。', pronunciation: 'ひだりにいってください。' },
    },
    {
        id: 'f6b5b955-4f93-4b13-88e6-2e693c1ad1e4',
        type: 'conjunction',
        en: 'And then',
        pl: 'Potem / Następnie',
        jp: { text: 'そして' },
    },
    {
        id: '1bb27550-1291-4bb1-8198-a5bb87809f62',
        type: 'pre-noun-adjective',
        en: 'What kind of / What sort of',
        pl: 'Jaki / Jaka / Jakie',
        jp: { text: 'どんな' },
    },
    {
        id: '7bbd237d-89d3-42db-954e-9a7609d79447',
        type: 'phrase',
        en: 'What kind of car do you want?',
        pl: 'Jakiego samochodu chcesz?',
        jp: { text: 'どんな車が欲しいですか。', pronunciation: 'どんなくるまがほしいですか。' },
    },
    {
        id: '2dae182a-b781-465b-9d71-7d3b35dd9611',
        type: 'phrase',
        en: 'What kind of place is Sakura school?',
        pl: 'Jakim miejscem jest szkoła Sakura?',
        jp: { text: 'さくら学校はどんな場所ですか。', pronunciation: 'さくらがっこうはどんなばしょですか。' },
    },
    {
        id: 'e30b281d-f053-4dca-ba0b-a4a5a73e5ac7',
        type: 'noun',
        en: 'Hobby',
        pl: 'Hobby',
        jp: { text: '趣味', pronunciation: 'しゅみ' },
    },
    {
        id: '323780ff-18c0-4361-99a7-6f92a5f41bed',
        type: 'noun',
        en: 'Brand',
        pl: 'Marka',
        jp: { text: 'ブランド' },
    },
    {
        id: '7e6e44cf-8ae0-48cd-94b2-e4025b466e93',
        type: 'noun',
        en: 'Glasses',
        pl: 'Okulary',
        jp: { text: 'めがね' },
    },
];

export const sakura3_7Bag: WordBag = {
    id: '1c4b5940-6027-4a3c-bd99-ff527cd074bc',
    name: 'Sakura #3.7',
    category: 'sakura',
    words: sakura_3_7,
};
