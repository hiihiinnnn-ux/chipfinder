import type { Shop } from "@/data/shops";

interface Props {
  shops: Shop[];
  activeId: string | null;
  onHover: (id: string | null) => void;
}

export function ShopMap({ shops, activeId, onHover }: Props) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border bg-card">
      {/* stylized grid map */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="var(--steel-200)" strokeWidth="0.15" />
          </pattern>
          <radialGradient id="glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="var(--steel-100)" />
            <stop offset="100%" stopColor="var(--steel-50)" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#glow)" />
        <rect width="100" height="100" fill="url(#grid)" />
        {/* faux roads */}
        <path d="M0 70 Q 30 50 60 60 T 100 45" stroke="var(--steel-200)" strokeWidth="0.8" fill="none" />
        <path d="M20 0 Q 30 40 10 70 T 30 100" stroke="var(--steel-200)" strokeWidth="0.6" fill="none" />
        <path d="M60 0 L 65 100" stroke="var(--steel-200)" strokeWidth="0.5" fill="none" />
      </svg>

      {shops.map((s) => {
        const isActive = s.id === activeId;
        return (
          <button
            key={s.id}
            onMouseEnter={() => onHover(s.id)}
            onMouseLeave={() => onHover(null)}
            className="group absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${s.x * 100}%`, top: `${s.y * 100}%` }}
            aria-label={s.name}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-card font-display text-xs font-semibold shadow-md transition-all ${
                isActive
                  ? "scale-125 bg-primary text-primary-foreground"
                  : "bg-steel-700 text-primary-foreground hover:scale-110"
              }`}
            >
              {s.rating.toFixed(1)}
            </div>
            <div
              className={`absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-0.5 text-[10px] text-primary-foreground transition-opacity ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {s.name}
            </div>
          </button>
        );
      })}

      <div className="absolute bottom-3 left-3 rounded-md border bg-card/90 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
        Live Map · Demo
      </div>
    </div>
  );
}
