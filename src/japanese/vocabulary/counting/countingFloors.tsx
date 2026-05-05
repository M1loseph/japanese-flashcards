import type { TranslatedJapaneseText, WordBag } from '../../types';

const countingFloors: TranslatedJapaneseText[] = [
    {
        id: '913179f7-f70a-45d9-95eb-1baa0792a780',
        type: 'numeral',
        en: 'First floor',
        pl: 'Pierwsze piętro',
        jp: { text: '一階', pronunciation: 'いっかい' },
    },
    {
        id: 'a0663887-6503-4113-8346-6c2861e5c93e',
        type: 'numeral',
        en: 'Second floor',
        pl: 'Drugie piętro',
        jp: { text: '二階', pronunciation: 'にかい' },
    },
    {
        id: 'f57c7395-dd47-4fcf-b000-c76af1c91587',
        type: 'numeral',
        en: 'Third floor',
        pl: 'Trzecie piętro',
        jp: { text: '三階', pronunciation: 'さんがい' },
    },
    {
        id: 'e39c63a7-5be5-48f4-875a-297903d2ee93',
        type: 'numeral',
        en: 'Fourth floor',
        pl: 'Czwarte piętro',
        jp: { text: '四階', pronunciation: 'よんかい' },
    },
    {
        id: 'fcfbe9e1-338f-45ed-8a5e-efae720e6795',
        type: 'numeral',
        en: 'Fifth floor',
        pl: 'Piąte piętro',
        jp: { text: '五階', pronunciation: 'ごかい' },
    },
    {
        id: 'b8e5a2e9-4cdd-44b2-9e4b-eb8c4e0077da',
        type: 'numeral',
        en: 'Sixth floor',
        pl: 'Szóste piętro',
        jp: { text: '六階', pronunciation: 'ろっかい' },
    },
    {
        id: '34774a72-f0f5-43e6-a0c5-c4202bc5c457',
        type: 'numeral',
        en: 'Seventh floor',
        pl: 'Siódme piętro',
        jp: { text: '七階', pronunciation: 'ななかい' },
    },
    {
        id: '57929161-76df-4fdf-9aeb-ca98859aa0ca',
        type: 'numeral',
        en: 'Eighth floor',
        pl: 'Ósme piętro',
        jp: { text: '八階', pronunciation: 'はっかい' },
    },
    {
        id: '708bc88e-d54b-4a79-87dd-15067e0bad8f',
        type: 'numeral',
        en: 'Ninth floor',
        pl: 'Dziewiąte piętro',
        jp: { text: '九階', pronunciation: 'きゅうかい' },
    },
    {
        id: '76b5d343-393d-478f-ae67-52446a996774',
        type: 'numeral',
        en: 'Tenth floor',
        pl: 'Dziesiąte piętro',
        jp: { text: '十階', pronunciation: 'じゅっかい' },
    },
    {
        id: 'dc83ff7f-5a1a-46ef-9174-e7e3dfe8b3ef',
        type: 'numeral',
        en: 'Eleventh floor',
        pl: 'Jedenaste piętro',
        jp: { text: '十一階', pronunciation: 'じゅういっかい' },
    },
    {
        id: 'd27fccc3-7147-4a89-996b-cfca3ac343fb',
        type: 'numeral',
        en: 'Twelfth floor',
        pl: 'Dwunaste piętro',
        jp: { text: '十二階', pronunciation: 'じゅうにかい' },
    },
    {
        id: '6ce1267d-cc54-4942-a4aa-69b398d91b8b',
        type: 'numeral',
        en: 'Thirteenth floor',
        pl: 'Trzynaste piętro',
        jp: { text: '十三階', pronunciation: 'じゅうさんがい' },
    },
    {
        id: '40f9c64b-60c6-461e-8c00-374a680a678c',
        type: 'numeral',
        en: 'Fourteenth floor',
        pl: 'Czternaste piętro',
        jp: { text: '十四階', pronunciation: 'じゅうよんかい' },
    },
    {
        id: '81a778c5-2c70-40d0-95fe-e711ef57b452',
        type: 'numeral',
        en: 'Fifteenth floor',
        pl: 'Piętnaste piętro',
        jp: { text: '十五階', pronunciation: 'じゅうごかい' },
    },
    {
        id: 'ed0d4b8e-9950-49f3-b46f-bbf4bb2194d7',
        type: 'numeral',
        en: 'Sixteenth floor',
        pl: 'Szesnaste piętro',
        jp: { text: '十六階', pronunciation: 'じゅうろっかい' },
    },
    {
        id: 'e89cb004-b5f5-4b99-8654-46e352ccd184',
        type: 'numeral',
        en: 'Seventeenth floor',
        pl: 'Siedemnaste piętro',
        jp: { text: '十七階', pronunciation: 'じゅうななかい' },
    },
    {
        id: 'af785471-490f-4628-8289-a29d3e3e1162',
        type: 'numeral',
        en: 'Eighteenth floor',
        pl: 'Osiemnaste piętro',
        jp: { text: '十八階', pronunciation: 'じゅうはっかい' },
    },
    {
        id: 'e454c44d-e591-4a37-83fd-88a6d5fc9e6a',
        type: 'numeral',
        en: 'Nineteenth floor',
        pl: 'Dziewiętnaste piętro',
        jp: { text: '十九階', pronunciation: 'じゅうきゅうかい' },
    },
    {
        id: 'ae455ca1-8391-49ae-a5a2-27312bd2d31a',
        type: 'numeral',
        en: 'Twentieth floor',
        pl: 'Dwudzieste piętro',
        jp: { text: '二十階', pronunciation: 'にじゅっかい' },
    },
    {
        id: '557d2e0c-aa69-41f3-bda2-b14aca76d7fb',
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
