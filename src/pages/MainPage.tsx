import { Container, Title, Button, Stack, Group } from "@mantine/core";
import { useNavigate } from "react-router";
import { ENGLISH, LessonContext, POLISH } from "../LessonContext.ts";
import { useContext } from "react";
import { availableWordBags } from "../japanese";

const SELECTED_VARIANT = "filled";
const UNSELECTED_VARIANT = "outline";

const variant = (selected: boolean) => selected ? SELECTED_VARIANT : UNSELECTED_VARIANT;

const MainPage: React.FC = () => {
    const navigate = useNavigate();
    const { selectedLanguage, setSelectedLanguage, selectedWordBags, setSelectedWordBags } = useContext(LessonContext);
    const usePolish = () => {
        setSelectedLanguage(POLISH);
    }
    const useEnglish = () => {
        setSelectedLanguage(ENGLISH);
    }
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
    }

    return (
        <Container pt="xl">
            <Stack justify="center" align="center" w="100%">
                <Title order={3}>1. Select translation language</Title>
                <Group>
                    <Button variant={variant(selectedLanguage == POLISH)} onClick={usePolish}>
                        🇵🇱
                    </Button>
                    <Button variant={variant(selectedLanguage == ENGLISH)} onClick={useEnglish}>
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
                        )
                        )
                    }
                </Group>
                <Title order={3}>3. And select game mode</Title>
                <Button
                    size="md"
                    onClick={() => navigate("/game/shuffle")}
                    disabled={selectedWordBags.size === 0}
                >All random</Button>
            </Stack>
        </Container>
    );
}

export default MainPage;
