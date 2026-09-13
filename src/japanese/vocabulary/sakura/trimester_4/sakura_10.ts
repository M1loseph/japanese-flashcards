import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_4_10: TranslatedJapaneseText[] = [
    {
        id: '8d75d86a-52dd-4493-ad03-8ad2d221826f',
        type: 'phrase',
        en: 'What do you go to the temple to do?',
        pl: 'Co idziesz robić w świątyni?',
        jp: { text: 'お寺に何をしに行きますか。', pronunciation: 'おてらになにをしにいきますか。' },
    },
    {
        id: 'b72dcebc-aea6-46e3-b605-ea06f4bd4815',
        type: 'noun',
        en: 'Mountain climbing',
        pl: 'Wspinaczka górska',
        jp: { text: '登山', pronunciation: 'とざん' },
    },
    {
        id: '5ad551cf-4283-4621-a5fe-ea6de74fde72',
        type: 'noun',
        en: 'Vistula River',
        pl: 'Rzeka Wisła',
        jp: { text: 'ヴィスワ川', pronunciation: 'ヴィスワがわ' },
    },
    {
        id: '50eb7fa4-06c6-4dcc-a2ef-d65f3e4ec898',
        type: 'noun',
        en: 'Rice field (casual)',
        pl: 'Pole ryżowe (potocznie)',
        jp: { text: '田んぼ', pronunciation: 'たんぼ' },
    },
    {
        id: 'c3e3788f-d999-411f-8791-2452cd2a9b90',
        type: 'noun',
        en: 'Rice paddy (formal)',
        pl: 'Pole ryżowe (formalnie)',
        jp: { text: '水田', pronunciation: 'すいでん' },
    },
    {
        id: 'd98abf18-b75a-4b4a-aed9-a19b8d9cc0f7',
        type: 'noun',
        en: 'Oil field',
        pl: 'Pole naftowe',
        jp: { text: '油田', pronunciation: 'ゆでん' },
    },
    {
        id: '33497d1d-9bc0-4e8d-bd97-8a4f1a9a62cc',
        type: 'noun',
        en: 'Country / Countryside / Rural districts',
        pl: 'Wieś / Obszary wiejskie',
        jp: { text: '田園', pronunciation: 'でんえん' },
    },
    {
        id: '542262dd-9635-439b-8023-58adf3d3add8',
        type: 'noun',
        en: 'Movie club',
        pl: 'Klub filmowy',
        jp: { text: '映画会', pronunciation: 'えいがかい' },
    },
    {
        id: 'aaf6838c-535c-464e-8590-92993803b02e',
        type: 'adverb',
        en: 'Again / Once more',
        pl: 'Znowu / Jeszcze raz',
        jp: { text: 'また' },
    },
    {
        id: 'c6fcb4c4-5d57-47a7-92ed-8999bc448465',
        type: 'adjective',
        adjective_type: 'na-adjective',
        en: 'Stylish',
        pl: 'Stylowy',
        jp: { text: 'おしゃれ' },
    },
    {
        id: '1bc7faaa-2929-41ca-866a-4304315931ef',
        type: 'phrase',
        en: 'What do you want for your birthday?',
        pl: 'Czego chcesz na urodziny?',
        jp: { text: '誕生日に何が欲しいですか。', pronunciation: 'たんじょうびになにがほしいですか。' },
    },
    {
        id: '8d4d6ec4-5206-440b-881b-ddd95e9f28e3',
        type: 'noun',
        en: "Valentine's Day",
        pl: 'Walentynki',
        jp: { text: 'バレンタインデー' },
    },
];

export const sakura4_10Bag: WordBag = {
    id: '3cea6137-1d7c-45cd-b95a-7ea88cea1298',
    name: 'Sakura #4.10',
    category: 'sakura',
    words: sakura_4_10,
};
