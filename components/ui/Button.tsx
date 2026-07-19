import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  external?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C1704D] rounded-full cursor-pointer";

const variants = {
  primary:
    "bg-[#C1704D] text-[#F8F6F2] hover:bg-[#A85C3C] active:scale-[0.98] shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent text-[#4B3A32] hover:text-[#C1704D] hover:bg-[#F2EDE6] active:scale-[0.98]",
  outline:
    "border border-[#C1704D] text-[#C1704D] hover:bg-[#C1704D] hover:text-[#F8F6F2] active:scale-[0.98]",
};

const sizes = {
  sm: "text-xs px-4 py-2 gap-1.5",
  md: "text-sm px-6 py-3 gap-2",
  lg: "text-sm px-8 py-4 gap-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
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
