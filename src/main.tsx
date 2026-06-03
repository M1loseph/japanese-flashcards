import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';
import BagPage, { CultureNotesTab, WordsTab } from './pages/BagPage';
import { DrawerLayout } from './pages/common/DrawerLayout';
import DataManagementPage from './pages/DataManagementPage';
import MainPage from './pages/MainPage';
import RandomShuffleGamePage from './pages/RandomShuffleGamePage';
import SearchPage from './pages/SearchPage';
import { SpacedRepetitionSystemPage } from './pages/SpacedRepetitionSystem';
import SummaryPage from './pages/SummaryPage';
import { queryClient } from './queryClient';
import { DrawerProvider } from './services/DrawerContext';
import { GameContextProvider } from './services/GameContext';
import { GameSettingsProvider } from './services/GameStateContext';
import { HardTextProvider } from './services/HardWordsContext';
import { StreakContextProvider } from './services/StreakContext';

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
                path: '/srs',
                Component: SpacedRepetitionSystemPage,
            },
            {
                path: '/data-management',
                Component: DataManagementPage,
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
        <QueryClientProvider client={queryClient}>
            <DrawerProvider>
                <HardTextProvider>
                    <StreakContextProvider>
                        <GameSettingsProvider>
                            <GameContextProvider>
                                <RouterProvider router={router} />
                            </GameContextProvider>
                        </GameSettingsProvider>
                    </StreakContextProvider>
                </HardTextProvider>
            </DrawerProvider>
        </QueryClientProvider>
    </StrictMode>,
);
