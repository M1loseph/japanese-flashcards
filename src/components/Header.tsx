import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md shadow-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => navigate('/')}
                >
                    <span className="text-2xl" role="img" aria-label="logo">
                        🌸
                    </span>
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight">JFlashcards</h1>
                </div>
            </div>
        </header>
    );
};
