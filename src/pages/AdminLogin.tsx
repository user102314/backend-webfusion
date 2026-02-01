import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API call to /API/ADMIN/
    setTimeout(() => {
      if (email === "admin@webfusion.com" && password === "admin123") {
        localStorage.setItem("adminAuth", "true");
        navigate("/Admin067/panel");
      } else {
        toast({ title: "Erreur", description: "Identifiants incorrects", variant: "destructive" });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md mx-4">
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold font-display">Admin WebFusion</h1>
            <p className="text-muted-foreground text-sm mt-2">Connectez-vous pour accéder au panneau</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-primary transition-all outline-none" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-primary transition-all outline-none" required />
              </div>
            </div>
            <motion.button type="submit" disabled={loading} className="btn-neon w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {loading ? <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mx-auto" /> : "Se connecter"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
