import type { ReactNode } from "react";

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
};

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-[#6BBF21]/25 bg-[#E8F5EA] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1E5E3A]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}

export default SectionBadge;
