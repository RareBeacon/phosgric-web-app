import { ArrowRight, Bot, Clock3, ListChecks, MapPin, ScanSearch, Truck, Users, Store } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

const problemCards = [
  { icon: ScanSearch, title: "Late crop diagnosis", description: "Disease signals are often identified when treatment options are already expensive or ineffective." },
  { icon: ListChecks, title: "Poor transaction visibility", description: "There is limited visibility into listing status, buyer intent, and supply movement." },
  { icon: Truck, title: "Unreliable logistics", description: "Good produce can lose value quickly when transport is slow, uncertain, or fragmented." },
  { icon: Users, title: "Weak buyer access", description: "Serious buyers and serious farmers struggle to discover each other at the right time." },
  { icon: MapPin, title: "Fragmented market information", description: "Critical crop, pricing, and demand signals are spread across disconnected channels." },
  { icon: Clock3, title: "Slow decision cycles", description: "Delay from observation to action reduces harvest value and trust." },
];

const solutionCards = [
  { icon: Bot, title: "AI-powered crop scan", description: "Detect possible crop stress early and guide the next practical action." },
  { icon: Users, title: "Farmer & seller profiles", description: "Build trust with identity, role context, and activity history." },
  { icon: Store, title: "Direct marketplace", description: "List produce clearly and connect with ready buyers faster." },
  { icon: ListChecks, title: "Buyer request system", description: "Buyers can post demand and attract matching supply quickly." },
  { icon: Truck, title: "Logistics request platform", description: "Arrange pickups and deliveries directly from active trade workflows." },
  { icon: Clock3, title: "Scan & listing history", description: "Turn every scan, listing, and request into useful farm intelligence." },
];

const marketplaceItems = [
  { name: "Fresh Cassava", location: "Ogbomoso, Oyo", quantity: "24 bags", price: "₦38,000 / bag", sellerType: "Verified farmer" },
  { name: "White Maize", location: "Ibadan, Oyo", quantity: "18 tons", price: "₦310,000 / ton", sellerType: "Cooperative seller" },
  { name: "Yam Tubers", location: "Iseyin, Oyo", quantity: "320 tubers", price: "₦1,800 / tuber", sellerType: "Market wholesaler" },
  { name: "Tomatoes", location: "Ogbomoso, Oyo", quantity: "86 crates", price: "₦22,500 / crate", sellerType: "Farm aggregator" },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl pt-8 sm:pt-10 lg:pt-14">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center" delayMs={50}>
          <div>
            <SectionBadge>Investor-ready agritech product</SectionBadge>
            <h1 className="mt-6 text-4xl font-semibold text-[color:#10291C] sm:text-5xl lg:text-6xl">AI Farm Intelligence, Direct Marketplace &amp; Agro-Logistics for African Farmers</h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:#10291C]/80">Phosgric helps farmers detect crop problems early, list produce with confidence, connect with serious buyers, and move farm products faster through one intelligent agriculture platform.</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/register" size="lg">
                Create Account
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/scan" variant="secondary" size="lg">
                Scan Crop
              </Button>
              <Button href="/marketplace" variant="secondary" size="lg">
                Browse Marketplace
              </Button>
            </div>
          </div>

          <div className="relative min-h-[420px] rounded-2xl border bg-white p-5 shadow-md">
            <div className="absolute left-4 top-6 w-[68%] rounded-2xl border bg-white p-4"> 
              <p className="text-xs font-semibold text-[color:#1E5E3A]/70">AI crop scan preview</p>
              <p className="mt-2 text-base font-semibold text-[color:#10291C]">Possible leaf stress detected</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20" delayMs={80}>
          <SectionBadge>The Problem</SectionBadge>
          <h2 className="mt-4 text-3xl font-semibold text-[color:#10291C]">Farmers need information, trust, pricing power, and movement.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {problemCards.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="solution" className="mt-20" delayMs={100}>
          <SectionBadge>The Solution</SectionBadge>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {solutionCards.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20" delayMs={120}>
          <SectionBadge>Marketplace preview</SectionBadge>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {marketplaceItems.map((item) => (
              <article key={item.name} className="rounded-lg border bg-white p-4">
                <h3 className="text-lg font-semibold text-[color:#10291C]">{item.name}</h3>
                <p className="text-sm mt-1 text-[color:#10291C]/75">{item.location}</p>
                <div className="mt-3 text-sm">
                  <p>{item.quantity}</p>
                  <p>{item.price}</p>
                </div>
                <Button href="/marketplace" variant="secondary" className="mt-3">View Listing</Button>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
