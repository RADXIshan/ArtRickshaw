import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import bridgeImg from '../assets/images/bridge.png';
import logoImg from '../assets/images/logo.png';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Activities', path: '/activities' },
  { name: 'Bookings', path: '/bookings' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
];

const menuVariants = {
  initial: { y: "-100%" },
  animate: { y: "0%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
  exit: { y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
};

const linkVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: (i) => ({ y: "0%", opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 + (i * 0.1) } }),
  exit: { y: "100%", opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    
    // Check if there is a hash in the URL on mount or location change
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.lenis?.stop();
    } else {
      document.body.style.overflow = '';
      window.lenis?.start();
    }

    return () => {
      document.body.style.overflow = '';
      window.lenis?.start();
    };
  }, [isOpen]);

  const handleLinkClick = (e, path) => {
    setIsOpen(false);
    if (path.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-100 px-6 py-6 mix-blend-difference flex justify-between items-center pointer-events-none">
        <Link to="/" className="pointer-events-auto flex items-center">
          <img src={logoImg} alt="Art Rickshaw" className="h-8 md:h-10 w-auto invert" />
        </Link>
        <Magnetic>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white text-lg font-bold tracking-widest uppercase pointer-events-auto"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </Magnetic>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 flex"
          >
            {/* Left Side: Solid Background with Links */}
            <div className="w-full md:w-2/3 h-full bg-text-dark flex flex-col justify-center px-10 md:px-32 relative">
              <div className="flex flex-col gap-4">
                {links.map((link, i) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div custom={i} variants={linkVariants} initial="initial" animate="animate" exit="exit">
                      <Link 
                        to={link.path}
                        onClick={(e) => handleLinkClick(e, link.path)}
                        className="text-6xl md:text-[8vw] font-serif font-bold text-white hover:text-primary transition-colors leading-none uppercase"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1 } }}
                exit={{ opacity: 0 }}
                className="absolute bottom-10 left-10 md:left-32 text-gray-400 font-medium font-serif italic"
              >
                Let's create something beautiful together.
              </motion.div>
            </div>

            {/* Right Side: Massive Image Reveal */}
            <div className="hidden md:block w-1/3 h-full bg-primary relative overflow-hidden">
               <img src={bridgeImg} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 filter grayscale scale-110" alt="Menu Art" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
