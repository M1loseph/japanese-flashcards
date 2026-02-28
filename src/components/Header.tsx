import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

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

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md shadow-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                <div
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleHomeClick}
                >
                    <span className="text-2xl" role="img" aria-label="logo">
                        🌸
                    </span>
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight">JFlashcards</h1>
                </div>
                <div className="grow">{additionalComponents}</div>
            </div>
        </header>
    );
};
