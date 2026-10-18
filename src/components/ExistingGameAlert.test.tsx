import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { GameContext } from '../services/GameContext';
import type { GameState } from '../types/GameState';
import { ExistingGameAlert } from './ExistingGameAlert';

const renderAlert = (gameState: GameState | undefined) => {
    const router = createMemoryRouter([{ path: '*', element: <ExistingGameAlert /> }], {
        initialEntries: ['/'],
    });

    render(
        <GameContext.Provider
            value={{
                gameState,
                clearGame: () => undefined,
                markCurrentFlashcard: async () => undefined,
                createNewGameFromWrongAnswers: () => undefined,
                createNewGame: () => undefined,
                skipRemainingFlashcards: async () => undefined,
                undoLastAction: () => undefined,
            }}
        >
            <RouterProvider router={router} />
        </GameContext.Provider>,
    );

    return router;
};

const createGameState = (type: GameState['type']): GameState => {
    const gameState = {
        version: 1 as const,
        title: 'Kana practice',
        gameType: 'practice' as const,
        flashcards: [
            { wordId: 'word-1', answered: true, correct: true },
            { wordId: 'word-2', answered: false, correct: false },
            { wordId: 'word-3', answered: true, correct: false },
        ],
        gameStartTimeMs: 1_000,
    };

    if (type === 'in-progress') {
        return { ...gameState, type, currentFlashcardIndex: 2 };
    }

    return { ...gameState, type, gameEndTimeMs: 2_000 };
};

describe('ExistingGameAlert', () => {
    it('does not render without an existing game', () => {
        renderAlert(undefined);

        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    it('renders an in-progress game with its answered card count', () => {
        renderAlert(createGameState('in-progress'));

        expect(screen.getByRole('alert')).toHaveTextContent('Kana practice (2/3)');
    });

    it('renders a finished game and resumes it', () => {
        const router = renderAlert(createGameState('finished'));

        expect(screen.getByRole('alert')).toHaveTextContent('Kana practice (2/3)');

        fireEvent.click(screen.getByRole('button', { name: 'Resume current game' }));

        expect(router.state.location.pathname).toBe('/game/shuffle');
    });
});
