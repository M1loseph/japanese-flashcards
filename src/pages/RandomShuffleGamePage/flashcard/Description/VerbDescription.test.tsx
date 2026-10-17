import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { GodanVerb, IchidanVerb, IrregularVerb, Pronunciation } from '../../../../japanese/types';
import {
    ApplicationUserSettingContext,
    type ApplicationUserSettingContextType,
} from '../../../../services/ApplicationUserSetting';
import { VerbDescription } from './VerbDescription';

const renderVerbDescription = (verb: GodanVerb | IchidanVerb | IrregularVerb, simplifiedMode = false) => {
    const applicationUserSetting: ApplicationUserSettingContextType = {
        selectedLanguage: 'en',
        setSelectedLanguage: () => {},
        simplifiedMode,
        setSimplifiedMode: () => {},
    };

    return render(
        <ApplicationUserSettingContext.Provider value={applicationUserSetting}>
            <VerbDescription verb={verb} />
        </ApplicationUserSettingContext.Provider>,
    );
};

const createGodanVerb = (text: string, pronunciation?: Pronunciation): GodanVerb => ({
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

const expectDescriptionRow = (label: string, text: string, pronunciation?: string) => {
    const row = within(getDescriptionRow(label));
    expect(row.getByText(text)).toBeInTheDocument();
    if (pronunciation) {
        expect(row.getByText(pronunciation)).toBeInTheDocument();
    }
};

describe('VerbDescription', () => {
    it.each([
        {
            dictionaryForm: '買う',
            dictionaryPronunciation: 'かう',
            masu: '買います',
            masuPronunciation: 'かいます',
            masen: '買いません',
            masenPronunciation: 'かいません',
            shortNegative: '買わない',
            shortNegativePronunciation: 'かわない',
            pastShort: '買った',
            pastShortPronunciation: 'かった',
            pastShortNegative: '買わなかった',
            pastShortNegativePronunciation: 'かわなかった',
            teForm: '買って',
            teFormPronunciation: 'かって',
            stem: '買い',
            stemPronunciation: 'かい',
        },
        {
            dictionaryForm: '書く',
            dictionaryPronunciation: 'かく',
            masu: '書きます',
            masuPronunciation: 'かきます',
            masen: '書きません',
            masenPronunciation: 'かきません',
            shortNegative: '書かない',
            shortNegativePronunciation: 'かかない',
            pastShort: '書いた',
            pastShortPronunciation: 'かいた',
            pastShortNegative: '書かなかった',
            pastShortNegativePronunciation: 'かかなかった',
            teForm: '書いて',
            teFormPronunciation: 'かいて',
            stem: '書き',
            stemPronunciation: 'かき',
        },
        {
            dictionaryForm: '泳ぐ',
            dictionaryPronunciation: 'およぐ',
            masu: '泳ぎます',
            masuPronunciation: 'およぎます',
            masen: '泳ぎません',
            masenPronunciation: 'およぎません',
            shortNegative: '泳がない',
            shortNegativePronunciation: 'およがない',
            pastShort: '泳いだ',
            pastShortPronunciation: 'およいだ',
            pastShortNegative: '泳がなかった',
            pastShortNegativePronunciation: 'およがなかった',
            teForm: '泳いで',
            teFormPronunciation: 'およいで',
            stem: '泳ぎ',
            stemPronunciation: 'およぎ',
        },
        {
            dictionaryForm: '話す',
            dictionaryPronunciation: 'はなす',
            masu: '話します',
            masuPronunciation: 'はなします',
            masen: '話しません',
            masenPronunciation: 'はなしません',
            shortNegative: '話さない',
            shortNegativePronunciation: 'はなさない',
            pastShort: '話した',
            pastShortPronunciation: 'はなした',
            pastShortNegative: '話さなかった',
            pastShortNegativePronunciation: 'はなさなかった',
            teForm: '話して',
            teFormPronunciation: 'はなして',
            stem: '話し',
            stemPronunciation: 'はなし',
        },
        {
            dictionaryForm: '待つ',
            dictionaryPronunciation: 'まつ',
            masu: '待ちます',
            masuPronunciation: 'まちます',
            masen: '待ちません',
            masenPronunciation: 'まちません',
            shortNegative: '待たない',
            shortNegativePronunciation: 'またない',
            pastShort: '待った',
            pastShortPronunciation: 'まった',
            pastShortNegative: '待たなかった',
            pastShortNegativePronunciation: 'またなかった',
            teForm: '待って',
            teFormPronunciation: 'まって',
            stem: '待ち',
            stemPronunciation: 'まち',
        },
        {
            dictionaryForm: '死ぬ',
            dictionaryPronunciation: 'しぬ',
            masu: '死にます',
            masuPronunciation: 'しにます',
            masen: '死にません',
            masenPronunciation: 'しにません',
            shortNegative: '死なない',
            shortNegativePronunciation: 'しなない',
            pastShort: '死んだ',
            pastShortPronunciation: 'しんだ',
            pastShortNegative: '死ななかった',
            pastShortNegativePronunciation: 'しななかった',
            teForm: '死んで',
            teFormPronunciation: 'しんで',
            stem: '死に',
            stemPronunciation: 'しに',
        },
        {
            dictionaryForm: '遊ぶ',
            dictionaryPronunciation: 'あそぶ',
            masu: '遊びます',
            masuPronunciation: 'あそびます',
            masen: '遊びません',
            masenPronunciation: 'あそびません',
            shortNegative: '遊ばない',
            shortNegativePronunciation: 'あそばない',
            pastShort: '遊んだ',
            pastShortPronunciation: 'あそんだ',
            pastShortNegative: '遊ばなかった',
            pastShortNegativePronunciation: 'あそばなかった',
            teForm: '遊んで',
            teFormPronunciation: 'あそんで',
            stem: '遊び',
            stemPronunciation: 'あそび',
        },
        {
            dictionaryForm: '飲む',
            dictionaryPronunciation: 'のむ',
            masu: '飲みます',
            masuPronunciation: 'のみます',
            masen: '飲みません',
            masenPronunciation: 'のみません',
            shortNegative: '飲まない',
            shortNegativePronunciation: 'のまない',
            pastShort: '飲んだ',
            pastShortPronunciation: 'のんだ',
            pastShortNegative: '飲まなかった',
            pastShortNegativePronunciation: 'のまなかった',
            teForm: '飲んで',
            teFormPronunciation: 'のんで',
            stem: '飲み',
            stemPronunciation: 'のみ',
        },
        {
            dictionaryForm: '帰る',
            dictionaryPronunciation: 'かえる',
            masu: '帰ります',
            masuPronunciation: 'かえります',
            masen: '帰りません',
            masenPronunciation: 'かえりません',
            shortNegative: '帰らない',
            shortNegativePronunciation: 'かえらない',
            pastShort: '帰った',
            pastShortPronunciation: 'かえった',
            pastShortNegative: '帰らなかった',
            pastShortNegativePronunciation: 'かえらなかった',
            teForm: '帰って',
            teFormPronunciation: 'かえって',
            stem: '帰り',
            stemPronunciation: 'かえり',
        },
    ])(
        'renders derived godan forms for $dictionaryForm',
        ({
            dictionaryForm,
            dictionaryPronunciation,
            masu,
            masuPronunciation,
            masen,
            masenPronunciation,
            shortNegative,
            shortNegativePronunciation,
            pastShort,
            pastShortPronunciation,
            pastShortNegative,
            pastShortNegativePronunciation,
            teForm,
            teFormPronunciation,
            stem,
            stemPronunciation,
        }) => {
            renderVerbDescription(createGodanVerb(dictionaryForm, dictionaryPronunciation));

            expectDescriptionRow('Masu', masu, masuPronunciation);
            expectDescriptionRow('Masen', masen, masenPronunciation);
            expectDescriptionRow('Present Short Negative', shortNegative, shortNegativePronunciation);
            expectDescriptionRow('Past Short', pastShort, pastShortPronunciation);
            expectDescriptionRow('Past Short Negative', pastShortNegative, pastShortNegativePronunciation);
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
        expectDescriptionRow('Past Short', '食べた', 'たべた');
        expectDescriptionRow('Past Short Negative', '食べなかった', 'たべなかった');
        expectDescriptionRow('Te form', '食べて', 'たべて');
        expectDescriptionRow('Stem form', '食べ', 'たべ');
    });

    it('renders all derived forms with array pronunciations in normal mode', () => {
        renderVerbDescription(createGodanVerb('書く', ['かく', 'さく']));

        expectDescriptionRow('Masu', '書きます', 'かきます / さきます');
        expectDescriptionRow('Masen', '書きません', 'かきません / さきません');
        expectDescriptionRow('Present Short Negative', '書かない', 'かかない / さかない');
        expectDescriptionRow('Past Short', '書いた', 'かいた / さいた');
        expectDescriptionRow('Past Short Negative', '書かなかった', 'かかなかった / さかなかった');
        expectDescriptionRow('Te form', '書いて', 'かいて / さいて');
        expectDescriptionRow('Stem form', '書き', 'かき / さき');
    });

    it('renders all derived forms with array pronunciations in simplified mode', () => {
        renderVerbDescription(createGodanVerb('書く', ['かく', 'さく']), true);

        const expectedForms = [
            ['Masu', '書きます', 'かきます / さきます'],
            ['Masen', '書きません', 'かきません / さきません'],
            ['Present Short Negative', '書かない', 'かかない / さかない'],
            ['Past Short', '書いた', 'かいた / さいた'],
            ['Past Short Negative', '書かなかった', 'かかなかった / さかなかった'],
            ['Te form', '書いて', 'かいて / さいて'],
            ['Stem form', '書き', 'かき / さき'],
        ];

        for (const [label, text, pronunciation] of expectedForms) {
            const row = within(getDescriptionRow(label));
            expect(row.getByText(pronunciation)).toBeInTheDocument();
            expect(row.queryByText(text)).not.toBeInTheDocument();
        }
    });

    it('uses the supplied short-negative form for non irregular verbs', () => {
        renderVerbDescription({
            ...createGodanVerb('ある', 'ある'),
            present_short_negative_form: { text: 'ない' },
        });

        expectDescriptionRow('Present Short Negative', 'ない');
        expectDescriptionRow('Past Short Negative', 'なかった');
    });

    it.each([
        [
            {
                ...createGodanVerb('する'),
                verb_type: 'irregular',
                stem_form: { text: 'し' },
                present_short_negative_form: { text: 'しない' },
                te_form: { text: 'して' },
            },
            ['します', 'しません', 'しない', 'した', 'しなかった', 'して', 'し'],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        ],
        [
            {
                ...createGodanVerb('来る', 'くる'),
                verb_type: 'irregular',
                stem_form: { text: '来', pronunciation: 'き' },
                present_short_negative_form: { text: '来ない', pronunciation: 'こない' },
                te_form: { text: '来て', pronunciation: 'きて' },
            },
            ['来ます', '来ません', '来ない', '来た', '来なかった', '来て', '来'],
            ['きます', 'きません', 'こない', 'きた', 'こなかった', 'きて', 'き'],
        ],
    ] as const)('renders supplied irregular forms for %s', (verb, text, pronunciation) => {
        renderVerbDescription(verb as IrregularVerb);

        expectDescriptionRow('Masu', text[0], pronunciation[0]);
        expectDescriptionRow('Masen', text[1], pronunciation[1]);
        expectDescriptionRow('Present Short Negative', text[2], pronunciation[2]);
        expectDescriptionRow('Past Short', text[3], pronunciation[3]);
        expectDescriptionRow('Past Short Negative', text[4], pronunciation[4]);
        expectDescriptionRow('Te form', text[5], pronunciation[5]);
        expectDescriptionRow('Stem form', text[6], pronunciation[6]);
    });

    it('throws if the short-negative form does not end with い', () => {
        const verb: GodanVerb = {
            ...createGodanVerb('ある'),
            present_short_negative_form: { text: 'なし' },
        };

        expect(() => renderVerbDescription(verb)).toThrow(
            "Expected present short negative form to end with 'い', but got 'なし'",
        );
    });

    it('uses an explicit godan te-form override', () => {
        const verb: GodanVerb = {
            ...createGodanVerb('行く', 'いく'),
            te_form: { text: '行って', pronunciation: 'いって' },
        };

        renderVerbDescription(verb);

        expectDescriptionRow('Te form', '行って', 'いって');
        expectDescriptionRow('Past Short', '行った', 'いった');
        expect(screen.queryByText('行いて')).not.toBeInTheDocument();
    });

    it('throws if the supplied te-form does not end in て or で', () => {
        const verb: GodanVerb = {
            ...createGodanVerb('書く'),
            te_form: { text: '書きと' },
        };

        expect(() => renderVerbDescription(verb)).toThrow(
            "Expected te-form to end with 'て' or 'で', but got '書きと'",
        );
    });

    it('renders pronunciation as the primary text in simplified mode', () => {
        renderVerbDescription(createGodanVerb('書く', 'かく'), true);

        const masuRow = within(getDescriptionRow('Masu'));
        expect(masuRow.getByText('かきます')).toBeInTheDocument();
        expect(masuRow.queryByText('書きます')).not.toBeInTheDocument();
        expect(masuRow.getAllByText('かきます')).toHaveLength(1);
    });
});
