import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { DrawerProvider } from './context/DrawerContext';
import { GameContextProvider } from './context/GameContext';
import { GameSettingsProvider } from './context/GameStateContext';
import { HardTextProvider } from './context/HardWordsContext';
import './index.css';
import BagPage, { CultureNotesTab, WordsTab } from './pages/BagPage';
import MainPage from './pages/MainPage';
import RandomShuffleGamePage from './pages/RandomShuffleGamePage';
import SearchPage from './pages/SearchPage';
import SummaryPage from './pages/SummaryPage';
import { DrawerLayout } from './pages/common/DrawerLayout';

const router = createBrowserRouter([
    {
        path: '/',
        Component: DrawerLayout,
        children: [
            {
                path: '/',
                Component: MainPage,
            },
            {
                path: '/game/shuffle',
                Component: RandomShuffleGamePage,
            },
            {
                path: '/game/summary',
                Component: SummaryPage,
            },
            {
                path: '/search',
                Component: SearchPage,
            },
            {
                path: '/bags/:bagId',
                Component: BagPage,
                children: [
                    {
                        path: 'words',
                        Component: WordsTab,
                        handle: {
                            tab: 'words',
                        },
                    },
                    {
                        path: 'cultureNotes',
                        Component: CultureNotesTab,
                        handle: {
                            tab: 'cultureNotes',
                        },
                    },
                ],
            },
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root element not found');
}

createRoot(root).render(
    <StrictMode>
        <DrawerProvider>
            <HardTextProvider>
                <GameSettingsProvider>
                    <GameContextProvider>
                        <RouterProvider router={router} />
                    </GameContextProvider>
                </GameSettingsProvider>
            </HardTextProvider>
        </DrawerProvider>
    </StrictMode>,
);
