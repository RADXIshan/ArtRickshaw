import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-bg-base pt-12 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark mb-6">Book an Experience</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Reserve your spot in our workshops or book the entire studio for your next private event.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-secondary text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredBookings.map((booking) => (
              <motion.div
                key={booking.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-48 w-full ${booking.image} relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-text-dark">
                    {booking.price}
                  </div>
                </div>
                <div className="p-8 grow flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">{booking.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-text-dark mb-4">{booking.title}</h3>
                  
                  <div className="flex items-center text-gray-500 mb-6 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span className="text-sm">{booking.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span className="text-sm">Hindustan Park Studio</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-text-dark hover:text-white text-text-dark font-medium py-3 rounded-xl transition-colors group-hover:bg-text-dark group-hover:text-white">
                      <span>Book Now</span>
                      <ArrowRight size={18} />
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
