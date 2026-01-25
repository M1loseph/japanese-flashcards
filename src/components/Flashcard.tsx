import { IconCheck, IconEye, IconEyeOff, IconRepeat } from '@tabler/icons-react';
import { useState } from 'react';
import { TranslationLanguages, type TranslationLanguage } from '../TranslationLanguage';
import type { JapaneseWord } from '../japanese';
import { Badges } from './Badges';

interface DescriptionProps {
    showAnswer: boolean;
    card: JapaneseWord;
}

const Description: React.FC<DescriptionProps> = ({ showAnswer, card }) => {
    if (card.type === 'verb') {
        return (
            <div className={`flex flex-col items-stretch ${showAnswer ? '' : 'invisible'}`}>
                <div className="text-md text-center text-base-content/60">Masu form</div>
                <div className="p-2 bg-base-300/50 rounded-lg flex justify-between items-center">
                    <span>{card.masu_form}</span>
                    <span className="text-xs text-base-content/60">Present</span>
                </div>
                <div className="mt-1 p-2 bg-base-300/50 rounded-lg flex justify-between items-center">
                    <span>{card.masen_form}</span>
                    <span className="text-xs text-base-content/60">Negative</span>
                </div>
                <br />
                <span>{card.jp_description}</span>
            </div>
        );
    }
    if (!card.jp_description) {
        return <></>;
    }
    return (
        <p className={`${showAnswer ? '' : 'invisible'} text-sm mt-2 p-2 bg-base-300/50 rounded-lg`}>
            {card.jp_description}
        </p>
    );
};

interface FlashcardProps {
    card: JapaneseWord;
    selectedLanguage: TranslationLanguage;
    handleCorrect: () => void;
    handleMistake: () => void;
}

const JapaneseFlashcard: React.FC<FlashcardProps> = ({ card, selectedLanguage, handleCorrect, handleMistake }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const question: string = (() => {
        switch (selectedLanguage) {
            case TranslationLanguages.POLISH: {
                return card.pl;
            }
            case TranslationLanguages.ENGLISH: {
                return card.en;
            }
            default: {
                const _neverCheck: never = selectedLanguage;
                return _neverCheck;
            }
        }
    })();

    const text = showAnswer ? card.jp : question;

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const correctPressed = () => {
        setShowAnswer(false);
        handleCorrect();
    };

    const mistakePressed = () => {
        setShowAnswer(false);
        handleMistake();
    };

    return (
        <div className="w-full">
            <div className="rounded-xl bg-base-100 shadow-2xl border border-base-300 max-w-3xl mx-auto">
                <div className="p-5">
                    <Badges card={card} showAnswer={showAnswer} />
                    <div className="flex flex-col justify-center items-stretch min-h-[15rem]">
                        <div className="flex justify-center">
                            <h1 className="text-3xl font-bold">
                                {text} {showAnswer && card.jp_pronunciation ? `(${card.jp_pronunciation})` : ''}
                            </h1>
                        </div>
                        <Description showAnswer={showAnswer} card={card} />
                    </div>
                </div>
            </div>
            <div className="flex justify-around gap-3 pt-4 flex-col md:flex-row">
                <button disabled={!showAnswer} className="btn btn-success font-bold md:flex-1" onClick={correctPressed}>
                    <IconCheck />
                    Correct
                </button>
                <button className="btn btn-info md:flex-1" onClick={toggleAnswer}>
                    {showAnswer ? <IconEyeOff /> : <IconEye />}
                    {showAnswer ? 'Hide' : 'Show'}
                </button>
                <button disabled={!showAnswer} className="btn btn-error md:flex-1" onClick={mistakePressed}>
                    <IconRepeat />
                    Wrong
                </button>
            </div>
        </div>
    );
};

export default JapaneseFlashcard;
