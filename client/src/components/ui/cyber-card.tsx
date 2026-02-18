import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  variant?: "default" | "accent" | "secondary";
}

export function CyberCard({
  children,
  className,
  title,
  subtitle,
  variant = "default",
}: CyberCardProps) {
  const borderColor =
    variant === "accent"
      ? "border-accent"
      : variant === "secondary"
      ? "border-secondary"
      : "border-primary";

  const textColor =
    variant === "accent"
      ? "text-accent"
      : variant === "secondary"
      ? "text-secondary"
      : "text-primary";

  return (
    <div className={cn("cyber-panel p-6 group transition-all duration-300 hover:bg-white/[0.02]", className)}>
      {/* Header Bar */}
      {(title || subtitle) && (
        <div className="mb-6 flex justify-between items-end border-b border-white/10 pb-2">
          <div>
            {title && (
              <h3 className={cn("text-xl tracking-wider font-bold", textColor)}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex gap-1">
            <div className={cn("w-2 h-2 rounded-full animate-pulse", `bg-${variant === 'default' ? 'primary' : variant}`)} />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
    </div>
  );
}
