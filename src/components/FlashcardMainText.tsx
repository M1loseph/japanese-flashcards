import { type FC } from 'react';
import { TextWithJishoLinks } from './TextWithJishoLinks';

interface FlashcardMainTextProps {
    question: string;
    answer: string;
    pronounciation?: string;
    showAnswer: boolean;
}

export const FlashcardMainText: FC<FlashcardMainTextProps> = ({ question, answer, pronounciation, showAnswer }) => {
    const text = showAnswer ? answer : question;
    return (
        <h1 className="text-3xl text-center font-bold">
            <TextWithJishoLinks text={text} />
            {showAnswer && pronounciation ? `(${pronounciation})` : ''}
        </h1>
    );
};
