import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const raf = useRef<number>();
  const points = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const p = { x: e.clientX, y: e.clientY };
      setPos(p);
      const last = points.current[points.current.length - 1];
      if (!last || Math.hypot(p.x - last.x, p.y - last.y) > 3) {
        points.current.push(p);
        if (points.current.length > 30) points.current.shift();
      }
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, input, textarea, select, [role="button"]')) {
        setHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, input, textarea, select, [role="button"]')) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      if (points.current.length) {
        const target = points.current[Math.max(0, points.current.length - 5)];
        setTrail(p => {
          const dx = target.x - p.x;
          const dy = target.y - p.y;
          return Math.hypot(dx, dy) < 0.5 ? target : { x: p.x + dx * 0.15, y: p.y + dy * 0.15 };
        });
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }}
      >
        <div className={`rounded-full transition-all duration-150 ${
          hovering ? 'w-8 h-8 bg-white/10 border border-white/30 -m-4' : 'w-2 h-2 bg-white'
        }`} />
      </div>

      {/* Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ transform: `translate(${trail.x - 16}px, ${trail.y - 16}px)` }}
      >
        <div className={`w-8 h-8 rounded-full border transition-all duration-300 ${
          hovering ? 'border-indigo-400/50 scale-150' : 'border-white/15'
        }`} />
      </div>

      {/* Glow */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{ transform: `translate(${trail.x - 24}px, ${trail.y - 24}px)` }}
      >
        <div className={`w-12 h-12 rounded-full transition-all duration-500 ${
          hovering ? 'bg-indigo-400/15 blur-xl' : 'bg-white/5 blur-lg'
        }`} />
      </div>
    </>
  );
}
