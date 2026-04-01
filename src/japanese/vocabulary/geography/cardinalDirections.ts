import type { TranslatedJapaneseText, WordBag } from '../../types';

const cardinalDirections: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'North',
        pl: 'Północ',
        jp: { text: '北', pronunciation: 'きた' },
    },
    {
        type: 'noun',
        en: 'South',
        pl: 'Południe',
        jp: { text: '南', pronunciation: 'みなみ' },
    },
    {
        type: 'noun',
        en: 'East',
        pl: 'Wschód',
        jp: { text: '東', pronunciation: 'ひがし' },
    },
    {
        type: 'noun',
        en: 'West',
        pl: 'Zachód',
        jp: { text: '西', pronunciation: 'にし' },
    },
];

export const cardinalDirectionsBag: WordBag = {
    id: 'bd663caa-8d68-4296-9bad-d97a86602add',
    name: 'Cardinal Directions',
    words: cardinalDirections,
};
