import type { TranslatedJapaneseText, WordBag } from '../../types';

const months: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'January',
        pl: 'Styczeń',
        jp: { text: '一月', pronunciation: 'いちがつ' },
    },
    {
        type: 'noun',
        en: 'February',
        pl: 'Luty',
        jp: { text: '二月', pronunciation: 'にがつ' },
    },
    {
        type: 'noun',
        en: 'March',
        pl: 'Marzec',
        jp: { text: '三月', pronunciation: 'さんがつ' },
    },
    {
        type: 'noun',
        en: 'April',
        pl: 'Kwiecień',
        jp: { text: '四月', pronunciation: 'しがつ' },
    },
    {
        type: 'noun',
        en: 'May',
        pl: 'Maj',
        jp: { text: '五月', pronunciation: 'ごがつ' },
    },
    {
        type: 'noun',
        en: 'June',
        pl: 'Czerwiec',
        jp: { text: '六月', pronunciation: 'ろくがつ' },
    },
    {
        type: 'noun',
        en: 'July',
        pl: 'Lipiec',
        jp: { text: '七月', pronunciation: 'しちがつ' },
    },
    {
        type: 'noun',
        en: 'August',
        pl: 'Sierpień',
        jp: { text: '八月', pronunciation: 'はちがつ' },
    },
    {
        type: 'noun',
        en: 'September',
        pl: 'Wrzesień',
        jp: { text: '九月', pronunciation: 'くがつ' },
    },
    {
        type: 'noun',
        en: 'October',
        pl: 'Październik',
        jp: { text: '十月', pronunciation: 'じゅうがつ' },
    },
    {
        type: 'noun',
        en: 'November',
        pl: 'Listopad',
        jp: { text: '十一月', pronunciation: 'じゅういちがつ' },
    },
    {
        type: 'noun',
        en: 'December',
        pl: 'Grudzień',
        jp: { text: '十二月', pronunciation: 'じゅうにがつ' },
    },
    {
        type: 'noun',
        en: 'Next month',
        pl: 'Następny miesiąc',
        jp: { text: '来月', pronunciation: 'らいげつ' },
    },
    {
        type: 'noun',
        en: 'Last month',
        pl: 'Poprzedni miesiąc',
        jp: { text: '先月', pronunciation: 'せんげつ' },
    },
    {
        type: 'noun',
        en: 'This month',
        pl: 'Ten miesiąc',
        jp: { text: '今月', pronunciation: 'こんげつ' },
    },
    {
        type: 'noun',
        en: 'Month',
        pl: 'Miesiąc',
        jp: { text: '月', pronunciation: 'つき' },
    },
    {
        type: 'noun',
        en: 'Two months ago',
        pl: 'Dwa miesiące temu',
        jp: { text: '二か月前', pronunciation: 'にかげつまえ' },
    },
    {
        type: 'noun',
        en: 'The month after next',
        pl: 'Miesiąc po następnym',
        jp: { text: '再来月', pronunciation: 'さらいげつ' },
    },
];

export const monthsBag: WordBag = {
    id: 'eb5ee3eb-8d1f-4046-9634-8e0915a836c3',
    name: 'Months',
    words: months,
};
