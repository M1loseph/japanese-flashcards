import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

const Layout: FC = () => {
    return (
        <div className="min-h-screen font-sans">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
