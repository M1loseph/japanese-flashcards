import { IconCheck, IconEye, IconEyeOff, IconPlayerSkipForward, IconRepeat } from '@tabler/icons-react';
import { useState, type FC } from 'react';

interface FlashcardButtonsProps {
    showAnswer: boolean;
    disableButtons: boolean;
    toggleAnswer: () => void;
    correctPressed: () => void;
    mistakePressed: () => void;
    skipRemainingFlashcards: () => Promise<void>;
}

export const FlashcardButtons: FC<FlashcardButtonsProps> = ({
    showAnswer,
    toggleAnswer,
    correctPressed,
    mistakePressed,
    disableButtons,
    skipRemainingFlashcards,
}) => {
    const [showPrompt, setShowPrompt] = useState(false);
    const handleCancelSkip = () => setShowPrompt(false);
    const handleConfirmSkip = async () => {
        setShowPrompt(false);
        await skipRemainingFlashcards();
    };
    return (
        <div className="grid justify-around gap-3 pt-4 grid-cols-2 md:grid-cols-4">
            <button
                disabled={!showAnswer || disableButtons}
                className="btn btn-success md:flex-1"
                onClick={correctPressed}
            >
                <IconCheck />
                Correct
            </button>
            <button disabled={disableButtons} className="btn btn-info md:flex-1" onClick={toggleAnswer}>
                {showAnswer ? <IconEyeOff /> : <IconEye />}
                {showAnswer ? 'Hide' : 'Show'}
            </button>
            <button
                disabled={!showAnswer || disableButtons}
                className="btn btn-error md:flex-1"
                onClick={mistakePressed}
            >
                <IconRepeat />
                Wrong
            </button>
            <button disabled={disableButtons} className="btn btn-warning md:flex-1" onClick={() => setShowPrompt(true)}>
                <IconPlayerSkipForward />
                Skip remaining
            </button>
            <dialog className={`modal ${showPrompt ? 'modal-open' : ''}`}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Skip remaining flashcards?</h3>
                    <p className="py-4">
                        Are you sure you want to skip the remaining flashcards? This will proceed you directly to the
                        results screen, and the remaining flashcards will be dropped from this session.
                    </p>
                    <div className="modal-action">
                        <button className="btn" onClick={handleCancelSkip}>
                            Don't skip
                        </button>
                        <button className="btn btn-warning" onClick={handleConfirmSkip}>
                            Yes, I want to skip
                        </button>
                    </div>
                </div>
                <div className="modal-backdrop" onClick={handleCancelSkip}></div>
            </dialog>
        </div>
    );
};
