import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from '../components/BookingModal';

const ALL_ACTIVITIES = [
  { id: 1, title: 'Ocean Resin Tray', category: 'resin art', bgColor: 'bg-blue-200', image: 'https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?auto=format&fit=crop&q=80', description: 'Create a stunning ocean-themed resin tray, complete with lacing effects and miniature beach elements.', price: '₹2500', duration: '3 Hours' },
  { id: 2, title: 'Abstract Fluid Canvas', category: 'fluid art', bgColor: 'bg-purple-200', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80', description: 'Learn the techniques of acrylic pouring and fluid art to create an abstract masterpiece.', price: '₹1800', duration: '2 Hours' },
  { id: 3, title: 'Terracotta Pots', category: 'terracotta clay segment', bgColor: 'bg-orange-200', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80', description: 'Hand-paint and decorate terracotta pots with traditional and contemporary motifs.', price: '₹1200', duration: '2 Hours' },
  { id: 4, title: 'Charcoal Sketching', category: 'fine arts', bgColor: 'bg-stone-300', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80', description: 'Master the fundamentals of shading, light, and texture using charcoal mediums.', price: '₹1500', duration: '2.5 Hours' },
  { id: 5, title: 'Acrylic Canvas', category: 'canvas arts', bgColor: 'bg-red-200', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80', description: 'A guided acrylic painting session on canvas suitable for all skill levels.', price: '₹1600', duration: '3 Hours' },
  { id: 6, title: 'Resin Coasters', category: 'resin art', bgColor: 'bg-teal-200', image: 'https://images.unsplash.com/photo-1583847268964-b28ce8f31586?auto=format&fit=crop&q=80', description: 'Craft your own set of personalized, glossy resin coasters infused with colors and glitter.', price: '₹1800', duration: '2 Hours' },
  { id: 7, title: 'Macrame Wall Hanging', category: 'diy decor arts', bgColor: 'bg-yellow-200', image: 'https://images.unsplash.com/photo-1600172454136-f81d111728c4?auto=format&fit=crop&q=80', description: 'Knot your way into a beautiful bohemian macrame wall hanging for your living space.', price: '₹2200', duration: '3.5 Hours' },
  { id: 8, title: 'Corporate Workshop', category: 'workshop on demand', bgColor: 'bg-indigo-200', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80', description: 'Tailored art workshops for corporate team building and stress relief.', price: 'Contact Us', duration: 'Flexible' },
];

const Activities = () => {
  const [hoveredActivity, setHoveredActivity] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-[#F5F5F0] relative overflow-hidden transition-colors duration-500">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-700">
          <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredActivity ? hoveredActivity.bgColor : 'bg-transparent'} opacity-40`} />
        </div>

        {/* Cursor-following Image */}
        <AnimatePresence>
          {hoveredActivity && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="fixed pointer-events-none z-20 overflow-hidden rounded-2xl shadow-2xl hidden md:block"
              style={{
                left: mousePos.x,
                top: mousePos.y,
                width: '320px',
                height: '240px',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img 
                src={hoveredActivity.image} 
                alt={hoveredActivity.title} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-32 pb-40">
          <h1 className="text-[12vw] font-serif font-black leading-none text-black tracking-tighter mb-10 pointer-events-none">
            ACTIVITIES
          </h1>

          <div className="flex flex-col border-t border-gray-200">
            {ALL_ACTIVITIES.map((activity, i) => (
              <div 
                key={activity.id}
                className="group border-b border-gray-200 py-8 md:py-12 flex justify-between items-center cursor-pointer relative"
                onMouseEnter={() => setHoveredActivity(activity)}
                onMouseLeave={() => setHoveredActivity(null)}
                onClick={() => handleActivityClick(activity)}
                data-cursor="explore"
              >
                <div className="flex items-center gap-6 md:gap-12 relative z-10">
                  <span className="text-xl md:text-3xl text-gray-400 font-serif w-12 md:w-16 text-right group-hover:text-primary transition-colors">0{i + 1}</span>
                  <h2 className="text-3xl md:text-7xl font-serif font-bold text-text-dark group-hover:translate-x-6 transition-transform duration-500">
                    {activity.title}
                  </h2>
                </div>
                <div className="hidden md:block relative z-10">
                  <span className="text-lg uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {activity.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={selectedActivity} 
      />
    </>
  );
};

export default Activities;
