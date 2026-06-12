import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import logoImg from '../assets/images/logo.png';
import heroIllustrationImg from '../assets/images/hero_illustration.png';
import howrahBridgeImg from '../assets/images/howrah_bridge.png';
import yellowTaxiImg from '../assets/images/yellow_taxi-removebg-preview.png';
import waterColourRickshawImg from '../assets/images/water_colour_rickshaw-removebg-preview.png';
import victoriaMemorialImg from '../assets/images/victoria_memorial-removebg-preview.png';

gsap.registerPlugin(ScrollTrigger);

const activities = [
  { 
    id: 1, 
    title: 'Resin Art', 
    color: 'bg-primary',
    modalData: {
      title: 'Ocean Resin Tray',
      category: 'resin art',
      image: 'https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?auto=format&fit=crop&q=80&w=800',
      description: 'Create a stunning ocean-themed resin tray, complete with lacing effects and miniature beach elements.',
      price: '₹2500',
      duration: '3 Hours'
    }
  },
  { 
    id: 2, 
    title: 'Fluid Art', 
    color: 'bg-secondary',
    modalData: {
      title: 'Abstract Fluid Canvas',
      category: 'fluid art',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
      description: 'Learn the techniques of acrylic pouring and fluid art to create an abstract masterpiece.',
      price: '₹1800',
      duration: '2 Hours'
    }
  },
  { 
    id: 3, 
    title: 'Terracotta Clay', 
    color: 'bg-orange-400',
    modalData: {
      title: 'Terracotta Pots',
      category: 'terracotta clay segment',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800',
      description: 'Hand-paint and decorate terracotta pots with traditional and contemporary motifs.',
      price: '₹1200',
      duration: '2 Hours'
    }
  },
  { 
    id: 4, 
    title: 'Fine Arts', 
    color: 'bg-stone-500',
    modalData: {
      title: 'Charcoal Sketching',
      category: 'fine arts',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
      description: 'Master the fundamentals of shading, light, and texture using charcoal mediums.',
      price: '₹1500',
      duration: '2.5 Hours'
    }
  },
  { 
    id: 5, 
    title: 'Canvas Arts', 
    color: 'bg-teal-500',
    modalData: {
      title: 'Acrylic Canvas',
      category: 'canvas arts',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
      description: 'A guided acrylic painting session on canvas suitable for all skill levels.',
      price: '₹1600',
      duration: '3 Hours'
    }
  },
  { 
    id: 6, 
    title: 'DIY Decor', 
    color: 'bg-rose-400',
    modalData: {
      title: 'Macrame Wall Hanging',
      category: 'diy decor arts',
      image: 'https://images.unsplash.com/photo-1600172454136-f81d111728c4?auto=format&fit=crop&q=80&w=800',
      description: 'Knot your way into a beautiful bohemian macrame wall hanging for your living space.',
      price: '₹2200',
      duration: '3.5 Hours'
    }
  },
  { 
    id: 7, 
    title: 'Workshop on Demand', 
    color: 'bg-indigo-400',
    modalData: {
      title: 'Corporate Workshop',
      category: 'workshop on demand',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      description: 'Tailored art workshops for corporate team building and stress relief.',
      price: 'Contact Us',
      duration: 'Flexible'
    }
  },
];

const specials = [
  { 
    id: 1, 
    title: 'Sunday Sundowner Sip & Paint', 
    image: 'https://images.unsplash.com/photo-1574510008544-04104e705b0c?auto=format&fit=crop&q=80', 
    desc: 'Unwind your weekend with a glass of wine, good music, and an immersive painting session. Perfect for friends and couples.',
    modalData: {
      title: 'Sunday Sundowner Sip & Paint',
      category: 'weekly special',
      image: 'https://images.unsplash.com/photo-1574510008544-04104e705b0c?auto=format&fit=crop&q=80&w=800',
      description: 'Unwind your weekend with a glass of wine, good music, and an immersive painting session. Perfect for friends and couples.',
      price: '₹1800',
      duration: '3 Hours'
    }
  },
  { 
    id: 2, 
    title: 'Midnight Pottery', 
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80', 
    desc: 'Experience the magic of the potter\'s wheel under the stars. A calm and therapeutic late-night session.',
    modalData: {
      title: 'Midnight Pottery',
      category: 'weekly special',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800',
      description: 'Experience the magic of the potter\'s wheel under the stars. A calm and therapeutic late-night session.',
      price: '₹2000',
      duration: '2 Hours'
    }
  },
  { 
    id: 3, 
    title: 'Weekend Art Bootcamp', 
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80', 
    desc: 'A rigorous but fun weekend bootcamp covering three distinct art mediums over two days.',
    modalData: {
      title: 'Weekend Art Bootcamp',
      category: 'weekly special',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800',
      description: 'A rigorous but fun weekend bootcamp covering three distinct art mediums over two days.',
      price: '₹3500',
      duration: '2 Days'
    }
  },
];

const pillars = [
  {
    id: '01',
    title: 'Inclusive Expression',
    tagline: 'Art is for Everyone',
    description: "We believe that art is not just for the 'gifted'. It is a universal language, a form of therapy, and a way to connect. Whether you are holding a brush for the first time or the hundredth, your voice belongs here.",
    colorClass: 'text-primary border-primary/20',
  },
  {
    id: '02',
    title: 'Creative Sanctuary',
    tagline: 'Disconnect to Reconnect',
    description: 'From traditional terracotta wheel throwing to modern fluid art and resin casting, our workshops are intentionally designed to help you quiet the mental chatter, slow down your pace, and discover a sense of deep focus.',
    colorClass: 'text-secondary border-secondary/20',
  },
  {
    id: '03',
    title: 'The Beauty of Mistakes',
    tagline: 'Process over Perfection',
    description: 'We provide a space where mistakes are welcomed as happy accidents. Every paint splatter, color bleed, and slightly off-center pot tells a story of exploration. We celebrate the raw, imperfect beauty of creating.',
    colorClass: 'text-orange-400 border-orange-400/20',
  }
];


const Home = () => {
  const container = useRef(null);
  const [hoveredSpecial, setHoveredSpecial] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const heroRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleActivityClick = (activity) => {
    setSelectedBooking(activity.modalData);
    setIsModalOpen(true);
  };

  const handleSpecialClick = (idx, special) => {
    if (hoveredSpecial === idx) {
      setSelectedBooking(special.modalData);
      setIsModalOpen(true);
    } else {
      setHoveredSpecial(idx);
    }
  };

  const horizontalSectionRef = useRef(null);
  const horizontalScrollRef = useRef(null);

  useGSAP(() => {
    // Pin Hero so next section overlaps it and fade it out
    gsap.to(heroRef.current, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
      }
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
    const scrollContainer = horizontalScrollRef.current;
    
    gsap.to(scrollContainer, {
      x: () => -(scrollContainer.scrollWidth - window.innerWidth),
      ease: 'none',
      force3D: true, // Hardware accelerate horizontal scroll
      scrollTrigger: {
        trigger: horizontalSectionRef.current,
        start: 'top top',
        end: () => `+=${scrollContainer.scrollWidth - window.innerWidth}`,
        pin: true,
        anticipatePin: 1,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // Weekly Specials Title Reveal
    gsap.fromTo('.specials-header',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.specials-section',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    );
    
    gsap.fromTo('.special-hover-card',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.specials-cards-container',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    );



    // About Image reveal (optimized)
    gsap.fromTo('.about-img',
      { clipPath: 'inset(100% 0 0 0)', scale: 1.25 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.about-img-container',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    );

    // Philosophy Header Reveal
    gsap.fromTo('.philosophy-header',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    );

    // Philosophy Cards Stagger Reveal
    gsap.fromTo('.philosophy-card',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.philosophy-cards-container',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    );


    // Team Header Reveal
    gsap.fromTo('.team-header',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#team',
          start: 'top 75%',
          toggleActions: 'play none none reset',
        }
      }
    );

    // Team Members Stagger
    gsap.fromTo('.team-member',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#team',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    );
    
    // Team Img Parallax inside cards
    gsap.utils.toArray('.team-img-parallax').forEach((img) => {
      gsap.to(img, {
        yPercent: 15,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });



    // Contact Howrah Bridge Parallax
    gsap.to('.contact-howrah-bridge-parallax', {
      yPercent: -12,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: '#contact',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Contact Form Elements Stagger
    gsap.fromTo('.form-element',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact form',
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    );

    // Contact "LET'S CONNECT." Parallax
    gsap.to('.contact-title-parallax', {
      y: -100,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: '#contact',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

  }, { scope: container });

  return (
    <div ref={container} className="overflow-clip bg-[#f4ece3] text-text-dark">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f4ece3]">
        
        {/* Hero Illustration Background — rickshaw in center, skyline at bottom */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -translate-y-10 md:translate-y-0">
           <img 
             src={heroIllustrationImg} 
             className="hero-illustration w-full h-full object-cover object-bottom opacity-40 mix-blend-multiply" 
             alt="Kolkata Illustration" 
           />
        </div>

        {/* Centered Content */}
        <div className="relative z-40 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center -translate-y-10 md:translate-y-0">
          <div className="hero-text mb-4 md:mb-6 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-serif italic text-[#657777] mb-2 md:mb-3 tracking-wide">Since 2016, Hindustan Park</h2>
            <div className="w-6 h-[2px] bg-[#e65a44] rounded-full"></div>
          </div>
          
          <div className="hero-text mb-6 mt-2 md:mb-10 md:mt-4">
            <img src={logoImg} alt="Art Rickshaw" className="h-20 md:h-28 lg:h-40 w-auto mx-auto object-contain" />
          </div>

          <div className="hero-text flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-serif text-[#657777] mb-2 md:mb-3">Create. Learn. Belong.</h3>
            <div className="w-6 h-[2px] bg-[#e65a44] rounded-full mb-4 md:mb-5"></div>
            <p className="text-sm md:text-base text-gray-600 font-sans max-w-md mx-auto font-medium leading-relaxed">
              Workshops, pottery, events and<br/>creative experiences in <span className="text-[#e65a44] italic font-bold">Kolkata</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Activities Section */}
      <section ref={horizontalSectionRef} className="h-screen bg-[#f4ece3] relative overflow-hidden flex flex-col justify-center pt-24 pb-8 z-10">
        <div className="w-full px-10 md:px-20 mb-8 pointer-events-none text-center flex flex-col items-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">What We Do</span>
          <div className="w-6 h-[2px] bg-[#e65a44] rounded-full mb-6"></div>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-text-dark leading-none tracking-tighter">OUR ACTIVITIES</h2>
          <p className="text-xl text-gray-500 mt-6 max-w-md mx-auto font-serif italic">Scroll to explore the different ways you can express your creativity.</p>
        </div>

        <div ref={horizontalScrollRef} className="flex h-[50vh] md:h-[60vh] items-center w-max pl-[10vw] pr-[20vw] will-change-transform">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              data-cursor="explore"
              onClick={() => handleActivityClick(activity)}
              className={`shrink-0 w-[80vw] md:w-[40vw] h-full mx-4 rounded-3xl p-10 flex flex-col justify-end ${activity.color} shadow-lg transform-gpu transition-transform duration-500 lg:hover:scale-[1.02] will-change-transform cursor-pointer`}
            >
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{activity.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-white/90 font-bold tracking-widest uppercase">Explore</span>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32 bg-[#f4ece3] relative z-10"></div>

      {/* --- WEEKLY SPECIALS SECTION --- */}
      <section className="specials-section bg-secondary text-white relative py-32 border-y border-white/10">
        <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24 specials-header flex flex-col items-start">
           <span className="text-pink-300 font-bold tracking-widest uppercase text-sm block mb-3">Curated Experiences</span>
           <div className="w-6 h-[2px] bg-[#e65a44] rounded-full mb-4"></div>
           <h2 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter uppercase">Weekly Specials</h2>
           <p className="text-xl text-gray-300 font-serif italic mt-6 max-w-xl">
             Exclusive, limited-capacity events designed to spark your creativity and connect you with like-minded individuals.
           </p>
        </div>
        
        <div className="specials-cards-container flex flex-col md:flex-row h-[120vh] md:h-[75vh] w-full px-4 md:px-12 gap-4 max-w-full mx-auto">
           {specials.map((special, i) => {
              const isActive = hoveredSpecial === i;
              return (
                <div 
                  key={special.id} 
                  onMouseEnter={() => setHoveredSpecial(i)}
                  onClick={() => handleSpecialClick(i, special)}
                  data-cursor="book"
                  className={`special-hover-card relative rounded-3xl overflow-hidden cursor-pointer group transform-gpu ${isActive ? 'md:flex-3 flex-2' : 'md:flex-1 flex-1'}`}
                  style={{ transition: 'flex 700ms cubic-bezier(0.25,1,0.5,1)' }}
                >
                   <img src={special.image} className={`absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-1000 ${isActive ? 'scale-105' : 'scale-100'} lg:group-hover:scale-110`} alt={special.title} />
                   <div className={`absolute inset-0 bg-linear-to-t transition-all duration-500 ${isActive ? 'from-black/90 via-black/40 to-transparent' : 'from-black/80 via-black/60 to-black/30'}`}></div>
                   
                   <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                      <div className={`transform transition-all duration-700 ${isActive ? 'translate-y-0' : 'translate-y-0 md:translate-y-8'}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`w-10 h-10 shrink-0 rounded-full border flex items-center justify-center font-bold text-sm transition-colors duration-500 ${isActive ? 'border-primary text-primary' : 'border-white/30 text-white'}`}>
                            0{i + 1}
                          </span>
                          <span className={`font-bold tracking-widest uppercase text-xs transition-opacity duration-500 ${isActive ? 'opacity-100 text-primary' : 'opacity-0'}`}>
                            Featured Event
                          </span>
                        </div>
                        
                        <h3 className={`font-serif font-bold text-white mb-2 leading-tight uppercase transition-all duration-500 ${isActive ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} ${!isActive && 'md:whitespace-nowrap'}`}>
                           {special.title}
                        </h3>
                        
                        <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                          <p className="text-base md:text-xl text-gray-300 font-serif italic line-clamp-3">
                            {special.desc}
                          </p>
                          <div 
                            onClick={(e) => { e.stopPropagation(); setSelectedBooking(special.modalData); setIsModalOpen(true); }}
                            className="mt-6 flex items-center gap-2 text-white font-bold tracking-widest uppercase text-xs hover:text-primary transition-colors w-fit"
                          >
                            <span>Book Now</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                   </div>
                   
                   {/* Decorative Corner Icon */}
                   <div 
                     onClick={(e) => { e.stopPropagation(); setSelectedBooking(special.modalData); setIsModalOpen(true); }}
                     className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 transform-gpu ${isActive ? 'opacity-100 translate-y-0 bg-white text-black' : 'opacity-0 -translate-y-4 bg-white/20 text-white'}`}
                   >
                     <ArrowRight className={`w-6 h-6 transition-transform duration-500 ${isActive ? '-rotate-45' : 'rotate-0'}`} />
                   </div>
                </div>
              );
           })}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 md:py-36 bg-[#f4ece3] text-text-dark relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 border-b border-text-dark/10 pb-8">
            <div className="philosophy-header">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">Our Story</span>
              <div className="w-6 h-[2px] bg-[#e65a44] rounded-full mb-4"></div>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif font-black text-text-dark leading-none tracking-tighter uppercase">
                OUR <br className="hidden md:block" /> PHILOSOPHY.
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-500 max-w-md mt-6 md:mt-0 font-serif italic philosophy-header">
              Founded with a passion for bringing people together through creativity, Art Rickshaw is a sanctuary where you learn, create, and belong.
            </p>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Sticky Image Showcase & Quote */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32 space-y-8 about-img-container">
              <div className="aspect-3/4 md:aspect-4/5 lg:aspect-3/4 relative group/gallery about-img clip-path-reveal scale-125 will-change-transform flex items-center justify-center bg-transparent">
                {/* Floating Local Illustrations with parallax compatibility and interactive styling */}
                <img 
                  src={waterColourRickshawImg} 
                  alt="Watercolor Rickshaw" 
                  className={`philosophy-watercolor-rickshaw absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] object-contain transition-all duration-700 ease-out will-change-transform mix-blend-multiply pointer-events-none ${
                    activePillar === 0 
                      ? 'opacity-100 scale-100 rotate-0 z-20' 
                      : 'opacity-0 scale-95 rotate-0 z-10'
                  }`}
                />
                <img 
                  src={yellowTaxiImg} 
                  alt="Yellow Taxi" 
                  className={`philosophy-yellow-taxi absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] object-contain transition-all duration-700 ease-out will-change-transform mix-blend-multiply pointer-events-none ${
                    activePillar === 1 
                      ? 'opacity-100 scale-100 rotate-0 z-20' 
                      : 'opacity-0 scale-95 rotate-0 z-10'
                  }`}
                />
                <img 
                  src={victoriaMemorialImg} 
                  alt="Victoria Memorial" 
                  className={`philosophy-victoria absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] object-contain transition-all duration-700 ease-out will-change-transform mix-blend-multiply pointer-events-none ${
                    activePillar === 2 
                      ? 'opacity-100 scale-100 rotate-0 z-20' 
                      : 'opacity-0 scale-95 rotate-0 z-10'
                  }`}
                />

                {/* Est Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-text-dark/5 shadow-md text-xs font-bold tracking-widest uppercase text-[#e65a44] z-30 pointer-events-none">
                  Kolkata, Est. 2016
                </div>
              </div>

              {/* Editorial Quote */}
              <div className="space-y-4 philosophy-header pt-4 border-t border-text-dark/10">
                <h3 className="text-xl font-serif italic text-gray-700">
                  "Art is a way of recognizing oneself."
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  We don't teach you rules; we help you find your voice. Step away from the noise of the city and step into a space of pure, unfiltered flow.
                </p>
              </div>
            </div>

            {/* Right Column: Three Philosophy Pillars Accordion */}
            <div className="lg:col-span-7 space-y-4 philosophy-cards-container">
              {pillars.map((pillar, idx) => {
                const isActive = activePillar === idx;
                return (
                  <div 
                    key={pillar.id}
                    onMouseEnter={() => setActivePillar(idx)}
                    onClick={() => setActivePillar(idx)}
                    className={`philosophy-card group border-t border-text-dark/10 py-6 md:py-8 transition-opacity duration-500 cursor-pointer ${
                      !isActive ? 'opacity-40' : 'opacity-100'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-6 md:gap-10">
                        {/* Index Number */}
                        <span className={`text-xl md:text-2xl font-serif font-semibold transition-colors duration-500 ${
                          isActive ? pillar.colorClass.split(' ')[0] : 'text-gray-400'
                        }`}>
                          {pillar.id}
                        </span>

                        {/* Title & Tagline & Description */}
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 block mb-1">
                              {pillar.tagline}
                            </span>
                            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-text-dark transition-colors duration-300 ${
                              isActive ? pillar.colorClass.split(' ')[0] : ''
                            }`}>
                              {pillar.title}
                            </h3>
                          </div>

                          {/* Expandable Description */}
                          <div 
                            className={`grid transition-all duration-500 ease-in-out ${
                              isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-sans font-medium max-w-xl pb-1">
                                {pillar.description}
                              </p>

                              {/* Mobile-only illustration inside the card */}
                              <div className="lg:hidden w-full flex justify-center py-6">
                                <img 
                                  src={
                                    idx === 0 
                                      ? waterColourRickshawImg 
                                      : idx === 1 
                                        ? yellowTaxiImg 
                                        : victoriaMemorialImg
                                  }  
                                  alt={pillar.title} 
                                  className="w-[80%] max-w-[280px] h-auto object-contain mix-blend-multiply"
                                />
                              </div>

                              <Link 
                                to="/bookings"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-text-dark w-fit hover:text-primary transition-colors cursor-pointer relative z-30"
                              >
                                <span>Explore experiences</span>
                                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Arrow Indicator */}
                      <div className={`w-10 h-10 rounded-full border border-text-dark/10 flex items-center justify-center transition-all duration-500 shrink-0 ${
                        isActive ? 'bg-text-dark text-white border-text-dark -rotate-45' : 'text-text-dark/40 group-hover:text-text-dark rotate-0'
                      }`}>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section id="team" className="py-20 md:py-32 bg-[#f0ddd5] relative z-10 border-t border-text-dark/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <div className="team-header">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">The People</span>
              <div className="w-6 h-[2px] bg-[#e65a44] rounded-full mb-4"></div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-text-dark leading-none tracking-tighter uppercase">
                MEET THE <br/> CREATIVES.
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-500 max-w-md mt-6 md:mt-0 font-serif italic team-header">
              The artists, makers, and dreamers who bring Art Rickshaw to life every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { id: 1, name: 'Devangana', role: 'Founder & Artist', color: 'bg-primary', delay: '0' },
              { id: 2, name: 'Sidhant', role: 'Creative Director', color: 'bg-secondary', delay: '100' },
              { id: 3, name: 'Priya', role: 'Workshop Lead', color: 'bg-teal-500', delay: '200' },
            ].map((member) => (
              <div key={member.id} className="team-member group cursor-pointer" data-cursor="explore">
                <div className={`w-full aspect-square rounded-3xl mb-6 relative overflow-hidden ${member.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 lg:group-hover:opacity-80 transition-opacity duration-500">
                     <span className="text-[25vw] md:text-[15vw] font-black text-white">{member.name[0]}</span>
                  </div>
                  <img src={yellowTaxiImg} alt="Team" className="team-img-parallax absolute top-[-20%] w-full h-[140%] object-cover opacity-0 lg:group-hover:opacity-20 transition-opacity duration-500 will-change-transform transform-gpu" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-text-dark">{member.name}</h3>
                <p className="text-gray-500 font-sans uppercase tracking-widest text-sm font-bold mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 relative overflow-hidden border-t border-text-dark/10 bg-[#f4ece3]">
        {/* Background Sketch */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
           <img 
             src={howrahBridgeImg} 
             className="contact-howrah-bridge-parallax w-[90%] md:w-[70%] lg:w-[50%] h-[80%] object-contain opacity-[0.22] mix-blend-multiply will-change-transform" 
             alt="Howrah Bridge Centered Background" 
           />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-start relative z-10">
          {/* Left Side: Massive Text */}
          <div className="w-full lg:w-1/2 contact-title-parallax">
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-serif font-black text-text-dark leading-none tracking-tighter mb-10 wrap-break-word">
              LET'S <br/> CONNECT.
            </h1>
            <div className="space-y-6 text-xl text-gray-500 font-serif italic mb-8">
              <p>Hindustan Park, Gariahat<br/>Kolkata, West Bengal<br/>India - 700029</p>
              <p><a href="mailto:hello@artrickshaw.com" className="hover:text-primary transition-colors underline">hello@artrickshaw.com</a></p>
              <p>+91 98300 98300</p>
            </div>
             {/* Social Links */}
            <div className="flex gap-4 items-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-text-dark/20 flex items-center justify-center text-text-dark hover:bg-[#e65a44] hover:text-white hover:border-[#e65a44] transition-all duration-300 transform hover:scale-105" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-text-dark/20 flex items-center justify-center text-text-dark hover:bg-[#e65a44] hover:text-white hover:border-[#e65a44] transition-all duration-300 transform hover:scale-105" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-text-dark/20 flex items-center justify-center text-text-dark hover:bg-[#e65a44] hover:text-white hover:border-[#e65a44] transition-all duration-300 transform hover:scale-105" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Ultra Minimal Form */}
          <div className="w-full lg:w-1/2 lg:pt-10">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="form-element relative z-0 w-full group">
                <input type="text" name="name" id="name" className="block py-4 px-0 w-full text-2xl text-text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-bold absolute text-gray-500 text-2xl duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 uppercase tracking-widest">Full Name</label>
              </div>
              
              <div className="form-element relative z-0 w-full group">
                <input type="email" name="email" id="email" className="block py-4 px-0 w-full text-2xl text-text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-bold absolute text-gray-500 text-2xl duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 uppercase tracking-widest">Email Address</label>
              </div>

              <div className="form-element relative z-0 w-full group">
                <textarea name="message" id="message" rows="4" className="block py-4 px-0 w-full text-2xl text-text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors resize-none" placeholder=" " required></textarea>
                <label htmlFor="message" className="peer-focus:font-bold absolute text-gray-500 text-2xl duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 uppercase tracking-widest">Your Message</label>
              </div>

              <button type="submit" className="form-element text-white border-2 border-text-dark bg-text-dark hover:bg-transparent hover:text-text-dark focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold uppercase tracking-widest rounded-full text-xl w-full sm:w-auto px-12 py-4 text-center transition-all duration-300" data-cursor="send">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={selectedBooking} 
      />
    </div>
  );
};

export default Home;
