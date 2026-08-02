interface BadgeProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "glass";
  className?: string;
}

const Badge = ({ children, variant = "glass", className = "" }: BadgeProps) => {
  const baseStyles = "px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide inline-flex items-center gap-2 transition-all";
  
  const variants = {
    glass: "bg-white/15 backdrop-blur-md border border-white/30 text-white shadow-sm",
    light: "bg-gray-100/90 border border-gray-200 text-gray-700 shadow-xs",
    dark: "bg-zinc-900 border border-zinc-800 text-zinc-300"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;