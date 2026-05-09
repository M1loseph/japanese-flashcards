import { type FC, type ReactNode, useState } from 'react';
import { DrawerContext } from './DrawerContext';

interface DrawerProviderProps {
    children: ReactNode;
}

export const DrawerProvider: FC<DrawerProviderProps> = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <DrawerContext.Provider value={{ toggleDrawer, isDrawerOpen: drawerOpen }}>{children}</DrawerContext.Provider>
    );
};
