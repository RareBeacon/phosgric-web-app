import {
  Globe2,
  Leaf,
  MapPin,
  ShieldCheck,
  Sprout,
  Truck,
  Users,
} from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Button } from "@/components/ui/Button";

const values = [
  {
    title: "Ogbomoso-first execution",
    description:
      "Phosgric is being shaped around real farming communities before expanding into wider agricultural markets.",
    icon: MapPin,
  },
  {
    title: "AI before trade",
    description:
      "Farmers receive immediate value through crop scanning and farm intelligence before marketplace activity begins.",
    icon: Leaf,
  },
  {
    title: "Market access with movement",
    description:
      "Produce discovery, buyer interest, and logistics requests are designed to work together.",
    icon: Truck,
  },
  {
    title: "Simple pilot onboarding",
    description:
      "Farmers, sellers, buyers, and transporters can start with basic profiles before deeper verification is added later.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7FAF7] px-5 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionBadge>About Phosgric</SectionBadge>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#10291C] sm:text-5xl lg:text-6xl">
              Building a smarter farm-to-market system for African agriculture.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#10291C]/70">
              Phosgric is an AI farm intelligence, produce marketplace, and
              agro-logistics platform helping farmers detect crop problems,
              list produce, connect with buyers, and move farm products faster
              through one connected digital system.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/register">Create Account</Button>
              <Button href="/scan" variant="outline">
                Try Crop Scanner
              </Button>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/70 bg-white/85 p-6 shadow-[0_24px_75px_rgba(16,41,28,0.1)] backdrop-blur sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Farmers", "Crop intelligence and produce listing"],
                ["Sellers", "Product visibility and buyer interest"],
                ["Buyers", "Local supply discovery and requests"],
                ["Transporters", "Route visibility and delivery requests"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl bg-[#F7FAF7] p-5 ring-1 ring-[#1E5E3A]/10"
                >
                  <Users className="h-6 w-6 text-[#1E5E3A]" />
                  <h2 className="mt-4 text-lg font-black text-[#10291C]">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#10291C]/65">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-16">
          <SectionBadge>Why it matters</SectionBadge>
          <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-[#10291C] sm:text-4xl">
            Farmers do not only need buyers. They need information, trust,
            pricing power, and movement.
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-[#10291C]/70">
            Good harvests still lose value when crop issues are diagnosed late,
            pricing information is weak, produce movement is unreliable, and
            buyers cannot easily find serious local supply. Phosgric connects
            these missing pieces into one practical product flow.
          </p>
        </section>

        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </section>

        <section className="mt-16 rounded-[36px] bg-[#10291C] p-6 text-white shadow-[0_30px_80px_rgba(16,41,28,0.18)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Globe2 className="h-10 w-10 text-[#9FE870]" />
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Ogbomoso-first. Built to scale.
              </h2>
            </div>
            <p className="text-sm leading-8 text-white/70">
              The first product goal is to prove repeated farmer usage,
              practical crop scan value, buyer/seller marketplace interest, and
              logistics demand in a focused pilot. From there, Phosgric can
              expand across more agricultural communities and crop categories.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
