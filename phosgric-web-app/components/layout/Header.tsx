"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navLinks = [
  { label: "Product", href: "/" },
  { label: "AI Scanner", href: "/scan" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Logistics", href: "/logistics" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[#1E5E3A]/10 bg-white/88 shadow-[0_18px_55px_rgba(16,41,28,0.08)] backdrop-blur-xl"
            : "bg-white/65 backdrop-blur-xl",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/phosgric-logo.png"
              alt="Phosgric logo"
              width={48}
              height={48}
              className="rounded-2xl object-contain"
              priority
            />
            <div>
              <p className="text-xl font-black tracking-tight text-[#1E5E3A]">
                Phosgric
              </p>
              <p className="hidden text-xs font-bold text-[#10291C]/50 sm:block">
                AI Farm Intelligence
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[#1E5E3A]/10 bg-white/70 p-1 shadow-sm lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-[#10291C]/70 transition hover:bg-[#E8F5EA] hover:text-[#1E5E3A]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/login" variant="ghost">
              Login
            </Button>
            <Button href="/register">Create Account</Button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-[#1E5E3A] text-white shadow-lg lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Header;
