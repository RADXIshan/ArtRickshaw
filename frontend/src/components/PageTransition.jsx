import { motion } from 'framer-motion';
import { useEffect } from 'react';

const PageTransition = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Exiting Overlay: Sweeps up from bottom */}
      <motion.div
        className="fixed bottom-0 left-0 w-full bg-text-dark z-9999 flex items-center justify-center overflow-hidden"
        initial={{ height: '0vh' }}
        exit={{ height: '100vh' }}
        transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1] }}
      >
         <h1 className="text-bg-base text-4xl md:text-6xl font-serif font-black tracking-tighter uppercase text-center">
            Loading <span className="text-primary italic">Creativity...</span>
         </h1>
      </motion.div>

      {/* Entering Overlay: Sweeps up towards top */}
      <motion.div
        className="fixed top-0 left-0 w-full bg-text-dark z-9999 flex items-center justify-center overflow-hidden"
        initial={{ height: '100vh' }}
        animate={{ height: '0vh' }}
        exit={{ height: '0vh' }}
        transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1], delay: 0.1 }}
      >
         <h1 className="text-bg-base text-4xl md:text-6xl font-serif font-black tracking-tighter uppercase text-center">
            Loading <span className="text-primary italic">Creativity...</span>
         </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
