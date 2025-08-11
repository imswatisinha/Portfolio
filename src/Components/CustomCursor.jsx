import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import '../Css/CustomCursor.css';

const CustomCursor = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const requestRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });
  const isPointer = useRef(false);
  const isHidden = useRef(false);

  // Check if mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    // Smooth animation loop using requestAnimationFrame
    const animateCursor = () => {
      // Smooth interpolation for follower (lag effect)
      const speed = 0.15;
      followerPosition.current.x += (mousePosition.current.x - followerPosition.current.x) * speed;
      followerPosition.current.y += (mousePosition.current.y - followerPosition.current.y) * speed;

      // Update cursor position (instant)
      cursor.style.transform = `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0)`;
      
      // Update follower position (smooth)
      follower.style.transform = `translate3d(${followerPosition.current.x}px, ${followerPosition.current.y}px, 0)`;

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    // Start animation loop
    requestRef.current = requestAnimationFrame(animateCursor);

    // Mouse move handler (optimized)
    const handleMouseMove = (e) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    // Throttled hover detection
    let hoverTimeout;
    const handleMouseOver = (e) => {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        const target = e.target;
        const clickableElements = 'a, button, [role="button"], input, textarea, select, .btn, .link, [data-cursor="pointer"]';
        const isClickable = target.matches(clickableElements) || target.closest(clickableElements);
        
        if (isClickable !== isPointer.current) {
          isPointer.current = isClickable;
          
          if (isClickable) {
            cursor.classList.add('pointer');
            follower.classList.add('pointer');
          } else {
            cursor.classList.remove('pointer');
            follower.classList.remove('pointer');
          }
        }
      }, 16); // ~60fps throttling
    };

    // Mouse leave/enter handlers
    const handleMouseLeave = () => {
      isHidden.current = true;
      cursor.classList.add('hidden');
      follower.classList.add('hidden');
    };

    const handleMouseEnter = () => {
      isHidden.current = false;
      cursor.classList.remove('hidden');
      follower.classList.remove('hidden');
    };

    // Special effects for different elements
    const handleSpecialElements = (e) => {
      const target = e.target;
      
      // Text elements - smaller cursor
      if (target.matches('p, h1, h2, h3, h4, h5, h6, span, div[contenteditable]')) {
        cursor.classList.add('text');
        follower.classList.add('text');
      } else {
        cursor.classList.remove('text');
        follower.classList.remove('text');
      }

      // Interactive elements - magnetic effect
      if (target.matches('button, .btn, a')) {
        cursor.classList.add('magnetic');
        follower.classList.add('magnetic');
        
        // Get element center
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Apply magnetic effect (subtle pull towards center)
        const maxDistance = 30;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance * 0.3;
          mousePosition.current.x += (centerX - e.clientX) * strength;
          mousePosition.current.y += (centerY - e.clientY) * strength;
        }
      } else {
        cursor.classList.remove('magnetic');
        follower.classList.remove('magnetic');
      }
    };

    // Add event listeners with passive option for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseover', handleSpecialElements, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    // Cleanup
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      clearTimeout(hoverTimeout);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseover', handleSpecialElements);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile]);

  // Update theme classes when theme changes
  useEffect(() => {
    if (isMobile) return;
    
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (cursor && follower) {
      // Remove old theme classes
      cursor.classList.remove('light', 'dark');
      follower.classList.remove('light', 'dark');
      
      // Add new theme class
      const themeClass = isDarkMode ? 'dark' : 'light';
      cursor.classList.add(themeClass);
      follower.classList.add(themeClass);
    }
  }, [isDarkMode, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isDarkMode ? 'dark' : 'light'}`}
        style={{
          left: 0,
          top: 0,
        }}
      />
      <div
        ref={followerRef}
        className={`cursor-follower ${isDarkMode ? 'dark' : 'light'}`}
        style={{
          left: 0,
          top: 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
