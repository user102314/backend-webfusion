import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import logo from "@/assets/logo.webp";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Projets", path: "/projets" },
  { name: "Témoignages", path: "/temoignages" },
  { name: "Équipe", path: "/equipe" },
  { name: "Compétences", path: "/competences" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
  { name: "Avantage", path: "/parlez" },
  { 
    name: "Offre", 
    path: "/Services",
    special: true,
    icon: Sparkles
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Empêcher le défilement du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg py-3" : "bg-background/50 backdrop-blur-md py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            className="relative w-11 h-11"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={logo} 
              alt="WebFusion Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,212,255,0.3)]"
            />
          </motion.div>
          <span className="text-xl font-bold font-display text-gradient">WebFusion</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return link.special ? (
              <motion.div
                key={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className="relative px-5 py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>{link.name}</span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-special-active"
                      className="absolute inset-0 rounded-xl bg-white/20"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              </motion.div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                <span
                  className={`relative z-10 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-lg bg-primary/10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[73px] lg:hidden"
            style={{ 
              height: 'calc(100vh - 73px)',
              overflowY: 'auto'
            }}
          >
            {/* Overlay avec background flouté */}
            <motion.div 
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Contenu du menu */}
            <motion.nav
              className="relative container mx-auto px-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="space-y-2 max-w-md mx-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.special ? (
                      <Link
                        to={link.path}
                        className={`flex items-center gap-3 px-4 py-4 rounded-xl font-bold transition-all ${
                          location.pathname === link.path
                            ? "bg-primary text-white shadow-lg shadow-primary/30"
                            : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Sparkles className="w-5 h-5" />
                        <span className="text-lg">{link.name}</span>
                      </Link>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-4 rounded-xl text-lg transition-all ${
                          location.pathname === link.path
                            ? "bg-primary/15 text-primary font-semibold border-l-4 border-primary"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}