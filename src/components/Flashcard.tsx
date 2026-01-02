import { Card, Text, Button, Group, Title, Space, Stack, Badge } from '@mantine/core';
import { IconCancel, IconCheck } from '@tabler/icons-react';
import { useState, type JSX } from 'react';
import type { WordType } from '../japanese/types';

interface FlashcardProps {
    type: WordType;
    question: string;
    answer: string;
    pronouncitaion?: string;
    description?: string;
    handlerCorrect: () => void;
    handlerMistake: () => void;
}

const JapaneseFlashcard: React.FC<FlashcardProps> = ({
    type,
    question,
    answer,
    pronouncitaion,
    description,
    handlerCorrect,
    handlerMistake,
}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const text = showAnswer ? answer : question;

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const ButtonGroups: () => JSX.Element = () => {
        if (showAnswer) {
            return (
                <>
                    <Button style={{ flex: 1 }} onClick={handlerCorrect} color="green" radius="md">
                        Correct
                        <Space w="xs" />
                        <IconCheck />
                    </Button>
                    <Button style={{ flex: 1 }} onClick={toggleAnswer} color="blue" radius="md">
                        Hide
                    </Button>
                    <Button style={{ flex: 1 }} onClick={handlerMistake} color="red" radius="md">
                        Wrong
                        <Space w="xs" />
                        <IconCancel />
                    </Button>
                </>
            );
        } else {
            return (
                <Button style={{ flex: 1 }} onClick={toggleAnswer} color="blue" radius="md">
                    Show
                </Button>
            );
        }
    };

    const badgeColor = (type: WordType): string => {
        switch (type) {
            case 'noun':
                return 'teal';
            case 'verb':
                return 'blue';
            case 'adjective':
                return 'grape';
            case 'particle':
                return 'yellow';
            case 'phrase':
                return 'orange';
            case 'suffix':
                return 'cyan';
            default:
                throw Error('Unknown word type');
        }
    };

    return (
        <Card w="100%" shadow="sm" radius="md" withBorder>
            <Badge mb="md" color={badgeColor(type)} variant="light">
                {type.toUpperCase()}
            </Badge>
            <Stack mih={'15rem'} justify="center" align="center">
                <Title ta="center" className="" order={1}>
                    {text}
                </Title>
                <Text size="lg" mt="sm">
                    {showAnswer ? pronouncitaion : ''}{' '}
                </Text>
                <Text size="sm" m="sm">
                    {showAnswer ? description : ''}{' '}
                </Text>
            </Stack>
            <Group justify="space-around" mt="md" mb="xs">
                {ButtonGroups()}
            </Group>
        </Card>
    );
};

export default JapaneseFlashcard;
