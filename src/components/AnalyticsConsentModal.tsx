import { useEffect, useRef, type FC } from 'react';
import { type AnalyticsConsent, AnalyticsConsentValues } from '../types/AnalyticsConsent';

interface AnalyticsConsentModalProps {
    onConsent: (consent: AnalyticsConsent) => void;
}

export const AnalyticsConsentModal: FC<AnalyticsConsentModalProps> = ({ onConsent }) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }, [modalRef]);

    const handleClose = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const handleAccept = () => {
        handleClose();
        onConsent(AnalyticsConsentValues.ACCEPTED);
    };

    const handleDecline = () => {
        handleClose();
        onConsent(AnalyticsConsentValues.DECLINED);
    };

    return (
        <dialog className="modal" aria-label="Analytics consent" aria-modal="true" ref={modalRef}>
            <div className="modal-box max-w-md">
                <h2 className="text-xl font-bold text-center mb-2">Analytics Consent</h2>

                <p className="text-center text-sm text-base-content/70 mb-6">
                    We use Google Analytics to understand how the app is used and improve the experience. No personal
                    data is collected.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                    <button
                        className="btn btn-primary flex-1"
                        onClick={handleAccept}
                        aria-label="Accept analytics tracking"
                    >
                        Accept
                    </button>
                    <button
                        className="btn btn-ghost flex-1"
                        onClick={handleDecline}
                        aria-label="Decline analytics tracking"
                    >
                        Decline
                    </button>
                </div>
            </div>
            <div className="modal-backdrop backdrop-blur-xs" />
        </dialog>
    );
};
