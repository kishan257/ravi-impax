import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowRight, Gem, Leaf, ShieldCheck, Compass, Diamond } from "lucide-react";
import processRough from "@/assets/process-rough.jpg";
import processCutting from "@/assets/process-cutting.jpg";
import processPolish from "@/assets/process-polish.jpg";
import polishWheel from "@/assets/polish-wheel.jpg";
import certifiedDiamond from "@/assets/certified-diamond.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Rough to Polish — Ravi Impex" },
      { name: "description", content: "Planning, sawing, bruting and polishing — how Ravi Impex transforms nature's finest rough into precision-cut round brilliant diamonds." },
      { property: "og:title", content: "Rough to Polish — Ravi Impex" },
      { property: "og:description", content: "Advanced technology. Skilled craftsmanship. Meticulous precision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Process,
});

const steps = [
  {
    n: "01",
    t: "Planning",
    detail: "Precision begins at the rough",
    d: "Using advanced Sarine planning technology, our experts analyse each rough diamond to determine the most effective manufacturing strategy. Every angle, inclusion, proportion and potential outcome is carefully evaluated to achieve an optimal balance of yield, beauty and value.",
    img: processRough,
    tags: ["Sarine technology", "Inclusion mapping", "Yield & value"],
  },
  {
    n: "02",
    t: "Sawing",
    detail: "Precision in every cut",
    d: "Advanced laser technology enables highly accurate cutting and splitting of rough diamonds. This precise process allows us to separate the rough into carefully planned pieces while preserving the maximum potential of the original stone.",
    img: polishWheel,
    tags: ["Laser technology", "Accurate splitting", "Maximum potential"],
  },
  {
    n: "03",
    t: "Bruting",
    detail: "Shaping the future of brilliance",
    d: "The separated rough pieces undergo bruting, where they are carefully shaped into the desired round form. This critical stage establishes the foundation for the diamond's final proportions and prepares it for the creation of its polished brilliance.",
    img: processCutting,
    tags: ["Round form", "Proportions", "Foundation"],
  },
  {
    n: "04",
    t: "Polishing",
    detail: "Where craftsmanship creates brilliance",
    d: "The final transformation takes place through precision polishing. Our skilled craftsmen carefully create each facet through blocking and brillianteering, bringing symmetry, proportion, fire and brilliance to life — where technology meets craftsmanship.",
    img: processPolish,
    tags: ["Blocking", "Brillianteering", "Symmetry"],
  },
];

const promises = [
  { icon: Diamond, t: "100% Natural", d: "Natural diamonds only — nature's finest, perfected through every stage." },
  { icon: Compass, t: "Calibrated to 0.05 mm", d: "Every round matched for colour, clarity, cut and precise diameter." },
  { icon: Leaf, t: "Ethical Provenance", d: "RJC Certified, with rough sourced in line with the Kimberley Process." },
  { icon: ShieldCheck, t: "Recut Until Right", d: "Diamonds that do not make our grades are recut until they do." },
];

function Process() {
  return (
    <PageShell
      eyebrow="Rough to polish"
      title={<>From rough <span className="italic text-gradient-gold">to radiance.</span></>}
      subtitle="Every exceptional diamond begins with a unique piece of nature. Our rough-to-polish journey combines advanced technology, precision planning and skilled craftsmanship to unlock the maximum potential of every rough diamond."
    >
      {/* Hero image */}
      <section className="relative pt-4 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[21/9] shadow-[0_60px_120px_-40px_oklch(0.22_0.02_60/0.35)]">
              <img src={certifiedDiamond} alt="Polished round brilliant diamond under studio light" className="w-full h-full object-cover" width={2100} height={900} />
              <div className="absolute inset-0 bg-linear-to-tr from-charcoal/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg text-ivory">
                <div className="text-xs uppercase tracking-[0.3em] text-gold-soft">Nature's finest diamonds — perfected through every stage</div>
                <p className="mt-3 font-display text-3xl md:text-4xl leading-[1.1]">
                  Advanced technology. Skilled craftsmanship. Meticulous precision.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline steps */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative">
            {/* Vertical spine */}
            <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden md:block w-px bg-linear-to-b from-transparent via-gold/40 to-transparent" />

            <div className="space-y-24">
              {steps.map((s, i) => {
                const reverse = i % 2 === 1;
                return (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center ${reverse ? "md:[direction:rtl]" : ""}`}
                  >
                    <div className="relative [direction:ltr]">
                      <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_60px_120px_-40px_oklch(0.22_0.02_60/0.4)]">
                        <img src={s.img} alt={s.t} loading="lazy" width={1400} height={1000} className="w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-[1.05]" />
                        <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 via-transparent to-transparent" />
                      </div>
                      <div className="absolute -top-6 -left-4 md:-left-8 glass-card px-5 py-3 rounded-2xl font-display text-2xl">
                        Step {s.n}
                      </div>
                    </div>

                    <div className="[direction:ltr]">
                      <div className="text-xs uppercase tracking-[0.3em] text-gold">Stage {s.n}</div>
                      <div className="font-display text-[6rem] md:text-[8rem] leading-[0.85] text-gradient-gold -mt-2">{s.n}</div>
                      <h3 className="mt-3 font-display text-4xl md:text-5xl">{s.t}</h3>
                      <div className="mt-3 text-sm text-charcoal/60 italic">{s.detail}</div>
                      <div className="mt-6 h-px w-16 bg-gold" />
                      <p className="mt-6 text-charcoal/70 leading-relaxed max-w-lg text-lg">{s.d}</p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {s.tags.map((g) => (
                          <span key={g} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-sm hover:border-gold transition">
                            <Gem className="h-3.5 w-3.5 text-gold" />
                            {g}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="relative py-24 bg-cream/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow>Our promise</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Standards that <span className="italic text-gradient-gold">travel with the stone.</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="group relative h-full rounded-[1.75rem] p-8 bg-white border border-border hover:border-gold hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_40px_80px_-30px_oklch(0.42_0.05_50/0.4)]">
                  <div className="h-12 w-12 rounded-xl bg-linear-to-br from-gold to-bronze grid place-items-center text-ivory">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{p.t}</h3>
                  <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              From our wheel <span className="italic text-gradient-gold">to your design.</span>
            </h2>
            <p className="mt-6 text-charcoal/70 max-w-xl mx-auto">
              Every partnership begins with a conversation. Tell us your size, colour and clarity requirements, and we will prepare a matched parcel.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-ivory font-medium hover:bg-gold hover:text-ivory transition">
              Send an enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
