import type { TranslatedJapaneseText, WordBag } from '../../../types';
import dakuten from './sakura1Assets/dakuten.jpg';
import handakuten from './sakura1Assets/handakuten.jpg';

const sakura_3_1: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Place / Location',
        pl: 'Miejsce',
        jp: { text: '場所', pronunciation: 'ばしょ' },
    },
    {
        type: 'noun',
        en: '"Dots" diacritic',
        pl: 'Diakrytyk "kropki"',
        image_url: dakuten,
        jp: { text: '濁点', pronunciation: 'だくてん' },
    },
    {
        type: 'noun',
        en: '"Circle" diacritic',
        pl: 'Diakrytyk "kółko"',
        image_url: handakuten,
        jp: { text: '半濁点', pronunciation: 'はんだくてん' },
    },
    {
        type: 'noun',
        en: 'Bossa Nova',
        pl: 'Bossa Nova',
        jp: { text: 'ボサノバ' },
    },
    {
        type: 'noun',
        en: 'Canoe',
        pl: 'Kanu',
        jp: { text: 'カヌー' },
    },
    {
        type: 'noun',
        en: 'Herb',
        pl: 'Zioło',
        jp: { text: 'ハーブ' },
    },
    {
        type: 'noun',
        en: 'Bikini',
        pl: 'Bikini',
        jp: { text: 'ビキニ' },
    },
    {
        type: 'noun',
        en: 'Nuts',
        pl: 'Orzechy',
        jp: { text: 'ナッツ' },
    },
    {
        type: 'noun',
        en: 'Pet',
        pl: 'Zwierzę domowe',
        jp: { text: 'ペット' },
    },
    {
        type: 'noun',
        en: 'Connection / Pull',
        pl: 'Znajomość',
        jp: { text: 'コネ' },
    },
    {
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'Happy',
        pl: 'Szczęśliwy',
        jp: { text: 'ハッピー' },
    },
    {
        type: 'noun',
        en: 'Necktie',
        pl: 'Krawat',
        jp: { text: 'ネクタイ' },
    },
    {
        type: 'noun',
        en: 'Notebook',
        pl: 'Zeszyt',
        jp: { text: 'ノート' },
    },
    {
        type: 'noun',
        en: 'Class / Lesson',
        pl: 'Lekcja / Zajęcia',
        jp: { text: '授業', pronunciation: 'じゅぎょう' },
    },
    {
        type: 'noun',
        en: 'Sofa',
        pl: 'Kanapa',
        jp: { text: 'ソファ' },
    },
    {
        type: 'phrase',
        en: "It's big and dirty.",
        pl: 'To jest duże i brudne.',
        jp: { text: '大きくて汚いです。', pronunciation: 'おおきくてきたないです。' },
    },
    {
        type: 'phrase',
        en: "It's good and dark.",
        pl: 'To jest dobre i ciemne.',
        jp: { text: 'よくて暗いです。', pronunciation: 'よくてくらいです。' },
    },
    {
        type: 'phrase',
        en: "He's skilled and kind.",
        pl: 'On jest zdolny i miły.',
        jp: { text: '上手で親切です。', pronunciation: 'じょうずでしんせつです。' },
    },
    {
        type: 'phrase',
        en: "It's tough and expensive.",
        pl: 'To jest ciężkie i drogie.',
        jp: { text: '大変で高いです。', pronunciation: 'たいへんでたかいです。' },
    },
    {
        type: 'phrase',
        en: "It's not big and it's weird.",
        pl: 'To nie jest duże i jest dziwne.',
        jp: { text: '大きくなくて変です。', pronunciation: 'おおきくなくてへんです。' },
    },
    {
        type: 'phrase',
        en: "I'm not skilled and I'm short.",
        pl: 'Nie jestem zdolny i jestem niski.',
        jp: { text: '上手じゃなくて背が低いです。', pronunciation: 'じょうずじゃなくてせがひくいです。' },
    },
];

export const sakura3_1Bag: WordBag = {
    id: '1c8429d9-bbc6-4127-b688-4b19b43694ca',
    name: 'Sakura #3.1',
    words: sakura_3_1,
};
