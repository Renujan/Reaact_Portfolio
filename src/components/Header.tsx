import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "home", href: "#home", num: "01" },
    { label: "expertise", href: "#expertise", num: "02" },
    { label: "work", href: "#work", num: "03" },
    { label: "experience", href: "#experience", num: "04" },
    { label: "certifications", href: "#certifications", num: "05" },
    { label: "contact", href: "#contact", num: "06" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-surface/90 backdrop-blur-lg border-b border-border" : "bg-surface/40"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-[80px]">
        <a
          href="#home"
          className="font-mono text-xl text-primary hover:text-primary/80 transition-colors font-bold"
        >
          Renujan<span className="animate-pulse">._</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-primary/60 text-xs mr-1">{link.num}</span>
                <span className="text-primary/40">//</span> {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface/98 backdrop-blur-lg border-t border-border">
          <ul className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors block py-2"
                >
                  <span className="text-primary/60 text-xs mr-1">{link.num}</span>
                  <span className="text-primary/40">//</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
