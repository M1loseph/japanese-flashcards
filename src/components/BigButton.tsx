import type { FC } from 'react';

type IconDirection = 'row' | 'col';

interface BigButtonProps {
    onClick: () => void;
    icon: string;
    active: boolean;
    text: string;
    description?: string;
    iconDirection?: IconDirection;
}

export const BigButton: FC<BigButtonProps> = ({ onClick, icon, active, text, description, iconDirection = 'col' }) => {
    const iconDirectionClass = iconDirection === 'row' ? 'flex-row' : 'flex-col';
    const activeClasses = active
        ? 'border-primary bg-primary/5 shadow-md'
        : 'border-slate-200 hover:border-primary/50 hover:shadow-sm';

    return (
        <button
            onClick={onClick}
            className={`p-5 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 group ${activeClasses}`}
        >
            <div className={`flex ${iconDirectionClass} items-center gap-2`}>
                <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{icon}</span>
                <span className={`text-lg font-medium ${active ? 'text-primary' : 'text-slate-600'}`}>{text}</span>
            </div>
            {description && <span className="text-xs text-slate-400 text-center">{description}</span>}
        </button>
    );
};
