import type { TranslatedJapaneseText, WordBag } from '../../types';

const continents: TranslatedJapaneseText[] = [
    {
        id: '00c63fca-8643-4171-b449-e1ff742de421',
        type: 'noun',
        en: 'North America',
        pl: 'Ameryka Północna',
        jp: { text: '北アメリカ', pronunciation: 'きたアメリカ' },
    },
    {
        id: '906bcf88-1589-49ef-880d-8e552b712901',
        type: 'noun',
        en: 'North America (abbreviated)',
        pl: 'Ameryka Północna (skrót)',
        jp: { text: '北米', pronunciation: 'ほくべい' },
    },
    {
        id: '78cff26b-ba59-49cb-96ff-e48678aa679e',
        type: 'noun',
        en: 'South America',
        pl: 'Ameryka Południowa',
        jp: { text: '南アメリカ', pronunciation: 'みなみアメリカ' },
    },
    {
        id: '5fd625ec-2334-4745-81e6-90342586e00d',
        type: 'noun',
        en: 'South America (abbreviated)',
        pl: 'Ameryka Południowa (skrót)',
        jp: { text: '南米', pronunciation: 'なんべい' },
    },
    {
        id: 'd1666c67-efc6-4e4a-a7a5-2eeb9eb26bc1',
        type: 'noun',
        en: 'Europe',
        pl: 'Europa',
        jp: { text: 'ヨーロッパ' },
    },
    {
        id: '675091e4-376c-45e8-9bfb-e60f0ddd09d2',
        type: 'noun',
        en: 'Asia',
        pl: 'Azja',
        jp: { text: 'アジア' },
    },
    {
        id: '8abad3cc-e41f-48c6-a107-5bfd58949869',
        type: 'noun',
        en: 'Africa',
        pl: 'Afryka',
        jp: { text: 'アフリカ' },
    },
    {
        id: '3529b1dc-8330-4679-9708-d74b55ec1abf',
        type: 'noun',
        en: 'Australia',
        pl: 'Australia',
        jp: { text: 'オーストラリア' },
    },
    {
        id: '6b4d5277-40cd-4f8a-b3d4-a25735514fe1',
        type: 'noun',
        en: 'Antarctica',
        pl: 'Antarktyda',
        jp: { text: '南極大陸', pronunciation: 'なんきょくたいりく' },
    },
];

export const continentsBag: WordBag = {
    id: '47505b59-31d9-47a0-9ca1-0a1d871f83bd',
    name: 'Continents',
    category: 'geography',
    words: continents,
};
