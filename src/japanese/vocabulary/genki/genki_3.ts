import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_3: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Movie',
        pl: 'Film',
        jp: { text: '映画', pronunciation: 'えいが' },
    },
    {
        type: 'noun',
        en: 'Music',
        pl: 'Muzyka',
        jp: { text: '音楽', pronunciation: 'おんがく' },
    },
    {
        type: 'noun',
        en: 'Magazine',
        pl: 'Magazyn',
        jp: { text: '雑誌', pronunciation: 'ざっし' },
    },
    {
        type: 'noun',
        en: 'Sport',
        pl: 'Sport',
        jp: { text: 'スポーツ' },
    },
    {
        type: 'noun',
        en: 'Date (romantic outing)',
        pl: 'Randka',
        jp: { text: 'デート' },
    },
    {
        type: 'noun',
        en: 'Tennis',
        pl: 'Tenis',
        jp: { text: 'テニス' },
    },
    {
        type: 'noun',
        en: 'Television',
        pl: 'Telewizja',
        jp: { text: 'テレビ' },
    },
    {
        type: 'noun',
        en: 'Ice cream',
        pl: 'Lody',
        jp: { text: 'アイスクリーム' },
    },
    {
        type: 'noun',
        en: 'Hamburger',
        pl: 'Hamburger',
        jp: { text: 'ハンバーガー' },
    },
    {
        type: 'noun',
        en: 'Alcoholic drink',
        pl: 'Alkohol',
        jp: { text: 'お酒', pronunciation: 'おさけ' },
    },
    {
        type: 'noun',
        en: 'Green tea',
        pl: 'Zielona herbata',
        jp: { text: 'お茶', pronunciation: 'おちゃ' },
    },
    {
        type: 'noun',
        en: 'Coffee',
        pl: 'Kawa',
        jp: { text: 'コーヒー' },
    },
    {
        type: 'noun',
        en: 'Water',
        pl: 'Woda',
        jp: { text: '水', pronunciation: 'みず' },
    },
    {
        type: 'noun',
        en: 'Breakfast',
        pl: 'Śniadanie',
        jp: { text: '朝ご飯', pronunciation: 'あさごはん' },
    },
    {
        type: 'noun',
        en: 'Lunch',
        pl: 'Obiad',
        jp: { text: '昼ご飯', pronunciation: 'ひるごはん' },
    },
    {
        type: 'noun',
        en: 'Dinner',
        pl: 'Kolacja',
        jp: { text: '晩ご飯', pronunciation: 'ばんごはん' },
    },
    {
        type: 'noun',
        en: 'House',
        pl: 'Dom (budynek)',
        jp: { text: '家', pronunciation: 'いえ' },
    },
    {
        type: 'noun',
        en: 'Home',
        pl: 'Dom (miejsce zamieszkania)',
        jp: { text: 'うち' },
    },
    {
        type: 'noun',
        en: 'Morning',
        pl: 'Rano',
        jp: { text: '朝', pronunciation: 'あさ' },
    },
    {
        type: 'noun',
        en: 'This evening / Tonight',
        pl: 'Dziś wieczorem / Dziś nocą',
        jp: { text: '今晩', pronunciation: 'こんばん' },
    },
    {
        type: 'noun',
        en: 'Every day',
        pl: 'Codziennie',
        jp: { text: '毎日', pronunciation: 'まいにち' },
    },
    {
        type: 'noun',
        en: 'Every night',
        pl: 'Co noc',
        jp: { text: '毎晩', pronunciation: 'まいばん' },
    },
    {
        type: 'noun',
        en: 'Weekend',
        pl: 'Weekend',
        jp: { text: '週末', pronunciation: 'しゅうまつ' },
    },
    {
        type: 'noun',
        en: 'When',
        pl: 'Kiedy',
        jp: { text: 'いつ' },
    },
    {
        type: 'suffix',
        en: 'Around (time)',
        pl: 'Około (czas)',
        jp: { text: 'ごろ' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Go',
        pl: 'Iść',
        jp: { text: '行く', pronunciation: 'いく' },
        present: {
            masu: {
                affirmative: { text: '行きます' },
                negative: { text: '行きません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Return',
        pl: 'Wracać',
        jp: { text: '帰る', pronunciation: 'かえる' },
        present: {
            masu: {
                affirmative: { text: '帰ります' },
                negative: { text: '帰りません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Listen / Hear',
        pl: 'Słuchać / Słyszeć',
        jp: { text: '聞く', pronunciation: 'きく' },
        present: {
            masu: {
                affirmative: { text: '聞きます' },
                negative: { text: '聞きません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Drink',
        pl: 'Pić',
        jp: { text: '飲む', pronunciation: 'のむ' },
        present: {
            masu: {
                affirmative: { text: '飲みます' },
                negative: { text: '飲みません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Speak / Talk',
        pl: 'Mówić',
        jp: { text: '話す', pronunciation: 'はなす' },
        present: {
            masu: {
                affirmative: { text: '話します' },
                negative: { text: '話しません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Read',
        pl: 'Czytać',
        jp: { text: '読む', pronunciation: 'よむ' },
        present: {
            masu: {
                affirmative: { text: '読みます' },
                negative: { text: '読みません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'ichidan',
        en: 'Get up',
        pl: 'Wstawać',
        jp: { text: '起きる', pronunciation: 'おきる' },
        present: {
            masu: {
                affirmative: { text: '起きます' },
                negative: { text: '起きません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'ichidan',
        en: 'Eat',
        pl: 'Jeść',
        jp: { text: '食べる', pronunciation: 'たべる' },
        present: {
            masu: {
                affirmative: { text: '食べます' },
                negative: { text: '食べません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'ichidan',
        en: 'Sleep / Go to bed',
        pl: 'Spać / Iść spać',
        jp: { text: '寝る', pronunciation: 'ねる' },
        present: {
            masu: {
                affirmative: { text: '寝ます' },
                negative: { text: '寝ません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'ichidan',
        en: 'See / Watch / Look at',
        pl: 'Widzieć / Oglądać / Patrzeć na',
        jp: { text: '見る', pronunciation: 'みる' },
        present: {
            masu: {
                affirmative: { text: '見ます' },
                negative: { text: '見ません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'irregular',
        en: 'Do',
        pl: 'Robić',
        jp: { text: 'する' },
        present: {
            masu: {
                affirmative: { text: 'します' },
                negative: { text: 'しません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'irregular',
        en: 'Come',
        pl: 'Przybywać',
        jp: { text: '来る', pronunciation: 'くる' },
        present: {
            masu: {
                affirmative: { text: '来ます' },
                negative: { text: '来ません' },
            },
        },
    },
    {
        type: 'phrase',
        en: 'Study',
        pl: 'Uczyć się',
        jp: { text: '勉強する', pronunciation: 'べんきょうする' },
    },
    {
        type: 'adjective',
        adjective_type: 'i-adjective-irregular',
        en: 'Good',
        pl: 'Dobry',
        jp: { text: 'いい' },
        negative: { text: 'よくない' },
    },
    {
        type: 'adjective',
        adjective_type: 'i-adjective',
        en: 'Early',
        pl: 'Wcześnie',
        jp: { text: '早い', pronunciation: 'はやい' },
    },
    {
        type: 'adverb',
        en: 'Rarely',
        pl: 'Rzadko',
        jp: { text: 'あまり' },
    },
    {
        type: 'adverb',
        en: 'Never',
        pl: 'Nigdy',
        jp: { text: '全然', pronunciation: 'ぜんぜん' },
    },
    {
        type: 'adverb',
        en: 'Usually',
        pl: 'Zazwyczaj',
        jp: { text: 'たいてい' },
    },
    {
        type: 'adverb',
        en: 'A little',
        pl: 'Trochę',
        jp: { text: 'ちょっと' },
    },
    {
        type: 'adverb',
        en: 'Sometimes',
        pl: 'Czasami',
        jp: { text: '時々', pronunciation: 'ときどき' },
    },
    {
        type: 'adverb',
        en: 'Often',
        pl: 'Często',
        jp: { text: 'よく' },
    },
    {
        type: 'phrase',
        en: "That's right",
        pl: 'Zgadza się',
        jp: { text: 'そうですね' },
    },
    {
        type: 'phrase',
        en: 'But',
        pl: 'Ale',
        jp: { text: 'でも' },
    },
    {
        type: 'phrase',
        en: 'How about ...?',
        pl: 'A co z ...?',
        jp: { text: '・・・はどうですか' },
    },
    {
        type: 'phrase',
        en: 'Yes (less formal)',
        pl: 'Tak (mniej formalne)',
        jp: { text: 'ええ' },
    },
    {
        type: 'phrase',
        en: 'Where do you play tennis?',
        pl: 'Gdzie grasz w tenisa?',
        jp: { text: 'どこでテニスをしますか。' },
    },
    {
        type: 'phrase',
        en: 'Would you like to go out for a date together?',
        pl: 'Czy chciałbyś pójść razem ze mną na randkę?',
        jp: { text: 'いっしょにデートに行きませんか。', pronunciation: 'いっしょにデートにいきませんか。' },
    },
    {
        type: 'phrase',
        en: 'Would you like to see a movie?',
        pl: 'Czy chciałbyś pójść do kina?',
        jp: { text: 'えいがを見ませんか。', pronunciation: 'えいがをみませんか。' },
    },
    {
        type: 'phrase',
        en: 'Would you like to eat breakfast?',
        pl: 'Czy chciałbyś zjeść śniadanie?',
        jp: { text: 'あさごはんを食べませんか。', pronunciation: 'あさごはんをたべませんか。' },
    },
];

export const genki3Bag: WordBag = {
    id: '55b65f52-ba34-4e03-9e58-228fea22a3cf',
    name: 'Genki #3',
    words: genki_3,
};
