import { Container, Title, Button, Stack, Group, Collapse } from "@mantine/core";
import { type TranslationLanguage } from "../TranslationLanguage.ts";
import { useNavigate } from "react-router";
import { TranslationLanguages } from "../TranslationLanguage.ts";
import { useMemo, useState } from "react";
import { availableWordBags, findBagById } from "../japanese";

const SELECTED_VARIANT = "filled";
const UNSELECTED_VARIANT = "outline";

const variant = (selected: boolean) => selected ? SELECTED_VARIANT : UNSELECTED_VARIANT;

const MainPage: React.FC = () => {
    const navigate = useNavigate();

    const [selectedLanguage, setSelectedLanguage] = useState<TranslationLanguage>(TranslationLanguages.ENGLISH);
    const [selectedWordBags, setSelectedWordBags] = useState<Set<string>>(new Set());

    const usePolish = () => {
        setSelectedLanguage(TranslationLanguages.POLISH);
    };
    const useEnglish = () => {
        setSelectedLanguage(TranslationLanguages.ENGLISH);
    };

    const toggleWordBag = (bag: string) => {
        if (selectedWordBags.has(bag)) {
            const newBags = new Set(selectedWordBags);
            newBags.delete(bag);
            setSelectedWordBags(newBags);
        } else {
            const newBags = new Set(selectedWordBags);
            newBags.add(bag);
            setSelectedWordBags(newBags);
        }
    };
    const selectedWordsCount = useMemo(() => {
        return Array.from(selectedWordBags)
            .map(bag => findBagById(bag)?.words.length ?? 0)
            .reduce((a, b) => a + b, 0);
    }, [selectedWordBags]);

    return (
        <Container pt="xl">
            <Stack justify="center" align="center" w="100%">
                <Title order={3}>1. Select translation language</Title>
                <Group>
                    <Button variant={variant(selectedLanguage === TranslationLanguages.POLISH)} onClick={usePolish}>
                        🇵🇱
                    </Button>
                    <Button variant={variant(selectedLanguage === TranslationLanguages.ENGLISH)} onClick={useEnglish}>
                        🇬🇧
                    </Button>
                </Group>
                <Title order={3}>2. Select word bags to use</Title>
                <Group justify="center">
                    {
                        availableWordBags.map(bag => (
                            <Button
                                key={bag.id}
                                onClick={() => toggleWordBag(bag.id)}
                                variant={variant(selectedWordBags.has(bag.id))}
                            >
                                {bag.name}
                            </Button>
                        ))
                    }
                </Group>
                <Collapse in={selectedWordBags.size !== 0}>
                    {
                        <div>Selected {selectedWordsCount} word(s)</div>
                    }
                </Collapse>
                <Title order={3}>3. And select game mode</Title>
                <Button
                    size="md"
                    onClick={() => navigate("/game/shuffle", {
                        state: {
                            selectedWordBags,
                            selectedLanguage,
                            gameId: crypto.randomUUID(),
                        },
                    })}
                    disabled={selectedWordBags.size === 0}
                >All random</Button>
            </Stack>
        </Container>
    );
};

export default MainPage;
