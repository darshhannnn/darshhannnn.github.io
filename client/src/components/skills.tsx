import { Code, Server, Brain, Cloud, Database, Target, Sparkles, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end web and mobile applications with modern frameworks, RESTful APIs, and real-time features.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Brain,
    title: "AI / ML / Research",
    description: "Developing intelligent systems — from LSTM anomaly detectors to Gemini-powered NLP pipelines and medical CV models.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying scalable solutions on GCP, Railway, and Vercel with Docker, CI/CD, and modern infrastructure.",
    gradient: "from-emerald-500 to-teal-500"
  }
];

const skillSections = [
  {
    title: "Frontend",
    icon: Code,
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      { name: "React.js", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-500/40" },
      { name: "Next.js", color: "bg-slate-500/10 text-slate-300 border-slate-500/20 hover:border-slate-500/40" },
      { name: "React Native", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40" },
      { name: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40" },
      { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-500/40" },
      { name: "Angular", color: "bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/40" },
      { name: "Tailwind CSS", color: "bg-teal-500/10 text-teal-400 border-teal-500/20 hover:border-teal-500/40" },
      { name: "Chart.js", color: "bg-pink-500/10 text-pink-400 border-pink-500/20 hover:border-pink-500/40" },
      { name: "Socket.io", color: "bg-gray-500/10 text-gray-300 border-gray-500/20 hover:border-gray-500/40" },
      { name: "Jetpack Compose", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40" },
      { name: "Material 3", color: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40" },
    ]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Node.js", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40" },
      { name: "Express", color: "bg-gray-500/10 text-gray-300 border-gray-500/20 hover:border-gray-500/40" },
      { name: "NestJS", color: "bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/40" },
      { name: "Flask", color: "bg-slate-500/10 text-slate-300 border-slate-500/20 hover:border-slate-500/40" },
      { name: "FastAPI", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40" },
      { name: "REST APIs", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40" },
      { name: "WebSockets", color: "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:border-orange-500/40" },
      { name: "JWT Auth", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-500/40" },
      { name: "Auth.js v5", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:border-indigo-500/40" },
      { name: "Redis", color: "bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/40" },
      { name: "Stripe", color: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40" },
      { name: "Prisma", color: "bg-teal-500/10 text-teal-400 border-teal-500/20 hover:border-teal-500/40" },
    ]
  },
  {
    title: "AI / ML / Data",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Python", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-500/40" },
      { name: "PyTorch", color: "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:border-orange-500/40" },
      { name: "TensorFlow", color: "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:border-orange-500/40" },
      { name: "scikit-learn", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40" },
      { name: "SARIMA", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:border-indigo-500/40" },
      { name: "LSTM Autoencoder", color: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40" },
      { name: "MobileNetV2", color: "bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/40" },
      { name: "FAISS", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-500/40" },
      { name: "sentence-transformers", color: "bg-pink-500/10 text-pink-400 border-pink-500/20 hover:border-pink-500/40" },
      { name: "Hugging Face", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-500/40" },
      { name: "OpenAI API", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40" },
      { name: "Gemini API", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40" },
      { name: "spaCy", color: "bg-teal-500/10 text-teal-400 border-teal-500/20 hover:border-teal-500/40" },
      { name: "NLTK", color: "bg-teal-500/10 text-teal-400 border-teal-500/20 hover:border-teal-500/40" },
      { name: "pandas / NumPy", color: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40" },
      { name: "OpenCV", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40" },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-emerald-500 to-teal-500",
    skills: [
      { name: "MongoDB", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40" },
      { name: "PostgreSQL", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40" },
      { name: "SQLite", color: "bg-gray-500/10 text-gray-300 border-gray-500/20 hover:border-gray-500/40" },
      { name: "BigQuery", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-500/40" },
      { name: "SQL", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40" },
      { name: "Room DB", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40" },
      { name: "TypeORM", color: "bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/40" },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-sky-500 to-blue-500",
    skills: [
      { name: "Google Cloud", color: "bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/40" },
      { name: "Vertex AI", color: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40" },
      { name: "AWS", color: "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:border-orange-500/40" },
      { name: "Docker", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40" },
      { name: "Git / GitHub", color: "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:border-orange-500/40" },
      { name: "Netlify / Vercel", color: "bg-teal-500/10 text-teal-400 border-teal-500/20 hover:border-teal-500/40" },
      { name: "Railway", color: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40" },
      { name: "Render / Fly.io", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:border-indigo-500/40" },
    ]
  },
  {
    title: "CS Fundamentals",
    icon: Target,
    gradient: "from-amber-500 to-orange-500",
    skills: [
      { name: "Data Structures", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40" },
      { name: "Algorithms", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40" },
      { name: "OOP", color: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40" },
      { name: "System Design", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:border-indigo-500/40" },
      { name: "MVVM", color: "bg-pink-500/10 text-pink-400 border-pink-500/20 hover:border-pink-500/40" },
      { name: "Agile / Scrum", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-500/40" },
      { name: "C++", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:border-indigo-500/40" },
      { name: "Java", color: "bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/40" },
      { name: "Kotlin", color: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40" },
      { name: "Python", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-500/40" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] float-modern" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-[80px] float-delayed" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6 animate-bounce-in">
              <Zap className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-white/70">Technical Expertise</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Skills &{" "}
              <span className="gradient-text">Technologies</span>
            </h2>
            
            <p className="text-xl text-white/40 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Full-stack, AI/ML, mobile, and cloud — with hands-on experience across 14+ shipped projects
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="group glass-card rounded-2xl p-8 text-center hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4" data-testid={`text-skill-category-${index}`}>
                    {category.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-sm" data-testid={`text-skill-description-${index}`}>
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Skills */}
          <div className="space-y-12">
            {skillSections.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <div key={sectionIndex} className="glass-card rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white" data-testid={`text-skill-section-${sectionIndex}`}>
                      {section.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {section.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`skill-badge px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${skill.color}`}
                        data-testid={`badge-skill-${sectionIndex}-${skillIndex}`}
                      >
                        {skill.name}
                      </span>
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
