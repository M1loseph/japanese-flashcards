import { describe, expect, it } from 'vitest';
import { findBagById } from './search';
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
