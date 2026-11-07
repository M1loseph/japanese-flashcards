import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ApplicationUserSettingProvider } from '../../services/ApplicationUserSetting';
import { DrawerProvider } from '../../services/DrawerContext';
import { HardTextProvider } from '../../services/HardWordsContext';
import { db } from '../../services/SRS/srsdb';
import DataManagementPage from './DataManagementPage';

const renderDataManagementPage = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { retry: false },
        },
    });

    return render(
        <MemoryRouter>
            <QueryClientProvider client={queryClient}>
                <DrawerProvider>
                    <HardTextProvider>
                        <ApplicationUserSettingProvider>
                            <DataManagementPage />
                        </ApplicationUserSettingProvider>
                    </HardTextProvider>
                </DrawerProvider>
            </QueryClientProvider>
        </MemoryRouter>,
    );
};

afterEach(async () => {
    await db.wordProgress.clear();
    localStorage.clear();
    vi.restoreAllMocks();
});

describe('DataManagementPage', () => {
    it('shows counts for unchanged, upgraded, and new SRS entries in merge mode', async () => {
        await db.wordProgress.bulkAdd([
            { wordId: 'not-in-backup', level: 2, nextReview: new Date('2026-01-01T00:00:00.000Z') },
            { wordId: 'higher-current-level', level: 3, nextReview: new Date('2026-01-02T00:00:00.000Z') },
            { wordId: 'upgraded', level: 1, nextReview: new Date('2026-01-03T00:00:00.000Z') },
        ]);

        const user = userEvent.setup();
        const { container } = renderDataManagementPage();
        const fileInput = container.querySelector<HTMLInputElement>('input[type="file"]');

        if (!fileInput) {
            throw new Error('Expected the backup file input to be rendered.');
        }

        const backup = {
            version: 1,
            srsWords: [
                { wordId: 'higher-current-level', level: 2, nextReview: '2026-01-02T00:00:00.000Z' },
                { wordId: 'upgraded', level: 4, nextReview: '2026-01-03T00:00:00.000Z' },
                { wordId: 'new', level: 0, nextReview: '2026-01-04T00:00:00.000Z' },
            ],
            hardText: [],
        };
        const file = new File([JSON.stringify(backup)], 'backup.json', { type: 'application/json' });

        await user.upload(fileInput, file);

        expect(
            await screen.findByText(
                (_, element) => element?.tagName === 'LI' && element.textContent === 'Unchanged in current database: 2',
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                (_, element) =>
                    element?.tagName === 'LI' && element.textContent === 'Existing entries upgraded from backup: 1',
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                (_, element) => element?.tagName === 'LI' && element.textContent === 'New entries added: 1',
            ),
        ).toBeInTheDocument();
    });

    it('shows a specific error toast and aborts import when the backup contains duplicate SRS word IDs', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        const user = userEvent.setup();
        const { container } = renderDataManagementPage();
        const fileInput = container.querySelector<HTMLInputElement>('input[type="file"]');

        if (!fileInput) {
            throw new Error('Expected the backup file input to be rendered.');
        }

        const backup = {
            version: 1,
            srsWords: [
                { wordId: 'duplicate-word', level: 1, nextReview: '2026-01-01T00:00:00.000Z' },
                { wordId: 'duplicate-word', level: 2, nextReview: '2026-01-02T00:00:00.000Z' },
            ],
            hardText: [],
        };
        const file = new File([JSON.stringify(backup)], 'backup.json', { type: 'application/json' });

        await user.upload(fileInput, file);

        expect(
            await screen.findByText('Failed to import data: the backup contains duplicate SRS word IDs.'),
        ).toBeInTheDocument();
        expect(screen.queryByText('Merge with current data')).not.toBeInTheDocument();
    });
});
