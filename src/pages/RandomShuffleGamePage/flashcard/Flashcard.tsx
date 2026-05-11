import { IconArrowBackUp } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { Badges } from '../../../components/Badges';
import { HardTextIcon } from '../../../components/HardTextIcon';
import type { TranslatedJapaneseText } from '../../../japanese';
import { type TranslationLanguage } from '../../../types/TranslationLanguage';
import { Description } from './Description';
import { FlashcardMainText } from './FlashcardMainText';

interface FlashcardProps {
    card: TranslatedJapaneseText;
    selectedLanguage: TranslationLanguage;
    showAnswer: boolean;
    disableGoBack: boolean;
    undoLastAction: () => void;
}

export interface FlashcardHandle {
    playAnimation: (result: boolean) => void;
}

const SHADOW = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 20px -10px rgba(0, 0, 0, 0.2)';

const GLOW_GREEN = '0 0 20px 6px rgba(74, 222, 128, 0.7)';
const GLOW_RED = '0 0 20px 6px rgba(248, 113, 113, 0.7)';

const JapaneseFlashcard = forwardRef<FlashcardHandle, FlashcardProps>(
    ({ card, selectedLanguage, showAnswer, undoLastAction, disableGoBack }, ref) => {
        const question: string = card[selectedLanguage];
        const [animationPlaying, setAnimationPlaying] = useState(false);
        const [glowResult, setGlowResult] = useState(true);

        useImperativeHandle(ref, () => ({
            playAnimation(result: boolean) {
                setGlowResult(result);
                setAnimationPlaying(true);
            },
        }));

        const handleAnimationComplete = () => {
            setAnimationPlaying(false);
        };

        return (
            <motion.div
                className="flex-1 min-h-0 bg-base-100 border border-base-300 flex flex-col lg:flex-row rounded-xl"
                animate={{
                    boxShadow: animationPlaying ? (glowResult ? GLOW_GREEN : GLOW_RED) : SHADOW,
                    y: animationPlaying ? -8 : 0,
                }}
                transition={{ duration: 0.3, repeat: animationPlaying ? 1 : 0, repeatType: 'reverse' }}
                onAnimationComplete={handleAnimationComplete}
            >
                <div className="flex-1 flex flex-col p-5">
                    <div className="flex items-center justify-between">
                        <Badges card={card} showAnswer={showAnswer} />
                        <div>
                            <button
                                className="btn btn-ghost btn-circle z-10"
                                onClick={undoLastAction}
                                disabled={disableGoBack}
                            >
                                <IconArrowBackUp />
                            </button>
                            <HardTextIcon word={card} />
                        </div>
                    </div>
                    <div className="grow flex flex-col justify-center items-stretch">
                        <FlashcardMainText question={question} answer={card.jp} showAnswer={showAnswer} />
                        <Description showAnswer={showAnswer} card={card} />
                    </div>
                </div>
                {card.image_url && (
                    <div className="flex-1 min-h-0">
                        <img
                            src={card.image_url}
                            alt={card.jp.text}
                            className="object-contain w-full h-full rounded-r-xl"
                        />
                    </div>
                )}
            </motion.div>
        );
    },
);

JapaneseFlashcard.displayName = 'JapaneseFlashcard';

export default JapaneseFlashcard;
