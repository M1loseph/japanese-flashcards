import type { FC } from 'react';
import { Header } from '../../components/Header';

interface ScrollablePageProps {
    children: React.ReactNode;
}

export const ScrollablePage: FC<ScrollablePageProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center font-sans">
            <Header />
            <div className="container grow flex flex-col px-4 sm:px-6 lg:px-8 py-8 space-y-12">{children}</div>
        </div>
    );
};
