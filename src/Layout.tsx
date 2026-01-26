import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { usePageTracking } from './hooks/usePageTracking';

const Layout: React.FC = () => {
    usePageTracking();

    return (
        <div className="min-h-screen font-sans">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
