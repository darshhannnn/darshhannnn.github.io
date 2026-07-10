import { Download, MapPin, Briefcase, GraduationCap, Award, Users, Sparkles, Trophy, BookOpen } from "lucide-react";

export default function About() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Darshan_Borimalla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { label: "Projects Shipped", value: "14+", icon: Award, gradient: "from-indigo-500 to-purple-500" },
    { label: "IEEE Papers Published", value: "2", icon: BookOpen, gradient: "from-cyan-500 to-blue-500" },
    { label: "HackerRank Rank", value: "#826", icon: Trophy, gradient: "from-amber-500 to-orange-500" },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech CSE at Amrita Vishwa Vidyapeetham — CGPA 7.8/10.0 (2022–2026)",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Software Development Intern — FinTech-Oriented Systems (Apr–Jun 2025)",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Award,
      title: "Publications",
      description: "IEEE ICCCNT 2025 (IIT Indore) • CICN 2025 (NIT Goa)",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] float-modern" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-[80px] float-delayed" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6 animate-bounce-in">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-white/70">Get to know me</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              About{" "}
              <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <div className="space-y-6 text-lg text-white/50 leading-relaxed">
                <p className="text-xl text-white/80 font-medium">
                  I'm Darshan Kumar Borimalla — an AI/ML Engineer, Full-Stack Developer, and ICS Security Researcher based in Hyderabad, India.
                </p>
                
                <p>
                  Currently completing a B.Tech in CSE at Amrita Vishwa Vidyapeetham (CGPA 7.8/10.0), I build at the intersection of machine learning, industrial control system security, and production-grade full-stack products. I've shipped 14+ projects spanning LSTM anomaly detectors, Gemini-powered NLP pipelines, SaaS starters, and mobile apps.
                </p>
                
                <p>
                  I'm a published IEEE researcher — primary paper at ICCCNT 2025 (IIT Indore) on "Interpretable Malware Detection Using a Self-Attention Augmented 1D CNN", and second paper at CICN 2025 (NIT Goa) on "Behavior-Aware Influence Maximization using Genetic Algorithms on Instagram Social Graph". I ranked #826/1,773 at HackerRank Orchestrate June 2026 for building and deploying an AI agent.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 my-8">
                <div className="flex items-center gap-3 glass px-4 py-3 rounded-xl hover-glow">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/70 font-medium">Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-3 glass px-4 py-3 rounded-xl hover-glow">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/70 font-medium">Open to opportunities</span>
                </div>
              </div>

              <button
                onClick={handleDownloadResume}
                className="group btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 w-fit"
                data-testid="button-download-resume"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
            
            {/* Image and Stats */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                  alt="Modern office workspace"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-[1.02] transition-transform duration-500 border border-white/10"
                  data-testid="img-workspace"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group glass-card rounded-2xl p-8 hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/50 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="group glass-card rounded-2xl p-6 hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
