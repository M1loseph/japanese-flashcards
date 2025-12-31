import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    countriesEUBag,
    daysOfWeekBag,
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
    genki2Bag,
    numbersBag,
    sakura1Bag,
    sakura2Bag,
    sakura3Bag,
    sakura4Bag,
    sakura5Bag,
    sakura6Bag,
    sakura7Bag,
    sakura8Bag,
    sakura8AnimalsBag,
    sakura8FruitsAndVegetablesBag,
    sakura8SportsBag,
    timeBag,
    sakura9Bag,
    sakura10Bag,
    countingThingsBag,
    genki1MajorsBag,
    ordinalNumbersBag,
    monthsBag,
    sakura11Bag,
    duolingo7Bag,
    countriesAsiaBag,
    duolingo8Bag,
} from '../japanese';
import { type TranslationLanguage, TranslationLanguages } from '../TranslationLanguage';
import { LanguageSelector } from '../components/LanguageSelector';
import { CategorySection } from '../components/CategorySection';
import { type WordBag } from '../japanese/types';
import { Button } from '@mantine/core';

const MainPage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState<TranslationLanguage>(TranslationLanguages.ENGLISH);
    const [selectedWordBags, setSelectedWordBags] = useState<Set<string>>(new Set());

    const toggleWordBag = (id: string) => {
        const newSet = new Set(selectedWordBags);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setSelectedWordBags(newSet);
    };

    const groupedBags: Record<string, WordBag[]> = {
        'Essentials 📌': [
            familyBag,
            numbersBag,
            countingThingsBag,
            ordinalNumbersBag,
            daysOfWeekBag,
            timeBag,
            monthsBag,
        ],
        'Genki books 📚': [genki0Bag, genki1Bag, genki1MajorsBag, genki2Bag],
        'Classes 🎓': [
            sakura1Bag,
            sakura2Bag,
            sakura3Bag,
            sakura4Bag,
            sakura5Bag,
            sakura6Bag,
            sakura7Bag,
            sakura8Bag,
            sakura8SportsBag,
            sakura8FruitsAndVegetablesBag,
            sakura8AnimalsBag,
            sakura9Bag,
            sakura10Bag,
            sakura11Bag,
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
        ],
        'Geography 🌍 🌎 🌏': [countriesEUBag, countriesAsiaBag],
    };

    const handleSelectAll = (bags: WordBag[]) => {
        const newSet = new Set(selectedWordBags);
        bags.forEach((bag) => newSet.add(bag.id));
        setSelectedWordBags(newSet);
    };

    const handleDeselectAll = (bags: WordBag[]) => {
        const newSet = new Set(selectedWordBags);
        bags.forEach((bag) => newSet.delete(bag.id));
        setSelectedWordBags(newSet);
    };

    const selectedWordsCount = useMemo(() => {
        return Array.from(selectedWordBags)
            .map((id) => findBagById(id)?.words.length ?? 0)
            .reduce((a, b) => a + b, 0);
    }, [selectedWordBags]);

    const handleStartGame = () => {
        navigate('/game/shuffle', {
            state: {
                selectedWordBags: Array.from(selectedWordBags),
                selectedLanguage,
                gameId: crypto.randomUUID(),
            },
        });
    };

    return (
        <div className="pb-24">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
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

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40">
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
                    <Button
                        onClick={handleStartGame}
                        disabled={selectedWordsCount === 0}
                        size="lg"
                        className="font-bold"
                    >
                        Start Shuffle Game
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
