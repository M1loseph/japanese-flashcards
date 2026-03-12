import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_2_9: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Fever',
        pl: 'Gorączka',
        jp: { text: '熱', pronunciation: 'ねつ' },
    },
    {
        type: 'phrase',
        en: 'I have a fever.',
        pl: 'Mam gorączkę.',
        jp: { text: '熱があります。', pronunciation: 'ねつがあります。' },
    },
    {
        type: 'verb',
        verb_type: 'auxiliary',
        en: 'Is (informal)',
        pl: 'Jest (nieformalnie)',
        jp: { text: 'だ' },
    },
    {
        type: 'verb',
        verb_type: 'ichidan',
        en: 'To come out',
        pl: 'Wychodzić',
        jp: { text: '出る', pronunciation: 'でる' },
        present: {
            masu: {
                affirmative: { text: '出ます', pronunciation: 'でます' },
                negative: { text: '出ません', pronunciation: 'でません' },
            },
        },
    },
    {
        type: 'noun',
        en: 'Cough',
        pl: 'Kaszel',
        jp: { text: 'せき' },
    },
    {
        type: 'phrase',
        en: 'I have a cough.',
        pl: 'Mam kaszel.',
        jp: { text: 'せきがでます。' },
        description: 'Literally: "A cough comes out."',
    },
    {
        type: 'noun',
        en: 'Runny nose',
        pl: 'Katar',
        jp: { text: 'はなみず' },
    },
    {
        type: 'phrase',
        en: 'I have a runny nose.',
        pl: 'Mam katar.',
        jp: { text: 'はなみずがでます。' },
    },
    {
        type: 'adjective',
        adjective_type: 'i-adjective',
        en: 'Painful / Sore',
        pl: 'Bolesny / Obolały',
        jp: { text: 'いたい' },
    },
    {
        type: 'noun',
        en: 'Throat',
        pl: 'Gardło',
        jp: { text: '喉', pronunciation: 'のど' },
    },
    {
        type: 'phrase',
        en: 'My throat hurts.',
        pl: 'Boli mnie gardło.',
        jp: { text: 'のどがいたいです。' },
    },
    {
        type: 'noun',
        en: 'Head',
        pl: 'Głowa',
        jp: { text: '頭', pronunciation: 'あたま' },
    },
    {
        type: 'phrase',
        en: 'My head hurts.',
        pl: 'Boli mnie głowa.',
        jp: { text: '頭がいたいです。', pronunciation: 'あたまがいたいです。' },
    },
    {
        type: 'noun',
        en: 'Belly',
        pl: 'Brzuch',
        jp: { text: 'お腹', pronunciation: 'おなか' },
    },
    {
        type: 'phrase',
        en: 'My belly hurts.',
        pl: 'Boli mnie brzuch.',
        jp: { text: 'お腹がいたいです。', pronunciation: 'おなかがいたいです。' },
    },
    {
        type: 'phrase',
        en: "Please don't push yourself.",
        pl: 'Proszę, nie przemęczaj się.',
        jp: { text: '無理をしないでください。', pronunciation: 'むりをしないでください。' },
    },
    {
        type: 'adverb',
        en: 'Slowly',
        pl: 'Powoli',
        jp: { text: 'ゆっくり' },
    },
    {
        type: 'phrase',
        en: 'Please relax.',
        pl: 'Proszę, nie spiesz się.',
        jp: { text: 'ゆっくりしてください。' },
    },
    {
        type: 'noun',
        en: 'Onigiri',
        pl: 'Onigiri',
        jp: { text: 'おにぎり' },
    },
    {
        type: 'noun',
        en: 'Infant',
        pl: 'Niemowlę',
        jp: { text: '赤ちゃん', pronunciation: 'あかちゃん' },
    },
];

export const sakura2_9Bag: WordBag = {
    id: '97c3ac4b-cc91-44fd-bc48-6a25605434bb',
    name: 'Sakura #2.9',
    words: sakura_2_9,
};
