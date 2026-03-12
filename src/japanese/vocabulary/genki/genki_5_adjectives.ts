import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_5_adjectives: TranslatedJapaneseText[] = [
    {
        type: 'phrase',
        en: 'This is an interesting book.',
        pl: 'To jest interesująca książka.',
        jp: { text: 'これはおもしろい本です。', pronunciation: 'これはおもしろいほんです。' },
    },
    {
        type: 'phrase',
        en: "It's extremely hot today.",
        pl: 'Dzisiaj jest niesamowicie gorąco.',
        jp: { text: '今日はすごく暑いです。', pronunciation: 'きょうはすごくあついです。' },
    },
    {
        type: 'phrase',
        en: 'The sea in Osaka is very beautiful.',
        pl: 'Morze w Osace jest bardzo piękne.',
        jp: { text: '大阪の海はとてもきれいです。', pronunciation: 'おおさかのうみはとてもきれいです。' },
    },
    {
        type: 'phrase',
        en: "It's a bit sunny today.",
        pl: 'Dzisiaj jest trochę słonecznie.',
        jp: { text: '今日はちょっと晴れです。', pronunciation: 'きょうはちょっとはれです。' },
    },
    {
        type: 'phrase',
        en: "I'm fine.",
        pl: 'Czuję się dobrze.',
        jp: { text: '私は元気です。', pronunciation: 'わたしはげんきです。' },
    },
    {
        type: 'phrase',
        en: "I'm not fine.",
        pl: 'Nie czuję się dobrze.',
        jp: { text: '私は元気じゃないです。', pronunciation: 'わたしはげんきじゃないです。' },
    },
    {
        type: 'phrase',
        en: "It's cold.",
        pl: 'Jest zimno.',
        jp: { text: 'さむいです。' },
    },
    {
        type: 'phrase',
        en: "It's not cold.",
        pl: 'Nie jest zimno.',
        jp: { text: 'さむくないです。' },
    },
    {
        type: 'phrase',
        en: 'It was big.',
        pl: 'Było duże.',
        jp: { text: '大きかったです。', pronunciation: 'おおきかったです。' },
    },
    {
        type: 'phrase',
        en: 'It was not big.',
        pl: 'Nie było duże.',
        jp: { text: '大きくなかったです。', pronunciation: 'おおきくなかったです。' },
    },
    {
        type: 'phrase',
        en: 'The movie was scary.',
        pl: 'Film był straszny.',
        jp: { text: '映画はこわかったです。', pronunciation: 'えいがはこわかったです。' },
    },
    {
        type: 'phrase',
        en: 'The movie was not scary.',
        pl: 'Film nie był straszny.',
        jp: { text: '映画はこわくなかったです。', pronunciation: 'えいがはこわくなかったです。' },
    },
    {
        type: 'phrase',
        en: 'The mountain was small.',
        pl: 'Góra była mała.',
        jp: { text: '山は小さかったです。', pronunciation: 'やまはちいさかったです。' },
    },
    {
        type: 'phrase',
        en: 'The mountain was not small.',
        pl: 'Góra nie była mała.',
        jp: { text: '山は小さくなかったです。', pronunciation: 'やまはちいさくなかったです。' },
    },
    {
        type: 'phrase',
        en: "The trip wasn't fun.",
        pl: 'Wycieczka nie była fajna.',
        jp: { text: '旅行は楽しくなかったです。', pronunciation: 'りょこうはたのしくなかったです。' },
    },
    {
        type: 'phrase',
        en: 'It was quiet.',
        pl: 'Było cicho.',
        jp: { text: '静かでした。', pronunciation: 'しずかでした。' },
    },
    {
        type: 'phrase',
        en: "It wasn't quiet.",
        pl: 'Nie było cicho.',
        jp: { text: '静かじゃなかったです。', pronunciation: 'しずかじゃなかったです。' },
    },
];

export const genki5AdjectivesBag: WordBag = {
    id: 'e13c568d-1c22-441d-a426-cfd6775959dc',
    name: 'Genki #5 Adjectives',
    words: genki_5_adjectives,
};
