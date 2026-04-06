import { type FC } from 'react';
import { TextWithJishoLinks } from '../../../components/TextWithJishoLinks';
import { useMainText, useSecondaryText } from '../../../hooks/useText';
import type { TextWithPronunciation } from '../../../japanese/types';

interface FlashcardMainTextProps {
    question: string;
    answer: TextWithPronunciation;
    showAnswer: boolean;
}

export const FlashcardMainText: FC<FlashcardMainTextProps> = ({ question, answer, showAnswer }) => {
    const answerText = useMainText(answer);
    const secondaryText = useSecondaryText(answer);

    const text = showAnswer ? answerText : question;
    const secondary = showAnswer ? secondaryText : undefined;
    return (
        <>
            <h1 className="text-3xl text-center font-bold">
                <TextWithJishoLinks text={text} />
            </h1>
            {secondary && <h2 className="text-2xl text-center text-base-content/60 mt-4">{secondary}</h2>}
        </>
    );
};
