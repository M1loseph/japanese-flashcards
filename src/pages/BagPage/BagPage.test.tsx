import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { findBagById } from '../../japanese';
import type { WordBag } from '../../japanese/types';
import { ApplicationUserSettingProvider } from '../../services/ApplicationUserSetting';
import { DrawerProvider } from '../../services/DrawerContext';
import BagPage from './BagPage';

vi.mock('../../japanese', () => ({
    findBagById: vi.fn(),
}));

describe('BagPage', () => {
    beforeEach(() => {
        vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it.each([
        { notes: [], visible: false },
        { notes: [{ type: 'h3' as const, text: 'Notes' }], visible: true },
    ])('shows the culture notes tab only when notes are present', async ({ notes, visible }) => {
        const bag: WordBag = {
            id: 'ea053297-9592-45fc-be6e-6a48da0980d1',
            name: 'Test bag',
            category: 'counting',
            words: [],
            cultureNotes: notes,
        };
        vi.mocked(findBagById).mockReturnValue(bag);
        const router = createMemoryRouter(
            [
                {
                    path: '/bags/:bagId',
                    Component: BagPage,
                    children: [{ path: 'words', element: <p>Words page</p>, handle: { tab: 'words' } }],
                },
            ],
            { initialEntries: [`/bags/${bag.id}/words`] },
        );

        render(
            <DrawerProvider>
                <ApplicationUserSettingProvider>
                    <RouterProvider router={router} />
                </ApplicationUserSettingProvider>
            </DrawerProvider>,
        );

        expect(await screen.findByText('Words page')).toBeInTheDocument();
        expect(screen.queryByRole('tab', { name: 'Culture Notes tab' }) !== null).toBe(visible);
    });
});
