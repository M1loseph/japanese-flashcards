import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_3_2: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Note',
        pl: 'Notatka',
        jp: { text: 'メモ' },
    },
    {
        type: 'noun',
        en: 'Mood',
        pl: 'Nastrój',
        jp: { text: 'ムード' },
    },
    {
        type: 'prefix',
        en: 'Mini',
        pl: 'Mini',
        jp: { text: 'ミニ' },
    },
    {
        type: 'noun',
        en: 'Maya',
        pl: 'Majowie',
        jp: { text: 'マヤ' },
    },
    {
        type: 'noun',
        en: 'Yacht',
        pl: 'Jacht',
        jp: { text: 'ヨット' },
    },
    {
        type: 'noun',
        en: 'User',
        pl: 'Użytkownik',
        jp: { text: 'ユーザー' },
    },
    {
        type: 'noun',
        en: 'Cap / Hat',
        pl: 'Czapka',
        jp: { text: 'キャップ' },
    },
    {
        type: 'noun',
        en: 'Stew',
        pl: 'Gulasz',
        jp: { text: 'シチュー' },
    },
    {
        type: 'noun',
        en: 'Shock',
        pl: 'Szok',
        jp: { text: 'ショック' },
    },
    {
        type: 'noun',
        en: 'Harmonica',
        pl: 'Harmonijka',
        jp: { text: 'ハーモニカ' },
    },
    {
        type: 'adverb',
        en: 'So-so',
        pl: 'Tak sobie',
        jp: { text: 'まあまあ' },
    },
    {
        type: 'noun',
        en: 'Bicolor cat / Eight-like face',
        pl: 'Kot dwukolorowy / Ósemkowata twarz',
        jp: { text: 'はちわれ' },
    },
    {
        type: 'noun',
        en: 'Movie theater',
        pl: 'Kino',
        jp: { text: '映画館', pronunciation: 'えいがかん' },
    },
    {
        type: 'noun',
        en: 'Theater',
        pl: 'Teatr',
        jp: { text: '劇場', pronunciation: 'げきじょう' },
    },
    {
        type: 'suffix',
        en: 'Room',
        pl: 'Pokój',
        jp: { text: '室', pronunciation: 'しつ' },
        description: "This word is used as a suffix and can't be used alone.",
    },
    {
        type: 'noun',
        en: 'Honey',
        pl: 'Miód',
        jp: { text: 'はちみつ' },
    },
    {
        type: 'phrase',
        en: 'There is a desk in my room.',
        pl: 'W moim pokoju jest biurko.',
        jp: { text: '私の部屋には机があります。', pronunciation: 'わたしのへやにはつくえがあります。' },
    },
    {
        type: 'phrase',
        en: 'There is a flower in the garden.',
        pl: 'W ogrodzie jest kwiat.',
        jp: { text: '庭には花があります。', pronunciation: 'にわにははながあります。' },
    },
    {
        type: 'phrase',
        en: 'There is a cat in the café.',
        pl: 'W kawiarni jest kot.',
        jp: { text: '喫茶店には猫がいます。', pronunciation: 'きっさてんにはねこがいます。' },
    },
    {
        type: 'phrase',
        en: 'There is a ghost in my house.',
        pl: 'W moim domu jest duch.',
        jp: { text: '私の家にゴーストがいます。', pronunciation: 'わたしのいえにゴーストがいます。' },
    },
    {
        type: 'phrase',
        en: 'Who is in the room?',
        pl: 'Kto jest w pokoju?',
        jp: { text: '部屋に誰がいますか？', pronunciation: 'へやにだれがいますか？' },
    },
    {
        type: 'phrase',
        en: 'Nobody is in the room.',
        pl: 'Nikt nie jest w pokoju.',
        jp: { text: '部屋に人はいません。', pronunciation: 'へやにひとはいません。' },
    },
    {
        type: 'phrase',
        en: 'There is a cat in the library.',
        pl: 'W bibliotece jest kot.',
        jp: { text: '図書館に猫がいます。', pronunciation: 'としょかんにねこがいます。' },
    },
];

export const sakura3_2Bag: WordBag = {
    id: '6e47d524-4051-4b44-93e0-26bc54ab89de',
    name: 'Sakura #3.2',
    words: sakura_3_2,
};
