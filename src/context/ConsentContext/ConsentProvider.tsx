import { useEffect, useState, type FC, type ReactNode } from 'react';
import { ConsentContext } from './ConsentContext';
import { AnalyticsConsentSchema, AnalyticsConsentValues, type AnalyticsConsent } from '../../types/AnalyticsConsent';
import ReactGA from 'react-ga4';
import { AppModes } from '../../types/AppMode';

const ANALYTICS_CONSENT_KEY = 'analyticsConsent';

const getStoredConsent = (): AnalyticsConsent | undefined => {
    const stored = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    const parsed = AnalyticsConsentSchema.safeParse(stored);
    if (!parsed.success) {
        return undefined;
    }
    return parsed.data;
};

const initializeGA = (consent?: AnalyticsConsent) => {
    const TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;

    if (import.meta.env.MODE === AppModes.DEVELOPMENT) {
        ReactGA.initialize("test", {
            testMode: true,
        });
        return;
    }

    if (consent === AnalyticsConsentValues.ACCEPTED) {
        ReactGA.initialize(TRACKING_ID);
        return;
    }

    ReactGA.initialize(TRACKING_ID, {
        gaOptions: {
            storage: 'none',
            storeGac: false,
        },
        gtagOptions: {
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
        },
    });
};

export const ConsentProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [consent, setConsentState] = useState<AnalyticsConsent | undefined>(getStoredConsent);

    const setConsent = (value: AnalyticsConsent) => {
        localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
        setConsentState(value);
    };

    useEffect(() => {
        initializeGA(consent);
    }, [consent]);

    return <ConsentContext.Provider value={{ consent, setConsent }}>{children}</ConsentContext.Provider>;
};
