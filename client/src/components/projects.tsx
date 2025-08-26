import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Parsely AI",
    description: "Gemini-powered document processing platform using LLMs for intelligent claim evaluation and semantic search across unstructured documents like contracts and policies. Built with FastAPI backend, Streamlit frontend, delivering 90% cost savings over traditional AI solutions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["FastAPI", "Streamlit", "Gemini AI", "LLM"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "AI-Enhanced Forest Monitoring",
    description: "Cloud-based real-time monitoring system using Google Earth Engine, Vertex AI, and BigQuery. Deployed anomaly detection algorithms for deforestation pattern identification with sub-minute latency alerts.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Google Earth Engine", "Vertex AI", "BigQuery", "Python"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Interpretable Malware Detection",
    description: "Self-attention-augmented 1D CNN using TensorFlow and Keras achieving 92% accuracy in Android malware detection. Modeled long-range opcode dependencies with explainable AI techniques. Published at ICCCNT 2025, IIT Indore.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["TensorFlow", "Keras", "CNN", "Cybersecurity"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Live Cricket Score Management",
    description: "Responsive full-stack web application for managing live cricket scores using React.js, Tailwind CSS, and REST APIs. Features auto-refreshing system for real-time updates and winning probability prediction models.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["React.js", "Tailwind CSS", "REST API", "Real-time"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Behavior-Aware Influence Maximization",
    description: "Graph-based system using Python, NetworkX, and Genetic Algorithms to maximize user influence on Instagram. Incorporated behavioral insights on 70K-user dataset, outperforming traditional influence models in engagement.",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["Python", "NetworkX", "Genetic Algorithms", "Graph Theory"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Firefox Custom Adblocker",
    description: "Browser extension for Firefox using JavaScript and WebExtensions API for custom ad blocking. Contributing to open-source development on GitHub to enhance privacy and browsing experience.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tags: ["JavaScript", "WebExtensions", "Firefox", "Open Source"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  const handleViewAllProjects = () => {
    console.log("View all projects clicked");
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="project-overlay absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ExternalLink className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-semibold">View Project</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs"
                      data-testid={`badge-tag-${project.id}-${index}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 text-sm"
                    data-testid={`link-demo-${project.id}`}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-slate-600 hover:text-slate-800 font-semibold transition-colors duration-200 flex items-center gap-1 text-sm"
                    data-testid={`link-github-${project.id}`}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={handleViewAllProjects}
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            data-testid="button-view-all-projects"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}