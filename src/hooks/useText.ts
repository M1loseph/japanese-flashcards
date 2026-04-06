import { useGameContext } from '../context/GameContext';
import type { TextWithPronunciation } from '../japanese/types';

export const useMainText = (word: TextWithPronunciation): string => {
    const { gameState } = useGameContext();
    if (!gameState) {
        throw new Error('useMainText must be used within a GameProvider');
    }
    const { simplifiedMode } = gameState;
    if (simplifiedMode) {
        return word.pronunciation || word.text;
    }
    return word.text;
};

export const useSecondaryText = (word: TextWithPronunciation): string | undefined => {
    const { gameState } = useGameContext();
    if (!gameState) {
        throw new Error('useSecondaryText must be used within a GameProvider');
    }
    const { simplifiedMode } = gameState;
    if (simplifiedMode) {
        return undefined;
    }
    if (word.pronunciation) {
        return word.pronunciation;
    }
    return undefined;
};
