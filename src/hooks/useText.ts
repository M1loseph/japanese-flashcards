import type { TextWithPronunciation } from '../japanese/types';
import { useGameContext } from '../services/GameContext';

export const useMainText = (word: TextWithPronunciation): string => {
    const { gameState } = useGameContext();
    if (!gameState) {
        throw new Error('useMainText must be used within a GameProvider');
    }
    const { simplifiedMode } = gameState;
    if (simplifiedMode) {
        if (!word.pronunciation) {
            return word.text;
        } else if (typeof word.pronunciation === 'string') {
            return word.pronunciation;
        } else {
            return word.pronunciation.join(' / ');
        }
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
        if (typeof word.pronunciation === 'string') {
            return word.pronunciation;
        } else {
            return word.pronunciation.join(' / ');
        }
    }
    return undefined;
};
