import type { TranslatedJapaneseText, WordBag } from '../../types';

const genki_9_phrases: TranslatedJapaneseText[] = [
    {
        id: '014ee6a2-dd85-4bb9-84e6-5b71152a2f36',
        type: 'phrase',
        formality: 'formal',
        en: "I'm a person who likes cats.",
        pl: 'Jestem osobą, która lubi koty.',
        jp: { text: '私は猫が好きな人です。', pronunciation: 'わたしはねこがすきなひとです。' },
    },
    {
        id: '44313784-4cb1-44d7-be0d-65afc73fa4de',
        type: 'phrase',
        formality: 'formal',
        en: 'Yui is the person who is reading a book over there.',
        pl: 'Yui jest osobą, która tam czyta książkę.',
        jp: {
            text: 'ゆいさんはあそこで本を読んでいる人です。',
            pronunciation: 'ゆいさんはあそこでほんをよんでいるひとです。',
        },
    },
    {
        id: '6930b2e2-e71d-45b0-b899-c22c94eaec41',
        type: 'phrase',
        formality: 'formal',
        en: "She's the girl with long hair.",
        pl: 'Ona jest dziewczyną z długimi włosami.',
        jp: { text: '彼女は髪が長い女の子です。', pronunciation: 'かのじょはかみがながいおんなのこです。' },
    },
    {
        id: '8716ceb4-1328-4b1a-a0f4-68a1f7ed55a3',
        type: 'phrase',
        formality: 'formal',
        en: 'I have already done my homework.',
        pl: 'Już odrobiłem pracę domową.',
        jp: { text: 'もう宿題をしました。', pronunciation: 'もうしゅくだいをしました。' },
    },
    {
        id: '1a664225-71c7-44be-80c7-9dcb0a3b798a',
        type: 'phrase',
        formality: 'formal',
        en: "I haven't done my homework yet.",
        pl: 'Jeszcze nie odrobiłem pracy domowej.',
        jp: { text: 'まだ宿題をしていません。', pronunciation: 'まだしゅくだいをしていません。' },
        description: "Note that the verb 'to do' is in the ている form.",
    },
    {
        id: 'c1112bde-36df-4024-9246-d849e8c72378',
        type: 'phrase',
        formality: 'formal',
        en: "I haven't eaten lunch yet.",
        pl: 'Jeszcze nie zjadłem lunchu.',
        jp: { text: 'まだ昼ご飯を食べていません。', pronunciation: 'まだひるごはんをたべていません。' },
        description: "Note that the verb 'to eat' is in the ている form.",
    },
];

export const genki9PhrasesBag: WordBag = {
    id: '6ff74c33-5c00-4f10-b21a-5c2b562bb040',
    name: 'Genki #9 Phrases',
    category: 'genki',
    words: genki_9_phrases,
};
