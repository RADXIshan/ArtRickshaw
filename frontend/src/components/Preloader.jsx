import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import preloaderRickshawImg from '../assets/images/preloader_rickshaw.png';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const loadingTextRef = useRef(null);
  const progressRef = useRef(null);
  const progressBgRef = useRef(null);
  const rickshawRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Reveal Text and Rickshaw
    tl.to([textRef.current, rickshawRef.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out'
    })
    // Simulate loading progress
    .to(progressRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut'
    }, "-=0.5")
    .to(rickshawRef.current, {
      left: '100%',
      duration: 1.5,
      ease: 'power2.inOut'
    }, "<")
    // Fade out inner content
    .to([textRef.current, loadingTextRef.current, progressBgRef.current], {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, "+=0.2")
    // Slide container up (Curtain wipe)
    .to(containerRef.current, {
      height: '0vh',
      duration: 0.8,
      ease: 'power4.inOut',
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-screen z-99999 bg-text-dark flex flex-col items-center justify-center pointer-events-none overflow-hidden"
    >
      <div className="relative overflow-hidden mb-12 flex flex-col items-center">
        <h1 
          ref={textRef} 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter uppercase text-bg-base opacity-0 translate-y-10"
        >
          ART RICKSHAW
        </h1>
        <p ref={loadingTextRef} className="text-gray-400 font-sans uppercase tracking-widest text-sm font-bold mt-4">
          Loading <span className="text-primary italic">Creativity...</span>
        </p>
      </div>
      
      <div ref={progressBgRef} className="w-64 md:w-96 h-[2px] bg-white/10 relative">
        <div ref={progressRef} className="w-0 h-full bg-primary absolute top-0 left-0" />
        
        <div 
          ref={rickshawRef} 
          className="absolute bottom-2 left-0 -translate-x-1/2 opacity-0 translate-y-5"
        >
          <img 
            src={preloaderRickshawImg} 
            alt="Rickshaw" 
            className="h-16 w-auto mix-blend-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
