import { type FC } from 'react';
import type { JapaneseWord } from '../japanese';
import { useHardWords } from '../context/HardWordsContext';
import { IconStar, IconStarFilled } from '@tabler/icons-react';

type HardWordIconSize = 'sm' | 'md';

const HardWordIconSizeMapping = {
    sm: 20,
    md: 24,
};

interface HardWordIconProps {
    size?: HardWordIconSize;
    word: JapaneseWord;
}

export const HardWordIcon: FC<HardWordIconProps> = ({ word, size = 'md' }) => {
    const { isHardWord, toggleHardWord } = useHardWords();
    const isHard = isHardWord(word);

    const iconSize = HardWordIconSizeMapping[size];

    const handleToggleHardWord = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        toggleHardWord(word);
    };
    return (
        <button className="btn btn-ghost btn-circle z-10" onClick={handleToggleHardWord}>
            {isHard ? (
                <IconStarFilled size={iconSize} className="text-yellow-500" />
            ) : (
                <IconStar size={iconSize} className="text-base-content/30" />
            )}
        </button>
    );
};
