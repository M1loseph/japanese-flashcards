import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainPage from './pages/MainPage.tsx';
import RandomShuffleGamePage from './pages/RandomShuffleGamePage.tsx';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './Layout.tsx';
import BagPage from './pages/BagPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
        <RouterProvider router={router} />
    </StrictMode>,
);
