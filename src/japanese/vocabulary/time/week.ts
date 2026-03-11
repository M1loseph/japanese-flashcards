import type { TranslatedJapaneseText, WordBag } from '../../types.ts';

const week: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Monday',
        pl: 'Poniedziałek',
        jp: { text: '月曜日', pronunciation: 'げつようび' },
    },
    {
        type: 'noun',
        en: 'Tuesday',
        pl: 'Wtorek',
        jp: { text: '火曜日', pronunciation: 'かようび' },
    },
    {
        type: 'noun',
        en: 'Wednesday',
        pl: 'Środa',
        jp: { text: '水曜日', pronunciation: 'すいようび' },
    },
    {
        type: 'noun',
        en: 'Thursday',
        pl: 'Czwartek',
        jp: { text: '木曜日', pronunciation: 'もくようび' },
    },
    {
        type: 'noun',
        en: 'Friday',
        pl: 'Piątek',
        jp: { text: '金曜日', pronunciation: 'きんようび' },
    },
    {
        type: 'noun',
        en: 'Saturday',
        pl: 'Sobota',
        jp: { text: '土曜日', pronunciation: 'どようび' },
    },
    {
        type: 'noun',
        en: 'Sunday',
        pl: 'Niedziela',
        jp: { text: '日曜日', pronunciation: 'にちようび' },
    },
    {
        type: 'noun',
        en: 'Week',
        pl: 'Tydzień',
        jp: { text: '週', pronunciation: 'しゅう' },
    },
    {
        type: 'noun',
        en: 'Weekend',
        pl: 'Weekend',
        jp: { text: '週末', pronunciation: 'しゅうまつ' },
    },
    {
        type: 'noun',
        en: 'This week',
        pl: 'Ten tydzień',
        jp: { text: '今週', pronunciation: 'こんしゅう' },
    },
    {
        type: 'noun',
        en: 'Last week',
        pl: 'Poprzedni tydzień',
        jp: { text: '先週', pronunciation: 'せんしゅう' },
    },
    {
        type: 'noun',
        en: 'Next week',
        pl: 'Przyszły tydzień',
        jp: { text: '来週', pronunciation: 'らいしゅう' },
    },
    {
        type: 'noun',
        en: 'Today',
        pl: 'Dzisiaj',
        jp: { text: '今日', pronunciation: 'きょう' },
    },
    {
        type: 'noun',
        en: 'Tomorrow',
        pl: 'Jutro',
        jp: { text: '明日', pronunciation: 'あした' },
    },
    {
        type: 'noun',
        en: 'Yesterday',
        pl: 'Wczoraj',
        jp: { text: '昨日', pronunciation: 'きのう' },
    },
    {
        type: 'noun',
        en: 'Day',
        pl: 'Dzień',
        jp: { text: '日', pronunciation: 'ひ' },
    },
];

export const weekBag: WordBag = {
    id: 'a6d25f35-b38e-4598-9c52-c27f8827f5d5',
    name: 'Week',
    words: week,
};
