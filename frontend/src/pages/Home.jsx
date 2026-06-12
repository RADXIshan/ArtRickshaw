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

const WordSplitter = ({ text, className }) => {
  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span className="inline-block word-reveal translate-y-[120%]">{word}&nbsp;</span>
        </span>
      ))}
    </span>
  );
};

const Home = () => {
  const container = useRef(null);
  const heroRef = useRef(null);
  const introRef = useRef(null);
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

    // Intro Text Reveal
    gsap.to(introRef.current.querySelectorAll('.word-reveal'), {
      y: '0%',
      duration: 1,
      stagger: 0.02,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: introRef.current,
        start: 'top 75%',
      }
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

    // About Stats Counters
    const counters = gsap.utils.toArray('.stat-counter');
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute('data-target'));
      gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
        }
      });
    });

    // About Image reveal
    gsap.to('.about-img', {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      scale: 1,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.about-img-container',
        start: 'top 80%'
      }
    });

  }, { scope: container });

  return (
    <div ref={container} className="overflow-hidden bg-bg-base text-text-dark">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden bg-bg-base">
        
        {/* Massive Background Typography */}
        <div className="absolute top-1/4 left-0 w-full text-center z-0 opacity-5 pointer-events-none mix-blend-multiply">
          <h1 className="text-[25vw] font-serif font-black leading-none tracking-tighter">KOLKATA</h1>
        </div>

        {/* Parallax Background Images */}
        <div className="absolute inset-0 z-10 parallax-bg pointer-events-none flex justify-between px-10 items-start pt-32">
           <img src="/src/assets/images/bridge.png" alt="Howrah Bridge" className="w-[40vw] max-w-[500px] object-contain opacity-50 filter grayscale mix-blend-multiply" />
           <img src="/src/assets/images/victoria.png" alt="Victoria Memorial" className="w-[40vw] max-w-[500px] object-contain opacity-50 filter grayscale mt-40 mix-blend-multiply" />
        </div>
        
        <div className="absolute inset-0 z-20 parallax-mid pointer-events-none flex justify-center items-end pb-32">
           <img src="/src/assets/images/rickshaw.png" alt="Rickshaw" className="w-[50vw] max-w-[600px] object-contain drop-shadow-xl" />
        </div>

        <div className="absolute inset-0 z-30 parallax-front pointer-events-none flex justify-end items-end pb-10 pr-10">
           <img src="/src/assets/images/taxi.png" alt="Yellow Taxi" className="w-[60vw] max-w-[800px] object-contain drop-shadow-2xl" />
        </div>

        <div className="relative z-40 text-center px-4 max-w-5xl mx-auto mt-[-10vh]">
          <h1 className="hero-text text-6xl md:text-8xl lg:text-[7rem] font-serif font-bold text-text-dark leading-tight mb-6 tracking-tighter uppercase">
            The <span className="text-primary italic">Creative</span> Engine
          </h1>
          <p className="hero-text text-xl md:text-3xl text-gray-500 font-sans mb-10 max-w-3xl mx-auto uppercase tracking-widest font-bold">
            Immerse yourself in the vibrant art culture of the city of joy.
          </p>
        </div>

        {/* Next Event Widget */}
        <div className="hero-text absolute bottom-10 left-10 z-50 bg-white/50 backdrop-blur-md border border-gray-200 shadow-xl p-6 rounded-2xl w-[350px]">
          <div className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Next Masterclass</div>
          <h3 className="text-2xl font-serif font-bold text-text-dark mb-4">Resin Art Immersion</h3>
          <div className="flex justify-between text-gray-500 text-sm border-t border-gray-200 pt-4 font-medium">
            <span>Oct 24, 2026</span>
            <span>4:00 PM - 6:00 PM</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-40 px-6 bg-transparent relative z-10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12 text-text-dark uppercase tracking-tighter">
            <WordSplitter text="More than just an art studio." />
          </h2>
          <p className="text-2xl md:text-4xl leading-relaxed text-gray-500 font-medium font-serif italic">
            <WordSplitter text="Art Rickshaw is a place where creativity flows freely. Nestled in the heart of Kolkata, we bring people together through the power of expression, colors, and craftsmanship." />
          </p>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <section className="py-6 bg-primary text-white border-y border-gray-200">
        <div className="animate-marquee cursor-pointer" data-cursor="explore">
          <span className="text-5xl md:text-7xl font-serif font-bold mx-4 uppercase tracking-wider">
            Art Rickshaw ✦ Express Yourself ✦ Kolkata's Creative Hub ✦ Workshops ✦ Private Events ✦ 
          </span>
          <span className="text-5xl md:text-7xl font-serif font-bold mx-4 uppercase tracking-wider">
            Art Rickshaw ✦ Express Yourself ✦ Kolkata's Creative Hub ✦ Workshops ✦ Private Events ✦ 
          </span>
        </div>
      </section>

      {/* Horizontal Scroll Activities Section */}
      <section ref={horizontalSectionRef} className="h-screen bg-bg-base relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-text-dark">Our Activities</h2>
          <p className="text-xl text-gray-500 mt-4 max-w-md font-medium">Scroll to explore the different ways you can express your creativity.</p>
        </div>

        <div ref={horizontalScrollRef} className="flex h-1/2 md:h-[60vh] mt-24 items-center pl-[20vw] pr-[20vw]">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              data-cursor="explore"
              className={`shrink-0 w-[80vw] md:w-[40vw] h-full mx-4 rounded-3xl p-10 flex flex-col justify-end ${activity.color} shadow-lg transform transition-transform duration-500 hover:scale-[1.02]`}
            >
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{activity.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-white/90 font-bold tracking-widest uppercase">Explore</span>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <ArrowRight className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Spacer to allow scrolling past horizontal section */}
      <div className="h-[10vh] bg-transparent"></div>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="pt-32 pb-24 bg-text-dark text-white">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero Content */}
          <div className="max-w-6xl mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-10 block">Our Story</span>
            <h1 className="text-6xl md:text-[8vw] font-serif font-black text-white leading-none tracking-tighter mb-12">
              COLORING <br/> KOLKATA.
            </h1>
            <p className="text-2xl md:text-4xl text-gray-400 font-serif italic max-w-4xl leading-relaxed">
              Founded with a passion for bringing people together through creativity, Art Rickshaw is more than just a studio. It's a sanctuary for imagination.
            </p>
          </div>

          {/* Stats Section */}
          <div className="py-20 border-y border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <div>
                <div className="text-[15vw] md:text-[10vw] font-serif font-bold text-primary leading-none tracking-tighter">
                  <span className="stat-counter" data-target="50">0</span>+
                </div>
                <div className="text-xl font-bold uppercase tracking-widest text-white mt-4">Workshops</div>
              </div>
              <div>
                <div className="text-[15vw] md:text-[10vw] font-serif font-bold text-primary leading-none tracking-tighter">
                  <span className="stat-counter" data-target="10">0</span>k+
                </div>
                <div className="text-xl font-bold uppercase tracking-widest text-white mt-4">Creators</div>
              </div>
              <div>
                <div className="text-[15vw] md:text-[10vw] font-serif font-bold text-primary leading-none tracking-tighter">
                  <span className="stat-counter" data-target="100">0</span>%
                </div>
                <div className="text-xl font-bold uppercase tracking-widest text-white mt-4">Passion</div>
              </div>
            </div>
          </div>

          {/* Image & Text Split */}
          <div className="flex flex-col md:flex-row items-start gap-20 py-32">
            <div className="w-full md:w-1/2 about-img-container">
              <div className="aspect-4/5 bg-gray-200 rounded-2xl overflow-hidden relative about-img clip-path-reveal scale-125 shadow-2xl">
                 <img src="/src/assets/images/rickshaw.png" alt="Studio" className="w-full h-full object-cover object-center mix-blend-multiply opacity-80" />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pt-20">
              <h2 className="text-5xl font-serif font-bold text-white mb-10 tracking-tighter">OUR PHILOSOPHY</h2>
              <p className="text-2xl text-gray-400 mb-8 leading-relaxed font-serif italic">
                We believe that art is not just for the 'gifted'. It is a language, a form of therapy, and a way to connect. We provide a space where mistakes are welcomed as happy accidents.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-sans uppercase tracking-widest font-medium">
                From traditional terracotta to modern fluid arts, our workshops are designed to help you disconnect from the hustle of the city and reconnect with your inner self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 relative overflow-hidden border-t border-gray-200">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img src="/src/assets/images/bridge.png" className="w-full h-full object-cover opacity-5 filter grayscale" alt="Background" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-start relative z-10">
          {/* Left Side: Massive Text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-[15vw] lg:text-[10vw] font-serif font-black text-text-dark leading-none tracking-tighter mb-10">
              LET'S <br/> CREATE.
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
              <div className="relative z-0 w-full group">
                <input type="text" name="name" id="name" className="block py-4 px-0 w-full text-2xl text-text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-bold absolute text-gray-500 text-2xl duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 uppercase tracking-widest">Full Name</label>
              </div>
              
              <div className="relative z-0 w-full group">
                <input type="email" name="email" id="email" className="block py-4 px-0 w-full text-2xl text-text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-bold absolute text-gray-500 text-2xl duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 uppercase tracking-widest">Email Address</label>
              </div>

              <div className="relative z-0 w-full group">
                <textarea name="message" id="message" rows="4" className="block py-4 px-0 w-full text-2xl text-text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors resize-none" placeholder=" " required></textarea>
                <label htmlFor="message" className="peer-focus:font-bold absolute text-gray-500 text-2xl duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-left peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 uppercase tracking-widest">Your Message</label>
              </div>

              <button type="submit" className="text-white border-2 border-text-dark bg-text-dark hover:bg-transparent hover:text-text-dark focus:ring-4 focus:outline-none focus:ring-primary/50 font-bold uppercase tracking-widest rounded-full text-xl w-full sm:w-auto px-12 py-4 text-center transition-all duration-300" data-cursor="explore">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
