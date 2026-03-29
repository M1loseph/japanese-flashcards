import { createContext, useContext } from 'react';
import type { AnalyticsConsent } from '../../types/AnalyticsConsent';

export interface ConsentContextType {
    consent: AnalyticsConsent | undefined;
    setConsent: (value: AnalyticsConsent) => void;
}

export const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const useConsent = () => {
    const context = useContext(ConsentContext);
    if (!context) {
        throw new Error('useConsent must be used within a ConsentProvider');
    }
    return context;
};
