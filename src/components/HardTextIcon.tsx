import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { type FC } from 'react';
import { useHardText } from '../context/HardWordsContext';
import type { TranslatedJapaneseText } from '../japanese';

type HardWordIconSize = 'sm' | 'md';

const HardWordIconSizeMapping = {
    sm: 20,
    md: 24,
};

interface HardWordIconProps {
    size?: HardWordIconSize;
    word: TranslatedJapaneseText;
}

export const HardTextIcon: FC<HardWordIconProps> = ({ word, size = 'md' }) => {
    const { isHardText, toggleHardText } = useHardText();
    const isHard = isHardText(word);

    const iconSize = HardWordIconSizeMapping[size];

    const handleToggleHardText = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        toggleHardText(word);
    };
    return (
        <button className="btn btn-ghost btn-circle z-10" onClick={handleToggleHardText}>
            {isHard ? (
                <IconStarFilled size={iconSize} className="text-yellow-500" />
            ) : (
                <IconStar size={iconSize} className="text-base-content/30" />
            )}
        </button>
    );
};
