"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "ghost";
}

export const Button = ({
  children,
  className = "",
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const base =
    "inline-flex items-center px-4 py-2 rounded-md font-medium transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1";

  const variants: Record<string, string> = {
    // Glassy primary: translucent backdrop + subtle border and glow
    primary:
      "bg-white/10 dark:bg-slate-900/30 text-white border border-white/20 dark:border-slate-700/30 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-slate-800/40 focus:ring-primary-300",
    // Ghost stays minimal but with glass hover
    ghost:
      "bg-transparent text-slate-700 dark:text-slate-100 hover:bg-white/5 dark:hover:bg-slate-800/50 border border-transparent hover:border-white/10",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
