import type { ExportedData, ExportedSRSWord } from '../../types/ExportedData';
import { SRSReviewReadModel } from './SRSReviewReadModel';

export class ExportedSRSWordModel implements ExportedSRSWord {
    readonly wordId: string;
    readonly lastReviewed?: Date;
    readonly nextReview: Date;
    readonly level: number;

    constructor(source: ExportedSRSWord | SRSReviewReadModel) {
        const word = source instanceof SRSReviewReadModel ? source.toEntity() : source;
        this.wordId = word.wordId;
        if (word.lastReviewed !== undefined) {
            this.lastReviewed = new Date(word.lastReviewed);
        }
        this.nextReview = new Date(word.nextReview);
        this.level = word.level;
    }

    toSRSReviewReadModel(): SRSReviewReadModel {
        return new SRSReviewReadModel({
            wordId: this.wordId,
            ...(this.lastReviewed === undefined ? {} : { lastReviewed: this.lastReviewed }),
            nextReview: this.nextReview,
            level: this.level,
        });
    }
}

export type ImportedExportedData = Omit<ExportedData, 'srsWords'> & {
    srsWords: readonly ExportedSRSWordModel[];
};