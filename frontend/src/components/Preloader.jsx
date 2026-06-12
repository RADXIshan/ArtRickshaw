import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import rickshawPullerImg from '../assets/preloader_rickshaw_puller.png';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const percentageTextRef = useRef(null);
  const percentageRef = useRef(null);
  const progressRef = useRef(null);
  const rickshawRef = useRef(null);

  useEffect(() => {
    // Block scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        // Fade container out slowly for an elegant exit
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          onComplete: onComplete
        });
      }
    });

    const dummy = { val: 0 };

    tl.to([textRef.current, percentageRef.current, rickshawRef.current], {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power4.out'
    })
    .to(dummy, {
      val: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (percentageTextRef.current) {
          percentageTextRef.current.innerText = `${Math.round(dummy.val)}%`;
        }
        if (progressRef.current) {
          progressRef.current.style.width = `${dummy.val}%`;
        }
      }
    }, "-=0.5")
    .to(rickshawRef.current, {
      left: '110%', // Move past 100% so it gracefully exits without squishing against the edge
      duration: 2.5,
      ease: 'power2.inOut'
    }, "<")
    // Cinematic exit for the internal elements
    .to(textRef.current, {
      scale: 1.05,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 0.8,
      ease: 'power2.inOut'
    }, "+=0.2")
    .to([percentageRef.current, rickshawRef.current, progressRef.current.parentElement], {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    }, "<");

    return () => {
      tl.kill();
      // Restore scrolling when preloader unmounts
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-99999 bg-linear-to-b from-[#050505] to-[#1a1a1a] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.15] mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      {/* Massive Background Percentage */}
      <div 
        ref={percentageRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black text-white/5 opacity-0 select-none tracking-tighter"
      >
        <span ref={percentageTextRef}>0%</span>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6">
        <h1 
          ref={textRef} 
          className="text-5xl md:text-7xl font-serif font-black tracking-tighter uppercase text-white opacity-0 translate-y-10 mb-20 text-center"
        >
          ART RICKSHAW
        </h1>
        
        {/* Progress Container */}
        <div className="w-full relative mt-10">
          {/* Rickshaw Puller */}
          <div 
            ref={rickshawRef} 
            className="absolute bottom-full left-0 translate-x-[-80%] opacity-0 translate-y-5 pb-2"
          >
            <img 
              src={rickshawPullerImg} 
              alt="Rickshaw Puller" 
              className="h-24 md:h-32 w-auto invert mix-blend-screen -scale-x-100 drop-shadow-xl max-w-none shrink-0"
            />
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden relative">
            <div ref={progressRef} className="w-0 h-full bg-primary absolute top-0 left-0 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
