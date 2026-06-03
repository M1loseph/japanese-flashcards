import type { FC } from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`card bg-base-200 border border-base-300 rounded-lg shadow-lg p-4 ${className}`}>
            {children}
        </div>
    );
};
