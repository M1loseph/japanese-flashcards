import { ExportedDataSchema } from '../../types/ExportedData';
import { ExportedSRSWordModel } from './ExportedSRSWordModel';
import { SRSReviewReadModel } from './SRSReviewReadModel';

describe('ExportedSRSWordModel', () => {
    it('converts validated file data through the SRS read model', () => {
        const lastReviewed = new Date('2026-01-01T01:02:03.004Z');
        const nextReview = new Date('2026-01-02T10:31:45.678Z');
        const importedData = ExportedDataSchema.parse({
            version: 1,
            srsWords: [
                {
                    wordId: 'word-id',
                    lastReviewed: lastReviewed.toISOString(),
                    nextReview: nextReview.toISOString(),
                    level: 3,
                },
            ],
            hardText: [],
        });

        const wordModel = new ExportedSRSWordModel(importedData.srsWords[0]);
        const databaseModel = wordModel.toSRSReviewReadModel();

        expect(databaseModel).toBeInstanceOf(SRSReviewReadModel);
        expect(databaseModel.toEntity()).toEqual({
            wordId: 'word-id',
            lastReviewed,
            nextReview,
            level: 3,
        });
    });

    it('supports words that have not been reviewed yet', () => {
        const nextReview = new Date('2026-01-02T10:31:45.678Z');
        const importedData = ExportedDataSchema.parse({
            version: 1,
            srsWords: [{ wordId: 'word-id', nextReview: nextReview.toISOString(), level: 0 }],
            hardText: [],
        });

        const wordModel = new ExportedSRSWordModel(importedData.srsWords[0]);

        expect(JSON.parse(JSON.stringify(wordModel))).toEqual({
            wordId: 'word-id',
            nextReview: nextReview.toISOString(),
            level: 0,
        });
        expect(wordModel.toSRSReviewReadModel().toEntity()).toEqual({
            wordId: 'word-id',
            lastReviewed: undefined,
            nextReview,
            level: 0,
        });
    });

    it('exports the same fields and exact review times from the SRS read model', () => {
        const lastReviewed = new Date('2026-01-01T01:02:03.004Z');
        const nextReview = new Date('2026-01-02T10:31:45.678Z');
        const sourceModel = new SRSReviewReadModel({
            wordId: 'word-id',
            lastReviewed,
            nextReview,
            level: 3,
        });

        const exportedWord = new ExportedSRSWordModel(sourceModel);

        expect(JSON.parse(JSON.stringify(exportedWord))).toEqual({
            wordId: 'word-id',
            lastReviewed: lastReviewed.toISOString(),
            nextReview: nextReview.toISOString(),
            level: 3,
        });
    });
});