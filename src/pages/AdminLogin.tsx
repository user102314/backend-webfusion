import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Appel vers ton port 9090
      const response = await fetch("http://localhost:9090/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          username: username, // Doit correspondre au champ 'username' de LoginRequest.java
          password: password, // Doit correspondre au champ 'password' de LoginRequest.java
        }),
      });

      // Le serveur renvoie un objet LoginResponse (success, message, admin)
      const data = await response.json();

      if (response.ok && data.success) {
        // Sauvegarde de l'état de connexion et des infos admin
        localStorage.setItem("adminAuth", "true");
        localStorage.setItem("adminInfo", JSON.stringify(data.admin));
        
        toast({ 
          title: "Bienvenue", 
          description: data.message || "Connexion réussie." 
        });
        
        navigate("/Admin067/panel");
      } else {
        // Si 401 ou success: false, on affiche le message d'erreur du service Java
        toast({ 
          title: "Accès refusé", 
          description: data.message || "Nom d'utilisateur ou mot de passe incorrect.", 
          variant: "destructive" 
        });
      }
    } catch (error: any) {
      console.error("Erreur de communication:", error);
      toast({ 
        title: "Erreur Serveur", 
        description: "Impossible de joindre le service d'authentification.", 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="w-full max-w-md mx-4"
      >
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold font-display">Admin WebFusion</h1>
            <p className="text-muted-foreground text-sm mt-2">Connectez-vous au portail (9090)</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Utilisateur</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-primary transition-all outline-none" 
                  placeholder="Nom d'utilisateur"
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-primary transition-all outline-none" 
                  placeholder="••••••••"
                  required 
                />
              </div>
            </div>

            <motion.button 
              type="submit" 
              disabled={loading} 
              className="btn-neon w-full"
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Vérification..." : "Se connecter"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </main>
  );
}