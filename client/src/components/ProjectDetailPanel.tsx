import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Github, ExternalLink } from 'lucide-react';
import { GoArrowUpRight } from 'react-icons/go';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  badge: string;
  gradient: string;
}

interface ProjectDetailPanelProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailPanel({ project, onClose }: ProjectDetailPanelProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  // Animate in when project is set
  useEffect(() => {
    if (!project) return;

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);

    const tl = gsap.timeline();

    // Overlay fade in
    tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });

    // Panel slides up
    tl.fromTo(
      panel,
      { y: 80, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' },
      '-=0.1'
    );

    // Cards stagger in
    tl.fromTo(
      cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.1 },
      '-=0.15'
    );

    return () => { tl.kill(); };
  }, [project]);

  // Animate out on close
  const handleClose = () => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;

    gsap.to(panel, { y: 60, opacity: 0, scale: 0.96, duration: 0.3, ease: 'power2.in' });
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      delay: 0.05,
      onComplete: onClose,
    });
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!project) return null;

  const gradientMap: Record<string, string> = {
    'from-indigo-500 to-purple-500': 'linear-gradient(135deg,#6366f1,#a855f7)',
    'from-cyan-500 to-blue-500':     'linear-gradient(135deg,#06b6d4,#3b82f6)',
    'from-emerald-500 to-teal-500':  'linear-gradient(135deg,#10b981,#14b8a6)',
    'from-amber-500 to-orange-500':  'linear-gradient(135deg,#f59e0b,#f97316)',
    'from-pink-500 to-rose-500':     'linear-gradient(135deg,#ec4899,#f43f5e)',
    'from-violet-500 to-purple-500': 'linear-gradient(135deg,#8b5cf6,#a855f7)',
    'from-blue-500 to-indigo-500':   'linear-gradient(135deg,#3b82f6,#6366f1)',
    'from-teal-500 to-cyan-500':     'linear-gradient(135deg,#14b8a6,#06b6d4)',
    'from-rose-500 to-pink-500':     'linear-gradient(135deg,#f43f5e,#ec4899)',
  };

  const cardBg = gradientMap[project.gradient] ?? 'linear-gradient(135deg,#6366f1,#a855f7)';

  // Build the 3 CardNav-style info cards
  const infoCards = [
    {
      label: 'Overview',
      bg: '#1B1722',
      content: (
        <div className="flex flex-col gap-3 mt-auto">
          <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
          <span
            className="self-start px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: cardBg }}
          >
            {project.badge}
          </span>
        </div>
      ),
    },
    {
      label: 'Tech Stack',
      bg: '#1E2433',
      content: (
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-white/80"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: 'Links',
      bg: '#1A2318',
      content: (
        <div className="flex flex-col gap-2 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-opacity hover:opacity-75"
            >
              <GoArrowUpRight className="w-4 h-4 flex-shrink-0" />
              GitHub Repository
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-opacity hover:opacity-75"
            >
              <GoArrowUpRight className="w-4 h-4 flex-shrink-0" />
              Live Demo
            </a>
          )}
          {!project.github && !project.live && (
            <span className="text-white/40 text-sm">No public links yet</span>
          )}
        </div>
      ),
    },
  ];

  return (
    /* Overlay */
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      {/* Panel */}
      <div
        ref={panelRef}
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
        style={{
          background: '#09090b',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(99,102,241,0.12)',
        }}
      >
        {/* Header image strip */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(9,9,11,0.9))' }} />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div
            className="absolute bottom-4 left-5 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: cardBg }}
          >
            {project.badge}
          </div>
        </div>

        {/* Title row */}
        <div className="px-5 pt-4 pb-3 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{project.title}</h2>
            <p className="text-sm text-white/40 mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex gap-2 flex-shrink-0 mt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* CardNav-style 3-card grid */}
        <div className="grid grid-cols-3 gap-2.5 p-3 pt-1">
          {infoCards.map((card, idx) => {
            const refs = [card1Ref, card2Ref, card3Ref];
            return (
              <div
                key={idx}
                ref={refs[idx]}
                className="rounded-xl p-4 flex flex-col min-h-[160px]"
                style={{ backgroundColor: card.bg }}
              >
                <div
                  className="text-xl font-normal tracking-tight text-white/90 mb-3"
                  style={{ letterSpacing: '-0.5px' }}
                >
                  {card.label}
                </div>
                {card.content}
              </div>
            );
          })}
        </div>

        <div className="h-3" />
      </div>
    </div>
  );
}
