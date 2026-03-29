import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_2_10: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Self-introduction',
        pl: 'Przedstawienie się',
        jp: { text: '自己紹介', pronunciation: 'じこしょうかい' },
    },
    {
        type: 'noun',
        en: 'Language',
        pl: 'Język',
        jp: { text: '言語', pronunciation: 'げんご' },
    },
    {
        type: 'noun',
        en: 'Age',
        pl: 'Wiek',
        jp: { text: '年齢', pronunciation: 'ねんれい' },
    },
];

export const sakura2_10Bag: WordBag = {
    id: 'ebdecb2b-c569-41c2-88c4-15ba6a590a9e',
    name: 'Sakura #2.10',
    words: sakura_2_10,
};
