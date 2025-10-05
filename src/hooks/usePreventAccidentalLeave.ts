import { useEffect, useState } from 'react';
import { useBlocker } from 'react-router';

const beforeUnloadEvent = 'beforeunload';
// Hook that blocks in-app route transitions (React Router) and browser unload (tab close/refresh)
// while `enabled` is true. It exposes UI state so the page can render a confirmation modal.
export function usePreventAccidentalLeave(enabled: boolean) {
    const blocker = useBlocker(enabled);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        if (blocker.state === "blocked") {
            setShowPrompt(true);
        } else if (blocker.state === "unblocked") {
            setShowPrompt(false);
        }
    }, [blocker.state]);

    useEffect(() => {
        if (!enabled) return;
        const beforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
        };
        window.addEventListener(beforeUnloadEvent, beforeUnload);
        return () => window.removeEventListener(beforeUnloadEvent, beforeUnload);
    }, [enabled]);

    const confirmLeave = () => {
        setShowPrompt(false);
        const proceed = blocker.proceed;
        if (proceed !== undefined) {
            proceed();
        }
    };

    const cancelLeave = () => {
        setShowPrompt(false);
        const reset = blocker.reset;
        if (reset !== undefined) {
            reset();
        }
    };

    return { showPrompt, confirmLeave, cancelLeave };
}

export default usePreventAccidentalLeave;
