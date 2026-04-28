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
}

export interface FlashcardHandle {
    playAnimation: (result: boolean) => void;
}

const NO_GLOW = '0 0 0px 0px rgba(0, 0, 0, 0)';

const GLOW_GREEN = '0 0 20px 6px rgba(74, 222, 128, 0.7)';
const GLOW_RED = '0 0 20px 6px rgba(248, 113, 113, 0.7)';

const JapaneseFlashcard = forwardRef<FlashcardHandle, FlashcardProps>(({ card, selectedLanguage, showAnswer }, ref) => {
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
        <div className="flex-1 min-h-0 rounded-xl bg-base-100 shadow-2xl border border-base-300">
            <motion.div
                className="w-full h-full flex flex-col lg:flex-row rounded-xl"
                animate={{
                    boxShadow: animationPlaying ? (glowResult ? GLOW_GREEN : GLOW_RED) : NO_GLOW,
                }}
                transition={{ duration: 0.3, repeat: animationPlaying ? 1 : 0, repeatType: 'reverse' }}
                onAnimationComplete={handleAnimationComplete}
            >
                <div className="flex-1 flex flex-col p-5">
                    <div className="flex items-center justify-between">
                        <Badges card={card} showAnswer={showAnswer} />
                        <HardTextIcon word={card} />
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
        </div>
    );
});

JapaneseFlashcard.displayName = 'JapaneseFlashcard';

export default JapaneseFlashcard;
