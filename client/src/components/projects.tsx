import { ExternalLink, Github, ArrowRight, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Parsely AI",
    description: "Gemini-powered document processing platform using LLMs for intelligent claim evaluation and semantic search across unstructured documents like contracts and policies. Built with FastAPI backend, Streamlit frontend, delivering 90% cost savings over traditional AI solutions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["FastAPI", "Streamlit", "Gemini AI", "LLM"],
    liveUrl: "https://parsely-ai-demo.streamlit.app",
    githubUrl: "https://github.com/darshhannnn/parsely-ai",
    featured: true,
    date: "July 2025"
  },
  {
    id: 2,
    title: "AI-Enhanced Forest Monitoring",
    description: "Cloud-based real-time monitoring system using Google Earth Engine, Vertex AI, and BigQuery. Deployed anomaly detection algorithms for deforestation pattern identification with sub-minute latency alerts.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Google Earth Engine", "Vertex AI", "BigQuery", "Python"],
    liveUrl: "https://forest-monitoring-dashboard.vercel.app",
    githubUrl: "https://github.com/darshhannnn/ai-forest-monitoring",
    featured: true,
    date: "Apr-Jun 2025"
  },
  {
    id: 3,
    title: "Interpretable Malware Detection",
    description: "Self-attention-augmented 1D CNN using TensorFlow and Keras achieving 92% accuracy in Android malware detection. Modeled long-range opcode dependencies with explainable AI techniques. Published at ICCCNT 2025, IIT Indore.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["TensorFlow", "Keras", "CNN", "Cybersecurity"],
    liveUrl: "https://malware-detection-research.netlify.app",
    githubUrl: "https://github.com/darshhannnn/interpretable-malware-detection",
    featured: true,
    date: "Feb-Jul 2025"
  },
  {
    id: 4,
    title: "Live Cricket Score Management",
    description: "Responsive full-stack web application for managing live cricket scores using React.js, Tailwind CSS, and REST APIs. Features auto-refreshing system for real-time updates and winning probability prediction models.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["React.js", "Tailwind CSS", "REST API", "Real-time"],
    liveUrl: "https://cricket-score-live.vercel.app",
    githubUrl: "https://github.com/darshhannnn/live-cricket-score",
    featured: false,
    date: "Mar-Jun 2025"
  },
  {
    id: 5,
    title: "Behavior-Aware Influence Maximization",
    description: "Graph-based system using Python, NetworkX, and Genetic Algorithms to maximize user influence on Instagram. Incorporated behavioral insights on 70K-user dataset, outperforming traditional influence models in engagement.",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "NetworkX", "Genetic Algorithms", "Graph Theory"],
    liveUrl: "https://influence-maximization.herokuapp.com",
    githubUrl: "https://github.com/darshhannnn/behavior-aware-influence-maximization",
    featured: false,
    date: "Feb-Jul 2025"
  },
  {
    id: 6,
    title: "Firefox Custom Adblocker",
    description: "Browser extension for Firefox using JavaScript and WebExtensions API for custom ad blocking. Contributing to open-source development on GitHub to enhance privacy and browsing experience.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["JavaScript", "WebExtensions", "Firefox", "Open Source"],
    liveUrl: "https://addons.mozilla.org/en-US/firefox/addon/custom-adblocker/",
    githubUrl: "https://github.com/darshhannnn/firefox-custom-adblocker",
    featured: false,
    date: "Ongoing"
  }
];

export default function Projects() {
  const handleViewAllProjects = () => {
    console.log("View all projects clicked");
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 mb-6 animate-bounce-in">
            <Star className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-200">Featured Work</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            A showcase of innovative solutions spanning AI/ML, web development, and research projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg overflow-hidden animate-scale-in transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-400/30 hover:bg-slate-800/70 ${
                project.featured ? 'ring-2 ring-blue-400/30' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="h-10 w-10 mx-auto mb-3" />
                    <p className="font-semibold text-lg">View Project</p>
                  </div>
                </div>
                
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star className="h-3 w-3" />
                    Featured
                  </div>
                )}
                
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 border border-slate-700/50">
                  <Calendar className="h-3 w-3" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-slate-700/50 backdrop-blur-sm text-blue-300 hover:bg-slate-600/50 hover:text-blue-200 text-xs px-3 py-1 transform hover:scale-105 transition-all duration-200 border border-slate-600/50"
                      data-testid={`badge-tag-${project.id}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200 text-sm flex items-center gap-1 group/link"
                    data-testid={`link-demo-${project.id}`}
                  >
                    <ExternalLink className="h-4 w-4 group-hover/link:rotate-12 transition-transform" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-white font-semibold transition-colors duration-200 flex items-center gap-1 text-sm group/link"
                    data-testid={`link-github-${project.id}`}
                  >
                    <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleViewAllProjects}
            variant="outline"
            className="group border-2 border-blue-400/30 hover:border-blue-400/60 text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-slate-800/30"
            data-testid="button-view-all-projects"
          >
            <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}