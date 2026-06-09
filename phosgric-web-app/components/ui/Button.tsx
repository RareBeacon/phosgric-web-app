import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  [key: string]: unknown;
};

const variantClasses = {
  primary:
    "bg-[#1E5E3A] text-white shadow-[0_18px_45px_rgba(30,94,58,0.22)] hover:bg-[#164b2f]",
  secondary:
    "bg-[#6BBF21] text-white shadow-[0_18px_45px_rgba(107,191,33,0.24)] hover:bg-[#5aaa1d]",
  outline:
    "border border-[#1E5E3A]/20 bg-white/80 text-[#1E5E3A] hover:bg-[#E8F5EA]",
  ghost:
    "bg-transparent text-[#1E5E3A] hover:bg-[#E8F5EA]",
  dark:
    "bg-[#10291C] text-white hover:bg-[#1E5E3A]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  icon,
  disabled,
  onClick,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon ? <span className="inline-flex">{icon}</span> : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}

export default Button;
