import { Card, Text, Button, Group, Title, Space, Stack } from '@mantine/core';
import { IconCancel, IconCheck } from "@tabler/icons-react";
import { useState } from "react";

interface FlashcardProps {
    question: string;
    answer: string;
    pronouncitaion?: string;
    description?: string;
    handlerCorrect: () => void;
    handlerMistake: () => void;
}

const JapaneseFlashcard: React.FC<FlashcardProps> = ({ question, answer, pronouncitaion, description, handlerCorrect, handlerMistake }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const text = showAnswer ? answer : question;

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    }
    return (
        <Card w="100%" shadow="sm" radius="md" withBorder>
            <Stack mih={"15rem"} justify="center" align="center">
                <Title ta="center" className='' order={1}>
                    {text}
                </Title>
                <Text size="lg" mt="sm"> {showAnswer ? pronouncitaion : ""} </Text>
                <Text size="sm" m="sm"> {showAnswer ? description : ""} </Text>
            </Stack>
            <Group justify="space-around" mt="md" mb="xs">
                <Button style={{ flex: 1 }} onClick={handlerCorrect} color="green" radius="md">
                    Correct
                    <Space w="xs" />
                    <IconCheck />
                </Button>
                <Button style={{ flex: 1 }} onClick={toggleAnswer} color="blue" radius="md">
                    Show
                </Button>
                <Button style={{ flex: 1 }} onClick={handlerMistake} color="red" radius="md">
                    Wrong
                    <Space w="xs" />
                    <IconCancel />
                </Button>
            </Group>
        </Card>
    );
}

export default JapaneseFlashcard;
