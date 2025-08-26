import { Code, Server, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end applications with modern frameworks and responsive design principles.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Brain,
    title: "Machine Learning & AI", 
    description: "Developing intelligent systems with deep learning, computer vision, and predictive modeling.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    description: "Deploying scalable solutions on cloud platforms with modern infrastructure and tools.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  }
];

const skillSections = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
      { name: "JavaScript", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
      { name: "Java", color: "bg-red-100 text-red-800 hover:bg-red-200" },
      { name: "C++", color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200" },
      { name: "C", color: "bg-gray-100 text-gray-800 hover:bg-gray-200" }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", color: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200" },
      { name: "Node.js", color: "bg-green-100 text-green-800 hover:bg-green-200" },
      { name: "HTML5", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
      { name: "CSS3", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
      { name: "Tailwind CSS", color: "bg-teal-100 text-teal-800 hover:bg-teal-200" }
    ]
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
      { name: "Keras", color: "bg-red-100 text-red-800 hover:bg-red-200" },
      { name: "Scikit-learn", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
      { name: "Pandas", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
      { name: "NumPy", color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200" },
      { name: "Deep Learning", color: "bg-pink-100 text-pink-800 hover:bg-pink-200" }
    ]
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", color: "bg-green-100 text-green-800 hover:bg-green-200" },
      { name: "SQL", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
      { name: "Google Cloud Platform", color: "bg-red-100 text-red-800 hover:bg-red-200" },
      { name: "Vertex AI", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
      { name: "BigQuery", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
      { name: "Netlify", color: "bg-teal-100 text-teal-800 hover:bg-teal-200" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
      { name: "Linux", color: "bg-gray-100 text-gray-800 hover:bg-gray-200" },
      { name: "AutoCAD", color: "bg-red-100 text-red-800 hover:bg-red-200" },
      { name: "FastAPI", color: "bg-green-100 text-green-800 hover:bg-green-200" },
      { name: "Streamlit", color: "bg-pink-100 text-pink-800 hover:bg-pink-200" },
      { name: "NetworkX", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`${category.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3" data-testid={`text-skill-category-${index}`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-600" data-testid={`text-skill-description-${index}`}>
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="space-y-8">
            {skillSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h4 className="text-lg font-semibold text-slate-900 mb-4" data-testid={`text-skill-section-${sectionIndex}`}>
                  {section.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {section.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`skill-badge px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer transform hover:-translate-y-1 ${skill.color}`}
                      data-testid={`badge-skill-${sectionIndex}-${skillIndex}`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}