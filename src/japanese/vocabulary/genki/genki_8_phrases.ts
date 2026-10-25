import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_8_phrases: TranslatedJapaneseText[] = [
    {
        id: '5bf830cb-49e4-4d29-8a9a-ef574360e325',
        type: 'phrase',
        formality: 'formal',
        en: "I think we don't need anything.",
        pl: 'Myślę, że niczego nie potrzebujemy.',
        jp: { text: '何もいらないと思います。', pronunciation: 'なにもいらないとおもいます。' },
    },
    {
        id: '309c3e72-ab19-4fb4-816a-a801f9801a0f',
        type: 'phrase',
        formality: 'formal',
        en: "I don't think Mary likes ice cream.",
        pl: 'Nie sądzę, że Mary lubi lody.',
        jp: {
            text: 'メアリーはアイスクリームが好きじゃないと思います。',
            pronunciation: 'メアリーはアイスクリームがすきじゃないとおもいます。',
        },
        description:
            "It's more common to say in Japanese 'I think something is not the case' rather than 'I don't think something is the case.'",
    },
    {
        id: '75a0aaaa-0ad7-4946-b1b9-1f186ccc9c44',
        type: 'phrase',
        formality: 'formal',
        en: 'Teacher said there would be a test tomorrow.',
        pl: 'Nauczyciel powiedział, że jutro będzie test.',
        jp: {
            text: '先生は明日テストがあると言いました。',
            pronunciation: 'せんせいはあしたテストがあるといいました。',
        },
    },
];

export const genki8PhrasesBag: WordBag = {
    id: 'c8764dee-ac04-439d-a393-7cc4e2467afa',
    name: 'Genki #8 Phrases',
    category: 'genki',
    words: genki_8_phrases,
};
