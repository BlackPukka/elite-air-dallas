import { useEffect, useMemo, useRef, useState } from "react";
import {
  Phone, MessageCircle, MapPin, ShieldCheck, Star, Award, Clock,
  Snowflake, Flame, Wind, Wrench, CheckCircle2, PlayCircle, Calendar, Sparkles,
  Download, Share2, GraduationCap, Gift, Users, BadgeCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-hvac.jpg";
import acImg from "@/assets/service-ac.jpg";
import furnaceImg from "@/assets/service-furnace.jpg";
import smartImg from "@/assets/service-smart.jpg";
import { ThemeToggle } from "./ThemeToggle";

const PHONE = "(214) 555-0142";
const WHATSAPP = "https://wa.me/12145550142?text=Hi%20Elite%20Air%20Dallas";

/* -------------------- NAV -------------------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Services", "#services"],
    ["Pricing", "#pricing"],
    ["Process", "#process"],
    ["Reviews", "#reviews"],
    ["Academy", "#academy"],
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? "glass border-b border-border py-2" : "py-4"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="size-9 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
            <Wind className="size-5 text-navy" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg">Elite Air</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-gold -mt-0.5">Dallas</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-2 text-sm font-medium">
            <Phone className="size-4 text-gold" /> {PHONE}
          </a>
          <a href="#booking" className="btn-elite is-primary h-10 px-5 text-sm">
            Book
          </a>
        </div>
      </div>
    </header>
  );
}

/* -------------------- HERO -------------------- */
export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Luxury HVAC technician installing premium air conditioning system in a Dallas home" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/5 backdrop-blur text-xs uppercase tracking-[0.2em] text-gold mb-7">
            <ShieldCheck className="size-3.5" /> Dallas' #1 Rated Luxury HVAC
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
            Perfect comfort,
            <br />
            <span className="text-gradient-gold italic">flawlessly engineered.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-white/75 leading-relaxed">
            White-glove HVAC, AC repair & furnace service for Dallas' finest homes. Same-day response. 10-year warranties. Zero surprises — guaranteed.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#booking" className="btn-elite is-primary h-14 px-7 text-base">
              <Calendar className="size-5" /> Book Service Now
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-elite is-ghost h-14 px-7 text-white text-base">
              <MessageCircle className="size-5" /> WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2"><Clock className="size-4 text-gold" /> 24/7 Emergency</div>
            <div className="flex items-center gap-2"><Award className="size-4 text-gold" /> 10-Yr Warranty</div>
            <div className="flex items-center gap-2"><Star className="size-4 text-gold fill-gold" /> 4.9 · 2,847 reviews</div>
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 gradient-gold opacity-20 blur-3xl rounded-3xl" />
            <div className="relative bg-card/90 backdrop-blur rounded-3xl border border-border p-7 shadow-luxe animate-float">
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Live Dispatch</div>
              <div className="text-3xl font-display font-bold">38 min</div>
              <div className="text-sm text-muted-foreground">average arrival across Dallas County</div>
              <div className="mt-5 space-y-3">
                {[
                  ["Highland Park", "12 min away"],
                  ["Uptown", "18 min away"],
                  ["Plano", "24 min away"],
                ].map(([n, t]) => (
                  <div key={n} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2"><MapPin className="size-4 text-gold" /> {n}</div>
                    <span className="text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 h-1 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-1/3 shimmer-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ZIP CHECKER -------------------- */
const SERVED = ["75201","75202","75204","75205","75206","75214","75219","75225","75230","75240","75248","75252","75024","75093","75080","76092"];
export function ZipChecker() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<null | "yes" | "no">(null);
  const check = () => {
    if (!/^\d{5}$/.test(zip)) return;
    setResult(SERVED.includes(zip) ? "yes" : "no");
  };
  return (
    <section className="py-24 md:py-32 md:py-40 -mt-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-2xl gradient-navy p-10 md:p-14 shadow-luxe text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-4">Service Area Check</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">Are we in your neighborhood?</h3>
              <p className="text-white/65 mt-3 text-sm md:text-base max-w-md">Enter your Dallas zip — get instant availability.</p>
            </div>
            <div className="flex gap-3 items-center">
              <input
                value={zip}
                onChange={(e) => { setZip(e.target.value.slice(0,5)); setResult(null); }}
                placeholder="75201"
                inputMode="numeric"
                aria-label="Zip code"
                className="h-12 w-36 rounded-md bg-white/[0.04] border border-white/10 px-5 text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold/50 focus:bg-white/[0.06]"
              />
              <button onClick={check} className="btn-elite is-primary h-12 px-7">Check</button>
            </div>
          </div>
          {result && (
            <div className={`mt-8 rounded-md p-4 border ${result === "yes" ? "bg-emerald-500/10 border-emerald-400/25" : "bg-amber-500/10 border-amber-400/25"} animate-fade-up`}>
              {result === "yes" ? (
                <div className="flex items-center gap-2 text-emerald-200"><CheckCircle2 className="size-5" /> You're in our priority zone — same-day service available.</div>
              ) : (
                <div className="text-amber-100">We may still serve {zip}. Call {PHONE} to confirm coverage.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



/* -------------------- SOCIAL PROOF -------------------- */
function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function SocialProof() {
  const stats = [
    { n: 12847, s: "+", label: "Homes Serviced" },
    { n: 4.9, s: "★", label: "Google Rating", decimal: true },
    { n: 38, s: " min", label: "Avg Response" },
    { n: 24, s: "/7", label: "Always Available" },
  ];
  return (
    <section className="py-20 md:py-24 border-y border-border bg-muted/30">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
              {s.decimal ? s.n.toFixed(1) : <Counter end={s.n} />}
              <span className="text-3xl">{s.s}</span>
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */
const SERVICES = [
  { icon: Snowflake, title: "AC Repair & Install", img: acImg, copy: "Premium cooling systems engineered for Texas summers. SEER 16–22 installs with lifetime labor on select brands.", price: "From $89" },
  { icon: Flame, title: "Furnace Service", img: furnaceImg, copy: "Gas and electric furnace tune-ups, repairs and full replacements. Same-day ignitor & blower service.", price: "From $79" },
  { icon: Sparkles, title: "Smart Climate", img: smartImg, copy: "Nest, Ecobee and zoned smart-home integrations. App-controlled comfort, room-by-room.", price: "From $349" },
];
export function Services() {
  return (
    <section id="services" className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Services</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">Everything your home's air needs — done beautifully.</h2>
        </div>
        <div className="space-y-28 md:space-y-32">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-4 gradient-gold opacity-20 blur-3xl rounded-3xl" />
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="relative rounded-3xl shadow-luxe w-full h-[420px] object-cover" />
              </div>
              <div>
                <div className="size-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold mb-6">
                  <s.icon className="size-7 text-navy" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">{s.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{s.copy}</p>
                <div className="flex items-center gap-6">
                  <span className="text-gold font-semibold text-lg">{s.price}</span>
                  <a href="#booking" className="inline-flex items-center gap-1.5 font-semibold border-b border-gold/40 hover:border-gold pb-1">
                    Book this service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PRICING CALCULATOR -------------------- */
export function Calculator() {
  const [size, setSize] = useState(3);
  const [freq, setFreq] = useState("oneoff");
  const [addons, setAddons] = useState<Record<string, boolean>>({ filter: false, uv: false, duct: false, smart: false });

  const estimate = useMemo(() => {
    let base = 350 + size * 850;
    if (freq === "annual") base *= 1.08;
    if (freq === "biannual") base *= 1.15;
    let add = 0;
    if (addons.filter) add += 180;
    if (addons.uv) add += 420;
    if (addons.duct) add += 650;
    if (addons.smart) add += 380;
    return Math.round(base + add);
  }, [size, freq, addons]);

  const exportPdf = () => {
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(`<html><head><title>Elite Air Estimate</title><style>body{font-family:Georgia,serif;padding:48px;color:#1a2238}h1{color:#c9a84c}hr{border:none;border-top:1px solid #ddd;margin:24px 0}</style></head><body>
      <h1>Elite Air Dallas — Estimate</h1><p>${new Date().toLocaleDateString()}</p><hr/>
      <p><b>System size:</b> ${size} ton</p>
      <p><b>Service plan:</b> ${freq}</p>
      <p><b>Add-ons:</b> ${Object.entries(addons).filter(([,v])=>v).map(([k])=>k).join(", ") || "None"}</p>
      <h2 style="color:#1a2238">Estimated total: $${estimate.toLocaleString()}</h2>
      <p style="color:#888;font-size:12px">Final pricing confirmed after on-site assessment. ${PHONE}</p>
    </body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 250);
  };
  const shareWa = () => {
    const text = `Elite Air estimate: $${estimate.toLocaleString()} — ${size} ton system, ${freq} plan.`;
    window.open(`${WHATSAPP.replace("Hi%20Elite%20Air%20Dallas", encodeURIComponent(text))}`, "_blank");
  };

  return (
    <section id="pricing" className="py-32 md:py-40 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Instant Pricing</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Build your estimate in 30 seconds.</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-card rounded-3xl border border-border p-8 shadow-luxe">
            <div className="mb-8">
              <label className="text-sm font-semibold mb-3 block">System size: <span className="text-gold">{size} ton</span></label>
              <input type="range" min={2} max={6} step={0.5} value={size} onChange={(e) => setSize(+e.target.value)} className="w-full accent-[oklch(0.78_0.13_85)]" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>2t · small</span><span>6t · estate</span></div>
            </div>
            <div className="mb-8">
              <label className="text-sm font-semibold mb-3 block">Service plan</label>
              <div className="grid grid-cols-3 gap-2">
                {[["oneoff","One-time"],["annual","Annual"],["biannual","Bi-annual"]].map(([v,l]) => (
                  <button key={v} onClick={() => setFreq(v)} className={`btn-elite is-ghost h-12 text-sm ${freq===v?"!bg-[color-mix(in_oklab,var(--color-gold)_10%,transparent)] !shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-gold)_45%,transparent)] text-foreground":"text-muted-foreground"}`}>{l}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold mb-3 block">Add-ons</label>
              <div className="grid sm:grid-cols-2 gap-2">
                {[["filter","Premium filter +$180"],["uv","UV purification +$420"],["duct","Duct sealing +$650"],["smart","Smart thermostat +$380"]].map(([k,l]) => (
                  <button key={k} onClick={() => setAddons((a) => ({...a, [k]: !a[k]}))} className={`btn-elite is-ghost h-12 text-sm justify-start px-4 ${addons[k]?"!bg-[color-mix(in_oklab,var(--color-gold)_10%,transparent)] !shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-gold)_45%,transparent)]":""}`}>
                    {addons[k] ? <CheckCircle2 className="size-4 text-gold" /> : <div className="size-4 rounded-sm border border-white/20" />}
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 gradient-navy rounded-3xl p-8 text-white shadow-luxe relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Live Estimate</div>
              <div className="font-display text-6xl font-bold text-gradient-gold mb-2">${estimate.toLocaleString()}</div>
              <div className="text-white/70 text-sm mb-8">All-in price · parts, labor, 10-yr warranty included</div>
              <div className="space-y-3">
                <button onClick={exportPdf} className="w-full btn-elite is-primary h-12"><Download className="size-4"/> Export PDF</button>
                <button onClick={shareWa} className="w-full btn-elite is-ghost h-12 text-white"><Share2 className="size-4"/> Share via WhatsApp</button>
                <a href="#booking" className="w-full btn-elite is-ghost h-12 text-white">Lock this price</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- TIMELINE -------------------- */
export function Timeline() {
  const steps = [
    { t: "Book online", d: "Pick a 2-hour window. Confirmation in 60 seconds.", icon: Calendar },
    { t: "Tech dispatched", d: "Track your technician live. Average 38 min arrival.", icon: MapPin },
    { t: "Diagnose & quote", d: "Flat-rate pricing. Zero surprises. Approve before any work.", icon: ShieldCheck },
    { t: "Premium service", d: "White-glove install. Shoe covers. Spotless cleanup.", icon: Sparkles },
    { t: "Lifetime support", d: "10-yr warranty, free annual checkup, priority hotline.", icon: BadgeCheck },
  ];
  return (
    <section id="process" className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">What to expect</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">The Elite Air experience.</h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 gap-8 items-center ${i%2 ? "md:[&>*:first-child]:order-2 md:[&>*:first-child]:text-left md:text-right" : ""}`}>
                <div className={`pl-16 md:pl-0 ${i%2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Step {i+1}</div>
                  <h3 className="font-display text-2xl font-bold mb-2">{s.t}</h3>
                  <p className="text-muted-foreground">{s.d}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 size-12 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                  <s.icon className="size-5 text-navy" />
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- GALLERY + VIDEO TESTIMONIALS -------------------- */
const TESTIMONIALS = [
  { name: "Margaret H.", area: "Highland Park", quote: "Replaced our entire system in one day. The crew was immaculate — booties, blankets, the works. Worth every penny.", rating: 5 },
  { name: "David & Linh K.", area: "Plano", quote: "Called at 11pm. Tech was here by midnight. Cool air by 1am. Unreal service at any price point.", rating: 5 },
  { name: "James Whitfield", area: "Preston Hollow", quote: "Third HVAC company we tried. Should have been the first. Honest, fast, premium work.", rating: 5 },
];
export function Gallery() {
  const [i, setI] = useState(0);
  return (
    <section id="reviews" className="py-32 md:py-40 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Stories</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Dallas families, in their own words.</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-luxe group cursor-pointer">
            <img src={acImg} alt="Customer video testimonial" loading="lazy" width={1024} height={576} className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-navy opacity-50 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-20 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform shadow-luxe">
                <PlayCircle className="size-10 text-navy" />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 text-white">
              <div className="text-xs uppercase tracking-[0.2em] text-gold">Featured story</div>
              <div className="font-display text-xl font-bold">The Hendersons · Highland Park</div>
            </div>
          </div>
          <div>
            <div className="bg-card rounded-3xl p-8 border border-border shadow-luxe">
              <div className="flex gap-1 mb-4">
                {Array.from({length: TESTIMONIALS[i].rating}).map((_, k) => <Star key={k} className="size-5 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-2xl leading-snug italic mb-6">"{TESTIMONIALS[i].quote}"</p>
              <div className="font-semibold">{TESTIMONIALS[i].name}</div>
              <div className="text-sm text-muted-foreground">{TESTIMONIALS[i].area}</div>
            </div>
            <div className="flex gap-2 mt-5">
              {TESTIMONIALS.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k===i ? "w-10 bg-gold" : "w-5 bg-border"}`} aria-label={`Story ${k+1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CLIENT PORTAL TEASER -------------------- */
export function Portal() {
  const [email, setEmail] = useState("");
  const [demo, setDemo] = useState(false);
  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Client Portal</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">Your home's HVAC, on a single dashboard.</h2>
          <p className="text-muted-foreground text-lg mb-8">Track service history, warranty status, smart thermostat data, and your next maintenance visit. White-glove transparency.</p>
          <ul className="space-y-3 mb-8">
            {["Live system health scores","One-tap reschedule","Maintenance records & PDFs","Family member access controls"].map(t => (
              <li key={t} className="flex items-center gap-3"><CheckCircle2 className="size-5 text-gold" /> {t}</li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 gradient-gold opacity-15 blur-3xl rounded-3xl" />
          <div className="relative bg-card rounded-3xl border border-border shadow-luxe overflow-hidden">
            {!demo ? (
              <div className="p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Try the demo</div>
                <h3 className="font-display text-2xl font-bold mb-5">Live Portal Login</h3>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@home.com" className="w-full h-12 rounded-xl bg-muted px-4 mb-3 outline-none focus:ring-2 focus:ring-gold" />
                <input type="password" placeholder="••••••••" defaultValue="demo1234" className="w-full h-12 rounded-xl bg-muted px-4 mb-4 outline-none focus:ring-2 focus:ring-gold" />
                <button onClick={() => setDemo(true)} className="w-full btn-elite is-primary h-12">Enter live demo</button>
                <div className="text-xs text-muted-foreground mt-3 text-center">Demo pre-filled · click to enter</div>
              </div>
            ) : (
              <div className="p-8 animate-fade-up">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs text-muted-foreground">Welcome back</div>
                    <div className="font-display text-xl font-bold">The Henderson Residence</div>
                  </div>
                  <div className="size-10 rounded-full gradient-gold flex items-center justify-center text-navy font-bold">H</div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="rounded-2xl bg-muted p-4">
                    <div className="text-xs text-muted-foreground">System health</div>
                    <div className="font-display text-3xl font-bold text-emerald-500">98%</div>
                  </div>
                  <div className="rounded-2xl bg-muted p-4">
                    <div className="text-xs text-muted-foreground">Next visit</div>
                    <div className="font-display text-3xl font-bold">Mar 14</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-muted p-4 text-sm">
                  <div className="flex items-center justify-between mb-2"><span className="text-muted-foreground">Warranty</span><span className="text-gold font-semibold">Active · 7y left</span></div>
                  <div className="flex items-center justify-between"><span className="text-muted-foreground">Last service</span><span>Feb 2 · Tune-up</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- BOOKING FORM -------------------- */
export function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "AC Repair", when: "ASAP", notes: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
  };
  return (
    <section id="booking" className="py-32 md:py-40 gradient-navy text-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Book Service</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">Comfort, on the way.</h2>
          <p className="text-white/75 text-lg mb-8">Submit below and we'll text you a confirmation in under 60 seconds, plus a live tech ETA the morning of your visit.</p>
          <div className="space-y-4">
            {[
              ["Smart follow-up", "SMS + email reminders so nothing slips."],
              ["Concierge intake", "A human reviews every request within minutes."],
              ["Priority routing", "VIP members jump the queue automatically."],
            ].map(([t,d]) => (
              <div key={t} className="flex gap-4">
                <div className="size-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0"><Sparkles className="size-5 text-gold" /></div>
                <div><div className="font-semibold">{t}</div><div className="text-white/65 text-sm">{d}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/[0.04] backdrop-blur border border-white/15 rounded-3xl p-8 shadow-luxe">
          {sent ? (
            <div className="text-center py-12 animate-fade-up">
              <div className="size-16 rounded-full gradient-gold mx-auto flex items-center justify-center mb-5"><CheckCircle2 className="size-8 text-navy" /></div>
              <h3 className="font-display text-3xl font-bold mb-2">Booking received.</h3>
              <p className="text-white/70">Confirmation texted to {form.phone}. Our concierge will reach out shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" className="h-12 rounded-xl bg-white/10 border border-white/15 px-4 placeholder:text-white/40 outline-none focus:border-gold" />
                <input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone" className="h-12 rounded-xl bg-white/10 border border-white/15 px-4 placeholder:text-white/40 outline-none focus:border-gold" />
              </div>
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email (optional)" className="w-full h-12 rounded-xl bg-white/10 border border-white/15 px-4 placeholder:text-white/40 outline-none focus:border-gold" />
              <div className="grid sm:grid-cols-2 gap-4">
                <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} className="h-12 rounded-xl bg-white/10 border border-white/15 px-4 outline-none focus:border-gold">
                  {["AC Repair","AC Install","Furnace Service","Maintenance Plan","Smart Thermostat","Other"].map(o => <option key={o} className="bg-navy">{o}</option>)}
                </select>
                <select value={form.when} onChange={e=>setForm({...form,when:e.target.value})} className="h-12 rounded-xl bg-white/10 border border-white/15 px-4 outline-none focus:border-gold">
                  {["ASAP","Today","Tomorrow","This week","Schedule later"].map(o => <option key={o} className="bg-navy">{o}</option>)}
                </select>
              </div>
              <textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Briefly describe what's going on…" rows={4} className="w-full rounded-xl bg-white/10 border border-white/15 p-4 placeholder:text-white/40 outline-none focus:border-gold" />
              <button type="submit" className="w-full btn-elite is-primary h-14 text-base">
                Confirm booking
              </button>
              <div className="text-xs text-white/50 text-center">By submitting, you agree to text/email follow-ups. Unsubscribe anytime.</div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ACADEMY -------------------- */
const ARTICLES = [
  { t: "How often should you replace your air filter?", c: "The 30-day rule is outdated. Here's a smarter schedule based on home size, pets, and allergies.", read: "4 min" },
  { t: "SEER 14 vs SEER 22 — what's actually worth it?", c: "We modeled 8 Dallas homes. The break-even might surprise you.", read: "6 min" },
  { t: "Why your AC freezes (and how to fix it tonight)", c: "Three causes, three fixes — and when to stop DIYing.", read: "5 min" },
];
export function Academy() {
  return (
    <section id="academy" className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3 flex items-center gap-2"><GraduationCap className="size-4" /> Maintenance Academy</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Become a smarter homeowner.</h2>
          </div>
          <a href="#" className="text-gold font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">All articles</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => (
            <article key={i} className="group rounded-3xl border border-border bg-card p-7 hover:shadow-luxe hover:border-gold/40 transition-all">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{a.read} read</div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-gold transition-colors">{a.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{a.c}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold">Read more</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- REFERRAL -------------------- */
export function Referral() {
  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl gradient-navy p-10 md:p-14 text-white relative overflow-hidden shadow-luxe">
          <div className="absolute top-0 right-0 size-80 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3 flex items-center gap-2"><Gift className="size-4" /> Refer a neighbor</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Give $100. Get $100.</h2>
              <p className="text-white/75 max-w-xl">Send a friend your referral link. When they book their first service, you both get a credit toward your next visit or maintenance plan.</p>
            </div>
            <a href="#booking" className="btn-elite is-primary h-14 px-8 self-start whitespace-nowrap"><Users className="size-5" /> Get my link</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="size-10 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
                <Wind className="size-5 text-navy" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">Elite Air</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold -mt-0.5">Dallas</div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">Luxury HVAC, AC repair, and furnace service for Dallas' finest homes. Licensed · Insured · TACL #B12847</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Services</div>
            <ul className="space-y-2 text-sm text-white/75">
              {["AC Repair","AC Installation","Furnace Service","Smart Climate","Maintenance Plans","Indoor Air Quality"].map(s => <li key={s}><a href="#services" className="hover:text-gold">{s}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-2"><Phone className="size-4 text-gold shrink-0 mt-0.5" /> {PHONE}</li>
              <li className="flex gap-2"><MapPin className="size-4 text-gold shrink-0 mt-0.5" /> 2424 N Pearl St, Dallas, TX 75201</li>
              <li className="flex gap-2"><Clock className="size-4 text-gold shrink-0 mt-0.5" /> 24/7 emergency · M–F 7am–7pm office</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Find us</div>
            <div className="rounded-xl overflow-hidden border border-white/15 aspect-video">
              <iframe
                title="Elite Air Dallas location"
                src="https://www.google.com/maps?q=Dallas,TX&output=embed"
                className="w-full h-full grayscale-[40%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Elite Air Dallas. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="/owner" className="hover:text-gold">Owner</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
