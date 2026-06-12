import { motion } from 'framer-motion';
import { useEffect } from 'react';
import rickshawPullerImg from '../assets/preloader_rickshaw_puller.png';

const PageTransition = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Block scrolling during transition
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* Exiting Overlay: Sweeps up from bottom */}
      <motion.div
        className="fixed bottom-0 left-0 w-full z-9999 flex items-center justify-center overflow-hidden"
        initial={{ height: '0vh' }}
        exit={{ height: '100vh' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="absolute bottom-0 left-0 w-full h-screen bg-linear-to-t from-[#050505] to-[#1a1a1a]"></div>
        <div className="absolute bottom-0 left-0 w-full h-screen opacity-[0.15] mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <img 
          src={rickshawPullerImg} 
          alt="Art Rickshaw" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 md:h-32 w-auto invert mix-blend-screen opacity-30 drop-shadow-2xl z-10"
        />
      </motion.div>

      {/* Entering Overlay: Sweeps up towards top */}
      <motion.div
        className="fixed top-0 left-0 w-full z-9999 flex items-center justify-center overflow-hidden"
        initial={{ height: '100vh' }}
        animate={{ height: '0vh' }}
        exit={{ height: '0vh' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      >
        <div className="absolute top-0 left-0 w-full h-screen bg-linear-to-t from-[#050505] to-[#1a1a1a]"></div>
        <div className="absolute top-0 left-0 w-full h-screen opacity-[0.15] mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <img 
          src={rickshawPullerImg} 
          alt="Art Rickshaw" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 md:h-32 w-auto invert mix-blend-screen opacity-30 drop-shadow-2xl z-10"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
