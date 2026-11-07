import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Sidebar } from './Sidebar';

vi.mock('../services/DrawerContext', () => ({
    useDrawer: () => ({ toggleDrawer: vi.fn() }),
}));

describe('Sidebar', () => {
    it('renders the local development version below the scrollable navigation', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>,
        );

        const version = screen.getByText('Version Local Development');
        const menu = screen.getByRole('list');

        expect(version).toHaveClass('shrink-0', 'border-t');
        expect(menu).toHaveClass('flex-1', 'overflow-y-auto');
    });
});
