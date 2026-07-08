import type { TranslatedJapaneseText, WordBag } from '../../types';

const years: TranslatedJapaneseText[] = [
    {
        id: '9a0cb644-dc12-4e44-a0a2-cd9a0f546607',
        type: 'noun',
        en: 'This year',
        pl: 'W tym roku',
        jp: { text: '今年', pronunciation: 'ことし' },
    },
    {
        id: 'c79e5296-0d85-4808-b790-a8e57cc4ef8c',
        type: 'noun',
        en: 'Last year',
        pl: 'W zeszłym roku',
        jp: { text: '去年', pronunciation: 'きょねん' },
    },
    {
        id: '3e832015-365d-49ac-9757-7aa96e35d71c',
        type: 'noun',
        en: 'Next year',
        pl: 'W przyszłym roku',
        jp: { text: '来年', pronunciation: 'らいねん' },
    },
    {
        id: '13fd1df7-2b4d-404f-a201-0ff415d89db6',
        type: 'noun',
        en: 'Year',
        pl: 'Rok',
        jp: { text: '年', pronunciation: 'とし' },
    },
    {
        id: 'a6d774d9-bbb9-413e-a317-88f6d1519315',
        type: 'noun',
        en: 'The year before last',
        pl: 'Przed zeszłym rokiem',
        jp: { text: '一昨年', pronunciation: 'おととし' },
    },
    {
        id: 'a8d20e4c-b014-4c95-8759-d1c08ee32ade',
        type: 'noun',
        en: 'The year after next',
        pl: 'Rok po przyszłym roku',
        jp: { text: '再来年', pronunciation: 'さらいねん' },
    },
];

export const yearsBag: WordBag = {
    id: '79c50834-d434-40e7-8cf1-042d7af3fe8b',
    name: 'Years',
    category: 'time',
    words: years,
};
