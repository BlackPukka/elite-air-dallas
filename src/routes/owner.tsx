import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, ShieldCheck, TrendingUp, Calendar, DollarSign, Users, Wind } from "lucide-react";
import { verifyOwnerPassphrase } from "@/lib/api/owner.functions";

export const Route = createFileRoute("/owner")({
  head: () => ({
    meta: [
      { title: "Owner Dashboard — Elite Air Dallas" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: OwnerPage,
});

function OwnerPage() {
  const [pwd, setPwd] = useState("");
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const result = await verifyOwnerPassphrase({ data: { passphrase: pwd } });
      if (result.ok) setOk(true);
      else setErr("Incorrect passphrase.");
    } catch {
      setErr("Unable to verify access right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!ok) {
    return (
      <main className="min-h-screen gradient-navy flex items-center justify-center p-6">
        <form
          onSubmit={submit}
          className="w-full max-w-md bg-card rounded-3xl p-8 shadow-luxe border border-border"
        >
          <div className="size-14 rounded-2xl gradient-gold flex items-center justify-center mb-6 shadow-gold">
            <Lock className="size-6 text-navy" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-2">Owner Access</h1>
          <p className="text-muted-foreground text-sm mb-6">
            Private dashboard. Authorized personnel only.
          </p>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Passphrase"
            className="w-full h-12 rounded-xl bg-muted px-4 mb-3 outline-none focus:ring-2 focus:ring-gold"
            autoFocus
          />
          {err && <div className="text-sm text-destructive mb-3">{err}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-elite is-primary h-12 disabled:opacity-60"
          >
            {loading ? "Verifying…" : "Enter"}
          </button>
          <a
            href="/"
            className="block text-center text-xs text-muted-foreground mt-4 hover:text-foreground"
          >
            ← Back to site
          </a>
        </form>
      </main>
    );
  }

  const kpis = [
    { icon: DollarSign, label: "MTD Revenue", value: "$284,720", delta: "+18.4%" },
    { icon: Calendar, label: "Jobs This Week", value: "147", delta: "+22 vs LW" },
    { icon: Users, label: "Active Customers", value: "3,284", delta: "+96" },
    { icon: TrendingUp, label: "Avg Ticket", value: "$1,940", delta: "+6.2%" },
  ];
  const jobs = [
    ["Henderson Residence", "Highland Park", "AC Install", "$8,400", "Today 2:00pm"],
    ["Whitfield Estate", "Preston Hollow", "Maintenance", "$320", "Today 4:30pm"],
    ["Kapoor Family", "Plano", "Emergency Repair", "$890", "Tomorrow 8:00am"],
    ["Morales Home", "Uptown", "Smart Thermostat", "$540", "Tomorrow 11:00am"],
  ];

  return (
    <main className="min-h-screen bg-muted/30">
      <header className="bg-navy text-white">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg gradient-gold flex items-center justify-center">
              <Wind className="size-5 text-navy" />
            </div>
            <div>
              <div className="font-display font-bold">Elite Air · Owner</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">
                Private Dashboard
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <ShieldCheck className="size-4 text-gold" /> Authenticated
            <a href="/" className="ml-4 text-white/70 hover:text-gold">
              Exit
            </a>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-6 py-10">
        <h1 className="font-display text-4xl font-bold mb-1">Good afternoon.</h1>
        <p className="text-muted-foreground mb-8">
          Here's how the business is performing right now.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {kpis.map((k) => (
            <div key={k.label} className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="size-10 rounded-xl gradient-gold flex items-center justify-center">
                  <k.icon className="size-5 text-navy" />
                </div>
                <span className="text-xs text-emerald-500 font-semibold">{k.delta}</span>
              </div>
              <div className="font-display text-3xl font-bold">{k.value}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                {k.label}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="font-display text-xl font-bold">Upcoming Jobs</h2>
          </div>
          <div className="divide-y divide-border">
            {jobs.map((j, i) => (
              <div
                key={i}
                className="grid grid-cols-2 md:grid-cols-5 gap-4 p-5 text-sm items-center hover:bg-muted/40"
              >
                <div className="font-semibold">{j[0]}</div>
                <div className="text-muted-foreground">{j[1]}</div>
                <div>{j[2]}</div>
                <div className="text-gold font-semibold">{j[3]}</div>
                <div className="text-muted-foreground text-right">{j[4]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
