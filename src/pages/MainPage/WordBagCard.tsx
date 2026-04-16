import { IconZoom } from '@tabler/icons-react';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { type WordBag } from '../../japanese/types';

interface WordBagCardProps {
    bag: WordBag;
    isSelected: boolean;
    onToggle: (id: string) => void;
}

export const WordBagCard: FC<WordBagCardProps> = ({ bag, isSelected, onToggle }) => {
    const navigate = useNavigate();

    const navigateToBag = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigate(`/bags/${bag.id}/words`);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle(bag.id);
        }
    };

    return (
        <div
            onClick={() => onToggle(bag.id)}
            className={`
        cursor-pointer relative p-2 md:p-4 rounded-lg border transition-all duration-200 hover:shadow-md
        ${isSelected ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-slate-200 hover:border-primary/30'}
      `}
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <div className="flex justify-between items-center mb-2">
                <h3 className={`font-semibold text-sm sm:text-base ${isSelected ? 'text-primary' : 'text-slate-800'}`}>
                    {bag.name}
                </h3>
                <button onClick={navigateToBag}>
                    <IconZoom size={14} className="cursor-pointer shrink-0 ml-1" />
                </button>
            </div>
            <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                    {bag.words.length} words
                </span>
            </div>
        </div>
    );
};
