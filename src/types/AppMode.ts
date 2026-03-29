export const AppModes = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
} as const;

export type AppMode = (typeof AppModes)[keyof typeof AppModes];
