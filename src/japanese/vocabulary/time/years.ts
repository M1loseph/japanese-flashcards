import type { TranslatedJapaneseText, WordBag } from '../../types';

const years: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'This year',
        pl: 'W tym roku',
        jp: { text: '今年', pronunciation: 'ことし' },
    },
    {
        type: 'noun',
        en: 'Last year',
        pl: 'W zeszłym roku',
        jp: { text: '去年', pronunciation: 'きょねん' },
    },
    {
        type: 'noun',
        en: 'Next year',
        pl: 'W przyszłym roku',
        jp: { text: '来年', pronunciation: 'らいねん' },
    },
    {
        type: 'noun',
        en: 'Year',
        pl: 'Rok',
        jp: { text: '年', pronunciation: 'とし' },
    },
    {
        type: 'noun',
        en: 'The year before last',
        pl: 'Przed zeszłym rokiem',
        jp: { text: '一昨年', pronunciation: 'おととし' },
    },
    {
        type: 'noun',
        en: 'The year after next',
        pl: 'Rok po przyszłym roku',
        jp: { text: '再来年', pronunciation: 'さらいねん' },
    },
];

export const yearsBag: WordBag = {
    id: '79c50834-d434-40e7-8cf1-042d7af3fe8b',
    name: 'Years',
    words: years,
};
