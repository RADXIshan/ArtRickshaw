import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_BOOKINGS = [
  { id: 1, title: 'Corporate Team Building', category: 'private event', duration: '3-4 Hours', price: 'Contact Us', image: 'bg-emerald-200' },
  { id: 2, title: 'Beginner Canvas Painting', category: 'regular classes', duration: '2 Hours', price: '₹1500', image: 'bg-blue-200' },
  { id: 3, title: 'Resin Clock Making', category: 'activity', duration: '2.5 Hours', price: '₹2200', image: 'bg-indigo-200' },
  { id: 4, title: 'Sunday Sundowner Sip & Paint', category: 'weekly special', duration: '3 Hours', price: '₹1800', image: 'bg-orange-200' },
  { id: 5, title: 'Birthday Art Party', category: 'private event', duration: '4 Hours', price: 'Contact Us', image: 'bg-pink-200' },
  { id: 6, title: 'Advanced Pottery Wheel', category: 'regular classes', duration: '8 Sessions', price: '₹8000', image: 'bg-stone-300' },
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

  const filteredBookings = ALL_BOOKINGS.filter((item) => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-bg-base pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Reserve Your Spot</span>
          <h1 className="text-6xl md:text-[8vw] font-serif font-black text-text-dark leading-none tracking-tighter">BOOK AN <br/> EXPERIENCE.</h1>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-20 border-b border-gray-200 pb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold transition-all duration-300 ${
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredBookings.map((booking) => (
              <motion.div
                key={booking.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-transparent border border-gray-200 p-8 rounded-2xl hover:border-primary transition-all duration-500"
              >
                <div className="grow flex flex-col">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 px-3 py-1 rounded-full">{booking.category}</span>
                    <span className="text-sm font-serif italic text-gray-500">{booking.duration}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-text-dark mb-6 pr-4">{booking.title}</h3>
                  
                  <div className="mt-auto flex justify-between items-end">
                     <span className="text-2xl font-bold text-text-dark">{booking.price}</span>
                     <button className="text-text-dark hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2">
                        Book <span className="text-xl leading-none">&rarr;</span>
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Bookings;
