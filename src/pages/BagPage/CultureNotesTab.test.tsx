import { render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import type { WordBag } from '../../japanese/types';
import { CultureNotesTab } from './CultureNotesTab';

const bag: WordBag = {
    id: 'ea053297-9592-45fc-be6e-6a48da0980d1',
    name: 'Test bag',
    category: 'counting',
    words: [],
    cultureNotes: [],
};

const renderCultureNotes = (wordBag: WordBag) =>
    render(
        <MemoryRouter initialEntries={[`/bags/${wordBag.id}/cultureNotes`]}>
            <Routes>
                <Route path="/bags/:bagId" element={<Outlet context={wordBag} />}>
                    <Route path="cultureNotes" element={<CultureNotesTab />} />
                    <Route path="words" element={<p>Words page</p>} />
                </Route>
            </Routes>
        </MemoryRouter>,
    );

describe('CultureNotesTab', () => {
    it('renders headings and paragraphs with inline formatting', () => {
        renderCultureNotes({
            ...bag,
            cultureNotes: [
                { type: 'h3', text: 'Floor numbering' },
                { type: 'p', text: 'A plain paragraph.' },
                {
                    type: 'p',
                    text: [
                        'Before ',
                        { type: 'strong', text: 'important' },
                        ' and ',
                        { type: 'em', text: 'emphasis' },
                        ' after.',
                    ],
                },
            ],
        });

        expect(screen.getByRole('article').innerHTML).toBe(
            '<h3>Floor numbering</h3><p>A plain paragraph.</p><p>Before <strong>important</strong> and <em>emphasis</em> after.</p>',
        );
    });

    it('redirects to words when culture notes are absent', async () => {
        renderCultureNotes({ ...bag, cultureNotes: undefined });

        expect(await screen.findByText('Words page')).toBeInTheDocument();
    });

    it('redirects to words when culture notes are empty', async () => {
        renderCultureNotes(bag);

        expect(await screen.findByText('Words page')).toBeInTheDocument();
    });
});
