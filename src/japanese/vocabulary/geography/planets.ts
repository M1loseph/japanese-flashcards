import type { TranslatedJapaneseText, WordBag } from '../../types';

const planets: TranslatedJapaneseText[] = [
    {
        id: '048bac14-c6fc-4cd5-8829-8e8ce27ff00d',
        type: 'noun',
        en: 'Mercury',
        pl: 'Merkury',
        jp: { text: '水星', pronunciation: 'すいせい' },
    },
    {
        id: 'f1f8c67a-0b1d-457c-9adf-1b5069561878',
        type: 'noun',
        en: 'Venus',
        pl: 'Wenus',
        jp: { text: '金星', pronunciation: 'きんせい' },
    },
    {
        id: '2aa0dc07-3ef8-498a-b8f0-657a70afe2ae',
        type: 'noun',
        en: 'Earth',
        pl: 'Ziemia',
        jp: { text: '地球', pronunciation: 'ちきゅう' },
    },
    {
        id: '0393298e-2bc6-4774-aea3-325214d28a78',
        type: 'noun',
        en: 'Mars',
        pl: 'Mars',
        jp: { text: '火星', pronunciation: 'かせい' },
    },
    {
        id: '044804a7-9e72-4575-a9b7-da8d91dfc31f',
        type: 'noun',
        en: 'Jupiter',
        pl: 'Jowisz',
        jp: { text: '木星', pronunciation: 'もくせい' },
    },
    {
        id: 'ac724298-a972-48ef-a492-4ef0cf098937',
        type: 'noun',
        en: 'Saturn',
        pl: 'Saturn',
        jp: { text: '土星', pronunciation: 'どせい' },
    },
    {
        id: '0d77d39b-3e0c-437e-8030-3be9d7a19b59',
        type: 'noun',
        en: 'Uranus',
        pl: 'Uran',
        jp: { text: '天王星', pronunciation: 'てんのうせい' },
    },
    {
        id: '55c3d0ba-c207-4c5a-b224-66f57840c822',
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
