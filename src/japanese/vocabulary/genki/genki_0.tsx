import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_0: TranslatedJapaneseText[] = [
    {
        type: 'phrase',
        en: 'Good morning',
        pl: 'Dzień dobry (rano)',
        jp: { text: 'おはよう' },
    },
    {
        type: 'phrase',
        en: 'Good morning (polite)',
        pl: 'Dzień dobry (rano, grzecznościowe)',
        jp: { text: 'おはようございます' },
    },
    {
        type: 'phrase',
        en: 'Good afternoon',
        pl: 'Dzień dobry (po południu)',
        jp: { text: 'こんにちは' },
    },
    {
        type: 'phrase',
        en: 'Good evening',
        pl: 'Dobry wieczór',
        jp: { text: 'こんばんは' },
    },
    {
        type: 'phrase',
        en: 'Goodbye (for a longer time)',
        pl: 'Do widzenia (na dłuższy czas)',
        jp: { text: 'さようなら' },
    },
    {
        type: 'phrase',
        en: 'Good night',
        pl: 'Dobranoc',
        jp: { text: 'おやすみ(なさい)' },
        description: 'なさい is a polite ending, can be omitted in casual speech.',
    },
    {
        type: 'phrase',
        en: 'Thank you (polite)',
        pl: 'Dziękuję (grzecznościowe)',
        jp: { text: 'ありがとうございます' },
    },
    {
        type: 'phrase',
        en: 'Thank you (casual)',
        pl: 'Dziękuję (potoczne)',
        jp: { text: 'ありがとう' },
    },
    {
        type: 'phrase',
        en: "Excuse me; I'm sorry",
        pl: 'Przepraszam',
        jp: { text: 'すみません' },
    },
    {
        type: 'phrase',
        en: 'No / Not at all',
        pl: 'Nie / Nie szkodzi',
        jp: { text: 'いいえ' },
    },
    {
        type: 'phrase',
        en: "I'll go and come back",
        pl: 'Idę i wrócę',
        jp: { text: 'いってきます' },
        description: 'Used when leaving home',
    },
    {
        type: 'phrase',
        en: 'Please go and come back',
        pl: 'Idź i wróć',
        jp: { text: 'いってらっしゃい' },
        description: 'Used as a goodbye when someone else is leaving a home.',
    },
    {
        type: 'phrase',
        en: "I'm home",
        pl: 'Już jestem w domu',
        jp: { text: 'ただいま' },
    },
    {
        type: 'phrase',
        en: 'Welcome home',
        pl: 'Witaj w domu',
        jp: { text: 'おかえり(なさい)' },
        description: 'Used to welcome someone home.',
    },
    {
        type: 'phrase',
        en: 'Bon appétit',
        pl: 'Smacznego',
        jp: { text: 'いただきます' },
        description: 'Said before eating. Literally: Thank you for the meal',
    },
    {
        type: 'phrase',
        en: 'Thank you for the meal',
        pl: 'Dziękuję za posiłek',
        jp: { text: 'ごちそうさまでした' },
    },
    {
        type: 'phrase',
        en: 'Nice to meet you (at the beginning of introduction)',
        pl: 'Miło cię poznać (na początku przedstawiania się)',
        jp: { text: 'はじめまして' },
    },
    {
        type: 'phrase',
        en: 'Nice to meet you (said after introduction)',
        pl: 'Miło cię poznać (po przedstawieniu się)',
        jp: { text: 'よろしくおねがいします' },
        description: 'Used after introduction. Literally: Please treat me well.',
    },
];

export const genki0Bag: WordBag = {
    id: '56d838c8-4a95-4eb0-b903-14528a8dc6d6',
    name: 'Genki #0',
    words: genki_0,
};
