import { useEffect, useState } from 'react';
import { useBlocker } from 'react-router';

// Hook that blocks in-app route transitions (React Router) and browser unload (tab close/refresh)
// while `enabled` is true. It exposes UI state so the page can render a confirmation modal.
export function usePreventAccidentalLeave(enabled: boolean) {
    const blocker = useBlocker(enabled);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        if (blocker.state === 'blocked') {
            setShowPrompt(true);
        } else if (blocker.state === 'unblocked') {
            setShowPrompt(false);
        }
    }, [blocker.state]);

    useEffect(() => {
        if (!enabled) return;
        const beforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
        };
        window.addEventListener('beforeunload', beforeUnload);
        return () => window.removeEventListener('beforeunload', beforeUnload);
    }, [enabled]);

    const confirmLeave = () => {
        setShowPrompt(false);
        if (typeof (blocker as any).proceed === 'function') {
            (blocker as any).proceed();
        }
    };

    const cancelLeave = () => {
        setShowPrompt(false);
        // keep user on the page
        if (typeof (blocker as any).reset === 'function') {
            (blocker as any).reset();
        }
    };

    return { showPrompt, confirmLeave, cancelLeave };
}

export default usePreventAccidentalLeave;
