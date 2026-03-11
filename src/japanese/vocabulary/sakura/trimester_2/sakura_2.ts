import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_2_2: TranslatedJapaneseText[] = [
    {
        type: 'phrase',
        en: 'Take care / Stay well',
        pl: 'Szybko wracaj do zdrowia / Trzymaj się',
        jp: { text: 'おだいじに' },
    },
    {
        type: 'noun',
        en: 'Nothing',
        pl: 'Nic',
        jp: { text: 'なにも' },
    },
    {
        type: 'particle',
        en: 'From (a time)',
        pl: 'Od (czas)',
        jp: { text: 'から' },
    },
    {
        type: 'particle',
        en: 'Until (a time)',
        pl: 'Do (czas)',
        jp: { text: 'まで' },
    },
    {
        type: 'phrase',
        en: 'I work from 9AM to 5PM.',
        pl: 'Pracuję od 9 rano do 5 po południu.',
        jp: { text: 'ごぜん九時からごご五時までしごとをします。' },
    },
    {
        type: 'noun',
        en: 'Day off / Break',
        pl: 'Dzień wolny / Przerwa',
        jp: { text: 'やすみ' },
    },
    {
        type: 'phrase',
        en: "It's open from 6AM to 10PM.",
        pl: 'Jest otwarte od 6 rano do 10 wieczorem.',
        jp: { text: 'ごぜん六時からごご十時までです。' },
    },
    {
        type: 'phrase',
        en: 'It does not have a day off.',
        pl: 'Nie ma dnia wolnego.',
        jp: { text: 'やすみはありません。' },
    },
    {
        type: 'phrase',
        en: 'It depends on the day.',
        pl: 'To zależy od dnia.',
        jp: { text: '日によります。', pronunciation: 'ひによります。' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'To be caused by / To depend on',
        pl: 'Zależeć od',
        jp: { text: '依る', pronunciation: 'よる' },
        present: {
            masu: {
                affirmative: { text: '依ります', pronunciation: 'よります' },
                negative: { text: '依りません', pronunciation: 'よりません' },
            },
        },
    },
    {
        type: 'noun',
        en: 'Japanese sweet dumplings',
        pl: 'Japońskie słodkie kluski',
        jp: { text: 'だんご' },
    },
    {
        type: 'noun',
        en: 'Traditional Japanese floor cushion',
        pl: 'Tradycyjna japońska poduszka podłogowa',
        jp: { text: 'ざぶとん' },
    },
    {
        type: 'noun',
        en: 'Foreigner',
        pl: 'Obcokrajowiec',
        jp: { text: 'がいこくじん' },
    },
    {
        type: 'noun',
        en: 'Dandelion',
        pl: 'Dmuchawiec',
        jp: { text: 'たんぽぽ' },
    },
    {
        type: 'noun',
        en: 'Cliff',
        pl: 'Klif',
        jp: { text: 'がんぺき' },
    },
];

export const sakura2_2Bag: WordBag = {
    id: '0eee12bb-6afa-48ea-9583-755c73ccc7e4',
    name: 'Sakura #2.2',
    words: sakura_2_2,
};
