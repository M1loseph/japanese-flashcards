import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_4_5: TranslatedJapaneseText[] = [
    {
        id: 'a010893c-f364-429e-8127-7f6926a8e35d',
        type: 'noun',
        en: 'Kyūshū',
        pl: 'Kiusiu',
        jp: { text: '九州', pronunciation: 'きゅうしゅう' },
    },
    {
        id: '38fb3ccb-cc69-4a20-8772-bbf4ab5a7642',
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'Enough',
        pl: 'Wystarczający',
        jp: { text: '十分', pronunciation: 'じゅうぶん' },
    },
    {
        id: '3cd19f58-d881-4e00-867b-10202a865d5d',
        type: 'noun',
        en: 'Festival',
        pl: 'Festiwal / Święto',
        jp: { text: '祭り', pronunciation: 'まつり' },
    },
    {
        id: '21fde61f-0c67-4fff-8408-60099d873843',
        type: 'noun',
        en: 'Star Festival',
        pl: 'Święto Gwiazd',
        jp: { text: '七夕祭り', pronunciation: 'たなばたまつり' },
    },
    {
        id: 'e17899ee-c82f-4991-87b3-b62471dbfc1a',
        type: 'verb',
        verb_type: 'godan',
        transitivity: 'intransitive',
        en: 'Begin / Start',
        pl: 'Zaczynać się / Rozpoczynać się',
        jp: { text: '始まる', pronunciation: 'はじまる' },
    },
    {
        id: 'bae754c9-6e7a-4c0f-865f-7c206ba2d9fb',
        type: 'noun',
        en: 'All members / Everyone',
        pl: 'Wszyscy członkowie / Wszyscy',
        jp: { text: '全員', pronunciation: 'ぜんいん' },
    },
];

export const sakura4_5Bag: WordBag = {
    id: '6caedf6b-2b1a-4cf3-af60-fbf52e42ed6a',
    name: 'Sakura #4.5',
    category: 'sakura',
    words: sakura_4_5,
};
