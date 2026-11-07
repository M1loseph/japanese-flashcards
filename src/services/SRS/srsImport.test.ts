import { describe, expect, it } from 'vitest';
import { planSRSImportMerge } from './srsImport';

describe('planSRSImportMerge', () => {
    it('classifies unchanged, upgraded, and new SRS entries', () => {
        const currentWords = [
            { wordId: 'not-in-backup', level: 1 },
            { wordId: 'same-level', level: 2 },
            { wordId: 'higher-current-level', level: 3 },
            { wordId: 'upgraded', level: 1 },
        ];
        const importedWords = [
            { wordId: 'same-level', level: 2 },
            { wordId: 'higher-current-level', level: 2 },
            { wordId: 'upgraded', level: 4 },
            { wordId: 'new', level: 0 },
        ];

        const mergePlan = planSRSImportMerge(currentWords, importedWords);

        expect(mergePlan.unchangedCount).toBe(3);
        expect(mergePlan.mergedWords).toEqual([{ wordId: 'upgraded', level: 4 }]);
        expect(mergePlan.addedWords).toEqual([{ wordId: 'new', level: 0 }]);
    });
});
