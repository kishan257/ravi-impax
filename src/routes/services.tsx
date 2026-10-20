import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { ArrowRight, Award, Compass, Gem, Globe2, Leaf, Scissors, Sparkles, Users } from "lucide-react";
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

const specs = [
  { k: "Shape", v: "Round Brilliant" },
  { k: "Colour", v: "DEF / GH" },
  { k: "Clarity", v: "IF–VVS / VS1 / VS2" },
  { k: "Size", v: "0.90 – 3.30 mm" },
  { k: "Calibration", v: "Precisely calibrated to 0.05 mm" },
  { k: "Type", v: "Natural Diamonds" },
];

const items = [
  { icon: Sparkles, t: "Colour & Clarity Matched", d: "Every diamond is carefully matched for colour, clarity and cut, delivering exceptional uniformity across a collection.", img: collection, tag: "Consistency" },
  { icon: Compass, t: "Calibrated to 0.05 mm", d: "Precise diameters from 0.90 to 3.30 mm, designed to integrate seamlessly into intricate jewellery and high-precision settings.", img: diamondsLoose, tag: "Precision" },
  { icon: Scissors, t: "Rough to Polish In-House", d: "Sarine planning, laser sawing, bruting and polishing — every stage inside our own manufacturing facility.", img: processPolish, tag: "Manufacturing" },
  { icon: Leaf, t: "Natural & Ethically Sourced", d: "RJC Certified and Kimberley Process compliant, with zero tolerance towards conflict diamonds.", img: processRough, tag: "Provenance" },
];

const footprint = [
  { icon: Gem, k: "75,000+", v: "Rough carats manufactured annually" },
  { icon: Globe2, k: "10+", v: "Countries exported to" },
  { icon: Users, k: "100+", v: "Clients served worldwide" },
  { icon: Award, k: "30+", v: "Years of industry expertise" },
];

function Services() {
  return (
    <PageShell
      eyebrow="Precision-cut rounds"
      title={<>Engineered to <span className="italic text-gradient-gold">perfection.</span></>}
      subtitle="Nature's finest diamonds — meticulously crafted natural round brilliants, developed for leading jewellery houses and designers who expect uncompromising standards."
    >
      {/* Product + specifications */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <img src={heroDiamond} alt="Natural round brilliant diamond" loading="lazy" width={1200} height={1200} className="rounded-[2rem] w-full aspect-square object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionEyebrow>Product specifications</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl">One shape. Perfected.</h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              Bespoke jewellery demands more than brilliance — it demands
              precision, consistency and exceptional craftsmanship. We
              manufacture only the round brilliant cut, and every diamond is
              matched for colour, clarity, cut and precise diameter.
            </p>
            <dl className="mt-8 rounded-[24px] border border-gold/30 bg-white divide-y divide-border/70 px-6">
              {specs.map((s) => (
                <div key={s.k} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-charcoal/50">{s.k}</dt>
                  <dd className="font-display text-lg sm:text-xl text-right">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Why our rounds */}
      <section className="py-20 lg:py-24 bg-cream/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow>Why our rounds</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl max-w-2xl">
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

      {/* Global footprint */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex justify-center"><SectionEyebrow>Our global footprint</SectionEyebrow></div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {footprint.map((c, i) => (
              <Reveal key={c.v} delay={i * 0.05}>
                <div className="h-full rounded-[28px] bg-white border border-border p-6 text-center">
                  <c.icon className="mx-auto h-5 w-5 text-gold" />
                  <div className="mt-4 font-display text-4xl md:text-5xl text-gradient-gold">{c.k}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-charcoal/55">{c.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-14 text-center">
              <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-ivory font-medium hover:bg-gold hover:text-ivory transition">
                Request a parcel
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
