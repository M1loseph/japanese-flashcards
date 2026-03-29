import { IconRestore } from '@tabler/icons-react';
import { type FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageSelector } from '../../components/LanguageSelector';
import { useGameContext } from '../../context/GameContext';
import { useGameSettingsContext } from '../../context/GameStateContext';
import { findBagById } from '../../japanese';
import { type WordBag } from '../../japanese/types';
import { ScrollablePage } from '../common/ScrollablePage';
import { CategorySection } from './CategorySection';
import { groupedBags } from './groupedBags';

const MainPage: FC = () => {
    const navigate = useNavigate();
    const { createNewGame, gameState } = useGameContext();
    const {
        selectedLanguage,
        setSelectedLanguage,
        selectedWordBags,
        toggleWordBag: handleToggleWordBag,
        selectBags,
        deselectBags,
    } = useGameSettingsContext();

    const handleSelectAll = (bags: WordBag[]) => {
        selectBags(bags.map((bag) => bag.id));
    };

    const handleDeselectAll = (bags: WordBag[]) => {
        deselectBags(bags.map((bag) => bag.id));
    };

    const selectedWordsCount = useMemo(() => {
        return Array.from(selectedWordBags)
            .map((id) => findBagById(id)?.words.length ?? 0)
            .reduce((a, b) => a + b, 0);
    }, [selectedWordBags]);

    const handleStartGame = () => {
        const bags = Array.from(selectedWordBags)
            .map((bagId) => findBagById(bagId))
            .filter((bag: WordBag | undefined) => bag !== undefined);

        const selectedJapaneseWord = bags.flatMap((bag) => {
            return bag.words.map((japaneseVocabulary) => {
                return {
                    word: japaneseVocabulary,
                    wordBag: bag.name,
                };
            });
        });

        createNewGame(selectedJapaneseWord, selectedLanguage);
        navigate('/game/shuffle');
    };

    const handleResumeSave = () => {
        navigate('/game/shuffle');
    };

    return (
        <ScrollablePage>
            <main className="pb-24 grow">
                {gameState && (
                    <section>
                        <div role="alert" className="alert bg-warning/5 border-warning mb-10">
                            <div className="p-2 bg-warning/40 rounded-md">
                                <IconRestore color="orange" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-warning">GAME IN PROGRESS</span>
                                <span className="text-lg font-medium">
                                    {gameState?.initialWordBags.join(', ')} (
                                    {gameState.flashcards.filter((card) => card.answered).length}/
                                    {gameState.flashcards.length})
                                </span>
                            </div>

                            <button onClick={handleResumeSave} className="btn btn-warning">
                                Resume
                            </button>
                        </div>
                    </section>
                )}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">1. Choose Your Language</h2>
                    <LanguageSelector selectedLanguage={selectedLanguage} onSelect={setSelectedLanguage} />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-center">2. Select Content</h2>
                    <div className="space-y-2">
                        {Object.entries(groupedBags).map(
                            ([category, bags]) =>
                                bags.length > 0 && (
                                    <CategorySection
                                        key={category}
                                        title={category}
                                        bags={bags}
                                        selectedBagIds={selectedWordBags}
                                        onToggleBag={handleToggleWordBag}
                                        onSelectAll={() => handleSelectAll(bags)}
                                        onDeselectAll={() => handleDeselectAll(bags)}
                                    />
                                ),
                        )}
                    </div>
                </section>
            </main>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-base-100 border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-slate-600 font-medium">
                        {selectedWordsCount > 0 ? (
                            <span>
                                Ready to practice <strong className="text-primary">{selectedWordsCount}</strong> words
                            </span>
                        ) : (
                            <span>Select some word bags to start</span>
                        )}
                    </div>
                    <button
                        onClick={handleStartGame}
                        disabled={selectedWordsCount === 0}
                        className="btn btn-lg btn-primary"
                    >
                        Start Shuffle Game
                    </button>
                </div>
            </div>
        </ScrollablePage>
    );
};

export default MainPage;
