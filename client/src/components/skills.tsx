import { Code, Server, Brain, Zap, Target, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end applications with modern frameworks and responsive design principles.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    progress: 85
  },
  {
    icon: Brain,
    title: "Machine Learning & AI", 
    description: "Developing intelligent systems with deep learning, computer vision, and predictive modeling.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    progress: 90
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    description: "Deploying scalable solutions on cloud platforms with modern infrastructure and tools.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    progress: 75
  }
];

const skillSections = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200", level: 90 },
      { name: "JavaScript", color: "bg-blue-100 text-blue-800 hover:bg-blue-200", level: 85 },
      { name: "Java", color: "bg-red-100 text-red-800 hover:bg-red-200", level: 80 },
      { name: "C++", color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200", level: 75 },
      { name: "C", color: "bg-gray-100 text-gray-800 hover:bg-gray-200", level: 70 }
    ]
  },
  {
    title: "Web Development",
    icon: Zap,
    skills: [
      { name: "React.js", color: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200", level: 85 },
      { name: "Node.js", color: "bg-green-100 text-green-800 hover:bg-green-200", level: 80 },
      { name: "HTML5", color: "bg-orange-100 text-orange-800 hover:bg-orange-200", level: 90 },
      { name: "CSS3", color: "bg-blue-100 text-blue-800 hover:bg-blue-200", level: 85 },
      { name: "Tailwind CSS", color: "bg-teal-100 text-teal-800 hover:bg-teal-200", level: 85 }
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      { name: "TensorFlow", color: "bg-orange-100 text-orange-800 hover:bg-orange-200", level: 85 },
      { name: "Keras", color: "bg-red-100 text-red-800 hover:bg-red-200", level: 80 },
      { name: "Scikit-learn", color: "bg-blue-100 text-blue-800 hover:bg-blue-200", level: 85 },
      { name: "Pandas", color: "bg-purple-100 text-purple-800 hover:bg-purple-200", level: 90 },
      { name: "NumPy", color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200", level: 85 },
      { name: "Deep Learning", color: "bg-pink-100 text-pink-800 hover:bg-pink-200", level: 80 }
    ]
  },
  {
    title: "Databases & Cloud",
    icon: Server,
    skills: [
      { name: "MongoDB", color: "bg-green-100 text-green-800 hover:bg-green-200", level: 80 },
      { name: "SQL", color: "bg-blue-100 text-blue-800 hover:bg-blue-200", level: 85 },
      { name: "Google Cloud Platform", color: "bg-red-100 text-red-800 hover:bg-red-200", level: 75 },
      { name: "Vertex AI", color: "bg-purple-100 text-purple-800 hover:bg-purple-200", level: 70 },
      { name: "BigQuery", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200", level: 75 },
      { name: "Netlify", color: "bg-teal-100 text-teal-800 hover:bg-teal-200", level: 85 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Target,
    skills: [
      { name: "Git", color: "bg-orange-100 text-orange-800 hover:bg-orange-200", level: 90 },
      { name: "Linux", color: "bg-gray-100 text-gray-800 hover:bg-gray-200", level: 80 },
      { name: "AutoCAD", color: "bg-red-100 text-red-800 hover:bg-red-200", level: 60 },
      { name: "FastAPI", color: "bg-green-100 text-green-800 hover:bg-green-200", level: 75 },
      { name: "Streamlit", color: "bg-pink-100 text-pink-800 hover:bg-pink-200", level: 80 },
      { name: "NetworkX", color: "bg-purple-100 text-purple-800 hover:bg-purple-200", level: 75 }
    ]
  }
];

function AnimatedProgressBar({ progress, delay = 0 }: { progress: number, delay?: number }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, delay);
    return () => clearTimeout(timer);
  }, [progress, delay]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${animatedProgress}%` }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 mb-6 animate-bounce-in">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Technical Expertise</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up">
              Skills &{" "}
              <span className="gradient-text">Technologies</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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
                    <div className={`${category.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <IconComponent className={`h-10 w-10 ${category.iconColor}`} />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-4" data-testid={`text-skill-category-${index}`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed" data-testid={`text-skill-description-${index}`}>
                    {category.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Proficiency</span>
                      <span>{category.progress}%</span>
                    </div>
                    <AnimatedProgressBar progress={category.progress} delay={index * 200 + 500} />
                  </div>
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
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-xl">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900" data-testid={`text-skill-section-${sectionIndex}`}>
                      {section.title}
                    </h4>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <Badge
                            className={`skill-badge px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer transform ${skill.color}`}
                            data-testid={`badge-skill-${sectionIndex}-${skillIndex}`}
                          >
                            {skill.name}
                          </Badge>
                          <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                        </div>
                        <AnimatedProgressBar 
                          progress={skill.level} 
                          delay={sectionIndex * 100 + skillIndex * 50 + 800} 
                        />
                      </div>
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