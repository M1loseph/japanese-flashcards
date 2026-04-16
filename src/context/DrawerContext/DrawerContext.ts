import { createContext } from 'react';

interface DrawerContextType {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}

export const DrawerContext = createContext<DrawerContextType>({
    isDrawerOpen: false,
    toggleDrawer: () => {},
});
