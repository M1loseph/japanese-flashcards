import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-text">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
