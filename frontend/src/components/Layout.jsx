import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar />
      <div className="bg-bg-base relative z-10 mb-[80vh] lg:mb-[70vh] overflow-hidden">
        <main className={`min-h-screen ${!isHome ? 'pt-24' : ''}`}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
