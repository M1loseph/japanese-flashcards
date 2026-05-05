import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_2_10: TranslatedJapaneseText[] = [
    {
        id: 'dd0abf5c-3279-4fdc-9004-80fff4ceb9ec',
        type: 'noun',
        en: 'Self-introduction',
        pl: 'Przedstawienie się',
        jp: { text: '自己紹介', pronunciation: 'じこしょうかい' },
    },
    {
        id: 'b554ddb4-7647-456a-85d5-7c64f24f9090',
        type: 'noun',
        en: 'Language',
        pl: 'Język',
        jp: { text: '言語', pronunciation: 'げんご' },
    },
    {
        id: 'bdd0edf2-181c-4689-aeec-bd8fd81557f5',
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
