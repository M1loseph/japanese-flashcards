import type { JapaneseWord } from '../types';

export const direction: JapaneseWord[] = [
    {
        type: 'noun',
        en: 'Right',
        pl: 'Prawo',
        jp: { word: '右', pronunciation: 'みぎ' },
    },
    {
        type: 'noun',
        en: 'Left',
        pl: 'Lewo',
        jp: { word: '左', pronunciation: 'ひだり' },
    },
    {
        type: 'noun',
        en: 'Front',
        pl: 'Przód',
        jp: { word: '前', pronunciation: 'まえ' },
    },
    {
        type: 'noun',
        en: 'Back / Rear',
        pl: 'Tył / Tylna część',
        jp: { word: '後ろ', pronunciation: 'うしろ' },
    },
    {
        type: 'noun',
        en: 'Inside',
        pl: 'Wewnątrz',
        jp: { word: '中', pronunciation: 'なか' },
    },
    {
        type: 'noun',
        en: 'On top of / Above',
        pl: 'Na / Nad',
        jp: { word: '上', pronunciation: 'うえ' },
    },
    {
        type: 'noun',
        en: 'Under / Below',
        pl: 'Pod / Poniżej',
        jp: { word: '下', pronunciation: 'した' },
    },
    {
        type: 'noun',
        en: 'Near / Close to',
        pl: 'Blisko',
        jp: { word: '近く', pronunciation: 'ちかく' },
    },
    {
        type: 'noun',
        en: 'Next to / Beside',
        pl: 'Obok',
        jp: { word: '隣', pronunciation: 'となり' },
    },
    {
        type: 'noun',
        en: 'Between',
        pl: 'Pomiędzy',
        jp: { word: '間', pronunciation: 'あいだ' },
    },
    {
        type: 'phrase',
        en: "It's between the bank and the post office.",
        pl: 'To jest pomiędzy bankiem a pocztą.',
        jp: { word: '銀行と郵便局の間です。', pronunciation: 'ぎんこうとゆうびんきょくのあいだです。' },
    },
    {
        type: 'phrase',
        en: "It's to the right of the station.",
        pl: 'To jest po prawej stronie dworca.',
        jp: { word: '駅の右です。', pronunciation: 'えきのみぎです。' },
    },
    {
        type: 'phrase',
        en: "It's in front of the hotel.",
        pl: 'To jest przed hotelem.',
        jp: { word: 'ホテルの前です。', pronunciation: 'ホテルのまえです。' },
    },
    {
        type: 'phrase',
        en: "It's near the supermarket.",
        pl: 'To jest blisko supermarketu.',
        jp: { word: 'スーパーの近くです。', pronunciation: 'スーパーのちかくです。' },
    },
];
