import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Crosshair,
  Gem,
  Globe2,
  Leaf,
  Mail,
  Scissors,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { FacetPattern } from "@/components/site/FacetPattern";
import diamondsHero from "@/assets/diamonds-hero.jpg";
import heroDiamond from "@/assets/hero-diamond.jpg";
import collection from "@/assets/collection.jpg";
import diamondsLoose from "@/assets/diamonds-loose.jpg";
import processPolish from "@/assets/process-polish.jpg";
import processRough from "@/assets/process-rough.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Precision-Cut Rounds — Ravi Impex" },
      { name: "description", content: "Natural round brilliant diamonds, 0.90–3.30 mm, DEF/GH colour, IF–VS2 clarity, precisely calibrated to 0.05 mm — manufactured by Ravi Impex." },
      { property: "og:title", content: "Precision-Cut Rounds — Ravi Impex" },
      { property: "og:description", content: "Nature's finest diamonds — engineered to perfection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const heroFeatures = [
  { icon: Gem, t: "Natural Origin" },
  { icon: Award, t: "RJC Certified" },
  { icon: Sparkles, t: "Precision Cut" },
  { icon: Globe2, t: "Global Supply" },
];

const specs = [
  { k: "Shape", v: "Round Brilliant" },
  { k: "Colour", v: "DEF / GH" },
  { k: "Clarity", v: "IF – VS2" },
  { k: "Size", v: "0.90 – 3.30 mm" },
  { k: "Calibration", v: "0.05 mm" },
  { k: "Type", v: "100% Natural" },
];

const referenceSizes = [0.9, 1.3, 1.7, 2.1, 2.5, 2.9, 3.3];

const colourGrades = [
  { g: "D", tint: "#ffffff" },
  { g: "E", tint: "#fefdfb" },
  { g: "F", tint: "#fcfaf5" },
  { g: "G", tint: "#faf5ea" },
  { g: "H", tint: "#f7efdc" },
];

const clarityGrades = [
  { g: "IF", n: "Internally Flawless", d: "No inclusions visible under 10× magnification." },
  { g: "VVS", n: "Very, Very Slightly Included", d: "Minute inclusions, extremely difficult to see under 10×." },
  { g: "VS1", n: "Very Slightly Included", d: "Minor inclusions, difficult to see under 10×." },
  { g: "VS2", n: "Very Slightly Included", d: "Minor inclusions, somewhat easy to see under 10×." },
];

const items = [
  { icon: Sparkles, t: "Colour & Clarity Matched", d: "Every diamond is carefully matched for colour, clarity and cut, delivering exceptional uniformity across a collection.", img: collection, tag: "Consistency" },
  { icon: Compass, t: "Calibrated to 0.05 mm", d: "Precise diameters from 0.90 to 3.30 mm, designed to integrate seamlessly into intricate jewellery and high-precision settings.", img: diamondsLoose, tag: "Precision" },
  { icon: Scissors, t: "Rough to Polish In-House", d: "Sarine planning, laser sawing, bruting and polishing — every stage inside our own manufacturing facility.", img: processPolish, tag: "Manufacturing" },
  { icon: Leaf, t: "Natural & Ethically Sourced", d: "RJC Certified and Kimberley Process compliant, with zero tolerance towards conflict diamonds.", img: processRough, tag: "Provenance" },
];

const steps = [
  { n: "01", icon: Mail, t: "Share your requirement", d: "Tell us your sizes (0.90 – 3.30 mm), colour and clarity bands and volumes. A specialist replies within one business day." },
  { n: "02", icon: Crosshair, t: "Receive a matched parcel", d: "Precision-cut rounds matched for colour, clarity and diameter, with transparent pricing." },
  { n: "03", icon: Truck, t: "Shipped, insured, worldwide", d: "Sealed, insured and tracked to your door, with reorder terms agreed up front." },
];

const footprint = [
  { icon: Award, value: 35, suffix: "", v: "Years of craftsmanship" },
  { icon: Gem, value: 75000, suffix: "+", v: "Rough carats manufactured annually" },
  { icon: Globe2, value: 10, suffix: "+", v: "Countries exported to" },
  { icon: Users, value: 100, suffix: "+", v: "Clients served worldwide" },
];

function Services() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal overflow-x-clip">
      <Navbar />
      <Hero />
      <SpecRibbon />
      <SizeGuide />
      <Grades />
      <WhyOurRounds />
      <HowToOrder />
      <Footprint />
      <ClosingCta />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory lg:min-h-[780px]">
      {/* Image — full-bleed right half on desktop */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[62%]">
        <motion.img
          src={diamondsHero}
          alt="Natural round brilliant diamonds, one held in tweezers"
          width={932}
          height={714}
          fetchPriority="high"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-ivory via-ivory/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ivory/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ivory/70 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute right-10 xl:right-16 bottom-12 glass-card rounded-2xl px-5 py-4"
        >
          <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Round brilliant</div>
          <div className="mt-1 font-display text-2xl">0.90 – 3.30 mm</div>
          <div className="text-xs text-charcoal/60">Calibrated to 0.05 mm</div>
        </motion.div>
      </div>
      <div className="hero-orb w-[520px] h-[520px] -top-48 -left-40 bg-gold-soft/40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 lg:pt-36 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-charcoal/55"
          >
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-charcoal/80">Our Diamonds</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8"
          >
            <SectionEyebrow>Natural diamonds</SectionEyebrow>
          </motion.div>

          <h1 className="mt-5 font-display text-[15vw] leading-[0.95] sm:text-8xl lg:text-[5.25rem] xl:text-[6rem] tracking-tight">
            <span className="block overflow-hidden pb-1">
              <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.15, ease: EASE }} className="block">
                Exceptional
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-3">
              <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.28, ease: EASE }} className="block">
                <span className="italic text-gradient-gold">Natural</span> Diamonds.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg text-charcoal/70 leading-relaxed"
          >
            Formed by nature over billions of years and precisely cut by Ravi
            Impex — natural round brilliants, matched for colour and clarity
            and calibrated to 0.05 mm for the world's finest jewellery houses.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-10 grid grid-cols-4 max-w-lg"
          >
            {heroFeatures.map((f, i) => (
              <li key={f.t} className={`flex flex-col items-center text-center gap-3 px-1 ${i > 0 ? "border-l border-gold/20" : ""}`}>
                <span className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full border border-gold/40 bg-white/60 text-gold">
                  <f.icon className="h-5 w-5" />
                </span>
                <span className="text-xs sm:text-sm leading-tight text-charcoal/75">{f.t}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#range" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-linear-to-r from-bronze to-gold text-ivory px-8 py-4 text-sm font-medium shadow-[0_24px_50px_-22px_var(--gold)]">
              <span className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative">Explore our diamonds</span>
              <ArrowDown className="relative h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/60 backdrop-blur px-7 py-4 text-sm font-medium text-gold hover:border-gold transition">
              Request a parcel
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Image — stacked on mobile / tablet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
          className="lg:hidden relative mt-12 overflow-hidden rounded-[2rem] aspect-4/3"
        >
          <img src={diamondsHero} alt="Natural round brilliant diamonds, one held in tweezers" width={932} height={714} className="h-full w-full object-cover" />
          <div className="absolute left-4 bottom-4 glass-card rounded-2xl px-4 py-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Round brilliant</div>
            <div className="font-display text-xl">0.90 – 3.30 mm</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SPEC RIBBON ---------------- */
function SpecRibbon() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      <FacetPattern className="absolute -right-20 -top-28 h-80 w-80 text-gold-soft/10" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px overflow-hidden rounded-2xl bg-ivory/10">
          {specs.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.05} className="h-full">
              <div className="h-full bg-charcoal px-5 py-5 lg:px-6">
                <dt className="text-[10px] uppercase tracking-[0.28em] text-gold-soft/80">{s.k}</dt>
                <dd className="mt-2 font-display text-xl xl:text-2xl">{s.v}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------- SIZE GUIDE ---------------- */
function SizeGuide() {
  return (
    <section id="range" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src={heroDiamond} alt="Natural round brilliant diamond" loading="lazy" width={1408} height={1408} className="rounded-[2rem] w-full aspect-square object-cover" />
            <div className="absolute -bottom-6 right-6 sm:right-10 rounded-2xl bg-charcoal text-ivory px-6 py-5 shadow-[0_30px_60px_-30px_var(--charcoal)]">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">Recut until right</div>
              <div className="mt-1 font-display text-xl max-w-[14rem] leading-snug">Diamonds that miss our grades are recut until they make them.</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionEyebrow>The range</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
            One shape. <span className="italic text-gradient-gold">Perfected.</span>
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed">
            Bespoke jewellery demands more than brilliance — it demands
            precision, consistency and exceptional craftsmanship. We
            manufacture only the round brilliant cut, and every diamond is
            matched for colour, clarity, cut and precise diameter.
          </p>

          <div className="mt-10 rounded-[24px] border border-gold/25 bg-white p-6 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <div className="text-[10px] uppercase tracking-[0.28em] text-charcoal/50">Size guide</div>
              <div className="text-xs text-gold">Calibrated in 0.05 mm steps</div>
            </div>
            <div className="mt-6 flex items-end justify-between gap-1">
              {referenceSizes.map((mm) => {
                const px = Math.round(mm * 22);
                return (
                  <div key={mm} className="flex flex-col items-center gap-3">
                    <div className="relative rounded-full bg-linear-to-br from-white to-cream shadow-[0_6px_16px_-8px_var(--charcoal)]" style={{ width: px, height: px }}>
                      <FacetPattern className="absolute inset-0 h-full w-full text-gold/50" />
                    </div>
                    <div className="text-[10px] sm:text-xs font-medium text-charcoal/70 tabular-nums">{mm.toFixed(2)}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 h-px bg-gold/20" />
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-charcoal/45">
              <span>0.90 mm</span>
              <span>Diameter (illustrative scale)</span>
              <span>3.30 mm</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- COLOUR & CLARITY ---------------- */
function Grades() {
  return (
    <section className="py-24 lg:py-32 bg-cream/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow>Colour &amp; clarity</SectionEyebrow>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
              Graded to the <span className="italic text-gradient-gold">highest bands.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-charcoal/70 leading-relaxed text-lg">
              We work in the top colour and clarity bands only — so every
              parcel delivers the whiteness and brilliance fine jewellery
              demands.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal className="h-full">
            <div className="h-full rounded-[28px] border border-border bg-white p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl">Colour</h3>
                <span className="rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">DEF / GH</span>
              </div>
              <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">
                The less colour a diamond holds, the more light it returns. Our
                rounds sit at the very top of the scale.
              </p>
              <div className="mt-8 grid grid-cols-5 gap-2 sm:gap-3">
                {colourGrades.map((c) => (
                  <div key={c.g} className="flex flex-col items-center gap-3">
                    <div className="relative w-full aspect-square rounded-2xl border border-gold/15 shadow-inner" style={{ background: c.tint }}>
                      <FacetPattern className="absolute inset-[18%] text-charcoal/15" />
                    </div>
                    <span className="font-display text-2xl">{c.g}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3 text-center text-[10px] uppercase tracking-[0.2em]">
                <div className="col-span-3 rounded-full bg-charcoal py-2 text-ivory">Colourless</div>
                <div className="col-span-2 rounded-full border border-gold/30 py-2 text-gold">Near colourless</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-[28px] border border-border bg-white p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl">Clarity</h3>
                <span className="rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">IF – VS2</span>
              </div>
              <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">
                Clarity measures the inclusions within a diamond, judged under
                10× magnification.
              </p>
              <ul className="mt-6 divide-y divide-border">
                {clarityGrades.map((c) => (
                  <li key={c.g} className="flex items-start gap-5 py-4">
                    <span className="w-14 shrink-0 font-display text-2xl text-gradient-gold">{c.g}</span>
                    <div>
                      <div className="text-sm font-medium">{c.n}</div>
                      <div className="mt-0.5 text-sm text-charcoal/60">{c.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY OUR ROUNDS ---------------- */
function WhyOurRounds() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionEyebrow>Why our rounds</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl max-w-2xl leading-[1.02]">
            Built for <span className="italic text-gradient-gold">high-precision settings.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08}>
              <article className="group h-full rounded-[1.75rem] overflow-hidden bg-white border border-border transition-all duration-500 hover:border-gold hover:-translate-y-2 hover:shadow-[0_40px_80px_-30px_oklch(0.42_0.05_50/0.35)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.t}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-ivory/90 backdrop-blur text-xs font-medium uppercase tracking-widest">
                    {s.tag}
                  </div>
                  <div className="absolute bottom-5 left-5 h-12 w-12 rounded-2xl bg-linear-to-br from-gold to-bronze grid place-items-center text-ivory shadow-lg">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl">{s.t}</h3>
                  <p className="mt-3 text-charcoal/60 leading-relaxed">{s.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW TO ORDER ---------------- */
function HowToOrder() {
  return (
    <section className="py-24 lg:py-32 bg-[#F9F5EF] border-y border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center"><SectionEyebrow>Working with us</SectionEyebrow></div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
              From enquiry <span className="italic text-gradient-gold">to your door.</span>
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              A simple, transparent way to source precision-cut natural rounds —
              from a single parcel to a recurring supply programme.
            </p>
          </div>
        </Reveal>
        <div className="relative mt-16 grid md:grid-cols-3 gap-6">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden md:block border-t border-dashed border-gold/30" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="h-full">
              <div className="group relative h-full rounded-[28px] border border-gold/15 bg-white p-8 text-center hover:border-gold/50 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_oklch(0.25_0.03_50/0.5)] transition-all">
                <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-ivory border border-gold/30 text-gold group-hover:bg-gold group-hover:text-ivory transition-colors">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-charcoal text-[10px] font-medium text-ivory">{s.n}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTPRINT ---------------- */
function Footprint() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex justify-center"><SectionEyebrow>Our global footprint</SectionEyebrow></div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {footprint.map((c, i) => (
            <Reveal key={c.v} delay={i * 0.05} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-[28px] bg-white border border-border p-6 sm:p-8 text-center hover:border-gold/50 transition-colors">
                <FacetPattern className="absolute -right-10 -bottom-10 h-32 w-32 text-gold/[0.07] group-hover:text-gold/15 transition-colors" />
                <c.icon className="mx-auto h-5 w-5 text-gold" />
                <div className="mt-4 font-display text-4xl md:text-5xl text-gradient-gold">
                  <Counter to={c.value} suffix={c.suffix} />
                </div>
                <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-charcoal/55">{c.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CLOSING CTA ---------------- */
function ClosingCta() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal text-ivory">
            <img src={diamondsLoose} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/85 to-charcoal/50" />
            <FacetPattern className="absolute -left-40 -bottom-48 h-[520px] w-[520px] text-gold-soft/[0.08]" />

            <div className="relative grid lg:grid-cols-12 gap-12 p-8 sm:p-12 lg:p-16 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
                  <span className="h-px w-8 bg-gold-soft" />
                  Request a parcel
                </div>
                <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1]">
                  Precision, matched to <span className="italic text-gradient-light">your designs.</span>
                </h2>
                <p className="mt-6 max-w-xl text-ivory/70 leading-relaxed">
                  Share your size, colour and clarity requirements and our team
                  will prepare a matched parcel of precision-cut natural rounds.
                </p>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ivory/80">
                  {[
                    { icon: Clock, t: "Reply within one working day" },
                    { icon: Truck, t: "Fully insured shipping" },
                    { icon: ShieldCheck, t: "RJC Certified" },
                  ].map((b) => (
                    <li key={b.t} className="flex items-center gap-2">
                      <b.icon className="h-4 w-4 text-gold-soft" />
                      {b.t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[28px] border border-ivory/15 bg-ivory/[0.06] backdrop-blur-md p-7 sm:p-8">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">Your requirement</div>
                  <h3 className="mt-2 font-display text-3xl">What to send us</h3>
                  <ul className="mt-6 space-y-3">
                    {[
                      ["Size", "0.90 – 3.30 mm"],
                      ["Colour band", "DEF or GH"],
                      ["Clarity band", "IF – VS2"],
                      ["Quantity", "Carats or pieces"],
                    ].map(([k, v]) => (
                      <li key={k} className="flex items-center justify-between gap-4 border-b border-ivory/10 pb-3 text-sm">
                        <span className="flex items-center gap-2.5 text-ivory/85">
                          <CheckCircle2 className="h-4 w-4 text-gold-soft" />
                          {k}
                        </span>
                        <span className="text-ivory/55">{v}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-ivory text-charcoal px-8 py-4 font-medium hover:bg-gold-soft transition">
                    Send an enquiry
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-ivory/55">
                    <Mail className="h-3.5 w-3.5" />
                    info@raviimpex.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
