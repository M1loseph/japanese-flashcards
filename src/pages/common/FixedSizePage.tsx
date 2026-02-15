import type { FC, ReactNode } from 'react';

interface FixedSizePageProps {
    children: ReactNode;
}

export const FixedSizePage: FC<FixedSizePageProps> = ({ children }) => {
    return (
        <div className="container grow flex flex-col px-4 sm:px-6 lg:px-8 py-8 space-y-12 overflow-hidden">
            {children}
        </div>
    );
};
