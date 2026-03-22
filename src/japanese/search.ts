import type { WordBag } from './types';
import { familyBag } from './vocabulary/family.ts';
import { numbersBag } from './vocabulary/numbers.ts';
import { countingThingsBag } from './vocabulary/counting/countingThings.ts';
import { countingThinObjectsBag } from './vocabulary/counting/countingThinObjects.ts';
import { countingLongCylindricalThingsBag } from './vocabulary/counting/countingLongCylindricalThings.ts';
import { countingFloorsBag } from './vocabulary/counting/countingFloors.ts';
import { weekBag } from './vocabulary/time/week.ts';
import { hoursBag } from './vocabulary/time/hours.ts';
import { minutesBag } from './vocabulary/time/minutes.ts';
import { monthsBag } from './vocabulary/time/months.ts';
import { daysOfMonthBag } from './vocabulary/time/daysOfMonth.ts';
import { yearsBag } from './vocabulary/time/years.ts';
import { directionsBag } from './vocabulary/directions.ts';
import { countriesEuropeBag } from './vocabulary/geography/countriesEurope.ts';
import { countriesAsiaBag } from './vocabulary/geography/countriesAsia.ts';
import { duolingo1Bag } from './vocabulary/duolingo/duolingo_1.ts';
import { duolingo2Bag } from './vocabulary/duolingo/duolingo_2.ts';
import { duolingo3Bag } from './vocabulary/duolingo/duolingo_3.ts';
import { duolingo4Bag } from './vocabulary/duolingo/duolingo_4.ts';
import { duolingo5Bag } from './vocabulary/duolingo/duolingo_5.ts';
import { duolingo6Bag } from './vocabulary/duolingo/duolingo_6.ts';
import { duolingo7Bag } from './vocabulary/duolingo/duolingo_7.ts';
import { duolingo8Bag } from './vocabulary/duolingo/duolingo_8.ts';
import { duolingo9Bag } from './vocabulary/duolingo/duolingo_9.ts';
import { duolingo10Bag } from './vocabulary/duolingo/duolingo_10.ts';
import { duolingo11Bag } from './vocabulary/duolingo/duolingo_11.ts';
import { duolingo12Bag } from './vocabulary/duolingo/duolingo_12.ts';
import { genki0Bag } from './vocabulary/genki/genki_0.ts';
import { genki1Bag } from './vocabulary/genki/genki_1.ts';
import { genki1MajorsBag } from './vocabulary/genki/genki_1_majors.ts';
import { genki2Bag } from './vocabulary/genki/genki_2.ts';
import { genki3Bag } from './vocabulary/genki/genki_3.ts';
import { genki4Bag } from './vocabulary/genki/genki_4.ts';
import { genki5Bag } from './vocabulary/genki/genki_5.ts';
import { sakura1_1Bag } from './vocabulary/sakura/trimester_1/sakura_1.ts';
import { sakura1_2Bag } from './vocabulary/sakura/trimester_1/sakura_2.ts';
import { sakura1_3Bag } from './vocabulary/sakura/trimester_1/sakura_3.ts';
import { sakura1_4Bag } from './vocabulary/sakura/trimester_1/sakura_4.ts';
import { sakura1_5Bag } from './vocabulary/sakura/trimester_1/sakura_5.ts';
import { sakura1_6Bag } from './vocabulary/sakura/trimester_1/sakura_6.ts';
import { sakura1_7Bag } from './vocabulary/sakura/trimester_1/sakura_7.ts';
import { sakura1_8Bag } from './vocabulary/sakura/trimester_1/sakura_8.ts';
import { sakura1_8SportsBag } from './vocabulary/sakura/trimester_1/sakura_8_sports.ts';
import { sakura1_8FruitsAndVegetablesBag } from './vocabulary/sakura/trimester_1/sakura_8_fruitsAndVegetables.ts';
import { sakura1_8AnimalsBag } from './vocabulary/sakura/trimester_1/sakura_8_animals.ts';
import { sakura1_9Bag } from './vocabulary/sakura/trimester_1/sakura_9.ts';
import { sakura1_10Bag } from './vocabulary/sakura/trimester_1/sakura_10.ts';
import { sakura1_11Bag } from './vocabulary/sakura/trimester_1/sakura_11.ts';
import { sakura1_12Bag } from './vocabulary/sakura/trimester_1/sakura_12.ts';
import { sakura2_1Bag } from './vocabulary/sakura/trimester_2/sakura_1.ts';
import { sakura2_2Bag } from './vocabulary/sakura/trimester_2/sakura_2.ts';
import { sakura2_3Bag } from './vocabulary/sakura/trimester_2/sakura_3.ts';
import { sakura2_4Bag } from './vocabulary/sakura/trimester_2/sakura_4.ts';
import { sakura2_5Bag } from './vocabulary/sakura/trimester_2/sakura_5.ts';
import { sakura2_6Bag } from './vocabulary/sakura/trimester_2/sakura_6.ts';
import { sakura2_7Bag } from './vocabulary/sakura/trimester_2/sakura_7.ts';
import { sakura2_8Bag } from './vocabulary/sakura/trimester_2/sakura_8.ts';
import { planetsBag } from './vocabulary/geography/planets.ts';
import { countingSmallAndMediumAnimalsBag } from './vocabulary/counting/countingSmallAndMediumAnimals.ts';
import { countingPeopleBag } from './vocabulary/counting/countingPeople.ts';
import { genki5AdjectivesBag } from './vocabulary/genki/genki_5_adjectives.ts';
import { sakura2_9Bag } from './vocabulary/sakura/trimester_2/sakura_9.ts';
import { duolingo13Bag } from './vocabulary/duolingo/duolingo_13.ts';

const availableWordBags: WordBag[] = [
    familyBag,
    numbersBag,
    countingThingsBag,
    countingFloorsBag,
    countingSmallAndMediumAnimalsBag,
    countingPeopleBag,
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
