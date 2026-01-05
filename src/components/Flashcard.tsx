import { Card, Text, Button, Group, Title, Space, Stack, List, Badge } from '@mantine/core';
import { IconCancel, IconCheck } from '@tabler/icons-react';
import { useState, type JSX } from 'react';
import { TranslationLanguages } from '../TranslationLanguage';
import type { JapaneseWord } from '../japanese';
import { NOT_AVAILABLE, WordTypes, type WordType } from '../japanese/types';

const badgeColor = (type?: WordType): string | undefined => {
    if (!type) return;
    switch (type) {
        case WordTypes.VERB:
            return 'red';
        case WordTypes.NOUN:
            return 'blue';
        case WordTypes.ADJECTIVE:
            return 'green';
        case WordTypes.PHRASE:
            return 'yellow';
        case WordTypes.PRONOUN:
            return 'purple';
        default:
            const _exhaustiveCheck: never = type;
            return _exhaustiveCheck;
    }
}

interface DescriptionProps {
    showAnswer: boolean;
    card: JapaneseWord;
}

const Description: React.FC<DescriptionProps> = ({ showAnswer, card }) => {
    if (!showAnswer || !card.jp_description) {
        return <></>;
    }
    if (typeof card.jp_description === 'string') {
        return <Text m="sm">{card.jp_description}</Text>;
    }
    return (
        <List spacing="xs">
            {card.jp_description.map((desc) => (
                <List.Item key={desc}>{desc}</List.Item>
            ))}
        </List>
    );
};

interface FlashcardProps {
    card: JapaneseWord;
    selectedLanguage: string;
    handlerCorrect: () => void;
    handlerMistake: () => void;
}

const JapaneseFlashcard: React.FC<FlashcardProps> = ({ card, selectedLanguage, handlerCorrect, handlerMistake }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const selectAnswerText = () => {
        if (card.jp === NOT_AVAILABLE && card.jp_description) {
            return card.jp_description;
        }
        return card.jp;
    };

    const question = selectedLanguage === TranslationLanguages.POLISH ? card.pl : card.en;
    const text = showAnswer ? selectAnswerText() : question;

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const correctPressed = () => {
        setShowAnswer(false);
        handlerCorrect();
    };

    const mistakePressed = () => {
        setShowAnswer(false);
        handlerMistake();
    };

    const ButtonGroups: () => JSX.Element = () => {
        if (showAnswer) {
            return (
                <>
                    <Button style={{ flex: 1 }} onClick={correctPressed} color="green" radius="md">
                        Correct
                        <Space w="xs" />
                        <IconCheck />
                    </Button>
                    <Button style={{ flex: 1 }} onClick={toggleAnswer} color="blue" radius="md">
                        Hide
                    </Button>
                    <Button style={{ flex: 1 }} onClick={mistakePressed} color="red" radius="md">
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

    const color = badgeColor(card.type);

    return (
        <Card w="100%" shadow="sm" radius="md" withBorder>
            {color && <Badge color={color} variant="filled" size="lg" mb="sm">{card.type}</Badge>}
            <Stack mih={'15rem'} justify="center" align="center">
                <Title ta="center" className="" order={1}>
                    {text}
                </Title>
                <Text size="lg" mt="sm">
                    {showAnswer ? card.jp_pronunciation : ''}
                </Text>
                <Description showAnswer={showAnswer} card={card} />
            </Stack>
            <Group justify="space-around" mt="md" mb="xs">
                {ButtonGroups()}
            </Group>
        </Card>
    );
};

export default JapaneseFlashcard;
