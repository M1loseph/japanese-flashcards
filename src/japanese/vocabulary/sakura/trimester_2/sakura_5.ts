import type { JapaneseWord } from '../../../types';
import iGoToSchool from './sakura5Assets/1.jpg';
import friendAreCommingToMyHouse from './sakura5Assets/2.jpg';
import wentToCompanyInTheMorning from './sakura5Assets/3.jpg';

export const sakura_2_5: JapaneseWord[] = [
    {
        type: 'noun',
        en: 'Pool',
        pl: 'Basen',
        jp: { word: 'プール' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: "Go (away from speaker's perspective)",
        pl: 'Iść (w przeciwnym kierunku niż mówiący)',
        jp: { word: '行く', pronunciation: 'いく' },
        present: {
            masu: {
                affirmative: { word: '行きます', pronunciation: 'いきます' },
                negative: { word: '行きません', pronunciation: 'いきません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'irregular',
        en: "Come (towards speaker's perspective)",
        pl: 'Przychodzić (w kierunku mówiącego)',
        jp: { word: '来る', pronunciation: 'くる' },
        present: {
            masu: {
                affirmative: { word: '来ます', pronunciation: 'きます' },
                negative: { word: '来ません', pronunciation: 'きません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Return / Come back',
        pl: 'Wracać',
        jp: { word: '帰る', pronunciation: 'かえる' },
        present: {
            masu: {
                affirmative: { word: '帰ります', pronunciation: 'かえります' },
                negative: { word: '帰りません', pronunciation: 'かえりません' },
            },
        },
    },
    {
        type: 'noun',
        en: 'Cafe (native Japanese word)',
        pl: 'Kawiarnia (słowo pochodzenia japońskiego)',
        jp: { word: '喫茶店', pronunciation: 'きっさてん' },
    },
    {
        type: 'phrase',
        en: 'I will go to school.',
        pl: 'Pójdę do szkoły.',
        jp: { word: 'がっこうに行きます。', pronunciation: 'がっこうにいきます。' },
        image_url: iGoToSchool,
    },
    {
        type: 'phrase',
        en: 'Friends are coming to my house.',
        pl: 'Przyjaciele przychodzą do mojego domu.',
        jp: { word: 'ともだちがわたしのうちに来ます。', pronunciation: 'ともだちがわたしのうちにきます。' },
        image_url: friendAreCommingToMyHouse,
    },
    {
        type: 'phrase',
        en: 'I came to the company in the morning.',
        pl: 'Przyszedłem do firmy rano.',
        jp: { word: 'あさかいしゃに来ました。', pronunciation: 'あさかいしゃにきました。' },
        image_url: wentToCompanyInTheMorning,
    },
];
