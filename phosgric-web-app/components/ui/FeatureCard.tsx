import { createElement, isValidElement, type ElementType, type ReactNode } from "react";

type FeatureCardProps = {
  icon?: ElementType | ReactNode;
  title: string;
  description: string;
  tag?: string;
  status?: string;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

export function FeatureCard({
  icon,
  title,
  description,
  tag,
  status,
  className = "",
  children,
}: FeatureCardProps) {
  const renderedIcon =
    icon && isValidElement(icon)
      ? icon
      : icon
        ? createElement(icon as ElementType, { className: "h-6 w-6" })
        : null;

  return (
    <div
      className={[
        "group rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_18px_55px_rgba(16,41,28,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(16,41,28,0.13)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-start gap-4">
        {renderedIcon ? (
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#1E5E3A] transition group-hover:bg-[#1E5E3A] group-hover:text-white">
            {renderedIcon}
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          {tag || status ? (
            <span className="mb-3 inline-flex rounded-full bg-[#E8F5EA] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#1E5E3A]">
              {tag || status}
            </span>
          ) : null}

          <h3 className="text-lg font-black text-[#10291C]">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-[#10291C]/70">{description}</p>
          {children ? <div className="mt-4">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
