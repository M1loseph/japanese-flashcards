import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_3_12: TranslatedJapaneseText[] = [
    {
        id: 'c5992f38-45ee-4423-8f01-f03f3c9dc4f3',
        type: 'phrase',
        en: 'I go to work by bicycle and train.',
        pl: 'Do pracy jadę rowerem i pociągiem.',
        jp: { text: '自転車と電車で会社に行きます。', pronunciation: 'じてんしゃとでんしゃでかいしゃにいきます。' },
    },
    {
        id: '010fca3e-ae2a-4299-b53a-b4e903e3e92b',
        type: 'noun',
        en: 'Parking lot',
        pl: 'Parking',
        jp: { text: '駐車場', pronunciation: 'ちゅうしゃじょう' },
    },
    {
        id: '2187c256-3638-4abd-bae3-c972d246feff',
        type: 'noun',
        en: 'Cup Noodles',
        pl: 'Makaron instant',
        jp: { text: 'カップヌードル' },
    },
    {
        id: '010560dd-3485-48a5-b230-59134fb85c46',
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'Special / Extraordinary',
        pl: 'Specjalny / Nadzwyczajny',
        jp: { text: '特別', pronunciation: 'とくべつ' },
    },
    {
        id: '7700ffdd-978d-4516-91e0-8bcb1e634e75',
        type: 'phrase',
        en: 'On 15th of May, I will go to school.',
        pl: '15 maja pójdę do szkoły.',
        jp: { text: '五月十五日に学校に行きます。', pronunciation: 'ごがつじゅうごにちにがっこうにいきます。' },
    },
    {
        id: 'cb930b24-ec59-4ce4-ae8d-d5760bfb6bb9',
        type: 'phrase',
        en: 'How long',
        pl: 'Jak długo',
        jp: { text: 'どのぐらい' },
    },
    {
        id: 'd769fbaa-d466-4e42-b707-23bd38ccb2e2',
        type: 'verb',
        verb_type: 'godan',
        en: 'Take (time / resources)',
        pl: 'Zajmować (czas / zasoby)',
        jp: { text: 'かかる' },
    },
    {
        id: '5dddf4cc-106a-4711-9467-827b0049d772',
        type: 'phrase',
        en: 'It takes 30 minutes to go from home to school.',
        pl: 'Z domu do szkoły idzie się 30 minut.',
        jp: {
            text: '家から学校まで三十分かかります。',
            pronunciation: 'いえからがっこうまでさんじゅっぷんかかります。',
        },
    },
    {
        id: '48bb0bb3-24b2-4df5-a2bc-67a07ce4f0cf',
        type: 'phrase',
        en: 'It takes 1 hour to go from home to school.',
        pl: 'Z domu do szkoły idzie się 1 godzinę.',
        jp: { text: '家から学校まで一時間かかります。', pronunciation: 'いえからがっこうまでいちじかんかかります。' },
    },
    {
        id: 'a4b0059e-5530-432b-812c-701c52310b3b',
        type: 'noun',
        en: 'Traffic / Transportation',
        pl: 'Ruch drogowy / Transport',
        jp: { text: '交通', pronunciation: 'こうつう' },
    },
    {
        id: 'fc530f0f-feb8-43b5-88a3-e2a6fa4a5f36',
        type: 'verb',
        verb_type: 'ichidan',
        en: 'Get off / Disembark',
        pl: 'Wysiąść / Zsiąść',
        jp: { text: '降りる', pronunciation: 'おりる' },
    },
    {
        id: 'bc3056d7-6207-432f-ada0-6b612855d6fa',
        type: 'phrase',
        en: 'I will get off the train at the next station.',
        pl: 'Wysiądę z pociągu na następnej stacji.',
        jp: { text: '次の駅で電車を降ります。', pronunciation: 'つぎのえきででんしゃをおります。' },
    },
    {
        id: '39fcc219-1b95-4653-aa17-e6b273c9fbdf',
        type: 'noun',
        en: 'Young bird / Chick',
        pl: 'Pisklę / Kurczaczek',
        jp: { text: 'ひよこ' },
    },
];

export const sakura3_12Bag: WordBag = {
    id: '08966d8e-014b-4eaf-b556-a5f0536a7be3',
    name: 'Sakura #3.12',
    words: sakura_3_12,
};
