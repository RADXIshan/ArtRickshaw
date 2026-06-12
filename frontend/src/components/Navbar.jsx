import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Activities', path: '/activities' },
  { name: 'Bookings', path: '/bookings' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop Floating Island */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 hidden md:block ${
          isScrolled ? 'w-[80%] max-w-4xl' : 'w-[95%] max-w-6xl'
        }`}
      >
        <div className={`bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-full px-8 py-4 flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'shadow-2xl' : ''
        }`}>
          <Link to="/" className="text-xl font-serif font-bold text-text-dark shrink-0">
            Art Rickshaw
          </Link>
          
          <div className="flex gap-8 items-center">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                className="text-sm font-medium tracking-widest uppercase text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] md:hidden px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link to="/" className="text-xl font-serif font-bold">Art Rickshaw</Link>
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-sm tracking-widest uppercase font-bold"
        >
          Menu
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-bg-base z-[150] flex flex-col justify-center px-10"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-sm tracking-widest uppercase font-bold text-text-dark"
            >
              Close
            </button>
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-serif font-bold text-text-dark"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
