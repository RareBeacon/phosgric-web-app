import {
  AlertTriangle,
  Camera,
  CheckCircle2,
  Clock,
  ImageUp,
  Leaf,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

const scanBenefits = [
  {
    title: "Early crop issue detection",
    description:
      "Upload a crop photo and get a structured preview of possible stress, disease, or pest-related symptoms.",
    icon: Leaf,
  },
  {
    title: "Clear next-step guidance",
    description:
      "The scanner is designed to return practical actions farmers can understand before treatment decisions.",
    icon: CheckCircle2,
  },
  {
    title: "Review-ready history",
    description:
      "Every scan will later be saved to the farmer profile so extension support and future recommendations improve.",
    icon: Clock,
  },
];

const history = [
  {
    crop: "Cassava leaf",
    result: "Possible leaf stress",
    severity: "Medium",
    time: "Today",
  },
  {
    crop: "Maize stem",
    result: "Nutrient deficiency pattern",
    severity: "Low",
    time: "Yesterday",
  },
  {
    crop: "Tomato plant",
    result: "Needs clearer photo",
    severity: "Review",
    time: "Last week",
  },
];

export default function ScanPage() {
  return (
    <main className="min-h-screen bg-[#F7FAF7] px-5 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionBadge>AI crop scanner</SectionBadge>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#10291C] sm:text-5xl">
            Scan crop problems before they become harvest losses.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#10291C]/70">
            Phosgric’s crop scanner is designed to help farmers upload plant
            photos, describe symptoms, and receive structured AI-powered crop
            intelligence. Gemini-powered diagnosis will be connected through a
            secure backend in the next development phase.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {scanBenefits.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                className="p-5"
              />
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-white/70 bg-white/85 p-6 shadow-[0_24px_75px_rgba(16,41,28,0.1)] backdrop-blur sm:p-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6BBF21]">
                Scan workspace
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#10291C]">
                Upload crop image
              </h2>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F5EA] text-[#1E5E3A]">
              <Camera className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-6 grid min-h-[260px] place-items-center rounded-[30px] border-2 border-dashed border-[#6BBF21]/35 bg-[#E8F5EA]/70 p-6 text-center">
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-white text-[#1E5E3A] shadow-sm">
                <Upload className="h-7 w-7" />
              </div>
              <p className="mt-4 text-lg font-black text-[#10291C]">
                Drop crop photo here
              </p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#10291C]/60">
                Upload a clear photo of the affected leaf, stem, fruit, or crop
                area for analysis.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-black text-[#10291C]">
                Crop type
              </span>
              <select className="mt-2 w-full rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 text-sm font-semibold text-[#10291C] outline-none">
                <option>Cassava</option>
                <option>Maize</option>
                <option>Yam</option>
                <option>Tomatoes</option>
                <option>Pepper</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-black text-[#10291C]">
                Farm location
              </span>
              <input
                className="mt-2 w-full rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/35"
                placeholder="Ogbomoso North"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-black text-[#10291C]">
              Symptoms note
            </span>
            <textarea
              rows={4}
              className="mt-2 w-full resize-none rounded-2xl border border-[#1E5E3A]/10 bg-white px-4 py-3 text-sm font-semibold text-[#10291C] outline-none placeholder:text-[#10291C]/35"
              placeholder="Describe what you noticed on the crop..."
            />
          </label>

          <Button className="mt-5 w-full" icon={<Sparkles className="h-4 w-4" />}>
            Run AI Scan Preview
          </Button>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[34px] border border-white/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(16,41,28,0.08)] backdrop-blur sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <SectionBadge>Result preview</SectionBadge>
              <h2 className="mt-4 text-3xl font-black text-[#10291C]">
                Possible leaf stress detected
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#10291C]/65">
                This is a frontend preview. In production, the crop image and
                crop context will be sent to Gemini through a secure backend
                function, not directly from the browser.
              </p>
            </div>
            <div className="rounded-full bg-amber-100 px-4 py-2 text-xs font-black text-amber-700">
              Severity: Medium
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Confidence", "Preview"],
              ["Action", "Review crop photo"],
              ["Status", "Backend pending"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-3xl bg-[#F7FAF7] p-4 ring-1 ring-[#1E5E3A]/10"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6BBF21]">
                  {label}
                </p>
                <p className="mt-2 text-lg font-black text-[#10291C]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-[#1E5E3A]/10 bg-[#E8F5EA]/70 p-5">
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[#1E5E3A]" />
              <div>
                <p className="font-black text-[#10291C]">
                  Recommended next step
                </p>
                <p className="mt-2 text-sm leading-7 text-[#10291C]/70">
                  Upload a clearer leaf photo and consult extension support
                  before applying treatment. AI suggestions should support, not
                  replace, expert agronomic review.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[34px] border border-white/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(16,41,28,0.08)] backdrop-blur sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#10291C]">
              Scan history
            </h2>
            <ImageUp className="h-6 w-6 text-[#1E5E3A]" />
          </div>

          <div className="mt-6 space-y-4">
            {history.map((item) => (
              <div
                key={`${item.crop}-${item.time}`}
                className="rounded-3xl bg-[#F7FAF7] p-4 ring-1 ring-[#1E5E3A]/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-black text-[#10291C]">{item.crop}</p>
                    <p className="mt-1 text-sm text-[#10291C]/60">
                      {item.result}
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#1E5E3A]">
                    {item.severity}
                  </span>
                </div>
                <p className="mt-3 flex items-center gap-2 text-xs font-bold text-[#10291C]/45">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
