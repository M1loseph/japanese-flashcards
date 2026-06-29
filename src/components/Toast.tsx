import { type FC, useEffect } from 'react';

interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'warning';
    open: boolean;
    autoDismissTime?: number;
    handleClose?: () => void;
}

export const Toast: FC<ToastProps> = ({ message, type, open, autoDismissTime = 3000, handleClose }) => {
    const getAlertClass = (): string => {
        switch (type) {
            case 'success':
                return 'alert-success';
            case 'error':
                return 'alert-error';
            case 'warning':
                return 'alert-warning';
        }
    };

    useEffect(() => {
        if (open && handleClose) {
            const timer = setTimeout(() => {
                handleClose();
            }, autoDismissTime);
            return () => clearTimeout(timer);
        }
    }, [open, autoDismissTime, handleClose]);

    if (!open) {
        return null;
    }

    return (
        <div className="toast z-50">
            <div className={`alert ${getAlertClass()}`}>
                <span>{message}</span>
            </div>
        </div>
    );
};
