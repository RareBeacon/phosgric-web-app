import {
  ArrowRight,
  Filter,
  MapPin,
  Search,
  ShoppingBasket,
  Store,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";

const listings = [
  {
    name: "Fresh Cassava",
    location: "Ogbomoso North",
    quantity: "2.5 tons",
    price: "Price on request",
    seller: "Verified farmer",
  },
  {
    name: "White Maize",
    location: "Surulere LGA",
    quantity: "40 bags",
    price: "Price on request",
    seller: "Farm seller",
  },
  {
    name: "Yam Tubers",
    location: "Oriire",
    quantity: "120 tubers",
    price: "Price on request",
    seller: "Local aggregator",
  },
  {
    name: "Tomatoes",
    location: "Ogbomoso South",
    quantity: "35 crates",
    price: "Price on request",
    seller: "Produce seller",
  },
];

const categories = ["All", "Cassava", "Maize", "Yam", "Tomatoes", "Vegetables"];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#F7FAF7] px-5 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionBadge>Produce marketplace</SectionBadge>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#10291C] sm:text-5xl">
              Browse available farm produce from local sellers.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#10291C]/70">
              Phosgric helps buyers discover available produce with clear crop
              details, location, quantity, seller type, and logistics readiness
              before starting a transaction.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/marketplace/new" icon={<Store className="h-4 w-4" />}>
                List Product
              </Button>
              <Button href="/logistics" variant="outline" icon={<Truck className="h-4 w-4" />}>
                Request Logistics
              </Button>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/85 p-5 shadow-[0_24px_70px_rgba(16,41,28,0.1)] backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <div className="flex items-center gap-3 rounded-2xl border border-[#1E5E3A]/10 bg-[#F7FAF7] px-4 py-3">
                <Search className="h-5 w-5 text-[#1E5E3A]" />
                <input
                  placeholder="Search cassava, maize, yam..."
                  className="w-full bg-transparent text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/40"
                />
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1E5E3A] px-5 py-3 text-sm font-black text-white">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-[#E8F5EA] px-4 py-2 text-xs font-black text-[#1E5E3A]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {listings.map((item) => (
            <article
              key={item.name}
              className="group rounded-[30px] border border-white/70 bg-white/85 p-5 shadow-[0_18px_55px_rgba(16,41,28,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(16,41,28,0.13)]"
            >
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-[#E8F5EA] text-[#1E5E3A] transition group-hover:bg-[#1E5E3A] group-hover:text-white">
                <ShoppingBasket className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-xl font-black text-[#10291C]">
                {item.name}
              </h2>

              <div className="mt-3 space-y-2 text-sm font-semibold text-[#10291C]/65">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#6BBF21]" />
                  {item.location}
                </p>
                <p>Quantity: {item.quantity}</p>
                <p>{item.price}</p>
                <p>{item.seller}</p>
              </div>

              <Button
                href="/marketplace"
                variant="outline"
                className="mt-5 w-full"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                View Listing
              </Button>
            </article>
          ))}
        </div>

        <section className="mt-14 grid gap-5 rounded-[36px] bg-[#10291C] p-6 text-white shadow-[0_30px_80px_rgba(16,41,28,0.18)] sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9FE870]">
              Buyer requests
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Looking for a specific crop or quantity?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              Buyers will soon be able to post demand for specific crops,
              preferred locations, quantities, delivery timelines, and budget
              ranges so sellers can respond with available supply.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-5">
            <p className="text-sm font-black text-[#9FE870]">
              Example request
            </p>
            <p className="mt-3 text-lg font-black">
              Need 50 bags of white maize
            </p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Preferred location: Ogbomoso or Ibadan axis. Delivery required
              within 5 days.
            </p>
            <Button href="/register" variant="secondary" className="mt-5">
              Join as Buyer
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}
