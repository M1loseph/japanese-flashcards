import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { useDrawer } from '../../context/DrawerContext';

export const DrawerLayout: FC = () => {
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
