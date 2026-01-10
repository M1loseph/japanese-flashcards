import { IconCancel, IconCheck } from '@tabler/icons-react';
import { useState, type JSX } from 'react';
import { TranslationLanguages, type TranslationLanguage } from '../TranslationLanguage';
import type { JapaneseWord } from '../japanese';
import { WordTypes, type WordType } from '../japanese/types';

const badgeColor = (type?: WordType): string | undefined => {
    if (!type) return;
    switch (type) {
        case WordTypes.VERB: {
            return 'badge-error';
        }
        case WordTypes.NOUN: {
            return 'badge-info';
        }
        case WordTypes.ADJECTIVE: {
            return 'badge-success';
        }
        case WordTypes.PHRASE: {
            return 'badge-warning';
        }
        case WordTypes.PRONOUN: {
            return 'badge-secondary';
        }
        case WordTypes.SUFFIX: {
            return 'badge-accent';
        }
        case WordTypes.NUMERAL: {
            return 'badge-primary';
        }
        case WordTypes.UNKNOWN: {
            return 'badge-ghost';
        }
        default: {
            const _exhaustiveCheck: never = type;
            return _exhaustiveCheck;
        }
    }
};

interface DescriptionProps {
    showAnswer: boolean;
    card: JapaneseWord;
}

const Description: React.FC<DescriptionProps> = ({ showAnswer, card }) => {
    if (!showAnswer) {
        return null;
    }
    if (card.type != WordTypes.VERB) {

        return <p className="mt-4">{card.jp_description}</p>;
    }
    return (
        <>
            <span className='text-lg'>Verb in masu form:</span>
            <ul className="list-disc pl-6 space-y-1">
                <li>
                    <span className="text-lg">{card.masu_form}</span>
                </li>
                <li>
                    <span className="text-lg">{card.masen_form}</span>
                </li>
            </ul>
            <br />
            {card.jp_description}
        </>
    );
};

interface FlashcardProps {
    card: JapaneseWord;
    selectedLanguage: TranslationLanguage;
    handleCorrect: () => void;
    handleMistake: () => void;
}

const JapaneseFlashcard: React.FC<FlashcardProps> = ({
    card,
    selectedLanguage,
    handleCorrect: handlerCorrect,
    handleMistake: handlerMistake,
}) => {
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
        handlerCorrect();
    };

    const mistakePressed = () => {
        setShowAnswer(false);
        handlerMistake();
    };

    const ButtonGroups: () => JSX.Element = () => {
        if (showAnswer) {
            return (
                <>
                    <button className="btn btn-success flex-1" onClick={correctPressed}>
                        Correct
                        <IconCheck className="ml-2" />
                    </button>
                    <button className="btn btn-info flex-1" onClick={toggleAnswer}>
                        Hide
                    </button>
                    <button className="btn btn-error flex-1" onClick={mistakePressed}>
                        Wrong
                        <IconCancel className="ml-2" />
                    </button>
                </>
            );
        } else {
            return (
                <button className="btn btn-info flex-1" onClick={toggleAnswer}>
                    Show
                </button>
            );
        }
    };

    const color = badgeColor(card.type);

    return (
        <div className="card w-full bg-base-100 shadow-xl border border-base-300">
            <div className="card-body">
                {color && <div className={`badge ${color} badge-lg mb-4`}>{card.type}</div>}
                <div className="flex flex-col items-center min-h-[15rem] space-y-4">
                    <h1 className="text-4xl font-bold text-center">{text}</h1>
                    <p className="flex-0 text-lg mt-4">{showAnswer ? card.jp_pronunciation : ''}</p>
                    <Description showAnswer={showAnswer} card={card} />
                </div>
                <div className="flex justify-around gap-2 mt-4">{ButtonGroups()}</div>
            </div>
        </div>
    );
};

export default JapaneseFlashcard;
