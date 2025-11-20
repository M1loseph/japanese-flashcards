import { useEffect, useMemo, useState } from "react";
import { type TranslationLanguage } from "../TranslatopnLanguage.ts";
import { Button, Container, Group, Stack, Title, Text, Modal } from "@mantine/core";
import Flashcard from "../components/Flashcard.tsx";
import { findBagById, type JapaneseWord } from "../japanese";
import { TranslationLanguages } from "../TranslatopnLanguage.ts";
import { useLocation, useNavigate } from "react-router";
import usePreventAccidentalLeave from "../hooks/usePreventAccidentalLeave.ts";
import { NOT_AVAILABLE } from "../japanese/types.ts";


interface FlashcardSession {
    word: JapaneseWord;
    answered: boolean;
    correct: boolean;
}

interface GameState {
    gameId: string;
    flashcards: FlashcardSession[];
    currentFlashcardIndex: number;
    secondsElapsed: number;
    selectedLanguage: TranslationLanguage;
}

interface RandomShuffleGamePageProps {
    gameId: string;
    selectedLanguage: TranslationLanguage;
    selectedWordBags: Set<string>;
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

    const [gameState, setGameState] = useState<GameState>(() => {
        const state = location.state as RandomShuffleGamePageProps | null;
        const savedState = localStorage.getItem("randomShuffleGameState");
        if (state === null && savedState === null) {
            throw new Error("No game state found in location state or local storage");
        }
        if (savedState !== null) {
            const parsedSave = JSON.parse(savedState) as GameState;
            if (state === null || parsedSave.gameId === state.gameId) {
                return parsedSave;
            }
        }
        const { selectedLanguage, selectedWordBags, gameId } = state!;
        const allWords = Array.from(selectedWordBags).flatMap(bagId => findBagById(bagId)?.words || []);
        shuffleArray(allWords);
        const flashcards = allWords.map(japaneseVocabulary => {
            return {
                word: japaneseVocabulary,
                answered: false,
                correct: false,
            }
        });
        return {
            flashcards: flashcards,
            currentFlashcardIndex: 0,
            secondsElapsed: 0,
            selectedLanguage: selectedLanguage,
            gameId: gameId,
        }
    });

    useEffect(() => {
        localStorage.setItem("randomShuffleGameState", JSON.stringify(gameState));
    }, [gameState]);

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setGameState(prevState => ({ ...prevState, secondsElapsed: prevState.secondsElapsed + 1 }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const { flashcards, currentFlashcardIndex, secondsElapsed, selectedLanguage } = gameState;

    const correctAnswers = useMemo(() => flashcards.filter(card => card.correct), [flashcards]);
    const wrongAnswers = useMemo(() => flashcards.filter(card => card.answered && !card.correct), [flashcards]);

    const prepareSetForRepeat = () => {
        const flashcards = wrongAnswers.map(card => ({ ...card, answered: false }));
        setGameState(prevState => ({
            ...prevState,
            flashcards: flashcards,
            currentFlashcardIndex: 0,
        }));
    }

    const gameFinished = currentFlashcardIndex === flashcards.length;
    const { showPrompt, confirmLeave, cancelLeave } = usePreventAccidentalLeave(!gameFinished);

    if (gameFinished) {
        return <>
            <Container pt="xl">
                <Stack align="center">
                    <Title
                        order={2}
                    >Congratulations, you finished!</Title>
                    <Group>
                        {
                            wrongAnswers.length != 0 ? <Button color="green" onClick={prepareSetForRepeat} size="md">Repeat mistakes ({wrongAnswers.length})</Button> : <></>
                        }
                        <Button onClick={() => navigate("/")} size="md">Go home</Button>
                    </Group>
                </Stack>
            </Container>
        </>
    }

    const card = flashcards[currentFlashcardIndex]

    const replaceCard = (newCard: FlashcardSession): FlashcardSession[] => {
        const flashCardsCopy = [...flashcards];
        flashCardsCopy[currentFlashcardIndex] = newCard;
        return flashCardsCopy;
    }

    const handlerCorrect = () => {
        const answeredCard = {
            ...card,
            answered: true,
            correct: true,
        }
        const updatedCards = replaceCard(answeredCard);


        setGameState(prevState => ({
            ...prevState,
            flashcards: updatedCards,
            currentFlashcardIndex: prevState.currentFlashcardIndex + 1,
        }));
    }

    const handlerMistake = () => {
        const answeredCard = {
            ...card,
            answered: true,
            correct: false,
        }
        const updatedCards = replaceCard(answeredCard);

        setGameState(prevState => ({
            ...prevState,
            flashcards: updatedCards,
            currentFlashcardIndex: prevState.currentFlashcardIndex + 1,
        }));
    }

    const question = selectedLanguage === TranslationLanguages.POLISH ? card.word.pl : card.word.en;

    const hours = Math.floor(secondsElapsed / 3600);
    const minutes = Math.floor((secondsElapsed % 3600) / 60);
    const seconds = secondsElapsed % 60;

    const selectAnswerText = () => {
        if (card.word.jp === NOT_AVAILABLE && card.word.jp_description) {
            return card.word.jp_description;
        }
        return card.word.jp;
    }

    return <>
        <Modal opened={showPrompt} onClose={cancelLeave} title="Leave game?">
            <Stack>
                <Text>Are you sure you want to leave? Your current progress in this round will be lost.</Text>
                <Group justify="flex-end">
                    <Button variant="default" onClick={cancelLeave}>Stay</Button>
                    <Button color="red" onClick={confirmLeave}>Leave</Button>
                </Group>
            </Stack>
        </Modal>
        <Container pt="xl">
            <Stack align="center">
                <Group style={{ width: "100%" }} justify="space-between" align="center">
                    <Text fw={700} size="xl">
                        {currentFlashcardIndex + 1}/{flashcards.length}
                    </Text>
                    <Text c="green" fw={700} size="xl">
                        {correctAnswers.length}
                    </Text>
                    <Text c="red" fw={700} size="xl">
                        {wrongAnswers.length}
                    </Text>
                    <Text size="xl" fw={700}>
                        {String(hours).padStart(2, '0')}:
                        {String(minutes).padStart(2, '0')}:
                        {String(seconds).padStart(2, '0')}
                    </Text>
                </Group>
                <Flashcard
                    key={card.word.jp}
                    question={question}
                    answer={selectAnswerText()}
                    pronouncitaion={card.word.jp_pronunciation}
                    description={card.word.jp_description}
                    handlerCorrect={handlerCorrect}
                    handlerMistake={handlerMistake}
                />
            </Stack>
        </Container>
    </>;
}

export default RandomShuffleGamePage;
