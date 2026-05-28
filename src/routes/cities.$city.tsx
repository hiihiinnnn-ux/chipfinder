import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Cpu, MapPin, Star } from "lucide-react";
import { SHOPS, ALL_CITIES, ALL_TAGS } from "@/data/shops";
import { ShopCard } from "@/components/ShopCard";
import { ShopMap } from "@/components/ShopMap";
import { useState } from "react";

export const Route = createFileRoute("/cities/$city")({
  loader: ({ params }) => {
    const cityName = ALL_CITIES.find((c) => c.toLowerCase() === params.city.toLowerCase());
    if (!cityName) throw notFound();
    return { cityName };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.cityName ?? "City";
    return {
      meta: [
        { title: `Computer shops in ${c} — ChipFinder Iraq` },
        { name: "description", content: `Find trusted computer shops, repair experts and custom PC builders in ${c}, Iraq.` },
        { property: "og:title", content: `Computer shops in ${c}` },
        { property: "og:description", content: `Browse local computer shops in ${c} — ratings, services, hours and directions.` },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <h1 className="font-display text-2xl font-bold">City not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">We don't have that city yet.</p>
      <Link to="/" className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
        Back to home
      </Link>
    </div>
  ),
  component: CityPage,
});

function CityPage() {
  const { cityName } = Route.useLoaderData();
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [tag, setTag] = useState<string>("All services");

  const cityShops = SHOPS.filter((s) => s.city === cityName);
  const filtered = tag === "All services" ? cityShops : cityShops.filter((s) => s.tags.includes(tag));
  const avg = (cityShops.reduce((s, x) => s + x.rating, 0) / cityShops.length).toFixed(2);
  const topRated = [...cityShops].sort((a, b) => b.rating - a.rating)[0];
  const cityTags = Array.from(new Set(cityShops.flatMap((s) => s.tags))).sort();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-gradient-to-r from-steel-900 via-blue-700 to-steel-700 text-primary-foreground">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 lg:px-6">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to ChipFinder
          </Link>
          <span className="flex items-center gap-1.5 font-display text-base">
            <Cpu className="h-4 w-4" /> ChipFinder Iraq
          </span>
        </div>
      </header>

      <section className="border-b bg-card">
        <div className="mx-auto max-w-[1400px] px-4 py-8 lg:px-6">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <MapPin className="h-3.5 w-3.5" /> City directory
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">
            Computer shops in {cityName}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {cityShops.length} {cityShops.length === 1 ? "shop" : "shops"} listed · average rating {avg} ★
            {topRated && <> · top rated: <span className="font-medium text-foreground">{topRated.name}</span></>}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <FilterChip active={tag === "All services"} onClick={() => setTag("All services")}>All services</FilterChip>
            {cityTags.map((t) => (
              <FilterChip key={t} active={tag === t} onClick={() => setTag(t)}>{t}</FilterChip>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1400px] px-4 py-6 lg:px-6">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-3 lg:max-h-[calc(100vh-260px)] lg:overflow-y-auto lg:pr-2">
            {filtered.length === 0 ? (
              <div className="rounded-xl border border-dashed bg-card p-10 text-center text-sm text-muted-foreground">
                No shops in {cityName} match that service yet.
              </div>
            ) : (
              filtered.map((s) => (
                <ShopCard key={s.id} shop={s} active={hoverId === s.id} onHover={setHoverId} />
              ))
            )}
          </div>
          <div className="sticky top-4 h-[420px] lg:h-[calc(100vh-260px)]">
            <ShopMap shops={filtered} activeId={hoverId} onHover={setHoverId} />
          </div>
        </div>

        <div className="mt-10 rounded-xl border bg-card p-5">
          <h2 className="font-display text-lg font-semibold">Other cities</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {ALL_CITIES.filter((c) => c !== cityName).map((c) => (
              <Link
                key={c}
                to="/cities/$city"
                params={{ city: c }}
                className="rounded-full border bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-[1400px] px-4 py-6 text-xs text-muted-foreground lg:px-6">
          © {new Date().getFullYear()} ChipFinder Iraq
        </div>
      </footer>
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
        active ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}

// suppress unused import warning if ALL_TAGS isn't referenced directly
void ALL_TAGS;
void Star;
