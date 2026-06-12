import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_ACTIVITIES = [
  { id: 1, title: 'Ocean Resin Tray', category: 'resin art', image: 'bg-blue-300' },
  { id: 2, title: 'Abstract Fluid Canvas', category: 'fluid art', image: 'bg-purple-300' },
  { id: 3, title: 'Terracotta Pots', category: 'terracotta clay segment', image: 'bg-orange-300' },
  { id: 4, title: 'Charcoal Sketching', category: 'fine arts', image: 'bg-gray-400' },
  { id: 5, title: 'Acrylic Canvas', category: 'canvas arts', image: 'bg-red-300' },
  { id: 6, title: 'Resin Coasters', category: 'resin art', image: 'bg-teal-300' },
  { id: 7, title: 'Macrame Wall Hanging', category: 'diy decor arts', image: 'bg-yellow-200' },
  { id: 8, title: 'Custom Corporate Workshop', category: 'workshop on demand', image: 'bg-indigo-300' },
];

const CATEGORIES = [
  'all',
  'resin art',
  'fluid art',
  'terracotta clay segment',
  'fine arts',
  'canvas arts',
  'diy decor arts',
  'workshop on demand'
];

const Activities = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredActivities = ALL_ACTIVITIES.filter((item) => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-bg-base pt-12 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-dark mb-6">Explore Our Activities</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover a world of creativity and expression with our diverse range of art forms.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredActivities.map((activity) => (
              <motion.div
                key={activity.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className={`h-64 w-full ${activity.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-text-dark px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary block mb-2">{activity.category}</span>
                  <h3 className="text-xl font-serif font-bold text-text-dark">{activity.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;
