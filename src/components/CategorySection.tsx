import { type FC, useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { type WordBag } from '../japanese/types';
import { WordBagCard } from './WordBagCard';

interface CategorySectionProps {
    title: string;
    bags: WordBag[];
    selectedBagIds: Set<string>;
    onToggleBag: (id: string) => void;
    onSelectAll: () => void;
    onDeselectAll: () => void;
}

export const CategorySection: FC<CategorySectionProps> = ({
    title,
    bags,
    selectedBagIds,
    onToggleBag,
    onSelectAll,
    onDeselectAll,
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const allSelected = bags.every((bag) => selectedBagIds.has(bag.id));
    const selectedCount = bags.filter((bag) => selectedBagIds.has(bag.id)).length;

    const handleToggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggleOpen();
        }
    };

    const handleToggleSelectAll = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (allSelected) {
            onDeselectAll();
        } else {
            onSelectAll();
        }
    };

    return (
        <div className="mb-2 border border-base-300 rounded-xl">
            <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-label={`Toggle ${title} section`}
                onClick={handleToggleOpen}
                onKeyDown={handleKeyDown}
                className="flex items-center justify-between px-4 py-3 cursor-pointer select-none hover:bg-base-200 transition-colors"
            >
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-1 h-6 bg-secondary rounded-full"></span>
                    {title}
                    {selectedCount > 0 && (
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {selectedCount}/{bags.length}
                        </span>
                    )}
                </h2>
                <div className="flex items-center gap-2">
                    {isOpen && (
                        <button
                            onClick={handleToggleSelectAll}
                            aria-label={allSelected ? `Deselect all in ${title}` : `Select all in ${title}`}
                            className="text-sm text-primary hover:text-primary/80 font-medium px-2 py-1 rounded hover:bg-primary/5 transition-colors"
                        >
                            {allSelected ? 'Deselect All' : 'Select All'}
                        </button>
                    )}
                    <IconChevronDown
                        size={20}
                        className={`text-slate-500 transition-transform duration-300 ${isOpen && 'rotate-180'}`}
                    />
                </div>
            </div>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {bags.map((bag) => (
                            <WordBagCard
                                key={bag.id}
                                bag={bag}
                                isSelected={selectedBagIds.has(bag.id)}
                                onToggle={onToggleBag}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
