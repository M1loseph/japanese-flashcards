import { IconMenu2 } from '@tabler/icons-react';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrawer } from '../context/DrawerContext';

interface HeaderProps {
    preHomeNavigationHook?: () => void;
    additionalComponents?: React.ReactNode;
}

export const Header: FC<HeaderProps> = ({ preHomeNavigationHook, additionalComponents }) => {
    const navigate = useNavigate();

    const { toggleDrawer } = useDrawer();

    const handleHomeClick = () => {
        if (preHomeNavigationHook) {
            preHomeNavigationHook();
        }
        navigate('/');
    };

    const handleHomeKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleHomeClick();
        }
    };

    return (
        <div className="navbar sticky top-0 z-50 backdrop-blur-md shadow-sm">
            <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                <button className="btn btn-square btn-ghost" aria-label="Open sidebar" onClick={toggleDrawer}>
                    <IconMenu2 />
                </button>
                <div
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity ml-2"
                    tabIndex={0}
                    role="button"
                    aria-label="Home"
                    onKeyDown={handleHomeKeyDown}
                    onClick={handleHomeClick}
                >
                    <h1>
                        <span className="text-2xl font-bold mr-2" aria-hidden="true">
                            日本
                        </span>
                        <span className="text-xl font-bold text-slate-800 tracking-tight">Japanese Flashcards</span>
                    </h1>
                </div>
                <div className="grow">{additionalComponents}</div>
            </div>
        </div>
    );
};
