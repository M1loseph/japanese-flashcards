import type { Icon } from '@tabler/icons-react';
import type { Duration } from 'dayjs/plugin/duration';
import { z } from 'zod';

const stringToDateCodec = z.codec(z.iso.datetime(), z.date(), {
    decode: (isoString) => new Date(isoString),
    encode: (date) => date.toISOString(),
});

export const WordLearningProgressSchema = z.object({
    wordId: z.string(),
    lastReviewed: stringToDateCodec.optional(),
    nextReview: stringToDateCodec,
    level: z.number(),
});

export type WordLearningProgress = z.infer<typeof WordLearningProgressSchema>;

export interface SRSStage {
    label: string;
    waitDuration: Duration;
    icon: Icon;
}
