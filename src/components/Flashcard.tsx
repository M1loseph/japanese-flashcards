import { IconCancel, IconCheck } from '@tabler/icons-react';
import { useState, type JSX } from 'react';
import { TranslationLanguages, type TranslationLanguage } from '../TranslationLanguage';
import type { JapaneseWord } from '../japanese';
import { NOT_AVAILABLE, WordTypes, type WordType } from '../japanese/types';

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
    if (!showAnswer || !card.jp_description || card.jp === NOT_AVAILABLE) {
        return null;
    }
    if (typeof card.jp_description === 'string') {
        return <p className="mt-4">{card.jp_description}</p>;
    }
    return (
        <ul className="list-disc pl-6 space-y-1">
            {card.jp_description.map((desc) => (
                <li key={desc}>
                    <span className="text-lg">{desc}</span>
                </li>
            ))}
        </ul>
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

    const selectAnswerText = () => {
        if (card.jp === NOT_AVAILABLE && card.jp_description) {
            return card.jp_description;
        }
        return card.jp;
    };

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

    const text = showAnswer ? selectAnswerText() : question;

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
