import { type FC } from 'react';
import { useMainText, useSecondaryText } from '../../../../hooks/useText';
import type { Adjective } from '../../../../japanese/types';
import { mapPronunciation } from '../../../../utils';
import { DescriptionElement } from './DescriptionElement';

interface AdjectiveDescriptionProps {
    adjective: Adjective;
}

const generateNegativeForm = (adjectiveType: 'i-adjective' | 'na-adjective', text: string): string => {
    if (adjectiveType === 'i-adjective') {
        return text.slice(0, -1) + 'くない';
    }
    if (adjectiveType === 'na-adjective') {
        return text + 'じゃない';
    }
    const _exhaustiveCheck: never = adjectiveType;
    return _exhaustiveCheck;
};

const generateTeForm = (adjectiveType: 'i-adjective' | 'na-adjective', text: string): string => {
    if (adjectiveType === 'i-adjective') {
        return text.slice(0, -1) + 'くて';
    }
    if (adjectiveType === 'na-adjective') {
        return text + 'で';
    }
    const _exhaustiveCheck: never = adjectiveType;
    return _exhaustiveCheck;
};

export const AdjectiveDescription: FC<AdjectiveDescriptionProps> = ({ adjective }) => {
    const negativeForm = (() => {
        if (adjective.adjective_type !== 'i-adjective-irregular') {
            const type = adjective.adjective_type;
            const text = adjective.jp.text;
            const pronunciation = mapPronunciation(adjective.jp.pronunciation, (p) => generateNegativeForm(type, p));
            return {
                text: generateNegativeForm(type, text),
                pronunciation,
            };
        }
        return adjective.negative;
    })();
    const teForm = (() => {
        if (adjective.adjective_type !== 'i-adjective-irregular') {
            const type = adjective.adjective_type;
            const text = adjective.jp.text;
            const pronunciation = mapPronunciation(adjective.jp.pronunciation, (p) => generateTeForm(type, p));
            return {
                text: generateTeForm(type, text),
                pronunciation,
            };
        }
        return adjective.te_form;
    })();

    const negativeText = useMainText(negativeForm);
    const negativeSecondaryText = useSecondaryText(negativeForm);

    const teFormText = useMainText(teForm);
    const teFormSecondaryText = useSecondaryText(teForm);

    return (
        <>
            <DescriptionElement mainText={negativeText} secondaryText={negativeSecondaryText} label="Negation" />
            <DescriptionElement mainText={teFormText} secondaryText={teFormSecondaryText} label="Te Form" />
        </>
    );
};
