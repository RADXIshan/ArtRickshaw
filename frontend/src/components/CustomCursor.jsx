import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hovering', 'explore', 'book', 'send'
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mediaQuery.matches);

    const handleResize = (e) => {
      setIsDesktop(e.matches);
    };

    // Support both older and modern listeners
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleResize);
    } else {
      mediaQuery.addListener(handleResize);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleResize);
      } else {
        mediaQuery.removeListener(handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    if (!cursor) return;
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power2.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power2.out' });

    // Move cursor
    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
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
  }, [isDesktop]);

  if (!isDesktop) return null;

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
