import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_1_10: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Breakfast',
        pl: 'Śniadanie',
        jp: { text: 'あさごはん' },
    },
    {
        type: 'noun',
        en: 'Lunch',
        pl: 'Obiad',
        jp: { text: 'ひるごはん' },
    },
    {
        type: 'noun',
        en: 'Dinner',
        pl: 'Kolacja',
        jp: { text: 'ばんごはん' },
    },
    {
        type: 'noun',
        en: 'Picture / Drawing',
        pl: 'Obrazek / Rysunek',
        jp: { text: 'え' },
    },
    {
        type: 'noun',
        en: 'Music',
        pl: 'Muzyka',
        jp: { text: 'おんがく' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Listen',
        pl: 'Słuchać',
        jp: { text: 'きく' },
        present: {
            masu: {
                affirmative: { text: 'ききます' },
                negative: { text: 'ききません' },
            },
        },
    },
    {
        type: 'noun',
        en: 'Radio',
        pl: 'Radio',
        jp: { text: 'ラジオ' },
    },
    {
        type: 'noun',
        en: 'News',
        pl: 'Wiadomości',
        jp: { text: 'ニュース' },
    },
    {
        type: 'noun',
        en: 'Hiragana',
        pl: 'Hiragana',
        jp: { text: 'ひらがな' },
    },
    {
        type: 'noun',
        en: 'Katakana',
        pl: 'Katakana',
        jp: { text: 'カタカナ' },
    },
    {
        type: 'noun',
        en: 'Kanji',
        pl: 'Kanji',
        jp: { text: 'かんじ' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Draw',
        pl: 'Rysować',
        jp: { text: 'かく' },
        present: {
            masu: {
                affirmative: { text: 'かきます' },
                negative: { text: 'かきません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Write',
        pl: 'Pisać',
        jp: { text: '書く', pronunciation: 'かく' },
        present: {
            masu: {
                affirmative: { text: '書きます', pronunciation: 'かきます' },
                negative: { text: '書きません', pronunciation: 'かきません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Buy',
        pl: 'Kupować',
        jp: { text: '買う', pronunciation: 'かう' },
        present: {
            masu: {
                affirmative: { text: '買います', pronunciation: 'かいます' },
                negative: { text: '買いません', pronunciation: 'かいません' },
            },
        },
    },
    {
        type: 'noun',
        en: 'Smartphone',
        pl: 'Smartfon',
        jp: { text: 'スマホ' },
    },
    {
        type: 'verb',
        verb_type: 'irregular',
        en: 'Do / Play',
        pl: 'Robić / Grać',
        jp: { text: 'する' },
        present: {
            masu: {
                affirmative: { text: 'します' },
                negative: { text: 'しません' },
            },
        },
    },
    {
        type: 'phrase',
        en: 'Learn',
        pl: 'Uczyć się',
        jp: { text: 'べんきょうをする' },
    },
    {
        type: 'phrase',
        en: 'Do judo',
        pl: 'Uprawiać judo',
        jp: { text: 'じゅうどうをする' },
    },
    {
        type: 'phrase',
        en: 'Play games',
        pl: 'Grać w gry',
        jp: { text: 'ゲームをする' },
    },
    {
        type: 'phrase',
        en: 'Do shopping',
        pl: 'Robić zakupy',
        jp: { text: 'かいものをする' },
    },
    {
        type: 'phrase',
        en: 'Do homework',
        pl: 'Robić pracę domową',
        jp: { text: 'しゅくだいをする' },
    },
    {
        type: 'noun',
        en: 'Email',
        pl: 'Email',
        jp: { text: 'メール' },
    },
];

export const sakura1_10Bag: WordBag = {
    id: '06f98e3d-c908-4bc0-a2b9-e66de058ab35',
    name: 'Sakura #1.10',
    words: sakura_1_10,
};
