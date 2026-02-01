import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PageTransition } from "../components/layout/PageTransition";
import { Linkedin, Github, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Oussema Karia",
    role: "CEO & Lead Developer",
    description: "Expert en architecture logicielle et développement full-stack. Passionné par l'innovation et les technologies émergentes.",
    image: "../../public/oussema.png",
    skills: ["React", "Node.js", "Architecture", "Leadership"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Salaheddine Jendoubi",
    role: "CTO & Security Expert",
    description: "Spécialiste en cybersécurité et systèmes distribués. Certifié CISSP et passionné par la protection des données.",
    image: "../../public/salah.png",
    skills: ["Cybersécurité", "DevOps", "Cloud", "Pentesting"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Wael Houidi",
    role: "Lead Mobile Developer",
    description: "Développeur mobile expert en React Native et Flutter. Créateur d'expériences utilisateur exceptionnelles.",
    image: "../../public/wael.png",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];

export default function Equipe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <PageTransition>
      <main className="pt-32 pb-24" ref={ref}>
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-semibold mb-4 block">Notre Équipe</span>
            <h1 className="section-heading">
              Les <span className="text-gradient">talents</span> derrière WebFusion
            </h1>
            <p className="section-subheading">
              Une équipe passionnée d'experts dédiés à transformer vos projets en succès.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="glass-card-hover overflow-hidden">
                  {/* Image with 3D Tilt Effect */}
                  <div className="relative aspect-square overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                      transition={{ duration: 0.4 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* Social Links - Appear on Hover */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          className="p-2 rounded-xl glass-card border border-white/20 hover:border-primary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          className="p-2 rounded-xl glass-card border border-white/20 hover:border-primary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          className="p-2 rounded-xl glass-card border border-white/20 hover:border-primary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Twitter className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-display mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="glass-card p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold font-display mb-4">
                Rejoignez <span className="text-gradient">l'aventure</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Nous sommes toujours à la recherche de talents passionnés. Envoyez-nous votre candidature !
              </p>
              <motion.button
                className="btn-neon"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Postuler maintenant
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
