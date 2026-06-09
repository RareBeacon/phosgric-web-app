import Image from "next/image";
import Link from "next/link";

const platformLinks = [
  { label: "AI Crop Scanner", href: "/scan" },
  { label: "Farmer Dashboard", href: "/register" },
  { label: "Produce Marketplace", href: "/marketplace" },
  { label: "Buyer Requests", href: "/marketplace" },
  { label: "Logistics Network", href: "/logistics" },
];

const userLinks = [
  { label: "Farmers", href: "/register" },
  { label: "Sellers", href: "/marketplace/new" },
  { label: "Buyers", href: "/marketplace" },
  { label: "Transporters", href: "/logistics" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about" },
  { label: "Pilot Program", href: "/register" },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-[#10291C] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/phosgric-logo.png"
              alt="Phosgric logo"
              width={48}
              height={48}
              className="rounded-2xl bg-white object-contain p-1"
            />
            <div>
              <p className="text-xl font-black tracking-tight">Phosgric</p>
              <p className="text-sm text-white/60">Farm intelligence for trade</p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            AI farm intelligence, produce marketplace, and agro-logistics infrastructure
            for smarter farm-to-market trade.
          </p>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            Built first for Ogbomoso farmers. Designed to scale across agricultural communities.
          </div>
        </div>

        <FooterColumn title="Platform" links={platformLinks} />
        <FooterColumn title="Users" links={userLinks} />

        <div>
          <FooterColumn title="Company" links={companyLinks} />
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <p>Ogbomoso, Oyo State, Nigeria</p>
            <p>phoslab.io</p>
            <p>+234 903 267 3458</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Phosgric. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/about" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/about" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#9FE870]">
        {title}
      </h3>
      <div className="mt-4 space-y-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block text-sm text-white/70 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;
