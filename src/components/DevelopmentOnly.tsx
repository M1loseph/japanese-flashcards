import { type FC } from 'react';
import { AppModes } from '../types/AppMode';

interface DevelopmentOnlyProps {
    children: React.ReactNode;
}

export const DevelopmentOnly: FC<DevelopmentOnlyProps> = ({ children }) => {
    if (import.meta.env.MODE !== AppModes.DEVELOPMENT) {
        return null;
    }
    return <>{children}</>;
};
