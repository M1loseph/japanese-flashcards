import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_5_1: TranslatedJapaneseText[] = [
    {
        id: 'db2b5960-1ae9-4029-9c81-61d9d286263e',
        type: 'adjective',
        adjective_type: 'i-adjective',
        en: 'Sweet',
        pl: 'Słodki',
        jp: { text: '甘い', pronunciation: 'あまい' },
    },
    {
        id: 'e6941f93-9c00-4c38-b077-fc9d75ae0e94',
        type: 'noun',
        en: 'World',
        pl: 'Świat',
        jp: { text: '世界', pronunciation: 'せかい' },
    },
    {
        id: '1fef6ce0-3fbe-49c7-b222-93bcbb8c8a44',
        type: 'noun',
        en: 'Moon viewing',
        pl: 'Podziwianie księżyca',
        jp: { text: '月見', pronunciation: 'つきみ' },
        description: "It's the name of a traditional Japanese custom of viewing the moon.",
    },
    {
        id: '2a4f4212-3743-4e21-991c-75cbc17ddce4',
        type: 'noun',
        en: 'Light cotton kimono',
        pl: 'Letnie kimono',
        jp: { text: '浴衣', pronunciation: 'ゆかた' },
    },
    {
        id: '7eb9fe5e-8bb7-4439-8d04-6c642fb01576',
        type: 'verb',
        verb_type: 'ichidan',
        transitivity: 'transitive',
        en: 'Give (the receiver is the speaker or someone close to the speaker)',
        pl: 'Dawać (odbiorca to mówiący lub ktoś bliski mówiącemu)',
        jp: { text: 'くれる' },
    },
    {
        id: '75e6200b-0744-44f5-8d38-7b4fee1a4ade',
        type: 'phrase',
        formality: 'formal',
        en: 'My mom gave me a pen.',
        pl: 'Moja mama dała mi długopis.',
        jp: { text: '母が私にペンをくれました。', pronunciation: 'ははがわたしにぺンをくれました。' },
    },
    {
        id: 'a3138ae6-bc8c-4647-a6e1-52013dc22bcd',
        type: 'phrase',
        formality: 'formal',
        en: 'I gave my mom a pen.',
        pl: 'Dałem mojej mamie długopis.',
        jp: { text: '私は母にペンをあげました。', pronunciation: 'わたしはははにぺンをあげました。' },
    },
    {
        id: '593665ae-591f-47b1-85a7-f6563f03a3e2',
        type: 'phrase',
        formality: 'formal',
        en: 'A friend will give me a pen for my birthday.',
        pl: 'Przyjaciel da mi długopis na moje urodziny.',
        jp: {
            text: '友達が私の誕生日にペンをくれます。',
            pronunciation: 'ともだちがわたしのたんじょうびにぺンをくれます。',
        },
    },
    {
        id: 'eb3c4f07-de88-49a0-963f-b94e5cea2c2c',
        type: 'noun',
        en: 'Cookie',
        pl: 'Ciastko',
        jp: { text: 'クッキー' },
    },
];

export const sakura5_1Bag: WordBag = {
    id: '3f0dc544-12db-4d12-bd35-c2b0c4bf9f0b',
    name: 'Sakura #5.1',
    category: 'sakura',
    words: sakura_5_1,
};
