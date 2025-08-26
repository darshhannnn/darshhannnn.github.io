import { Code, Server, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces with modern frameworks and tools.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Server,
    title: "Backend Development", 
    description: "Building robust APIs, databases, and server-side applications with scalable architecture.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with React Native and progressive web apps.",
    bgColor: "bg-purple-100", 
    iconColor: "text-purple-600"
  }
];

const skillSections = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "JavaScript", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
      { name: "TypeScript", color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200" },
      { name: "React", color: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200" },
      { name: "Node.js", color: "bg-green-100 text-green-800 hover:bg-green-200" },
      { name: "Vue.js", color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200" },
      { name: "Python", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
      { name: "Express.js", color: "bg-red-100 text-red-800 hover:bg-red-200" }
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
      { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
      { name: "Git", color: "bg-gray-100 text-gray-800 hover:bg-gray-200" },
      { name: "Docker", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
      { name: "AWS", color: "bg-pink-100 text-pink-800 hover:bg-pink-200" },
      { name: "Redis", color: "bg-teal-100 text-teal-800 hover:bg-teal-200" }
    ]
  },
  {
    title: "Design & Testing",
    skills: [
      { name: "Figma", color: "bg-violet-100 text-violet-800 hover:bg-violet-200" },
      { name: "Tailwind CSS", color: "bg-rose-100 text-rose-800 hover:bg-rose-200" },
      { name: "Jest", color: "bg-lime-100 text-lime-800 hover:bg-lime-200" },
      { name: "Cypress", color: "bg-amber-100 text-amber-800 hover:bg-amber-200" },
      { name: "Webpack", color: "bg-sky-100 text-sky-800 hover:bg-sky-200" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
