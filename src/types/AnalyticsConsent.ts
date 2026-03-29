import z from 'zod';

export const AnalyticsConsentValues = {
    ACCEPTED: 'accepted',
    DECLINED: 'declined',
} as const;

export const AnalyticsConsentSchema = z.enum([AnalyticsConsentValues.ACCEPTED, AnalyticsConsentValues.DECLINED]);

export type AnalyticsConsent = (typeof AnalyticsConsentValues)[keyof typeof AnalyticsConsentValues];
