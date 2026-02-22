import { useMemo, type FC } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useGameContext } from '../context/GameContext';
import { shuffleArrayInPlace } from '../utils.ts';
import { FixedSizePage } from './common/FixedSizePage.tsx';

const SummaryPage: FC = () => {
    const navigate = useNavigate();
    const { gameState, setGameState, clearGame } = useGameContext();

    const gameFinished = gameState ? gameState.currentFlashcardIndex === gameState.flashcards.length : false;

    const wrongAnswers = useMemo(() => {
        if (!gameState) return [];
        return gameState.flashcards.filter((card) => card.answered && !card.correct);
    }, [gameState]);


    if (!gameState) {
        return <Navigate to="/" replace />;
    }

    if (!gameFinished) {
        return <Navigate to="/game/shuffle" replace />;
    }

    const prepareSetForRepeat = () => {
        const wrongAnswers = gameState.flashcards.filter((card) => card.answered && !card.correct);

        const newFlashcards = wrongAnswers.map((card) => ({ ...card, answered: false }));
        shuffleArrayInPlace(newFlashcards);

        setGameState({
            ...gameState,
            flashcards: newFlashcards,
            currentFlashcardIndex: 0,
        });
        navigate('/game/shuffle');
    };

    const handleFinish = () => {
        clearGame();
        navigate('/');
    };

    return (
        <FixedSizePage>
            <div className="pt-12 h-full flex flex-col items-center space-y-6">
                <h2 className="text-3xl font-bold">Congratulations, you finished!</h2>
                <div className="flex gap-4">
                    {wrongAnswers.length !== 0 && (
                        <button className="btn btn-success btn-lg" onClick={prepareSetForRepeat}>
                            Repeat mistakes ({wrongAnswers.length})
                        </button>
                    )}
                    <button className="btn btn-lg" onClick={handleFinish}>
                        Go home
                    </button>
                </div>
            </div>
        </FixedSizePage>
    );
};

export default SummaryPage;
