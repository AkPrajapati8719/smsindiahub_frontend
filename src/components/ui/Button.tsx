"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "radiant" | "outline" | "ghost" | "secondary" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  variant = "radiant",
  size = "md",
  href,
  external,
  children,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 font-semibold",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-7 py-3.5 gap-2.5 font-bold shadow-radiant-sm",
  };

  const variantStyles = {
    radiant:
      "bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 text-white hover:from-violet-700 hover:via-blue-700 hover:to-cyan-700 hover:shadow-radiant-md hover:scale-[1.02]",
    outline:
      "border-2 border-blue-600/30 text-blue-600 bg-blue-50/50 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:border-blue-500/40 dark:text-blue-400 dark:bg-blue-950/20",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
    ghost:
      "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
    white:
      "bg-white text-slate-900 shadow-md hover:bg-slate-50 hover:shadow-lg border border-slate-200/80",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)} {...props}>
      {content}
    </button>
  );
}
