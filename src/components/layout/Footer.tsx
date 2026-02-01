import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Développement Web", path: "/projets" },
    { name: "Développement Mobile", path: "/projets" },
    { name: "Cybersécurité", path: "/competences" },
    { name: "Consulting", path: "/contact" },
  ],
  company: [
    { name: "À propos", path: "/" },
    { name: "Équipe", path: "/equipe" },
    { name: "Témoignages", path: "/temoignages" },
    { name: "Contact", path: "/contact" },
  ],
  social: [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Email", icon: Mail, url: "mailto:contact@webfusion.com" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground font-display">W</span>
              </div>
              <span className="text-xl font-bold font-display text-gradient">WebFusion</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Solutions innovantes en développement web, mobile et cybersécurité pour transformer vos idées en réalité.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold font-display mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold font-display mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold font-display mb-4">Suivez-nous</h4>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card border border-border/50 hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WebFusion. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
