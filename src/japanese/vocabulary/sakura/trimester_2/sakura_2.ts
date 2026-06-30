import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_2_2: TranslatedJapaneseText[] = [
    {
        id: '05938f01-5a80-4523-a080-53b8f926ab13',
        type: 'phrase',
        en: 'Take care / Stay well',
        pl: 'Szybko wracaj do zdrowia / Trzymaj się',
        jp: { text: 'お大事に', pronunciation: 'おだいじに' },
    },
    {
        id: 'b89c424e-a7d8-40e9-b35d-cfbf2509a2d2',
        type: 'phrase',
        en: 'Nothing',
        pl: 'Nic',
        jp: { text: '何も', pronunciation: 'なにも' },
    },
    {
        id: '81aadb99-7d34-4098-b518-a7bff5eaaefe',
        type: 'particle',
        en: 'From (a time)',
        pl: 'Od (czas)',
        jp: { text: 'から' },
    },
    {
        id: '309de1a4-b7d9-4818-bd68-7f39846af8b8',
        type: 'particle',
        en: 'Until (a time)',
        pl: 'Do (czas)',
        jp: { text: 'まで' },
    },
    {
        id: '1e009f80-74c4-4d4b-93d8-aa143d0d4e36',
        type: 'phrase',
        en: 'I work from 9AM to 5PM.',
        pl: 'Pracuję od 9 rano do 5 po południu.',
        jp: {
            text: '午前九時から午後五時まで仕事をします。',
            pronunciation: 'ごぜんくじからごごごじまでしごとをします。',
        },
    },
    {
        id: '325672af-4b2e-44cf-93a0-346f5c431516',
        type: 'noun',
        en: 'Day off / Break',
        pl: 'Dzień wolny / Przerwa',
        jp: { text: '休み', pronunciation: 'やすみ' },
    },
    {
        id: '92485a43-219f-4992-b4b3-3a4c37cf1adc',
        type: 'phrase',
        en: "It's open from 6AM to 10PM.",
        pl: 'Jest otwarte od 6 rano do 10 wieczorem.',
        jp: { text: '午前六時から午後十時までです。', pronunciation: 'ごぜんろくじからごごじゅうじまでです。' },
    },
    {
        id: '37c5f064-719c-494d-8fec-b826ae0c7880',
        type: 'phrase',
        en: 'It does not have a day off.',
        pl: 'Nie ma dnia wolnego.',
        jp: { text: '休みはありません。', pronunciation: 'やすみはありません。' },
    },
    {
        id: 'f1236789-0410-4628-98a6-325ff859b255',
        type: 'phrase',
        en: 'It depends on the day.',
        pl: 'To zależy od dnia.',
        jp: { text: '日によります。', pronunciation: 'ひによります。' },
    },
    {
        id: 'ab29aa3e-084e-4d09-a594-b5aea4d15ab1',
        type: 'verb',
        verb_type: 'godan',
        en: 'To be caused by / To depend on',
        pl: 'Zależeć od',
        jp: { text: '依る', pronunciation: 'よる' },
    },
    {
        id: '3fc4c4e8-c333-4985-89c4-b26ded81a6c6',
        type: 'noun',
        en: 'Japanese sweet dumplings',
        pl: 'Japońskie słodkie kluski',
        jp: { text: '団子', pronunciation: 'だんご' },
    },
    {
        id: '418fd69a-ba53-4dc6-b151-3859b888cf2c',
        type: 'noun',
        en: 'Traditional Japanese floor cushion',
        pl: 'Tradycyjna japońska poduszka podłogowa',
        jp: { text: '座布団', pronunciation: 'ざぶとん' },
    },
    {
        id: 'feb5dbf7-fbbc-4779-ae86-8bc0b23832de',
        type: 'noun',
        en: 'Foreigner',
        pl: 'Obcokrajowiec',
        jp: { text: '外国人', pronunciation: 'がいこくじん' },
    },
    {
        id: '24f9e43a-95d2-4576-b21d-4dddac185b46',
        type: 'noun',
        en: 'Dandelion',
        pl: 'Dmuchawiec',
        jp: { text: 'たんぽぽ' },
    },
    {
        id: 'e874cb7e-4f88-4ccd-bb2a-d14fff3d9237',
        type: 'noun',
        en: 'Quay / Wharf / Jetty​',
        pl: 'Nabrzeże / Molo / Falochron',
        jp: { text: '岸壁', pronunciation: 'がんぺき' },
    },
];

export const sakura2_2Bag: WordBag = {
    id: '0eee12bb-6afa-48ea-9583-755c73ccc7e4',
    name: 'Sakura #2.2',
    words: sakura_2_2,
};
