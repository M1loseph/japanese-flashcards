import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_3_11: TranslatedJapaneseText[] = [
    {
        id: 'd65a05b4-32a3-45b1-a878-1c2856f88efc',
        type: 'noun',
        en: 'Rule',
        pl: 'Zasada',
        jp: { text: 'ルール' },
    },
    {
        id: 'fcc90e6a-16a9-4ba8-b687-32bb62da8088',
        type: 'noun',
        en: 'Mixture of mayonnaise and canned tuna',
        pl: 'Mieszanka majonezu i tuńczyka z puszki',
        jp: { text: 'ツナマヨ' },
    },
    {
        id: '69ca731c-4b76-495b-86d7-e64cf3301aef',
        type: 'phrase',
        en: 'What is "rule" in German?',
        pl: 'Jak jest "zasada" po niemiecku?',
        jp: { text: 'ドイツ語で「ルール」は何ですか。', pronunciation: 'ドイツごでルールはなんですか。' },
    },
    {
        id: '176e7db8-08c8-4ef7-8183-415064ca2cdf',
        type: 'noun',
        en: 'Rail',
        pl: 'Szyna / Tory',
        jp: { text: 'レール' },
    },
    {
        id: 'e651087d-f585-4702-99a9-9f2ed2477ce0',
        type: 'verb',
        verb_type: 'godan',
        en: 'Fly',
        pl: 'Latać',
        jp: { text: '飛ぶ', pronunciation: 'とぶ' },
    },
    {
        id: '7c90e40d-4408-4596-8431-2ce283c9d508',
        type: 'phrase',
        en: 'I fly in the sky.',
        pl: 'Latam po niebie.',
        jp: { text: '空を飛びます。', pronunciation: 'そらをとびます。' },
    },
    {
        id: '9d85bbf4-68ea-46c8-b84f-639d301f58c6',
        type: 'phrase',
        en: 'How do you go from school to home?',
        pl: 'Jak idziesz ze szkoły do domu?',
        jp: {
            text: '学校から家までどうやって行きますか。',
            pronunciation: 'がっこうからいえまでどうやっていきますか。',
        },
    },
    {
        id: '80c5e36e-d6f0-4db9-a71a-e76dcf2b2ac1',
        type: 'noun',
        en: 'Water (loan word)',
        pl: 'Woda (zapożyczone słowo)',
        jp: { text: 'ウォーター' },
    },
];

export const sakura3_11Bag: WordBag = {
    id: '6ffd2165-554c-4b18-9f15-727078fa4246',
    name: 'Sakura #3.11',
    category: 'sakura',
    words: sakura_3_11,
};
