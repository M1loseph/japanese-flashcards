import { useEffect, useMemo, useState } from 'react';
import { type TranslationLanguage } from '../TranslationLanguage.ts';
import Flashcard from '../components/Flashcard.tsx';
import { findBagById, type JapaneseWord } from '../japanese';
import { useLocation, useNavigate } from 'react-router';
import usePreventAccidentalLeave from '../hooks/usePreventAccidentalLeave.ts';

interface FlashcardSession {
    word: JapaneseWord;
    answered: boolean;
    correct: boolean;
}

interface GameState {
    gameId: string;
    flashcards: FlashcardSession[];
    currentFlashcardIndex: number;
    selectedLanguage: TranslationLanguage;
}

interface RandomShuffleGamePageProps {
    gameId: string;
    selectedLanguage: TranslationLanguage;
    selectedWordBags: string[];
}

function shuffleArray<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
}

const RandomShuffleGamePage: React.FC = () => {
    const location = useLocation();

    const [sessionTime, setSessionTime] = useState(0);
    const [gameState, setGameState] = useState<GameState>(() => {
        const state = location.state as RandomShuffleGamePageProps | null;
        const savedState = localStorage.getItem('randomShuffleGameState');
        if (state === null && savedState === null) {
            throw new Error('No game state found in location state or local storage');
        }
        if (savedState !== null) {
            const parsedSave = JSON.parse(savedState) as GameState;
            if (state === null || parsedSave.gameId === state.gameId) {
                return parsedSave;
            }
        }
        const { selectedLanguage, selectedWordBags, gameId } = state!;
        const allWords = selectedWordBags.flatMap((bagId) => findBagById(bagId)?.words || []);
        shuffleArray(allWords);
        const flashcards = allWords.map((japaneseVocabulary) => {
            return {
                word: japaneseVocabulary,
                answered: false,
                correct: false,
            };
        });
        return {
            flashcards,
            currentFlashcardIndex: 0,
            secondsElapsed: 0,
            selectedLanguage,
            gameId,
        };
    });

    useEffect(() => {
        localStorage.setItem('randomShuffleGameState', JSON.stringify(gameState));
    }, [gameState]);

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setSessionTime((prevState) => prevState + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const { flashcards, currentFlashcardIndex, selectedLanguage } = gameState;

    const correctAnswers = useMemo(() => flashcards.filter((card) => card.correct), [flashcards]);
    const wrongAnswers = useMemo(() => flashcards.filter((card) => card.answered && !card.correct), [flashcards]);

    const prepareSetForRepeat = () => {
        const flashcards = wrongAnswers.map((card) => ({ ...card, answered: false }));
        setGameState((prevState) => ({
            ...prevState,
            flashcards,
            currentFlashcardIndex: 0,
        }));
    };

    const gameFinished = currentFlashcardIndex === flashcards.length;
    const { showPrompt, confirmLeave, cancelLeave } = usePreventAccidentalLeave(!gameFinished);

    if (gameFinished) {
        return (
            <div className="container mx-auto pt-12">
                <div className="flex flex-col items-center space-y-6">
                    <h2 className="text-3xl font-bold">Congratulations, you finished!</h2>
                    <div className="flex gap-4">
                        {wrongAnswers.length != 0 ? (
                            <button className="btn btn-success btn-lg" onClick={prepareSetForRepeat}>
                                Repeat mistakes ({wrongAnswers.length})
                            </button>
                        ) : (
                            <></>
                        )}
                        <button className="btn btn-lg" onClick={() => navigate('/')}>
                            Go home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const card = flashcards[currentFlashcardIndex];

    const replaceCard = (newCard: FlashcardSession): FlashcardSession[] => {
        const flashCardsCopy = [...flashcards];
        flashCardsCopy[currentFlashcardIndex] = newCard;
        return flashCardsCopy;
    };

    const handlerCorrect = () => {
        const answeredCard = {
            ...card,
            answered: true,
            correct: true,
        };
        const updatedCards = replaceCard(answeredCard);

        setGameState((prevState) => ({
            ...prevState,
            flashcards: updatedCards,
            currentFlashcardIndex: prevState.currentFlashcardIndex + 1,
        }));
    };

    const handlerMistake = () => {
        const answeredCard = {
            ...card,
            answered: true,
            correct: false,
        };
        const updatedCards = replaceCard(answeredCard);

        setGameState((prevState) => ({
            ...prevState,
            flashcards: updatedCards,
            currentFlashcardIndex: prevState.currentFlashcardIndex + 1,
        }));
    };

    const hours = Math.floor(sessionTime / 3600);
    const minutes = Math.floor((sessionTime % 3600) / 60);
    const seconds = sessionTime % 60;

    return (
        <>
            <div className={`modal ${showPrompt ? 'modal-open' : ''}`}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Leave game?</h3>
                    <p className="py-4">Are you sure you want to leave? Your current progress in this round will be lost.</p>
                    <div className="modal-action">
                        <button className="btn" onClick={cancelLeave}>
                            Stay
                        </button>
                        <button className="btn btn-error" onClick={confirmLeave}>
                            Leave
                        </button>
                    </div>
                </div>
                <div className="modal-backdrop" onClick={cancelLeave}></div>
            </div>

            <div className="max-w-7xl mx-auto pt-12 px-4">
                <div className="flex flex-col items-center space-y-6">
                    <div className="flex w-full justify-between items-center bg-base-200 p-4 rounded-lg shadow-md">
                        <p className="text-xl font-bold">
                            {currentFlashcardIndex + 1}/{flashcards.length}
                        </p>
                        <p className="text-xl font-bold text-success">
                            {correctAnswers.length}
                        </p>
                        <p className="text-xl font-bold text-error">
                            {wrongAnswers.length}
                        </p>
                        <p className="text-xl font-bold">
                            {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
                            {String(seconds).padStart(2, '0')}
                        </p>
                    </div>
                    <Flashcard
                        card={card.word}
                        selectedLanguage={selectedLanguage}
                        handleCorrect={handlerCorrect}
                        handleMistake={handlerMistake}
                    />
                </div>
            </div>
        </>
    );
};

export default RandomShuffleGamePage;
