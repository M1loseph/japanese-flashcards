import { describe, expect, it } from 'vitest';
import type { TranslationLanguage } from '../types/TranslationLanguage';
import { findBagById, searchWordsMatchingQuery } from './search';
import type { TranslatedJapaneseText, WordBag } from './types';
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

describe('searchWordsMatchingQuery', () => {
    const makeNoun = (
        jp: { text: string; pronunciation?: string },
        en: string,
        pl: string,
    ): TranslatedJapaneseText => ({
        id: 'e54cf70c-56c6-4a14-b98c-f1b68c163e89',
        type: 'noun',
        jp,
        en,
        pl,
    });

    const makeBag = (words: TranslatedJapaneseText[]): WordBag => ({
        id: 'e54cf70c-56c6-4a14-b98c-f1b68c163e89',
        name: 'Test bag',
        category: 'essentials',
        words,
    });

    const search = (text: TranslatedJapaneseText, query: string, selectedLanguage: TranslationLanguage = 'en') =>
        searchWordsMatchingQuery(query, selectedLanguage, 10, [makeBag([text])]);

    it('matches romaji derived from pronunciation', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(search(text, 'inu').words).toHaveLength(1);
    });

    it('falls back to text when pronunciation is absent', () => {
        const text = makeNoun({ text: 'いぬ' }, 'dog', 'pies');
        expect(search(text, 'inu').words).toHaveLength(1);
    });

    it('matches partial romaji substring', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(search(text, 'in').words).toHaveLength(1);
    });

    it('matches English translation when selected', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(search(text, 'dog').words).toHaveLength(1);
    });

    it('matches Polish translation when selected', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(search(text, 'pies', 'pl').words).toHaveLength(1);
    });

    it('matches translation case-insensitively', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'Dog', 'Pies');
        expect(search(text, 'dog').words).toHaveLength(1);
    });

    it('does not match translation in non-selected language', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(search(text, 'pies').words).toHaveLength(0);
    });

    it('returns no words when nothing matches', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(search(text, 'xyz').words).toHaveLength(0);
    });

    it('matches an exact quoted translation', () => {
        const text = makeNoun({ text: '犬', pronunciation: 'いぬ' }, 'dog', 'pies');
        expect(search(text, '"dog"').words).toHaveLength(1);
        expect(search(text, '"do"').words).toHaveLength(0);
    });
});
