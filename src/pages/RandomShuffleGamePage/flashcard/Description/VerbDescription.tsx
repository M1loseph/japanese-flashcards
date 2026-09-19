import type { FC } from 'react';
import { useMainText, useSecondaryText } from '../../../../hooks/useText';
import type { GodanVerb, IchidanVerb, IrregularVerb, TextWithPronunciation } from '../../../../japanese/types';
import { mapPronunciation } from '../../../../utils';
import { DescriptionElement } from './DescriptionElement';

interface VerbDescriptionProps {
    verb: GodanVerb | IchidanVerb | IrregularVerb;
}

const MASU_SUFFIX = 'ます';
const MASEN_SUFFIX = 'ません';

const GODAN_U_TO_I_MAP: Record<string, string> = {
    う: 'い',
    く: 'き',
    ぐ: 'ぎ',
    す: 'し',
    つ: 'ち',
    ぬ: 'に',
    ぶ: 'び',
    む: 'み',
    る: 'り',
};

const GODAN_U_TO_A_MAP: Record<string, string> = {
    う: 'わ',
    く: 'か',
    ぐ: 'が',
    す: 'さ',
    つ: 'た',
    ぬ: 'な',
    ぶ: 'ば',
    む: 'ま',
    る: 'ら',
};

const GODAN_TE_FORM_MAP: Record<string, string> = {
    う: 'って',
    つ: 'って',
    る: 'って',
    く: 'いて',
    ぐ: 'いで',
    す: 'して',
    ぬ: 'んで',
    ぶ: 'んで',
    む: 'んで',
};

const generateTeFormFromDictionaryForm = (verb: GodanVerb | IchidanVerb | IrregularVerb): TextWithPronunciation => {
    if (verb.verb_type === 'irregular') {
        return verb.te_form;
    }
    if (verb.te_form) {
        return verb.te_form;
    }
    if (verb.verb_type === 'ichidan') {
        if (!verb.jp.text.endsWith('る')) {
            throw new Error(`Expected ichidan verb to end with 'る', but got '${verb.jp.text}'`);
        }
        const text = verb.jp.text.slice(0, -1) + 'て';
        const pronunciation = verb.jp.pronunciation ? verb.jp.pronunciation.slice(0, -1) + 'て' : undefined;
        return { text, pronunciation };
    }
    if (verb.verb_type === 'godan') {
        const lastChar = verb.jp.text.slice(-1);
        const teFormEnding = GODAN_TE_FORM_MAP[lastChar];
        if (!teFormEnding) {
            throw new Error(`Unexpected last character '${lastChar}' in godan verb '${verb.jp.text}'`);
        }
        const text = verb.jp.text.slice(0, -1) + teFormEnding;
        const pronunciation = verb.jp.pronunciation ? verb.jp.pronunciation.slice(0, -1) + teFormEnding : undefined;
        return { text, pronunciation };
    }
    const _exhaustiveCheck: never = verb;
    return _exhaustiveCheck;
};

const generateStemFormFromDictionaryForm = (verb: GodanVerb | IchidanVerb | IrregularVerb): TextWithPronunciation => {
    if (verb.verb_type === 'irregular') {
        return verb.stem_form;
    }

    const generateStemForVerb = (dictionaryForm: string): string => {
        const stem = dictionaryForm.slice(0, -1);
        if (verb.verb_type === 'ichidan') {
            if (!dictionaryForm.endsWith('る')) {
                throw new Error(`Expected ichidan verb to end with 'る', but got '${dictionaryForm}'`);
            }
            return stem;
        }
        if (verb.verb_type === 'godan') {
            const lastChar = dictionaryForm.slice(-1);
            const replacement = GODAN_U_TO_I_MAP[lastChar];
            if (!replacement) {
                throw new Error(`Unexpected last character '${lastChar}' in godan verb '${dictionaryForm}'`);
            }
            return stem + replacement;
        }
        const _exhaustiveCheck: never = verb;
        return _exhaustiveCheck;
    };

    const pronunciation = mapPronunciation(verb.jp.pronunciation, generateStemForVerb);

    return {
        text: generateStemForVerb(verb.jp.text),
        pronunciation,
    };
};

const generatePresentFormFromDictionaryForm = (
    verb: GodanVerb | IchidanVerb | IrregularVerb,
    form: 'affirmative' | 'negative',
): TextWithPronunciation => {
    const suffix = form === 'affirmative' ? MASU_SUFFIX : MASEN_SUFFIX;
    const stem = generateStemFormFromDictionaryForm(verb);
    const pronunciation = mapPronunciation(stem.pronunciation, (p) => p + suffix);
    return { text: stem.text + suffix, pronunciation };
};

const generatePresentShortNegativeFormFromDictionaryForm = (
    verb: GodanVerb | IchidanVerb | IrregularVerb,
): TextWithPronunciation => {
    if (verb.verb_type === 'irregular') {
        return verb.present_short_negative_form;
    }
    if (verb.present_short_negative_form) {
        return verb.present_short_negative_form;
    }
    const generatePresentShortNegativeForm = (text: string): string => {
        if (verb.verb_type === 'ichidan') {
            const stem = text.slice(0, -1);
            return stem + 'ない';
        }
        if (verb.verb_type === 'godan') {
            const lastChar = text.slice(-1);
            const replacement = GODAN_U_TO_A_MAP[lastChar];
            if (!replacement) {
                throw new Error(`Unexpected last character '${lastChar}' in godan verb '${verb.jp.text}'`);
            }
            const stem = text.slice(0, -1);
            return stem + replacement + 'ない';
        }
        const _exhaustiveCheck: never = verb;
        return _exhaustiveCheck;
    };
    return {
        text: generatePresentShortNegativeForm(verb.jp.text),
        pronunciation: mapPronunciation(verb.jp.pronunciation, generatePresentShortNegativeForm),
    };
};

export const VerbDescription: FC<VerbDescriptionProps> = ({ verb }) => {
    const masuForm = generatePresentFormFromDictionaryForm(verb, 'affirmative');
    const masenForm = generatePresentFormFromDictionaryForm(verb, 'negative');
    const teForm = generateTeFormFromDictionaryForm(verb);
    const stemForm = generateStemFormFromDictionaryForm(verb);
    const presentShortNegativeForm = generatePresentShortNegativeFormFromDictionaryForm(verb);

    const masuText = useMainText(masuForm);
    const masuPronunciation = useSecondaryText(masuForm);

    const masenText = useMainText(masenForm);
    const masenPronunciation = useSecondaryText(masenForm);

    const teText = useMainText(teForm);
    const tePronunciation = useSecondaryText(teForm);

    const stemFormText = useMainText(stemForm);
    const stemFormPronunciation = useSecondaryText(stemForm);

    const presentShortNegativeText = useMainText(presentShortNegativeForm);
    const presentShortNegativePronunciation = useSecondaryText(presentShortNegativeForm);

    return (
        <>
            <DescriptionElement mainText={masuText} secondaryText={masuPronunciation} label="Masu" />
            <DescriptionElement mainText={masenText} secondaryText={masenPronunciation} label="Masen" />
            <DescriptionElement
                mainText={presentShortNegativeText}
                secondaryText={presentShortNegativePronunciation}
                label="Present Short Negative"
            />
            <DescriptionElement mainText={teText} secondaryText={tePronunciation} label="Te form" />
            <DescriptionElement mainText={stemFormText} secondaryText={stemFormPronunciation} label="Stem form" />
        </>
    );
};
