import { ChevronDown, Code, Download, Mail, Github, Linkedin, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Darshan_Borimalla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg-hero"
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-bg" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] float-modern" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-[100px] float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[80px] float-modern" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0a0a0f]/80" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 15, 0.8) 100%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Status Badge */}
          <div className="mb-8 animate-bounce-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-strong hover-glow">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-medium text-sm tracking-wide">Available for new opportunities</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight mb-4 animate-fade-in-up" 
                style={{ animationDelay: '0.1s' }}>
              <span className="block text-white/90">Borimalla</span>
              <span className="block gradient-text">Darshan Kumar</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/70 mb-6 tracking-wide">
              AI/ML Engineer
              <span className="mx-3 text-indigo-400">·</span>
              Full-Stack Developer
              <span className="mx-3 text-purple-400">·</span>
              ICS Security Researcher
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/50 leading-relaxed max-w-4xl mx-auto mb-12 animate-fade-in-up" 
             style={{ animationDelay: '0.3s' }}>
            Computer Science undergraduate building at the intersection of{" "}
            <span className="text-cyan-400 font-semibold">machine learning</span>,{" "}
            <span className="text-purple-400 font-semibold">ICS security research</span>, and{" "}
            <span className="text-indigo-400 font-semibold">full-stack products</span>.{" "}
            Published IEEE researcher, hackathon builder, and habitual shipper of end-to-end systems.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" 
               style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection("projects")}
              className="group btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3"
            >
              <Code className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              View My Work
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="group btn-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce transition-transform duration-300" />
              Download Resume
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="https://linkedin.com/in/darshan-borimalla"
              className="group w-12 h-12 glass rounded-xl flex items-center justify-center transition-all duration-300 hover-lift hover:border-indigo-500/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-white/60 group-hover:text-indigo-400 transition-colors duration-300" />
            </a>
            <a 
              href="https://github.com/darshhannnn"
              className="group w-12 h-12 glass rounded-xl flex items-center justify-center transition-all duration-300 hover-lift hover:border-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-white/60 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="mailto:darshankumarb3@gmail.com"
              className="group w-12 h-12 glass rounded-xl flex items-center justify-center transition-all duration-300 hover-lift hover:border-purple-500/30"
            >
              <Mail className="h-5 w-5 text-white/60 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => scrollToSection("about")}
              className="group flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <div className="w-1 h-2 bg-current rounded-full mt-2 animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
