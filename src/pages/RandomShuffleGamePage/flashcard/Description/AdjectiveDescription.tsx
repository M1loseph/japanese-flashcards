import { useMemo, type FC } from 'react';
import { useMainText, useSecondaryText } from '../../../../hooks/useText';
import type { Adjective } from '../../../../japanese/types';
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

export const AdjectiveDescription: FC<AdjectiveDescriptionProps> = ({ adjective }) => {
    const negativeForm = useMemo(() => {
        if (adjective.adjective_type !== 'i-adjective-irregular') {
            const type = adjective.adjective_type;
            const text = adjective.jp.text;
            const pronunciation = (() => {
                if (!adjective.jp.pronunciation) {
                    return undefined;
                } else if (typeof adjective.jp.pronunciation === 'string') {
                    return generateNegativeForm(type, adjective.jp.pronunciation);
                } else {
                    return adjective.jp.pronunciation.map((p) => generateNegativeForm(type, p)).join(' / ');
                }
            })();
            return {
                text: generateNegativeForm(type, text),
                pronunciation,
            };
        }
        return adjective.negative;
    }, [adjective]);
    const negativeText = useMainText(negativeForm);
    const negativeSecondaryText = useSecondaryText(negativeForm);

    return <DescriptionElement mainText={negativeText} secondaryText={negativeSecondaryText} label="Negation" />;
};
