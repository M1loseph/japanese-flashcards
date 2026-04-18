import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_1_5: TranslatedJapaneseText[] = [
    {
        type: 'pronoun',
        en: 'Who',
        pl: 'Kto',
        jp: { text: 'だれ' },
    },
    {
        type: 'phrase',
        en: 'Whose bike is this?',
        pl: 'Czyj to rower?',
        jp: { text: 'これはだれのじてんしゃですか。' },
    },
    {
        type: 'noun',
        en: 'Cherry / Cherry blossom',
        pl: 'Wiśnia / Kwiat wiśni',
        jp: { text: 'さくら' },
    },
    {
        type: 'noun',
        en: 'Medicine / Drug',
        pl: 'Lekarstwo / Lek',
        jp: { text: 'くすり' },
    },
    {
        type: 'noun',
        en: 'Car',
        pl: 'Samochód',
        jp: { text: 'くるま' },
    },
    {
        type: 'noun',
        en: 'History',
        pl: 'Historia',
        jp: { text: 'れきし' },
    },
    {
        type: 'adjective',
        adjective_type: 'i-adjective',
        en: 'White',
        pl: 'Biały',
        jp: { text: 'しろい' },
    },
    {
        type: 'adjective',
        adjective_type: 'i-adjective',
        en: 'Black',
        pl: 'Czarny',
        jp: { text: 'くろい' },
    },
    {
        type: 'noun',
        en: 'River',
        pl: 'Rzeka',
        jp: { text: 'かわ' },
    },
    {
        type: 'noun',
        en: 'Mandarin',
        pl: 'Mandarynka',
        jp: { text: 'みかん' },
    },
    {
        type: 'phrase',
        en: "I don't have an older sister.",
        pl: 'Nie mam starszej siostry.',
        jp: { text: 'あねはいません。' },
    },
    {
        type: 'noun',
        en: 'Phone number',
        pl: 'Numer telefonu',
        jp: { text: 'でんわばんごう' },
    },
    {
        type: 'phrase',
        en: 'How many people are in your family?',
        pl: 'Ile osób jest w twojej rodzinie?',
        jp: { text: 'かぞくはなんにんですか。' },
    },
    {
        type: 'phrase',
        en: 'My family has four people.',
        pl: 'Moja rodzina liczy cztery osoby.',
        jp: { text: 'かぞくはよにんです。' },
    },
    {
        type: 'phrase',
        en: 'I have two older sisters.',
        pl: 'Mam dwie starsze siostry.',
        jp: { text: 'あねがふたりいます。' },
    },
];

export const sakura1_5Bag: WordBag = {
    id: 'eb85a655-6758-4e7e-9e21-a8b96cc50b05',
    name: 'Sakura #1.5',
    words: sakura_1_5,
};
