import type { TranslatedJapaneseText, WordBag } from '../types';

const directions: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Right',
        pl: 'Prawo',
        jp: { text: '右', pronunciation: 'みぎ' },
    },
    {
        type: 'noun',
        en: 'Left',
        pl: 'Lewo',
        jp: { text: '左', pronunciation: 'ひだり' },
    },
    {
        type: 'noun',
        en: 'Front',
        pl: 'Przód',
        jp: { text: '前', pronunciation: 'まえ' },
    },
    {
        type: 'noun',
        en: 'Back / Rear',
        pl: 'Tył / Tylna część',
        jp: { text: '後ろ', pronunciation: 'うしろ' },
    },
    {
        type: 'noun',
        en: 'Inside',
        pl: 'Wewnątrz',
        jp: { text: '中', pronunciation: 'なか' },
    },
    {
        type: 'noun',
        en: 'On top of / Above',
        pl: 'Na / Nad',
        jp: { text: '上', pronunciation: 'うえ' },
    },
    {
        type: 'noun',
        en: 'Under / Below',
        pl: 'Pod / Poniżej',
        jp: { text: '下', pronunciation: 'した' },
    },
    {
        type: 'noun',
        en: 'Near / Close to',
        pl: 'Blisko',
        jp: { text: '近く', pronunciation: 'ちかく' },
    },
    {
        type: 'noun',
        en: 'Next to / Beside',
        pl: 'Obok',
        jp: { text: '隣', pronunciation: 'となり' },
    },
    {
        type: 'noun',
        en: 'Between',
        pl: 'Pomiędzy',
        jp: { text: '間', pronunciation: 'あいだ' },
    },
    {
        type: 'phrase',
        en: "It's between the bank and the post office.",
        pl: 'To jest pomiędzy bankiem a pocztą.',
        jp: { text: '銀行と郵便局の間です。', pronunciation: 'ぎんこうとゆうびんきょくのあいだです。' },
    },
    {
        type: 'phrase',
        en: "It's to the right of the station.",
        pl: 'To jest po prawej stronie dworca.',
        jp: { text: '駅の右です。', pronunciation: 'えきのみぎです。' },
    },
    {
        type: 'phrase',
        en: "It's in front of the hotel.",
        pl: 'To jest przed hotelem.',
        jp: { text: 'ホテルの前です。', pronunciation: 'ホテルのまえです。' },
    },
    {
        type: 'phrase',
        en: "It's near the supermarket.",
        pl: 'To jest blisko supermarketu.',
        jp: { text: 'スーパーの近くです。', pronunciation: 'スーパーのちかくです。' },
    },
];

export const directionsBag: WordBag = {
    id: '3a3f535c-4618-47bc-9f4c-d519964637fb',
    name: 'Directions',
    words: directions,
};
