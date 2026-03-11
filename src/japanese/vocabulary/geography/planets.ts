import type { TranslatedJapaneseText, WordBag } from '../../types';

const planets: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Mercury',
        pl: 'Merkury',
        jp: { text: '水星', pronunciation: 'すいせい' },
    },
    {
        type: 'noun',
        en: 'Venus',
        pl: 'Wenus',
        jp: { text: '金星', pronunciation: 'きんせい' },
    },
    {
        type: 'noun',
        en: 'Earth',
        pl: 'Ziemia',
        jp: { text: '地球', pronunciation: 'ちきゅう' },
    },
    {
        type: 'noun',
        en: 'Mars',
        pl: 'Mars',
        jp: { text: '火星', pronunciation: 'かせい' },
    },
    {
        type: 'noun',
        en: 'Jupiter',
        pl: 'Jowisz',
        jp: { text: '木星', pronunciation: 'もくせい' },
    },
    {
        type: 'noun',
        en: 'Saturn',
        pl: 'Saturn',
        jp: { text: '土星', pronunciation: 'どせい' },
    },
    {
        type: 'noun',
        en: 'Uranus',
        pl: 'Uran',
        jp: { text: '天王星', pronunciation: 'てんのうせい' },
    },
    {
        type: 'noun',
        en: 'Neptune',
        pl: 'Neptun',
        jp: { text: '海王星', pronunciation: 'かいおうせい' },
    },
];

export const planetsBag: WordBag = {
    id: '0ea2670a-adb1-4969-a5f4-af47ee1045c2',
    name: 'Planets',
    words: planets,
};
