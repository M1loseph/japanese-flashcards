import type { TranslatedJapaneseText, WordBag } from '../../types';

const survivalPhrases_1: TranslatedJapaneseText[] = [
    {
        id: '60570e88-d8c6-462a-a3c3-64388298335e',
        type: 'phrase',
        en: 'Thank you for the meal.',
        pl: 'Dziękuję za posiłek.',
        jp: { text: 'ごちそうさまでした。' },
    },
    {
        id: 'e617cb92-32cc-42c1-9aa4-8215dfa21cab',
        type: 'phrase',
        en: 'Check, please.',
        pl: 'Poproszę o rachunek.',
        jp: { text: 'お会計をお願いします。', pronunciation: 'おかいけいをおねがいします。' },
    },
    {
        id: 'f1976037-dce7-4571-a8a6-5f255ca6f772',
        type: 'noun',
        en: 'Non-smoking seat',
        pl: 'Miejsce dla niepalących',
        jp: { text: '禁煙席', pronunciation: 'きんえんせき' },
    },
    {
        id: 'a568da99-a9d7-48a1-b211-21b28c0dc9c0',
        type: 'noun',
        en: 'Smoking',
        pl: 'Palenie tytoniu',
        jp: { text: '喫煙', pronunciation: 'きつえん' },
    },
    {
        id: '0668b9e2-d597-49dc-87e2-f23f869c1b3a',
        type: 'noun',
        en: 'Smoking seat',
        pl: 'Miejsce dla palących',
        jp: { text: '喫煙席', pronunciation: 'きつえんせき' },
    },
    {
        id: '4cd9b035-dcde-437c-b2fd-d235244eb3d7',
        type: 'phrase',
        en: 'Table for non-smokers or smokers?',
        pl: 'Stolik dla niepalących czy palących?',
        jp: { text: '禁煙喫煙、どちらにしますか。', pronunciation: 'きんえんきつえん、どちらにしますか。' },
    },
    {
        id: '1e341b55-34b7-439f-a881-fc7c46a771e9',
        type: 'phrase',
        en: 'What do you recommend?',
        pl: 'Co polecasz?',
        jp: { text: '何がおすすめですか。', pronunciation: 'なにがおすすめですか。' },
    },
    {
        id: '49cd44c7-8d91-471f-a8c2-58a289dd4afb',
        type: 'phrase',
        en: 'Please give me a discount.',
        pl: 'Proszę o niższą cenę.',
        jp: { text: '負けてください。', pronunciation: 'まけてください。' },
    },
];

export const survivalPhrases_1Bag: WordBag = {
    id: '4e04d568-1348-4e89-9d71-634301785779',
    name: 'Survival Phrases #1',
    category: 'japanesePod101',
    words: survivalPhrases_1,
};
