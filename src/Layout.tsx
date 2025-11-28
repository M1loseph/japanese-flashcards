import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.ts";
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

const Layout: React.FC = () => {
    return (
        <MantineProvider theme={theme}>
            <div className="min-h-screen bg-background font-sans text-text">
                <Header />
                <Outlet />
            </div>
        </MantineProvider>
    );
};

export default Layout;
