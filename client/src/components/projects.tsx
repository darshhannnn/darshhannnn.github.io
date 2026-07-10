import { ExternalLink, Github, ArrowRight, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/use-scroll-reveal';

const projects = [
  {
    id: 1,
    title: 'ICS Malware Detection',
    subtitle: 'Hybrid SARIMA-LSTM',
    description: 'Anomaly detection for industrial control systems using sensor data. Fuses SARIMA with LSTM Autoencoder — attacks surface as high reconstruction error.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tags: ['Python', 'PyTorch', 'SARIMA', 'LSTM'],
    github: 'https://github.com/darshhannnn/Industrial-Control-System-Malware-Detection-via-Sensor-Data-Anomalies',
    badge: 'IEEE Published',
    gradient: 'from-indigo-500 to-purple-500',
    featured: true,
  },
  {
    id: 2,
    title: 'Parsely AI',
    subtitle: 'Document Processing',
    description: 'Gemini-powered platform for automated insurance claim evaluation. 6-stage pipeline with spaCy NER and FAISS hybrid retrieval.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tags: ['FastAPI', 'Gemini', 'FAISS', 'Docker'],
    live: 'https://parsely-ai-production-f2ad.up.railway.app/hackrx/run',
    github: 'https://github.com/darshhannnn/Parsely-AI',
    badge: 'Live',
    gradient: 'from-cyan-500 to-blue-500',
    featured: true,
  },
  {
    id: 3,
    title: 'Capital-View',
    subtitle: 'Stock Trading Platform',
    description: 'Full-stack MERN stock trading platform with real-time market data, portfolio analytics, and JWT auth.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/darshhannnn/Capital-View',
    badge: 'FinTech',
    gradient: 'from-emerald-500 to-teal-500',
    featured: true,
  },
  {
    id: 4,
    title: 'StumpScore',
    subtitle: 'Live Cricket Platform',
    description: 'Real-time cricket scoring with WebSocket updates and Razorpay payment integration. Optimized for 1,000+ concurrent users.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tags: ['React', 'WebSockets', 'Redis', 'Razorpay'],
    github: 'https://github.com/darshhannnn',
    badge: 'Real-Time',
    gradient: 'from-amber-500 to-orange-500',
    featured: true,
  },
  {
    id: 5,
    title: 'MindfulAI',
    subtitle: 'AI Mental Health',
    description: 'AI mental health platform with sentiment-analysis mood journaling, therapeutic chatbot, and crisis-pattern detection.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tags: ['React', 'Hugging Face', 'OpenAI', 'MongoDB'],
    live: 'https://mindfulai-demo.netlify.app',
    github: 'https://github.com/darshhannnn/mindfulai',
    badge: 'AI / Healthcare',
    gradient: 'from-pink-500 to-rose-500',
    featured: true,
  },
  {
    id: 6,
    title: 'payFrame',
    subtitle: 'SaaS Starter',
    description: 'Production-ready SaaS starter with Auth.js v5 and Stripe subscription billing. Admin dashboard with MRR tracking.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tags: ['Next.js', 'Auth.js', 'Stripe', 'Prisma'],
    github: 'https://github.com/darshhannnn/payFrame',
    badge: 'SaaS',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 7,
    title: 'SimPay',
    subtitle: 'Mobile Payments',
    description: 'React Native payment dashboard backed by NestJS + PostgreSQL. JWT auth, RBAC, real-time WebSocket updates.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tags: ['React Native', 'NestJS', 'PostgreSQL'],
    github: 'https://github.com/darshhannnn/simpay',
    badge: 'Mobile',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 8,
    title: 'CRM',
    subtitle: 'Contact Management',
    description: 'Lightweight CRM with color-coded tag filtering and activity timeline. Docker-ready with Prisma ORM.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tags: ['Next.js', 'Prisma', 'SQLite', 'Docker'],
    github: 'https://github.com/darshhannnn/CRM',
    badge: 'Full-Stack',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    id: 9,
    title: 'Ocular Disease Recognition',
    subtitle: 'Medical AI',
    description: 'MobileNetV2 classifier over ODIR-5K dataset. Two-phase training with class-weight balancing for imbalanced data.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    tags: ['TensorFlow', 'MobileNetV2', 'OpenCV'],
    github: 'https://github.com/darshhannnn/Ocular-Disease-Recognition',
    badge: 'Medical AI',
    gradient: 'from-rose-500 to-pink-500',
  },
];

export default function Projects() {
  const header = useScrollReveal();

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        {/* Header */}
        <div ref={header.ref} className={`section-header reveal ${header.isVisible ? 'active' : ''}`}>
          <div className="section-badge">
            <Star className="w-4 h-4 text-amber-400" />
            {projects.length} Projects
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle">
            Published research, hackathon builds, and full-stack products
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
            return (
              <div
                key={project.id}
                ref={ref}
                className={`project-card reveal ${isVisible ? 'active' : ''} ${project.featured ? 'ring-1 ring-amber-500/20' : ''}`}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="overlay">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-semibold">View Project</p>
                    </div>
                  </div>
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.gradient}`}>
                    {project.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-2">
                    <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <p className="text-xs text-white/30">{project.subtitle}</p>
                  </div>
                  <p className="text-sm text-white/40 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="skill-tag text-xs py-1 px-2">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    ) : (
                      <span />
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white flex items-center gap-1">
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <a href="https://github.com/darshhannnn" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-ghost">
              View All on GitHub
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
