import { ExternalLink, Github, ArrowRight, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "ICS Malware Detection — Hybrid SARIMA-LSTM",
    description: "Anomaly detection for industrial control systems using sensor data rather than network traffic. Fuses a SARIMA statistical model with an LSTM Autoencoder — attacks surface as high reconstruction error. Validated on SWaT and HAI datasets. Extended into the published paper at ICCCNT 2025, IIT Indore.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "PyTorch / TensorFlow", "SARIMA", "LSTM Autoencoder", "Cybersecurity"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/Industrial-Control-System-Malware-Detection-via-Sensor-Data-Anomalies",
    featured: true,
    badge: "IEEE Published",
    date: "ICCCNT 2025"
  },
  {
    id: 2,
    title: "Parsely AI — Document Processing Platform",
    description: "Gemini-powered platform for automated insurance claim evaluation. 6-stage pipeline: multi-format extraction → spaCy NER → Gemini entity parsing → FAISS hybrid retrieval → structured JSON verdict. Gemini Flash is ~90% cheaper than GPT-4. Built for HackRx 6.0.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["FastAPI", "Gemini 1.5 Pro/Flash", "FAISS", "sentence-transformers", "Docker"],
    liveUrl: "https://parsely-ai-production-f2ad.up.railway.app/hackrx/run",
    githubUrl: "https://github.com/darshhannnn/Parsely-AI",
    featured: true,
    badge: "Live · HackRx 6.0",
    date: "2025"
  },
  {
    id: 3,
    title: "Capital-View — Stock Trading Platform",
    description: "Full-stack MERN stock trading platform with real-time market data via Alpha Vantage API, portfolio analytics, IPO calendar, and live notifications. JWT auth uses HTTP-only cookies with refresh tokens. Built with Amazon Kiro IDE's spec-driven workflow.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React.js", "Node.js / Express", "MongoDB", "JWT", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/Capital-View",
    featured: true,
    badge: "FinTech",
    date: "2025"
  },
  {
    id: 4,
    title: "StumpScore — Live Cricket Platform",
    description: "Live cricket scoring with WebSocket-driven real-time updates and full Razorpay payment integration (order creation, client-side modal, webhook verification). Redis caching + MongoDB indexing optimized for 1,000+ concurrent users. React Context API for auth with protected routes.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React.js", "Node.js", "TypeScript", "WebSockets", "Redis", "Razorpay", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: true,
    badge: "Real-Time",
    date: "2025"
  },
  {
    id: 5,
    title: "MindfulAI — AI Mental Health Platform",
    description: "AI mental health platform with sentiment-analysis mood journaling, 24/7 therapeutic chatbot, Chart.js dashboards, auto-generated weekly summaries, and crisis-pattern detection. Deployed on Netlify + Railway.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React.js", "Socket.io", "Hugging Face", "OpenAI API", "MongoDB Atlas"],
    liveUrl: "https://mindfulai-demo.netlify.app",
    githubUrl: "https://github.com/darshhannnn/mindfulai",
    featured: true,
    badge: "AI / Healthcare",
    date: "2025"
  },
  {
    id: 6,
    title: "payFrame — SaaS Subscription Starter",
    description: "Production-ready SaaS starter with Auth.js v5 (email magic links + Google OAuth) and full Stripe subscription billing — Checkout, Customer Portal, and webhooks. Admin dashboard with user list, active subscriber count, and estimated MRR. Role-based admin bootstrap via env var.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Next.js 16", "TypeScript", "Auth.js v5", "Stripe", "Prisma", "shadcn/ui"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/payFrame",
    featured: false,
    badge: "SaaS / FinTech",
    date: "2025"
  },
  {
    id: 14,
    title: "ValetDesk Mobile App",
    description: "Cross-platform React Native + Expo SDK 54 app with List/Detail/Create screens connected to a Flask (Python) backend. Handles platform-specific API URL routing. In-memory storage by design for screening scope.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React Native", "Expo SDK 54", "TypeScript", "Flask", "Python"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/mobile-app",
    featured: false,
    badge: "Mobile",
    date: "2025"
  },
  {
    id: 8,
    title: "CRM — Lightweight Contact Management",
    description: "Contact management system with color-coded tag filtering and an activity timeline for notes, calls, meetings, and WhatsApp entries. Docker-ready production build with Prisma ORM and SQLite.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Next.js 14", "Prisma / SQLite", "Docker", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/CRM",
    featured: false,
    badge: "Full-Stack",
    date: "2025"
  },
  {
    id: 9,
    title: "Ocular Disease Recognition",
    description: "MobileNetV2 classifier over the ODIR-5K dataset (10K fundus images, 8 disease classes). Two-phase training — frozen base then fine-tune from layer 100 — with class-weight balancing for imbalanced data.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["TensorFlow / Keras", "MobileNetV2", "OpenCV", "scikit-learn"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/Ocular-Disease-Recognition",
    featured: false,
    badge: "Medical AI",
    date: "2025"
  },
  {
    id: 10,
    title: "Digital-Twin AI Job Agent",
    description: "Autonomous agent that searches job listings, tailors applications to each posting, and manages the end-to-end job hunt workflow using LLM APIs and agentic frameworks. Built with Python and agentic AI patterns.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "LLM APIs", "Agentic AI", "Automation"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: false,
    badge: "Agentic AI",
    date: "2025"
  },
  {
    id: 11,
    title: "Forest Monitoring System",
    description: "Environmental monitoring system processing satellite and sensor data on Google Cloud Platform, with anomaly detection algorithms for deforestation pattern identification using Vertex AI and BigQuery.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["GCP", "Vertex AI", "BigQuery", "Python", "Cloud"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: false,
    badge: "Cloud / ML",
    date: "2025"
  },
  {
    id: 12,
    title: "StudentDev — Android Productivity App",
    description: "Five-module student productivity app — notes with PDF viewer, attendance tracker, habits & todo, budget manager, and dark-themed settings. Built on MVVM with StateFlow/LiveData, Room database (5 entities), and KSP code generation.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "Room DB", "DataStore", "MVVM"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: false,
    badge: "Android",
    date: "2025"
  },
  {
    id: 13,
    title: "Credit Risk Dashboard",
    description: "Interactive lender dashboard for credit risk assessment built with a Gradient Boosting classifier and synthetic data generation. Built for the Poonawalla Fincorp Hackathon with FastAPI backend.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "FastAPI", "Gradient Boosting", "Data Science", "ML"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn",
    featured: false,
    badge: "FinTech / ML",
    date: "2025"
  },
  {
    id: 14,
    title: "ValetDesk Mobile App",
    description: "Cross-platform React Native + Expo SDK 54 app with List/Detail/Create screens connected to a Flask backend. Handles platform-specific API URL routing; built as a screening assignment.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    tags: ["React Native", "Expo SDK 54", "TypeScript", "Flask"],
    liveUrl: "#",
    githubUrl: "https://github.com/darshhannnn/mobile-app",
    featured: false,
    badge: "Mobile",
    date: "2025"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 mb-6 animate-bounce-in">
            <Star className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-200">14 Projects</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            A mix of published research, hackathon builds, and full-stack products — spanning ICS security, LLM applications, and FinTech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg overflow-hidden animate-scale-in transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-400/30 hover:bg-slate-800/70 ${
                project.featured ? 'ring-2 ring-yellow-400/30' : ''
              }`}
              style={{animationDelay: `${index * 0.07}s`}}
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="h-10 w-10 mx-auto mb-3" />
                    <p className="font-semibold text-lg">View Project</p>
                  </div>
                </div>
                
                <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {project.badge}
                </div>
                
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 border border-slate-700/50">
                  <Calendar className="h-3 w-3" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-slate-700/50 backdrop-blur-sm text-blue-300 hover:bg-slate-600/50 hover:text-blue-200 text-xs px-2 py-1 transform hover:scale-105 transition-all duration-200 border border-slate-600/50"
                      data-testid={`badge-tag-${project.id}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  {project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200 text-sm flex items-center gap-1 group/link"
                      data-testid={`link-demo-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4 group-hover/link:rotate-12 transition-transform" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-slate-600 text-sm">–</span>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white font-semibold transition-colors duration-200 flex items-center gap-1 text-sm group/link"
                    data-testid={`link-github-${project.id}`}
                  >
                    <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/darshhannnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="group border-2 border-blue-400/30 hover:border-blue-400/60 text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-slate-800/30"
              data-testid="button-view-all-projects"
            >
              <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
              View All on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}