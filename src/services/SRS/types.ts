import type { Icon } from '@tabler/icons-react';
import type { Duration } from 'dayjs/plugin/duration';
import { z } from 'zod';
import type { ExportedSRSWord } from '../../types/ExportedData';

const stringToDateCodec = z.codec(z.iso.datetime(), z.date(), {
    decode: (isoString) => new Date(isoString),
    encode: (date) => date.toISOString(),
});

export const WordLearningProgressEntitySchema = z
    .object({
        wordId: z.string(),
        lastReviewed: stringToDateCodec.optional(),
        nextReview: stringToDateCodec,
        level: z.number(),
    })
    .readonly();

export type WordLearningProgressEntity = z.infer<typeof WordLearningProgressEntitySchema>;

export interface SRSStage {
    label: string;
    waitDuration: () => Duration;
    icon: Icon;
}

const cloneDate = (date: Date | undefined): Date | undefined => {
    if (date === undefined) {
        return undefined;
    }
    return new Date(date.getTime());
};

const roundToNearestLocalHour = (date: Date) => {
    const roundedDate = new Date(date);
    const minutes = roundedDate.getMinutes();
    roundedDate.setMinutes(0, 0, 0);
    if (minutes >= 30) {
        roundedDate.setHours(roundedDate.getHours() + 1);
    }
    return roundedDate;
};

export class WordLearningProgress {
    readonly wordId: string;
    readonly level: number;
    readonly #lastReviewed: Date | undefined;
    readonly #nextReview: Date;

    constructor(entity: WordLearningProgressEntity | ExportedSRSWord) {
        this.wordId = entity.wordId;
        this.level = entity.level;
        this.#lastReviewed = cloneDate(entity.lastReviewed);
        this.#nextReview = new Date(entity.nextReview.getTime());
    }

    get lastReviewed(): Date | undefined {
        return cloneDate(this.#lastReviewed);
    }

    get reviewAt(): Date {
        return roundToNearestLocalHour(this.#nextReview);
    }

    toEntity(): WordLearningProgressEntity {
        return {
            wordId: this.wordId,
            lastReviewed: cloneDate(this.#lastReviewed),
            nextReview: new Date(this.#nextReview.getTime()),
            level: this.level,
        };
    }

    toExportedSRSWordModel(): ExportedSRSWord {
        const lastReviewed = cloneDate(this.#lastReviewed);
        return {
            wordId: this.wordId,
            ...(lastReviewed === undefined ? {} : { lastReviewed }),
            nextReview: new Date(this.#nextReview.getTime()),
            level: this.level,
        };
    }
}
