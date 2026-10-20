import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { ArrowRight, Award, Compass, Eye, Gem, Handshake, Leaf, ShieldCheck, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import heroDiamond from "@/assets/hero-diamond.jpg";
import craft from "@/assets/craft.jpg";
import sortingTray from "@/assets/sorting-tray.jpg";
import polishWheel from "@/assets/polish-wheel.jpg";
import collection from "@/assets/collection.jpg";
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

const values = [
  { icon: Handshake, t: "Trust", d: "Built on integrity and long-term relationships with every client we serve." },
  { icon: ShieldCheck, t: "Transparency", d: "Ethical sourcing and zero tolerance towards conflict diamonds, openly upheld." },
  { icon: Compass, t: "Consistency", d: "Every diamond matched for colour, clarity, cut and precise diameter." },
  { icon: Gem, t: "Quality", d: "Diamonds that do not make our grades are recut until they do." },
];

const direction = [
  {
    icon: Eye,
    t: "Our Vision",
    d: "Shaping the future of fine diamonds with precision, absolute integrity and uncompromised global excellence — to be the trusted global powerhouse for precision-cut diamonds, fuelling the world's finest luxury brands through unmatched quality, total transparency and unwavering reliability.",
  },
  {
    icon: Target,
    t: "Our Mission",
    d: "To lead with absolute ethics and precision innovation — cultivating exceptional talent and crafting a sustainable, brilliant future for global luxury.",
  },
  {
    icon: TrendingUp,
    t: "Our Goals",
    d: "Expanding global reach, embracing innovative technology, driving sustainable excellence, creating lasting value for everyone we serve and building a legacy of shared, long-term success.",
  },
];

const manufacturing = [
  {
    icon: Sparkles,
    t: "Elite Manufacturing",
    s: "Precision. Expertise. Technology.",
    d: "Ravi Impex combines advanced manufacturing capabilities, skilled craftsmanship and modern technology to deliver consistent, high-quality diamonds.",
  },
  {
    icon: Users,
    t: "Empowered by Community",
    s: "People behind the excellence.",
    d: "Our experienced and dedicated team drives our commitment to quality, continuous improvement and long-term customer relationships.",
  },
  {
    icon: Leaf,
    t: "Driven by Ethics",
    s: "Built on trust and responsibility.",
    d: "RJC Certified, with rough diamond sourcing and trade adhering to the Kimberley Process Certification Scheme — supporting transparency across the supply chain.",
  },
  {
    icon: Gem,
    t: "Round Brilliant Specialists",
    s: "One shape, perfected.",
    d: "We manufacture only precisely cut natural round brilliant diamonds, from 0.90 to 3.30 mm, calibrated to 0.05 mm.",
  },
];

function About() {
  return (
    <PageShell
      eyebrow="35 years of craftsmanship · 1991 – 2026"
      title={<>Trust, cut to <span className="italic text-gradient-gold">precision.</span></>}
      subtitle="Rooted in a pioneering family spirit, Ravi Impex was established with a clear conviction: to bring trust, transparency and technical excellence to the diamond industry."
    >
      {/* Story 1 */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <img src={heroDiamond} alt="Natural round brilliant diamond" loading="lazy" width={1200} height={1400} className="rounded-[2rem] w-full aspect-4/5 object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Nature's finest, precisely cut.</h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              For over three decades, we have proudly grown our business into
              one of the leading manufacturers of the world's most precisely
              cut and polished diamonds. Guided by integrity and a commitment
              to tomorrow, our leadership ensures we continue to advance with
              conviction and purpose.
            </p>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              We uphold integrity, excellence and responsible practices. Our
              commitment to our customers ensures transparency, ethical
              sourcing and zero tolerance towards conflict diamonds, whilst
              adhering to each and every need of our clients.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Natural diamonds only", "RJC Certified", "Kimberley Process compliant"].map((b) => (
                <span key={b} className="rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-xs tracking-wide">{b}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story 2 */}
      <section className="py-20 lg:py-24 bg-cream/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:order-2">
            <img src={craft} alt="Diamond cutter inspecting a round brilliant" loading="lazy" width={1200} height={900} className="rounded-[2rem] w-full aspect-4/3 object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Recut until they make the grade.</h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              We specialise in manufacturing "precisely cut" round diamonds —
              and only round diamonds. Every stone is held to the same
              standard, and diamonds that do not make our grades are recut
              until they do.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[["1991", "Established"], ["35", "Years"], ["10+", "Countries"]].map(([k, v]) => (
                <div key={v}>
                  <div className="font-display text-3xl sm:text-4xl">{k}</div>
                  <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-charcoal/50">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow>What we stand for</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl max-w-2xl">
              Trust · Transparency · <span className="italic text-gradient-gold">Consistency · Quality.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="h-full rounded-[28px] border border-border bg-white p-7 hover:border-gold hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_oklch(0.42_0.05_50/0.45)] transition-all">
                  <div className="h-11 w-11 rounded-xl bg-linear-to-br from-gold to-bronze grid place-items-center text-ivory">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{v.t}</h3>
                  <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision · Mission · Goals */}
      <section className="py-20 lg:py-28 bg-[#F9F5EF]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow>Vision · Mission · Goals</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl">
              Shaping the future of <span className="italic text-gradient-gold">fine diamonds.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {direction.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.08}>
                <div className="h-full rounded-[28px] border border-gold/25 bg-white p-8 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold">
                      <d.icon className="h-4 w-4" />
                    </span>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold">0{i + 1}</div>
                  </div>
                  <h3 className="mt-6 font-display text-3xl">{d.t}</h3>
                  <div className="mt-4 h-px w-14 bg-gold" />
                  <p className="mt-5 text-charcoal/70 leading-relaxed">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[42%_1fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <SectionEyebrow>Manufacturing</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
              Precision. Expertise. <span className="italic text-gradient-gold">Technology.</span>
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              From Sarine planning and laser sawing to bruting and polishing,
              every stage of manufacturing happens inside our own facility —
              so every parcel is as consistent as the last.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <img src={sortingTray} alt="Sorted round diamonds" loading="lazy" width={900} height={900} className="rounded-[20px] aspect-square object-cover" />
              <img src={polishWheel} alt="Diamond on a polishing wheel" loading="lazy" width={900} height={900} className="rounded-[20px] aspect-square object-cover" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {manufacturing.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <div className="h-full rounded-[24px] border border-border bg-white/70 backdrop-blur p-6">
                  <c.icon className="h-5 w-5 text-gold" />
                  <h3 className="mt-4 font-display text-2xl">{c.t}</h3>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-gold/90">{c.s}</div>
                  <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics & trust */}
      <section className="py-20 lg:py-28 bg-cream/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <img src={roughOnLeaf} alt="Natural diamond resting on a leaf" loading="lazy" width={1200} height={900} className="rounded-[2rem] w-full aspect-4/3 object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionEyebrow>Driven by ethics</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl">Built on trust and responsibility.</h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              Ravi Impex is RJC Certified and follows responsible sourcing and
              ethical business practices. Our rough diamond sourcing and trade
              adhere to the Kimberley Process Certification Scheme, supporting
              transparency and responsible practices across the supply chain.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Award, t: "RJC Certified" },
                { icon: ShieldCheck, t: "Kimberley Process" },
                { icon: Leaf, t: "Zero conflict diamonds" },
              ].map((b) => (
                <div key={b.t} className="rounded-[20px] border border-gold/30 bg-white p-5">
                  <b.icon className="h-5 w-5 text-gold" />
                  <div className="mt-3 text-sm font-medium">{b.t}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] border border-gold/25 bg-white">
              <img src={collection} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
              <div className="relative p-10 sm:p-14 text-center">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
                  Let's begin a <span className="italic text-gradient-gold">conversation.</span>
                </h2>
                <p className="mt-5 mx-auto max-w-xl text-charcoal/70 leading-relaxed">
                  Whether you need a single parcel or a recurring supply of
                  precision-cut natural rounds, our team will answer within one
                  working day.
                </p>
                <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold text-ivory hover:bg-charcoal px-8 py-4 text-sm font-medium hover:shadow-[0_20px_50px_-20px_oklch(0.42_0.05_50/0.6)] transition-all">
                  Contact us
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
