import { motion } from 'framer-motion';
import { useEffect } from 'react';
import rickshawPullerImg from '../assets/preloader_rickshaw_puller.png';

const PageTransition = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Exiting Overlay: Sweeps up from bottom */}
      <motion.div
        className="fixed bottom-0 left-0 w-full bg-neutral-950 z-9999 flex items-center justify-center overflow-hidden"
        initial={{ height: '0vh' }}
        exit={{ height: '100vh' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <img 
          src={rickshawPullerImg} 
          alt="Art Rickshaw" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 md:h-32 w-auto invert mix-blend-screen opacity-20 drop-shadow-2xl"
        />
      </motion.div>

      {/* Entering Overlay: Sweeps up towards top */}
      <motion.div
        className="fixed top-0 left-0 w-full bg-neutral-950 z-9999 flex items-center justify-center overflow-hidden"
        initial={{ height: '100vh' }}
        animate={{ height: '0vh' }}
        exit={{ height: '0vh' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      >
        <img 
          src={rickshawPullerImg} 
          alt="Art Rickshaw" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 md:h-32 w-auto invert mix-blend-screen opacity-20 drop-shadow-2xl"
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
