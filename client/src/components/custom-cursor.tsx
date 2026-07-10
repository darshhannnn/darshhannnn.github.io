import { useEffect, useState, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>();
  const mouseTrail = useRef<Position[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePosition(newPos);
      
      // Add to trail with spacing
      const lastPos = mouseTrail.current[mouseTrail.current.length - 1];
      if (!lastPos || Math.sqrt(Math.pow(newPos.x - lastPos.x, 2) + Math.pow(newPos.y - lastPos.y, 2)) > 3) {
        mouseTrail.current.push(newPos);
        if (mouseTrail.current.length > 40) {
          mouseTrail.current.shift();
        }
      }
      
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const updateTrailPosition = () => {
      if (mouseTrail.current.length === 0) {
        animationRef.current = requestAnimationFrame(updateTrailPosition);
        return;
      }

      setTrailPosition(prev => {
        const trailDelay = 6;
        const targetIndex = Math.max(0, mouseTrail.current.length - trailDelay);
        const targetPos = mouseTrail.current[targetIndex];
        
        if (!targetPos) return prev;

        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 0.5) return targetPos;
        
        const speed = 0.15;
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed
        };
      });
      
      animationRef.current = requestAnimationFrame(updateTrailPosition);
    };

    animationRef.current = requestAnimationFrame(updateTrailPosition);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      >
        <div 
          className={`rounded-full transition-all duration-200 ${
            isHovering 
              ? 'w-8 h-8 bg-white/20 border border-white/40 -m-4' 
              : 'w-2 h-2 bg-white'
          }`}
        />
      </div>
      
      {/* Trailing circle */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${trailPosition.x - 16}px, ${trailPosition.y - 16}px)`,
        }}
      >
        <div 
          className={`w-8 h-8 rounded-full border transition-all duration-300 ${
            isHovering 
              ? 'border-indigo-400/60 scale-150' 
              : 'border-white/20 scale-100'
          }`}
        />
      </div>
      
      {/* Glow effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          transform: `translate(${trailPosition.x - 24}px, ${trailPosition.y - 24}px)`,
        }}
      >
        <div 
          className={`w-12 h-12 rounded-full transition-all duration-500 ${
            isHovering 
              ? 'bg-indigo-400/20 blur-xl' 
              : 'bg-white/5 blur-lg'
          }`}
        />
      </div>
    </>
  );
}
