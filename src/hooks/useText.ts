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
    if (word.pronunciation) {
        return `${word.text} (${word.pronunciation})`;
    }
    return word.text;
};

export const useOptionalPronunciation = (word: TextWithPronunciation): string | undefined => {
    const { gameState } = useGameContext();
    if (!gameState) {
        throw new Error('useOptionalPronunciation must be used within a GameProvider');
    }
    const { simplifiedMode } = gameState;
    if (simplifiedMode) {
        return undefined;
    }
    return word.pronunciation;
};
