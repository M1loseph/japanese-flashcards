import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_5_9: TranslatedJapaneseText[] = [
    {
        id: '1c1a67a8-d66f-4283-ba7a-baa6db44c8b9',
        type: 'phrase',
        formality: 'formal',
        en: 'The movie was good.',
        pl: 'Film był dobry.',
        jp: { text: '映画は良かったです。', pronunciation: 'えいがはよかったです。' },
    },
    {
        id: '349f7016-650a-4f67-aa9e-dd62be8e9ec0',
        type: 'adverb',
        en: 'Of course',
        pl: 'Oczywiście',
        jp: { text: 'もちろん' },
    },
    {
        id: '251476d3-e239-49b0-ba32-b5cb91060ed4',
        type: 'noun',
        en: 'Aquarium',
        pl: 'Akwarium',
        jp: { text: '水族館', pronunciation: 'すいぞくかん' },
    },
];

export const sakura5_9Bag: WordBag = {
    id: '31ad1753-22fa-44f3-a1a6-48fbd5e82d8f',
    name: 'Sakura #5.9',
    category: 'sakura',
    words: sakura_5_9,
};
