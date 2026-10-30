import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logoHorizontal, BRAND_NAME } from "@/assets/brand";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Our Diamonds" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-ivory/95 border-b border-border/60 shadow-[0_10px_40px_-30px_rgba(120,90,30,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className={`mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-16 md:h-[4.5rem]" : "h-20 md:h-24"}`}>
          <Link to="/" className="flex items-center group">
            <img
              src={logoHorizontal}
              alt={BRAND_NAME}
              width={773}
              height={167}
              className={`w-auto object-contain group-hover:scale-[1.02] transition-all duration-500 ${scrolled ? "h-8 md:h-10" : "h-9 sm:h-10 md:h-12"}`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative px-4 py-2 text-sm font-medium text-charcoal/75 hover:text-charcoal transition-colors"
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-linear-to-r from-transparent via-gold to-transparent"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gold text-ivory overflow-hidden"
            >
              <span className="relative z-10">Enquire Now</span>
              <span className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-gold-soft group-hover:bg-ivory transition-colors" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-full hover:bg-cream transition"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-ivory/95 backdrop-blur-xl pt-24 px-8"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={l.to}
                    className="block py-4 border-b border-border font-display text-3xl text-charcoal"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center px-6 py-4 rounded-full bg-gold text-ivory font-medium"
              >
                Enquire Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
