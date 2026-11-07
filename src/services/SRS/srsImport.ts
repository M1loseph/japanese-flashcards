interface SRSWordLevel {
    wordId: string;
    level: number;
}

export interface SRSImportMergePlan<TWord extends SRSWordLevel> {
    unchangedCount: number;
    mergedWords: readonly TWord[];
    addedWords: readonly TWord[];
}

export const planSRSImportMerge = <TWord extends SRSWordLevel>(
    currentWords: readonly SRSWordLevel[],
    importedWords: readonly TWord[],
): SRSImportMergePlan<TWord> => {
    const currentWordsById = new Map(currentWords.map((word) => [word.wordId, word]));
    const mergedWords: TWord[] = [];
    const addedWords: TWord[] = [];

    for (const importedWord of importedWords) {
        const currentWord = currentWordsById.get(importedWord.wordId);
        if (currentWord === undefined) {
            addedWords.push(importedWord);
            continue;
        }

        if (importedWord.level > currentWord.level) {
            mergedWords.push(importedWord);
        }
    }

    return {
        unchangedCount: currentWords.length - mergedWords.length,
        mergedWords,
        addedWords,
    };
};
