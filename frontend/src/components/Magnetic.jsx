import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Magnetic = ({ children }) => {
  const magneticRef = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magneticRef.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(magneticRef.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magneticRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const element = magneticRef.current;
    element.addEventListener('mousemove', mouseMove);
    element.addEventListener('mouseleave', mouseLeave);

    return () => {
      element.removeEventListener('mousemove', mouseMove);
      element.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  return (
    <div ref={magneticRef} className="inline-block cursor-pointer">
      {children}
    </div>
  );
};

export default Magnetic;
