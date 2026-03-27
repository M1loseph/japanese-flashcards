import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DevelopmentOnly } from './DevelopmentOnly';

interface HeaderProps {
    preHomeNavigationHook?: () => void;
    additionalComponents?: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ preHomeNavigationHook, additionalComponents }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        if (preHomeNavigationHook) {
            preHomeNavigationHook();
        }
        navigate('/');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleHomeClick();
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md shadow-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                <div
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                    tabIndex={0}
                    role="button"
                    aria-label="Home"
                    onKeyDown={handleKeyDown}
                    onClick={handleHomeClick}
                >
                    <h1 className="relative">
                        <DevelopmentOnly>
                            <div className="badge absolute -top-2 -left-5 badge-xs badge-secondary">DEV</div>
                        </DevelopmentOnly>
                        <span className="text-2xl font-bold mr-2" aria-hidden="true">
                            日本
                        </span>
                        <span className="text-xl font-bold text-slate-800 tracking-tight">Japanese Flashcards</span>
                    </h1>
                </div>
                <div className="grow">{additionalComponents}</div>
            </div>
        </header>
    );
};
