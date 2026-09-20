import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ComponentProps, ReactNode } from 'react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { GameContext } from '../../services/GameContext';
import type { GameState } from '../../types/GameState';
import SummaryPage from './SummaryPage';

vi.mock('./Confetti', () => ({
    Confetti: () => null,
}));

vi.mock('./useCountUp', () => ({
    useCountUp: (target: number) => target,
}));

vi.mock('../common/FixedSizePage', () => ({
    FixedSizePage: ({
        children,
        preHomeNavigationHook,
    }: {
        children: ReactNode;
        preHomeNavigationHook?: () => void;
    }) => (
        <>
            <button type="button" aria-label="Home" onClick={preHomeNavigationHook}>
                Home
            </button>
            {children}
        </>
    ),
}));

type GameContextValue = NonNullable<ComponentProps<typeof GameContext.Provider>['value']>;

const createGameContextValue = (gameState: GameState | undefined): GameContextValue => ({
    gameState,
    clearGame: vi.fn(),
    markCurrentFlashcard: vi.fn(async () => {}),
    createNewGameFromWrongAnswers: vi.fn(),
    createNewGame: vi.fn(),
    skipRemainingFlashcards: vi.fn(async () => {}),
    undoLastAction: vi.fn(),
});

const createFinishedGameState = (
    correctAnswers: boolean[],
    gameEndTimeMs: number = 65_000,
    gameType: GameState['gameType'] = 'practice',
): GameState => ({
    version: 1,
    type: 'finished',
    title: 'Test session',
    gameType,
    flashcards: correctAnswers.map((correct, index) => ({
        wordId: `word-${index}`,
        answered: true,
        correct,
    })),
    gameStartTimeMs: 0,
    gameEndTimeMs,
});

const CurrentLocation = () => {
    const { pathname } = useLocation();
    return <output data-testid="location">{pathname}</output>;
};

const renderSummaryPage = (gameState: GameState | undefined) => {
    const gameContextValue = createGameContextValue(gameState);

    const renderResult = render(
        <MemoryRouter initialEntries={['/game/summary']}>
            <GameContext.Provider value={gameContextValue}>
                <Routes>
                    <Route path="/game/summary" element={<SummaryPage />} />
                    <Route path="*" element={<CurrentLocation />} />
                </Routes>
            </GameContext.Provider>
        </MemoryRouter>,
    );

    return { gameContextValue, ...renderResult };
};

describe('SummaryPage', () => {
    it('redirects home when no game is active', async () => {
        renderSummaryPage(undefined);

        await waitFor(() => expect(screen.getByTestId('location')).toHaveTextContent('/'));
    });

    it('redirects to the shuffle game when the game is in progress', async () => {
        const gameState: GameState = {
            version: 1,
            type: 'in-progress',
            title: 'Test session',
            gameType: 'practice',
            flashcards: [],
            gameStartTimeMs: 0,
            currentFlashcardIndex: 0,
        };

        renderSummaryPage(gameState);

        await waitFor(() => expect(screen.getByTestId('location')).toHaveTextContent('/game/shuffle'));
    });

    it('renders cards, accuracy, label, color, and elapsed time for a finished game', () => {
        renderSummaryPage(createFinishedGameState([true, true, true, false]));

        expect(screen.getByText('4')).toBeInTheDocument();
        expect(screen.getByText('75%')).toBeInTheDocument();
        expect(screen.getByText('Medium')).toHaveClass('text-warning');
        expect(screen.getByText('01:05')).toBeInTheDocument();
    });

    it.each([
        {
            correctAnswers: [true, true, true, true, true, true, true, true, true, false],
            label: 'High',
            color: 'text-success',
        },
        {
            correctAnswers: [true, true, true, true, true, true, true, false, false, false],
            label: 'Medium',
            color: 'text-warning',
        },
        {
            correctAnswers: [true, true, true, true, true, true, false, false, false, false],
            label: 'Low',
            color: 'text-error',
        },
    ])('uses the $label accuracy label and color', ({ correctAnswers, label, color }) => {
        renderSummaryPage(createFinishedGameState(correctAnswers));

        expect(screen.getByText(label)).toHaveClass(color);
    });

    it('starts a new shuffle game from the wrong answers', async () => {
        const user = userEvent.setup();
        const { gameContextValue } = renderSummaryPage(createFinishedGameState([true, false]));

        await user.click(screen.getByRole('button', { name: 'Repeat 1 mistakes' }));

        expect(gameContextValue.createNewGameFromWrongAnswers).toHaveBeenCalledOnce();
        await waitFor(() => expect(screen.getByTestId('location')).toHaveTextContent('/game/shuffle'));
    });

    it('disables repeating when the finished game has no wrong answers', () => {
        const { gameContextValue } = renderSummaryPage(createFinishedGameState([true, true]));

        expect(screen.getByRole('button', { name: 'Repeat 0 mistakes' })).toBeDisabled();
        expect(screen.getByText('No Mistakes!')).toBeInTheDocument();
        expect(gameContextValue.createNewGameFromWrongAnswers).not.toHaveBeenCalled();
    });

    it.each([
        { gameType: 'practice', destination: '/' },
        { gameType: 'srs', destination: '/srs' },
    ] as const)('returns $gameType games to $destination and clears them', async ({ gameType, destination }) => {
        const user = userEvent.setup();
        const { gameContextValue } = renderSummaryPage(createFinishedGameState([true], 65_000, gameType));

        await user.click(screen.getByRole('button', { name: 'Go back to decks' }));

        await waitFor(() => expect(screen.getByTestId('location')).toHaveTextContent(destination));
        await waitFor(() => expect(gameContextValue.clearGame).toHaveBeenCalledOnce());
    });

    it.each([
        { correctAnswers: [true, true], clearsGame: true },
        { correctAnswers: [true, false], clearsGame: false },
    ])('clears the game before home navigation only when accuracy is 100%', async ({ correctAnswers, clearsGame }) => {
        const user = userEvent.setup();
        const { gameContextValue } = renderSummaryPage(createFinishedGameState(correctAnswers));

        await user.click(screen.getByRole('button', { name: 'Home' }));

        if (clearsGame) {
            expect(gameContextValue.clearGame).toHaveBeenCalledOnce();
            return;
        }
        expect(gameContextValue.clearGame).not.toHaveBeenCalled();
    });
});
