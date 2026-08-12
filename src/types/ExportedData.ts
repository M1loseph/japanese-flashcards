import { z } from 'zod';
import { WordLearningProgressSchema } from './SpacedRepetitionSystem';

export const ExportedDataSchema = z
    .object({
        version: z.literal(1),
        srsWords: z.array(WordLearningProgressSchema).readonly(),
        hardText: z.array(z.string()).readonly(),
    })
    .readonly();

export type ExportedData = z.infer<typeof ExportedDataSchema>;
