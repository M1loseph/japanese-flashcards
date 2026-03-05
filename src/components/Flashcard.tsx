import { type FC } from 'react';
import { type TranslationLanguage } from '../types/TranslationLanguage';
import type { JapaneseWord } from '../japanese';
import { Badges } from './Badges';
import { FlashcardMainText } from './FlashcardMainText';
import { HardWordIcon } from './HardWordIcon';

interface DescriptionProps {
    showAnswer: boolean;
    card: JapaneseWord;
    simplifiedMode: boolean;
}

const Description: FC<DescriptionProps> = ({ showAnswer, card, simplifiedMode }) => {
    if (card.type === 'verb') {
        const masuForm = card.present.masu.affirmative;
        const masenForm = card.present.masu.negative;

        const masuText = simplifiedMode ? masuForm.pronunciation || masuForm.word : masuForm.word;
        const masuPronunciation = simplifiedMode ? undefined : masuForm.pronunciation;

        const masenText = simplifiedMode ? masenForm.pronunciation || masenForm.word : masenForm.word;
        const masenPronunciation = simplifiedMode ? undefined : masenForm.pronunciation;

        return (
            <div className={`flex mt-2 flex-col items-stretch ${showAnswer ? '' : 'invisible'}`}>
                <div className="text-center text-base-content/60">Masu form</div>
                <div className="p-2 bg-base-300/50 rounded-lg flex justify-between items-center">
                    <span>
                        {masuText}
                        {masuPronunciation && ` (${masuPronunciation})`}
                    </span>
                    <span className="text-xs text-base-content/60">Present</span>
                </div>
                <div className="mt-1 p-2 bg-base-300/50 rounded-lg flex justify-between items-center">
                    <span>
                        {masenText}
                        {masenPronunciation && ` (${masenPronunciation})`}
                    </span>
                    <span className="text-xs text-base-content/60">Negative</span>
                </div>
                <br />
                <span>{card.description}</span>
            </div>
        );
    }
    if (!card.description) {
        return <></>;
    }
    return (
        <p className={`${showAnswer ? '' : 'invisible'} text-sm mt-2 p-2 bg-base-300/50 rounded-lg`}>
            {card.description}
        </p>
    );
};

interface FlashcardProps {
    card: JapaneseWord;
    selectedLanguage: TranslationLanguage;
    showAnswer: boolean;
    simplifiedMode: boolean;
}

const JapaneseFlashcard: FC<FlashcardProps> = ({ card, selectedLanguage, showAnswer, simplifiedMode }) => {
    const question: string = card[selectedLanguage];

    return (
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row rounded-xl bg-base-100 shadow-2xl border border-base-300">
            <div className="flex-1 flex flex-col p-5">
                <div className="flex items-center justify-between">
                    <Badges card={card} showAnswer={showAnswer} />
                    <HardWordIcon word={card} />
                </div>
                <div className="grow flex flex-col justify-center items-stretch">
                    <FlashcardMainText
                        simplifiedMode={simplifiedMode}
                        question={question}
                        answer={card.jp.word}
                        pronunciation={card.jp.pronunciation}
                        showAnswer={showAnswer}
                    />
                    <Description showAnswer={showAnswer} card={card} simplifiedMode={simplifiedMode} />
                </div>
            </div>
            {card.image_url && (
                <div className="flex-1 min-h-0">
                    <img
                        src={card.image_url}
                        alt={card.jp.word}
                        className="object-contain w-full h-full rounded-r-xl"
                    />
                </div>
            )}
        </div>
    );
};

export default JapaneseFlashcard;
