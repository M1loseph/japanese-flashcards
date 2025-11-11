import { useEffect } from 'react';
import { useBlocker } from 'react-router';

const beforeUnloadEvent = 'beforeunload';
// Hook that blocks in-app route transitions (React Router) and browser unload (tab close/refresh)
// while `enabled` is true. It exposes UI state so the page can render a confirmation modal.
export function usePreventAccidentalLeave(enabled: boolean) {
    const blocker = useBlocker(enabled);
    const showPrompt = blocker.state === 'blocked';

    useEffect(() => {
        if (!enabled) return;
        const beforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
        };
        window.addEventListener(beforeUnloadEvent, beforeUnload);
        return () => window.removeEventListener(beforeUnloadEvent, beforeUnload);
    }, [enabled]);

    const confirmLeave = () => {
        const proceed = blocker.proceed;
        if (proceed !== undefined) {
            proceed();
        }
    };

    const cancelLeave = () => {
        const reset = blocker.reset;
        if (reset !== undefined) {
            reset();
        }
    };

    return { showPrompt, confirmLeave, cancelLeave };
}

export default usePreventAccidentalLeave;
