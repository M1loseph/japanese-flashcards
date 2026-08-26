import { describe, expect, it, vi } from 'vitest';
import { mapPronunciation } from './utils';

describe('mapPronunciation', () => {
    it('returns undefined without calling the mapper when pronunciation is absent', () => {
        const mapFunction = vi.fn((pronunciation: string) => pronunciation.toUpperCase());

        expect(mapPronunciation(undefined, mapFunction)).toBeUndefined();
        expect(mapFunction).not.toHaveBeenCalled();
    });

    it('maps a single pronunciation string', () => {
        const mapFunction = vi.fn((pronunciation: string) => `mapped:${pronunciation}`);

        expect(mapPronunciation('ねこ', mapFunction)).toBe('mapped:ねこ');
        expect(mapFunction).toHaveBeenCalledOnce();
        expect(mapFunction).toHaveBeenCalledWith('ねこ');
    });

    it('maps each pronunciation in an array while preserving order', () => {
        const pronunciation = ['ねこ', 'ネコ'];
        const mapFunction = vi.fn((value: string) => `mapped:${value}`);

        expect(mapPronunciation(pronunciation, mapFunction)).toEqual(['mapped:ねこ', 'mapped:ネコ']);
        expect(mapFunction).toHaveBeenCalledTimes(2);
        expect(mapFunction.mock.calls.map(([value]) => value)).toEqual(pronunciation);
        expect(pronunciation).toEqual(['ねこ', 'ネコ']);
    });
});
