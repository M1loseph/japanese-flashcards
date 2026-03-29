import { type FC } from 'react';
import { Badges } from '../../components/Badges';
import { HardTextIcon } from '../../components/HardTextIcon';
import { TextWithJishoLinks } from '../../components/TextWithJishoLinks';
import { useGameSettingsContext } from '../../context/GameStateContext';
import type { TranslatedJapaneseText } from '../../japanese/types';

interface WordProps {
    word: TranslatedJapaneseText;
}

export const Word: FC<WordProps> = ({ word }) => {
    const { selectedLanguage } = useGameSettingsContext();
    const jp = word.jp;

    return (
        <div className="card card-xs bg-base-100 shadow-md">
            <div className="card-body">
                <div className="flex flex-row items-center justify-between">
                    <Badges size="sm" card={word} showAnswer />
                    <HardTextIcon size="sm" word={word} />
                </div>
                <h3 className="text-lg text-primary font-semibold text-center w-full">
                    <TextWithJishoLinks text={jp.text} />
                </h3>
                <hr className="my-1 border-slate-300 border-dashed" />
                {jp.pronunciation && <p className="text-sm text-semibold">{jp.pronunciation}</p>}
                <p className="text-sm text-slate-600 italic">{word[selectedLanguage]}</p>
            </div>
        </div>
    );
};
