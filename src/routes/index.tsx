import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useId, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  ChevronRight,
  Compass,
  Diamond,
  Gem,
  Handshake,
  Leaf,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { FacetPattern } from "@/components/site/FacetPattern";
import { COUNTRIES, MAP_W, MAP_H, project } from "@/components/site/world-geo";
import { logoMark } from "@/assets/brand";
import diamondsLoose from "@/assets/diamonds-loose.jpg";
import processCutting from "@/assets/process-cutting.jpg";
import processPolish from "@/assets/process-polish.jpg";
import processRough from "@/assets/process-rough.jpg";
import collection from "@/assets/collection.jpg";
import craft from "@/assets/craft.jpg";
import certifiedDiamond from "@/assets/certified-diamond.jpg";
import roughOnLeaf from "@/assets/rough-on-leaf.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import atelierLoupe from "@/assets/atelier-loupe.jpg";
import sortingTray from "@/assets/sorting-tray.jpg";
import polishWheel from "@/assets/polish-wheel.jpg";
import heroTweezers from "@/assets/hero-tweezers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ravi Impex — Nature's Finest Diamonds" },
      {
        name: "description",
        content:
          "Ravi Impex — manufacturer of precision-cut natural round brilliant diamonds since 1991. RJC certified, Kimberley Process compliant and exported to 10+ countries.",
      },
      { property: "og:title", content: "Ravi Impex — Nature's Finest Diamonds" },
      {
        property: "og:description",
        content:
          "Precision-cut natural round diamonds, calibrated to 0.05 mm, for the world's finest jewellery houses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const EASE = [0.22, 1, 0.36, 1] as const;

function Home() {
  return (
    <div className="relative min-h-screen bg-ivory text-charcoal overflow-x-clip">
      <Navbar />
      <Hero />
      <StatsBand />
      <About />
      <Product />
      <ProcessPreview />
      <Pillars />
      <WhyChoose />
      <GlobalExport />
      <Assurance />
      <Engagement />
      <Cta />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
const credentials = [
  { icon: Award, t: "RJC Certified" },
  { icon: Leaf, t: "Kimberley Process" },
  { icon: Diamond, t: "100% Natural" },
  { icon: Gem, t: "Round Brilliant" },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-ivory">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ivory via-ivory/90 to-ivory/40" />
      <div className="absolute inset-0 bg-linear-to-t from-ivory via-transparent to-ivory/30" />
      <div className="hero-orb w-[560px] h-[560px] -top-48 -left-40 bg-gold-soft/40" />
      <div className="hero-orb w-[620px] h-[620px] top-24 -right-52 bg-champagne" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center pt-36 pb-20 lg:pt-40 min-h-[100svh]">
        {/* LEFT — editorial */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.28em] uppercase text-gold"
          >
            <span className="h-px w-10 bg-gold" />
            Natural diamond manufacturer · Since 1991
          </motion.div>

          <h1 className="mt-7 font-display text-[15vw] leading-[0.9] sm:text-8xl lg:text-[7.25rem] xl:text-[8rem] tracking-tight">
            <motion.span initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: EASE }} className="block">
              Nature's finest
            </motion.span>
            <motion.span initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.15, ease: EASE }} className="block italic text-gradient-gold pb-2">
              diamonds.
            </motion.span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="mt-7 max-w-xl text-lg text-charcoal/70 leading-relaxed">
            Precision-cut natural round brilliant diamonds — matched for colour
            and clarity, calibrated to 0.05 mm, and manufactured for the
            world's finest jewellery houses.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55 }} className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-gold text-ivory px-8 py-4 text-sm font-medium hover:bg-charcoal transition shadow-[0_24px_50px_-22px_var(--gold)]">
              Explore our diamonds
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/60 backdrop-blur px-7 py-4 text-sm font-medium text-gold hover:border-gold transition">
              <Send className="h-4 w-4" />
              Request a parcel
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 max-w-xl gap-x-6 gap-y-4 border-t border-gold/15 pt-7"
          >
            {credentials.map((c) => (
              <li key={c.t} className="flex items-center gap-2.5 text-xs font-medium text-charcoal/75">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                  <c.icon className="h-3.5 w-3.5" />
                </span>
                {c.t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT — arched image with brand seal */}
        <div className="lg:col-span-5 relative">
          <motion.div style={{ y }} className="relative mx-auto max-w-md">
            <div className="absolute -inset-8 rounded-t-full bg-gold-soft/30 blur-[70px]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: EASE }}
              className="relative rounded-t-full rounded-b-[2rem] p-2.5 border border-gold/25 bg-white/40 backdrop-blur"
            >
              <img
                src={heroTweezers}
                alt="A natural round brilliant diamond held in tweezers"
                width={1408}
                height={1600}
                fetchPriority="high"
                className="w-full aspect-[4/5] rounded-t-full rounded-b-[1.6rem] object-cover shadow-[0_60px_120px_-50px_var(--charcoal)]"
              />
            </motion.div>

            <BrandSeal className="absolute -top-4 left-0 sm:-left-12" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -right-2 sm:-right-10 bottom-14 glass-card rounded-2xl px-5 py-4 min-w-[190px]"
            >
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Precision-cut rounds</div>
              <dl className="mt-3 space-y-1.5 text-xs">
                {[
                  ["Size", "0.90 – 3.30 mm"],
                  ["Colour", "DEF / GH"],
                  ["Clarity", "IF – VS2"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-charcoal/55">{k}</dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold/70">
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="h-8 w-px bg-gold/40" />
      </div>
    </section>
  );
}

/* Rotating circular seal with the logo mark */
function BrandSeal({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <div className={`h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-ivory shadow-[0_20px_50px_-20px_var(--charcoal)] grid place-items-center ${className}`}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
        <defs>
          <path id={`seal-${id}`} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-gold" fontSize="8.4" fontWeight="500">
          <textPath href={`#seal-${id}`} textLength="284" lengthAdjust="spacing">
            NATURE'S FINEST DIAMONDS · SINCE 1991 ·
          </textPath>
        </text>
      </svg>
      <img src={logoMark} alt="" aria-hidden width={315} height={330} className="h-10 w-10 sm:h-11 sm:w-11 object-contain" />
    </div>
  );
}

/* ---------------- STATS BAND ---------------- */
const footprint = [
  { value: 35, suffix: "", label: "Years of craftsmanship", sub: "1991 – 2026" },
  { value: 75000, suffix: "+", label: "Rough carats", sub: "Manufactured annually" },
  { value: 10, suffix: "+", label: "Countries", sub: "Exported to" },
  { value: 100, suffix: "+", label: "Clients", sub: "Served worldwide" },
];

function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      <FacetPattern className="absolute -right-24 -top-24 h-[420px] w-[420px] text-gold-soft/10" />
      <FacetPattern className="absolute -left-32 -bottom-40 h-[380px] w-[380px] text-gold-soft/[0.07]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {footprint.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className={`px-2 sm:px-6 py-6 lg:py-2 ${i > 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "border-l lg:border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} border-ivory/10`}>
                <div className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none text-gradient-light">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-4 text-sm font-medium text-ivory/90">{s.label}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold-soft/70">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-6">
          <div className="relative pr-10 pb-10 sm:pr-16 sm:pb-16">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_60px_120px_-50px_oklch(0.25_0.03_50/0.45)]">
              <img src={collection} alt="Precision-cut natural round diamonds" loading="lazy" width={1200} height={1400} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/25 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] rounded-[1.5rem] overflow-hidden border-[6px] border-ivory shadow-[0_40px_80px_-40px_oklch(0.25_0.03_50/0.6)]">
              <img src={craft} alt="Cutter inspecting a round brilliant diamond" loading="lazy" width={800} height={600} className="w-full aspect-square object-cover" />
            </div>
            <div className="absolute top-8 -left-4 sm:-left-8 rounded-2xl bg-gold text-ivory px-5 py-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">1991 – 2026</div>
              <div className="mt-1 font-display text-3xl leading-none">35 years</div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <SectionEyebrow>About Ravi Impex</SectionEyebrow>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02]">
              Trust, transparency &amp; <span className="italic text-gradient-gold">technical excellence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg text-charcoal/70 leading-relaxed max-w-xl">
              Rooted in a pioneering family spirit, Ravi Impex was established
              in 1991 with a clear conviction. For over three decades we have
              grown into one of the leading manufacturers of the world's most
              precisely cut and polished diamonds.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-7 max-w-xl">
            {[
              { t: "Natural diamonds only", d: "Nature's finest — no lab-grown, ever." },
              { t: "Round brilliant specialists", d: "We manufacture only precisely cut rounds." },
              { t: "Recut until right", d: "Diamonds that miss our grades are recut until they make them." },
              { t: "Ethically sourced", d: "Zero tolerance towards conflict diamonds." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={0.15 + i * 0.06}>
                <div className="border-l-2 border-gold/25 pl-4 hover:border-gold transition-colors">
                  <h4 className="font-display text-xl">{f.t}</h4>
                  <p className="mt-1.5 text-sm text-charcoal/60 leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <Link to="/about" className="mt-12 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold border-b border-gold/40 pb-1 hover:border-gold transition">
              Our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCT — PRECISION-CUT ROUNDS ---------------- */
const productSpecs = [
  { k: "Shape", v: "Round Brilliant" },
  { k: "Colour", v: "DEF / GH" },
  { k: "Clarity", v: "IF–VVS / VS1 / VS2" },
  { k: "Size", v: "0.90 – 3.30 mm" },
  { k: "Calibration", v: "Precisely calibrated to 0.05 mm" },
  { k: "Type", v: "Natural Diamonds" },
];
const MIN_MM = 0.9;
const MAX_MM = 3.3;
const referenceSizes = [0.9, 1.3, 1.7, 2.1, 2.5, 2.9, 3.3];

function RoundDiamond({ px }: { px: number }) {
  const id = useId().replace(/:/g, "");
  const pt = (r: number, a: number) => `${50 + r * Math.cos(a - Math.PI / 2)},${50 + r * Math.sin(a - Math.PI / 2)}`;
  const step = Math.PI / 4;
  return (
    <svg viewBox="0 0 100 100" width={px} height={px} aria-hidden className="block">
      <defs>
        <radialGradient id={`dg-${id}`} cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f4ede7" />
          <stop offset="100%" stopColor="#d8c4b5" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#dg-${id})`} className="stroke-gold" strokeWidth="1.2" />
      <g fill="none" className="stroke-gold" strokeWidth="0.7" opacity="0.65">
        <polygon points={Array.from({ length: 8 }, (_, i) => pt(24, i * step + step / 2)).join(" ")} />
        {Array.from({ length: 8 }, (_, i) => {
          const a = i * step;
          return (
            <g key={i}>
              <polyline points={`${pt(24, a - step / 2)} ${pt(36, a)} ${pt(24, a + step / 2)}`} />
              <polyline points={`${pt(48, a - step / 2)} ${pt(36, a)} ${pt(48, a + step / 2)}`} />
              <polyline points={`${pt(24, a + step / 2)} ${pt(48, a + step / 2)}`} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function Product() {
  const [mm, setMm] = useState(2.1);
  const big = 70 + ((mm - MIN_MM) / (MAX_MM - MIN_MM)) * 150;

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-cream/70">
      <div className="pointer-events-none absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-gold-soft/25 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow>Precision-cut rounds</SectionEyebrow>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              One shape, engineered <span className="italic text-gradient-gold">to perfection.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-charcoal/70 leading-relaxed">
              Bespoke jewellery demands more than brilliance — it demands
              precision, consistency and exceptional craftsmanship. Every round
              is matched for colour, clarity, cut and precise diameter, so a
              parcel performs as one.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Specifications */}
          <Reveal className="lg:col-span-5 h-full">
            <div className="h-full rounded-[28px] bg-charcoal text-ivory p-8 sm:p-10 relative overflow-hidden">
              <FacetPattern className="absolute -right-20 -bottom-20 h-72 w-72 text-gold-soft/10" />
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">Product specifications</div>
                <h3 className="mt-3 font-display text-4xl sm:text-5xl">Round Brilliant</h3>
                <dl className="mt-8 divide-y divide-ivory/10 border-y border-ivory/10">
                  {productSpecs.map((s) => (
                    <div key={s.k} className="flex items-baseline justify-between gap-6 py-3.5">
                      <dt className="text-[10px] uppercase tracking-[0.22em] text-ivory/50">{s.k}</dt>
                      <dd className="font-display text-lg sm:text-xl text-right text-ivory">{s.v}</dd>
                    </div>
                  ))}
                </dl>
                <Link to="/services" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ivory text-charcoal px-6 py-3 text-sm font-medium hover:bg-gold-soft transition">
                  Full specifications
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Interactive size explorer */}
          <Reveal delay={0.1} className="lg:col-span-7 h-full">
            <div className="h-full rounded-[28px] bg-white border border-border p-8 sm:p-10 flex flex-col">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Size explorer</div>
                  <h3 className="mt-2 font-display text-3xl">Explore the range</h3>
                </div>
                <div className="text-right">
                  <div className="font-display text-5xl leading-none text-gradient-gold">{mm.toFixed(2)}<span className="text-2xl"> mm</span></div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-charcoal/50">Diameter</div>
                </div>
              </div>

              <div className="relative mt-6 grid flex-1 min-h-[240px] place-items-center">
                <div className="absolute h-56 w-56 rounded-full bg-gold-soft/20 blur-3xl" />
                <motion.div animate={{ width: big, height: big }} transition={{ type: "spring", stiffness: 120, damping: 18 }} className="relative drop-shadow-[0_25px_35px_rgba(102,70,51,0.25)]">
                  <RoundDiamond px={big} />
                </motion.div>
              </div>

              <label className="mt-6 block">
                <span className="sr-only">Diamond diameter in millimetres</span>
                <input
                  type="range"
                  min={MIN_MM}
                  max={MAX_MM}
                  step={0.05}
                  value={mm}
                  onChange={(e) => setMm(Number(e.target.value))}
                  className="w-full accent-[#664633] cursor-pointer"
                />
              </label>

              <div className="mt-6 flex items-end justify-between gap-2 border-t border-border pt-6">
                {referenceSizes.map((s) => {
                  const active = Math.abs(mm - s) < 0.001;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setMm(s)}
                      aria-pressed={active}
                      className="group flex flex-col items-center gap-2"
                    >
                      <span className={`rounded-full transition ${active ? "ring-2 ring-gold ring-offset-2" : "opacity-70 group-hover:opacity-100"}`}>
                        <RoundDiamond px={Math.round(s * 11)} />
                      </span>
                      <span className={`text-[10px] sm:text-xs tabular-nums ${active ? "text-gold font-semibold" : "text-charcoal/50"}`}>{s.toFixed(2)}</span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-xs text-charcoal/50">Shown to relative scale · Precisely calibrated to 0.05 mm</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS PREVIEW ---------------- */
const processSteps = [
  { n: "01", t: "Planning", s: "Precision begins at the rough", d: "Sarine technology maps every angle and inclusion for the optimal balance of yield, beauty and value.", img: processRough },
  { n: "02", t: "Sawing", s: "Precision in every cut", d: "Laser technology splits the rough into carefully planned pieces, preserving its maximum potential.", img: polishWheel },
  { n: "03", t: "Bruting", s: "Shaping the future of brilliance", d: "Each piece is shaped into the round form that sets the foundation for its final proportions.", img: processCutting },
  { n: "04", t: "Polishing", s: "Where craftsmanship creates brilliance", d: "Blocking and brillianteering bring symmetry, proportion, fire and brilliance to life.", img: processPolish },
];

function ProcessPreview() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <Reveal>
            <SectionEyebrow>Rough to polish</SectionEyebrow>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] max-w-3xl">
              From rough <span className="italic text-gradient-gold">to radiance.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/process" className="group inline-flex items-center gap-2 rounded-full border border-gold/30 px-6 py-3 text-sm font-medium text-gold hover:bg-gold hover:text-ivory transition">
              Explore the process
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <article className="group relative h-[460px] rounded-[26px] overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" width={800} height={1000} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/45 to-charcoal/5" />
                <div className="absolute top-5 left-5 font-display text-5xl text-ivory/90">{s.n}</div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">{s.s}</div>
                  <h3 className="mt-2 font-display text-3xl">{s.t}</h3>
                  <div className="mt-3 h-px w-10 bg-gold-soft group-hover:w-20 transition-all duration-500" />
                  <p className="mt-3 text-sm text-ivory/75 leading-relaxed">{s.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PILLARS — VALUES ---------------- */
const pillars = [
  { icon: Handshake, t: "Trust", d: "Long-term relationships built on integrity — the reason more than 100 clients worldwide continue to work with us.", img: craft, stat: "100+", statLabel: "Clients worldwide" },
  { icon: ShieldCheck, t: "Transparency", d: "Ethical sourcing, zero tolerance towards conflict diamonds and open, honest dealings with every client.", img: sortingTray, stat: "100%", statLabel: "Conflict free" },
  { icon: Compass, t: "Consistency", d: "Every round is matched for colour, clarity, cut and precise diameter, delivering exceptional uniformity across a collection.", img: polishWheel, stat: "0.05mm", statLabel: "Calibration" },
  { icon: Sparkles, t: "Quality", d: "Diamonds that do not make our grades are recut until they do — every stone, every parcel.", img: atelierLoupe, stat: "IF–VS2", statLabel: "Clarity range" },
];

function Pillars() {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <section className="relative overflow-hidden bg-cream/70 py-24 lg:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[620px] w-[620px] rounded-full bg-gold-soft/25 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionEyebrow>Our values</SectionEyebrow>
          <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.02]">
              Four values.
              <br />
              <span className="italic text-gradient-gold">One standard</span> of excellence.
            </h2>
            <p className="text-charcoal/65 leading-relaxed">
              Trust, transparency, consistency and quality — the values that
              have guided Ravi Impex since 1991, and the standard every diamond
              we manufacture is held to.
            </p>
          </div>
        </Reveal>

        <div role="tablist" aria-label="Our values" className="mt-12 flex gap-2 overflow-x-auto pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pillars.map((p, i) => (
            <button
              key={p.t}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                i === active ? "border-gold bg-gold text-ivory" : "border-gold/20 bg-ivory/70 text-charcoal/55"
              }`}
            >
              0{i + 1} · {p.t}
            </button>
          ))}
        </div>

        <div className="mt-8 lg:mt-16 grid gap-10 lg:grid-cols-[minmax(0,44%)_minmax(0,1fr)] lg:gap-16 lg:items-center">
          <div className="relative aspect-4/5 overflow-hidden rounded-[28px] bg-cream shadow-[0_60px_120px_-55px_oklch(0.25_0.03_50/0.5)]">
            {pillars.map((p, i) => (
              <motion.img
                key={p.t}
                src={p.img}
                alt={p.t}
                loading="lazy"
                width={1200}
                height={1500}
                initial={false}
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.06 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 p-6 sm:p-8 text-ivory">
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.35em] text-ivory/70">0{active + 1} — {current.t}</div>
                <div className="mt-3 h-px w-24 bg-gold-soft" />
              </div>
              <div className="shrink-0 text-right">
                <div className="font-display text-3xl sm:text-4xl leading-none">{current.stat}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ivory/65">{current.statLabel}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-3 bottom-3 hidden w-px bg-gold/15 lg:block" />
            <div className="space-y-3 lg:space-y-0">
              {pillars.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.t}
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`group relative block w-full rounded-[22px] border px-5 py-5 text-left transition-all duration-500 sm:px-7 sm:py-6 lg:rounded-none lg:border-0 lg:border-b lg:border-gold/15 lg:bg-transparent lg:pl-16 lg:pr-4 lg:py-7 ${
                      isActive ? "border-gold/40 bg-ivory shadow-[0_30px_60px_-45px_oklch(0.25_0.03_50/0.5)]" : "border-gold/15 bg-ivory/50"
                    }`}
                  >
                    <span
                      className={`absolute left-5 top-6 hidden h-10 w-10 place-items-center rounded-full border transition-all duration-500 lg:grid lg:left-0 ${
                        isActive
                          ? "border-gold bg-gold text-ivory shadow-[0_0_0_8px_color-mix(in_oklab,var(--gold)_12%,transparent)]"
                          : "border-gold/20 bg-cream text-gold/50"
                      }`}
                    >
                      <p.icon className="h-4 w-4" />
                    </span>
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.35em] text-gold">0{i + 1}</div>
                        <h3 className={`mt-2 font-display text-2xl sm:text-3xl lg:text-4xl transition-colors duration-500 ${isActive ? "text-charcoal" : "text-charcoal/40"}`}>{p.t}</h3>
                      </div>
                      <ChevronRight className={`h-5 w-5 shrink-0 transition-all duration-500 ${isActive ? "text-gold translate-x-0" : "text-charcoal/25 -translate-x-1"}`} />
                    </div>
                    <div className={`grid transition-all duration-500 ease-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-lg text-sm sm:text-base text-charcoal/65 leading-relaxed">{p.d}</p>
                        <div className="mt-4 flex items-baseline gap-3 lg:hidden">
                          <span className="font-display text-3xl text-gradient-gold">{p.stat}</span>
                          <span className="text-[10px] uppercase tracking-[0.22em] text-charcoal/50">{p.statLabel}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE — BENTO ---------------- */
function WhyChoose() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow>Our difference</SectionEyebrow>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Why jewellery houses <br className="hidden sm:block" />
              choose <span className="italic text-gradient-gold">Ravi Impex.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-charcoal/70 leading-relaxed text-lg">
              Advanced manufacturing, skilled craftsmanship and responsible
              practices — combined to deliver consistent, high-quality diamonds,
              parcel after parcel.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:auto-rows-[minmax(250px,auto)]">
          {/* Large image tile */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="group relative h-full min-h-[420px] overflow-hidden rounded-[28px]">
              <img src={certifiedDiamond} alt="Natural round brilliant diamond" loading="lazy" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-tr from-charcoal/85 via-charcoal/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 text-ivory max-w-xl">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">01 — Nature</div>
                <h3 className="mt-3 font-display text-4xl sm:text-5xl">100% natural diamonds</h3>
                <p className="mt-4 text-ivory/75 leading-relaxed">
                  We work exclusively with natural diamonds — nature's finest,
                  cut and polished to exacting standards for the world's
                  leading luxury brands.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="h-full rounded-[28px] bg-white border border-border p-8 flex flex-col">
              <Compass className="h-6 w-6 text-gold" />
              <div className="mt-auto pt-10">
                <div className="font-display text-5xl text-gradient-gold">0.05 mm</div>
                <h3 className="mt-3 font-display text-2xl">Precision calibration</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">Integrates seamlessly into intricate, high-precision settings.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-[28px] bg-gold text-ivory p-8 flex flex-col">
              <FacetPattern className="absolute -right-14 -top-14 h-52 w-52 text-ivory/10" />
              <Gem className="relative h-6 w-6 text-gold-soft" />
              <div className="relative mt-auto pt-10">
                <h3 className="font-display text-3xl">Recut until right</h3>
                <p className="mt-2 text-sm text-ivory/75 leading-relaxed">Diamonds that do not make our grades are recut until they do.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="group relative h-full min-h-[250px] overflow-hidden rounded-[28px]">
              <img src={roughOnLeaf} alt="Natural diamond resting on a leaf" loading="lazy" width={900} height={700} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                <h3 className="font-display text-2xl">Ethically sourced</h3>
                <p className="mt-1.5 text-sm text-ivory/75">RJC Certified · Kimberley Process compliant</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-[28px] bg-cream border border-gold/10 p-8 flex flex-col">
              <Sparkles className="h-6 w-6 text-gold" />
              <div className="mt-auto pt-10">
                <div className="font-display text-5xl text-gradient-gold">In-house</div>
                <h3 className="mt-3 font-display text-2xl">Elite manufacturing</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">Planning, sawing, bruting and polishing — all under one roof.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full rounded-[28px] bg-white border border-border p-8 flex flex-col">
              <Handshake className="h-6 w-6 text-gold" />
              <div className="mt-auto pt-10">
                <div className="font-display text-5xl text-gradient-gold">10+</div>
                <h3 className="mt-3 font-display text-2xl">Countries served</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">Trusted by 100+ clients and leading luxury brands worldwide.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GLOBAL EXPORT ---------------- */
function GlobalExport() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-cream/70">
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gold-soft/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow>Our global footprint</SectionEyebrow>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              From Surat <span className="italic text-gradient-gold">to the world.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-charcoal/70 leading-relaxed">
              For over three decades, Ravi Impex has supplied precision-cut
              natural diamonds to jewellery manufacturers and luxury brands
              across more than 10 countries — with total transparency and
              unwavering reliability.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 relative overflow-hidden rounded-[32px] border border-gold/15 bg-white shadow-[0_60px_120px_-60px_oklch(0.25_0.03_50/0.4)]">
            <div className="absolute inset-0 bg-linear-to-br from-cream/60 via-white to-ivory" />
            <WorldMap hovered={hovered} onHover={setHovered} />
            <div className="pointer-events-none absolute left-5 top-5 rounded-2xl border border-gold/20 bg-white/85 backdrop-blur px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50">Head office</div>
              <div className="mt-1 font-display text-xl leading-none">Surat, India</div>
              <div className="mt-1 text-[11px] text-gold">Exporting to 10+ countries</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {exportCountries.map((c) => (
              <button
                key={c.name}
                type="button"
                onMouseEnter={() => setHovered(c.name)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(c.name)}
                onBlur={() => setHovered(null)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                  hovered === c.name ? "border-gold bg-gold text-ivory" : "border-gold/20 bg-white/70 text-charcoal/70"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- ASSURANCE — DRIVEN BY ETHICS ---------------- */
function Assurance() {
  const items = [
    { icon: Award, t: "RJC Certified", d: "Ravi Impex is RJC Certified and follows responsible sourcing and ethical business practices." },
    { icon: Leaf, t: "Kimberley Process", d: "Our rough diamond sourcing and trade adhere to the Kimberley Process Certification Scheme." },
    { icon: Diamond, t: "100% Natural", d: "We work only with natural diamonds — nature's finest, precisely cut and polished." },
    { icon: ShieldCheck, t: "Zero Conflict", d: "Zero tolerance towards conflict diamonds, with transparency across the supply chain." },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center"><SectionEyebrow>Driven by ethics</SectionEyebrow></div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              Built on <span className="italic text-gradient-gold">trust &amp; responsibility.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06} className="h-full">
              <div className="group h-full bg-ivory p-8 hover:bg-white transition-colors">
                <div className="h-12 w-12 rounded-full border border-gold/30 grid place-items-center text-gold group-hover:bg-gold group-hover:text-ivory transition-colors">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{it.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ENGAGEMENT ---------------- */
function Engagement() {
  const steps = [
    { n: "01", t: "Share your requirement", d: "Tell us your sizes (0.90 – 3.30 mm), colour and clarity bands and volumes. A specialist replies within one business day." },
    { n: "02", t: "Receive a matched parcel", d: "Precision-cut rounds matched for colour, clarity and diameter, with transparent pricing." },
    { n: "03", t: "Shipped, insured, worldwide", d: "Sealed, insured and tracked to your door, with reorder terms agreed up front." },
  ];
  return (
    <section className="relative py-24 lg:py-32 bg-cream/70 border-y border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <SectionEyebrow>Working with us</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
            Three steps to your <span className="italic text-gradient-gold">first parcel.</span>
          </h2>
          <p className="mt-6 max-w-md text-charcoal/70 leading-relaxed">
            A simple, transparent way to source precision-cut natural rounds —
            from a single parcel to a recurring supply programme.
          </p>
        </Reveal>
        <div className="lg:col-span-7 space-y-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="group flex gap-6 rounded-[24px] border border-gold/10 bg-white/80 backdrop-blur p-7 hover:border-gold/40 hover:shadow-[0_30px_60px_-40px_oklch(0.25_0.03_50/0.5)] transition-all">
                <div className="font-display text-4xl text-gold/40 group-hover:text-gold transition-colors">{s.n}</div>
                <div>
                  <h3 className="font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function Cta() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal text-ivory px-8 py-20 md:p-24 text-center">
            <img src={diamondsLoose} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-charcoal/70 to-charcoal" />
            <FacetPattern className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 text-gold-soft/[0.08]" />
            <div className="relative">
              <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
                <span className="h-px w-8 bg-gold-soft" />
                Work with us
                <span className="h-px w-8 bg-gold-soft" />
              </div>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1] max-w-4xl mx-auto">
                Precision, matched to <span className="italic text-gradient-light">your designs.</span>
              </h2>
              <p className="mt-8 max-w-xl mx-auto text-ivory/70">
                Share your size, colour and clarity requirements and our team
                will prepare a matched parcel of precision-cut natural rounds.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ivory text-charcoal font-medium hover:bg-gold-soft transition">
                  Send an enquiry <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-ivory/25 text-ivory hover:border-gold-soft hover:text-gold-soft transition">
                  View specifications
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- WORLD MAP ---------------- */
const exportCountries: { name: string; lon: number; lat: number; region: string }[] = [
  { name: "United States", lon: -98, lat: 39, region: "Americas" },
  { name: "United Kingdom", lon: -0.1, lat: 51.5, region: "Europe" },
  { name: "Belgium", lon: 4.4, lat: 50.9, region: "Europe" },
  { name: "Italy", lon: 12.5, lat: 41.9, region: "Europe" },
  { name: "Switzerland", lon: 8.5, lat: 47.4, region: "Europe" },
  { name: "Israel", lon: 34.8, lat: 32.1, region: "Middle East" },
  { name: "UAE", lon: 55.3, lat: 25.2, region: "Middle East" },
  { name: "Hong Kong", lon: 114.2, lat: 22.3, region: "Asia Pacific" },
  { name: "Thailand", lon: 100.5, lat: 13.8, region: "Asia Pacific" },
  { name: "Japan", lon: 139.7, lat: 35.7, region: "Asia Pacific" },
  { name: "Singapore", lon: 103.8, lat: 1.35, region: "Asia Pacific" },
];
const surat = { name: "Surat, India", lon: 72.83, lat: 21.17 };

/* Real geographic world map (world-atlas 110m, equirectangular) */
function WorldMap({ hovered, onHover }: { hovered: string | null; onHover: (n: string | null) => void }) {
  const [sx, sy] = project(surat.lon, surat.lat);
  const activeSet = new Set(exportCountries.map((c) => c.name));

  return (
    <svg
      viewBox={`0 40 ${MAP_W} ${MAP_H - 90}`}
      className="relative w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="World map of Ravi Impex export destinations"
    >
      <defs>
        <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#664633" stopOpacity="0" />
          <stop offset="50%" stopColor="#664633" stopOpacity="1" />
          <stop offset="100%" stopColor="#664633" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="pinGlow">
          <stop offset="0%" stopColor="#c9ab95" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#c9ab95" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* graticule-ish backdrop */}
      <g stroke="#9a7259" strokeWidth="0.4" opacity="0.1">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={(i * MAP_H) / 10} x2={MAP_W} y2={(i * MAP_H) / 10} />
        ))}
        {Array.from({ length: 19 }, (_, i) => (
          <line key={`v${i}`} x1={(i * MAP_W) / 18} y1="0" x2={(i * MAP_W) / 18} y2={MAP_H} />
        ))}
      </g>

      {/* countries */}
      <g strokeLinejoin="round">
        {COUNTRIES.map((c) => {
          const isActive = activeSet.has(c.n);
          const isHot = hovered === c.n;
          return (
            <path
              key={c.n}
              d={c.d}
              fill={isHot ? "#c9ab95" : isActive ? "#eadbcd" : "#f3ece5"}
              stroke={isActive ? "#9a7259" : "#e2d5ca"}
              strokeWidth={isActive ? 0.7 : 0.4}
              className="transition-[fill] duration-500"
            />
          );
        })}
      </g>

      {/* trade routes from Surat */}
      {exportCountries.map((c, i) => {
        const [dx, dy] = project(c.lon, c.lat);
        const mx = (sx + dx) / 2;
        const my = Math.min(sy, dy) - Math.abs(dx - sx) * 0.22 - 12;
        const d = `M${sx},${sy} Q${mx},${my} ${dx},${dy}`;
        const on = hovered === null || hovered === c.name;
        return (
          <g key={c.name} style={{ opacity: on ? 1 : 0.15 }} className="transition-opacity duration-300">
            <path d={d} fill="none" stroke="url(#goldLine)" strokeWidth="1.1" opacity="0.65" />
            <circle r="2.6" fill="#664633">
              <animateMotion dur={`${4 + (i % 5)}s`} repeatCount="indefinite" path={d} />
              <animate attributeName="opacity" values="0;1;0" dur={`${4 + (i % 5)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* destination markers */}
      {exportCountries.map((c) => {
        const [cx, cy] = project(c.lon, c.lat);
        const isHot = hovered === c.name;
        return (
          <g
            key={c.name + "-pin"}
            onMouseEnter={() => onHover(c.name)}
            onMouseLeave={() => onHover(null)}
            className="cursor-pointer"
          >
            <circle cx={cx} cy={cy} r="9" fill="url(#pinGlow)" />
            <circle cx={cx} cy={cy} r={isHot ? 4 : 2.6} fill="#664633" stroke="white" strokeWidth="0.8" className="transition-all duration-300" />
            <circle cx={cx} cy={cy} r="4" fill="none" stroke="#9a7259" strokeWidth="0.6" opacity="0.5">
              <animate attributeName="r" values="4;11;4" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
            </circle>
            {isHot && (
              <text x={cx} y={cy - 12} textAnchor="middle" fontSize="12" fontWeight="600" fill="#2a1c15">
                {c.name}
              </text>
            )}
          </g>
        );
      })}

      {/* Surat HQ */}
      <g>
        <circle cx={sx} cy={sy} r="18" fill="url(#pinGlow)" opacity="0.9" />
        <circle cx={sx} cy={sy} r="10" fill="none" stroke="#9a7259" strokeWidth="1">
          <animate attributeName="r" values="10;24;10" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <polygon
          points={`${sx},${sy - 7} ${sx + 6},${sy} ${sx},${sy + 7} ${sx - 6},${sy}`}
          fill="#664633"
          stroke="white"
          strokeWidth="1"
        />
        <text x={sx} y={sy + 20} textAnchor="middle" fontSize="13" fill="#2a1c15" fontWeight="700">Surat</text>
      </g>
    </svg>
  );
}

