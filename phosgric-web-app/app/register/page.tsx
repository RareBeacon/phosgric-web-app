import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingBasket,
  Tractor,
  Truck,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";

const roles = [
  {
    title: "Farmer",
    icon: Tractor,
    description:
      "Scan crops, save farm history, list produce, and request logistics support.",
  },
  {
    title: "Seller",
    icon: ShoppingBasket,
    description:
      "List available produce, manage product visibility, and receive buyer interest.",
  },
  {
    title: "Buyer",
    icon: Building2,
    description:
      "Browse produce, post demand, and connect with sellers faster.",
  },
  {
    title: "Transporter",
    icon: Truck,
    description:
      "Register routes, show availability, and receive delivery requests.",
  },
];

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#F7FAF7] px-5 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionBadge>Create your account</SectionBadge>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#10291C] sm:text-5xl">
            Join the Phosgric farm-to-market network.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#10291C]/70">
            Create your profile as a farmer, seller, buyer, or transporter and
            start using the platform built to make crop intelligence, produce
            trade, and logistics easier to manage.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Simple onboarding", User],
              ["Role-based access", ShieldCheck],
              ["Location-ready trade", MapPin],
            ].map(([label, Icon]) => (
              <div
                key={String(label)}
                className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_16px_45px_rgba(16,41,28,0.08)]"
              >
                <Icon className="h-5 w-5 text-[#1E5E3A]" />
                <p className="mt-3 text-sm font-black text-[#10291C]">
                  {String(label)}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm font-semibold text-[#10291C]/60">
            Already have an account?{" "}
            <Link href="/login" className="font-black text-[#1E5E3A]">
              Login here
            </Link>
          </p>
        </div>

        <div className="rounded-[32px] border border-white/70 bg-white/85 p-6 shadow-[0_24px_70px_rgba(16,41,28,0.1)] backdrop-blur sm:p-8">
          <div>
            <h2 className="text-2xl font-black text-[#10291C]">
              Create your Phosgric account
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#10291C]/65">
              Join the platform helping farmers, sellers, buyers, and
              transporters connect through smarter agricultural technology.
            </p>
          </div>

          <form className="mt-8 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" placeholder="Enter your full name" />
              <Field label="Phone number" placeholder="+234..." icon={<Phone className="h-4 w-4" />} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email address" placeholder="you@example.com" type="email" />
              <Field label="Password" placeholder="Create a secure password" type="password" />
            </div>

            <Field
              label="Location"
              placeholder="Ogbomoso, Oyo State"
              icon={<MapPin className="h-4 w-4" />}
            />

            <div>
              <label className="text-sm font-black text-[#10291C]">
                Choose your role
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {roles.map((role) => {
                  const Icon = role.icon;

                  return (
                    <label
                      key={role.title}
                      className="group cursor-pointer rounded-3xl border border-[#1E5E3A]/10 bg-[#F7FAF7] p-4 transition-all hover:-translate-y-0.5 hover:border-[#6BBF21]/50 hover:bg-[#E8F5EA]"
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role.title.toLowerCase()}
                        className="sr-only"
                      />
                      <div className="flex gap-3">
                        <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl bg-white text-[#1E5E3A] shadow-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-black text-[#10291C]">
                            {role.title}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-[#10291C]/60">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <Button className="w-full" type="submit" icon={<ArrowRight className="h-4 w-4" />}>
              Create Account
            </Button>

            <p className="text-center text-xs leading-6 text-[#10291C]/55">
              Frontend-only preview for now. Firebase authentication will be
              connected in the next development phase.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  icon,
}: {
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#10291C]">{label}</span>
      <div className="mt-2 flex items-center gap-2 rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 shadow-sm">
        {icon ? <span className="text-[#1E5E3A]">{icon}</span> : null}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/35"
        />
      </div>
    </label>
  );
}
