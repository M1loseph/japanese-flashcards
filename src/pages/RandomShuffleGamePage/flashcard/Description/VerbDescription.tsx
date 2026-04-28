import type { FC } from 'react';
import { useMainText, useSecondaryText } from '../../../../hooks/useText';
import type { GodanVerb, IchidanVerb, IrregularVerb, TextWithPronunciation } from '../../../../japanese/types';
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

const applyMasuStem = (
    dictionaryForm: string,
    verbType: 'godan' | 'ichidan',
    suffix: typeof MASU_SUFFIX | typeof MASEN_SUFFIX,
): string => {
    const stem = dictionaryForm.slice(0, -1);
    if (verbType === 'ichidan') {
        if (!dictionaryForm.endsWith('る')) {
            throw new Error(`Expected ichidan verb to end with 'る', but got '${dictionaryForm}'`);
        }
        return stem + suffix;
    }
    if (verbType === 'godan') {
        const lastChar = dictionaryForm.slice(-1);
        const replacement = GODAN_U_TO_I_MAP[lastChar];
        if (!replacement) {
            throw new Error(`Unexpected last character '${lastChar}' in godan verb '${dictionaryForm}'`);
        }
        return stem + replacement + suffix;
    }
    const _exhaustiveCheck: never = verbType;
    return _exhaustiveCheck;
};

const generatePresentFormFromDictionaryForm = (
    verb: GodanVerb | IchidanVerb | IrregularVerb,
    form: 'affirmative' | 'negative',
): TextWithPronunciation => {
    if (verb.verb_type === 'irregular') {
        if (form === 'affirmative') {
            return verb.present.masu.affirmative;
        }
        return verb.present.masu.negative;
    }
    const suffix = form === 'affirmative' ? MASU_SUFFIX : MASEN_SUFFIX;
    const text = applyMasuStem(verb.jp.text, verb.verb_type, suffix);
    const pronunciation = verb.jp.pronunciation
        ? applyMasuStem(verb.jp.pronunciation, verb.verb_type, suffix)
        : undefined;
    return { text, pronunciation };
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

export const VerbDescription: FC<VerbDescriptionProps> = ({ verb }) => {
    const masuForm = generatePresentFormFromDictionaryForm(verb, 'affirmative');
    const masenForm = generatePresentFormFromDictionaryForm(verb, 'negative');
    const teForm = generateTeFormFromDictionaryForm(verb);

    const masuText = useMainText(masuForm);
    const masuPronunciation = useSecondaryText(masuForm);

    const masenText = useMainText(masenForm);
    const masenPronunciation = useSecondaryText(masenForm);

    const teText = useMainText(teForm);
    const tePronunciation = useSecondaryText(teForm);

    return (
        <>
            <div className="text-center text-base-content/60">Masu form</div>
            <DescriptionElement mainText={masuText} secondaryText={masuPronunciation} label="Present" />
            <DescriptionElement mainText={masenText} secondaryText={masenPronunciation} label="Negative" />
            <DescriptionElement mainText={teText} secondaryText={tePronunciation} label="Te form" />
        </>
    );
};
