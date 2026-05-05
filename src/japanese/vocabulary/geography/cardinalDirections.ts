import type { TranslatedJapaneseText, WordBag } from '../../types';

const cardinalDirections: TranslatedJapaneseText[] = [
    {
        id: '19b75cad-61b4-4e51-810f-acb871735c55',
        type: 'noun',
        en: 'North',
        pl: 'Północ',
        jp: { text: '北', pronunciation: 'きた' },
    },
    {
        id: '35b49b02-8ddc-49a8-8d89-6313ce0d24c2',
        type: 'noun',
        en: 'South',
        pl: 'Południe',
        jp: { text: '南', pronunciation: 'みなみ' },
    },
    {
        id: '1a3e1125-c76d-4ed8-88c5-4746b1851cba',
        type: 'noun',
        en: 'East',
        pl: 'Wschód',
        jp: { text: '東', pronunciation: 'ひがし' },
    },
    {
        id: '01bb2c05-fd29-4cd9-ac64-433c87bd27b3',
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
