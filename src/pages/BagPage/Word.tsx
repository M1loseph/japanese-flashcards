import { type FC } from 'react';
import type { JapaneseWord } from '../../japanese/types';
import { HardWordIcon } from '../../components/HardWordIcon';
import { Badges } from '../../components/Badges';
import { TextWithJishoLinks } from '../../components/TextWithJishoLinks';
import { useGameSettingsContext } from '../../context/GameStateContext';

interface WordProps {
    word: JapaneseWord;
}

export const Word: FC<WordProps> = ({ word }) => {
    const { selectedLanguage } = useGameSettingsContext();

    return (
        <div className="card card-xs bg-base-100 shadow-md">
            <div className="card-body">
                <div className="flex flex-row items-center justify-between">
                    <Badges size="sm" card={word} showAnswer />
                    <HardWordIcon size="sm" word={word} />
                </div>
                <h3 className="text-lg text-primary font-semibold text-center w-full">
                    <TextWithJishoLinks text={word.jp} />
                </h3>
                <hr className="my-1 border-slate-300 border-dashed" />
                {word.jp_pronunciation && <p className="text-sm text-semibold">{word.jp_pronunciation}</p>}
                <p className="text-sm text-slate-600 italic">{word[selectedLanguage]}</p>
            </div>
        </div>
    );
};
