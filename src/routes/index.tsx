import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, Cpu, SlidersHorizontal } from "lucide-react";
import { SHOPS, ALL_CITIES, ALL_TAGS } from "@/data/shops";
import { ShopCard } from "@/components/ShopCard";
import { ShopMap } from "@/components/ShopMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChipFinder Iraq — Find Computer Shops Across Iraq" },
      { name: "description", content: "Search local computer shops across Iraq — Baghdad, Erbil, Basra, Mosul, Najaf and more. Repairs, custom builds, used gear and parts." },
      { property: "og:title", content: "ChipFinder Iraq — Find Computer Shops Across Iraq" },
      { property: "og:description", content: "Search local computer shops across Iraq by city and service." },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState<string>("All cities");
  const [tag, setTag] = useState<string>("All services");
  const [hoverId, setHoverId] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SHOPS.filter((s) => {
      if (city !== "All cities" && s.city !== city) return false;
      if (tag !== "All services" && !s.tags.includes(tag)) return false;
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, city, tag]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Cpu className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">ChipFinder Iraq</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#" className="hover:text-foreground">Browse</a>
            <a href="#" className="hover:text-foreground">Cities</a>
            <a href="#" className="hover:text-foreground">For shop owners</a>
          </nav>
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-steel-700">
            List your shop
          </button>
        </div>
      </header>

      {/* Hero search bar */}
      <section className="border-b bg-gradient-to-b from-steel-100 to-background">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              {SHOPS.length} verified shops across {ALL_CITIES.length} Iraqi cities
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
              Find the right computer shop in Iraq.
            </h1>
            <p className="mt-3 text-base text-muted-foreground lg:text-lg">
              Search local repair labs, custom build experts, and used-gear specialists from Baghdad to Erbil.
            </p>
          </div>

          {/* Search controls */}
          <div className="mt-6 grid gap-2 rounded-xl border bg-card p-2 shadow-sm lg:grid-cols-[1fr_auto_auto_auto]">
            <div className="flex items-center gap-2 rounded-lg px-3 lg:border-r">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search shop, service, or address…"
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg px-3 lg:border-r">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="h-11 w-full bg-transparent text-sm outline-none"
              >
                <option>All cities</option>
                {ALL_CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2 rounded-lg px-3">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="h-11 w-full bg-transparent text-sm outline-none"
              >
                <option>All services</option>
                {ALL_TAGS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <button className="h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-steel-700">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Split: list + map */}
      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-lg font-semibold">
            {results.length} {results.length === 1 ? "shop" : "shops"} found
          </h2>
          <span className="text-xs text-muted-foreground">
            {city === "All cities" ? "All of Iraq" : city}
            {tag !== "All services" ? ` · ${tag}` : ""}
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-3 lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto lg:pr-2">
            {results.length === 0 ? (
              <div className="rounded-xl border border-dashed bg-card p-10 text-center text-sm text-muted-foreground">
                No shops match those filters. Try clearing the city or service.
              </div>
            ) : (
              results.map((s) => (
                <ShopCard key={s.id} shop={s} active={hoverId === s.id} onHover={setHoverId} />
              ))
            )}
          </div>
          <div className="sticky top-20 h-[420px] lg:h-[calc(100vh-200px)]">
            <ShopMap shops={results} activeId={hoverId} onHover={setHoverId} />
          </div>
        </div>
      </section>

      <footer className="border-t bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center lg:px-6">
          <p>© {new Date().getFullYear()} ChipFinder Iraq. Demo directory.</p>
          <p>Built with care for tinkerers, repairers, and builders.</p>
        </div>
      </footer>
    </div>
  );
}
