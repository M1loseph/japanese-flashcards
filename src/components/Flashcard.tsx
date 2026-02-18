import { type FC } from 'react';
import { type TranslationLanguage } from '../types/TranslationLanguage';
import type { JapaneseWord } from '../japanese';
import { Badges } from './Badges';
import { FlashcardMainText } from './FlashcardMainText';
import { useHardWords } from '../context/HardWordsContext';
import { IconStar, IconStarFilled } from '@tabler/icons-react';

interface DescriptionProps {
    showAnswer: boolean;
    card: JapaneseWord;
}

const Description: FC<DescriptionProps> = ({ showAnswer, card }) => {
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
    showAnswer: boolean;
}

const JapaneseFlashcard: FC<FlashcardProps> = ({ card, selectedLanguage, showAnswer }) => {
    const question: string = card[selectedLanguage];
    const { isHardWord, toggleHardWord } = useHardWords();
    const isHard = isHardWord(card.jp);

    return (
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row rounded-xl bg-base-100 shadow-2xl border border-base-300">
            <div className="flex-1 flex flex-col p-5">
                <div className="flex items-center">
                    <Badges card={card} showAnswer={showAnswer} />
                    <div className="grow" />
                    <button className="btn btn-ghost btn-circle z-10" onClick={() => toggleHardWord(card.jp)}>
                        {isHard ? (
                            <IconStarFilled className="text-yellow-500" />
                        ) : (
                            <IconStar className="text-base-content/30" />
                        )}
                    </button>
                </div>
                <div className="grow flex flex-col justify-center items-stretch">
                    <FlashcardMainText
                        question={question}
                        answer={card.jp}
                        pronounciation={card.jp_pronunciation}
                        showAnswer={showAnswer}
                    />
                    <Description showAnswer={showAnswer} card={card} />
                </div>
            </div>
            {card.image_url && (
                <div className="flex-1 min-h-0">
                    <img src={card.image_url} alt={card.jp} className="object-contain w-full h-full rounded-r-xl" />
                </div>
            )}
        </div>
    );
};

export default JapaneseFlashcard;
