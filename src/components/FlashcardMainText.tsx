import { type FC } from 'react';
import { TextWithJishoLinks } from './TextWithJishoLinks';

interface FlashcardMainTextProps {
    question: string;
    answer: string;
    pronunciation?: string;
    showAnswer: boolean;
    simplifiedMode: boolean;
}

export const FlashcardMainText: FC<FlashcardMainTextProps> = ({
    question,
    answer,
    pronunciation,
    showAnswer,
    simplifiedMode,
}) => {
    const textSelector = () => {
        if (!showAnswer) {
            return question;
        }
        if (simplifiedMode && pronunciation) {
            return pronunciation;
        }
        if (pronunciation) {
            return `${answer} (${pronunciation})`;
        }
        return answer;
    };
    return (
        <h1 className="text-3xl text-center font-bold">
            <TextWithJishoLinks text={textSelector()} />
        </h1>
    );
};
