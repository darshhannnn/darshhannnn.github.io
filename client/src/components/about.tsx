import { Download, MapPin, Briefcase, GraduationCap, Award, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a download
    console.log("Download resume clicked");
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
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Full Stack Development Internship at Bluestock (May-Jun 2025)",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Award,
      title: "Achievement",
      description: "Research paper accepted at ICCCNT 2025, IIT Indore",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 mb-6 animate-bounce-in">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Get to know me</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up">
              About{" "}
              <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl text-gray-800 font-medium">
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
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">India</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Briefcase className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Open to opportunities</span>
                </div>
              </div>

              <Button
                onClick={handleDownloadResume}
                className="group bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                data-testid="button-download-resume"
              >
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
            
            {/* Image and Stats */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                  alt="Modern office workspace"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
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
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
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
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className={`${highlight.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
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