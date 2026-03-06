import { type FC } from 'react';
import { TextWithJishoLinks } from '../../../components/TextWithJishoLinks';
import { useMainText } from '../../../hooks/useText';
import type { TextWithPronunciation } from '../../../japanese/types';

interface FlashcardMainTextProps {
    question: string;
    answer: TextWithPronunciation;
    showAnswer: boolean;
}

export const FlashcardMainText: FC<FlashcardMainTextProps> = ({ question, answer, showAnswer }) => {
    const answerText = useMainText(answer);
    const text = showAnswer ? answerText : question;
    return (
        <h1 className="text-3xl text-center font-bold">
            <TextWithJishoLinks text={text} />
        </h1>
    );
};
