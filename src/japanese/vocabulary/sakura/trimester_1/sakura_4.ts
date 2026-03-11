import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_1_4: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Living room',
        pl: 'Salon',
        jp: { text: 'いま' },
    },
    {
        type: 'noun',
        en: 'Bugs / Insects',
        pl: 'Owady',
        jp: { text: 'むし' },
    },
    {
        type: 'noun',
        en: 'Sea',
        pl: 'Morze',
        jp: { text: 'うみ' },
    },
    {
        type: 'noun',
        en: 'Paper',
        pl: 'Papier',
        jp: { text: 'かみ' },
    },
    {
        type: 'noun',
        en: 'Snow',
        pl: 'Śnieg',
        jp: { text: 'ゆき' },
    },
    {
        type: 'noun',
        en: 'Mountain',
        pl: 'Góra',
        jp: { text: 'やま' },
    },
    {
        type: 'noun',
        en: 'Eye',
        pl: 'Oko',
        jp: { text: 'め' },
    },
    {
        type: 'noun',
        en: 'Shopping',
        pl: 'Zakupy',
        jp: { text: 'かいもの' },
    },
    {
        type: 'noun',
        en: 'Winter',
        pl: 'Zima',
        jp: { text: 'ふゆ' },
    },
    {
        type: 'noun',
        en: 'Shoes',
        pl: 'Buty',
        jp: { text: 'くつ' },
    },
    {
        type: 'noun',
        en: 'Hat / Cap',
        pl: 'Kapelusz / Czapka',
        jp: { text: 'ぼうし' },
    },
    {
        type: 'noun',
        en: 'Bike',
        pl: 'Rower',
        jp: { text: 'じてんしゃ' },
    },
    {
        type: 'noun',
        en: 'T-shirt',
        pl: 'Koszulka',
        jp: { text: 'Tシャツ' },
    },
    {
        type: 'noun',
        en: 'Employee (of a specific company)',
        pl: 'Pracownik (konkretnej firmy)',
        jp: { text: 'しゃいん' },
    },
    {
        type: 'phrase',
        en: 'TOYOTA employee',
        pl: 'Pracownik TOYOTY',
        jp: { text: 'トヨタのしゃいん' },
    },
    {
        type: 'noun',
        en: 'Question',
        pl: 'Pytanie',
        jp: { text: 'しつもん' },
    },
    {
        type: 'noun',
        en: 'Answer',
        pl: 'Odpowiedź',
        jp: { text: 'こたえ' },
    },
    {
        type: 'noun',
        en: 'Number',
        pl: 'Liczba',
        jp: { text: 'すうじ' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Plus / Add',
        pl: 'Dodać',
        jp: { text: 'たす' },
        present: {
            masu: {
                affirmative: { text: 'たします' },
                negative: { text: 'たしません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Minus / Subtract',
        pl: 'Odjąć',
        jp: { text: 'ひく' },
        present: {
            masu: {
                affirmative: { text: 'ひきます' },
                negative: { text: 'ひきません' },
            },
        },
    },
    {
        type: 'phrase',
        en: 'Two plus two equals four.',
        pl: 'Dwa plus dwa równa się cztery.',
        jp: { text: 'にたすにはよん。' },
    },
    {
        type: 'noun',
        en: 'Professor',
        pl: 'Profesor',
        jp: { text: 'きょうじゅ' },
    },
    {
        type: 'noun',
        en: 'C.E.O.',
        pl: 'Prezes (firma)',
        jp: { text: 'しゃちょう' },
    },
    {
        type: 'noun',
        en: 'Designer',
        pl: 'Projektant',
        jp: { text: 'デザイナー' },
    },
];

export const sakura1_4Bag: WordBag = {
    id: '4c96ca61-8767-4120-8291-19241e14370f',
    name: 'Sakura #1.4',
    words: sakura_1_4,
};
