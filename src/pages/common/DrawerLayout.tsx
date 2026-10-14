import { useEffect, type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { useDrawer } from '../../services/DrawerContext';

declare global {
    interface Window {
        _mtm: any[];
    }
}

export const DrawerLayout: FC = () => {
    useEffect(() => {
        const _mtm = (window._mtm = window._mtm || []);
        _mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' });
        const d = document;
        const g = d.createElement('script');
        const s = d.getElementsByTagName('script')[0];
        g.async = true;
        g.src = 'http://localhost:8080/js/container_F4R1h1LD.js';
        s?.parentNode?.insertBefore(g, s);
    }, []);
    const { isDrawerOpen } = useDrawer();
    return (
        <div className="drawer">
            <input aria-hidden="true" readOnly checked={isDrawerOpen} type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
            </div>
            <Sidebar />
        </div>
    );
};
