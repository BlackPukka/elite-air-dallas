import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Elite Air Dallas" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <Link to="/" className="text-sm text-gold hover:underline">
          ← Back to site
        </Link>
        <h1 className="font-display text-4xl font-bold mt-6 mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Elite Air Dallas collects contact information you submit through our booking form to
          schedule service, send confirmations, and follow up about your request. We do not sell
          your personal information.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Service requests are stored securely on our servers and may be forwarded to our dispatch
          team or integrated webhook systems configured by the business owner.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Questions? Call{" "}
          <a href="tel:+12145550142" className="text-gold">
            (214) 555-0142
          </a>
          .
        </p>
      </div>
    </main>
  );
}
