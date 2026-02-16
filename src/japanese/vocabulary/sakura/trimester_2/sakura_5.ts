import type { JapaneseWord } from '../../../types';
import iGoToSchool from './sakura5Assets/1.jpg';
import friendAreCommingToMyHouse from './sakura5Assets/2.jpg';
import wentToCompanyInTheMorning from './sakura5Assets/3.jpg';

export const sakura_2_5: JapaneseWord[] = [
    {
        type: 'noun',
        en: 'Pool',
        pl: 'Basen',
        jp: 'プール',
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: "Go (away from speaker's perspective)",
        pl: 'Iść (w przeciwnym kierunku niż mówiący)',
        jp: '行く',
        jp_pronunciation: 'いく',
        masu_form: '行きます (いきます)',
        masen_form: '行きません (いきません)',
    },
    {
        type: 'verb',
        verb_type: 'irregular',
        en: "Come (towards speaker's perspective)",
        pl: 'Przychodzić (w kierunku mówiącego)',
        jp: '来る',
        jp_pronunciation: 'くる',
        masu_form: '来ます (きます)',
        masen_form: '来ません (きません)',
    },
    {
        type: 'verb',
        verb_type: 'godan',
        en: 'Return / Come back',
        pl: 'Wracać',
        jp: '帰る',
        jp_pronunciation: 'かえる',
        masu_form: '帰ります (かえります)',
        masen_form: '帰りません (かえりません)',
    },
    {
        type: 'noun',
        en: 'Cafe (native Japanese word)',
        pl: 'Kawiarnia (słowo pochodzenia japońskiego)',
        jp: '喫茶店',
        jp_pronunciation: 'きっさてん',
    },
    {
        type: 'phrase',
        en: 'I will go to school.',
        pl: 'Pójdę do szkoły.',
        jp: 'がっこうに行きます。',
        jp_pronunciation: 'がっこうにいきます。',
        image_url: iGoToSchool,
    },
    {
        type: 'phrase',
        en: 'Friends are coming to my house.',
        pl: 'Przyjaciele przychodzą do mojego domu.',
        jp: 'ともだちがわたしのうちに来ます。',
        jp_pronunciation: 'ともだちがわたしのうちにきます。',
        image_url: friendAreCommingToMyHouse,
    },
    {
        type: 'phrase',
        en: 'I came to the company in the morning.',
        pl: 'Przyszedłem do firmy rano.',
        jp: 'あさかいしゃに来ました。',
        jp_pronunciation: 'あさかいしゃにきました。',
        image_url: wentToCompanyInTheMorning,
    },
];
