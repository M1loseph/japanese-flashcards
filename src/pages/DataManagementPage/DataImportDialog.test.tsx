import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { HardTextContext, type HardTextContextType } from '../../services/HardWordsContext/HardTextContext';
import { db } from '../../services/SRS/srsdb';
import type { ExportedData } from '../../types/ExportedData';
import { DataImportDialog } from './DataImportDialog';

const importedApplicationState: ExportedData = {
    version: 1,
    srsWords: [],
    hardText: ['imported-hard', 'shared-hard'],
};

const createHardTextContext = (): HardTextContextType => ({
    isHardText: vi.fn(() => false),
    toggleHardText: vi.fn(),
    getHardTextList: vi.fn(() => []),
    overrideHardTextList: vi.fn(),
});

const renderDataImportDialog = (hardText: readonly string[]) => {
    const hardTextContext = createHardTextContext();
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { retry: false },
            mutations: { retry: false },
        },
    });

    const { container } = render(
        <QueryClientProvider client={queryClient}>
            <HardTextContext.Provider value={hardTextContext}>
                <DataImportDialog
                    importedApplicationState={importedApplicationState}
                    currentSrsWords={[]}
                    hardText={hardText}
                    handleCloseDialog={vi.fn()}
                    handleShowErrorToast={vi.fn()}
                />
            </HardTextContext.Provider>
        </QueryClientProvider>,
    );

    return { hardTextContext, container };
};

beforeEach(async () => {
    await db.wordProgress.clear();
});

afterEach(async () => {
    await db.wordProgress.clear();
    vi.restoreAllMocks();
});

describe('DataImportDialog', () => {
    it('merges imported hard words with the current list without duplicates', async () => {
        const user = userEvent.setup();
        const { hardTextContext } = renderDataImportDialog(['existing-hard', 'shared-hard']);

        await user.click(screen.getByText('Merge data'));

        await waitFor(() => expect(hardTextContext.overrideHardTextList).toHaveBeenCalledOnce());
        expect(hardTextContext.overrideHardTextList).toHaveBeenCalledWith([
            'existing-hard',
            'shared-hard',
            'imported-hard',
        ]);
    });

    it('overwrites the current hard word list when merging is disabled', async () => {
        const user = userEvent.setup();
        const { hardTextContext, container } = renderDataImportDialog(['existing-hard', 'shared-hard']);
        const mergeCheckbox = container.querySelector<HTMLInputElement>('input[type="checkbox"]');

        if (!mergeCheckbox) {
            throw new Error('Expected the merge checkbox to be rendered.');
        }

        await user.click(mergeCheckbox);
        await user.click(screen.getByText("I know what I'm doing, import data"));

        await waitFor(() => expect(hardTextContext.overrideHardTextList).toHaveBeenCalledOnce());
        expect(hardTextContext.overrideHardTextList).toHaveBeenCalledWith(['imported-hard', 'shared-hard']);
    });
});
