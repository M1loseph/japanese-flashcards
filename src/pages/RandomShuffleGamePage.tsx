import {useContext, useEffect, useState} from "react";
import {Button, Center, Container, Group, Stack, Title, Text} from "@mantine/core";
import Flashcard from "../components/Flashcard.tsx";
import {availableWordBags, type JapaneseWord} from "../japanese";
import {LessonContext, POLISH} from "../LessonContext.ts";


interface FlashcardSession {
    word: JapaneseWord;
    answered: boolean;
    correct: boolean;
}

export default function RandomShuffleGamePage() {
    const [currentFlashcard, setCurrentFlashcard] = useState(0)
    const [flashCards, setFlashcards] = useState<FlashcardSession[]>([])
    const {selectedLanguage, selectedWordBags} = useContext(LessonContext);
    const [secondsElapsed, setSecondsElapsed] = useState(0)

    const findBagById = (id: string) => availableWordBags.find(bag => bag.id === id)?.words || [];

    useEffect(() => {
        const allWords = Array.from(selectedWordBags).flatMap(bagId => findBagById(bagId));
        const shuffledSet = allWords.sort(() => Math.random() - 0.5);
        const questions = shuffledSet.map(japaneseVocabulary => {
            return {
                word: japaneseVocabulary,
                answered: false,
                correct: false
            }
        });
        setFlashcards(questions)
    }, [selectedWordBags])

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsElapsed(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const prepareSetForRepeat = () => {
        const mistakes = flashCards.filter(card => !card.correct);
        setFlashcards(mistakes.map(card => ({...card, answered: false})));
        setCurrentFlashcard(0);
    }

    if (flashCards.length == currentFlashcard) {
        return <>
            <Container>
                <Stack align="center">
                    <Title
                        order={2}
                    >Congratulations, you finished!</Title>
                    <Button onClick={prepareSetForRepeat} size="md">Repeat mistakes</Button>
                </Stack>
            </Container>
        </>
    }

    const card = flashCards[currentFlashcard]

    const handlerCorrect = () => {
        card.answered = true;
        card.correct = true;
        setCurrentFlashcard(currentFlashcard + 1)
    }

    const handlerMistake = () => {
        card.answered = true;
        setCurrentFlashcard(currentFlashcard + 1)
    }

    const question = selectedLanguage === POLISH ? card.word.pl : card.word.en;
    const correctAnswers = flashCards.filter(card => card.correct).length;
    const wrongAnswers = flashCards.filter(card => card.answered && !card.correct).length;

    const hours = Math.floor(secondsElapsed / 3600);
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;

    return (
        <Container pt="xl">
            <Center>
                <Stack>
                    <Group justify="space-between" align="center" style={{width: "30rem"}}>
                        <Text fw={700} size="xl">
                            {currentFlashcard + 1}/{flashCards.length}
                        </Text>
                        <Text c="green" fw={700} size="xl">
                            {correctAnswers}
                        </Text>
                        <Text c="red" fw={700} size="xl">
                            {wrongAnswers}
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
                        answer={card.word.jp}
                        pronouncitaion={card.word.jp_pronounciation}
                        description={card.word.jp_description}
                        handlerCorrect={handlerCorrect}
                        handlerMistake={handlerMistake}
                    />
                </Stack>
            </Center>
        </Container>
    );
}