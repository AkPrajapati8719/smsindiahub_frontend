import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "radiant" | "blue" | "violet" | "green" | "amber" | "slate";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "radiant",
  size = "sm",
  className,
  icon,
}: BadgeProps) {
  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-medium gap-1",
    md: "text-xs px-3 py-1 font-semibold gap-1.5",
  };

  const variantStyles = {
    radiant:
      "bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-cyan-500/10 text-blue-700 border border-blue-200/60 dark:text-blue-300 dark:border-blue-700/40",
    blue: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    violet:
      "bg-violet-50 text-violet-700 border border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800",
    green:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    amber:
      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
    slate:
      "bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full transition-colors",
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
