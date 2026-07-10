import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com/in/darshan-borimalla', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/darshhannnn', label: 'GitHub' },
  { icon: Mail, href: 'mailto:darshankumarb3@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12">
      <div className="absolute inset-0 bg-[#060608]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-gradient mb-1">Darshan Kumar</div>
            <p className="text-xs text-white/30">&copy; 2026 All rights reserved</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-white/30 hover:text-white transition-colors underline-hover"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/20 flex items-center justify-center gap-1">
            Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
