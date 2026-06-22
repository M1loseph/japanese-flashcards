import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { TranslatedJapaneseText } from '../japanese/types';
import { addWordsToSRS } from '../services/SRS';
import { Badges } from './Badges';

const noun: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'noun',
    en: 'cat',
    pl: 'kot',
    jp: { text: 'ねこ', pronunciation: 'ねこ' },
};

const nounWithKanji: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'noun',
    en: 'cat',
    pl: 'kot',
    jp: { text: '猫', pronunciation: 'ねこ' },
};

const verb: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'verb',
    en: 'to eat',
    pl: 'jeść',
    jp: { text: '食べる', pronunciation: 'たべる' },
    verb_type: 'ichidan',
};

const godanVerb: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'verb',
    en: 'to drink',
    pl: 'pić',
    jp: { text: '飲む', pronunciation: 'のむ' },
    verb_type: 'godan',
};

const auxiliaryVerb: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'verb',
    en: 'to be',
    pl: 'być',
    jp: { text: 'だ', pronunciation: 'だ' },
    verb_type: 'auxiliary',
};

const irregularVerb: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'verb',
    en: 'to do',
    pl: 'robić',
    jp: { text: 'する' },
    verb_type: 'irregular',
    present: {
        masu: {
            affirmative: { text: 'します' },
            negative: { text: 'しません' },
        },
    },
    te_form: { text: 'して' },
};

const kuruVerb: TranslatedJapaneseText = {
    id: '4e07006f-6f50-4d76-9bca-06c8b7185cb7',
    type: 'verb',
    verb_type: 'kuru',
    en: 'Bring (a thing)',
    pl: 'Przynieść (rzecz)',
    jp: { text: '持ってくる', pronunciation: 'もってくる' },
};

const suruVerb: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'verb',
    en: 'to study',
    pl: 'uczyć się',
    jp: { text: '勉強する', pronunciation: 'べんきょうする' },
    verb_type: 'suru',
};

const iAdjective: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'adjective',
    en: 'big',
    pl: 'duży',
    jp: { text: '大きい', pronunciation: 'おおきい' },
    adjective_type: 'i-adjective',
};

const iAdjectiveIrregular: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'adjective',
    en: 'good',
    pl: 'dobry',
    jp: { text: 'いい' },
    adjective_type: 'i-adjective-irregular',
    negative: { text: 'よくない' },
};

const naAdjective: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'adjective',
    en: 'quiet',
    pl: 'cichy',
    jp: { text: '静か', pronunciation: 'しずか' },
    adjective_type: 'na-adjective',
};

const phrase: TranslatedJapaneseText = {
    id: 'd1f8c8b2-3c4e-4b8a-9f8b-2d8c8b2c4e4f',
    type: 'phrase',
    en: 'good morning',
    pl: 'dzień dobry',
    jp: { text: 'おはようございます', pronunciation: 'おはようございます' },
};

const renderCard = (card: TranslatedJapaneseText, showAnswer?: boolean, size?: 'sm' | 'md') => {
    render(
        <QueryClientProvider client={new QueryClient()}>
            <Badges card={card} showAnswer={showAnswer} size={size} />
        </QueryClientProvider>,
    );
};

describe('Badges', () => {
    describe('type badges', () => {
        it('renders a noun badge', () => {
            renderCard(noun);
            expect(screen.getByText('noun')).toBeInTheDocument();
        });

        it('renders a verb badge', () => {
            renderCard(verb);
            expect(screen.getByText('verb')).toBeInTheDocument();
        });

        it('renders an adjective badge', () => {
            renderCard(iAdjective);
            expect(screen.getByText('adjective')).toBeInTheDocument();
        });

        it('renders a phrase badge', () => {
            renderCard(phrase);
            expect(screen.getByText('phrase')).toBeInTheDocument();
        });

        it.each([
            ['adverb', 'adverb'],
            ['pronoun', 'pronoun'],
            ['suffix', 'suffix'],
            ['numeral', 'numeral'],
            ['pre-noun-adjective', 'pre-noun-adjective'],
            ['particle', 'particle'],
            ['prefix', 'prefix'],
            ['conjunction', 'conjunction'],
        ] as const)('renders a %s badge', (type, expectedText) => {
            const card: TranslatedJapaneseText = {
                id: 'b38a274b-c008-4c49-a9d7-240f86297024',
                type,
                en: 'test',
                pl: 'test',
                jp: { text: 'テスト', pronunciation: 'テスト' },
            };
            renderCard(card);
            expect(screen.getByText(expectedText)).toBeInTheDocument();
        });
    });

    describe('kanji badge', () => {
        it('renders a kanji badge when text contains kanji', () => {
            renderCard(nounWithKanji);
            expect(screen.getByText('kanji')).toBeInTheDocument();
        });

        it('does not render a kanji badge when text has no kanji', () => {
            renderCard(noun);
            expect(screen.queryByText('kanji')).not.toBeInTheDocument();
        });
    });

    describe('verb type badges', () => {
        it('renders ichidan (ru) badge for ichidan verbs', () => {
            renderCard(verb);
            expect(screen.getByText('ichidan (ru)')).toBeInTheDocument();
        });

        it('renders godan (u) badge for godan verbs', () => {
            renderCard(godanVerb);
            expect(screen.getByText('godan (u)')).toBeInTheDocument();
        });

        it('renders irregular badge for irregular verbs', () => {
            renderCard(irregularVerb);
            expect(screen.getByText('irregular')).toBeInTheDocument();
        });

        it('renders auxiliary badge for auxiliary verbs', () => {
            renderCard(auxiliaryVerb);
            expect(screen.getByText('auxiliary')).toBeInTheDocument();
        });

        it('renders suru badge for suru verbs', () => {
            renderCard(suruVerb);
            expect(screen.getByText('suru')).toBeInTheDocument();
        });

        it('renders kuru badge for kuru verbs', () => {
            renderCard(kuruVerb);
            expect(screen.getByText('kuru')).toBeInTheDocument();
        });

        it('hides verb type badge when showAnswer is false', () => {
            renderCard(verb, false);
            const verbTypeBadge = screen.getByText('ichidan (ru)');
            expect(verbTypeBadge).toHaveClass('opacity-0');
        });

        it('shows verb type badge when showAnswer is true', () => {
            renderCard(verb, true);
            const verbTypeBadge = screen.getByText('ichidan (ru)');
            expect(verbTypeBadge).toBeVisible();
        });
    });

    describe('adjective type badges', () => {
        it('renders i adjective badge', () => {
            renderCard(iAdjective);
            expect(screen.getByText('i adjective')).toBeInTheDocument();
        });

        it('renders na adjective badge', () => {
            renderCard(naAdjective);
            expect(screen.getByText('na adjective')).toBeInTheDocument();
        });

        it('renders irregular i adjective badge', () => {
            renderCard(iAdjectiveIrregular);
            expect(screen.getByText('i adjective (irregular)')).toBeInTheDocument();
        });

        it('hides adjective type badge when showAnswer is false', () => {
            renderCard(iAdjective, false);
            const adjTypeBadge = screen.getByText('i adjective');
            expect(adjTypeBadge).toHaveClass('opacity-0');
        });

        it('shows adjective type badge when showAnswer is true', () => {
            renderCard(naAdjective, true);
            const adjTypeBadge = screen.getByText('na adjective');
            expect(adjTypeBadge).toBeVisible();
        });
    });

    describe('size prop', () => {
        it('applies badge-lg class by default', () => {
            renderCard(noun);
            const badge = screen.getByText('noun');
            expect(badge).toHaveClass('badge-lg');
        });

        it('applies badge-sm class when size is sm', () => {
            renderCard(noun, true, 'sm');
            const badge = screen.getByText('noun');
            expect(badge).toHaveClass('badge-sm');
        });

        it('does not apply badge-sm or badge-lg when size is md', () => {
            renderCard(noun, true, 'md');
            const badge = screen.getByText('noun');
            expect(badge).not.toHaveClass('badge-sm');
            expect(badge).not.toHaveClass('badge-lg');
        });
    });

    describe('multiple badges', () => {
        it('renders both type and kanji badges for a noun with kanji', () => {
            renderCard(nounWithKanji);
            expect(screen.getByText('noun')).toBeInTheDocument();
            expect(screen.getByText('kanji')).toBeInTheDocument();
        });

        it('renders type, kanji, and verb type badges for a verb with kanji', () => {
            renderCard(verb);
            expect(screen.getByText('verb')).toBeInTheDocument();
            expect(screen.getByText('kanji')).toBeInTheDocument();
            expect(screen.getByText('ichidan (ru)')).toBeInTheDocument();
        });

        it('renders type, kanji, and adjective type badges for an adjective with kanji', () => {
            renderCard(iAdjective);
            expect(screen.getByText('adjective')).toBeInTheDocument();
            expect(screen.getByText('kanji')).toBeInTheDocument();
            expect(screen.getByText('i adjective')).toBeInTheDocument();
        });
    });

    describe('SRS', () => {
        it('renders SRS level badge by default', async () => {
            await addWordsToSRS([noun.id]);
            renderCard(noun);
            const srsBadge = await screen.findByText('level 1');
            expect(srsBadge).toBeInTheDocument();
        });
    });
});
