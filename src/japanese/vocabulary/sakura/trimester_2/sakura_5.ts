import type { TranslatedJapaneseText, WordBag } from '../../../types';
import iGoToSchool from './sakura5Assets/1.jpg';
import friendAreCommingToMyHouse from './sakura5Assets/2.jpg';
import wentToCompanyInTheMorning from './sakura5Assets/3.jpg';

const sakura_2_5: TranslatedJapaneseText[] = [
    {
        type: 'noun',
        en: 'Pool',
        pl: 'Basen',
        jp: { text: 'プール' },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: "Go (away from speaker's perspective)",
        pl: 'Iść (w przeciwnym kierunku niż mówiący)',
        jp: { text: '行く', pronunciation: 'いく' },
        present: {
            masu: {
                affirmative: { text: '行きます', pronunciation: 'いきます' },
                negative: { text: '行きません', pronunciation: 'いきません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'irregular',
        en: "Come (towards speaker's perspective)",
        pl: 'Przychodzić (w kierunku mówiącego)',
        jp: { text: '来る', pronunciation: 'くる' },
        present: {
            masu: {
                affirmative: { text: '来ます', pronunciation: 'きます' },
                negative: { text: '来ません', pronunciation: 'きません' },
            },
        },
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Return / Come back',
        pl: 'Wracać',
        jp: { text: '帰る', pronunciation: 'かえる' },
        present: {
            masu: {
                affirmative: { text: '帰ります', pronunciation: 'かえります' },
                negative: { text: '帰りません', pronunciation: 'かえりません' },
            },
        },
    },
    {
        type: 'noun',
        en: 'Cafe (native Japanese word)',
        pl: 'Kawiarnia (słowo pochodzenia japońskiego)',
        jp: { text: '喫茶店', pronunciation: 'きっさてん' },
    },
    {
        type: 'phrase',
        en: 'I will go to school.',
        pl: 'Pójdę do szkoły.',
        jp: { text: 'がっこうに行きます。', pronunciation: 'がっこうにいきます。' },
        image_url: iGoToSchool,
    },
    {
        type: 'phrase',
        en: 'Friends are coming to my house.',
        pl: 'Przyjaciele przychodzą do mojego domu.',
        jp: { text: 'ともだちがわたしのうちに来ます。', pronunciation: 'ともだちがわたしのうちにきます。' },
        image_url: friendAreCommingToMyHouse,
    },
    {
        type: 'phrase',
        en: 'I came to the company in the morning.',
        pl: 'Przyszedłem do firmy rano.',
        jp: { text: 'あさかいしゃに来ました。', pronunciation: 'あさかいしゃにきました。' },
        image_url: wentToCompanyInTheMorning,
    },
];

export const sakura2_5Bag: WordBag = {
    id: 'e8551b60-d724-4367-9ccb-aa3af4df23a1',
    name: 'Sakura #2.5',
    words: sakura_2_5,
};
