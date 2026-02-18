import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  color?: "primary" | "secondary" | "accent";
}

export function SkillBar({ name, level, color = "primary" }: SkillBarProps) {
  const colorClass =
    color === "accent"
      ? "bg-accent shadow-[0_0_10px_var(--accent)]"
      : color === "secondary"
      ? "bg-secondary shadow-[0_0_10px_var(--secondary)]"
      : "bg-primary shadow-[0_0_10px_var(--primary)]";

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 font-mono text-xs uppercase tracking-wider">
        <span>{name}</span>
        <span className="text-muted-foreground">LVL {level}</span>
      </div>
      <div className="h-2 w-full bg-white/5 relative overflow-hidden">
        {/* Grid lines in background bar */}
        <div className="absolute inset-0 w-full h-full flex">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-black/30 h-full" />
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full ${colorClass} relative`}
        >
          {/* Glitch effect on bar end */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}
