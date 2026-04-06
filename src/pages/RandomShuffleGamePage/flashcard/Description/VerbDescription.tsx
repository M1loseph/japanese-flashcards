import type { FC } from 'react';
import { useMainText, useSecondaryText } from '../../../../hooks/useText';
import type { GodanVerb, IchidanVerb, IrregularVerb } from '../../../../japanese/types';
import { DescriptionElement } from './DescriptionElement';

interface VerbDescriptionProps {
    verb: GodanVerb | IchidanVerb | IrregularVerb;
}

export const VerbDescription: FC<VerbDescriptionProps> = ({ verb }) => {
    const masuForm = verb.present.masu.affirmative;
    const masenForm = verb.present.masu.negative;

    const masuText = useMainText(masuForm);
    const masuPronunciation = useSecondaryText(masuForm);

    const masenText = useMainText(masenForm);
    const masenPronunciation = useSecondaryText(masenForm);

    return (
        <>
            <div className="text-center text-base-content/60">Masu form</div>
            <DescriptionElement mainText={masuText} secondaryText={masuPronunciation} label="Present" />
            <DescriptionElement mainText={masenText} secondaryText={masenPronunciation} label="Negative" />
        </>
    );
};
