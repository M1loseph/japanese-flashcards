import { type FC } from 'react';
import { type WordBag } from '../japanese/types';
import { IconZoom } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

interface WordBagCardProps {
    bag: WordBag;
    isSelected: boolean;
    onToggle: (id: string) => void;
}

export const WordBagCard: FC<WordBagCardProps> = ({ bag, isSelected, onToggle }) => {
    const navigate = useNavigate();

    const navigateToBag = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigate(`/bags/${bag.id}`);
    };

    return (
        <div
            onClick={() => onToggle(bag.id)}
            className={`
        cursor-pointer relative p-4 rounded-lg border transition-all duration-200 hover:shadow-md
        ${isSelected ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-slate-200 hover:border-primary/30'}
      `}
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onToggle(bag.id);
                }
            }}
        >
            <div className="flex justify-between items-center mb-2">
                <h3
                    className={`font-semibold text-sm sm:text-base line-clamp-2 ${isSelected ? 'text-primary' : 'text-slate-800'}`}
                >
                    {bag.name}
                </h3>
                <IconZoom size={14} role="button" className="cursor-pointer" onClick={navigateToBag} />
            </div>
            <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                    {bag.words.length} words
                </span>
            </div>
        </div>
    );
};
