import { numbers } from './vocabulary/numbers.ts';
import { countingThings } from './vocabulary/countingThings.ts';
import { type WordBag } from './types.ts';
import { daysOfWeek } from './vocabulary/daysOfWeek.ts';
import { family } from './vocabulary/family.ts';
import { duolingo_1 } from './vocabulary/duolingo/duolingo_1.ts';
import { duolingo_2 } from './vocabulary/duolingo/duolingo_2.ts';
import { duolingo_3 } from './vocabulary/duolingo/duolingo_3.ts';
import { duolingo_4 } from './vocabulary/duolingo/duolingo_4.ts';
import { duolingo_5 } from './vocabulary/duolingo/duolingo_5.ts';
import { duolingo_6 } from './vocabulary/duolingo/duolingo_6.ts';
import { countriesEurope } from './vocabulary/countries/countriesEurope.ts';
import { time } from './vocabulary/time.ts';
import { genki_0 } from './vocabulary/genki/genki_0.ts';
import { genki_1 } from './vocabulary/genki/genki_1.ts';
import { genki_2 } from './vocabulary/genki/genki_2.ts';
import { sakura_1 } from './vocabulary/sakura/sakura_1.ts';
import { sakura_2 } from './vocabulary/sakura/sakura_2.ts';
import { sakura_3 } from './vocabulary/sakura/sakura_3.ts';
import { sakura_4 } from './vocabulary/sakura/sakura_4.ts';
import { sakura_5 } from './vocabulary/sakura/sakura_5.ts';
import { sakura_6 } from './vocabulary/sakura/sakura_6.ts';
import { sakura_7 } from './vocabulary/sakura/sakura_7.ts';
import { sakura_8 } from './vocabulary/sakura/sakura_8.ts';
import { sakura_8_sports } from './vocabulary/sakura/sakura_8_sports.ts';
import { sakura_8_fruitsAndVegetables } from './vocabulary/sakura/sakura_8_fruitsAndVegetables.ts';
import { sakura_8_animals } from './vocabulary/sakura/sakura_8_animals.ts';
import { sakura_9 } from './vocabulary/sakura/sakura_9.ts';
import { sakura_10 } from './vocabulary/sakura/sakura_10.ts';
import { genki_1_majors } from './vocabulary/genki/genki_1_majors.ts';
import { ordinalNumbers } from './vocabulary/ordinalNumbers.ts';

export type { JapaneseWord, WordBag } from './types.ts';

export const familyBag: WordBag = {
    id: '83be35f1-ba1d-4a71-86df-1a52fc4b51ce',
    name: 'Family',
    words: family,
};

export const numbersBag: WordBag = {
    id: '05253d28-8ebf-4793-bcb2-11b117a36f86',
    name: 'Numbers',
    words: numbers,
};

export const ordinalNumbersBag: WordBag = {
    id: '5fb46e35-8f91-4a96-874f-d8e1a27789bf',
    name: 'Ordinal Numbers',
    words: ordinalNumbers,
};

export const countingThingsBag: WordBag = {
    id: 'f1f12e01-87cf-437d-b67f-696a17be41d5',
    name: 'Counting Things',
    words: countingThings,
};

export const daysOfWeekBag: WordBag = {
    id: 'a6d25f35-b38e-4598-9c52-c27f8827f5d5',
    name: 'Days of the Week',
    words: daysOfWeek,
};

export const timeBag: WordBag = {
    id: 'c67e0046-1cca-4ec6-87c9-be345d790236',
    name: 'Time',
    words: time,
};

export const countriesEUBag: WordBag = {
    id: 'efcf6fe8-9b79-436f-8c4d-0987393fb4c6',
    name: 'Countries EU',
    words: countriesEurope,
};

export const duolingo1Bag: WordBag = {
    id: '72d4f2a1-6963-497e-85a6-b6c2458da116',
    name: 'Duolingo #1',
    words: duolingo_1,
};

export const duolingo2Bag: WordBag = {
    id: '38e00aa9-dc82-4a80-ba40-eb14ddea1a86',
    name: 'Duolingo #2',
    words: duolingo_2,
};

export const duolingo3Bag: WordBag = {
    id: '1cb3b262-0fb8-4f4c-b222-352c3d082736',
    name: 'Duolingo #3',
    words: duolingo_3,
};

export const duolingo4Bag: WordBag = {
    id: 'a8b187d2-4b51-4382-a13b-45bd5479cda5',
    name: 'Duolingo #4',
    words: duolingo_4,
};

export const duolingo5Bag: WordBag = {
    id: '89a8a523-b1f2-48c7-849d-d27f0bed07a0',
    name: 'Duolingo #5',
    words: duolingo_5,
};

export const duolingo6Bag: WordBag = {
    id: '7202e479-2fd1-4df3-9d73-47704f77919d',
    name: 'Duolingo #6',
    words: duolingo_6,
};

export const genki0Bag: WordBag = {
    id: '56d838c8-4a95-4eb0-b903-14528a8dc6d6',
    name: 'Genki #0',
    words: genki_0,
};

export const genki1Bag: WordBag = {
    id: '9ce8f1cc-8504-4639-867c-59458ab6e39f',
    name: 'Genki #1',
    words: genki_1,
};

export const genki1MajorsBag: WordBag = {
    id: '2d8e89f2-8ebe-48c0-91cc-062b7a7676e7',
    name: 'Genki #1 Majors',
    words: genki_1_majors,
};

export const genki2Bag: WordBag = {
    id: 'e13d547f-23a5-40c2-8742-b9c935471e6f',
    name: 'Genki #2',
    words: genki_2,
};

export const sakura1Bag: WordBag = {
    id: '63ac3538-65e8-46a3-a248-a2a7560cc046',
    name: 'Sakura #1',
    words: sakura_1,
};

export const sakura2Bag: WordBag = {
    id: 'e4755c96-cd28-40d5-8962-a8d00d23967b',
    name: 'Sakura #2',
    words: sakura_2,
};

export const sakura3Bag: WordBag = {
    id: '169b93bd-599a-4976-8ab2-d280e2af4f63',
    name: 'Sakura #3',
    words: sakura_3,
};

export const sakura4Bag: WordBag = {
    id: '4c96ca61-8767-4120-8291-19241e14370f',
    name: 'Sakura #4',
    words: sakura_4,
};

export const sakura5Bag: WordBag = {
    id: 'eb85a655-6758-4e7e-9e21-a8b96cc50b05',
    name: 'Sakura #5',
    words: sakura_5,
};

export const sakura6Bag: WordBag = {
    id: '3e30c119-8c88-41d7-bbe0-b28079a21214',
    name: 'Sakura #6',
    words: sakura_6,
};

export const sakura7Bag: WordBag = {
    id: '24b5fb05-b55d-460b-a0bb-4f61738ab716',
    name: 'Sakura #7',
    words: sakura_7,
};

export const sakura8Bag: WordBag = {
    id: '5f580975-1012-46a1-b43a-8d059b536333',
    name: 'Sakura #8',
    words: sakura_8,
};

export const sakura8SportsBag: WordBag = {
    id: 'a2f4cc00-5264-4193-9a3a-37b9eda3175f',
    name: 'Sakura #8 Sports',
    words: sakura_8_sports,
};

export const sakura8FruitsAndVegetablesBag: WordBag = {
    id: 'b98c297c-307d-493f-80e8-f9ade70842e1',
    name: 'Sakura #8 Fruits and Vegetables',
    words: sakura_8_fruitsAndVegetables,
};

export const sakura8AnimalsBag: WordBag = {
    id: 'c35ead83-d288-4681-b1f3-2c08fdafcc7f',
    name: 'Sakura #8 Animals',
    words: sakura_8_animals,
};

export const sakura9Bag: WordBag = {
    id: '5dede695-400b-440a-8e2a-0e8f6960d117',
    name: 'Sakura #9',
    words: sakura_9,
};

export const sakura10Bag: WordBag = {
    id: '06f98e3d-c908-4bc0-a2b9-e66de058ab35',
    name: 'Sakura #10',
    words: sakura_10,
};

const availableWordBags: WordBag[] = [
    familyBag,
    numbersBag,
    countingThingsBag,
    ordinalNumbersBag,
    daysOfWeekBag,
    timeBag,
    duolingo1Bag,
    duolingo2Bag,
    duolingo3Bag,
    duolingo4Bag,
    duolingo5Bag,
    duolingo6Bag,
    countriesEUBag,
    genki0Bag,
    genki1Bag,
    genki1MajorsBag,
    genki2Bag,
    sakura1Bag,
    sakura2Bag,
    sakura3Bag,
    sakura4Bag,
    sakura5Bag,
    sakura6Bag,
    sakura7Bag,
    sakura8Bag,
    sakura8SportsBag,
    sakura8FruitsAndVegetablesBag,
    sakura8AnimalsBag,
    sakura9Bag,
    sakura10Bag,
];

export const findBagById = (id: string): WordBag | undefined => availableWordBags.find((bag) => bag.id === id);
