import { numbers } from "./vocabulary/numbers.ts";
import { type WordBag } from "./types.ts";
import { colors } from "./vocabulary/colors.ts"
import { family } from "./vocabulary/family.ts";
import { duolingo_1 } from "./vocabulary/duolingo_1.ts";
import { countriesEurope } from "./vocabulary/countries/countriesEurope.ts";
import { genki_0 } from "./vocabulary/genki_0.ts";

export type { JapaneseWord, WordBag } from "./types.ts";

export const availableWordBags: WordBag[] = [
    {
        "id": "1",
        "name": "Family",
        "words": family,
    },
    {
        "id": "2",
        "name": "Numbers",
        "words": numbers,
    },
    {
        "id": "3",
        "name": "Colors",
        "words": colors,
    },
    {
        "id": "4",
        "name": "Duolingo #1",
        "words": duolingo_1,
    },
    {
        "id": "5",
        "name": "Countries EU",
        "words": countriesEurope,
    },
    {
        "id": "6",
        "name": "Genki #0",
        "words": genki_0,
    }
]
