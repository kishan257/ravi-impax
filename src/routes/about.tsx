import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Clock,
  Compass,
  Crosshair,
  Diamond,
  Eye,
  Gem,
  Globe2,
  Handshake,
  Layers,
  Leaf,
  MapPin,
  ScanSearch,
  Scissors,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { FacetPattern } from "@/components/site/FacetPattern";
import atelierLoupe from "@/assets/atelier-loupe.jpg";
import heroTweezers from "@/assets/hero-tweezers.jpg";
import heroDiamond from "@/assets/hero-diamond.jpg";
import craft from "@/assets/craft.jpg";
import processRough from "@/assets/process-rough.jpg";
import processPolish from "@/assets/process-polish.jpg";
import certifiedDiamond from "@/assets/certified-diamond.jpg";
import diamondsLoose from "@/assets/diamonds-loose.jpg";
import sortingTray from "@/assets/sorting-tray.jpg";
import polishWheel from "@/assets/polish-wheel.jpg";
import roughOnLeaf from "@/assets/rough-on-leaf.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ravi Impex — 35 Years of Craftsmanship" },
      { name: "description", content: "Established in 1991, Ravi Impex manufactures precisely cut natural round diamonds with trust, transparency, consistency and quality. RJC certified and Kimberley Process compliant." },
      { property: "og:title", content: "About Ravi Impex — 35 Years of Craftsmanship" },
      { property: "og:description", content: "Trust, transparency and technical excellence in natural diamonds since 1991." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const credentials = [
  "Natural diamonds only",
  "RJC Certified",
  "Kimberley Process compliant",
  "Round brilliant specialists",
  "0.90 – 3.30 mm",
  "Calibrated to 0.05 mm",
  "Rough to polish in-house",
  "Since 1991",
];

const specs = [
  { k: "0.90 – 3.30", u: "mm", v: "Size range" },
  { k: "0.05", u: "mm", v: "Calibration" },
  { k: "DEF · GH", u: "", v: "Colour" },
  { k: "IF – VS2", u: "", v: "Clarity" },
];

const footprint = [
  { value: 35, suffix: "", label: "Years of craftsmanship", sub: "1991 – 2026" },
  { value: 75000, suffix: "+", label: "Rough carats", sub: "Manufactured annually" },
  { value: 10, suffix: "+", label: "Countries", sub: "Exported to" },
  { value: 100, suffix: "+", label: "Clients", sub: "Served worldwide" },
];

const values = [
  { icon: Handshake, t: "Trust", d: "Built on integrity and long-term relationships — the reason more than 100 clients worldwide continue to work with us.", stat: "100+", statLabel: "Clients worldwide" },
  { icon: ShieldCheck, t: "Transparency", d: "Ethical sourcing, zero tolerance towards conflict diamonds and open, honest dealings with every client.", stat: "100%", statLabel: "Conflict free" },
  { icon: Compass, t: "Consistency", d: "Every diamond matched for colour, clarity, cut and precise diameter, delivering exceptional uniformity.", stat: "0.05 mm", statLabel: "Calibration" },
  { icon: Gem, t: "Quality", d: "Diamonds that do not make our grades are recut until they do — every stone, every parcel.", stat: "IF–VS2", statLabel: "Clarity range" },
];

const manufacturing = [
  { icon: ScanSearch, t: "Sarine Planning", s: "Precision begins at the rough", d: "Every angle, inclusion and proportion of the rough is mapped to find the optimal balance of yield, beauty and value." },
  { icon: Scissors, t: "Laser Sawing", s: "Precision in every cut", d: "Advanced laser technology splits the rough into carefully planned pieces, preserving the full potential of the stone." },
  { icon: Crosshair, t: "Precision Bruting", s: "Shaping brilliance", d: "Each piece is shaped into the round form that sets the foundation for its final proportions." },
  { icon: Sparkles, t: "Blocking & Brillianteering", s: "Craftsmanship creates brilliance", d: "Skilled craftsmen create every facet, bringing symmetry, proportion, fire and brilliance to life." },
  { icon: Layers, t: "Colour & Clarity Matching", s: "Uniform across a collection", d: "Rounds are sorted and matched for colour, clarity, cut and diameter so every parcel is as consistent as the last." },
  { icon: Users, t: "Empowered by Community", s: "People behind the excellence", d: "An experienced, dedicated team drives our commitment to quality, continuous improvement and long-term relationships." },
];

const ethics = [
  { icon: Award, t: "RJC Certified", d: "Responsible sourcing and ethical business practices, independently certified." },
  { icon: Leaf, t: "Kimberley Process", d: "Rough sourcing and trade adhere to the Kimberley Process Certification Scheme." },
  { icon: Diamond, t: "100% Natural", d: "We work only with natural diamonds — nature's finest, precisely cut." },
  { icon: ShieldCheck, t: "Zero Conflict", d: "Zero tolerance towards conflict diamonds, across the entire supply chain." },
];

const regions = [
  { r: "Americas", c: ["United States"] },
  { r: "Europe", c: ["United Kingdom", "Belgium", "Italy", "Switzerland"] },
  { r: "Middle East", c: ["Israel", "UAE"] },
  { r: "Asia Pacific", c: ["Hong Kong", "Thailand", "Japan", "Singapore"] },
];

const assurances = [
  { icon: Globe2, t: "Exported to 10+ countries" },
  { icon: Users, t: "100+ clients worldwide" },
  { icon: Truck, t: "Fully insured shipping" },
  { icon: Clock, t: "Reply within one working day" },
];

function About() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal overflow-x-clip">
      <Navbar />
      <AboutHero />
      <Legacy />
      <CredentialMarquee />
      <Philosophy />
      <StatsBand />
      <Values />
      <TheStandard />
      <Direction />
      <Manufacturing />
      <Ethics />
      <GlobalReach />
      <ClosingCta />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
const HERO_EASE = [0.22, 1, 0.36, 1] as const;

function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section ref={ref} className="relative overflow-hidden grain-bg pt-32 lg:pt-36 pb-20 lg:pb-28">
      <div className="hero-orb w-[520px] h-[520px] -top-40 -left-32 bg-gold-soft/40" />
      <div className="hero-orb w-[520px] h-[520px] top-20 -right-40 bg-champagne" />
      <FacetPattern className="absolute -right-48 top-24 h-[560px] w-[560px] text-gold/[0.06]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/60 backdrop-blur pl-1.5 pr-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-ivory">
                  <Gem className="h-3 w-3" />
                </span>
                Our story · Est. 1991
              </span>
              <span className="text-xs text-charcoal/45">
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-charcoal/70">About</span>
              </span>
            </motion.nav>

            <h1 className="mt-8 font-display text-[17vw] leading-[0.9] sm:text-8xl lg:text-[6.75rem] xl:text-[7.75rem] tracking-tight">
              <span className="block overflow-hidden pb-1">
                <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.1, ease: HERO_EASE }} className="block">
                  Trust, cut to
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-3">
                <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.22, ease: HERO_EASE }} className="block italic text-gradient-gold">
                  precision.
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="lg:col-span-5 lg:pb-6"
          >
            <div className="h-px w-16 bg-gold" />
            <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
              Rooted in a pioneering family spirit, Ravi Impex was established
              with a clear conviction: to bring trust, transparency and
              technical excellence to the diamond industry.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#story" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold text-ivory px-7 py-3.5 text-sm font-medium shadow-[0_24px_50px_-22px_var(--gold)]">
                <span className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative">Read our story</span>
                <ArrowDown className="relative h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/60 backdrop-blur px-7 py-3.5 text-sm font-medium text-gold hover:border-gold transition">
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mosaic */}
        <div className="mt-14 lg:mt-16 grid gap-4 lg:gap-5 lg:grid-cols-12 lg:h-[460px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: HERO_EASE }}
            className="group relative lg:col-span-7 overflow-hidden rounded-[2rem] bg-charcoal aspect-4/3 lg:aspect-auto"
          >
            <motion.img
              style={{ y: imgY }}
              src={craft}
              alt="Diamond craftsman inspecting a natural round brilliant"
              width={1200}
              height={900}
              fetchPriority="high"
              className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/75 via-charcoal/5 to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 sm:left-8 sm:bottom-8 sm:right-auto glass-card rounded-2xl px-4 py-3 sm:px-5 sm:py-4 sm:max-w-sm">
              <div className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-gold">The Ravi Impex way</div>
              <div className="sm:mt-1.5 font-display text-lg sm:text-2xl leading-snug">
                Natural round brilliants, recut until they make the grade.
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-rows-[1.1fr_1fr] gap-4 lg:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: HERO_EASE }}
              className="col-span-2 relative overflow-hidden rounded-[2rem] bg-charcoal text-ivory p-7 sm:p-8 flex flex-col justify-between min-h-[220px]"
            >
              <FacetPattern className="absolute -right-16 -top-16 h-72 w-72 text-gold-soft/15 animate-spin-slow" />
              <div className="relative flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">1991 — 2026</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory/70">
                  <Award className="h-3 w-3 text-gold-soft" />
                  RJC Certified
                </span>
              </div>
              <div className="relative flex items-end gap-4">
                <div className="font-display text-7xl sm:text-8xl leading-none pb-1 text-gradient-light">
                  <Counter to={35} suffix="" />
                </div>
                <div className="pb-1">
                  <div className="font-display text-2xl leading-tight">Years of</div>
                  <div className="font-display text-2xl leading-tight italic text-gold-soft">craftsmanship</div>
                </div>
              </div>
            </motion.div>

            {[
              { img: processRough, k: "From rough", alt: "Natural rough diamonds" },
              { img: processPolish, k: "To radiance", alt: "Diamond on a polishing wheel" },
            ].map((t, i) => (
              <motion.div
                key={t.k}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.62 + i * 0.1, ease: HERO_EASE }}
                className="group relative overflow-hidden rounded-[1.75rem] aspect-square lg:aspect-auto"
              >
                <img src={t.img} alt={t.alt} width={1408} height={1008} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute left-4 bottom-4 flex items-center gap-2 text-ivory">
                  <span className="text-[10px] tracking-[0.25em] text-gold-soft">0{i + 1}</span>
                  <span className="font-display text-lg sm:text-xl">{t.k}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LEGACY ---------------- */
function Legacy() {
  return (
    <section id="story" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <Reveal>
          <div className="relative pb-10 pr-6 sm:pr-10">
            <img src={atelierLoupe} alt="Craftsman inspecting a round diamond under a loupe" loading="lazy" width={1200} height={1400} className="rounded-[2rem] w-full aspect-4/5 object-cover" />
            <img src={heroTweezers} alt="Natural round brilliant held in tweezers" loading="lazy" width={1408} height={1600} className="absolute bottom-0 right-0 w-[44%] aspect-4/5 object-cover rounded-[1.5rem] ring-8 ring-ivory shadow-[0_40px_80px_-30px_oklch(0.25_0.03_50/0.5)]" />
            <div className="absolute -top-6 -left-4 sm:-left-8 grid h-28 w-28 sm:h-32 sm:w-32 place-items-center rounded-full bg-charcoal text-ivory shadow-xl">
              <FacetPattern className="absolute inset-2 text-gold-soft/25 animate-spin-slow" />
              <div className="relative text-center">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">Est.</div>
                <div className="font-display text-3xl sm:text-4xl leading-none">1991</div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionEyebrow>Our legacy</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
            Three decades of <span className="italic text-gradient-gold">nature's finest.</span>
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed text-lg">
            Established in 1991 with a pioneering family spirit, Ravi Impex set
            out to bring trust, transparency and technical excellence to the
            diamond industry.
          </p>
          <p className="mt-4 text-charcoal/70 leading-relaxed">
            For over three decades, we have proudly grown into one of the
            leading manufacturers of the world's most precisely cut and
            polished diamonds. Guided by integrity and a commitment to
            tomorrow, our leadership ensures we continue to advance with
            conviction and purpose.
          </p>
          <p className="mt-4 text-charcoal/70 leading-relaxed">
            Our commitment to our customers means transparency, ethical
            sourcing and zero tolerance towards conflict diamonds — whilst
            adhering to each and every need of our clients.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-gold/20 py-6">
            {[["1991", "Established"], ["35", "Years of craft"], ["100%", "Natural"]].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-3xl sm:text-4xl text-gradient-gold">{k}</div>
                <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-charcoal/50">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-charcoal text-ivory px-7 py-3.5 text-sm font-medium hover:bg-gold transition">
              Explore our diamonds
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/process" className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm font-medium hover:border-gold hover:text-gold transition">
              See our process
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CREDENTIAL MARQUEE ---------------- */
function CredentialMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-cream/70 py-5">
      <div className="flex w-max animate-marquee">
        {[...credentials, ...credentials].map((c, i) => (
          <span key={i} aria-hidden={i >= credentials.length} className="flex items-center gap-6 px-6 font-display text-xl sm:text-2xl italic text-charcoal/70 whitespace-nowrap">
            {c}
            <Diamond className="h-3 w-3 text-gold not-italic" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PHILOSOPHY ---------------- */
function Philosophy() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <FacetPattern className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 text-gold/[0.07]" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <div className="flex justify-center"><SectionEyebrow>Our philosophy</SectionEyebrow></div>
          <h2 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1]">
            One shape. <span className="italic text-gradient-gold">Perfected.</span>
          </h2>
          <div className="mx-auto mt-8 h-px w-20 bg-gold" />
          <p className="mt-8 mx-auto max-w-2xl text-lg text-charcoal/70 leading-relaxed">
            We specialise in manufacturing precisely cut round diamonds — and
            only round diamonds. That focus lets us hold every natural round
            brilliant to the same exacting standard, matched for colour,
            clarity, cut and precise diameter, so it integrates seamlessly
            into intricate, high-precision jewellery.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[24px] border border-gold/20 bg-gold/20">
          {specs.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.06} className="h-full">
              <div className="h-full bg-ivory px-4 py-7">
                <div className="font-display text-2xl sm:text-3xl">
                  {s.k}
                  {s.u && <span className="ml-1 text-base text-charcoal/50">{s.u}</span>}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-gold">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      <FacetPattern className="absolute -right-24 -top-24 h-[420px] w-[420px] text-gold-soft/10" />
      <FacetPattern className="absolute -left-32 -bottom-40 h-[380px] w-[380px] text-gold-soft/[0.07]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-4">
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
            <span className="h-px w-8 bg-gold-soft" />
            By the numbers
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl leading-[1.05]">
            A legacy measured in <span className="italic text-gradient-light">trust.</span>
          </h2>
          <p className="mt-6 text-ivory/65 leading-relaxed">
            Thirty-five years of steady growth — from our manufacturing floor
            in Surat to jewellery houses across the world.
          </p>
        </Reveal>
        <div className="lg:col-span-8 grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-ivory/10">
          {footprint.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="h-full">
              <div className="h-full bg-charcoal p-6 sm:p-10">
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

/* ---------------- CORE VALUES ---------------- */
function Values() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <SectionEyebrow>Core values</SectionEyebrow>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
              Four principles, <span className="italic text-gradient-gold">one standard.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-charcoal/70 leading-relaxed text-lg">
              Trust, transparency, consistency and quality have guided Ravi
              Impex since 1991 — and they are the standard every diamond is
              held to.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-border bg-white p-7 flex flex-col hover:border-gold hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_oklch(0.42_0.05_50/0.45)] transition-all duration-500">
                <FacetPattern className="absolute -right-12 -top-12 h-40 w-40 text-gold/[0.08] group-hover:text-gold/15 transition-colors" />
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-linear-to-br from-gold to-bronze grid place-items-center text-ivory">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl text-gold/30 group-hover:text-gold transition-colors">0{i + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-3xl">{v.t}</h3>
                <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{v.d}</p>
                <div className="mt-auto pt-8">
                  <div className="divider-gold" />
                  <div className="mt-5 font-display text-3xl text-gradient-gold">{v.stat}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-charcoal/50">{v.statLabel}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- THE STANDARD ---------------- */
function TheStandard() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal text-ivory">
      <motion.img style={{ y }} src={certifiedDiamond} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-[124%] -top-[12%] w-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-linear-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-28 lg:py-40 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
            <span className="h-px w-8 bg-gold-soft" />
            The Ravi Impex standard
            <span className="h-px w-8 bg-gold-soft" />
          </div>
          <blockquote className="mt-8 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            “Diamonds that do not make our grades are{" "}
            <span className="italic text-gradient-light">recut until they do.</span>”
          </blockquote>
          <div className="mx-auto mt-10 h-px w-24 bg-gold-soft/60" />
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-ivory/60">Every stone · Every parcel</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- VISION · MISSION · GOALS ---------------- */
function Direction() {
  return (
    <section className="py-24 lg:py-32 bg-[#F9F5EF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionEyebrow>Vision · Mission · Goals</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
            Shaping the future of <span className="italic text-gradient-gold">fine diamonds.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-5 lg:grid-rows-2">
          <Reveal className="lg:col-span-3 lg:row-span-2 h-full">
            <div className="relative h-full min-h-[460px] overflow-hidden rounded-[28px] bg-charcoal text-ivory">
              <img src={heroDiamond} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-linear-to-tr from-charcoal via-charcoal/70 to-transparent" />
              <div className="relative h-full flex flex-col p-8 sm:p-12">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ivory/10 text-gold-soft">
                    <Eye className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">01 — Our vision</span>
                </div>
                <div className="mt-auto pt-16">
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
                    The trusted global powerhouse for <span className="italic text-gradient-light">precision-cut diamonds.</span>
                  </h3>
                  <p className="mt-6 max-w-xl text-ivory/70 leading-relaxed">
                    Shaping the future of fine diamonds with precision, absolute
                    integrity and uncompromised global excellence — fuelling the
                    world's finest luxury brands through unmatched quality, total
                    transparency and unwavering reliability.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          {[
            { icon: Target, n: "02", t: "Our Mission", d: "To lead with absolute ethics and precision innovation — cultivating exceptional talent and crafting a sustainable, brilliant future for global luxury." },
            { icon: TrendingUp, n: "03", t: "Our Goals", d: "Expanding global reach, embracing innovative technology, driving sustainable excellence and building a legacy of shared, long-term success for everyone we serve." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={0.08 * (i + 1)} className="lg:col-span-2 h-full">
              <div className="h-full rounded-[28px] border border-gold/25 bg-white p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{c.n}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl">{c.t}</h3>
                <div className="mt-4 h-px w-14 bg-gold" />
                <p className="mt-5 text-charcoal/70 leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MANUFACTURING ---------------- */
function Manufacturing() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-20 items-start">
        <Reveal className="lg:sticky lg:top-24">
          <SectionEyebrow>Manufacturing excellence</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
            Precision. Expertise. <span className="italic text-gradient-gold">Technology.</span>
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed">
            Ravi Impex combines advanced manufacturing capabilities, skilled
            craftsmanship and modern technology. From Sarine planning to the
            final facet, every stage happens inside our own facility — so
            every parcel is as consistent as the last.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img src={sortingTray} alt="Sorted round diamonds" loading="lazy" width={1200} height={1400} className="rounded-[20px] aspect-square object-cover" />
            <img src={polishWheel} alt="Diamond on a polishing wheel" loading="lazy" width={1200} height={1400} className="rounded-[20px] aspect-square object-cover" />
          </div>
          <Link to="/process" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-charcoal transition">
            Explore the full process
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {manufacturing.map((c, i) => (
            <Reveal key={c.t} delay={(i % 2) * 0.06} className="h-full">
              <div className="group h-full rounded-[24px] border border-border bg-white/70 backdrop-blur p-7 hover:border-gold/60 hover:bg-white transition-all">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold group-hover:bg-gold group-hover:text-ivory transition-colors">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{c.t}</h3>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-gold/90">{c.s}</div>
                <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ETHICS ---------------- */
function Ethics() {
  return (
    <section className="py-24 lg:py-32 bg-cream/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src={roughOnLeaf} alt="Natural diamond resting on a leaf" loading="lazy" width={1600} height={1200} className="rounded-[2rem] w-full aspect-4/3 object-cover" />
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto rounded-2xl border border-gold/20 bg-ivory/90 backdrop-blur px-5 py-4">
              <div className="text-[10px] uppercase tracking-[0.3em] text-charcoal/50">Provenance</div>
              <div className="mt-1 font-display text-xl">RJC Certified · Kimberley Process</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionEyebrow>Driven by ethics</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
            Built on trust &amp; <span className="italic text-gradient-gold">responsibility.</span>
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed">
            Ravi Impex is RJC Certified and follows responsible sourcing and
            ethical business practices. Our rough diamond sourcing and trade
            adhere to the Kimberley Process Certification Scheme, supporting
            transparency across the supply chain.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {ethics.map((b) => (
              <div key={b.t} className="rounded-[20px] border border-gold/25 bg-white p-5">
                <b.icon className="h-5 w-5 text-gold" />
                <div className="mt-3 font-display text-xl">{b.t}</div>
                <p className="mt-1 text-sm text-charcoal/60 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- GLOBAL REACH ---------------- */
function GlobalReach() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-gold-soft/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center"><SectionEyebrow>Global reach</SectionEyebrow></div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
              From Surat <span className="italic text-gradient-gold">to the world.</span>
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              Precision-cut natural diamonds supplied to jewellery manufacturers
              and luxury brands across more than 10 countries.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 grid lg:grid-cols-12 overflow-hidden rounded-[32px] border border-gold/15 bg-white shadow-[0_60px_120px_-60px_oklch(0.25_0.03_50/0.4)]">
            <div className="relative lg:col-span-4 overflow-hidden bg-charcoal text-ivory p-8 sm:p-10">
              <FacetPattern className="absolute -right-16 -bottom-16 h-64 w-64 text-gold-soft/10" />
              <MapPin className="relative h-6 w-6 text-gold-soft" />
              <div className="relative mt-6 text-[10px] uppercase tracking-[0.3em] text-gold-soft">Head office</div>
              <div className="relative mt-2 font-display text-4xl">Surat, India</div>
              <div className="relative mt-8 divider-gold opacity-60" />
              <div className="relative mt-6 text-[10px] uppercase tracking-[0.3em] text-ivory/50">Offices</div>
              <div className="relative mt-2 text-ivory/85">Surat · Mumbai · Antwerp</div>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-gold/10">
              {regions.map((g) => (
                <div key={g.r} className="bg-white p-7 sm:p-8">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{g.r}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.c.map((c) => (
                      <span key={c} className="rounded-full border border-gold/25 bg-ivory px-3.5 py-1.5 text-xs font-medium text-charcoal/75">{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {assurances.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.05} className="h-full">
              <div className="h-full flex items-center gap-3 rounded-full border border-gold/20 bg-white/80 px-4 sm:px-5 py-3">
                <a.icon className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-xs sm:text-sm text-charcoal/80">{a.t}</span>
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
          <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal text-ivory px-8 py-20 md:p-24">
            <img src={diamondsLoose} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/80 to-charcoal/30" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-gold-soft">
                  <span className="h-px w-8 bg-gold-soft" />
                  Work with us
                </div>
                <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1]">
                  Let's begin a <span className="italic text-gradient-light">conversation.</span>
                </h2>
                <p className="mt-6 max-w-xl text-ivory/70 leading-relaxed">
                  Whether you need a single parcel or a recurring supply of
                  precision-cut natural rounds, our team will answer within one
                  working day.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-4 lg:items-end">
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
