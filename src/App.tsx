import '@mantine/core/styles.css';
import { AppShell, Group, MantineProvider, Title } from "@mantine/core";
import { theme } from "./theme.ts";
import MainPage from "./pages/MainPage.tsx";
import RandomShuffleGamePage from "./pages/RandomShuffleGamePage.tsx";
import { ENGLISH, LessonContext, type TranslationLanguage } from "./LessonContext.ts"
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
    const [selectedLanguage, setSelectedLanguage] = useState<TranslationLanguage>(ENGLISH)
    const [selectedWordBags, setSelectedWordBags] = useState<Set<string>>(new Set())

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />
        }, {
            path: "/game/shuffle",
            element: <RandomShuffleGamePage />
        }
    ]);
    return (
        <MantineProvider theme={theme}>
            <LessonContext.Provider value={{ selectedLanguage, setSelectedLanguage, selectedWordBags, setSelectedWordBags }}>
                <AppShell
                    header={{ height: 60 }}
                >
                    <AppShell.Header>
                        <Group align="center" h="100%">
                            <Title style={{ cursor: "pointer" }} ml="lg" order={2}>
                                JFlashcards
                            </Title>
                        </Group>
                    </AppShell.Header>
                    <AppShell.Main>
                        <RouterProvider router={router} />
                    </AppShell.Main>
                </AppShell>
            </LessonContext.Provider>
        </MantineProvider>
    );
}

export default App;
