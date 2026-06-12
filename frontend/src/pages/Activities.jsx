import { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [expandedActivity, setExpandedActivity] = useState(null);

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

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-32 pb-40">
          <h1 className="text-[12vw] font-serif font-black leading-none text-black tracking-tighter mb-10 pointer-events-none">
            ACTIVITIES
          </h1>

          <div className="flex flex-col border-t border-gray-200">
            {ALL_ACTIVITIES.map((activity, i) => {
              const isExpanded = expandedActivity === activity.id;
              return (
                <div key={activity.id} className="border-b border-gray-200">
                  {/* Row Header */}
                  <div 
                    className="group py-6 md:py-12 flex justify-between items-center cursor-pointer relative"
                    onMouseEnter={() => {
                      if (window.innerWidth >= 768) {
                        setHoveredActivity(activity);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth >= 768) {
                        setHoveredActivity(null);
                      }
                    }}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setExpandedActivity(isExpanded ? null : activity.id);
                      } else {
                        handleActivityClick(activity);
                      }
                    }}
                    data-cursor="explore"
                  >
                    <div className="flex items-center gap-4 md:gap-12 relative z-10 w-full md:w-auto">
                      <span className="text-lg md:text-3xl text-gray-400 font-serif w-8 md:w-16 text-right group-hover:text-primary transition-colors">0{i + 1}</span>
                      <h2 className="text-2xl md:text-7xl font-serif font-bold text-text-dark group-hover:translate-x-6 transition-transform duration-500 relative z-20">
                        {activity.title}
                      </h2>
                    </div>

                    {/* Inline Image Reveal (Desktop Only) */}
                    <div className="hidden md:block absolute right-[25%] top-1/2 -translate-y-1/2 w-[340px] h-[240px] rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-12 transition-all duration-700 pointer-events-none shadow-2xl z-10">
                       <img src={activity.image} alt={activity.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                       <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0"></div>
                    </div>

                    {/* Arrow Indicator (Mobile Only) */}
                    <div className="md:hidden w-8 h-8 rounded-full border border-text-dark/10 flex items-center justify-center transition-transform duration-300 shrink-0 mr-2" style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>

                    <div className="hidden md:block relative z-20 w-56 text-right">
                      <span className="text-lg uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {activity.category}
                      </span>
                    </div>
                  </div>

                  {/* Dropdown Content (Mobile/Tablet Only) */}
                  <div 
                    className={`md:hidden grid transition-all duration-500 ease-in-out ${
                      isExpanded ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden px-12 space-y-4">
                      {/* Activity Image */}
                      <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md">
                        <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
                      </div>
                      {/* Description */}
                      <p className="text-gray-600 font-sans font-medium text-base leading-relaxed">
                        {activity.description}
                      </p>
                      {/* Meta Details: Category, Duration, Price */}
                      <div className="grid grid-cols-2 gap-4 border-y border-gray-200 py-3 text-sm font-semibold uppercase tracking-wider text-text-dark">
                        <div>
                          <span className="text-gray-400 block text-xs font-bold mb-1">Category</span>
                          <span className="text-primary">{activity.category}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-xs font-bold mb-1">Duration</span>
                          <span>{activity.duration}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-400 block text-xs font-bold mb-1">Price</span>
                          <span className="text-lg font-serif font-black">{activity.price}</span>
                        </div>
                      </div>
                      {/* Action Button */}
                      <button 
                        onClick={() => handleActivityClick(activity)}
                        className="w-full py-3 bg-text-dark text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-primary transition-colors cursor-pointer"
                      >
                        Book Workshop
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
