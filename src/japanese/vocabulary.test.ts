import { describe, expect, it } from 'vitest';
import { availableWordBags } from './search';
import type { TranslatedJapaneseText } from './types';

describe('vocabulary', () => {
    it('all texts should not start or end with whitespace', () => {
        availableWordBags.forEach((bag) => {
            bag.words.forEach((word) => {
                const texts = [
                    word.en,
                    word.pl,
                    word.jp.text,
                    ...(typeof word.jp.pronunciation === 'string'
                        ? [word.jp.pronunciation]
                        : (word.jp.pronunciation ?? [])),
                ];
                texts.forEach((text) => {
                    expect(text).toBe(text.trim());
                });
            });
        });
    });

    it('all word ids should be unique', () => {
        const allWords: TranslatedJapaneseText[] = availableWordBags.flatMap((bag) => bag.words);
        const ids = allWords.map((word) => word.id);
        const uniqueIds = new Set(ids);

        expect(uniqueIds.size).toBe(ids.length);
    });

    it('all bag ids should be unique', () => {
        const bagIds = availableWordBags.map((bag) => bag.id);
        const uniqueBagIds = new Set(bagIds);
        expect(uniqueBagIds.size).toBe(bagIds.length);
    });

    it('all phrases that end with period in English or Polish should also end with period in Japanese', () => {
        // TODO: Remove the exception after fixing the inconsistent punctuation in this phrase
        const exceptions = [
            '87cc4b6a-27a0-4c38-847e-32d3581088c0',
            '07f1820b-31fc-4a05-a932-f6e0278a6046',
            '67b581ee-e495-4fa7-8021-f7f2c038166b',
            '274f644a-d4cc-4575-b213-d8ac8761eb44',
        ];

        const allowedPunctuationInPl = ['.', '!', '?'];
        const allowedPunctuationInEn = ['.', '!', '?'];
        const allowedPunctuationInJp = ['。', '！', '？', '…'];

        availableWordBags.forEach((bag) => {
            bag.words.forEach((word) => {
                if (word.type === 'phrase' && !exceptions.includes(word.id)) {
                    const endsWithPunctuationInEn = allowedPunctuationInEn.some((p) => word.en.endsWith(p));
                    const endsWithPunctuationInPl = allowedPunctuationInPl.some((p) => word.pl.endsWith(p));
                    const endsWithPunctuationInJpText = allowedPunctuationInJp.some((p) => word.jp.text.endsWith(p));
                    const endsWithPunctuationInJpPronunciation = (() => {
                        const pronunciation = word.jp.pronunciation;
                        if (pronunciation === undefined) return false;
                        if (typeof pronunciation === 'string') {
                            return allowedPunctuationInJp.some((p) => pronunciation.endsWith(p));
                        } else {
                            return pronunciation.some((p) => allowedPunctuationInJp.some((punct) => p.endsWith(punct)));
                        }
                    })();

                    expect(
                        endsWithPunctuationInEn || endsWithPunctuationInPl,
                        `Phrase ${word.id} has inconsistent punctuation`,
                    ).toBe(endsWithPunctuationInJpText);

                    if (word.jp.pronunciation !== undefined) {
                        expect(
                            endsWithPunctuationInEn || endsWithPunctuationInPl,
                            `Phrase ${word.id} has inconsistent punctuation in pronunciation`,
                        ).toBe(endsWithPunctuationInJpPronunciation);
                    }
                }
            });
        });
    });
});
