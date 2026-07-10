import { Code, Server, Brain, Zap, Target, Database, Sparkles, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end web and mobile applications with modern frameworks, RESTful APIs, and real-time features.",
    bgColor: "bg-blue-600/20",
    iconColor: "text-blue-400",
    borderColor: "border-blue-400/30"
  },
  {
    icon: Brain,
    title: "AI / ML / Research",
    description: "Developing intelligent systems — from LSTM anomaly detectors to Gemini-powered NLP pipelines and medical CV models.",
    bgColor: "bg-purple-600/20",
    iconColor: "text-purple-400",
    borderColor: "border-purple-400/30"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying scalable solutions on GCP, Railway, and Vercel with Docker, CI/CD, and modern infrastructure.",
    bgColor: "bg-green-600/20",
    iconColor: "text-green-400",
    borderColor: "border-green-400/30"
  }
];

const skillSections = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "React.js", color: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-500/30" },
      { name: "Next.js (App Router)", color: "bg-slate-500/20 text-slate-300 border-slate-400/30 hover:bg-slate-500/30" },
      { name: "React Native (Expo)", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "TypeScript", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "JavaScript (ES6+)", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
      { name: "Angular", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "HTML5 / CSS3", color: "bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30" },
      { name: "Tailwind CSS", color: "bg-teal-500/20 text-teal-300 border-teal-400/30 hover:bg-teal-500/30" },
      { name: "Chart.js", color: "bg-pink-500/20 text-pink-300 border-pink-400/30 hover:bg-pink-500/30" },
      { name: "Socket.io", color: "bg-gray-500/20 text-gray-300 border-gray-400/30 hover:bg-gray-500/30" },
      { name: "Jetpack Compose", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "Material 3", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
    ]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "Express", color: "bg-gray-500/20 text-gray-300 border-gray-400/30 hover:bg-gray-500/30" },
      { name: "NestJS", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "Flask", color: "bg-slate-500/20 text-slate-300 border-slate-400/30 hover:bg-slate-500/30" },
      { name: "FastAPI", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "Next.js (App Router)", color: "bg-slate-500/20 text-slate-300 border-slate-400/30 hover:bg-slate-500/30" },
      { name: "REST APIs", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "WebSockets", color: "bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30" },
      { name: "JWT Auth", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
      { name: "Auth.js v5", color: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30 hover:bg-indigo-500/30" },
      { name: "Redis", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "Stripe", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
      { name: "Prisma ORM", color: "bg-teal-500/20 text-teal-300 border-teal-400/30 hover:bg-teal-500/30" },
    ]
  },
  {
    title: "AI / ML / Data",
    icon: Brain,
    skills: [
      { name: "Python", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
      { name: "PyTorch", color: "bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30" },
      { name: "TensorFlow / Keras", color: "bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30" },
      { name: "scikit-learn", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "SARIMA (statsmodels)", color: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30 hover:bg-indigo-500/30" },
      { name: "LSTM Autoencoder", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
      { name: "MobileNetV2", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "FAISS", color: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-500/30" },
      { name: "sentence-transformers", color: "bg-pink-500/20 text-pink-300 border-pink-400/30 hover:bg-pink-500/30" },
      { name: "Hugging Face Transformers", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
      { name: "OpenAI API", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "Gemini API (Google)", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "spaCy", color: "bg-teal-500/20 text-teal-300 border-teal-400/30 hover:bg-teal-500/30" },
      { name: "NLTK", color: "bg-teal-500/20 text-teal-300 border-teal-400/30 hover:bg-teal-500/30" },
      { name: "pandas / NumPy", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
      { name: "seaborn / matplotlib", color: "bg-pink-500/20 text-pink-300 border-pink-400/30 hover:bg-pink-500/30" },
      { name: "OpenCV", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "PostgreSQL", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "SQLite", color: "bg-gray-500/20 text-gray-300 border-gray-400/30 hover:bg-gray-500/30" },
      { name: "BigQuery", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
      { name: "SQL", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "Room DB (Android)", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "TypeORM", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Google Cloud Platform", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "Vertex AI", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
      { name: "AWS (Basic)", color: "bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30" },
      { name: "Docker", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "Git / GitHub", color: "bg-orange-500/20 text-orange-300 border-orange-400/30 hover:bg-orange-500/30" },
      { name: "Netlify / Vercel", color: "bg-teal-500/20 text-teal-300 border-teal-400/30 hover:bg-teal-500/30" },
      { name: "Railway", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
      { name: "Render / Fly.io", color: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30 hover:bg-indigo-500/30" },
      { name: "ngrok", color: "bg-gray-500/20 text-gray-300 border-gray-400/30 hover:bg-gray-500/30" },
      { name: "Amazon Kiro IDE", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
    ]
  },
  {
    title: "CS Fundamentals & Languages",
    icon: Target,
    skills: [
      { name: "Data Structures & Algorithms", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
      { name: "OOP", color: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30" },
      { name: "System Design", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
      { name: "MVVM Architecture", color: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30 hover:bg-indigo-500/30" },
      { name: "Agile / Scrum", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
      { name: "C++", color: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30 hover:bg-indigo-500/30" },
      { name: "Java", color: "bg-red-500/20 text-red-300 border-red-400/30 hover:bg-red-500/30" },
      { name: "Kotlin", color: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30" },
      { name: "Python", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30" },
      { name: "SQL", color: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30" },
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
              Full-stack, AI/ML, mobile, and cloud — with hands-on experience across 14+ shipped projects
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
                        className={`skill-badge px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer transform border backdrop-blur-sm hover:scale-105 ${skill.color}`}
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