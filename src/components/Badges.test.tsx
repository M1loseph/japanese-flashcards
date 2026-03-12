import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badges } from './Badges';
import type { TranslatedJapaneseText } from '../japanese/types';

const noun: TranslatedJapaneseText = {
    type: 'noun',
    en: 'cat',
    pl: 'kot',
    jp: { text: 'ねこ', pronunciation: 'ねこ' },
};

const nounWithKanji: TranslatedJapaneseText = {
    type: 'noun',
    en: 'cat',
    pl: 'kot',
    jp: { text: '猫', pronunciation: 'ねこ' },
};

const verb: TranslatedJapaneseText = {
    type: 'verb',
    en: 'to eat',
    pl: 'jeść',
    jp: { text: '食べる', pronunciation: 'たべる' },
    verb_type: 'ichidan',
    present: {
        masu: {
            affirmative: { text: '食べます', pronunciation: 'たべます' },
            negative: { text: '食べません', pronunciation: 'たべません' },
        },
    },
};

const godanVerb: TranslatedJapaneseText = {
    type: 'verb',
    en: 'to drink',
    pl: 'pić',
    jp: { text: '飲む', pronunciation: 'のむ' },
    verb_type: 'godan',
    present: {
        masu: {
            affirmative: { text: '飲みます', pronunciation: 'のみます' },
            negative: { text: '飲みません', pronunciation: 'のみません' },
        },
    },
};

const auxiliaryVerb: TranslatedJapaneseText = {
    type: 'verb',
    en: 'to be',
    pl: 'być',
    jp: { text: 'だ', pronunciation: 'だ' },
    verb_type: 'auxiliary',
};

const irregularVerb: TranslatedJapaneseText = {
    type: 'verb',
    en: 'to do',
    pl: 'robić',
    jp: { text: 'する', pronunciation: 'する' },
    verb_type: 'irregular',
    present: {
        masu: {
            affirmative: { text: 'します', pronunciation: 'します' },
            negative: { text: 'しません', pronunciation: 'しません' },
        },
    },
};

const iAdjective: TranslatedJapaneseText = {
    type: 'adjective',
    en: 'big',
    pl: 'duży',
    jp: { text: '大きい', pronunciation: 'おおきい' },
    adjective_type: 'i-adjective',
};

const naAdjective: TranslatedJapaneseText = {
    type: 'adjective',
    en: 'quiet',
    pl: 'cichy',
    jp: { text: '静か', pronunciation: 'しずか' },
    adjective_type: 'na-adjective',
};

const phrase: TranslatedJapaneseText = {
    type: 'phrase',
    en: 'good morning',
    pl: 'dzień dobry',
    jp: { text: 'おはようございます', pronunciation: 'おはようございます' },
};

const unknownWord: TranslatedJapaneseText = {
    type: 'unknown',
    en: 'something',
    pl: 'coś',
    jp: { text: 'なにか', pronunciation: 'なにか' },
};

describe('Badges', () => {
    describe('type badges', () => {
        it('renders a noun badge', () => {
            render(<Badges card={noun} />);
            expect(screen.getByText('noun')).toBeInTheDocument();
        });

        it('renders a verb badge', () => {
            render(<Badges card={verb} />);
            expect(screen.getByText('verb')).toBeInTheDocument();
        });

        it('renders an adjective badge', () => {
            render(<Badges card={iAdjective} />);
            expect(screen.getByText('adjective')).toBeInTheDocument();
        });

        it('renders a phrase badge', () => {
            render(<Badges card={phrase} />);
            expect(screen.getByText('phrase')).toBeInTheDocument();
        });

        it('does not render a type badge for unknown type', () => {
            render(<Badges card={unknownWord} />);
            expect(screen.queryByText('unknown')).not.toBeInTheDocument();
        });

        it.each([
            ['adverb', 'adverb'],
            ['pronoun', 'pronoun'],
            ['suffix', 'suffix'],
            ['numeral', 'numeral'],
            ['pre-noun-adjective', 'pre-noun-adjective'],
            ['particle', 'particle'],
            ['conjunction', 'conjunction'],
        ] as const)('renders a %s badge', (type, expectedText) => {
            const card: TranslatedJapaneseText = {
                type,
                en: 'test',
                pl: 'test',
                jp: { text: 'テスト', pronunciation: 'テスト' },
            };
            render(<Badges card={card} />);
            expect(screen.getByText(expectedText)).toBeInTheDocument();
        });
    });

    describe('kanji badge', () => {
        it('renders a kanji badge when text contains kanji', () => {
            render(<Badges card={nounWithKanji} />);
            expect(screen.getByText('kanji')).toBeInTheDocument();
        });

        it('does not render a kanji badge when text has no kanji', () => {
            render(<Badges card={noun} />);
            expect(screen.queryByText('kanji')).not.toBeInTheDocument();
        });
    });

    describe('verb type badges', () => {
        it('renders ichidan (ru) badge for ichidan verbs', () => {
            render(<Badges card={verb} />);
            expect(screen.getByText('ichidan (ru)')).toBeInTheDocument();
        });

        it('renders godan (u) badge for godan verbs', () => {
            render(<Badges card={godanVerb} />);
            expect(screen.getByText('godan (u)')).toBeInTheDocument();
        });

        it('renders irregular badge for irregular verbs', () => {
            render(<Badges card={irregularVerb} />);
            expect(screen.getByText('irregular')).toBeInTheDocument();
        });

        it('renders auxiliary badge for auxiliary verbs', () => {
            render(<Badges card={auxiliaryVerb} />);
            expect(screen.getByText('auxiliary')).toBeInTheDocument();
        });

        it('hides verb type badge when showAnswer is false', () => {
            render(<Badges card={verb} showAnswer={false} />);
            const verbTypeBadge = screen.getByText('ichidan (ru)');
            expect(verbTypeBadge).toHaveClass('opacity-0');
        });

        it('shows verb type badge when showAnswer is true', () => {
            render(<Badges card={verb} showAnswer={true} />);
            const verbTypeBadge = screen.getByText('ichidan (ru)');
            expect(verbTypeBadge).toBeVisible();
        });
    });

    describe('adjective type badges', () => {
        it('renders i adjective badge', () => {
            render(<Badges card={iAdjective} />);
            expect(screen.getByText('i adjective')).toBeInTheDocument();
        });

        it('renders na adjective badge', () => {
            render(<Badges card={naAdjective} />);
            expect(screen.getByText('na adjective')).toBeInTheDocument();
        });

        it('hides adjective type badge when showAnswer is false', () => {
            render(<Badges card={iAdjective} showAnswer={false} />);
            const adjTypeBadge = screen.getByText('i adjective');
            expect(adjTypeBadge).toHaveClass('opacity-0');
        });

        it('shows adjective type badge when showAnswer is true', () => {
            render(<Badges card={naAdjective} showAnswer={true} />);
            const adjTypeBadge = screen.getByText('na adjective');
            expect(adjTypeBadge).toBeVisible();
        });
    });

    describe('size prop', () => {
        it('applies badge-lg class by default', () => {
            render(<Badges card={noun} />);
            const badge = screen.getByText('noun');
            expect(badge).toHaveClass('badge-lg');
        });

        it('applies badge-sm class when size is sm', () => {
            render(<Badges card={noun} size="sm" />);
            const badge = screen.getByText('noun');
            expect(badge).toHaveClass('badge-sm');
        });

        it('does not apply badge-sm or badge-lg when size is md', () => {
            render(<Badges card={noun} size="md" />);
            const badge = screen.getByText('noun');
            expect(badge).not.toHaveClass('badge-sm');
            expect(badge).not.toHaveClass('badge-lg');
        });
    });

    describe('multiple badges', () => {
        it('renders both type and kanji badges for a noun with kanji', () => {
            render(<Badges card={nounWithKanji} />);
            expect(screen.getByText('noun')).toBeInTheDocument();
            expect(screen.getByText('kanji')).toBeInTheDocument();
        });

        it('renders type, kanji, and verb type badges for a verb with kanji', () => {
            render(<Badges card={verb} />);
            expect(screen.getByText('verb')).toBeInTheDocument();
            expect(screen.getByText('kanji')).toBeInTheDocument();
            expect(screen.getByText('ichidan (ru)')).toBeInTheDocument();
        });

        it('renders type, kanji, and adjective type badges for an adjective with kanji', () => {
            render(<Badges card={iAdjective} />);
            expect(screen.getByText('adjective')).toBeInTheDocument();
            expect(screen.getByText('kanji')).toBeInTheDocument();
            expect(screen.getByText('i adjective')).toBeInTheDocument();
        });
    });
});
