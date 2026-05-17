import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_1_majors: TranslatedJapaneseText[] = [
    {
        id: 'f8d05a34-411a-409f-9c49-54142504ec13',
        type: 'noun',
        en: 'Asian studies (major)',
        pl: 'Studia azjatyckie (kierunek)',
        jp: { text: 'アジア研究', pronunciation: 'アジアけんきゅう' },
    },
    {
        id: '64169b80-0572-4f96-9f4f-52fdfc903733',
        type: 'noun',
        en: 'Economics (major)',
        pl: 'Ekonomia (kierunek)',
        jp: { text: '経済', pronunciation: 'けいざい' },
    },
    {
        id: '8e7ddd05-2b8d-4e0d-969a-6dd85bd10841',
        type: 'noun',
        en: 'Engineering (major)',
        pl: 'Inżynieria (kierunek)',
        jp: { text: '工学 ', pronunciation: 'こうがく' },
    },
    {
        id: '1a1e5e1d-2b37-4a06-87d7-4bb4ecc365a2',
        type: 'noun',
        en: 'International relations (major)',
        pl: 'Stosunki międzynarodowe (kierunek)',
        jp: { text: '国際関係', pronunciation: 'こくさいかんけい' },
    },
    {
        id: '24911cf7-2317-4b2b-bf1b-e8dbfd1ab30d',
        type: 'noun',
        en: 'Computer science (major)',
        pl: 'Informatyka (kierunek)',
        jp: { text: 'コンピューター' },
    },
    {
        id: 'be34c866-4872-4f24-be5e-0ca2c1cb30cc',
        type: 'noun',
        en: 'Politics (major)',
        pl: 'Polityka (kierunek)',
        jp: { text: '政治', pronunciation: 'せいじ' },
    },
    {
        id: '4a09309f-90f2-4dd6-ad23-e3e032e543dd',
        type: 'noun',
        en: 'Biology (major)',
        pl: 'Biologia (kierunek)',
        jp: { text: '生物学', pronunciation: 'せいぶつがく' },
    },
    {
        id: '1ce51f15-1a40-4aa6-8fcc-a46fdc4d3329',
        type: 'noun',
        en: 'Business (major)',
        pl: 'Biznes (kierunek)',
        jp: { text: 'ビジネス' },
    },
    {
        id: '3d8c480a-85f7-413a-8b27-4ce577f383e5',
        type: 'noun',
        en: 'Literature (major)',
        pl: 'Literatura (kierunek)',
        jp: { text: '文学', pronunciation: 'ぶんがく' },
    },
    {
        id: '8cd5ca1c-49fc-4e34-9338-21336a3f2599',
        type: 'noun',
        en: 'History (major)',
        pl: 'Historia (kierunek)',
        jp: { text: '歴史', pronunciation: 'れきし' },
    },
];

export const genki1MajorsBag: WordBag = {
    id: '2d8e89f2-8ebe-48c0-91cc-062b7a7676e7',
    name: 'Genki #1 Majors',
    words: genki_1_majors,
};
