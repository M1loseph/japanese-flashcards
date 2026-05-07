import { createContext, useContext } from 'react';

interface DrawerContextType {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}

export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerProvider');
    }
    return context;
};

export const DrawerContext = createContext<DrawerContextType | undefined>(undefined);
