import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_4_8: TranslatedJapaneseText[] = [
    {
        id: '2a6e679b-814f-4dca-89d6-ae6570e82e23',
        type: 'noun',
        en: 'Parade',
        pl: 'Parada',
        jp: { text: 'パレード' },
    },
    {
        id: '0b2e3c48-0123-4bfc-b330-4fd7474f7bd4',
        type: 'noun',
        en: 'Marathon',
        pl: 'Maraton',
        jp: { text: 'マラソン' },
    },
    {
        id: 'b13f0428-390d-4ede-b05e-c5c3f5f1d784',
        type: 'noun',
        en: 'New Year (loan word)',
        pl: 'Nowy Rok (zapożyczone słowo)',
        jp: { text: 'ニューイヤー' },
        description:
            'This word is used to describe the New Year in western style context - for example for a New Year countdown or parties.',
    },
    {
        id: 'bdf2d0fd-efb3-4332-970c-30832a2b86dc',
        type: 'phrase',
        en: 'I will go watch the baseball game.',
        pl: 'Pójdę obejrzeć mecz baseballu.',
        jp: { text: '野球の試合を見に行きます。', pronunciation: 'やきゅうのしあいをみにいきます。' },
    },
    {
        id: '20a4bfd0-0db2-4bf1-a789-558db350c2bf',
        type: 'phrase',
        en: 'I will go to the cafe to drink a coffee.',
        pl: 'Pójdę do kawiarni, żeby napić się kawy.',
        jp: { text: '喫茶店にコーヒーを飲みに行きます。', pronunciation: 'きっさてんにコーヒーをのみにいきます。' },
    },
    {
        id: '5d091f4b-9fe7-4daf-a1d4-22d68fd420ad',
        type: 'phrase',
        en: 'I went to the library to read a book.',
        pl: 'Poszedłem do biblioteki, żeby poczytać książkę.',
        jp: { text: '図書館に本を読みに行きました。', pronunciation: 'としょかんにほんをよみにいきました。' },
    },
];

export const sakura4_8Bag: WordBag = {
    id: 'c907fbc9-4d78-42b9-8dcd-5d96c5219f00',
    name: 'Sakura #4.8',
    category: 'sakura',
    words: sakura_4_8,
};
