import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Elite Air Dallas" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <Link to="/" className="text-sm text-gold hover:underline">
          ← Back to site
        </Link>
        <h1 className="font-display text-4xl font-bold mt-6 mb-4">Terms of Service</h1>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Estimates shown on this website are preliminary and subject to on-site inspection. Final
          pricing is confirmed before work begins. Emergency and same-day availability depends on
          technician routing and service area.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          By submitting a booking request, you consent to receive text messages and emails related
          to scheduling, dispatch updates, and service follow-up. You may opt out of marketing
          messages at any time.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Warranty terms vary by equipment manufacturer and install scope. Your technician will
          review applicable coverage before checkout.
        </p>
      </div>
    </main>
  );
}
