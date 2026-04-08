import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingThings: TranslatedJapaneseText[] = [
    {
        type: 'numeral',
        en: 'One thing',
        pl: 'Jedna rzecz',
        jp: { text: '一つ', pronunciation: 'ひとつ' },
    },
    {
        type: 'numeral',
        en: 'Two things',
        pl: 'Dwie rzeczy',
        jp: { text: '二つ', pronunciation: 'ふたつ' },
    },
    {
        type: 'numeral',
        en: 'Three things',
        pl: 'Trzy rzeczy',
        jp: { text: '三つ', pronunciation: 'みっつ' },
    },
    {
        type: 'numeral',
        en: 'Four things',
        pl: 'Cztery rzeczy',
        jp: { text: '四つ', pronunciation: 'よっつ' },
    },
    {
        type: 'numeral',
        en: 'Five things',
        pl: 'Pięć rzeczy',
        jp: { text: '五つ', pronunciation: 'いつつ' },
    },
    {
        type: 'numeral',
        en: 'Six things',
        pl: 'Sześć rzeczy',
        jp: { text: '六つ', pronunciation: 'むっつ' },
    },
    {
        type: 'numeral',
        en: 'Seven things',
        pl: 'Siedem rzeczy',
        jp: { text: '七つ', pronunciation: 'ななつ' },
    },
    {
        type: 'numeral',
        en: 'Eight things',
        pl: 'Osiem rzeczy',
        jp: { text: '八つ', pronunciation: 'やっつ' },
    },
    {
        type: 'numeral',
        en: 'Nine things',
        pl: 'Dziewięć rzeczy',
        jp: { text: '九つ', pronunciation: 'ここのつ' },
    },
    {
        type: 'numeral',
        en: 'Ten things',
        pl: 'Dziesięć rzeczy',
        jp: { text: '十', pronunciation: 'とお' },
    },
    {
        type: 'phrase',
        en: 'How many ramen do you want?',
        pl: 'Ile ramenów chciałbyś?',
        jp: { text: 'ラーメンが幾つ欲しいですか', pronunciation: 'ラーメンがいくつほしいですか' },
    },
    {
        type: 'numeral',
        en: 'Eleven things',
        pl: 'Jedenaście rzeczy',
        jp: { text: '十一個', pronunciation: 'じゅういっこ' },
    },
    {
        type: 'numeral',
        en: 'Twelve things',
        pl: 'Dwanaście rzeczy',
        jp: { text: '十二個', pronunciation: 'じゅうにこ' },
    },
    {
        type: 'numeral',
        en: 'Thirteen things',
        pl: 'Trzynaście rzeczy',
        jp: { text: '十三個', pronunciation: 'じゅうさんこ' },
    },
    {
        type: 'numeral',
        en: 'Fourteen things',
        pl: 'Czternaście rzeczy',
        jp: { text: '十四個', pronunciation: 'じゅうよんこ' },
    },
    {
        type: 'numeral',
        en: 'Fifteen things',
        pl: 'Piętnaście rzeczy',
        jp: { text: '十五個', pronunciation: 'じゅうごこ' },
    },
    {
        type: 'numeral',
        en: 'Sixteen things',
        pl: 'Szesnaście rzeczy',
        jp: { text: '十六個', pronunciation: 'じゅうろっこ' },
    },
    {
        type: 'numeral',
        en: 'Seventeen things',
        pl: 'Siedemnaście rzeczy',
        jp: { text: '十七個', pronunciation: 'じゅうななこ' },
    },
    {
        type: 'numeral',
        en: 'Eighteen things',
        pl: 'Osiemnaście rzeczy',
        jp: { text: '十八個', pronunciation: 'じゅうはっこ' },
    },
    {
        type: 'numeral',
        en: 'Nineteen things',
        pl: 'Dziewiętnaście rzeczy',
        jp: { text: '十九個', pronunciation: 'じゅうきゅうこ' },
    },
    {
        type: 'numeral',
        en: 'Twenty things',
        pl: 'Dwadzieścia rzeczy',
        jp: { text: '二十個', pronunciation: 'にじゅっこ' },
    },
];

export const countingThingsBag: WordBag = {
    id: 'f1f12e01-87cf-437d-b67f-696a17be41d5',
    name: 'Counting Things',
    words: countingThings,
};
