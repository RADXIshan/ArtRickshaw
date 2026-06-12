import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const activities = [
  { id: 1, title: 'Resin Art', color: 'bg-primary' },
  { id: 2, title: 'Fluid Art', color: 'bg-secondary' },
  { id: 3, title: 'Terracotta Clay', color: 'bg-orange-400' },
  { id: 4, title: 'Fine Arts', color: 'bg-stone-500' },
  { id: 5, title: 'Canvas Arts', color: 'bg-teal-500' },
  { id: 6, title: 'DIY Decor', color: 'bg-rose-400' },
  { id: 7, title: 'Workshop on Demand', color: 'bg-indigo-400' },
];

const Home = () => {
  const container = useRef(null);
  const heroRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const horizontalScrollRef = useRef(null);

  useGSAP(() => {
    // Hero Parallax
    gsap.to('.parallax-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.parallax-mid', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.parallax-front', {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Fade up text on load
    gsap.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power4.out',
      delay: 0.2,
    });

    // Horizontal Scroll for Activities
    const horizontalAmount = horizontalScrollRef.current.scrollWidth - window.innerWidth;
    
    gsap.to(horizontalScrollRef.current, {
      x: -horizontalAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalSectionRef.current,
        start: 'top top',
        end: `+=${horizontalAmount}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

  }, { scope: container });

  return (
    <div ref={container} className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-bg-base">
        {/* Parallax Background Images */}
        <div className="absolute inset-0 z-0 opacity-20 parallax-bg pointer-events-none">
           <img src="/src/assets/images/bridge.png" alt="Howrah Bridge" className="absolute top-10 md:top-20 left-4 md:left-10 w-1/2 md:w-1/3 max-w-[400px] object-contain" />
           <img src="/src/assets/images/victoria.png" alt="Victoria Memorial" className="absolute top-10 md:top-20 right-4 md:right-10 w-1/2 md:w-1/3 max-w-[400px] object-contain" />
        </div>
        
        <div className="absolute inset-0 z-10 parallax-mid pointer-events-none">
           <img src="/src/assets/images/rickshaw.png" alt="Rickshaw" className="absolute bottom-32 md:bottom-20 left-4 md:left-20 w-1/3 md:w-1/4 max-w-[350px] object-contain" />
        </div>

        <div className="absolute inset-0 z-20 parallax-front pointer-events-none">
           <img src="/src/assets/images/taxi.png" alt="Yellow Taxi" className="absolute bottom-20 md:bottom-10 right-4 md:right-20 w-2/3 md:w-1/3 max-w-[450px] object-contain drop-shadow-2xl" />
        </div>

        <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
          <h1 className="hero-text text-6xl md:text-8xl font-serif font-bold text-text-dark leading-tight mb-6">
            Kolkata's <span className="text-primary italic">Creative</span> Hub
          </h1>
          <p className="hero-text text-xl md:text-2xl text-gray-600 font-sans mb-10 max-w-2xl mx-auto">
            Immerse yourself in the vibrant art culture of the city of joy. Workshops, classes, and private events.
          </p>
          <div className="hero-text">
            <Link to="/bookings" className="inline-flex items-center space-x-2 bg-secondary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#1f4273] transition-colors group">
              <span>Book an Experience</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 bg-white relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-text-dark">More than just an art studio.</h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Art Rickshaw is a place where creativity flows freely. Nestled in the heart of Kolkata, we bring people together through the power of expression, colors, and craftsmanship. Whether you're a seasoned artist or holding a brush for the first time, you belong here.
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Activities Section */}
      <section ref={horizontalSectionRef} className="h-screen bg-text-dark text-bg-base relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white/90">Our Activities</h2>
          <p className="text-xl text-gray-400 mt-4 max-w-md">Scroll to explore the different ways you can express your creativity.</p>
        </div>

        <div ref={horizontalScrollRef} className="flex h-1/2 md:h-[60vh] mt-24 items-center pl-[20vw] pr-[20vw]">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`shrink-0 w-[80vw] md:w-[40vw] h-full mx-4 rounded-3xl p-10 flex flex-col justify-end ${activity.color} transform transition-transform duration-500 hover:scale-[1.02] cursor-pointer`}
            >
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{activity.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-white/80 font-medium tracking-widest uppercase">Explore</span>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <ArrowRight className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Spacer to allow scrolling past horizontal section */}
      <div className="h-[20vh] bg-white"></div>
    </div>
  );
};

export default Home;
