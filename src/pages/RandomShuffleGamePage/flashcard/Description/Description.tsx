import { type FC } from 'react';
import type { TranslatedJapaneseText } from '../../../../japanese/types';
import { AdjectiveDescription } from './AdjectiveDescription';
import { VerbDescription } from './VerbDescription';

interface DescriptionProps {
    showAnswer: boolean;
    card: TranslatedJapaneseText;
}

export const Description: FC<DescriptionProps> = ({ showAnswer, card }) => {
    return (
        <div className={`flex mt-2 flex-col items-center ${showAnswer ? '' : 'invisible'}`}>
            {card.type === 'verb' && card.verb_type !== 'auxiliary' && <VerbDescription verb={card} />}
            {card.type === 'adjective' && <AdjectiveDescription adjective={card} />}
            {card.description && (
                <div className="mt-2 p-2 bg-base-300/50 rounded-lg">
                    <span>{card.description}</span>
                </div>
            )}
        </div>
    );
};
