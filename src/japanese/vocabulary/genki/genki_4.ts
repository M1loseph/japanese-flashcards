import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_4: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Game',
        pl: 'Gra',
        jp: { text: 'ゲーム' },
    },
    {
        type: 'noun',
        en: 'Part time job',
        pl: 'Praca na część etatu',
        jp: { text: 'アルバイト' },
    },
    {
        type: 'noun',
        en: 'Shopping',
        pl: 'Zakupy',
        jp: { text: '買い物', pronunciation: 'かいもの' },
    },
    {
        type: 'noun',
        en: 'Class',
        pl: 'Klasa',
        jp: { text: 'クラス' },
    },
    {
        type: 'noun',
        en: 'Dog',
        pl: 'Pies',
        jp: { text: '犬', pronunciation: 'いぬ' },
    },
    {
        type: 'noun',
        en: 'Cat',
        pl: 'Kot',
        jp: { text: '猫', pronunciation: 'ねこ' },
    },
    {
        type: 'noun',
        en: 'Person',
        pl: 'Osoba',
        jp: { text: '人', pronunciation: 'ひと' },
    },
    {
        type: 'pronoun',
        en: 'You (polite)',
        pl: 'Ty (grzecznie)',
        jp: { text: 'あなた' },
    },
    {
        type: 'noun',
        en: 'Chair',
        pl: 'Krzesło',
        jp: { text: 'いす' },
    },
    {
        type: 'noun',
        en: 'Desk',
        pl: 'Biurko',
        jp: { text: '机', pronunciation: 'つくえ' },
    },
    {
        type: 'noun',
        en: 'Picture / Photograph',
        pl: 'Obraz / Zdjęcie',
        jp: { text: '写真', pronunciation: 'しゃしん' },
    },
    {
        type: 'noun',
        en: 'Flower',
        pl: 'Kwiat',
        jp: { text: '花', pronunciation: 'はな' },
    },
    {
        type: 'noun',
        en: 'Report / Paper',
        pl: 'Raport / Praca pisemna',
        jp: { text: 'レポート' },
    },
    {
        type: 'noun',
        en: 'Rice / Meal',
        pl: 'Ryż / Posiłek',
        jp: { text: 'ご飯', pronunciation: 'ごはん' },
    },
    {
        type: 'noun',
        en: 'Bread',
        pl: 'Chleb',
        jp: { text: 'パン' },
    },
    {
        type: 'noun',
        en: 'Temple',
        pl: 'Świątynia',
        jp: { text: 'お寺', pronunciation: 'おてら' },
    },
    {
        type: 'noun',
        en: 'Park',
        pl: 'Park',
        jp: { text: '公園', pronunciation: 'こうえん' },
    },
    {
        type: 'noun',
        en: 'Supermarket',
        pl: 'Supermarket',
        jp: { text: 'スーパー' },
    },
    {
        type: 'noun',
        en: 'Bus stop',
        pl: 'Przystanek autobusowy',
        jp: { text: 'バス停', pronunciation: 'バスてい' },
    },
    {
        type: 'noun',
        en: 'Hospital',
        pl: 'Szpital',
        jp: { text: '病院', pronunciation: 'びょういん' },
    },
    {
        type: 'noun',
        en: 'Hotel',
        pl: 'Hotel',
        jp: { text: 'ホテル' },
    },
    {
        type: 'noun',
        en: 'Bookstore',
        pl: 'Księgarnia',
        jp: { text: '本屋', pronunciation: 'ほんや' },
    },
    {
        type: 'noun',
        en: 'Town',
        pl: 'Miasteczko',
        jp: { text: '町', pronunciation: 'まち' },
    },
    {
        type: 'noun',
        en: 'Restaurant',
        pl: 'Restauracja',
        jp: { text: 'レストラン' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Meet',
        pl: 'Spotykać',
        jp: { text: '会う', pronunciation: 'あう' },
        present: {
            masu: {
                affirmative: { text: '会います', pronunciation: 'あいます' },
                negative: { text: '会いません', pronunciation: 'あいません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'There is / There are (inanimate)',
        pl: 'Jest / Są (nieożywione)',
        jp: { text: 'あります' },
        present: {
            masu: {
                affirmative: { text: 'あります' },
                negative: { text: 'ありません' },
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
        en: 'Take (a picture)',
        pl: 'Robić (zdjęcie)',
        jp: { text: '撮る', pronunciation: 'とる' },
        present: {
            masu: {
                affirmative: { text: '撮ります', pronunciation: 'とります' },
                negative: { text: '撮りません', pronunciation: 'とりません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Wait',
        pl: 'Czekać',
        jp: { text: '待つ', pronunciation: 'まつ' },
        present: {
            masu: {
                affirmative: { text: '待ちます', pronunciation: 'まちます' },
                negative: { text: '待ちません', pronunciation: 'まちません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Understand',
        pl: 'Rozumieć',
        jp: { text: '分かる', pronunciation: 'わかる' },
        present: {
            masu: {
                affirmative: { text: '分かります', pronunciation: 'わかります' },
                negative: { text: '分かりません', pronunciation: 'わかりません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'ichidan',
        en: 'There is / There are (animate)',
        pl: 'Jest / Są (ożywione)',
        jp: { text: 'いる' },
        present: {
            masu: {
                affirmative: { text: 'います' },
                negative: { text: 'いません' },
            },
        },
    },
    {
        type: 'suffix',
        en: 'Around / About (time period)',
        pl: 'Około (okres czasu)',
        jp: { text: 'ぐらい' },
    },
    {
        type: 'phrase',
        en: "I'm sorry",
        pl: 'Przepraszam',
        jp: { text: 'ごめんなさい' },
    },
    {
        type: 'phrase',
        en: 'And then / After that',
        pl: 'A potem / Po tym',
        jp: { text: 'それから' },
    },
    {
        type: 'phrase',
        en: 'So / Therefore',
        pl: 'Więc / Dlatego',
        jp: { text: 'だから' },
    },
    {
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'A lot / Many / Much',
        pl: 'Dużo / Wielu / Wiele',
        jp: { text: 'たくさん' },
    },
    {
        type: 'adverb',
        en: 'Why / How',
        pl: 'Dlaczego / Jak',
        jp: { text: 'どうして' },
    },
    {
        type: 'phrase',
        en: 'Alone',
        pl: 'Samemu',
        jp: { text: '一人で', pronunciation: 'ひとりで' },
    },
    {
        type: 'phrase',
        en: 'Hello (on the phone)',
        pl: 'Halo',
        jp: { text: 'もしもし' },
    },
];

export const genki4Bag: WordBag = {
    id: 'e7d98dcc-2680-41e7-b951-6c2f279b5791',
    name: 'Genki #4',
    words: genki_4,
};
