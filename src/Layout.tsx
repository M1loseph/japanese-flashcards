import '@mantine/core/styles.css';
import { AppShell, Group, MantineProvider, Title } from "@mantine/core";
import { theme } from "./theme.ts";
import { Outlet, useNavigate } from 'react-router-dom';

const Layout: React.FC = () => {
    const navigate = useNavigate();
    return (
        <MantineProvider theme={theme}>
            <AppShell
                header={{ height: 60 }}
            >
                <AppShell.Header>
                    <Group align="center" h="100%">
                        <Title style={{ cursor: "pointer" }} ml="lg" order={2} onClick={() => navigate("/")}>
                            JFlashcards
                        </Title>
                    </Group>
                </AppShell.Header>
                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
};

export default Layout;
