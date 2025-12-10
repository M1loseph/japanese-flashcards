import React from 'react';
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

export const CategorySection: React.FC<CategorySectionProps> = ({
    title,
    bags,
    selectedBagIds,
    onToggleBag,
    onSelectAll,
    onDeselectAll,
}) => {
    if (bags.length === 0) return null;

    const allSelected = bags.every((bag) => selectedBagIds.has(bag.id));

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-1 h-6 bg-secondary rounded-full"></span>
                    {title}
                </h2>
                <div className="flex gap-2 text-sm">
                    <button
                        onClick={allSelected ? onDeselectAll : onSelectAll}
                        className="text-primary hover:text-primary/80 font-medium px-2 py-1 rounded hover:bg-primary/5 transition-colors"
                    >
                        {allSelected ? 'Deselect All' : 'Select All'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    );
};
