import type { WordLearningProgress } from '../../types/SpacedRepetitionSystem';

const roundToNearestLocalHour = (date: Date) => {
    const roundedDate = new Date(date);
    const minutes = roundedDate.getMinutes();
    roundedDate.setMinutes(0, 0, 0);
    if (minutes >= 30) {
        roundedDate.setHours(roundedDate.getHours() + 1);
    }
    return roundedDate;
};

export class SRSReviewReadModel {
    readonly wordId: string;
    readonly level: number;
    readonly #lastReviewedTimestampUtc: number | undefined;
    readonly #nextReviewTimestampUtc: number;

    constructor(entity: WordLearningProgress) {
        this.wordId = entity.wordId;
        this.level = entity.level;
        this.#lastReviewedTimestampUtc = entity.lastReviewed?.getTime();
        this.#nextReviewTimestampUtc = entity.nextReview.getTime();
    }

    get lastReviewed(): Date | undefined {
        return this.#lastReviewedTimestampUtc === undefined ? undefined : new Date(this.#lastReviewedTimestampUtc);
    }

    get reviewAt(): Date {
        return roundToNearestLocalHour(new Date(this.#nextReviewTimestampUtc));
    }

    toEntity(): WordLearningProgress {
        return {
            wordId: this.wordId,
            lastReviewed: this.lastReviewed,
            nextReview: new Date(this.#nextReviewTimestampUtc),
            level: this.level,
        };
    }
}
