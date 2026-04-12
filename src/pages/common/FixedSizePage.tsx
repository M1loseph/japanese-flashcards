import type { FC, ReactNode } from 'react';
import { Header } from '../../components/Header';

interface FixedSizePageProps {
    children: ReactNode;
    preHomeNavigationHook?: () => void;
    additionalHeaderComponents?: React.ReactNode;
}

export const FixedSizePage: FC<FixedSizePageProps> = ({
    children,
    preHomeNavigationHook,
    additionalHeaderComponents,
}) => {
    return (
        <div className="h-svh flex flex-col items-center font-sans">
            <Header preHomeNavigationHook={preHomeNavigationHook} additionalComponents={additionalHeaderComponents} />
            <div className="container flex-1 min-h-0 overflow-hidden mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
                {children}
            </div>
        </div>
    );
};
