import { MapPin, Star, Clock, Phone } from "lucide-react";
import type { Shop } from "@/data/shops";

interface Props {
  shop: Shop;
  active: boolean;
  onHover: (id: string | null) => void;
}

export function ShopCard({ shop, active, onHover }: Props) {
  return (
    <article
      onMouseEnter={() => onHover(shop.id)}
      onMouseLeave={() => onHover(null)}
      className={`group cursor-pointer rounded-xl border bg-card p-4 transition-all ${
        active ? "border-primary shadow-md" : "hover:border-steel-300"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-semibold text-foreground">
            {shop.name}
          </h3>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="truncate">{shop.address} · {shop.city}</span>
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1 rounded-md bg-secondary px-2 py-1">
          <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
          <span className="text-xs font-semibold">{shop.rating}</span>
          <span className="text-[10px] text-muted-foreground">({shop.reviews})</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {shop.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{shop.hours}</span>
        <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{shop.phone}</span>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${shop.name}, ${shop.address}, ${shop.city}, Iraq`)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="ml-auto flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-[11px] font-semibold text-primary-foreground hover:bg-blue-600"
        >
          <MapPin className="h-3 w-3" /> Directions
        </a>
      </div>

    </article>
  );
}
