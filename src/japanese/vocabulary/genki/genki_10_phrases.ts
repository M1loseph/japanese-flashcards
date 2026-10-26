import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_10_phrases: TranslatedJapaneseText[] = [
    {
        id: '327458ed-34a1-4713-a8c9-f0caa18db62b',
        type: 'phrase',
        formality: 'formal',
        en: 'China is larger than Japan.',
        pl: 'Chiny są większe od Japonii.',
        jp: { text: '中国のほうが日本より大きいです。', pronunciation: 'ちゅうごくのほうがにほんよりおおきいです。' },
    },
    {
        id: '8cf83f53-ec70-4e2d-b312-da265d854123',
        type: 'phrase',
        formality: 'formal',
        en: 'Poland is smaller than Germany.',
        pl: 'Polska jest mniejsza od Niemiec.',
        jp: {
            text: 'ポーランドのほうがドイツより小さいです。',
            pronunciation: 'ポーランドのほうがドイツよりちいさいです。',
        },
    },
    {
        id: 'c6f6d1a0-e9f2-45db-862d-fffefdc5beaf',
        type: 'phrase',
        formality: 'formal',
        en: 'I like sushi more than ramen.',
        pl: 'Lubię sushi bardziej niż ramen.',
        jp: { text: '寿司のほうがラーメンより好きです。', pronunciation: 'すしのほうがラーメンよりすきです。' },
    },
    {
        id: '41ddc733-7dcd-442c-857c-4fc44379aaf7',
        type: 'phrase',
        formality: 'formal',
        en: 'I will eat udon or ramen.',
        pl: 'Zjem udon albo ramen.',
        jp: { text: 'うどんかラーメンを食べます。', pronunciation: 'うどんかラーメンをたべます。' },
    },
    {
        id: '0ec0e0ad-13e2-43d7-801d-0fc27014d5d0',
        type: 'phrase',
        formality: 'formal',
        en: 'I will go to the library or the park.',
        pl: 'Pójdę do biblioteki albo do parku.',
        jp: { text: '図書館か公園に行きます。', pronunciation: 'としょかんかこうえんにいきます。' },
    },
];

export const genki10PhrasesBag: WordBag = {
    id: '933ea5d3-de31-4441-bbff-7f044c111b13',
    name: 'Genki #10 Phrases',
    category: 'genki',
    words: genki_10_phrases,
};
