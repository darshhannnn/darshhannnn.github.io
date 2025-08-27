import { Download, MapPin, Briefcase, GraduationCap, Award, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    { label: "Projects Completed", value: "15+", icon: Award },
    { label: "CGPA", value: "7.61", icon: GraduationCap },
    { label: "Research Papers", value: "1", icon: Users },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science and Engineering at Amrita Vishwa Vidyapeetham",
      color: "bg-blue-600/20 text-blue-300"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Full Stack Development Internship at Bluestock (May-Jun 2025)",
      color: "bg-purple-600/20 text-purple-300"
    },
    {
      icon: Award,
      title: "Achievement",
      description: "Research paper accepted at ICCCNT 2025, IIT Indore",
      color: "bg-green-600/20 text-green-300"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 mb-6 animate-bounce-in">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Get to know me</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl text-white font-medium">
                  I'm a driven Computer Science undergraduate at Amrita Vishwa Vidyapeetham with expertise in machine learning, full-stack development and cloud technologies.
                </p>
                
                <p>
                  Currently maintaining a CGPA of 7.61/10.0, I'm passionate about building scalable solutions that solve real-world problems. My journey spans from developing AI-enhanced cloud monitoring systems to creating interpretable malware detection models.
                </p>
                
                <p>
                  I've completed internships at Bluestock, published research at ICCCNT 2025, and actively contribute to open-source projects. I believe in innovation through collaborative problem-solving and am always eager to learn new technologies.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 my-8">
                <div className="flex items-center gap-3 group">
                  <div className="bg-blue-600/20 border border-blue-400/30 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors backdrop-blur-sm">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-medium">India</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-green-600/20 border border-green-400/30 p-2 rounded-lg group-hover:bg-green-600/30 transition-colors backdrop-blur-sm">
                    <Briefcase className="h-5 w-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 font-medium">Open to opportunities</span>
                </div>
              </div>

              <Button
                onClick={handleDownloadResume}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-blue-500/25"
                data-testid="button-download-resume"
              >
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
            
            {/* Image and Stats */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                  alt="Modern office workspace"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500 border border-white/10"
                  data-testid="img-workspace"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group text-center animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-blue-400/30 group-hover:bg-slate-800/70">
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                      <IconComponent className="h-8 w-8 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-slate-600/50 group-hover:bg-slate-800/70">
                    <div className={`${highlight.color} border border-current/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}