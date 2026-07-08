import type { TranslatedJapaneseText, WordBag } from '../../../types';

const sakura_3_5: TranslatedJapaneseText[] = [
    {
        id: 'a5c58978-5709-4cc5-987e-b136d9b0d65f',
        type: 'noun',
        en: 'Underground',
        pl: 'Pod ziemią',
        jp: { text: '地下', pronunciation: 'ちか' },
    },
    {
        id: '2b306746-f545-4111-a70f-68fcee70f1d4',
        type: 'noun',
        en: 'Bank',
        pl: 'Bank',
        jp: { text: '銀行', pronunciation: 'ぎんこう' },
    },
    {
        id: '33390867-61de-4442-a8ea-5349b52a926f',
        type: 'noun',
        en: 'Large multi-storey building / Office',
        pl: 'Wysoki budynek wielopiętrowy / Biuro',
        jp: { text: 'ビル' },
    },
    {
        id: '6d0260ce-ffc9-45cf-824e-f0de1d9057fd',
        type: 'noun',
        en: 'Shrine',
        pl: 'Świątynia shintoistyczna',
        jp: { text: '神社', pronunciation: 'じんじゃ' },
    },
    {
        id: '4c2e7d11-1574-4412-9030-5b47937eed87',
        type: 'noun',
        en: 'Buddhist temple',
        pl: 'Świątynia buddyjska',
        jp: { text: 'お寺', pronunciation: 'おてら' },
    },
    {
        id: '090c4c07-a272-47f5-afe2-b581c030154d',
        type: 'noun',
        en: 'Reverse / Opposite',
        pl: 'Odwrotność / Przeciwieństwo',
        jp: { text: '反対', pronunciation: 'はんたい' },
    },
];

export const sakura3_5Bag: WordBag = {
    id: '16e6bb8e-544d-40ee-afd2-a9faa37bdd9d',
    name: 'Sakura #3.5',
    category: 'sakura',
    words: sakura_3_5,
};
