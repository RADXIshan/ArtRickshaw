import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import taxiImg from '../assets/images/taxi.png';
import sketchedRickshawImg from '../assets/images/sketched rickshaw.png';
import taxiSketchImg from '../assets/images/taxi_sketch_minimal.png';
import logoImg from '../assets/images/logo.png';
import heroIllustrationImg from '../assets/images/hero_illustration.png';

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

const specials = [
  { id: 1, title: 'Sunday Sundowner Sip & Paint', image: 'https://images.unsplash.com/photo-1574510008544-04104e705b0c?auto=format&fit=crop&q=80', desc: 'Unwind your weekend with a glass of wine, good music, and an immersive painting session. Perfect for friends and couples.' },
  { id: 2, title: 'Midnight Pottery', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80', desc: 'Experience the magic of the potter\'s wheel under the stars. A calm and therapeutic late-night session.' },
  { id: 3, title: 'Weekend Art Bootcamp', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80', desc: 'A rigorous but fun weekend bootcamp covering three distinct art mediums over two days.' },
];


const Home = () => {
  const container = useRef(null);
  const [hoveredSpecial, setHoveredSpecial] = useState(0);
  const heroRef = useRef(null);

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
        }
      }
    );



    // About Image reveal (optimized)
    gsap.to('.about-img', {
      clipPath: 'inset(0% 0% 0% 0%)',
      scale: 1,
      duration: 1.5,
      ease: 'power3.out',
      force3D: true,
      scrollTrigger: {
        trigger: '.about-img-container',
        start: 'top 80%'
      }
    });

    // Philosophy Text Parallax
    gsap.from('.philosophy-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.philosophy-container',
        start: 'top 75%',
      }
    });


    // Team Header Reveal
    gsap.from('.team-header', {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#team',
        start: 'top 75%',
      }
    });

    // Team Members Stagger
    gsap.from('.team-member', {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '#team',
        start: 'top 80%',
      }
    });
    
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

    // About Image inner parallax
    gsap.to('.about-img-parallax', {
      yPercent: 15,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: '.about-img-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Contact Background Parallax
    gsap.to('.contact-bg-parallax', {
      yPercent: 20,
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
    gsap.from('.form-element', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#contact form',
        start: 'top 80%',
      }
    });

    // Contact "LET'S CREATE." Parallax
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
        <div className="absolute inset-0 w-full h-full pointer-events-none">
           <img 
             src={heroIllustrationImg} 
             className="hero-illustration w-full h-full object-cover object-bottom opacity-40 mix-blend-multiply" 
             alt="Kolkata Illustration" 
           />
        </div>

        {/* Centered Content */}
        <div className="relative z-40 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center">
          <div className="hero-text mb-6 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-serif italic text-[#657777] mb-3 tracking-wide">Since 2016, Hindustan Park</h2>
            <div className="w-6 h-[2px] bg-[#e65a44] rounded-full"></div>
          </div>
          
          <div className="hero-text mb-10 mt-4">
            <img src={logoImg} alt="Art Rickshaw" className="h-20 md:h-28 lg:h-40 w-auto mx-auto object-contain" />
          </div>

          <div className="hero-text flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-serif text-[#657777] mb-3">Create. Learn. Belong.</h3>
            <div className="w-6 h-[2px] bg-[#e65a44] rounded-full mb-5"></div>
            <p className="text-sm md:text-base text-gray-600 font-sans max-w-md mx-auto font-medium leading-relaxed">
              Workshops, pottery, events and<br/>creative experiences in <span className="text-[#e65a44] italic font-bold">Kolkata</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Activities Section */}
      <section ref={horizontalSectionRef} className="h-screen bg-[#f4ece3] relative overflow-hidden flex flex-col justify-center pt-24 pb-8 z-10">
        <div className="w-full px-10 md:px-20 mb-8 pointer-events-none text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 block">What We Do</span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-text-dark leading-none tracking-tighter">OUR ACTIVITIES</h2>
          <p className="text-xl text-gray-500 mt-6 max-w-md mx-auto font-serif italic">Scroll to explore the different ways you can express your creativity.</p>
        </div>

        <div ref={horizontalScrollRef} className="flex h-[50vh] md:h-[60vh] items-center w-max pl-[10vw] pr-[20vw] will-change-transform">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              data-cursor="explore"
              className={`shrink-0 w-[80vw] md:w-[40vw] h-full mx-4 rounded-3xl p-10 flex flex-col justify-end ${activity.color} shadow-lg transform-gpu transition-transform duration-500 lg:hover:scale-[1.02] will-change-transform`}
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
        <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24 specials-header">
           <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Curated Experiences</span>
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
                  onClick={() => setHoveredSpecial(i)}
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
                          <div className="mt-6 flex items-center gap-2 text-white font-bold tracking-widest uppercase text-xs hover:text-primary transition-colors w-fit">
                            <span>Book Now</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                   </div>
                   
                   {/* Decorative Corner Icon */}
                   <div className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 transform-gpu ${isActive ? 'opacity-100 translate-y-0 bg-white text-black' : 'opacity-0 -translate-y-4 bg-white/20 text-white'}`}>
                     <ArrowRight className={`w-6 h-6 transition-transform duration-500 ${isActive ? '-rotate-45' : 'rotate-0'}`} />
                   </div>
                </div>
              );
           })}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="pt-32 pb-8 bg-[#f4ece3] text-text-dark">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header — matches MEET THE CREATIVES style */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 block">Our Story</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-text-dark leading-none tracking-tighter">
                OUR <br/> PHILOSOPHY.
              </h2>
            </div>
            <p className="text-xl text-gray-500 max-w-md mt-6 md:mt-0 font-serif italic">
              Founded with a passion for bringing people together through creativity, Art Rickshaw is more than just a studio.
            </p>
          </div>



          {/* Image & Text Split */}
          <div className="flex flex-col md:flex-row items-start gap-20 py-16">
            <div className="w-full md:w-1/2 about-img-container">
              <div className="aspect-square bg-[#f4ece3] rounded-2xl overflow-hidden relative about-img clip-path-reveal scale-125 will-change-transform">
                 <img src={sketchedRickshawImg} alt="Sketched Rickshaw" className="about-img-parallax absolute inset-0 w-full h-full object-contain object-center will-change-transform mix-blend-multiply" />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pt-20 philosophy-container">
              <p className="philosophy-text text-2xl text-gray-500 mb-8 leading-relaxed font-serif italic">
                We believe that art is not just for the 'gifted'. It is a language, a form of therapy, and a way to connect. We provide a space where mistakes are welcomed as happy accidents.
              </p>
              <p className="philosophy-text text-lg text-gray-500 leading-relaxed font-sans uppercase tracking-widest font-medium">
                From traditional terracotta to modern fluid arts, our workshops are designed to help you disconnect from the hustle of the city and reconnect with your inner self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section id="team" className="py-32 bg-[#f0ddd5] relative z-10 border-t border-text-dark/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 block">The People</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-text-dark leading-none tracking-tighter team-header">
                MEET THE <br/> CREATIVES.
              </h2>
            </div>
            <p className="text-xl text-gray-500 max-w-md mt-6 md:mt-0 font-serif italic team-header">
              The artists, makers, and dreamers who bring Art Rickshaw to life every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { id: 1, name: 'Devangana', role: 'Founder & Artist', color: 'bg-primary', delay: '0' },
              { id: 2, name: 'Sidhant', role: 'Creative Director', color: 'bg-secondary', delay: '100' },
              { id: 3, name: 'Priya', role: 'Workshop Lead', color: 'bg-teal-500', delay: '200' },
            ].map((member, i) => (
              <div key={member.id} className="team-member group cursor-pointer" data-cursor="explore">
                <div className={`w-full aspect-square rounded-3xl mb-6 relative overflow-hidden ${member.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 lg:group-hover:opacity-80 transition-opacity duration-500">
                     <span className="text-[25vw] md:text-[15vw] font-black text-white">{member.name[0]}</span>
                  </div>
                  <img src={taxiImg} alt="Team" className="team-img-parallax absolute top-[-20%] w-full h-[140%] object-cover opacity-0 lg:group-hover:opacity-20 transition-opacity duration-500 will-change-transform transform-gpu" />
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
        <div className="absolute inset-0 z-0">
           <img src={taxiSketchImg} className="contact-bg-parallax absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[120%] object-contain opacity-[0.08] mix-blend-multiply will-change-transform" alt="Background" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-start relative z-10">
          {/* Left Side: Massive Text */}
          <div className="w-full lg:w-1/2 contact-title-parallax">
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-serif font-black text-text-dark leading-none tracking-tighter mb-10 wrap-break-word">
              LET'S <br/> CONNECT.
            </h1>
            <div className="space-y-6 text-xl text-gray-500 font-serif italic">
              <p>Hindustan Park, Gariahat<br/>Kolkata, West Bengal<br/>India - 700029</p>
              <p><a href="mailto:hello@artrickshaw.com" className="hover:text-primary transition-colors underline">hello@artrickshaw.com</a></p>
              <p>+91 98300 98300</p>
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

              <button type="submit" className="form-element text-white border-2 border-text-dark bg-text-dark hover:bg-transparent hover:text-text-dark focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold uppercase tracking-widest rounded-full text-xl w-full sm:w-auto px-12 py-4 text-center transition-all duration-300" data-cursor="explore">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
