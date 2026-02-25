import type { FC, ReactNode } from 'react';
import { Header } from '../../components/Header';

interface FixedSizePageProps {
    children: ReactNode;
    preHomeNavigationHook?: () => void;
}

export const FixedSizePage: FC<FixedSizePageProps> = ({ children, preHomeNavigationHook }) => {
    return (
        <div className="h-svh flex flex-col items-center font-sans">
            <Header preHomeNavigationHook={preHomeNavigationHook} />
            <div className="container flex-1 mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">{children}</div>
        </div>
    );
};
