import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_3_6: TranslatedJapaneseText[] = [
    {
        id: '9076de2d-6c6b-42d3-8672-e3926b7d5201',
        type: 'verb',
        verb_type: 'suru',
        en: 'Travel',
        pl: 'Podróżować',
        jp: { text: '旅行する', pronunciation: 'りょこうする' },
    },
    {
        id: 'bdffd13d-336a-480f-b856-bae8baaf28ac',
        type: 'phrase',
        en: 'I traveled around Europe.',
        pl: 'Podróżowałem po Europie.',
        jp: { text: 'ヨーロッパを旅行しました。', pronunciation: 'ヨーロッパをりょこうしました。' },
    },
];

export const sakura3_6Bag: WordBag = {
    id: '07146ec5-908f-4c45-81d3-0a7732ad4ea4',
    name: 'Sakura #3.6',
    category: 'sakura',
    words: sakura_3_6,
};
