import { useGameContext } from '../context/GameContext';
import type { TextWithPronunciation } from '../japanese/types';

export const useMainText = (word: TextWithPronunciation | undefined): string => {
    const { gameState } = useGameContext();
    if (!gameState) {
        throw new Error('useMainText must be used within a GameProvider');
    }
    if (!word) {
        return '';
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
