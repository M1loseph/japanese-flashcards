import React from 'react';
import { type WordBag } from '../japanese/types';

interface WordBagCardProps {
    bag: WordBag;
    isSelected: boolean;
    onToggle: (id: string) => void;
}

export const WordBagCard: React.FC<WordBagCardProps> = ({ bag, isSelected, onToggle }) => {
    return (
        <div
            onClick={() => onToggle(bag.id)}
            className={`
        cursor-pointer relative p-4 rounded-lg border transition-all duration-200 hover:shadow-md
        ${
            isSelected
                ? 'border-primary bg-primary/5 ring-1 ring-primary'
                : 'border-slate-200 bg-white hover:border-primary/30'
        }
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
            <div className="flex justify-between items-start mb-2">
                <h3
                    className={`font-semibold text-sm sm:text-base line-clamp-2 ${isSelected ? 'text-primary' : 'text-slate-800'}`}
                >
                    {bag.name}
                </h3>
            </div>
            <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                    {bag.words.length} words
                </span>
            </div>
        </div>
    );
};
