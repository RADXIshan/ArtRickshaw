import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hovering', 'explore'

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Move cursor
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    // Detect hovers
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Check if it's an 'explore' area
      if (target.closest('[data-cursor="explore"]')) {
        setCursorType('explore');
      }
      // Check if it's a clickable element
      else if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer')
      ) {
        setCursorType('hovering');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${cursorType !== 'default' ? cursorType : ''}`}
    />
  );
};

export default CustomCursor;
