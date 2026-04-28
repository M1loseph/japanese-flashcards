import { IconCheck, IconEye, IconEyeOff, IconRepeat } from '@tabler/icons-react';
import type { FC } from 'react';

interface FlashcardButtonsProps {
    showAnswer: boolean;
    disableButtons: boolean;
    toggleAnswer: () => void;
    correctPressed: () => void;
    mistakePressed: () => void;
}

export const FlashcardButtons: FC<FlashcardButtonsProps> = ({
    showAnswer,
    toggleAnswer,
    correctPressed,
    mistakePressed,
    disableButtons,
}) => {
    return (
        <div className="flex justify-around gap-3 pt-4 flex-col md:flex-row">
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
        </div>
    );
};
