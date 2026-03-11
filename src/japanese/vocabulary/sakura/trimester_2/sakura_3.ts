import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_2_3: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Reading (process)',
        pl: 'Czytanie',
        jp: { text: 'どくしょ' },
    },
    {
        type: 'noun',
        en: 'Distance',
        pl: 'Odległość',
        jp: { text: 'きょり' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Chill / Calm down / Refrigerate',
        pl: 'Ochłonąć / Schłodzić',
        jp: { text: 'ひやす' },
        present: {
            masu: {
                affirmative: { text: 'ひやします' },
                negative: { text: 'ひやしません' },
            },
        },
    },
    {
        type: 'adjective',
        adjective_type: 'i-adjective',
        en: 'Brown',
        pl: 'Brązowy',
        jp: { text: 'ちゃいろい' },
    },
    {
        type: 'noun',
        en: 'Prisoner',
        pl: 'Więzień',
        jp: { text: 'しゅうじん' },
    },
    {
        type: 'noun',
        en: 'Landlord / Landlady',
        pl: 'Właściciel / Właścicielka',
        jp: { text: 'おおや' },
    },
    {
        type: 'noun',
        en: 'Century',
        pl: 'Wiek / Stulecie',
        jp: { text: 'せいき' },
    },
    {
        type: 'noun',
        en: 'Seat',
        pl: 'Miejsce (siedzące)',
        jp: { text: 'せき' },
    },
    {
        type: 'phrase',
        en: 'How many hours do you sleep?',
        pl: 'Ile godzin śpisz?',
        jp: { text: 'なんじかんねますか。' },
    },
    {
        type: 'phrase',
        en: 'I always sleep 7 hours.',
        pl: 'Zawsze śpię 7 godzin.',
        jp: { text: 'いつも七時間ねます。', pronunciation: 'いつもしちじかんねます。' },
        description: 'Note there is no particle "に" after the time duration.',
    },
    {
        type: 'phrase',
        en: 'I go to school for 30 minutes.',
        pl: 'Idę do szkoły przez 30 minut.',
        jp: { text: '三十分がっこうにいきます。', pronunciation: 'さんじゅっぷんがっこうにいきます。' },
        description: 'Note there is no particle "に" after the time duration.',
    },
    {
        type: 'phrase',
        en: 'I work for around 8 hours every day.',
        pl: 'Pracuję około 8 godzin każdego dnia.',
        jp: { text: 'まいにち八時間ぐらいしごとをします。', pronunciation: 'まいにちはちじかんぐらいしごとをします。' },
    },
];

export const sakura2_3Bag: WordBag = {
    id: '0dc6626f-d9e0-4a8b-abb5-9e4948ea30f2',
    name: 'Sakura #2.3',
    words: sakura_2_3,
};
