import { Code, Server, Brain, Cloud, Database, Target, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/use-scroll-reveal';
import ScrollReveal from './ScrollReveal';

const categories = [
  {
    icon: Code,
    title: 'Full-Stack',
    description: 'End-to-end web and mobile apps',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Brain,
    title: 'AI / ML',
    description: 'Intelligent systems & research',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const sections = [
  {
    title: 'Frontend',
    icon: Code,
    gradient: 'from-indigo-500 to-purple-500',
    skills: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Angular', 'Tailwind CSS', 'Chart.js', 'Socket.io', 'Jetpack Compose', 'Material 3'],
  },
  {
    title: 'Backend',
    icon: Server,
    gradient: 'from-cyan-500 to-blue-500',
    skills: ['Node.js', 'Express', 'NestJS', 'Flask', 'FastAPI', 'REST APIs', 'WebSockets', 'JWT', 'Auth.js', 'Redis', 'Stripe', 'Prisma'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'SARIMA', 'LSTM', 'MobileNetV2', 'FAISS', 'Hugging Face', 'OpenAI API', 'Gemini API', 'spaCy', 'NLTK', 'pandas', 'OpenCV'],
  },
  {
    title: 'Databases',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-500',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite', 'BigQuery', 'SQL', 'Room DB', 'TypeORM'],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    gradient: 'from-sky-500 to-blue-500',
    skills: ['GCP', 'Vertex AI', 'AWS', 'Docker', 'Git', 'Netlify', 'Vercel', 'Railway', 'Render'],
  },
  {
    title: 'Fundamentals',
    icon: Target,
    gradient: 'from-amber-500 to-orange-500',
    skills: ['DSA', 'OOP', 'System Design', 'MVVM', 'Agile', 'C++', 'Java', 'Kotlin', 'Python'],
  },
];

export default function Skills() {
  const header = useScrollReveal();

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        {/* Header */}
        <div ref={header.ref} className={`section-header reveal ${header.isVisible ? 'active' : ''}`}>
          <div className="section-badge">
            <Zap className="w-4 h-4 text-amber-400" />
            Skills
          </div>
          <h2 className="section-title">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="section-subtitle">
            Full-stack, AI/ML, mobile, and cloud technologies
          </p>
        </div>

        {/* ScrollReveal statement */}
        <div className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={4}
            blurStrength={8}
            containerClassName=""
            textClassName="text-white/70"
            wordAnimationEnd="bottom center"
          >
            From full-stack web applications to AI-powered research systems — I build with React, Node.js, Python, PyTorch, FastAPI, Docker, and cloud-native tools across the entire stack.
          </ScrollReveal>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, i) => {
            const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
            return (
              <div
                key={i}
                ref={ref}
                className={`card p-8 text-center reveal ${isVisible ? 'active' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-white/40">{cat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Skill sections */}
        <div className="space-y-8">
          {sections.map((section, i) => {
            const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
            return (
              <div
                key={i}
                ref={ref}
                className={`card p-6 reveal ${isVisible ? 'active' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.gradient} flex items-center justify-center`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{section.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, j) => (
                    <span key={j} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
