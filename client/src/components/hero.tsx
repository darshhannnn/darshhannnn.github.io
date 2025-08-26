import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Sparkles, Download, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    console.log("Download resume clicked");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '4s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Spotlight effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-400/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Status Badge */}
          <div className="mb-8 animate-bounce-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-300 font-medium">Available for new opportunities</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300 leading-tight mb-4 tracking-tight">
              Borimalla
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 leading-tight tracking-tight">
              Darshan Kumar
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 mb-4">
              Computer Science Student | Full-Stack & ML Developer
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Driven Computer Science undergraduate with expertise in{" "}
            <span className="text-blue-300 font-semibold">machine learning</span>,{" "}
            <span className="text-purple-300 font-semibold">full-stack development</span>, and{" "}
            <span className="text-green-300 font-semibold">cloud technologies</span>.{" "}
            Proven track record of building scalable solutions.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25"
              data-testid="button-view-work"
            >
              <Code className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
              View My Work
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            
            <Button
              onClick={handleDownloadResume}
              className="group bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-yellow-500/25"
              data-testid="button-download-resume"
            >
              <Download className="h-6 w-6 mr-3 group-hover:animate-bounce transition-transform" />
              Download Resume
            </Button>
            
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="group border-2 border-white/30 hover:border-white/60 text-white hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover:bg-white/10"
              data-testid="button-contact"
            >
              <Mail className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <a 
              href="https://linkedin.com/in/darshan-borimalla"
              className="group w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-xl shadow-blue-500/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/darshhannnn"
              className="group w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-xl shadow-gray-500/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:darshanborimalla@gmail.com"
              className="group w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl shadow-red-500/30"
            >
              <Mail className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection("about")}>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown className="h-6 w-6 text-white/60 mx-auto mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}