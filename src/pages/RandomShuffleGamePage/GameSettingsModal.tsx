import { type FC } from 'react';
import { LanguageSelector } from '../../components/LanguageSelector';
import type { TranslationLanguage } from '../../types/TranslationLanguage';

interface GameSettingsModalProps {
    open: boolean;
    onClose: () => void;
    currentLanguage: TranslationLanguage;
    updateLanguage: (language: TranslationLanguage) => void;
    simplifiedMode: boolean;
    updateSimplifiedMode: (enabled: boolean) => void;
}

export const GameSettingsModal: FC<GameSettingsModalProps> = ({
    open,
    onClose,
    currentLanguage,
    updateLanguage,
    simplifiedMode,
    updateSimplifiedMode,
}) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    const handleSelectNormal = () => {
        updateSimplifiedMode(false);
    };

    const handleSelectSimplified = () => {
        updateSimplifiedMode(true);
    };

    return (
        <dialog onKeyDown={handleKeyDown} className={`modal ${open ? 'modal-open' : ''}`}>
            <div className="modal-box">
                <button onClick={onClose} className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                </button>
                <h2 className="text-xl font-bold text-center mb-4">Settings</h2>

                <h3 className="text-base font-semibold text-slate-600 mb-2">DISPLAY MODE</h3>
                <div className="p-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                        <button
                            onClick={handleSelectNormal}
                            aria-label="Normal mode"
                            tabIndex={0}
                            className={`
                                relative overflow-hidden p-5 rounded-xl border-2 transition-all duration-200
                                flex flex-col items-center gap-2 group
                                ${
                                    !simplifiedMode
                                        ? 'border-primary bg-primary/5 shadow-md'
                                        : 'border-slate-200 hover:border-primary/50 hover:shadow-sm'
                                }
                            `}
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-200">📖</span>
                            <span
                                className={`text-lg font-medium ${!simplifiedMode ? 'text-primary' : 'text-slate-600'}`}
                            >
                                Normal
                            </span>
                            <span className="text-xs text-slate-400 text-center">Contains Kanji</span>
                        </button>

                        <button
                            onClick={handleSelectSimplified}
                            aria-label="Simplified mode"
                            tabIndex={0}
                            className={`
                                relative overflow-hidden p-5 rounded-xl border-2 transition-all duration-200
                                flex flex-col items-center gap-2 group
                                ${
                                    simplifiedMode
                                        ? 'border-primary bg-primary/5 shadow-md'
                                        : 'border-slate-200 hover:border-primary/50 hover:shadow-sm'
                                }
                            `}
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-200">⚡</span>
                            <span
                                className={`text-lg font-medium ${simplifiedMode ? 'text-primary' : 'text-slate-600'}`}
                            >
                                Simplified
                            </span>
                            <span className="text-xs text-slate-400 text-center">Only Kana (Hiragana/Katakana)</span>
                        </button>
                    </div>
                </div>

                <div className="divider"></div>

                <h3 className="text-base font-semibold text-slate-600 mb-2">GAME LANGUAGE</h3>
                <div className="p-3">
                    <LanguageSelector selectedLanguage={currentLanguage} onSelect={updateLanguage} />
                </div>
            </div>
            <div className="modal-backdrop backdrop-blur-xs" onClick={onClose}></div>
        </dialog>
    );
};
