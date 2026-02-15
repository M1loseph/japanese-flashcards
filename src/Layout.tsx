import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

export const Layout: FC = () => {
    return (
        <div className="h-screen flex flex-col items-center font-sans">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
