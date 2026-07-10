import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#08080d]" />
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-text mb-2">
              Darshan Kumar
            </div>
            <p className="text-white/30 text-sm" data-testid="text-copyright">
              &copy; 2026 Borimalla Darshan Kumar. All rights reserved.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/40 hover:text-white transition-colors duration-300 text-sm font-medium animated-underline"
                data-testid={`footer-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/darshan-borimalla"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/40 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/darshhannnn"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:darshankumarb3@gmail.com"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/40 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Bottom accent */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-center text-white/20 text-xs flex items-center justify-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
