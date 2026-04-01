import { type FC } from 'react';
import { useMainText } from '../../../hooks/useText';
import type { TranslatedJapaneseText, Verb } from '../../../japanese/types';

interface VerbDescriptionProps {
    verb: Verb;
}

const VerbDescription: FC<VerbDescriptionProps> = ({ verb }) => {
    const masuForm = verb.present?.masu.affirmative;
    const masenForm = verb.present?.masu.negative;

    const masuText = useMainText(masuForm);
    const masenText = useMainText(masenForm);

    if (!verb.present) {
        return null;
    }

    return (
        <>
            <div className="text-center text-base-content/60">Masu form</div>
            <div className="p-2 bg-base-300/50 rounded-lg flex justify-between items-center">
                <span>{masuText}</span>
                <span className="text-xs text-base-content/60">Present</span>
            </div>
            <div className="mt-1 p-2 bg-base-300/50 rounded-lg flex justify-between items-center">
                <span>{masenText}</span>
                <span className="text-xs text-base-content/60">Negative</span>
            </div>
        </>
    );
};

interface DescriptionProps {
    showAnswer: boolean;
    card: TranslatedJapaneseText;
}

export const Description: FC<DescriptionProps> = ({ showAnswer, card }) => {
    return (
        <div className={`flex mt-2 flex-col items-stretch ${showAnswer ? '' : 'invisible'}`}>
            {card.type === 'verb' && <VerbDescription verb={card} />}
            {card.description && (
                <div className="mt-2 p-2 bg-base-300/50 rounded-lg">
                    <span>{card.description}</span>
                </div>
            )}
        </div>
    );
};
