import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import MainPage from './pages/MainPage.tsx';
import RandomShuffleGamePage from './pages/RandomShuffleGamePage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/game/shuffle",
                element: <RandomShuffleGamePage />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
