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
    {
        id: '6d8a07b8-5617-4ca7-a3a7-f94da9e4afff',
        type: 'noun',
        en: 'Northeast',
        pl: 'Północny wschód',
        jp: { text: '北東', pronunciation: 'ほくとう' },
    },
    {
        id: '903a1dc2-0b55-4ae5-8a62-9990441166c8',
        type: 'noun',
        en: 'Northwest',
        pl: 'Północny zachód',
        jp: { text: '北西', pronunciation: 'ほくせい' },
    },
    {
        id: 'f8f63e80-b8cf-41dc-a366-a3e451b5cd22',
        type: 'noun',
        en: 'Southeast',
        pl: 'Południowy wschód',
        jp: { text: '南東', pronunciation: 'なんとう' },
    },
    {
        id: '4350394c-b12c-45d7-b26b-d7bcc23ba28a',
        type: 'noun',
        en: 'Southwest',
        pl: 'Południowy zachód',
        jp: { text: '南西', pronunciation: 'なんせい' },
    },
];

export const cardinalDirectionsBag: WordBag = {
    id: 'bd663caa-8d68-4296-9bad-d97a86602add',
    name: 'Cardinal Directions',
    category: 'geography',
    words: cardinalDirections,
};
