import type { FC, ReactNode } from 'react';
import { Header } from '../../components/Header';

interface FixedSizePageProps {
    children: ReactNode;
}

export const FixedSizePage: FC<FixedSizePageProps> = ({ children }) => {
    return (
        <div className="h-dvh flex flex-col items-center font-sans">
            <Header />
            <div className="container flex-1 mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">{children}</div>
        </div>
    );
};
