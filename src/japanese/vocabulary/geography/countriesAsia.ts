import type { TranslatedJapaneseText, WordBag } from '../../types';

const countriesAsia: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'China',
        pl: 'Chiny',
        jp: { text: '中国', pronunciation: 'ちゅうごく' },
    },
    {
        type: 'noun',
        en: 'Japan',
        pl: 'Japonia',
        jp: { text: '日本', pronunciation: 'にほん / にっぽん' },
    },
    {
        type: 'noun',
        en: 'Taiwan',
        pl: 'Tajwan',
        jp: { text: '台湾', pronunciation: 'たいわん' },
    },
    {
        type: 'noun',
        en: 'India',
        pl: 'Indie',
        jp: { text: 'インド' },
    },
    {
        type: 'noun',
        en: 'South Korea',
        pl: 'Korea Południowa',
        jp: { text: '韓国', pronunciation: 'かんこく' },
    },
    {
        type: 'noun',
        en: 'Vietnam',
        pl: 'Wietnam',
        jp: { text: 'ベトナム' },
    },
    {
        type: 'noun',
        en: 'Malaysia',
        pl: 'Malezja',
        jp: { text: 'マレーシア' },
    },
    {
        type: 'noun',
        en: 'Philippines',
        pl: 'Filipiny',
        jp: { text: 'フィリピン' },
    },
    {
        type: 'noun',
        en: 'Thailand',
        pl: 'Tajlandia',
        jp: { text: 'タイ' },
    },
];

export const countriesAsiaBag: WordBag = {
    id: '9889adb4-0777-4983-8a12-d580accb3ce4',
    name: 'Countries Asia',
    words: countriesAsia,
};
