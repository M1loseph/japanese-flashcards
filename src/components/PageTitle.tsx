import type { FC } from 'react';

interface PageTitleProps {
    title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
    return <h1 className="text-3xl font-bold mb-4">{title}</h1>;
};
