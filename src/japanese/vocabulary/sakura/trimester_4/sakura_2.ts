import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_4_2: TranslatedJapaneseText[] = [
    {
        id: 'd5b324e0-9f56-41f5-8984-cad127d1af1c',
        type: 'noun',
        en: 'Reason',
        pl: 'Powód',
        jp: { text: '理由', pronunciation: 'りゆう' },
    },
    {
        id: 'cbb0d085-e5c9-4f7e-84c7-3cb8031c6d30',
        type: 'noun',
        en: 'Rock (music)',
        pl: 'Rock (muzyka)',
        jp: { text: 'ロック' },
    },
    {
        id: '5cfba4d3-9ca9-472f-a584-cc03e66ef352',
        type: 'noun',
        en: 'Fantasy',
        pl: 'Fantastyka',
        jp: { text: 'ファンタジー' },
    },
    {
        id: '07112fda-e0ad-4820-bf7a-87ebb11671df',
        type: 'noun',
        en: 'Sentence / Writing',
        pl: 'Zdanie / Pisanie',
        jp: { text: '文', pronunciation: 'ぶん' },
    },
];

export const sakura4_2Bag: WordBag = {
    id: '5de4d8d3-96c7-4bef-86db-23d105f46b14',
    name: 'Sakura #4.2',
    category: 'sakura',
    words: sakura_4_2,
};
