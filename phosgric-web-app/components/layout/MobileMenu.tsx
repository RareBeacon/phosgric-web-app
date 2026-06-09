"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const groups = [
  {
    title: "Main Platform",
    links: [
      { label: "Product Overview", href: "/" },
      { label: "AI Crop Scanner", href: "/scan" },
      { label: "Produce Marketplace", href: "/marketplace" },
      { label: "Agro-Logistics", href: "/logistics" },
    ],
  },
  {
    title: "For Users",
    links: [
      { label: "For Farmers", href: "/register" },
      { label: "For Sellers", href: "/marketplace/new" },
      { label: "For Buyers", href: "/marketplace" },
      { label: "For Transporters", href: "/logistics" },
    ],
  },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={[
        "fixed inset-0 z-[80] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
    >
      <button
        aria-label="Close mobile menu overlay"
        onClick={onClose}
        className={[
          "absolute inset-0 bg-[#10291C]/45 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <aside
        className={[
          "absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[#F7FAF7] p-5 shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-black text-[#1E5E3A]">Phosgric</p>
            <p className="text-xs font-bold text-[#10291C]/55">
              Smart farm-to-market platform
            </p>
          </div>
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-[#1E5E3A] shadow-sm"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 space-y-7">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#6BBF21]">
                {group.title}
              </p>
              <div className="space-y-2">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#10291C] shadow-sm transition hover:bg-[#E8F5EA] hover:text-[#1E5E3A]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#6BBF21]">
              Account
            </p>
            <div className="grid gap-3">
              <Button href="/login" variant="outline" className="w-full" onClick={onClose}>
                Login
              </Button>
              <Button href="/register" className="w-full" onClick={onClose}>
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MobileMenu;
