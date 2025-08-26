import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%),
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 114, 94, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 mb-6">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Available for new opportunities</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              <span className="gradient-text relative">
                Borimalla Darshan Kumar
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-8">
              Computer Science Student | Full-Stack & ML Developer  
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mb-10">
              Driven Computer Science undergraduate with expertise in machine learning, full-stack development, and cloud technologies. Proven track record of building scalable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 pulse-glow"
                data-testid="button-view-work"
              >
                <Code className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                data-testid="button-contact"
              >
                Get In Touch
                <ChevronDown className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                alt="Professional headshot"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-8 border-white floating-animation transform hover:scale-105 transition-transform duration-500"
                data-testid="img-profile"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-bounce"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
}