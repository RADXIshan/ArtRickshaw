import { useState } from 'react';

const ALL_ACTIVITIES = [
  { id: 1, title: 'Ocean Resin Tray', category: 'resin art', image: 'bg-blue-200' },
  { id: 2, title: 'Abstract Fluid Canvas', category: 'fluid art', image: 'bg-purple-200' },
  { id: 3, title: 'Terracotta Pots', category: 'terracotta clay segment', image: 'bg-orange-200' },
  { id: 4, title: 'Charcoal Sketching', category: 'fine arts', image: 'bg-stone-300' },
  { id: 5, title: 'Acrylic Canvas', category: 'canvas arts', image: 'bg-red-200' },
  { id: 6, title: 'Resin Coasters', category: 'resin art', image: 'bg-teal-200' },
  { id: 7, title: 'Macrame Wall Hanging', category: 'diy decor arts', image: 'bg-yellow-200' },
  { id: 8, title: 'Corporate Workshop', category: 'workshop on demand', image: 'bg-indigo-200' },
];

const Activities = () => {
  const [hoveredActivity, setHoveredActivity] = useState(null);

  return (
    <div className="min-h-screen bg-bg-base relative overflow-hidden transition-colors duration-500">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-700">
        <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredActivity ? hoveredActivity.image : 'bg-transparent'} opacity-40`} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-32 pb-40">
        <h1 className="text-[12vw] font-serif font-black leading-none text-text-dark tracking-tighter opacity-[0.03] mb-10 pointer-events-none mix-blend-multiply">
          ACTIVITIES
        </h1>

        <div className="flex flex-col border-t border-gray-200">
          {ALL_ACTIVITIES.map((activity, i) => (
            <div 
              key={activity.id}
              className="group border-b border-gray-200 py-8 md:py-12 flex justify-between items-center cursor-pointer"
              onMouseEnter={() => setHoveredActivity(activity)}
              onMouseLeave={() => setHoveredActivity(null)}
              data-cursor="explore"
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-xl md:text-3xl text-gray-400 font-serif w-12 md:w-16 text-right group-hover:text-primary transition-colors">0{i + 1}</span>
                <h2 className="text-3xl md:text-7xl font-serif font-bold text-text-dark group-hover:translate-x-6 transition-transform duration-500">
                  {activity.title}
                </h2>
              </div>
              <div className="hidden md:block">
                <span className="text-lg uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {activity.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
