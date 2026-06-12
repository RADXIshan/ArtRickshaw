import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
            className="relative bg-[#F5F5F0] w-full max-w-5xl rounded-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent md:hidden" />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 md:hidden bg-black/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/40 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <button 
                onClick={onClose}
                className="hidden md:block absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
                {data.category}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-text-dark leading-none tracking-tight mb-6">
                {data.title}
              </h2>
              
              <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                {data.description || "Join us for an immersive artistic experience. Unleash your creativity, learn new techniques, and take home your very own masterpiece."}
              </p>

              <div className="flex items-center gap-8 mb-10">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-bold">Duration</p>
                  <p className="text-2xl font-serif font-bold text-text-dark">{data.duration || "2 Hours"}</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-bold">Price</p>
                  <p className="text-2xl font-serif font-bold text-text-dark">{data.price}</p>
                </div>
              </div>

              <button 
                data-cursor="book"
                className="w-full bg-text-dark text-[#F5F5F0] py-4 md:py-5 rounded-full uppercase tracking-widest font-bold text-sm hover:bg-primary transition-colors duration-300"
              >
                Proceed to Book
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
