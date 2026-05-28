import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, MapPin, Cpu, SlidersHorizontal, Wrench, Cog, Apple, Gamepad2, HardDrive, Server, Network, Star, Building2, Package, Store, Menu, Share2, Flag, LifeBuoy, Lightbulb, Keyboard, Moon, Sun, MessageSquare, Sparkles, LogIn, LogOut, LocateFixed, History, Mail } from "lucide-react";


import { SHOPS, ALL_CITIES, ALL_TAGS } from "@/data/shops";
import { ShopCard } from "@/components/ShopCard";
import { ShopMap } from "@/components/ShopMap";
import { Splash } from "@/components/Splash";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { getUserSearchProfile, saveUserSearchProfile } from "@/lib/user-preferences.functions";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChipFinder Iraq — Find Computer Shops Across Iraq" },
      { name: "description", content: "Search local computer shops across Iraq — Baghdad, Erbil, Basra, Mosul, Hillah (Babylon), Najaf and more." },
      { property: "og:title", content: "ChipFinder Iraq — Find Computer Shops Across Iraq" },
      { property: "og:description", content: "Search local computer shops across Iraq by city and service." },
    ],
  }),
  component: Index,
});

const CATEGORY_ICONS: Record<string, typeof Wrench> = {
  Repairs: Wrench,
  "Custom Builds": Cog,
  Apple: Apple,
  Gaming: Gamepad2,
  "Used Gear": HardDrive,
  Workstations: Server,
  Networking: Network,
  Parts: Cpu,
};

const OWNER_EMAIL = "hiihiinnnn@gmail.com";

const gmailComposeUrl = (subject: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(OWNER_EMAIL)}&su=${encodeURIComponent(subject)}`;

type AppUser = { id: string; email?: string; phone?: string };
type SavedSearch = { id: string; query: string; city: string; tag: string; created_at: string };

const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  Baghdad: { lat: 33.3152, lng: 44.3661 },
  Erbil: { lat: 36.1911, lng: 44.0092 },
  Basra: { lat: 30.5085, lng: 47.7804 },
  Mosul: { lat: 36.3489, lng: 43.1577 },
  Najaf: { lat: 31.9996, lng: 44.3148 },
  Karbala: { lat: 32.6160, lng: 44.0249 },
  Sulaymaniyah: { lat: 35.5558, lng: 45.4351 },
  Kirkuk: { lat: 35.4681, lng: 44.3922 },
  Duhok: { lat: 36.8665, lng: 42.9885 },
  Hillah: { lat: 32.4770, lng: 44.4200 },
};

const distanceKm = (a: { lat: number; lng: number }, b: { lat: number; lng: number }) => {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
};

function Index() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState<string>("All cities");
  const [tag, setTag] = useState<string>("All services");
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const shareSite = async () => {
    const url = typeof window !== "undefined" ? window.location.origin : "";
    try {
      if (navigator.share) await navigator.share({ title: "ChipFinder Iraq", url });
      else { await navigator.clipboard.writeText(url); alert("Link copied!"); }
    } catch {}
    setMenuOpen(false);
  };

  const surpriseMe = () => {
    const s = SHOPS[Math.floor(Math.random() * SHOPS.length)];
    setCity(s.city);
    setTag("All services");
    setQuery(s.name);
    setMenuOpen(false);
    document.getElementById("browse")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        document.getElementById("cf-search")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);




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

  const cityCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const s of SHOPS) m.set(s.city, (m.get(s.city) ?? 0) + 1);
    return m;
  }, []);

  return (
    <>
      <Splash />
      <div className="min-h-screen overflow-x-hidden bg-background">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-blue-700/20 bg-gradient-to-r from-steel-900 via-blue-700 to-steel-700 text-primary-foreground shadow-sm">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 lg:px-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15 ring-1 ring-white/20 backdrop-blur">
                <Cpu className="h-4 w-4" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight">ChipFinder Iraq</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a href="#browse" className="hover:text-white">Browse</a>
              <a href="#cities" className="hover:text-white">Cities</a>
              <a href="#services" className="hover:text-white">Services</a>
              <Link to="/parts" className="hover:text-white">Repair parts</Link>
              <Link to="/list-shop" className="hover:text-white">For shop owners</Link>
            </nav>
            <div className="flex items-center gap-2">
              <Link
                to="/list-shop"
                className="hidden items-center gap-1.5 rounded-md border border-white/30 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:flex"
              >
                <Store className="h-4 w-4" /> List your shop
              </Link>
              <Link
                to="/parts"
                className="flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                <Package className="h-4 w-4" /> Find parts
              </Link>

              {/* Cool stuff menu */}
              <div ref={menuRef} className="relative">
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-label="Open menu"
                  aria-expanded={menuOpen}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:bg-white/10"
                >
                  <Menu className="h-4 w-4" />
                </button>
                {menuOpen && (
                  <div className="absolute right-0 top-11 z-30 w-64 overflow-hidden rounded-xl border border-border bg-card text-foreground shadow-xl ring-1 ring-black/5">
                    <div className="border-b bg-gradient-to-r from-blue-50 to-card px-3 py-2.5">
                      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                        <Sparkles className="h-3.5 w-3.5" /> Quick tools
                      </p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">Handy extras for power users</p>
                    </div>
                    <ul className="p-1 text-sm">
                      <li>
                        <button onClick={surpriseMe} className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left hover:bg-muted">
                          <Lightbulb className="h-4 w-4 text-amber-500" /> Surprise me — random shop
                        </button>
                      </li>
                      <li>
                        <button onClick={shareSite} className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left hover:bg-muted">
                          <Share2 className="h-4 w-4 text-blue-600" /> Share ChipFinder
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { setDark((v) => !v); setMenuOpen(false); }}
                          className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left hover:bg-muted"
                        >
                          {dark ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4 text-slate-700" />}
                          {dark ? "Light mode" : "Dark mode"}
                        </button>
                      </li>
                      <li className="my-1 border-t" />
                      <li>
                        <Link to="/list-shop" onClick={() => setMenuOpen(false)} className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 hover:bg-muted">
                          <Store className="h-4 w-4 text-emerald-600" /> List your shop
                        </Link>
                      </li>
                      <li>
                        <a href="mailto:hiihiinnnn@gmail.com?subject=Suggest%20a%20shop" onClick={() => setMenuOpen(false)} className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 hover:bg-muted">
                          <MessageSquare className="h-4 w-4 text-blue-600" /> Suggest a shop
                        </a>
                      </li>
                      <li>
                        <a href="mailto:hiihiinnnn@gmail.com?subject=Report%20an%20issue" onClick={() => setMenuOpen(false)} className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 hover:bg-muted">
                          <Flag className="h-4 w-4 text-rose-600" /> Report an issue
                        </a>
                      </li>
                      <li>
                        <a href="mailto:hiihiinnnn@gmail.com?subject=Help" onClick={() => setMenuOpen(false)} className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 hover:bg-muted">
                          <LifeBuoy className="h-4 w-4 text-violet-600" /> Help & support
                        </a>
                      </li>
                      <li className="my-1 border-t" />
                      <li className="px-2.5 py-2 text-[11px] text-muted-foreground">
                        <p className="mb-1 flex items-center gap-1.5 font-semibold text-foreground">
                          <Keyboard className="h-3.5 w-3.5" /> Shortcuts
                        </p>
                        <p>Press <kbd className="rounded border bg-muted px-1">{"/"}</kbd> to search · <kbd className="rounded border bg-muted px-1">Esc</kbd> closes menu</p>

                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Live highlights ticker */}
          <div className="border-t border-white/10 bg-black/20">
            <div className="mx-auto flex max-w-[1600px] items-center gap-2 px-4 py-2 lg:px-6">
              <span className="hidden shrink-0 items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live
              </span>
              <div className="relative flex-1 overflow-hidden">
                <div className="flex animate-[marquee_40s_linear_infinite] gap-8 whitespace-nowrap text-xs text-white/85">
                  {(() => {
                    const top = [...SHOPS].sort((a, b) => b.rating - a.rating)[0];
                    const biggest = [...ALL_CITIES].sort((a, b) => (cityCounts.get(b) ?? 0) - (cityCounts.get(a) ?? 0))[0];
                    const items = [
                      { icon: Star, text: `Top rated: ${top.name} — ${top.rating.toFixed(1)}★` },
                      { icon: Building2, text: `Most shops in ${biggest} (${cityCounts.get(biggest)} listed)` },
                      { icon: Package, text: `Repair parts catalog now open — browse CPUs, GPUs, SSDs` },
                      { icon: Cpu, text: `${SHOPS.length} verified shops across ${ALL_CITIES.length} cities` },
                      { icon: Wrench, text: `Same-day repairs available in Baghdad & Erbil` },
                      { icon: Gamepad2, text: `Custom gaming builds trending this week` },
                      { icon: Store, text: `Shop owner? List your store free — get found on the map` },
                    ];
                    return [...items, ...items].map((it, i) => {
                      const Icon = it.icon;
                      return (
                        <span key={i} className="flex items-center gap-1.5">
                          <Icon className="h-3.5 w-3.5 text-blue-200" />
                          <span>{it.text}</span>
                          <span className="text-white/30">•</span>
                        </span>
                      );
                    });
                  })()}
                </div>
              </div>
            </div>
          </div>

        </header>

        {/* Hero search bar */}
        <section className="border-b bg-gradient-to-b from-blue-50 via-steel-100 to-background">
          <div className="mx-auto max-w-[1600px] px-4 py-10 lg:px-6 lg:py-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-700/20 bg-card px-3 py-1 text-xs text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                {SHOPS.length} verified shops across {ALL_CITIES.length} Iraqi cities
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
                Find the right computer shop in Iraq.
              </h1>
              <p className="mt-3 text-base text-muted-foreground lg:text-lg">
                From Baghdad and Hillah to Erbil and Basra — search local repair labs, custom build experts, and used-gear specialists.
              </p>
            </div>

            {/* Search controls */}
            <div className="mt-6 grid gap-2 rounded-xl border bg-card p-2 shadow-sm lg:grid-cols-[1fr_auto_auto_auto]">
              <div className="flex items-center gap-2 rounded-lg px-3 lg:border-r">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search shop, service, or address… (press /)"
                  id="cf-search"

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
              <button className="h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Main layout: cities sidebar + list + map */}
        <section id="browse" className="mx-auto max-w-[1600px] px-4 py-6 lg:px-6">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-display text-lg font-semibold">
              {results.length} {results.length === 1 ? "shop" : "shops"} found
            </h2>
            <span className="text-xs text-muted-foreground">
              {city === "All cities" ? "All of Iraq" : city}
              {tag !== "All services" ? ` · ${tag}` : ""}
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[180px_1.1fr_1fr]">

            {/* Cities side menu */}
            <aside id="cities" className="min-w-0 lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto">

              <div className="rounded-xl border bg-card p-3">
                <h3 className="mb-2 flex items-center gap-1.5 px-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5" /> Cities
                </h3>
                <ul className="space-y-0.5">
                  <li>
                    <button
                      onClick={() => setCity("All cities")}
                      className={`flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                        city === "All cities" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                      }`}
                    >
                      <span>All cities</span>
                      <span className="text-xs text-muted-foreground">{SHOPS.length}</span>
                    </button>
                  </li>
                  {ALL_CITIES.map((c) => (
                    <li key={c}>
                      <button
                        onClick={() => setCity(c)}
                        className={`flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                          city === c ? "bg-accent text-accent-foreground font-medium" : "hover:bg-muted"
                        }`}
                      >
                        <span>{c}</span>
                        <span className="text-xs text-muted-foreground">{cityCounts.get(c)}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-lg border border-blue-700/20 bg-blue-50 p-3">
                  <p className="flex items-center gap-1 text-xs font-semibold text-blue-700">
                    <Star className="h-3.5 w-3.5 fill-blue-700" /> Top rated
                  </p>
                  <p className="mt-1 text-xs text-blue-700/80">
                    {[...SHOPS].sort((a, b) => b.rating - a.rating)[0].name}
                  </p>
                </div>
              </div>
            </aside>

            <div className="min-w-0 space-y-3 lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto lg:pr-2">

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

            {/* Map */}
            <div className="sticky top-32 h-[420px] lg:h-[calc(100vh-200px)]">
              <ShopMap shops={results} activeId={hoverId} onHover={setHoverId} />
            </div>
          </div>
        </section>

        <footer id="owners" className="border-t bg-card">
          <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center lg:px-6">
            <p>© {new Date().getFullYear()} ChipFinder Iraq · Demo directory.</p>
            <p>Created by <span className="font-semibold text-blue-700">Ali Raed</span></p>
          </div>
        </footer>
      </div>
    </>
  );
}
