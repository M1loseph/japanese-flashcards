import { useEffect, type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { AppModes } from '../types/AppMode';

export const PageViewTracker: FC = () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: location.pathname + location.search,
        });
    }, [location]);

    useEffect(() => {
        const TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;

        if (import.meta.env.MODE === AppModes.PRODUCTION && TRACKING_ID) {
            ReactGA.initialize(TRACKING_ID);
        }
    }, []);

    return <Outlet />;
};
