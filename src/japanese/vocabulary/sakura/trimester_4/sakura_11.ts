import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_4_11: TranslatedJapaneseText[] = [
    {
        id: 'c0d689a5-66ec-4f04-9b24-6cb99cccac69',
        type: 'noun',
        en: 'Japanese pork cutlet',
        pl: 'Japoński kotlet schabowy',
        jp: { text: 'とんかつ' },
    },
    {
        id: '49afd203-bbb2-4b4e-985b-0aca8ca8f5fb',
        type: 'noun',
        en: 'Sun',
        pl: 'Słońce',
        jp: { text: '日', pronunciation: 'ひ' },
    },
    {
        id: '7cbd38f7-38dd-4b55-8db3-a90bb6556cc9',
        type: 'noun',
        en: 'Holiday / Day off',
        pl: 'Dzień wolny',
        jp: { text: '休日', pronunciation: 'きゅうじつ' },
    },
    {
        id: '20a8ff81-bb95-476d-9508-76aa24de0639',
        type: 'noun',
        en: 'Fire / Flame',
        pl: 'Ogień / Płomień',
        jp: { text: '火', pronunciation: 'ひ' },
    },
    {
        id: 'ff0de9ef-abff-47f2-a8a0-7abceda64aa2',
        type: 'noun',
        en: 'Volcano',
        pl: 'Wulkan',
        jp: { text: '火山', pronunciation: 'かざん' },
    },
    {
        id: '6fde02af-d697-488c-8dbd-0b81ba8811a9',
        type: 'noun',
        en: 'Fire (for example, of a building)',
        pl: 'Pożar',
        jp: { text: '火事', pronunciation: 'かじ' },
    },
    {
        id: 'abfaa8af-5ac1-4496-be53-b3d5e6c7a0b6',
        type: 'noun',
        en: 'Opera',
        pl: 'Opera',
        jp: { text: 'オペラ' },
    },
    {
        id: 'e1b4639d-7d96-4f90-a108-5357880b6ffd',
        type: 'phrase',
        en: "I don't want a new car.",
        pl: 'Nie chcę nowego samochodu.',
        jp: { text: '新しい車は欲しくないです。', pronunciation: 'あたらしいくるまはほしくないです。' },
    },
    {
        id: '29a91242-5dfb-43a6-ac3d-8d77381123a6',
        type: 'noun',
        en: 'Souvenir',
        pl: 'Pamiątka',
        jp: { text: 'お土産', pronunciation: 'おみやげ' },
    },
    {
        id: 'ee7af158-76d6-45ea-8849-4d6f8bdfcf18',
        type: 'verb',
        verb_type: 'ichidan',
        transitivity: 'transitive',
        en: 'Give',
        pl: 'Dać',
        jp: { text: 'あげる' },
    },
    {
        id: 'f5a297cc-9b59-49bc-a1e2-2bdea74128a7',
        type: 'phrase',
        en: 'I will give my older sister a present.',
        pl: 'Dam mojej starszej siostrze prezent.',
        jp: { text: '姉にプレゼントをあげます。', pronunciation: 'あねにプレゼントをあげます。' },
    },
];

export const sakura4_11Bag: WordBag = {
    id: 'd51acaab-4f3c-4b82-a4ef-8a1a5606b9b3',
    name: 'Sakura #4.11',
    category: 'sakura',
    words: sakura_4_11,
};
