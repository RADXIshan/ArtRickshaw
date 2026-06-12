import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Simulate loading progress
    tl.to(progressRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power3.inOut'
    })
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, "-=0.5")
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: 'power4.inOut',
      delay: 0.2
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-99999 bg-text-dark flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative overflow-hidden mb-8">
        <h1 
          ref={textRef} 
          className="text-6xl md:text-8xl font-serif text-white opacity-0 translate-y-10"
        >
          Art Rickshaw
        </h1>
      </div>
      
      <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <div ref={progressRef} className="w-0 h-full bg-primary rounded-full" />
      </div>
    </div>
  );
};

export default Preloader;
