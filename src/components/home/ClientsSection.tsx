import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2 } from "lucide-react";

const clients = [
  "TechStart",
  "FinanceHub",
  "DataFlow",
  "CloudNext",
  "SecureIT",
  "InnovateLab",
];

export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            Ils nous font confiance
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-border/30 hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
