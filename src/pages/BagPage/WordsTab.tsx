import { IconZoom } from '@tabler/icons-react';
import { useState, type FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import { toRomaji } from 'wanakana';
import { useGameSettingsContext } from '../../context/GameStateContext';
import type { WordBag } from '../../japanese/types';
import { Word } from './Word';

export const WordsTab: FC = () => {
    const bag = useOutletContext<WordBag>();
    const { selectedLanguage } = useGameSettingsContext();
    const [searchText, setSearchText] = useState<string>('');

    const words = bag.words.filter((word) => {
        if (!searchText) return true;
        const wordRomaji = toRomaji(word.jp.pronunciation || word.jp.text);
        if (wordRomaji.includes(searchText)) return true;
        if (word[selectedLanguage].toLocaleLowerCase().includes(searchText)) return true;
        return false;
    });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value.toLowerCase());
    };

    return (
        <>
            <div className="my-3">
                <label className="input w-full">
                    <IconZoom size={16} className="opacity-50" />
                    <input
                        value={searchText}
                        type="search"
                        className="grow"
                        placeholder="Search by reading or meaning"
                        onChange={handleSearchChange}
                    />
                </label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-12">
                {words.map((word) => (
                    <Word key={word.jp.text + word.en} word={word} />
                ))}
            </div>
        </>
    );
};
