import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Roshan Renujan. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Renujan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
              aria-label="GitHub"
            >
              <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/roshan-renujan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
            </a>
            <a
              href="mailto:roshanrenujan20020426@gmail.com"
              className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
              aria-label="Email"
            >
              <Mail className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
