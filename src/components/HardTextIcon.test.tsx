import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { HardTextIcon } from './HardTextIcon';
import { HardTextContext, type HardTextContextType } from '../context/HardWordsContext/HardTextContext';
import type { TranslatedJapaneseText } from '../japanese';

const mockWord: TranslatedJapaneseText = {
    type: 'noun',
    en: 'cat',
    pl: 'kot',
    jp: { text: '猫', pronunciation: 'ねこ' },
};

const renderWithContext = (ui: React.ReactNode, contextValue: HardTextContextType) => {
    return render(<HardTextContext.Provider value={contextValue}>{ui}</HardTextContext.Provider>);
};

const createMockContext = (isHard: boolean): HardTextContextType => ({
    isHardText: vi.fn(() => isHard),
    toggleHardText: vi.fn(),
});

describe('HardTextIcon', () => {
    it('renders an unfilled star when the word is not hard', () => {
        const context = createMockContext(false);
        renderWithContext(<HardTextIcon word={mockWord} />, context);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button.querySelector('.tabler-icon-star')).toBeInTheDocument();
        expect(button.querySelector('.tabler-icon-star-filled')).not.toBeInTheDocument();
    });

    it('renders a filled star when the word is hard', () => {
        const context = createMockContext(true);
        renderWithContext(<HardTextIcon word={mockWord} />, context);

        const button = screen.getByRole('button');
        expect(button.querySelector('.tabler-icon-star-filled')).toBeInTheDocument();
    });

    it('calls toggleHardText with the word when clicked', async () => {
        const user = userEvent.setup();
        const context = createMockContext(false);
        renderWithContext(<HardTextIcon word={mockWord} />, context);

        await user.click(screen.getByRole('button'));

        expect(context.toggleHardText).toHaveBeenCalledOnce();
        expect(context.toggleHardText).toHaveBeenCalledWith(mockWord);
    });

    it('stops event propagation on click', async () => {
        const context = createMockContext(false);
        const handleParentClick = vi.fn();

        render(
            <HardTextContext.Provider value={context}>
                <div onClick={handleParentClick}>
                    <HardTextIcon word={mockWord} />
                </div>
            </HardTextContext.Provider>,
        );

        const user = userEvent.setup();
        await user.click(screen.getByRole('button'));

        expect(context.toggleHardText).toHaveBeenCalledOnce();
        expect(handleParentClick).not.toHaveBeenCalled();
    });

    it('uses md icon size (24) by default', () => {
        const context = createMockContext(false);
        renderWithContext(<HardTextIcon word={mockWord} />, context);

        const svg = screen.getByRole('button').querySelector('svg');
        expect(svg).toHaveAttribute('width', '24');
        expect(svg).toHaveAttribute('height', '24');
    });

    it('uses sm icon size (20) when size="sm"', () => {
        const context = createMockContext(false);
        renderWithContext(<HardTextIcon word={mockWord} size="sm" />, context);

        const svg = screen.getByRole('button').querySelector('svg');
        expect(svg).toHaveAttribute('width', '20');
        expect(svg).toHaveAttribute('height', '20');
    });

    it('calls isHardText with the provided word', () => {
        const context = createMockContext(false);
        renderWithContext(<HardTextIcon word={mockWord} />, context);

        expect(context.isHardText).toHaveBeenCalledWith(mockWord);
    });
});
