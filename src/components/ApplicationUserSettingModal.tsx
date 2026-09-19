import { type FC } from 'react';
import { createPortal } from 'react-dom';
import { useApplicationUserSetting } from '../services/ApplicationUserSetting';
import { BigButton } from './BigButton';
import { LanguageSelector } from './LanguageSelector';

interface ApplicationUserSettingModalProps {
    open: boolean;
    onClose: () => void;
}

export const ApplicationUserSettingModal: FC<ApplicationUserSettingModalProps> = ({ open, onClose }) => {
    const { selectedLanguage, setSelectedLanguage, simplifiedMode, setSimplifiedMode } = useApplicationUserSetting();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    return createPortal(
        <dialog onKeyDown={handleKeyDown} className={`modal ${open ? 'modal-open' : ''}`}>
            <div className="modal-box">
                <button
                    onClick={onClose}
                    className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2"
                    aria-label="Close settings"
                >
                    x
                </button>
                <h2 className="text-xl font-bold text-center mb-4">Settings</h2>

                <h3 className="text-base font-semibold text-slate-600 mb-2">DISPLAY MODE</h3>
                <div className="p-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                        <BigButton
                            onClick={() => setSimplifiedMode(false)}
                            active={!simplifiedMode}
                            text="Normal"
                            description="Contains Kanji"
                            icon="📖"
                        />
                        <BigButton
                            onClick={() => setSimplifiedMode(true)}
                            active={simplifiedMode}
                            text="Simplified"
                            description="Only Kana (Hiragana/Katakana)"
                            icon="⚡"
                        />
                    </div>
                </div>

                <div className="divider"></div>

                <h3 className="text-base font-semibold text-slate-600 mb-2">GAME LANGUAGE</h3>
                <div className="p-3">
                    <LanguageSelector selectedLanguage={selectedLanguage} onSelect={setSelectedLanguage} />
                </div>
            </div>
            <div className="modal-backdrop backdrop-blur-xs" onClick={onClose}></div>
        </dialog>,
        document.body,
    );
};
