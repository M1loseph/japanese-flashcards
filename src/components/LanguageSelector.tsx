import { type FC } from 'react';
import { type TranslationLanguage, TranslationLanguages } from '../types/TranslationLanguage';
import { BigButton } from './BigButton';

interface LanguageSelectorProps {
    selectedLanguage: TranslationLanguage;
    onSelect: (language: TranslationLanguage) => void;
}

export const LanguageSelector: FC<LanguageSelectorProps> = ({ selectedLanguage, onSelect }) => {
    const handleSelectPolish = () => {
        onSelect(TranslationLanguages.POLISH);
    };

    const handleSelectEnglish = () => {
        onSelect(TranslationLanguages.ENGLISH);
    };

    const polishActive = selectedLanguage === TranslationLanguages.POLISH;
    const englishActive = selectedLanguage === TranslationLanguages.ENGLISH;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
            <BigButton iconDirection="row" onClick={handleSelectPolish} active={polishActive} text="Polish" icon="🇵🇱" />
            <BigButton
                iconDirection="row"
                onClick={handleSelectEnglish}
                active={englishActive}
                text="English"
                icon="🇬🇧"
            />
        </div>
    );
};
