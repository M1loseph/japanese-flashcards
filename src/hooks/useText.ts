import type { TextWithPronunciation } from '../japanese/types';
import { useApplicationUserSetting } from '../services/ApplicationUserSetting';

export const useMainText = (word: TextWithPronunciation): string => {
    const { simplifiedMode } = useApplicationUserSetting();
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
    const { simplifiedMode } = useApplicationUserSetting();
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
