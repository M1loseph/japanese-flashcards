import { describe, expect, it } from 'vitest';
import { findBagById, textMatchesQuery } from './search';
import type { TranslatedJapaneseText } from './types';
import { familyBag } from './vocabulary/family';

describe('findBagById', () => {
    it('returns the correct bag for a valid id', () => {
        const result = findBagById(familyBag.id);
        expect(result).toBe(familyBag);
    });

    it('returns undefined for an unknown id', () => {
        const result = findBagById('non-existent-id');
        expect(result).toBeUndefined();
    });
});

describe('textMatchesQuery', () => {
    const makeNoun = (
        jp: { text: string; pronunciation?: string },
        en: string,
        pl: string,
    ): TranslatedJapaneseText => ({
        type: 'noun',
        jp,
        en,
        pl,
    });

    it('matches romaji derived from pronunciation', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(textMatchesQuery(text, 'inu', 'en')).toBe(true);
    });

    it('falls back to text when pronunciation is absent', () => {
        const text = makeNoun({ text: 'いぬ' }, 'dog', 'pies');
        expect(textMatchesQuery(text, 'inu', 'en')).toBe(true);
    });

    it('matches partial romaji substring', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(textMatchesQuery(text, 'in', 'en')).toBe(true);
    });

    it('matches English translation when selected', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(textMatchesQuery(text, 'dog', 'en')).toBe(true);
    });

    it('matches Polish translation when selected', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(textMatchesQuery(text, 'pies', 'pl')).toBe(true);
    });

    it('matches translation case-insensitively', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'Dog', 'Pies');
        expect(textMatchesQuery(text, 'dog', 'en')).toBe(true);
    });

    it('does not match translation in non-selected language', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(textMatchesQuery(text, 'pies', 'en')).toBe(false);
    });

    it('returns false when nothing matches', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(textMatchesQuery(text, 'xyz', 'en')).toBe(false);
    });
});
