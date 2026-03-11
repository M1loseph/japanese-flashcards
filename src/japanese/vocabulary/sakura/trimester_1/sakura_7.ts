import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_1_7: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Newspaper',
        pl: 'Gazeta',
        jp: { text: 'しんぶん' },
    },
    {
        type: 'noun',
        en: 'Bag',
        pl: 'Torba',
        jp: { text: 'かばん' },
    },
    {
        type: 'noun',
        en: 'Fireworks',
        pl: 'Fajerwerki',
        jp: { text: 'はなび' },
    },
    {
        type: 'noun',
        en: 'Children',
        pl: 'Dzieci',
        jp: { text: 'こども' },
    },
    {
        type: 'noun',
        en: 'Abacus',
        pl: 'Liczydło',
        jp: { text: 'そろばん' },
    },
    {
        type: 'pronoun',
        en: 'I (male)',
        pl: 'Ja (męskie)',
        jp: { text: 'ぼく' },
    },
    {
        type: 'noun',
        en: 'Phone',
        pl: 'Telefon',
        jp: { text: 'でんわ' },
    },
    {
        type: 'noun',
        en: 'Family (polite)',
        pl: 'Rodzina (grzecznie)',
        jp: { text: 'ごかぞく' },
    },
    {
        type: 'noun',
        en: 'Future',
        pl: 'Przyszłość',
        jp: { text: 'しょうらい' },
    },
    {
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'Important',
        pl: 'Ważny',
        jp: { text: 'たいせつ' },
    },
    {
        type: 'phrase',
        en: 'Who is part of your family?',
        pl: 'Kto jest częścią twojej rodziny?',
        jp: { text: 'だれがいますか。' },
        description:
            'Literally: "Who is there?". When this phrase is used in a family context, it refers to family members.',
    },
    {
        type: 'suffix',
        en: 'City',
        pl: 'Miasto',
        jp: { text: '市', pronunciation: 'し' },
    },
    {
        type: 'noun',
        en: 'Leszno city',
        pl: 'Miasto Leszno',
        jp: { text: 'レスノ市' },
        description: 'Note that "city" here is translated as "市" (し) as a suffix.',
    },
    {
        type: 'pronoun',
        en: 'We',
        pl: 'My',
        jp: { text: 'わたしたち' },
    },
    {
        type: 'noun',
        en: 'Food',
        pl: 'Jedzenie',
        jp: { text: 'たべもの' },
    },
    {
        type: 'verb',
        verb_type: 'ichidan',
        en: 'Eat',
        pl: 'Jeść',
        jp: { text: 'たべる' },
        present: {
            masu: {
                affirmative: { text: 'たべます' },
                negative: { text: 'たべません' },
            },
        },
    },
    {
        type: 'noun',
        en: 'Meat',
        pl: 'Mięso',
        jp: { text: 'にく' },
    },
    {
        type: 'noun',
        en: 'Fish',
        pl: 'Ryba',
        jp: { text: 'さかな' },
    },
    {
        type: 'noun',
        en: 'Vegetables',
        pl: 'Warzywa',
        jp: { text: 'やさい' },
    },
    {
        type: 'noun',
        en: 'Egg',
        pl: 'Jajko',
        jp: { text: 'たまご' },
    },
    {
        type: 'noun',
        en: 'Bread',
        pl: 'Chleb',
        jp: { text: 'パン' },
    },
    {
        type: 'noun',
        en: 'Miso soup',
        pl: 'Zupa miso',
        jp: { text: 'みそしる' },
    },
    {
        type: 'noun',
        en: 'Rice',
        pl: 'Ryż',
        jp: { text: 'ごはん' },
    },
    {
        type: 'noun',
        en: 'Fruit',
        pl: 'Owoce',
        jp: { text: 'くだもの' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Drink',
        pl: 'Pić',
        jp: { text: 'のむ' },
        present: {
            masu: {
                affirmative: { text: 'のみます' },
                negative: { text: 'のみません' },
            },
        },
    },
    {
        type: 'noun',
        en: 'Drink',
        pl: 'Napój',
        jp: { text: 'のみもの' },
    },
    {
        type: 'noun',
        en: 'Water',
        pl: 'Woda',
        jp: { text: 'みず' },
    },
    {
        type: 'noun',
        en: 'Green tea',
        pl: 'Zielona herbata',
        jp: { text: 'おちゃ' },
    },
    {
        type: 'noun',
        en: 'Coffee',
        pl: 'Kawa',
        jp: { text: 'コーヒー' },
    },
    {
        type: 'noun',
        en: 'Black tea',
        pl: 'Czarna herbata',
        jp: { text: 'こうちゃ' },
    },
    {
        type: 'noun',
        en: 'Juice',
        pl: 'Sok',
        jp: { text: 'ジュース' },
    },
    {
        type: 'noun',
        en: 'Milk',
        pl: 'Mleko',
        jp: { text: 'ぎゅうにゅう' },
    },
];

export const sakura1_7Bag: WordBag = {
    id: '24b5fb05-b55d-460b-a0bb-4f61738ab716',
    name: 'Sakura #1.7',
    words: sakura_1_7,
};
