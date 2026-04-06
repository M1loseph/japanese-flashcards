import type { FC } from 'react';

interface DescriptionElementProps {
    mainText: string;
    secondaryText?: string;
    label: string;
}

export const DescriptionElement: FC<DescriptionElementProps> = ({ mainText, secondaryText, label }) => (
    <div className="p-2 mt-1 bg-base-300/50 rounded-lg flex justify-between items-center w-full md:w-2xl">
        <div className="flex flex-col flex-1">
            <span>{mainText}</span>
            {secondaryText && <span className="text-base-content/60">{secondaryText}</span>}
        </div>
        <div className="divider divider-horizontal" />
        <span className="w-16 text-xs text-base-content/60">{label}</span>
    </div>
);
