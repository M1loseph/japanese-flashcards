import { IconHome, IconSearch } from '@tabler/icons-react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDrawer } from '../context/DrawerContext';

export const Sidebar: FC = () => {
    const { toggleDrawer } = useDrawer();

    const handleLinkClick = () => {
        toggleDrawer();
    };

    const handleOverlayClick = () => {
        toggleDrawer();
    };

    return (
        <div className="drawer-side z-60">
            <label tabIndex={0} onClick={handleOverlayClick} aria-label="close sidebar" className="drawer-overlay" />
            <ul className="menu bg-base-200 min-h-full w-64 md:w-80 p-4 gap-1">
                <li>
                    <Link to="/" aria-label="Home" tabIndex={0} className="text-base" onClick={handleLinkClick}>
                        <IconHome size={20} />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/search" aria-label="Search" tabIndex={0} className="text-base" onClick={handleLinkClick}>
                        <IconSearch size={20} />
                        Search
                    </Link>
                </li>
            </ul>
        </div>
    );
};
