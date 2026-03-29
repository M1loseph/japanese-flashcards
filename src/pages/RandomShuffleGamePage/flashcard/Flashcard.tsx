import { type FC } from 'react';
import { Badges } from '../../../components/Badges';
import { HardTextIcon } from '../../../components/HardTextIcon';
import type { TranslatedJapaneseText } from '../../../japanese';
import { type TranslationLanguage } from '../../../types/TranslationLanguage';
import { Description } from './Description';
import { FlashcardMainText } from './FlashcardMainText';

interface FlashcardProps {
    card: TranslatedJapaneseText;
    selectedLanguage: TranslationLanguage;
    showAnswer: boolean;
}

const JapaneseFlashcard: FC<FlashcardProps> = ({ card, selectedLanguage, showAnswer }) => {
    const question: string = card[selectedLanguage];

    return (
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row rounded-xl bg-base-100 shadow-2xl border border-base-300">
            <div className="flex-1 flex flex-col p-5">
                <div className="flex items-center justify-between">
                    <Badges card={card} showAnswer={showAnswer} />
                    <HardTextIcon word={card} />
                </div>
                <div className="grow flex flex-col justify-center items-stretch">
                    <FlashcardMainText question={question} answer={card.jp} showAnswer={showAnswer} />
                    <Description showAnswer={showAnswer} card={card} />
                </div>
            </div>
            {card.image_url && (
                <div className="flex-1 min-h-0">
                    <img
                        src={card.image_url}
                        alt={card.jp.text}
                        className="object-contain w-full h-full rounded-r-xl"
                    />
                </div>
            )}
        </div>
    );
};

export default JapaneseFlashcard;
