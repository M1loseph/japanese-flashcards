import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_12_phrases: TranslatedJapaneseText[] = [
    {
        id: 'b9861147-f69b-4a68-a508-9637f89c00d0',
        type: 'phrase',
        formality: 'formal',
        en: "I'm interested in music.",
        pl: 'Interesuję się muzyką.',
        jp: { text: '音楽に興味があります。', pronunciation: 'おんがくにきょうみがあります。' },
    },
];

export const genki12PhrasesBag: WordBag = {
    id: '62b1ce4b-5718-4ade-b821-1c0a1d27a3fa',
    name: 'Genki #12 Phrases',
    category: 'genki',
    words: genki_12_phrases,
};
