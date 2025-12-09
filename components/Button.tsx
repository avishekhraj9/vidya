import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  fullWidth?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-lg shadow-blue-200 hover:bg-primary-dark focus-visible:outline-primary",
  secondary:
    "bg-white text-primary border border-primary hover:bg-primary hover:text-white focus-visible:outline-primary",
  outline:
    "border border-slate-300 text-slate-800 hover:border-primary hover:text-primary focus-visible:outline-primary",
  ghost:
    "text-slate-700 hover:text-primary hover:bg-slate-100 focus-visible:outline-primary"
};

export function Button({
  children,
  className,
  variant = "primary",
  href,
  fullWidth,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;

