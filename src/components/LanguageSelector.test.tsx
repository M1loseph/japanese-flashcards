import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { type TranslationLanguage, TranslationLanguages } from '../types/TranslationLanguage';
import { LanguageSelector } from './LanguageSelector';

describe('LanguageSelector', () => {
    it('renders country flags alongside language names', () => {
        render(<LanguageSelector selectedLanguage={TranslationLanguages.POLISH} onSelect={vi.fn()} />);

        const polishButton = screen.getByRole('button', { name: 'Polish' });
        const englishButton = screen.getByRole('button', { name: 'English' });

        expect(polishButton.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true');
        expect(englishButton.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true');
    });

    it('calls onSelect with the chosen language', async () => {
        const onSelect = vi.fn<(language: TranslationLanguage) => void>();
        const user = userEvent.setup();

        render(<LanguageSelector selectedLanguage={TranslationLanguages.POLISH} onSelect={onSelect} />);

        await user.click(screen.getByRole('button', { name: 'English' }));

        expect(onSelect).toHaveBeenCalledWith(TranslationLanguages.ENGLISH);
    });
});
