import { IconRestore } from '@tabler/icons-react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../services/GameContext';

export const ExistingGameAlert: FC = () => {
    const navigate = useNavigate();
    const { gameState } = useGameContext();

    if (!gameState) {
        return null;
    }

    const handleResumeSave = () => {
        navigate('/game/shuffle');
    };

    return (
        <section>
            <div role="alert" className="alert bg-warning/5 border-warning mb-10">
                <div className="p-2 bg-warning/40 rounded-md">
                    <IconRestore color="orange" />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-warning">GAME IN PROGRESS</span>
                    <span className="text-lg font-medium">
                        {gameState.title} ({gameState.flashcards.filter((card) => card.answered).length}/
                        {gameState.flashcards.length})
                    </span>
                </div>

                <button onClick={handleResumeSave} className="btn btn-warning">
                    Resume
                </button>
            </div>
        </section>
    );
};
