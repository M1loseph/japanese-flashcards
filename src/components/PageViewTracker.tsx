import { useEffect, type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { useConsent } from '../context/ConsentContext';
import { AnalyticsConsentModal } from './AnalyticsConsentModal';
import { AnalyticsConsentValues } from '../types/AnalyticsConsent';

export const PageViewTracker: FC = () => {
    const location = useLocation();
    const { consent, setConsent } = useConsent();

    useEffect(() => {
        if (consent !== AnalyticsConsentValues.ACCEPTED) {
            return;
        }

        ReactGA.send({
            hitType: 'page_view',
            page: location.pathname + location.search,
        });
    }, [location, consent]);

    return (
        <>
            {consent === undefined && <AnalyticsConsentModal onConsent={setConsent} />}
            <Outlet />
        </>
    );
};
