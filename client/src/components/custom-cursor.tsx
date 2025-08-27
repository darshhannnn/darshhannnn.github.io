import { useEffect, useState, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();
  const mouseTrail = useRef<Position[]>([]);
  const trailIndex = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePosition(newPos);
      
      // Add to trail with some spacing to avoid too many points
      const lastPos = mouseTrail.current[mouseTrail.current.length - 1];
      if (!lastPos || Math.sqrt(Math.pow(newPos.x - lastPos.x, 2) + Math.pow(newPos.y - lastPos.y, 2)) > 5) {
        mouseTrail.current.push(newPos);
        // Keep trail length manageable
        if (mouseTrail.current.length > 50) {
          mouseTrail.current.shift();
          trailIndex.current = Math.max(0, trailIndex.current - 1);
        }
      }
      
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    const updateTrailPosition = () => {
      if (mouseTrail.current.length === 0) {
        animationRef.current = requestAnimationFrame(updateTrailPosition);
        return;
      }

      setTrailPosition(prev => {
        // Find the target position in the trail (a few steps behind the mouse)
        const trailDelay = 8; // How many steps behind the mouse
        const targetIndex = Math.max(0, mouseTrail.current.length - trailDelay);
        const targetPos = mouseTrail.current[targetIndex];
        
        if (!targetPos) {
          return prev;
        }

        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 1) {
          return targetPos;
        }
        
        // Smooth movement towards the target position
        const speed = 0.2;
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