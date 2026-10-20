import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { logoStacked, BRAND_NAME } from "@/assets/brand";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream text-charcoal border-t border-border">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gold-soft/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-champagne/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-10">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-md">
            <Link to="/" className="inline-flex items-center">
              <img src={logoStacked} alt={BRAND_NAME} width={498} height={477} className="h-32 md:h-36 w-auto object-contain" />
            </Link>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              Nature's finest diamonds — precision-cut natural round
              brilliants, manufactured with trust, transparency and
              consistency since 1991.
            </p>
            <form className="mt-8 flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 rounded-full bg-white border border-border px-5 py-3 text-sm placeholder:text-charcoal/40 focus:outline-none focus:border-gold"
              />
              <button className="shrink-0 rounded-full bg-gold text-ivory px-5 py-3 text-sm font-medium hover:bg-gold hover:text-ivory transition">
                Join
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
              Explore
            </h4>
            <ul className="mt-6 space-y-3 text-charcoal/75">
              {([
                { l: "About", to: "/about" },
                { l: "Our Diamonds", to: "/services" },
                { l: "Process", to: "/process" },
                { l: "Contact", to: "/contact" },
              ] as const).map(
                ({ l, to }) => (
                  <li key={l}>
                    <Link
                      to={to}
                      className="hover:text-gold transition group inline-flex items-center gap-1"
                    >
                      {l}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  </li>
                ),
              )}

            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
              Atelier
            </h4>
            <ul className="mt-6 space-y-4 text-charcoal/75 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-gold" />
                Surat · Mumbai · Antwerp
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-gold" />
                +91 000 000 0000
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-gold" />
                info@raviimpex.com
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-gold hover:text-ivory hover:border-gold transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-charcoal/50">
          <p>© {new Date().getFullYear()} Ravi Impex. All rights reserved.</p>
          <p className="font-display italic">Nature's Finest Diamonds.</p>
        </div>
      </div>
    </footer>
  );
}
