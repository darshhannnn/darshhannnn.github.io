import { Code, Server, Brain, Zap, Target, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end applications with modern frameworks and responsive design principles.",
    bgColor: "bg-blue-600/20",
    iconColor: "text-blue-400",
    borderColor: "border-blue-400/30"
  },
  {
    icon: Brain,
    title: "Machine Learning & AI", 
    description: "Developing intelligent systems with deep learning, computer vision, and predictive modeling.",
    bgColor: "bg-purple-600/20",
    iconColor: "text-purple-400",
    borderColor: "border-purple-400/30"
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    description: "Deploying scalable solutions on cloud platforms with modern infrastructure and tools.",
    bgColor: "bg-green-600/20",
    iconColor: "text-green-400",
    borderColor: "border-green-400/30"
  }
];

const skillSections = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
      { name: "JavaScript", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "Java", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "C++", color: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30 hover:bg-indigo-500/30" },
      { name: "C", color: "bg-gray-500/20 text-gray-300 border-gray-400/30 hover:bg-gray-500/30" }
    ]
  },
  {
    title: "Web Development",
    icon: Zap,
    skills: [
      { name: "React.js", color: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-500/30" },
      { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "HTML5", color: "bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30" },
      { name: "CSS3", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/20 text-teal-300 border-teal-400/30 hover:bg-teal-500/30" }
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      { name: "TensorFlow", color: "bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30" },
      { name: "Keras", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "Scikit-learn", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "Pandas", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
      { name: "NumPy", color: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30 hover:bg-indigo-500/30" },
      { name: "Deep Learning", color: "bg-pink-500/20 text-pink-300 border-pink-400/30 hover:bg-pink-500/30" }
    ]
  },
  {
    title: "Databases & Cloud",
    icon: Server,
    skills: [
      { name: "MongoDB", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "SQL", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "Google Cloud Platform", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "Vertex AI", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
      { name: "BigQuery", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
      { name: "Netlify", color: "bg-teal-500/20 text-teal-300 border-teal-400/30 hover:bg-teal-500/30" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Target,
    skills: [
      { name: "Git", color: "bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30" },
      { name: "Linux", color: "bg-gray-500/20 text-gray-300 border-gray-400/30 hover:bg-gray-500/30" },
      { name: "AutoCAD", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "FastAPI", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "Streamlit", color: "bg-pink-500/20 text-pink-300 border-pink-400/30 hover:bg-pink-500/30" },
      { name: "NetworkX", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 mb-6 animate-bounce-in">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Technical Expertise</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Skills &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technologies</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Proficient in cutting-edge technologies with hands-on experience in real-world projects
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="group text-center animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="relative">
                    <div className={`${category.bgColor} ${category.borderColor} border backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <IconComponent className={`h-10 w-10 ${category.iconColor}`} />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4" data-testid={`text-skill-category-${index}`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed" data-testid={`text-skill-description-${index}`}>
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Skills */}
          <div className="space-y-16">
            {skillSections.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <div key={sectionIndex} className="animate-fade-in-up" style={{animationDelay: `${sectionIndex * 0.1}s`}}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/30 backdrop-blur-sm p-3 rounded-xl">
                      <IconComponent className="h-6 w-6 text-blue-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white" data-testid={`text-skill-section-${sectionIndex}`}>
                      {section.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {section.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`skill-badge px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 cursor-pointer transform border backdrop-blur-sm hover:scale-105 ${skill.color}`}
                        data-testid={`badge-skill-${sectionIndex}-${skillIndex}`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
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