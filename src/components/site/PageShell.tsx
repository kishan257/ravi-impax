import type { ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal, SectionEyebrow } from "@/components/site/Reveal";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ivory text-charcoal overflow-x-clip">
      <Navbar />
      <section className="relative pt-40 pb-20 grain-bg overflow-hidden">
        <div className="hero-orb w-[500px] h-[500px] -top-40 -left-32 bg-gold-soft/40" />
        <div className="hero-orb w-[500px] h-[500px] top-10 -right-40 bg-champagne" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <Reveal>
            <div className="flex justify-center"><SectionEyebrow>{eyebrow}</SectionEyebrow></div>
            <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-8xl leading-[1]">{title}</h1>
            {subtitle && (
              <p className="mt-8 max-w-2xl mx-auto text-lg text-charcoal/70">
                {subtitle}
              </p>
            )}
          </Reveal>
        </div>
      </section>
      {children}
      <Footer />
    </div>
  );
}
