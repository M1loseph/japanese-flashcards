import { IconZoom } from '@tabler/icons-react';
import { useState, type FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import { searchWordsMatchingQuery } from '../../japanese/search';
import type { WordBag } from '../../japanese/types';
import { useGameSettingsContext } from '../../services/GameStateContext';
import { Word } from './Word';

export const WordsTab: FC = () => {
    const bag = useOutletContext<WordBag>();
    const { selectedLanguage } = useGameSettingsContext();
    const [searchText, setSearchText] = useState<string>('');

    const words = (() => {
        if (searchText === '') {
            return bag.words;
        }
        return searchWordsMatchingQuery(searchText, selectedLanguage, 100, [bag]).words.map(
            (foundWord) => foundWord.word,
        );
    })();

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
