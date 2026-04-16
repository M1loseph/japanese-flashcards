import { createContext, useContext } from 'react';

interface DrawerContextType {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}

export const useDrawer = () => useContext(DrawerContext);

export const DrawerContext = createContext<DrawerContextType>({
    isDrawerOpen: false,
    toggleDrawer: () => {},
});
