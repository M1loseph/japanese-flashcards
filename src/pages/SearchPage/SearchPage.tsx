import { IconZoom } from '@tabler/icons-react';
import { type FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';
import { searchWordsMatchingQuery } from '../../japanese/search';
import type { TranslatedJapaneseText, WordBag } from '../../japanese/types';
import { useGameSettingsContext } from '../../services/GameStateContext';
import { Word } from '../BagPage/Word';
import { ScrollablePage } from '../common/ScrollablePage';

const SEARCH_KEY = 'q';
const LIMIT_OF_WORDS = 20;

export const SearchPage: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get(SEARCH_KEY) || '';
    const { selectedLanguage } = useGameSettingsContext();

    const results = (() => {
        if (query.length < 2) {
            return undefined;
        }
        return searchWordsMatchingQuery(query, selectedLanguage, LIMIT_OF_WORDS);
    })();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLocaleLowerCase();
        setSearchParams(
            (prev) => {
                const newParams = new URLSearchParams(prev);
                if (value.length > 0) {
                    newParams.set(SEARCH_KEY, value);
                } else {
                    newParams.delete(SEARCH_KEY);
                }
                return newParams;
            },
            { replace: true },
        );
    };

    const groupedResults = (() => {
        const groups = new Map<string, { bag: WordBag; words: TranslatedJapaneseText[] }>();
        if (results === undefined) {
            return [];
        }
        for (const { bag, word } of results.words) {
            const existing = groups.get(bag.id);
            if (existing) {
                existing.words.push(word);
            } else {
                groups.set(bag.id, { bag, words: [word] });
            }
        }
        return Array.from(groups.values());
    })();

    return (
        <ScrollablePage>
            <div className="flex flex-col gap-6">
                <PageTitle title="Search Words" />
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
                {query.length < 2 && <p className="text-sm text-slate-500">Type at least 2 characters to search.</p>}

                {query.length >= 2 && results?.words?.length === 0 && (
                    <p className="text-sm text-slate-500">No results found for "{query}".</p>
                )}

                {results !== undefined && results.words.length > 0 && (
                    <p className="text-sm text-slate-500">
                        {results.hitLimit && <span>Hit limit of {LIMIT_OF_WORDS} search results.</span>}
                        {!results.hitLimit && (
                            <span>
                                {results.words.length} result{results.words.length !== 1 ? 's' : ''} found.
                            </span>
                        )}
                    </p>
                )}

                {groupedResults.map(({ bag, words }) => (
                    <section key={bag.id} className="flex flex-col gap-3">
                        <Link to={`/bags/${bag.id}/words`}>
                            <h2 className="text-lg font-semibold text-secondary link">{bag.name}</h2>
                        </Link>
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
