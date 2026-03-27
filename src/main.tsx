import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainPage from './pages/MainPage';
import RandomShuffleGamePage from './pages/RandomShuffleGamePage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import BagPage, { CultureNotesTab, WordsTab } from './pages/BagPage';
import { GameSettingsProvider } from './context/GameStateContext';
import { GameContextProvider } from './context/GameContext';
import { HardTextProvider } from './context/HardWordsContext';
import SummaryPage from './pages/SummaryPage';

const router = createBrowserRouter([
    {
        path: '/',
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
        <HardTextProvider>
            <GameSettingsProvider>
                <GameContextProvider>
                    <RouterProvider router={router} />
                </GameContextProvider>
            </GameSettingsProvider>
        </HardTextProvider>
    </StrictMode>,
);
