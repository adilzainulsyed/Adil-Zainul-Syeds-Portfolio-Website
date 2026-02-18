import { useState, useEffect } from "react";
import { Terminal, User, Code, Database, Mail, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { id: "hero", label: "System", icon: Terminal },
  { id: "about", label: "Profile", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Vault", icon: Database },
  { id: "achievements", label: "Badges", icon: Shield },
  { id: "contact", label: "Uplink", icon: Mail },
];

export function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-black/80 backdrop-blur-md border-primary/20 py-2" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-mono font-bold text-xl text-primary flex items-center gap-2">
          <span className="animate-pulse">&gt;_</span>
          <span>DEV.LOG</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border border-transparent hover:border-primary/50 hover:bg-primary/5",
                  isActive ? "text-primary border-primary bg-primary/10 shadow-[0_0_10px_rgba(0,255,157,0.2)]" : "text-muted-foreground"
                )}
              >
                <Icon size={14} />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Nav Indicator (Simple) */}
        <div className="md:hidden text-primary font-mono text-xs border border-primary px-2 py-1">
          MENU
        </div>
      </div>
    </nav>
  );
}
