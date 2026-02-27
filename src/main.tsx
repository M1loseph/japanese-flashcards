import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainPage from './pages/MainPage.tsx';
import RandomShuffleGamePage from './pages/RandomShuffleGamePage.tsx';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import BagPage from './pages/BagPage';
import { GameSettingsProvider } from './context/GameStateContext';
import { GameContextProvider } from './context/GameContext';
import { HardWordsProvider } from './context/HardWordsContext';
import SummaryPage from './pages/SummaryPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/game/shuffle',
                element: <RandomShuffleGamePage />,
            },
            {
                path: '/game/summary',
                element: <SummaryPage />,
            },
            {
                path: '/bags/:bagId',
                element: <BagPage />,
            },
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HardWordsProvider>
            <GameSettingsProvider>
                <GameContextProvider>
                    <RouterProvider router={router} />
                </GameContextProvider>
            </GameSettingsProvider>
        </HardWordsProvider>
    </StrictMode>,
);
