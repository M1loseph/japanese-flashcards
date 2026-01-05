import { Card, Text, Button, Group, Title, Space, Stack, List, Badge } from '@mantine/core';
import { IconCancel, IconCheck } from '@tabler/icons-react';
import { useState, type JSX } from 'react';
import { TranslationLanguages, type TranslationLanguage } from '../TranslationLanguage';
import type { JapaneseWord } from '../japanese';
import { NOT_AVAILABLE, WordTypes, type WordType } from '../japanese/types';

const badgeColor = (type?: WordType): string | undefined => {
    if (!type) return;
    switch (type) {
        case WordTypes.VERB: {
            return 'red';
        }
        case WordTypes.NOUN: {
            return 'blue';
        }
        case WordTypes.ADJECTIVE: {
            return 'green';
        }
        case WordTypes.PHRASE: {
            return 'yellow';
        }
        case WordTypes.PRONOUN: {
            return 'purple';
        }
        default: {
            const _exhaustiveCheck: never = type;
            return _exhaustiveCheck;
        }
    }
};

interface DescriptionProps {
    showAnswer: boolean;
    card: JapaneseWord;
}

const Description: React.FC<DescriptionProps> = ({ showAnswer, card }) => {
    if (!showAnswer || !card.jp_description || card.jp === NOT_AVAILABLE) {
        return null;
    }
    if (typeof card.jp_description === 'string') {
        return <Text m="sm">{card.jp_description}</Text>;
    }
    return (
        <List spacing="xs" withPadding>
            {card.jp_description.map((desc) => (
                // list-disc className is required by tailwind to show bullet points
                <List.Item className="list-disc" key={desc}>
                    {desc}
                </List.Item>
            ))}
        </List>
    );
};

interface FlashcardProps {
    card: JapaneseWord;
    selectedLanguage: TranslationLanguage;
    handleCorrect: () => void;
    handleMistake: () => void;
}

const JapaneseFlashcard: React.FC<FlashcardProps> = ({
    card,
    selectedLanguage,
    handleCorrect: handlerCorrect,
    handleMistake: handlerMistake,
}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const selectAnswerText = () => {
        if (card.jp === NOT_AVAILABLE && card.jp_description) {
            return card.jp_description;
        }
        return card.jp;
    };

    const question: string = (() => {
        switch (selectedLanguage) {
            case TranslationLanguages.POLISH: {
                return card.pl;
            }
            case TranslationLanguages.ENGLISH: {
                return card.en;
            }
            default: {
                const _neverCheck: never = selectedLanguage;
                return _neverCheck;
            }
        }
    })();

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
            {color && (
                <Badge color={color} variant="filled" size="lg" mb="sm">
                    {card.type}
                </Badge>
            )}
            <Stack mih={'15rem'} justify="center" align="center">
                <Title ta="center" order={1}>
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
