import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_7_phrases: TranslatedJapaneseText[] = [
    {
        id: '9da920bb-37a9-4195-b83a-8002444fadff',
        type: 'phrase',
        formality: 'formal',
        en: "I'm drinking coffee.",
        pl: 'Piję kawę. (w tej chwili)',
        jp: { text: 'コーヒーを飲んでいます。', pronunciation: 'コーヒーをのんでいます。' },
    },
    {
        id: '4b141e0b-dccd-4b2a-92f9-6ff28a5e2de0',
        type: 'phrase',
        formality: 'formal',
        en: "I'm eating lunch.",
        pl: 'Jem obiad. (w tej chwili)',
        jp: { text: '昼ご飯を食べています。', pronunciation: 'ひるごはんをたべています。' },
    },
    {
        id: '3214726a-a11f-48ed-a6f4-142567e0f120',
        type: 'phrase',
        formality: 'formal',
        en: "I'm taking a picture.",
        pl: 'Robię zdjęcie. (w tej chwili)',
        jp: { text: '写真を撮っています。', pronunciation: 'しゃしんをとっています。' },
    },
];

export const genki7PhrasesBag: WordBag = {
    id: 'e1484e91-c312-4c4a-a2e7-5971f1ee08b1',
    name: 'Genki #7 Phrases',
    category: 'genki',
    words: genki_7_phrases,
};
