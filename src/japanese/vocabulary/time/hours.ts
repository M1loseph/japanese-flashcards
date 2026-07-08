import type { TranslatedJapaneseText, WordBag } from '../../types';

const hours: TranslatedJapaneseText[] = [
    {
        id: '361c7f37-bf92-44a1-abec-a4c8c92deddd',
        type: 'noun',
        en: "1 o'clock",
        pl: 'Pierwsza godzina',
        jp: { text: '一時', pronunciation: 'いちじ' },
    },
    {
        id: 'f046b7f1-36fb-4a2c-b8ce-7936dd7d6c94',
        type: 'noun',
        en: "2 o'clock",
        pl: 'Druga godzina',
        jp: { text: '二時', pronunciation: 'にじ' },
    },
    {
        id: '65151d22-0767-4376-a97b-51486f4695ec',
        type: 'noun',
        en: "3 o'clock",
        pl: 'Trzecia godzina',
        jp: { text: '三時', pronunciation: 'さんじ' },
    },
    {
        id: '842f894a-6a19-4475-88b3-1ed334bd74bc',
        type: 'noun',
        en: "4 o'clock",
        pl: 'Czwarta godzina',
        jp: { text: '四時', pronunciation: 'よじ' },
    },
    {
        id: '9037d092-fee6-443e-8e4f-0c98a5a55bb1',
        type: 'noun',
        en: "5 o'clock",
        pl: 'Piąta godzina',
        jp: { text: '五時', pronunciation: 'ごじ' },
    },
    {
        id: 'b371ca29-871f-4a7b-948b-c7720f4cec84',
        type: 'noun',
        en: "6 o'clock",
        pl: 'Szósta godzina',
        jp: { text: '六時', pronunciation: 'ろくじ' },
    },
    {
        id: '28260bc0-8796-43a4-ac5a-7215c567459e',
        type: 'noun',
        en: "7 o'clock",
        pl: 'Siódma godzina',
        jp: { text: '七時', pronunciation: 'しちじ' },
    },
    {
        id: '04c93911-bb7c-4553-9da0-36d410b275b8',
        type: 'noun',
        en: "8 o'clock",
        pl: 'Ósma godzina',
        jp: { text: '八時', pronunciation: 'はちじ' },
    },
    {
        id: '731c6b9e-a81e-4f44-a626-9e511cfebd7f',
        type: 'noun',
        en: "9 o'clock",
        pl: 'Dziewiąta godzina',
        jp: { text: '九時', pronunciation: 'くじ' },
    },
    {
        id: 'c3571c47-c6bd-40db-9a21-2c6255b538da',
        type: 'noun',
        en: "10 o'clock",
        pl: 'Dziesiąta godzina',
        jp: { text: '十時', pronunciation: 'じゅうじ' },
    },
    {
        id: 'a9f41b87-1ab2-4720-85ca-335b507d84f9',
        type: 'noun',
        en: "11 o'clock",
        pl: 'Jedenasta godzina',
        jp: { text: '十一時', pronunciation: 'じゅういちじ' },
    },
    {
        id: 'e5e57b21-3f1c-4883-b7af-ddffe7fa3f59',
        type: 'noun',
        en: "12 o'clock",
        pl: 'Dwunasta godzina',
        jp: { text: '十二時', pronunciation: 'じゅうにじ' },
    },
    {
        id: 'e59aee63-8df5-434d-96b6-1b469524a6cd',
        type: 'suffix',
        en: 'Hour',
        pl: 'Godzina',
        jp: { text: '時', pronunciation: 'じ' },
    },
    {
        id: '0d702bab-0e1f-43a1-8678-01f68680acd0',
        type: 'noun',
        en: 'Which hour',
        pl: 'Która godzina',
        jp: { text: '何時', pronunciation: 'なんじ' },
    },
];

export const hoursBag: WordBag = {
    id: 'c67e0046-1cca-4ec6-87c9-be345d790236',
    name: 'Hours',
    category: 'time',
    words: hours,
};
