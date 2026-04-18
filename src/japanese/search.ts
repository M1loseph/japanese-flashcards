import { toRomaji } from 'wanakana';
import type { TranslationLanguage } from '../types/TranslationLanguage';
import type { TranslatedJapaneseText, WordBag } from './types';
import { countingFloorsBag } from './vocabulary/counting/countingFloors';
import { countingLongCylindricalThingsBag } from './vocabulary/counting/countingLongCylindricalThings';
import { countingPeopleBag } from './vocabulary/counting/countingPeople';
import { countingPeoplePoliteBag } from './vocabulary/counting/countingPeoplePolite';
import { countingSmallAndMediumAnimalsBag } from './vocabulary/counting/countingSmallAndMediumAnimals';
import { countingThingsBag } from './vocabulary/counting/countingThings';
import { countingThinObjectsBag } from './vocabulary/counting/countingThinObjects';
import { directionsBag } from './vocabulary/directions';
import { duolingo1Bag } from './vocabulary/duolingo/duolingo_1';
import { duolingo10Bag } from './vocabulary/duolingo/duolingo_10';
import { duolingo11Bag } from './vocabulary/duolingo/duolingo_11';
import { duolingo12Bag } from './vocabulary/duolingo/duolingo_12';
import { duolingo13Bag } from './vocabulary/duolingo/duolingo_13';
import { duolingo2Bag } from './vocabulary/duolingo/duolingo_2';
import { duolingo3Bag } from './vocabulary/duolingo/duolingo_3';
import { duolingo4Bag } from './vocabulary/duolingo/duolingo_4';
import { duolingo5Bag } from './vocabulary/duolingo/duolingo_5';
import { duolingo6Bag } from './vocabulary/duolingo/duolingo_6';
import { duolingo7Bag } from './vocabulary/duolingo/duolingo_7';
import { duolingo8Bag } from './vocabulary/duolingo/duolingo_8';
import { duolingo9Bag } from './vocabulary/duolingo/duolingo_9';
import { familyBag } from './vocabulary/family';
import { genki0Bag } from './vocabulary/genki/genki_0';
import { genki1Bag } from './vocabulary/genki/genki_1';
import { genki1MajorsBag } from './vocabulary/genki/genki_1_majors';
import { genki2Bag } from './vocabulary/genki/genki_2';
import { genki3Bag } from './vocabulary/genki/genki_3';
import { genki4Bag } from './vocabulary/genki/genki_4';
import { genki5Bag } from './vocabulary/genki/genki_5';
import { genki5AdjectivesBag } from './vocabulary/genki/genki_5_adjectives';
import { cardinalDirectionsBag } from './vocabulary/geography/cardinalDirections';
import { countriesAsiaBag } from './vocabulary/geography/countriesAsia';
import { countriesEuropeBag } from './vocabulary/geography/countriesEurope';
import { planetsBag } from './vocabulary/geography/planets';
import { numbersBag } from './vocabulary/numbers';
import { sakura1_1Bag } from './vocabulary/sakura/trimester_1/sakura_1';
import { sakura1_10Bag } from './vocabulary/sakura/trimester_1/sakura_10';
import { sakura1_11Bag } from './vocabulary/sakura/trimester_1/sakura_11';
import { sakura1_12Bag } from './vocabulary/sakura/trimester_1/sakura_12';
import { sakura1_2Bag } from './vocabulary/sakura/trimester_1/sakura_2';
import { sakura1_3Bag } from './vocabulary/sakura/trimester_1/sakura_3';
import { sakura1_4Bag } from './vocabulary/sakura/trimester_1/sakura_4';
import { sakura1_5Bag } from './vocabulary/sakura/trimester_1/sakura_5';
import { sakura1_6Bag } from './vocabulary/sakura/trimester_1/sakura_6';
import { sakura1_7Bag } from './vocabulary/sakura/trimester_1/sakura_7';
import { sakura1_8Bag } from './vocabulary/sakura/trimester_1/sakura_8';
import { sakura1_8AnimalsBag } from './vocabulary/sakura/trimester_1/sakura_8_animals';
import { sakura1_8FruitsAndVegetablesBag } from './vocabulary/sakura/trimester_1/sakura_8_fruitsAndVegetables';
import { sakura1_8SportsBag } from './vocabulary/sakura/trimester_1/sakura_8_sports';
import { sakura1_9Bag } from './vocabulary/sakura/trimester_1/sakura_9';
import { sakura2_1Bag } from './vocabulary/sakura/trimester_2/sakura_1';
import { sakura2_10Bag } from './vocabulary/sakura/trimester_2/sakura_10';
import { sakura2_11Bag } from './vocabulary/sakura/trimester_2/sakura_11';
import { sakura2_12Bag } from './vocabulary/sakura/trimester_2/sakura_12';
import { sakura2_2Bag } from './vocabulary/sakura/trimester_2/sakura_2';
import { sakura2_3Bag } from './vocabulary/sakura/trimester_2/sakura_3';
import { sakura2_4Bag } from './vocabulary/sakura/trimester_2/sakura_4';
import { sakura2_5Bag } from './vocabulary/sakura/trimester_2/sakura_5';
import { sakura2_6Bag } from './vocabulary/sakura/trimester_2/sakura_6';
import { sakura2_7Bag } from './vocabulary/sakura/trimester_2/sakura_7';
import { sakura2_8Bag } from './vocabulary/sakura/trimester_2/sakura_8';
import { sakura2_9Bag } from './vocabulary/sakura/trimester_2/sakura_9';
import { sakura3_1Bag } from './vocabulary/sakura/trimester_3/sakura_1';
import { sakura3_2Bag } from './vocabulary/sakura/trimester_3/sakura_2';
import { daysOfMonthBag } from './vocabulary/time/daysOfMonth';
import { hoursBag } from './vocabulary/time/hours';
import { minutesBag } from './vocabulary/time/minutes';
import { monthsBag } from './vocabulary/time/months';
import { weekBag } from './vocabulary/time/week';
import { yearsBag } from './vocabulary/time/years';

export const availableWordBags: WordBag[] = [
    familyBag,
    numbersBag,
    countingThingsBag,
    countingFloorsBag,
    countingSmallAndMediumAnimalsBag,
    countingPeopleBag,
    countingPeoplePoliteBag,
    countingLongCylindricalThingsBag,
    countingThinObjectsBag,
    weekBag,
    hoursBag,
    minutesBag,
    monthsBag,
    daysOfMonthBag,
    yearsBag,
    directionsBag,
    duolingo1Bag,
    duolingo2Bag,
    duolingo3Bag,
    duolingo4Bag,
    duolingo5Bag,
    duolingo6Bag,
    duolingo7Bag,
    duolingo8Bag,
    duolingo9Bag,
    duolingo10Bag,
    duolingo11Bag,
    duolingo12Bag,
    duolingo13Bag,
    countriesEuropeBag,
    countriesAsiaBag,
    planetsBag,
    cardinalDirectionsBag,
    genki0Bag,
    genki1Bag,
    genki1MajorsBag,
    genki2Bag,
    genki3Bag,
    genki4Bag,
    genki5Bag,
    genki5AdjectivesBag,
    sakura1_1Bag,
    sakura1_2Bag,
    sakura1_3Bag,
    sakura1_4Bag,
    sakura1_5Bag,
    sakura1_6Bag,
    sakura1_7Bag,
    sakura1_8Bag,
    sakura1_8SportsBag,
    sakura1_8FruitsAndVegetablesBag,
    sakura1_8AnimalsBag,
    sakura1_9Bag,
    sakura1_10Bag,
    sakura1_11Bag,
    sakura1_12Bag,
    sakura2_1Bag,
    sakura2_2Bag,
    sakura2_3Bag,
    sakura2_4Bag,
    sakura2_5Bag,
    sakura2_6Bag,
    sakura2_7Bag,
    sakura2_8Bag,
    sakura2_9Bag,
    sakura2_10Bag,
    sakura2_11Bag,
    sakura2_12Bag,
    sakura3_1Bag,
    sakura3_2Bag,
];

export const findBagById: (id: string) => WordBag | undefined = (() => {
    const wordBagsById: Map<string, WordBag> = availableWordBags.reduce((acc, bag) => {
        if (acc.has(bag.id)) {
            throw new Error(`Duplicate bag id: ${bag.id}`);
        }
        acc.set(bag.id, bag);
        return acc;
    }, new Map<string, WordBag>());
    return (id: string): WordBag | undefined => wordBagsById.get(id);
})();

export const textMatchesQuery = (
    text: TranslatedJapaneseText,
    query: string,
    selectedLanguage: TranslationLanguage,
): boolean => {
    if (query === '') return true;
    const wordRomaji = toRomaji(text.jp.pronunciation || text.jp.text);
    if (wordRomaji.includes(query)) return true;
    if (text[selectedLanguage].toLocaleLowerCase().includes(query)) return true;
    return false;
};
