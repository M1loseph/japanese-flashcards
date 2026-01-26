import React from 'react';

interface FlashcardMainTextProps {
    question: string;
    answer: string;
    pronounciation?: string;
    showAnswer: boolean;
}

const isKanji = (character: string): boolean => {
    const code = character.charCodeAt(0);
    return (code >= 0x4e00 && code <= 0x9faf) || (code >= 0x3400 && code <= 0x4dbf);
};

const wrapKanjiWithLink = (text: string): React.ReactNode[] => {
    return text.split('').map((char, index) => {
        if (isKanji(char)) {
            return (
                <a
                    key={char + index}
                    href={`https://jisho.org/search/${char}%23kanji`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline link-primary underline-offset-8"
                >
                    {char}
                </a>
            );
        } else {
            return char;
        }
    });
};

export const FlashcardMainText: React.FC<FlashcardMainTextProps> = ({
    question,
    answer,
    pronounciation,
    showAnswer,
}) => {
    const text = showAnswer ? wrapKanjiWithLink(answer) : question;
    return (
        <h1 className="text-3xl font-bold">
            {text} {showAnswer && pronounciation ? `(${pronounciation})` : ''}
        </h1>
    );
};
