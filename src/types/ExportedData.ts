import { z } from 'zod';

const stringToDateCodec = z.codec(z.iso.datetime(), z.date(), {
    decode: (isoString) => new Date(isoString),
    encode: (date) => date.toISOString(),
});

export const ExportedSRSWordSchema = z
    .object({
        wordId: z.string(),
        lastReviewed: stringToDateCodec.optional(),
        nextReview: stringToDateCodec,
        level: z.number(),
    })
    .readonly();

export type ExportedSRSWord = z.infer<typeof ExportedSRSWordSchema>;

export const ExportedDataSchema = z
    .object({
        version: z.literal(1),
        srsWords: z.array(ExportedSRSWordSchema).readonly(),
        hardText: z.array(z.string()).readonly(),
    })
    .readonly();

export type ExportedData = z.infer<typeof ExportedDataSchema>;
