import { GraduationCap, Briefcase, Award, MapPin, Download, BookOpen, Trophy } from 'lucide-react';
import { useScrollReveal } from '../hooks/use-scroll-reveal';

const stats = [
  { label: 'Projects Shipped', value: '14+', icon: Award, gradient: 'from-indigo-500 to-purple-500' },
  { label: 'IEEE Papers', value: '2', icon: BookOpen, gradient: 'from-cyan-500 to-blue-500' },
  { label: 'HackerRank Rank', value: '#826', icon: Trophy, gradient: 'from-amber-500 to-orange-500' },
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.Tech CSE @ Amrita Vishwa Vidyapeetham — CGPA 7.8/10',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Software Dev Intern — FinTech-Oriented Systems (2025)',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Award,
    title: 'Publications',
    description: 'IEEE ICCCNT 2025 • CICN 2025',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export default function About() {
  const header = useScrollReveal();
  const content = useScrollReveal({ threshold: 0.2 });
  const image = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="section">
      <div className="container-custom">
        {/* Header */}
        <div ref={header.ref} className={`section-header reveal ${header.isVisible ? 'active' : ''}`}>
          <div className="section-badge">
            <span className="text-indigo-400">✦</span>
            About Me
          </div>
          <h2 className="section-title">
            Who <span className="text-gradient">I Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div ref={content.ref} className={`reveal ${content.isVisible ? 'active' : ''}`}>
            <div className="space-y-5 text-white/50 leading-relaxed">
              <p className="text-lg text-white/70 font-medium">
                AI/ML Engineer, Full-Stack Developer, and ICS Security Researcher based in Hyderabad, India.
              </p>
              <p>
                Currently completing a B.Tech in CSE at Amrita Vishwa Vidyapeetham (CGPA 7.8/10.0, 2022–2026), 
                I build at the intersection of machine learning, industrial control system security, and 
                production-grade full-stack products. I've shipped 14+ projects spanning LSTM anomaly detectors, 
                Gemini-powered NLP pipelines, SaaS starters, and mobile apps.
              </p>
              <p>
                Published IEEE researcher — primary paper at ICCCNT 2025 (IIT Indore) on 
                "Interpretable Malware Detection Using a Self-Attention Augmented 1D CNN", and second paper 
                at CICN 2025 (NIT Goa). Ranked #826/1,773 at HackerRank Orchestrate June 2026.
              </p>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 my-8">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-white/60">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-sm text-white/60">Open to opportunities</span>
              </div>
            </div>

            <button className="btn btn-primary">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          {/* Image */}
          <div ref={image.ref} className={`reveal ${image.isVisible ? 'active' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Workspace"
                className="relative rounded-2xl w-full border border-white/10 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => {
            const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
            return (
              <div
                key={i}
                ref={ref}
                className={`stat-card reveal ${isVisible ? 'active' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
            return (
              <div
                key={i}
                ref={ref}
                className={`card p-6 reveal ${isVisible ? 'active' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/40">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
