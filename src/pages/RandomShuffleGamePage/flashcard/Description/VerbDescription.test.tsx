import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { GodanVerb, IchidanVerb, IrregularVerb } from '../../../../japanese/types';
import { GameContext } from '../../../../services/GameContext/GameContext';
import type { GameState } from '../../../../types/GameState';
import { VerbDescription } from './VerbDescription';

const createGameState = (simplifiedMode: boolean): GameState => ({
    version: 1,
    type: 'in-progress',
    title: 'Test game',
    gameType: 'practice',
    flashcards: [],
    gameStartTimeMs: 0,
    currentFlashcardIndex: 0,
    simplifiedMode,
    selectedLanguage: 'en',
});

const renderVerbDescription = (verb: GodanVerb | IchidanVerb | IrregularVerb, simplifiedMode = false) => {
    const providerValue = {
        gameState: createGameState(simplifiedMode),
        clearGame: () => {},
        markCurrentFlashcard: async () => {},
        createNewGameFromWrongAnswers: () => {},
        createNewGame: () => {},
        updateLanguage: () => {},
        updateSimplifiedMode: () => {},
        skipRemainingFlashcards: async () => {},
        undoLastAction: () => {},
    };

    return render(
        <GameContext.Provider value={providerValue}>
            <VerbDescription verb={verb} />
        </GameContext.Provider>,
    );
};

const createGodanVerb = (text: string, pronunciation: string): GodanVerb => ({
    id: '00000000-0000-4000-8000-000000000001',
    type: 'verb',
    verb_type: 'godan',
    en: 'test',
    pl: 'test',
    jp: { text, pronunciation },
});

const getDescriptionRow = (label: string): HTMLElement => {
    const labelElement = screen.getByText(label);
    const row = labelElement.parentElement;
    if (!row) {
        throw new Error(`Could not find row for ${label}`);
    }
    return row;
};

const expectDescriptionRow = (label: string, text: string, pronunciation: string) => {
    const row = within(getDescriptionRow(label));
    const expectedTexts = text === pronunciation ? [text, pronunciation] : [text];
    expect(row.getAllByText(text)).toHaveLength(expectedTexts.length);
    if (text !== pronunciation) {
        expect(row.getByText(pronunciation)).toBeInTheDocument();
    }
};

describe('VerbDescription', () => {
    it.each([
        [
            '買う',
            'かう',
            '買います',
            'かいます',
            '買いません',
            'かいません',
            '買わない',
            'かわない',
            '買って',
            'かって',
            '買い',
            'かい',
        ],
        [
            '書く',
            'かく',
            '書きます',
            'かきます',
            '書きません',
            'かきません',
            '書かない',
            'かかない',
            '書いて',
            'かいて',
            '書き',
            'かき',
        ],
        [
            '泳ぐ',
            'およぐ',
            '泳ぎます',
            'およぎます',
            '泳ぎません',
            'およぎません',
            '泳がない',
            'およがない',
            '泳いで',
            'およいで',
            '泳ぎ',
            'およぎ',
        ],
        [
            '話す',
            'はなす',
            '話します',
            'はなします',
            '話しません',
            'はなしません',
            '話さない',
            'はなさない',
            '話して',
            'はなして',
            '話し',
            'はなし',
        ],
        [
            '待つ',
            'まつ',
            '待ちます',
            'まちます',
            '待ちません',
            'まちません',
            '待たない',
            'またない',
            '待って',
            'まって',
            '待ち',
            'まち',
        ],
        [
            '死ぬ',
            'しぬ',
            '死にます',
            'しにます',
            '死にません',
            'しにません',
            '死なない',
            'しなない',
            '死んで',
            'しんで',
            '死に',
            'しに',
        ],
        [
            '遊ぶ',
            'あそぶ',
            '遊びます',
            'あそびます',
            '遊びません',
            'あそびません',
            '遊ばない',
            'あそばない',
            '遊んで',
            'あそんで',
            '遊び',
            'あそび',
        ],
        [
            '飲む',
            'のむ',
            '飲みます',
            'のみます',
            '飲みません',
            'のみません',
            '飲まない',
            'のまない',
            '飲んで',
            'のんで',
            '飲み',
            'のみ',
        ],
        [
            '帰る',
            'かえる',
            '帰ります',
            'かえります',
            '帰りません',
            'かえりません',
            '帰らない',
            'かえらない',
            '帰って',
            'かえって',
            '帰り',
            'かえり',
        ],
    ])(
        'renders derived godan forms for %s',
        (
            dictionaryForm,
            dictionaryPronunciation,
            masu,
            masuPronunciation,
            masen,
            masenPronunciation,
            shortNegative,
            shortNegativePronunciation,
            teForm,
            teFormPronunciation,
            stem,
            stemPronunciation,
        ) => {
            renderVerbDescription(createGodanVerb(dictionaryForm, dictionaryPronunciation));

            expectDescriptionRow('Masu', masu, masuPronunciation);
            expectDescriptionRow('Masen', masen, masenPronunciation);
            expectDescriptionRow('Present Short Negative', shortNegative, shortNegativePronunciation);
            expectDescriptionRow('Te form', teForm, teFormPronunciation);
            expectDescriptionRow('Stem form', stem, stemPronunciation);
        },
    );

    it('renders derived ichidan forms', () => {
        const verb: IchidanVerb = {
            ...createGodanVerb('食べる', 'たべる'),
            verb_type: 'ichidan',
        };

        renderVerbDescription(verb);

        expectDescriptionRow('Masu', '食べます', 'たべます');
        expectDescriptionRow('Masen', '食べません', 'たべません');
        expectDescriptionRow('Present Short Negative', '食べない', 'たべない');
        expectDescriptionRow('Te form', '食べて', 'たべて');
        expectDescriptionRow('Stem form', '食べ', 'たべ');
    });

    it('uses the supplied short-negative form for non irregular verbs', () => {
        renderVerbDescription({
            ...createGodanVerb('ある', 'ある'),
            present_short_negative_form: { text: 'ない', pronunciation: 'ない' },
        });

        expectDescriptionRow('Present Short Negative', 'ない', 'ない');
    });

    it.each([
        [
            {
                ...createGodanVerb('する', 'する'),
                verb_type: 'irregular',
                stem_form: { text: 'し', pronunciation: 'し' },
                present_short_negative_form: { text: 'しない', pronunciation: 'しない' },
                te_form: { text: 'して', pronunciation: 'して' },
            },
            ['します', 'しません', 'しない', 'して', 'し'],
            ['します', 'しません', 'しない', 'して', 'し'],
        ],
        [
            {
                ...createGodanVerb('来る', 'くる'),
                verb_type: 'irregular',
                stem_form: { text: '来', pronunciation: 'き' },
                present_short_negative_form: { text: '来ない', pronunciation: 'こない' },
                te_form: { text: '来て', pronunciation: 'きて' },
            },
            ['来ます', '来ません', '来ない', '来て', '来'],
            ['きます', 'きません', 'こない', 'きて', 'き'],
        ],
    ] as const)('renders supplied irregular forms for %s', (verb, text, pronunciation) => {
        renderVerbDescription(verb as IrregularVerb);

        expectDescriptionRow('Masu', text[0], pronunciation[0]);
        expectDescriptionRow('Masen', text[1], pronunciation[1]);
        expectDescriptionRow('Present Short Negative', text[2], pronunciation[2]);
        expectDescriptionRow('Te form', text[3], pronunciation[3]);
        expectDescriptionRow('Stem form', text[4], pronunciation[4]);
    });

    it('uses an explicit godan te-form override', () => {
        const verb: GodanVerb = {
            ...createGodanVerb('行く', 'いく'),
            te_form: { text: '行って', pronunciation: 'いって' },
        };

        renderVerbDescription(verb);

        expectDescriptionRow('Te form', '行って', 'いって');
        expect(screen.queryByText('行いて')).not.toBeInTheDocument();
    });

    it('renders pronunciation as the primary text in simplified mode', () => {
        renderVerbDescription(createGodanVerb('書く', 'かく'), true);

        const masuRow = within(getDescriptionRow('Masu'));
        expect(masuRow.getByText('かきます')).toBeInTheDocument();
        expect(masuRow.queryByText('書きます')).not.toBeInTheDocument();
        expect(masuRow.getAllByText('かきます')).toHaveLength(1);
    });
});
