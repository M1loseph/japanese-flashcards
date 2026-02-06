import { type FC } from 'react';
import { type TranslationLanguage, TranslationLanguages } from '../TranslationLanguage';

interface LanguageSelectorProps {
    selectedLanguage: TranslationLanguage;
    onSelect: (language: TranslationLanguage) => void;
}

export const LanguageSelector: FC<LanguageSelectorProps> = ({ selectedLanguage, onSelect }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
            <button
                onClick={() => onSelect(TranslationLanguages.POLISH)}
                className={`
          relative overflow-hidden p-6 rounded-xl border-2 transition-all duration-200 flex items-center justify-center gap-4 group
          ${
              selectedLanguage === TranslationLanguages.POLISH
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-slate-200 hover:border-primary/50 hover:shadow-sm'
          }
        `}
            >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-200">🇵🇱</span>
                <span
                    className={`text-lg font-medium ${selectedLanguage === TranslationLanguages.POLISH ? 'text-primary' : 'text-slate-600'}`}
                >
                    Polish
                </span>
            </button>

            <button
                onClick={() => onSelect(TranslationLanguages.ENGLISH)}
                className={`
          relative overflow-hidden p-6 rounded-xl border-2 transition-all duration-200 flex items-center justify-center gap-4 group
          ${
              selectedLanguage === TranslationLanguages.ENGLISH
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-slate-200 hover:border-primary/50 hover:shadow-sm'
          }
        `}
            >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-200">🇬🇧</span>
                <span
                    className={`text-lg font-medium ${selectedLanguage === TranslationLanguages.ENGLISH ? 'text-primary' : 'text-slate-600'}`}
                >
                    English
                </span>
            </button>
        </div>
    );
};
