import type { Pronunciation } from './japanese/types';

export const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = tmp;
    }
    return newArray;
};

export const mapPronunciation = (
    pronunciation: Pronunciation | undefined,
    mapFunction: (p: string) => string,
): Pronunciation => {
    if (pronunciation === undefined) {
        return undefined;
    }
    if (typeof pronunciation === 'string') {
        return mapFunction(pronunciation);
    }
    return pronunciation.map(mapFunction);
};
