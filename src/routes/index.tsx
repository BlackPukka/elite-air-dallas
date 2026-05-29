import { createFileRoute } from "@tanstack/react-router";
import {
  Nav, Hero, ZipChecker, SocialProof, Services, Calculator, Timeline,
  Gallery, Portal, Booking, Academy, Referral, Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Air Dallas — Luxury HVAC, AC Repair & Furnace Service" },
      { name: "description", content: "Dallas' premier luxury HVAC, AC repair, and furnace service. Same-day response, 10-year warranties, white-glove installs across Dallas, Plano, Highland Park & beyond." },
      { name: "keywords", content: "Dallas HVAC near me, Dallas AC repair, Dallas furnace repair, luxury HVAC Dallas, HVAC installation Dallas, emergency AC Dallas" },
      { property: "og:title", content: "Elite Air Dallas — Luxury HVAC & AC Service" },
      { property: "og:description", content: "Premium HVAC, AC repair & furnace service for Dallas' finest homes. 24/7 emergency response." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        name: "Elite Air Dallas",
        image: "/og-image.jpg",
        telephone: "+1-214-555-0142",
        address: { "@type": "PostalAddress", streetAddress: "2424 N Pearl St", addressLocality: "Dallas", addressRegion: "TX", postalCode: "75201", addressCountry: "US" },
        areaServed: "Dallas, TX",
        priceRange: "$$$",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2847" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <ZipChecker />
      <SocialProof />
      <Services />
      <Calculator />
      <Timeline />
      <Gallery />
      <Portal />
      <Booking />
      <Academy />
      <Referral />
      <Footer />
    </main>
  );
}
