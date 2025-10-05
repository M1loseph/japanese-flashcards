import '@mantine/core/styles.css';
import { AppShell, Group, MantineProvider, Title } from "@mantine/core";
import { theme } from "./theme.ts";
import { LessonContext, TranslationLanguages, type TranslationLanguage } from "./LessonContext.ts"
import { useState } from "react";
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<TranslationLanguage>(TranslationLanguages.ENGLISH);
    const [selectedWordBags, setSelectedWordBags] = useState<Set<string>>(new Set());

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
                        <Outlet />
                    </AppShell.Main>
                </AppShell>
            </LessonContext.Provider>
        </MantineProvider>
    );
}

export default Layout;
