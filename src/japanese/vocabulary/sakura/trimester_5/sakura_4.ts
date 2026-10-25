import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_5_4: TranslatedJapaneseText[] = [
    {
        id: 'c5846434-c59f-4e6e-b44d-97617f2cbeba',
        type: 'phrase',
        formality: 'formal',
        en: 'Which one do you want?',
        pl: 'Które chcesz?',
        jp: { text: 'どれが欲しいですか。', pronunciation: 'どれがほしいですか。' },
    },
    {
        id: '7ead2020-3c11-478f-9084-090aeb2fb936',
        type: 'noun',
        en: 'Olympics',
        pl: 'Igrzyska olimpijskie',
        jp: { text: 'オリンピック' },
    },
    {
        id: '3e8f73f5-1e7b-4d3b-929d-4e257ae129e3',
        type: 'adverb',
        en: 'First of all / To begin with',
        pl: 'Po pierwsze / Na początek',
        jp: { text: 'まず' },
    },
    {
        id: '2614df87-b42f-404f-8dc9-0bda138b0009',
        type: 'noun',
        en: 'Tissue',
        pl: 'Chusteczka',
        jp: { text: 'ティッシュ' },
    },
    {
        id: '8674a205-da87-4f30-807b-b873f1881aa6',
        type: 'phrase',
        formality: 'formal',
        en: 'Please look at me.',
        pl: 'Proszę, spójrz na mnie.',
        jp: { text: '私を見てください。', pronunciation: 'わたしをみてください。' },
    },
    {
        id: 'c62c35b3-d8a5-4f50-9b92-b5bffc1547cc',
        type: 'noun',
        en: 'Te form',
        pl: 'Forma te',
        jp: { text: 'て形', pronunciation: 'てけい' },
    },
];

export const sakura5_4Bag: WordBag = {
    id: 'dc808877-9701-4192-b551-e16850d82385',
    name: 'Sakura #5.4',
    category: 'sakura',
    words: sakura_5_4,
};
