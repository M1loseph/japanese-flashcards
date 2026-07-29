import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_4_4: TranslatedJapaneseText[] = [
    {
        id: 'a4c1aa88-3fea-4aa1-8f37-68473caa0e26',
        type: 'adjective',
        adjective_type: 'i-adjective',
        en: 'Cool / Refreshing',
        pl: 'Chłodny / Orzeźwiający',
        jp: { text: '涼しい', pronunciation: 'すずしい' },
    },
    {
        id: '696892bd-8475-476a-bb27-5e5953c9dd63',
        type: 'pre-noun-adjective',
        en: 'Same / Identical',
        pl: 'Taki sam / Identyczny',
        jp: { text: '同じ', pronunciation: 'おなじ' },
    },
    {
        id: '2a32dbba-170c-4ca7-b0c2-fa0132a7a4c6',
        type: 'phrase',
        en: 'I can drive a car.',
        pl: 'Umiem prowadzić samochód.',
        jp: { text: '私は車を運転することができます。', pronunciation: 'わたしはくるまをうんてんすることができます。' },
    },
    {
        id: 'a7d9cd2a-065a-47f8-8102-52bcc32598ea',
        type: 'noun',
        en: 'Reading (of a kanji)',
        pl: 'Czytanie (znaku kanji)',
        jp: { text: '読み方', pronunciation: 'よみかた' },
    },
    {
        id: '212bcfd3-710e-4b00-95f9-0d2627619cee',
        type: 'noun',
        en: 'Word',
        pl: 'Słowo',
        jp: { text: '言葉', pronunciation: 'ことば' },
    },
    {
        id: '8be69e71-28b5-4932-b910-1b80490378e2',
        type: 'phrase',
        en: 'What do you like to do?',
        pl: 'Co lubisz robić?',
        jp: { text: '何をすることが好きですか。', pronunciation: 'なにをすることがすきですか。' },
    },
    {
        id: '1e87a64a-ffa0-4b2f-99c5-6bdb85587113',
        type: 'phrase',
        en: 'I can ride a bike.',
        pl: 'Umiem jeździć na rowerze.',
        jp: { text: '自転車に乗ることができます。', pronunciation: 'じてんしゃにのることができます。' },
    },
    {
        id: 'bc7feb67-9665-4659-8505-4647614e99c6',
        type: 'phrase',
        en: 'I forgot to do my homework.',
        pl: 'Zapomniałem odrobić pracę domową.',
        jp: { text: '宿題をすることを忘れました。', pronunciation: 'しゅくだいをすることをわすれました。' },
    },
];

export const sakura4_4Bag: WordBag = {
    id: '93285105-c874-49b4-ab0d-3142da40b0d7',
    name: 'Sakura #4.4',
    category: 'sakura',
    words: sakura_4_4,
};
