import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_1_majors: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Asian studies (major)',
        pl: 'Studia azjatyckie (kierunek)',
        jp: { text: 'アジアけんきゅう' },
    },
    {
        type: 'noun',
        en: 'Economics (major)',
        pl: 'Ekonomia (kierunek)',
        jp: { text: 'けいざい' },
    },
    {
        type: 'noun',
        en: 'Engineering (major)',
        pl: 'Inżynieria (kierunek)',
        jp: { text: 'こうがく' },
    },
    {
        type: 'noun',
        en: 'International relations (major)',
        pl: 'Stosunki międzynarodowe (kierunek)',
        jp: { text: 'こくさいかんけい' },
    },
    {
        type: 'noun',
        en: 'Computer science (major)',
        pl: 'Informatyka (kierunek)',
        jp: { text: 'コンピューター' },
    },
    {
        type: 'noun',
        en: 'Politics (major)',
        pl: 'Polityka (kierunek)',
        jp: { text: 'せいじ' },
    },
    {
        type: 'noun',
        en: 'Biology (major)',
        pl: 'Biologia (kierunek)',
        jp: { text: 'せいぶつがく' },
    },
    {
        type: 'noun',
        en: 'Business (major)',
        pl: 'Biznes (kierunek)',
        jp: { text: 'ビジネス' },
    },
    {
        type: 'noun',
        en: 'Literature (major)',
        pl: 'Literatura (kierunek)',
        jp: { text: 'ぶんがく' },
    },
    {
        type: 'noun',
        en: 'History (major)',
        pl: 'Historia (kierunek)',
        jp: { text: 'れきし' },
    },
];

export const genki1MajorsBag: WordBag = {
    id: '2d8e89f2-8ebe-48c0-91cc-062b7a7676e7',
    name: 'Genki #1 Majors',
    words: genki_1_majors,
};
