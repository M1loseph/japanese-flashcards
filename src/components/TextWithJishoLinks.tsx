import { type FC } from 'react';
import { isKanji } from 'wanakana';

interface TextWithJishoLinksProps {
    text: string;
}

export const TextWithJishoLinks: FC<TextWithJishoLinksProps> = ({ text }) => {
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
