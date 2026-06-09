import Link from "next/link";
import {
  ArrowRight,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F7FAF7] px-5 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionBadge>Welcome back</SectionBadge>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#10291C] sm:text-5xl">
            Log in to manage your farm, marketplace, and logistics activity.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#10291C]/70">
            Access your Phosgric dashboard to manage crop scans, product
            listings, buyer activity, logistics requests, and your role-based
            profile.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Crop scan history", Sparkles],
              ["Secure account access", ShieldCheck],
              ["Marketplace activity", Mail],
            ].map(([label, Icon]) => (
              <div
                key={String(label)}
                className="rounded-3xl border border-white/70 bg-white/85 p-4 shadow-[0_16px_45px_rgba(16,41,28,0.08)]"
              >
                <Icon className="h-5 w-5 text-[#1E5E3A]" />
                <p className="mt-3 text-sm font-black text-[#10291C]">
                  {String(label)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-white/70 bg-white/85 p-6 shadow-[0_24px_70px_rgba(16,41,28,0.1)] backdrop-blur sm:p-8">
          <div>
            <h2 className="text-2xl font-black text-[#10291C]">
              Welcome back to Phosgric
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#10291C]/65">
              Log in to manage your scans, listings, marketplace activity, and
              logistics requests.
            </p>
          </div>

          <form className="mt-8 grid gap-5">
            <label className="block">
              <span className="text-sm font-black text-[#10291C]">
                Email address
              </span>
              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 shadow-sm">
                <Mail className="h-4 w-4 text-[#1E5E3A]" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/35"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-black text-[#10291C]">
                Password
              </span>
              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 shadow-sm">
                <LockKeyhole className="h-4 w-4 text-[#1E5E3A]" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/35"
                />
              </div>
            </label>

            <div className="flex items-center justify-between gap-4 text-sm">
              <label className="flex items-center gap-2 font-semibold text-[#10291C]/65">
                <input type="checkbox" className="h-4 w-4 accent-[#1E5E3A]" />
                Remember me
              </label>

              <Link href="/login" className="font-black text-[#1E5E3A]">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full" type="submit" icon={<ArrowRight className="h-4 w-4" />}>
              Login
            </Button>

            <p className="text-center text-sm font-semibold text-[#10291C]/60">
              New to Phosgric?{" "}
              <Link href="/register" className="font-black text-[#1E5E3A]">
                Create an account
              </Link>
            </p>

            <p className="text-center text-xs leading-6 text-[#10291C]/50">
              Frontend-only preview. Firebase authentication will be connected
              in the next development phase.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
