import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-bg-base relative z-10 mb-[80vh] overflow-hidden">
        <main className="min-h-screen pt-24">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
