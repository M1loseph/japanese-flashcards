import { type FC } from 'react';
import { LanguageSelector } from '../../components/LanguageSelector';
import type { TranslationLanguage } from '../../types/TranslationLanguage';

interface GameSettingsModalProps {
    open: boolean;
    onClose: () => void;
    currentLanguage: TranslationLanguage;
    updateLanguage: (language: TranslationLanguage) => void;
}

export const GameSettingsModal: FC<GameSettingsModalProps> = ({ open, onClose, currentLanguage, updateLanguage }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <dialog onKeyDown={handleKeyDown} className={`modal ${open ? 'modal-open' : ''}`}>
            <div className="modal-box">
                <button onClick={onClose} className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                </button>
                <h2 className="text-xl font-bold text-center mb-4">Settings</h2>
                <h3 className="text-base font-semibold text-slate-600 mb-2">GAME LANGUAGE</h3>
                <div className="p-3">
                    <LanguageSelector selectedLanguage={currentLanguage} onSelect={updateLanguage} />
                </div>
            </div>
            <div className="modal-backdrop backdrop-blur-xs" onClick={onClose}></div>
        </dialog>
    );
};
