import {
  ArrowRight,
  Calendar,
  ImageUp,
  MapPin,
  Package,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function NewListingPage() {
  return (
    <main className="min-h-screen bg-[#F7FAF7] px-5 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionBadge>List produce</SectionBadge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#10291C] sm:text-5xl">
            Create a produce listing buyers can understand quickly.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#10291C]/70">
            Add product details, quantity, location, harvest timing, and images
            so buyers can discover available farm supply with better context.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Product details", Package],
              ["Location context", MapPin],
              ["Harvest timing", Calendar],
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

        <div className="rounded-[34px] border border-white/70 bg-white/85 p-6 shadow-[0_24px_75px_rgba(16,41,28,0.1)] backdrop-blur sm:p-8">
          <h2 className="text-2xl font-black text-[#10291C]">
            Product listing form
          </h2>
          <p className="mt-2 text-sm leading-7 text-[#10291C]/65">
            Frontend-only preview. Listings will be saved to the database in the
            next development phase.
          </p>

          <form className="mt-8 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Product name" placeholder="Fresh cassava" />
              <Field label="Category" placeholder="Cassava, maize, yam..." />
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Quantity" placeholder="2.5" />
              <Field label="Unit" placeholder="tons / bags / crates" />
              <Field label="Price" placeholder="Price on request" icon={<Tag className="h-4 w-4" />} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Location" placeholder="Ogbomoso North" icon={<MapPin className="h-4 w-4" />} />
              <Field label="Harvest date" placeholder="2026-06-20" icon={<Calendar className="h-4 w-4" />} />
            </div>

            <label className="block">
              <span className="text-sm font-black text-[#10291C]">
                Description
              </span>
              <textarea
                rows={5}
                placeholder="Describe product quality, harvest timing, pickup details, and buyer notes..."
                className="mt-2 w-full resize-none rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/35"
              />
            </label>

            <div className="grid min-h-[180px] place-items-center rounded-[28px] border-2 border-dashed border-[#6BBF21]/35 bg-[#E8F5EA]/70 p-6 text-center">
              <div>
                <ImageUp className="mx-auto h-8 w-8 text-[#1E5E3A]" />
                <p className="mt-3 font-black text-[#10291C]">
                  Upload product images
                </p>
                <p className="mt-1 text-sm text-[#10291C]/60">
                  Add clear produce photos for buyer confidence.
                </p>
              </div>
            </div>

            <Button type="submit" className="w-full" icon={<ArrowRight className="h-4 w-4" />}>
              Submit Listing
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  placeholder,
  icon,
}: {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#10291C]">{label}</span>
      <div className="mt-2 flex items-center gap-2 rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 shadow-sm">
        {icon ? <span className="text-[#1E5E3A]">{icon}</span> : null}
        <input
          placeholder={placeholder}
          className="w-full bg-transparent text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/35"
        />
      </div>
    </label>
  );
}
