import { ExternalLink, Github, ArrowRight, Star, Calendar, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ICS Malware Detection — Hybrid SARIMA-LSTM",
    description: "Anomaly detection for industrial control systems using sensor data. Fuses SARIMA statistical model with LSTM Autoencoder — attacks surface as high reconstruction error. Validated on SWaT and HAI datasets.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "PyTorch", "SARIMA", "LSTM", "Cybersecurity"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/Industrial-Control-System-Malware-Detection-via-Sensor-Data-Anomalies",
    featured: true,
    badge: "IEEE Published",
    date: "ICCCNT 2025",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: 2,
    title: "Parsely AI — Document Processing Platform",
    description: "Gemini-powered platform for automated insurance claim evaluation. 6-stage pipeline with spaCy NER, FAISS hybrid retrieval, and structured JSON verdicts.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["FastAPI", "Gemini", "FAISS", "Docker"],
    liveUrl: "https://parsely-ai-production-f2ad.up.railway.app/hackrx/run",
    githubUrl: "https://github.com/darshhannnn/Parsely-AI",
    featured: true,
    badge: "Live · HackRx 6.0",
    date: "2025",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 3,
    title: "Capital-View — Stock Trading Platform",
    description: "Full-stack MERN stock trading platform with real-time market data via Alpha Vantage API, portfolio analytics, and JWT auth with HTTP-only cookies.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/Capital-View",
    featured: true,
    badge: "FinTech",
    date: "2025",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "StumpScore — Live Cricket Platform",
    description: "Live cricket scoring with WebSocket-driven real-time updates and Razorpay payment integration. Redis caching optimized for 1,000+ concurrent users.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React", "WebSockets", "Redis", "Razorpay"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: true,
    badge: "Real-Time",
    date: "2025",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 5,
    title: "MindfulAI — AI Mental Health Platform",
    description: "AI mental health platform with sentiment-analysis mood journaling, 24/7 therapeutic chatbot, Chart.js dashboards, and crisis-pattern detection.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React", "Hugging Face", "OpenAI", "MongoDB"],
    liveUrl: "https://mindfulai-demo.netlify.app",
    githubUrl: "https://github.com/darshhannnn/mindfulai",
    featured: true,
    badge: "AI / Healthcare",
    date: "2025",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 6,
    title: "payFrame — SaaS Subscription Starter",
    description: "Production-ready SaaS starter with Auth.js v5 and full Stripe subscription billing. Admin dashboard with subscriber count and estimated MRR.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Next.js", "Auth.js", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/payFrame",
    featured: false,
    badge: "SaaS / FinTech",
    date: "2025",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    id: 7,
    title: "SimPay — Mobile Payment Dashboard",
    description: "React Native (Expo) payment dashboard backed by NestJS + PostgreSQL. JWT auth, RBAC admin, real-time WebSocket updates, and CSV export.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React Native", "NestJS", "PostgreSQL", "WebSockets"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/simpay",
    featured: false,
    badge: "Mobile / FinTech",
    date: "2025",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    id: 8,
    title: "CRM — Contact Management System",
    description: "Lightweight CRM with color-coded tag filtering and activity timeline. Docker-ready production build with Prisma ORM and SQLite.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Next.js", "Prisma", "SQLite", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/CRM",
    featured: false,
    badge: "Full-Stack",
    date: "2025",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    id: 9,
    title: "Ocular Disease Recognition",
    description: "MobileNetV2 classifier over ODIR-5K dataset (10K fundus images, 8 disease classes). Two-phase training with class-weight balancing.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["TensorFlow", "MobileNetV2", "OpenCV", "scikit-learn"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/Ocular-Disease-Recognition",
    featured: false,
    badge: "Medical AI",
    date: "2025",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    id: 10,
    title: "Digital-Twin AI Job Agent",
    description: "Autonomous agent that searches job listings, tailors applications, and manages the end-to-end job hunt workflow using LLM APIs.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "LLM APIs", "Agentic AI"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: false,
    badge: "Agentic AI",
    date: "2025",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    id: 11,
    title: "Forest Monitoring System",
    description: "Environmental monitoring system processing satellite and sensor data on GCP with anomaly detection using Vertex AI and BigQuery.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["GCP", "Vertex AI", "BigQuery", "Python"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: false,
    badge: "Cloud / ML",
    date: "2025",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 12,
    title: "StudentDev — Android Productivity App",
    description: "Five-module student productivity app — notes with PDF viewer, attendance tracker, habits & todo, budget manager. MVVM with Room DB.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: false,
    badge: "Android",
    date: "2025",
    gradient: "from-lime-500 to-green-500"
  },
  {
    id: 13,
    title: "Credit Risk Dashboard",
    description: "Interactive lender dashboard for credit risk assessment with Gradient Boosting classifier and synthetic data generation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "FastAPI", "Gradient Boosting"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: false,
    badge: "FinTech / ML",
    date: "2025",
    gradient: "from-sky-500 to-blue-500"
  },
  {
    id: 14,
    title: "ValetDesk Mobile App",
    description: "Cross-platform React Native + Expo SDK 54 app with List/Detail/Create screens connected to a Flask backend.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React Native", "Expo", "TypeScript", "Flask"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/mobile-app",
    featured: false,
    badge: "Mobile",
    date: "2025",
    gradient: "from-fuchsia-500 to-purple-500"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] float-modern" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-[80px] float-delayed" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6 animate-bounce-in">
            <Star className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-white/70">14 Projects</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-xl text-white/40 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A mix of published research, hackathon builds, and full-stack products
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group rounded-2xl overflow-hidden animate-scale-in ${
                project.featured ? 'ring-1 ring-amber-500/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
              data-testid={`card-project-${project.id}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="project-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ExternalLink className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-semibold">View Project</p>
                  </div>
                </div>
                
                {/* Badge */}
                <div className={`absolute top-3 left-3 bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                  {project.badge}
                </div>
                
                {/* Date */}
                <div className="absolute top-3 right-3 glass px-2 py-1 rounded-full text-xs font-medium text-white/80 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.date}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300" 
                    data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-white/40 mb-4 text-sm leading-relaxed line-clamp-3" 
                   data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded-md text-xs font-medium text-white/60 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-200"
                      data-testid={`badge-tag-${project.id}-${tagIndex}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                  {project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200 text-sm flex items-center gap-1"
                      data-testid={`link-demo-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-white/20 text-sm">–</span>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white font-medium transition-colors duration-200 flex items-center gap-1 text-sm"
                    data-testid={`link-github-${project.id}`}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="https://github.com/darshhannnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="group btn-secondary text-white/70 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-3"
              data-testid="button-view-all-projects"
            >
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              View All on GitHub
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
