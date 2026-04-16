import { IconZoom } from '@tabler/icons-react';
import { useMemo, useState, type FC } from 'react';
import { useGameSettingsContext } from '../../context/GameStateContext';
import { availableWordBags } from '../../japanese';
import { textMatchesQuery } from '../../japanese/search';
import type { TranslatedJapaneseText, WordBag } from '../../japanese/types';
import type { TranslationLanguage } from '../../types/TranslationLanguage';
import { Word } from '../BagPage/Word';
import { ScrollablePage } from '../common/ScrollablePage';

interface SearchResult {
    bag: WordBag;
    word: TranslatedJapaneseText;
}

const searchWords = (query: string, selectedLanguage: TranslationLanguage): SearchResult[] => {
    if (query.length < 2) return [];

    return availableWordBags.flatMap((bag) =>
        bag.words.filter((word) => textMatchesQuery(word, query, selectedLanguage)).map((word) => ({ bag, word })),
    );
};

export const SearchPage: FC = () => {
    const [query, setQuery] = useState('');
    const { selectedLanguage } = useGameSettingsContext();

    const results = useMemo(() => searchWords(query, selectedLanguage), [query, selectedLanguage]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value.toLocaleLowerCase());
    };

    const groupedResults = useMemo(() => {
        const groups = new Map<string, { bag: WordBag; words: TranslatedJapaneseText[] }>();
        for (const { bag, word } of results) {
            const existing = groups.get(bag.id);
            if (existing) {
                existing.words.push(word);
            } else {
                groups.set(bag.id, { bag, words: [word] });
            }
        }
        return Array.from(groups.values());
    }, [results]);

    return (
        <ScrollablePage>
            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-bold">Search Words</h1>
                <label className="input input-bordered flex items-center gap-2 w-full">
                    <IconZoom size={16} className="opacity-50" />
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search by Japanese, pronunciation, or translation..."
                        value={query}
                        onChange={handleInputChange}
                        aria-label="Search words"
                        tabIndex={0}
                    />
                </label>

                {query.length > 0 && query.length < 2 && (
                    <p className="text-sm text-slate-500">Type at least 2 characters to search.</p>
                )}

                {query.length >= 2 && results.length === 0 && (
                    <p className="text-sm text-slate-500">No results found for "{query}".</p>
                )}

                {query.length >= 2 && results.length > 0 && (
                    <p className="text-sm text-slate-500">
                        {results.length} result{results.length !== 1 ? 's' : ''} found.
                    </p>
                )}

                {groupedResults.map(({ bag, words }) => (
                    <section key={bag.id} className="flex flex-col gap-3">
                        <h2 className="text-lg font-semibold text-secondary">{bag.name}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {words.map((word) => (
                                <Word key={`${bag.id}-${word.jp.text}-${word.en}`} word={word} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </ScrollablePage>
    );
};
