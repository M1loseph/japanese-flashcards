import { useContext, useEffect, useMemo, useState } from "react";
import { Button, Container, Group, Stack, Title, Text, Modal } from "@mantine/core";
import Flashcard from "../components/Flashcard.tsx";
import { availableWordBags, type JapaneseWord } from "../japanese";
import { LessonContext, POLISH } from "../LessonContext.ts";
import { useNavigate } from "react-router";
import usePreventAccidentalLeave from "../hooks/usePreventAccidentalLeave.ts";


interface FlashcardSession {
    word: JapaneseWord;
    answered: boolean;
    correct: boolean;
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
    const [currentFlashcard, setCurrentFlashcard] = useState(0)
    const [flashCards, setFlashcards] = useState<FlashcardSession[]>([])
    const { selectedLanguage, selectedWordBags } = useContext(LessonContext);
    const [gameBeginTime] = useState(Date.now());
    const [secondsElapsed, setSecondsElapsed] = useState(0)

    const findBagById = (id: string) => availableWordBags.find(bag => bag.id === id)?.words || [];
    const navigate = useNavigate();

    if(selectedWordBags.size == 0) {
        navigate("/");
    }

    useEffect(() => {
        const allWords = Array.from(selectedWordBags).flatMap(bagId => findBagById(bagId));
        shuffleArray(allWords);
        const questions = allWords.map(japaneseVocabulary => {
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
            const now = Date.now();
            const elapsed = Math.floor((now - gameBeginTime) / 1000);
            setSecondsElapsed(elapsed);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const mistakes = flashCards.filter(card => !card.correct);

    const prepareSetForRepeat = () => {
        setFlashcards(mistakes.map(card => ({ ...card, answered: false })));
        setCurrentFlashcard(0);
    }

    const correctAnswers = useMemo(() => flashCards.filter(card => card.correct).length, [flashCards]);
    const wrongAnswers = useMemo(() => flashCards.filter(card => card.answered && !card.correct).length, [flashCards]);

    const gameFinished = currentFlashcard == flashCards.length;
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
                            mistakes.length != 0 ? <Button color="green" onClick={prepareSetForRepeat} size="md">Repeat mistakes ({mistakes.length})</Button> : <></>
                        }
                        <Button onClick={() => navigate("/")} size="md">Go home</Button>
                    </Group>
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

    const hours = Math.floor(secondsElapsed / 3600);
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;

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
        </Container>
    </>;
}

export default RandomShuffleGamePage;
