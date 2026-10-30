import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
      onComplete: () => setVal(to),
    });
    // Always land on the final figure, even if the animation is interrupted.
    return () => {
      controls.stop();
      setVal(to);
    };
  }, [inView, to]);
  return (
    <span ref={ref} className="inline-block">
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
