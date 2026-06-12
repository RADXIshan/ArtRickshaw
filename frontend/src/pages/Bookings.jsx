import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from '../components/BookingModal';

const ALL_BOOKINGS = [
  { id: 1, title: 'Corporate Team Building', category: 'private event', duration: '3-4 Hours', price: 'Contact Us', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800', description: 'Foster creativity and collaboration within your team through our engaging, hands-on group art sessions.', bgColor: 'bg-emerald-200' },
  { id: 2, title: 'Beginner Canvas Painting', category: 'regular classes', duration: '2 Hours', price: '₹1500', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800', description: 'Step-by-step guidance for beginners to create beautiful canvas paintings. No prior experience required!', bgColor: 'bg-blue-200' },
  { id: 3, title: 'Resin Clock Making', category: 'activity', duration: '2.5 Hours', price: '₹2200', image: 'https://images.unsplash.com/photo-1583847268964-b28ce8f31586?auto=format&fit=crop&q=80&w=800', description: 'Design and create your own functional resin wall clock with custom colors and embellishments.', bgColor: 'bg-indigo-200' },
  { id: 4, title: 'Sunday Sundowner Sip & Paint', category: 'weekly special', duration: '3 Hours', price: '₹1800', image: 'https://images.unsplash.com/photo-1574510008544-04104e705b0c?auto=format&fit=crop&q=80&w=800', description: 'Unwind your weekend with a glass of wine, good music, and an immersive painting session.', bgColor: 'bg-orange-200' },
  { id: 5, title: 'Birthday Art Party', category: 'private event', duration: '4 Hours', price: 'Contact Us', image: 'https://images.unsplash.com/photo-1530103862676-de8892bc952f?auto=format&fit=crop&q=80&w=800', description: 'Celebrate your special day with an artistic twist! Fun activities, decorations, and creative joy for all guests.', bgColor: 'bg-pink-200' },
  { id: 6, title: 'Advanced Pottery Wheel', category: 'regular classes', duration: '8 Sessions', price: '₹8000', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800', description: 'Master the potter\'s wheel in this comprehensive 8-session course. Learn centering, pulling, and shaping.', bgColor: 'bg-stone-300' },
];

const CATEGORIES = [
  'all',
  'private event',
  'regular classes',
  'activity',
  'weekly special'
];

const Bookings = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = ALL_BOOKINGS.filter((item) => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-bg-base pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 md:mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block">Reserve Your Spot</span>
            <h1 className="text-5xl sm:text-6xl md:text-[8vw] lg:text-[7vw] font-serif font-black text-text-dark leading-none tracking-tighter">BOOK AN <br/> EXPERIENCE.</h1>
          </div>

          {/* Filter Bar */}
          <div className="flex gap-3 overflow-x-auto pb-6 mb-12 border-b border-gray-200 scrollbar-none md:flex-wrap md:overflow-visible md:pb-10 md:mb-20">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full uppercase tracking-widest text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
                  activeFilter === cat 
                    ? 'bg-primary text-white border border-primary' 
                    : 'bg-transparent text-gray-500 hover:text-text-dark border border-gray-300 hover:border-text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Animated Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <AnimatePresence>
              {filteredBookings.map((booking) => (
                <motion.div
                  key={booking.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleBookingClick(booking)}
                  data-cursor="book"
                  className="group flex flex-col bg-white border border-gray-200 rounded-3xl md:rounded-4xl overflow-hidden hover:border-primary transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
                >
                  <div className="w-full h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={booking.image} 
                      alt={booking.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-xs font-bold uppercase tracking-widest text-white bg-black/30 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                        {booking.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-sm font-serif italic text-gray-500">{booking.duration}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-text-dark mb-3 md:mb-4">{booking.title}</h3>
                    
                    <div className="mt-auto flex justify-between items-end pt-6 border-t border-gray-100">
                       <span className="text-2xl font-bold text-text-dark">{booking.price}</span>
                       <span className="text-primary group-hover:text-text-dark transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2">
                          View <span className="text-xl leading-none">&rarr;</span>
                       </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={selectedBooking} 
      />
    </>
  );
};

export default Bookings;
