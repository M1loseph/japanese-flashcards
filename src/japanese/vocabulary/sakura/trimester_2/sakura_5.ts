import type { TranslatedJapaneseText, WordBag } from '../../../types';
import iGoToSchool from './sakura5Assets/1.jpg';
import friendAreComingToMyHouse from './sakura5Assets/2.jpg';
import wentToCompanyInTheMorning from './sakura5Assets/3.jpg';

const sakura_2_5: TranslatedJapaneseText[] = [
    {
        id: '7d0ac283-7c9d-4d3e-a728-0f109b13ab03',
        type: 'noun',
        en: 'Pool',
        pl: 'Basen',
        jp: { text: 'プール' },
    },
    {
        id: '0ea03f22-2ee0-4d18-a9b6-f21b95215304',
        type: 'verb',
        verb_type: 'godan',
        en: "Go (away from speaker's perspective)",
        pl: 'Iść (w przeciwnym kierunku niż mówiący)',
        jp: { text: '行く', pronunciation: 'いく' },
        te_form: { text: '行って', pronunciation: 'いって' },
    },
    {
        id: '5166eedd-efa3-4878-9746-816ee2388d3a',
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
        te_form: { text: '来て', pronunciation: 'きて' },
    },
    {
        id: 'e66b1c81-a807-4545-8bd5-000c814035ab',
        type: 'verb',
        verb_type: 'godan',
        en: 'Return / Come back',
        pl: 'Wracać',
        jp: { text: '帰る', pronunciation: 'かえる' },
    },
    {
        id: '9fbb1f1a-f95d-4317-a838-19edeaf385d1',
        type: 'noun',
        en: 'Cafe (native Japanese word)',
        pl: 'Kawiarnia (słowo pochodzenia japońskiego)',
        jp: { text: '喫茶店', pronunciation: 'きっさてん' },
    },
    {
        id: 'f296916f-03c5-436a-8b8d-7019fd8114c3',
        type: 'phrase',
        en: 'I will go to school.',
        pl: 'Pójdę do szkoły.',
        jp: { text: '学校に行きます。', pronunciation: 'がっこうにいきます。' },
        image_url: iGoToSchool,
    },
    {
        id: 'c6e8c218-0150-4fdc-881b-1536f8b078ff',
        type: 'phrase',
        en: 'Friends are coming to my house.',
        pl: 'Przyjaciele przychodzą do mojego domu.',
        jp: { text: '友達が私の家に来ます。', pronunciation: 'ともだちがわたしのうちにきます。' },
        image_url: friendAreComingToMyHouse,
    },
    {
        id: 'fb5f5e8f-f9bf-46bb-885a-68f29b3b660b',
        type: 'phrase',
        en: 'I came to the company in the morning.',
        pl: 'Przyszedłem do firmy rano.',
        jp: { text: '朝会社に来ました。', pronunciation: 'あさかいしゃにきました。' },
        image_url: wentToCompanyInTheMorning,
    },
];

export const sakura2_5Bag: WordBag = {
    id: 'e8551b60-d724-4367-9ccb-aa3af4df23a1',
    name: 'Sakura #2.5',
    words: sakura_2_5,
};
