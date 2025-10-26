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
    primary: "bg-primary-600 text-white hover:bg-primary-500 focus:ring-primary-300",
    ghost: "bg-transparent text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50 focus:ring-slate-300",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
