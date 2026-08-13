import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_4_6: TranslatedJapaneseText[] = [
    {
        id: 'a5b3fc23-e3e2-413a-8add-3f75db02258d',
        type: 'noun',
        en: 'Moon',
        pl: 'Księżyc',
        jp: { text: '月', pronunciation: 'つき' },
    },
    {
        id: '13507216-9b48-4a13-a1bb-a61c1132938c',
        type: 'noun',
        en: 'Flute',
        pl: 'Flet',
        jp: { text: 'フルート' },
    },
    {
        id: '2ef57e02-8314-4e6d-88ff-8ff034c022a6',
        type: 'phrase',
        en: 'To play the flute',
        pl: 'Grać na flecie',
        jp: { text: 'フルートを吹く', pronunciation: 'フルートをふく' },
    },
    {
        id: 'aeab0021-7a24-4a5b-88bc-eb63be5a2eb8',
        type: 'verb',
        verb_type: 'godan',
        en: 'Blow / Play (a wind instrument)',
        pl: 'Wiać / Dmuchać / Grać (na instrumencie dętym)',
        jp: { text: '吹く', pronunciation: 'ふく' },
    },
    {
        id: '536a02da-409a-4623-81b6-9a0840235a7f',
        type: 'phrase',
        en: 'I will swim one hundred meters.',
        pl: 'Przepłynę sto metrów.',
        jp: { text: '百メートル泳ぎます。', pronunciation: 'ひゃくメートルおよぎます。' },
    },
    {
        id: 'ac487173-c23c-429c-a64e-c252e7445cb1',
        type: 'phrase',
        en: 'I will go to the post office on July 1st.',
        pl: 'Pójdę na pocztę 1 lipca.',
        jp: { text: '七月一日に郵便局に行きます。', pronunciation: 'しちがつついたちにゆうびんきょくにいきます。' },
        description: 'The date is written in the order of month and day in Japanese.',
    },
];

export const sakura4_6Bag: WordBag = {
    id: '03a4deb0-4ff6-4d0e-b159-b834f6ba747f',
    name: 'Sakura #4.6',
    category: 'sakura',
    words: sakura_4_6,
};
