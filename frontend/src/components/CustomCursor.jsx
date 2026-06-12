import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hovering', 'explore', 'book', 'send'

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
      
      const cursorTarget = target.closest('[data-cursor]');
      
      // Check if it's a custom cursor area
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        setCursorType(type || 'explore');
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

  const hasText = cursorType === 'explore' || cursorType === 'book' || cursorType === 'send';

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${cursorType !== 'default' ? cursorType : ''}`}
    >
      {hasText && (
        <span className="text-[12px] font-bold uppercase tracking-[1px] text-white select-none pointer-events-none">
          {cursorType}
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
