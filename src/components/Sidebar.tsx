import { IconArrowsUpDown, IconClockHour2, IconHome, IconSearch } from '@tabler/icons-react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDrawer } from '../services/DrawerContext';

const ICON_SIZE = 20;

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
                        <IconHome size={ICON_SIZE} />
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/srs"
                        aria-label="Spaced Repetition System"
                        tabIndex={0}
                        className="text-base"
                        onClick={handleLinkClick}
                    >
                        <IconClockHour2 size={ICON_SIZE} />
                        Spaced Repetition System
                    </Link>
                </li>
                <li>
                    <Link to="/search" aria-label="Search" tabIndex={0} className="text-base" onClick={handleLinkClick}>
                        <IconSearch size={ICON_SIZE} />
                        Search
                    </Link>
                </li>
                <li>
                    <Link
                        to="/data-management"
                        aria-label="Data Management"
                        tabIndex={0}
                        className="text-base"
                        onClick={handleLinkClick}
                    >
                        <IconArrowsUpDown size={ICON_SIZE} />
                        Data Management
                    </Link>
                </li>
            </ul>
        </div>
    );
};
