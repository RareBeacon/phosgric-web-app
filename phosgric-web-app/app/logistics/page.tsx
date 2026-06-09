import {
  ArrowRight,
  CalendarClock,
  MapPin,
  PackageCheck,
  Route,
  Truck,
  UserRoundCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

const logisticsFeatures = [
  {
    title: "Request delivery",
    description:
      "Farmers, sellers, and buyers can request pickup and delivery support for farm produce.",
    icon: Truck,
  },
  {
    title: "Register routes",
    description:
      "Transporters can show their route coverage, vehicle type, capacity, and availability.",
    icon: Route,
  },
  {
    title: "Track movement readiness",
    description:
      "Every delivery request can be structured around pickup, drop-off, load, date, and status.",
    icon: PackageCheck,
  },
];

const routes = [
  {
    route: "Ogbomoso → Ibadan",
    pickup: "Ogbomoso North",
    dropoff: "Bodija Market, Ibadan",
    load: "2.5 tons cassava",
    vehicle: "Medium truck",
    status: "Available route",
  },
  {
    route: "Farm pickup → Local market",
    pickup: "Oriire farm cluster",
    dropoff: "Ogbomoso central market",
    load: "35 crates tomatoes",
    vehicle: "Small van",
    status: "Same-day movement",
  },
  {
    route: "Seller → Buyer warehouse",
    pickup: "Seller location",
    dropoff: "Buyer warehouse",
    load: "40 bags maize",
    vehicle: "Covered truck",
    status: "Request pending",
  },
];

const transporters = [
  {
    name: "Akin Logistics",
    route: "Ogbomoso, Ibadan, Oyo",
    vehicle: "Medium truck",
    capacity: "3 tons",
  },
  {
    name: "GreenRoute Movers",
    route: "Farm pickup and market delivery",
    vehicle: "Van",
    capacity: "1.2 tons",
  },
  {
    name: "Harvest Haul",
    route: "Warehouse and bulk produce delivery",
    vehicle: "Large truck",
    capacity: "6 tons",
  },
];

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-[#F7FAF7] px-5 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionBadge>Agro-logistics</SectionBadge>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#10291C] sm:text-5xl">
              Move farm produce faster from pickup to buyer destination.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#10291C]/70">
              Phosgric’s logistics layer is designed to connect farmers, sellers,
              buyers, and transporters around clear pickup points, delivery
              destinations, produce load, vehicle type, and availability.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/register" icon={<UserRoundCheck className="h-4 w-4" />}>
                Register as Transporter
              </Button>
              <Button href="/marketplace" variant="outline" icon={<PackageCheck className="h-4 w-4" />}>
                Browse Produce
              </Button>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/70 bg-white/85 p-6 shadow-[0_24px_75px_rgba(16,41,28,0.1)] backdrop-blur sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6BBF21]">
                  Delivery request preview
                </p>
                <h2 className="mt-2 text-2xl font-black text-[#10291C]">
                  Request produce movement
                </h2>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F5EA] text-[#1E5E3A]">
                <Truck className="h-6 w-6" />
              </div>
            </div>

            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Pickup location" placeholder="Ogbomoso North" />
                <Field label="Drop-off location" placeholder="Ibadan market" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Product type" placeholder="Cassava, maize..." />
                <Field label="Load size" placeholder="2.5 tons / 40 bags" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Vehicle type" placeholder="Medium truck" />
                <Field label="Pickup date" placeholder="Tomorrow morning" />
              </div>

              <label className="block">
                <span className="text-sm font-black text-[#10291C]">
                  Delivery note
                </span>
                <textarea
                  rows={4}
                  placeholder="Add handling instructions, market timing, or buyer contact details..."
                  className="mt-2 w-full resize-none rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/35"
                />
              </label>

              <Button type="submit" className="w-full" icon={<ArrowRight className="h-4 w-4" />}>
                Request Logistics
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {logisticsFeatures.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        <section className="mt-14">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionBadge>Route preview</SectionBadge>
              <h2 className="mt-4 text-3xl font-black text-[#10291C] sm:text-4xl">
                Route examples for farm-to-market movement.
              </h2>
            </div>
            <Button href="/register" variant="outline" icon={<Route className="h-4 w-4" />}>
              Join Logistics Network
            </Button>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {routes.map((item) => (
              <article
                key={item.route}
                className="rounded-[30px] border border-white/70 bg-white/85 p-6 shadow-[0_18px_55px_rgba(16,41,28,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(16,41,28,0.13)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F5EA] text-[#1E5E3A]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-[#E8F5EA] px-3 py-1 text-xs font-black text-[#1E5E3A]">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-[#10291C]">
                  {item.route}
                </h3>

                <div className="mt-4 space-y-2 text-sm font-semibold text-[#10291C]/65">
                  <p>Pickup: {item.pickup}</p>
                  <p>Drop-off: {item.dropoff}</p>
                  <p>Load: {item.load}</p>
                  <p>Vehicle: {item.vehicle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[36px] bg-[#10291C] p-6 text-white shadow-[0_30px_80px_rgba(16,41,28,0.18)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9FE870]">
                Transporter network
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Register vehicles, routes, and availability.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Transporters can later receive delivery requests based on route
                coverage, load capacity, and availability status.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {transporters.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[28px] border border-white/10 bg-white/10 p-5"
                >
                  <Truck className="h-6 w-6 text-[#9FE870]" />
                  <h3 className="mt-4 font-black">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.route}
                  </p>
                  <div className="mt-4 space-y-1 text-xs font-bold text-white/55">
                    <p>Vehicle: {item.vehicle}</p>
                    <p>Capacity: {item.capacity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#10291C]">{label}</span>
      <input
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/35"
      />
    </label>
  );
}
