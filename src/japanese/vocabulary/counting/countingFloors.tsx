import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingFloors: TranslatedJapaneseText[] = [
    {
        type: 'numeral',
        en: 'First floor',
        pl: 'Pierwsze piętro',
        jp: { text: '一階', pronunciation: 'いっかい' },
    },
    {
        type: 'numeral',
        en: 'Second floor',
        pl: 'Drugie piętro',
        jp: { text: '二階', pronunciation: 'にかい' },
    },
    {
        type: 'numeral',
        en: 'Third floor',
        pl: 'Trzecie piętro',
        jp: { text: '三階', pronunciation: 'さんがい' },
    },
    {
        type: 'numeral',
        en: 'Fourth floor',
        pl: 'Czwarte piętro',
        jp: { text: '四階', pronunciation: 'よんかい' },
    },
    {
        type: 'numeral',
        en: 'Fifth floor',
        pl: 'Piąte piętro',
        jp: { text: '五階', pronunciation: 'ごかい' },
    },
    {
        type: 'numeral',
        en: 'Sixth floor',
        pl: 'Szóste piętro',
        jp: { text: '六階', pronunciation: 'ろっかい' },
    },
    {
        type: 'numeral',
        en: 'Seventh floor',
        pl: 'Siódme piętro',
        jp: { text: '七階', pronunciation: 'ななかい' },
    },
    {
        type: 'numeral',
        en: 'Eighth floor',
        pl: 'Ósme piętro',
        jp: { text: '八階', pronunciation: 'はっかい' },
    },
    {
        type: 'numeral',
        en: 'Ninth floor',
        pl: 'Dziewiąte piętro',
        jp: { text: '九階', pronunciation: 'きゅうかい' },
    },
    {
        type: 'numeral',
        en: 'Tenth floor',
        pl: 'Dziesiąte piętro',
        jp: { text: '十階', pronunciation: 'じゅっかい' },
    },
    {
        type: 'numeral',
        en: 'Eleventh floor',
        pl: 'Jedenaste piętro',
        jp: { text: '十一階', pronunciation: 'じゅういっかい' },
    },
    {
        type: 'numeral',
        en: 'Twelfth floor',
        pl: 'Dwunaste piętro',
        jp: { text: '十二階', pronunciation: 'じゅうにかい' },
    },
    {
        type: 'numeral',
        en: 'Thirteenth floor',
        pl: 'Trzynaste piętro',
        jp: { text: '十三階', pronunciation: 'じゅうさんがい' },
    },
    {
        type: 'numeral',
        en: 'Fourteenth floor',
        pl: 'Czternaste piętro',
        jp: { text: '十四階', pronunciation: 'じゅうよんかい' },
    },
    {
        type: 'numeral',
        en: 'Fifteenth floor',
        pl: 'Piętnaste piętro',
        jp: { text: '十五階', pronunciation: 'じゅうごかい' },
    },
    {
        type: 'numeral',
        en: 'Sixteenth floor',
        pl: 'Szesnaste piętro',
        jp: { text: '十六階', pronunciation: 'じゅうろっかい' },
    },
    {
        type: 'numeral',
        en: 'Seventeenth floor',
        pl: 'Siedemnaste piętro',
        jp: { text: '十七階', pronunciation: 'じゅうななかい' },
    },
    {
        type: 'numeral',
        en: 'Eighteenth floor',
        pl: 'Osiemnaste piętro',
        jp: { text: '十八階', pronunciation: 'じゅうはっかい' },
    },
    {
        type: 'numeral',
        en: 'Nineteenth floor',
        pl: 'Dziewiętnaste piętro',
        jp: { text: '十九階', pronunciation: 'じゅうきゅうかい' },
    },
    {
        type: 'numeral',
        en: 'Twentieth floor',
        pl: 'Dwudzieste piętro',
        jp: { text: '二十階', pronunciation: 'にじゅっかい' },
    },
    {
        type: 'numeral',
        en: 'Which floor',
        pl: 'Które piętro',
        jp: { text: '何階', pronunciation: 'なんがい' },
    },
];

export const countingFloorsBag: WordBag = {
    id: 'ea053297-9592-45fc-be6e-6a48da0980d1',
    name: 'Counting Floors',
    words: countingFloors,
    cultureNotes: (
        <>
            <h3>Floor numbering in Japan</h3>
            <p>
                In Japan, floors are counted starting from <strong>1階 (いっかい)</strong> at street level. This is the
                same system used in the United States, where the ground level is called the "first floor."
            </p>
            <p>
                This differs from countries like the UK, Germany, or Poland, where the street-level floor is the "ground
                floor" (0) and the "first floor" is one level up.
            </p>
            <p>
                So if someone in Japan says <strong>三階 (さんがい)</strong>, they mean the third level from the ground
                — not two levels up like it would be in British English.
            </p>
            <h3>Irregular readings</h3>
            <p>
                Pay attention to the irregular readings: <strong>三階 (さんがい)</strong> uses <em>gai</em> instead of{' '}
                <em>kai</em>, and <strong>何階 (なんがい)</strong> also uses <em>gai</em>. Meanwhile, floors like{' '}
                <strong>一階 (いっかい)</strong>, <strong>六階 (ろっかい)</strong>, <strong>八階 (はっかい)</strong>,
                and <strong>十階 (じゅっかい)</strong> feature a double consonant (促音) before <em>kai</em>.
            </p>
        </>
    ),
};
