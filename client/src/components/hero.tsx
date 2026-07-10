import { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Animated grid */}
      <div 
        className="absolute inset-0 hero-grid opacity-50"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* Floating orbs with parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12), transparent 70%)',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] animate-float-delayed"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%)',
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08), transparent 70%)',
          animation: 'pulse-glow 6s ease-in-out infinite'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center" style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
        {/* Status badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-strong mb-8 reveal" style={{ animationDelay: '0.1s' }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-emerald-400">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="mb-6 reveal" style={{ animationDelay: '0.2s' }}>
          <span 
            className="block font-[var(--font-display)] text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-white/90"
            style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
          >
            Borimalla
          </span>
          <span className="block font-[var(--font-display)] text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-gradient">
            Darshan Kumar
          </span>
        </h1>

        {/* Title */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 reveal" style={{ animationDelay: '0.3s' }}>
          {['AI/ML Engineer', 'Full-Stack Developer', 'ICS Security Researcher'].map((title, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-medium text-white/60">{title}</span>
              {i < 2 && <span className="text-indigo-500/50">·</span>}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/40 max-w-3xl mx-auto mb-12 leading-relaxed reveal" style={{ animationDelay: '0.4s' }}>
          Building at the intersection of <span className="text-cyan-400 font-medium">machine learning</span>,{' '}
          <span className="text-purple-400 font-medium">ICS security research</span>, and{' '}
          <span className="text-indigo-400 font-medium">full-stack products</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 reveal" style={{ animationDelay: '0.5s' }}>
          <button onClick={() => scrollTo('projects')} className="btn btn-primary">
            View Work
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn btn-ghost">
            <Download className="w-4 h-4" />
            Resume
          </button>
          <button onClick={() => scrollTo('contact')} className="btn btn-ghost">
            <Mail className="w-4 h-4" />
            Contact
          </button>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-3 reveal" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: Linkedin, href: 'https://linkedin.com/in/darshan-borimalla', label: 'LinkedIn' },
            { icon: Github, href: 'https://github.com/darshhannnn', label: 'GitHub' },
            { icon: Mail, href: 'mailto:darshankumarb3@gmail.com', label: 'Email' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white hover:border-indigo-500/30 transition-all duration-300 hover-lift"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollTo('about')} 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
