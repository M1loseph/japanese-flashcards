import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_2_8: TranslatedJapaneseText[] = [
    {
        type: 'phrase',
        en: 'I learn Japanese.',
        pl: 'Uczę się japońskiego.',
        jp: { text: '日本語を勉強します。', pronunciation: 'にほんごをべんきょうします。' },
    },
    {
        type: 'phrase',
        en: 'Long time no see.',
        pl: 'Dawno się nie widzieliśmy.',
        jp: { text: 'お久しぶりです。', pronunciation: 'おひさしぶりです。' },
    },
    {
        type: 'noun',
        en: 'Cooking / Cuisine / Dish',
        pl: 'Gotowanie / Kuchnia / Danie',
        jp: { text: '料理', pronunciation: 'りょうり' },
    },
    {
        type: 'noun',
        en: 'Season',
        pl: 'Pora roku',
        jp: { text: '季節', pronunciation: 'きせつ' },
    },
    {
        type: 'noun',
        en: 'Spring',
        pl: 'Wiosna',
        jp: { text: '春', pronunciation: 'はる' },
    },
    {
        type: 'noun',
        en: 'Summer',
        pl: 'Lato',
        jp: { text: '夏', pronunciation: 'なつ' },
    },
    {
        type: 'noun',
        en: 'Autumn / Fall',
        pl: 'Jesień',
        jp: { text: '秋', pronunciation: 'あき' },
    },
    {
        type: 'noun',
        en: 'Winter',
        pl: 'Zima',
        jp: { text: '冬', pronunciation: 'ふゆ' },
    },
    {
        type: 'phrase',
        en: 'What is your favorite season?',
        pl: 'Jaka jest twoja ulubiona pora roku?',
        jp: { text: '好きな季節はいつですか。', pronunciation: 'すきなきせつはいつですか。' },
        description:
            "In Japanese you don't ask 'What is your favorite season?' directly. Instead, you say something that translates to 'When is your favorite season?'.",
    },
    {
        type: 'phrase',
        en: 'What is your favorite city?',
        pl: 'Jakie jest twoje ulubione miasto?',
        jp: { text: '好きな都市はどこですか。', pronunciation: 'すきなとしはどこですか。' },
        description:
            "In Japanese you don't ask 'What is your favorite city?' directly. Instead, you say something that translates to 'Where is your favorite city?'.",
    },
    {
        type: 'phrase',
        en: 'What is your favorite park?',
        pl: 'Jaki jest twój ulubiony park?',
        jp: { text: '好きな公園はどこですか。', pronunciation: 'すきなこうえんはどこですか。' },
        description: 'The same pattern as in the city example applies here.',
    },
    {
        type: 'phrase',
        en: 'What is your favorite cafe?',
        pl: 'Jaka jest twoja ulubiona kawiarnia?',
        jp: { text: '好きな喫茶店はどこですか。', pronunciation: 'すきなきっさてんはどこですか。' },
        description: 'The same pattern as in the city example applies here.',
    },
    {
        type: 'noun',
        en: 'Singer',
        pl: 'Piosenkarz',
        jp: { text: '歌手', pronunciation: 'かしゅ' },
    },
    {
        type: 'phrase',
        en: 'Who is your favorite singer?',
        pl: 'Kto jest twoim ulubionym piosenkarzem?',
        jp: { text: '好きな歌手は誰ですか。', pronunciation: 'すきなかしゅはだれですか。' },
    },
    {
        type: 'noun',
        en: 'Pianist',
        pl: 'Pianista',
        jp: { text: 'ピアニスト' },
    },
    {
        type: 'noun',
        en: 'Election',
        pl: 'Wybory',
        jp: { text: '選挙', pronunciation: 'せんきょ' },
    },
    {
        type: 'noun',
        en: 'Address',
        pl: 'Adres',
        jp: { text: '住所', pronunciation: 'じゅうしょ' },
    },
    {
        type: 'noun',
        en: 'Serious injury',
        pl: 'Poważny uraz',
        jp: { text: '重傷', pronunciation: 'じゅうしょう' },
    },
    {
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'Pure white',
        pl: 'Śnieżnobiały',
        jp: { text: '真っ白', pronunciation: 'まっしろ' },
    },
    {
        type: 'noun',
        en: 'Bowl (for rice or tea)',
        pl: 'Miska (na ryż lub herbatę)',
        jp: { text: '茶碗', pronunciation: 'ちゃわん' },
        description:
            'It used to mean only a tea bowl for tea ceremonies, but now it can also mean a regular bowl for rice or other food.',
    },
    {
        type: 'noun',
        en: 'Research / Study',
        pl: 'Badania / Nauka',
        jp: { text: '研究', pronunciation: 'けんきゅう' },
    },
    {
        type: 'noun',
        en: 'Abbreviated character / Simplified kanji',
        pl: 'Znak skrócony / Uproszczone kanji',
        jp: { text: '略字', pronunciation: 'りゃくじ' },
    },
    {
        type: 'noun',
        en: 'Guest room',
        pl: 'Pokój gościnny',
        jp: { text: '客間', pronunciation: 'きゃくま' },
    },
    {
        type: 'noun',
        en: 'Woman / Female (sex)',
        pl: 'Kobieta (płeć)',
        jp: { text: '女性', pronunciation: 'じょせい' },
    },
    {
        type: 'adverb',
        en: 'Clap, clap',
        pl: 'Klask, klask',
        jp: {
            text: 'パチパチ',
        },
    },
    {
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'Complex / Complicated',
        pl: 'Złożony / Skomplikowany',
        jp: { text: '複雑', pronunciation: 'ふくざつ' },
    },
    {
        type: 'noun',
        en: 'Mountain range',
        pl: 'Pasmo górskie',
        jp: { text: '山脈', pronunciation: 'さんみゃく' },
    },
    {
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'Direct / Immediate / Personal',
        pl: 'Bezpośredni / Natychmiastowy / Osobisty',
        jp: { text: '直接', pronunciation: 'ちょくせつ' },
    },
    {
        type: 'adverb',
        en: 'Not at all / Not a bit',
        pl: 'Wcale nie / Ani trochę',
        jp: { text: 'ちっとも' },
        description: 'This can be written in kanji, but it is usually written in hiragana in modern Japanese.',
    },
    {
        type: 'noun',
        en: 'Scenery / Landscape',
        pl: 'Sceneria / Krajobraz',
        jp: { text: '景色', pronunciation: 'けしき' },
    },
    {
        type: 'noun',
        en: 'Doll / Puppet / Marionette',
        pl: 'Marionetka / Pacynka / Lalka',
        jp: { text: '人形', pronunciation: 'にんぎょう' },
    },
];

export const sakura2_8Bag: WordBag = {
    id: '34ec2540-cd2d-405a-8cca-1cf75f8b0237',
    name: 'Sakura #2.8',
    words: sakura_2_8,
};
