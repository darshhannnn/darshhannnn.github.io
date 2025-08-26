import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth trailing effect
    const updateTrailPosition = () => {
      setTrailPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1
      }));
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Animation frame for smooth trailing
    const animationFrame = setInterval(updateTrailPosition, 16);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(animationFrame);
    };
  }, [mousePosition]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px)`,
          opacity: isVisible ? 1 : 0
        }}
      />
      
      {/* Trailing ball */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-400/60 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: `translate(${trailPosition.x - 16}px, ${trailPosition.y - 16}px)`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      {/* Glow effect */}
      <div
        className="fixed top-0 left-0 w-12 h-12 bg-blue-400/20 rounded-full pointer-events-none z-[9997] blur-md"
        style={{
          transform: `translate(${trailPosition.x - 24}px, ${trailPosition.y - 24}px)`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </>
  );
}