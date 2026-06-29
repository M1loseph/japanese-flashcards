import { z } from 'zod';
import { WordLearningProgressSchema } from './SpacedRepetitionSystem';

export const ExportedDataSchema = z.object({
    version: z.literal(1),
    srsWords: z.array(WordLearningProgressSchema),
    hardText: z.array(z.string()),
});

export type ExportedData = z.infer<typeof ExportedDataSchema>;
