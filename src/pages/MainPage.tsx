import { type FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    countriesEUBag,
    weekBag,
    duolingo1Bag,
    duolingo2Bag,
    duolingo3Bag,
    duolingo4Bag,
    duolingo5Bag,
    duolingo6Bag,
    familyBag,
    findBagById,
    genki0Bag,
    genki1Bag,
    genki1MajorsBag,
    genki2Bag,
    genki3Bag,
    genki4Bag,
    numbersBag,
    sakura1_1Bag,
    sakura1_2Bag,
    sakura1_3Bag,
    sakura1_4Bag,
    sakura1_5Bag,
    sakura1_6Bag,
    sakura1_7Bag,
    sakura1_8Bag,
    sakura1_8AnimalsBag,
    sakura1_8FruitsAndVegetablesBag,
    sakura1_8SportsBag,
    hoursBag,
    minutesBag,
    sakura1_9Bag,
    sakura1_10Bag,
    countingThingsBag,
    monthsBag,
    sakura1_11Bag,
    duolingo7Bag,
    countriesAsiaBag,
    duolingo8Bag,
    sakura1_12Bag,
    duolingo9Bag,
    sakura2_1Bag,
    sakura2_2Bag,
    directionsBag,
    sakura2_3Bag,
    duolingo10Bag,
    sakura2_4Bag,
    duolingo11Bag,
    sakura2_5Bag,
    sakura2_6Bag,
    yearsBag,
    daysOfMonthBag,
} from '../japanese';
import { LanguageSelector } from '../components/LanguageSelector';
import { CategorySection } from '../components/CategorySection';
import { type WordBag } from '../japanese/types';
import { useGameSettingsContext } from '../context/GameStateContext';
import { shuffleArrayInPlace } from '../utils';
import { useGameContext } from '../context/GameContext';
import { IconRestore } from '@tabler/icons-react';
import { ScrollablePage } from './common/ScrollablePage';

const MainPage: FC = () => {
    const navigate = useNavigate();
    const { setGameState, gameState } = useGameContext();
    const { selectedLanguage, setSelectedLanguage, selectedWordBags, toggleWordBag, selectBags, deselectBags } =
        useGameSettingsContext();

    const groupedBags: Record<string, WordBag[]> = {
        'Time ⏰': [weekBag, hoursBag, minutesBag, monthsBag, daysOfMonthBag, yearsBag],
        'Essentials 📌': [familyBag, numbersBag, countingThingsBag, directionsBag],
        'Genki books 📚': [genki0Bag, genki1Bag, genki1MajorsBag, genki2Bag, genki3Bag, genki4Bag],
        'Classes 🎓': [
            sakura1_1Bag,
            sakura1_2Bag,
            sakura1_3Bag,
            sakura1_4Bag,
            sakura1_5Bag,
            sakura1_6Bag,
            sakura1_7Bag,
            sakura1_8Bag,
            sakura1_8SportsBag,
            sakura1_8FruitsAndVegetablesBag,
            sakura1_8AnimalsBag,
            sakura1_9Bag,
            sakura1_10Bag,
            sakura1_11Bag,
            sakura1_12Bag,
            sakura2_1Bag,
            sakura2_2Bag,
            sakura2_3Bag,
            sakura2_4Bag,
            sakura2_5Bag,
            sakura2_6Bag,
        ],
        'Apps 📱': [
            duolingo1Bag,
            duolingo2Bag,
            duolingo3Bag,
            duolingo4Bag,
            duolingo5Bag,
            duolingo6Bag,
            duolingo7Bag,
            duolingo8Bag,
            duolingo9Bag,
            duolingo10Bag,
            duolingo11Bag,
        ],
        'Geography 🌍 🌎 🌏': [countriesEUBag, countriesAsiaBag],
    };

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

        const newFlashcards = bags.flatMap((bag) => {
            return bag.words.map((japaneseVocabulary) => {
                return {
                    word: japaneseVocabulary,
                    wordBag: bag.name,
                    answered: false,
                    correct: false,
                };
            });
        });

        const wordBagNames = Array.from(selectedWordBags)
            .map((id) => findBagById(id)?.name)
            .filter((name) => name !== undefined);

        shuffleArrayInPlace(newFlashcards);

        setGameState({
            version: 1,
            initialWordBags: wordBagNames,
            flashcards: newFlashcards,
            gameStartTimeMs: Date.now(),
            currentFlashcardIndex: 0,
            selectedLanguage,
        });
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
                <section>
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
                                        onToggleBag={toggleWordBag}
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
