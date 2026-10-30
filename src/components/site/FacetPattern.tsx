/* Decorative round-brilliant facet line drawing */
export function FacetPattern({ className = "" }: { className?: string }) {
  const pt = (r: number, a: number) => `${50 + r * Math.cos(a - Math.PI / 2)},${50 + r * Math.sin(a - Math.PI / 2)}`;
  const step = Math.PI / 4;
  return (
    <svg viewBox="0 0 100 100" className={`pointer-events-none ${className}`} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="0.35">
        <circle cx="50" cy="50" r="48" />
        <polygon points={Array.from({ length: 8 }, (_, i) => pt(24, i * step + step / 2)).join(" ")} />
        {Array.from({ length: 8 }, (_, i) => {
          const a = i * step;
          return (
            <g key={i}>
              <polyline points={`${pt(24, a - step / 2)} ${pt(36, a)} ${pt(24, a + step / 2)}`} />
              <polyline points={`${pt(24, a + step / 2)} ${pt(48, a + step / 2)}`} />
              <polyline points={`${pt(48, a - step / 2)} ${pt(36, a)} ${pt(48, a + step / 2)}`} />
              <polyline points={`${pt(36, a)} ${pt(48, a)}`} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
