import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass-card p-6 lg:p-8 transition-all duration-300",
        hover && "hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--glow-primary)/0.3)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;