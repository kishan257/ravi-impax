import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ravi Impex" },
      { name: "description", content: "Enquire about precision-cut natural round diamonds from Ravi Impex." },
      { property: "og:title", content: "Contact — Ravi Impex" },
      { property: "og:description", content: "Enquire about precision-cut natural round diamonds from Ravi Impex." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell
      eyebrow="Say hello"
      title={<>Begin a <span className="italic text-gradient-gold">quiet conversation.</span></>}
      subtitle="Tell us what you are looking for. We will reply personally, usually within a day."
    >
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-10 h-full">
              <h3 className="font-display text-3xl">Atelier</h3>
              <p className="mt-2 text-charcoal/60">By appointment only.</p>
              <ul className="mt-10 space-y-6">
                {[
                  { i: MapPin, l: "Surat · Mumbai · Antwerp" },
                  { i: Phone, l: "+91 000 000 0000" },
                  { i: Mail, l: "info@raviimpex.com" },
                ].map(({ i: Icon, l }) => (
                  <li key={l} className="flex items-start gap-4">
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-gold/15 text-gold shrink-0">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="pt-2 text-charcoal/80">{l}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 divider-gold" />
              <p className="mt-6 text-sm text-charcoal/60 leading-relaxed">
                Precision-cut natural rounds, 0.90 – 3.30 mm. Parcels are
                shipped fully insured to clients worldwide.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form className="space-y-5 rounded-3xl p-10 bg-white border border-border">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" placeholder="you@email.com" type="email" />
              </div>
              <Field label="Requirement" placeholder="Size (mm), colour, clarity, quantity…" />
              <div>
                <label className="text-xs uppercase tracking-widest text-charcoal/60">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your requirement."
                  className="mt-2 w-full rounded-2xl border border-border bg-ivory px-5 py-4 focus:outline-none focus:border-gold transition resize-none"
                />
              </div>
              <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-ivory hover:bg-gold hover:text-ivory transition">
                Send enquiry
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-charcoal/60">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-full border border-border bg-ivory px-5 py-3.5 focus:outline-none focus:border-gold transition"
      />
    </div>
  );
}
