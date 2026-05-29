import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Cpu, ArrowLeft, Package, Store, CircleCheck, CircleAlert } from "lucide-react";
import { PARTS, PART_CATEGORIES, PART_BRANDS, formatIQD, type Part } from "@/data/parts";
import { SHOPS } from "@/data/shops";
import { useLang, type Lang } from "@/lib/use-lang";

export const Route = createFileRoute("/parts")({
  head: () => ({
    meta: [
      { title: "Find Repair Parts — ChipFinder Iraq" },
      { name: "description", content: "Search computer repair parts across Iraq — RAM, SSDs, GPUs, laptop batteries, screens, chargers and more. Filter by category, brand, condition and price." },
      { property: "og:title", content: "Find Repair Parts — ChipFinder Iraq" },
      { property: "og:description", content: "Search and compare computer repair parts across Iraqi shops." },
    ],
  }),
  component: PartsPage,
});

const T = {
  en: {
    back: "Back to shops",
    badge: (n: number, s: number) => `${n} parts indexed across ${s} shops`,
    title: "Find repair parts for computers",
    sub: "Search by part name, brand, or compatibility. Then we'll show you which shops across Iraq have it in stock.",
    searchPh: "e.g. 'DDR4 16GB', 'MacBook battery', 'RTX 3060', 'HP charger'…",
    clear: "Clear",
    category: "Category", brand: "Brand", condition: "Condition", all: "All",
    maxPrice: (v: string) => `Max price · ${v}`,
    inStockOnly: "In stock only",
    reset: "Reset filters",
    matches: (n: number) => `${n} ${n === 1 ? "part" : "parts"} match`,
    allCategories: "All categories",
    empty: "No parts match those filters. Try widening the price or clearing filters.",
    fits: "Fits:",
    inStock: (n: number) => `${n} in stock`,
    outOfStock: "Out of stock",
    shopsCount: (n: number) => `${n} ${n === 1 ? "shop" : "shops"}`,
    more: (n: number) => `+${n} more`,
    footer: "Demo directory.", createdBy: "Created by",
    condNew: "New", condUsed: "Used", condRefurb: "Refurbished",
  },
  ar: {
    back: "الرجوع إلى المحلات",
    badge: (n: number, s: number) => `${n} قطعة مفهرسة في ${s} محل`,
    title: "ابحث عن قطع صيانة الكمبيوتر",
    sub: "ابحث باسم القطعة أو الماركة أو التوافق، وسنعرض لك المحلات التي تتوفر فيها عبر العراق.",
    searchPh: "مثلاً: 'DDR4 16GB' أو 'بطارية ماك بوك' أو 'RTX 3060' أو 'شاحن HP'…",
    clear: "مسح",
    category: "الفئة", brand: "الماركة", condition: "الحالة", all: "الكل",
    maxPrice: (v: string) => `أعلى سعر · ${v}`,
    inStockOnly: "المتوفر فقط",
    reset: "إعادة ضبط الفلاتر",
    matches: (n: number) => `${n} قطعة مطابقة`,
    allCategories: "كل الفئات",
    empty: "لا توجد قطع مطابقة. جرّب توسيع نطاق السعر أو إزالة الفلاتر.",
    fits: "متوافق مع:",
    inStock: (n: number) => `${n} متوفر`,
    outOfStock: "غير متوفر",
    shopsCount: (n: number) => `${n} محل`,
    more: (n: number) => `+${n} المزيد`,
    footer: "دليل تجريبي.", createdBy: "صنعه",
    condNew: "جديد", condUsed: "مستعمل", condRefurb: "مجدّد",
  },
} as const;

const CONDITIONS = ["All", "New", "Used", "Refurbished"] as const;
type Condition = (typeof CONDITIONS)[number];
const condLabel = (c: Condition, lang: Lang) => {
  const t = T[lang];
  return c === "All" ? t.all : c === "New" ? t.condNew : c === "Used" ? t.condUsed : t.condRefurb;
};


function PartsPage() {
  const lang = useLang();
  const t = T[lang];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [brand, setBrand] = useState<string>("All");
  const [condition, setCondition] = useState<Condition>("All");
  const [maxPrice, setMaxPrice] = useState<number>(600000);
  const [inStockOnly, setInStockOnly] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PARTS.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (brand !== "All" && p.brand !== brand) return false;
      if (condition !== "All" && p.condition !== condition) return false;
      if (p.price > maxPrice) return false;
      if (inStockOnly && p.inStock === 0) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.compatibility.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [query, category, brand, condition, maxPrice, inStockOnly]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="sticky top-0 z-20 border-b border-blue-700/20 bg-gradient-to-r from-steel-900 via-blue-700 to-steel-700 text-primary-foreground shadow-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15 ring-1 ring-white/20 backdrop-blur">
              <Cpu className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">ChipFinder Iraq</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" /> {t.back}
          </Link>
        </div>
      </header>

      <section className="border-b bg-gradient-to-b from-blue-50 via-steel-100 to-background">
        <div className="mx-auto max-w-[1600px] px-4 py-8 lg:px-6 lg:py-12">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-700/20 bg-card px-3 py-1 text-xs text-blue-700">
            <Package className="h-3.5 w-3.5" />
            {t.badge(PARTS.length, SHOPS.length)}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight lg:text-4xl">{t.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground lg:text-base">{t.sub}</p>

          <div className="mt-5 flex items-center gap-2 rounded-xl border bg-card p-2 shadow-sm">
            <Search className="ms-2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPh}
              className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-muted"
              >
                {t.clear}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-6 lg:px-6">
        <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-4">
            <FilterGroup title={t.category}>
              <div className="flex flex-wrap gap-1.5">
                <Chip active={category === "All"} onClick={() => setCategory("All")}>{t.all}</Chip>
                {PART_CATEGORIES.map((c) => (
                  <Chip key={c} active={category === c} onClick={() => setCategory(c)}>{c}</Chip>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title={t.brand}>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="h-9 w-full rounded-md border border-input bg-card px-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="All">{t.all}</option>
                {PART_BRANDS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </FilterGroup>

            <FilterGroup title={t.condition}>
              <div className="flex flex-wrap gap-1.5">
                {CONDITIONS.map((c) => (
                  <Chip key={c} active={condition === c} onClick={() => setCondition(c)}>{condLabel(c, lang)}</Chip>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title={t.maxPrice(formatIQD(maxPrice))}>
              <input
                type="range"
                min={10000}
                max={600000}
                step={5000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </FilterGroup>

            <label className="flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="accent-blue-600"
              />
              {t.inStockOnly}
            </label>

            <button
              onClick={() => {
                setQuery(""); setCategory("All"); setBrand("All");
                setCondition("All"); setMaxPrice(600000); setInStockOnly(false);
              }}
              className="w-full rounded-md border border-input bg-card px-3 py-2 text-xs text-muted-foreground hover:bg-muted"
            >
              {t.reset}
            </button>
          </aside>

          <div>
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="font-display text-base font-semibold">{t.matches(results.length)}</h2>
              <span className="text-xs text-muted-foreground">
                {category !== "All" ? category : t.allCategories}
                {brand !== "All" ? ` · ${brand}` : ""}
              </span>
            </div>

            {results.length === 0 ? (
              <div className="rounded-xl border border-dashed bg-card p-10 text-center text-sm text-muted-foreground">
                {t.empty}
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {results.map((p) => <PartCard key={p.id} part={p} lang={lang} />)}
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t bg-card">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center lg:px-6">
          <p>© {new Date().getFullYear()} ChipFinder Iraq · {t.footer}</p>
          <p>{t.createdBy} <span className="font-semibold text-blue-700">Ali Raed</span></p>
        </div>
      </footer>
    </div>
  );
}


function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card p-3">
      <h3 className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{title}</h3>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
        active ? "bg-primary text-primary-foreground" : "border border-border bg-background text-muted-foreground hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}

function PartCard({ part }: { part: Part }) {
  const shops = SHOPS.filter((s) => part.shopIds.includes(s.id));
  const inStock = part.inStock > 0;

  return (
    <article className="rounded-xl border bg-card p-4 transition-colors hover:border-blue-700/40">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-700">{part.category}</p>
          <h3 className="mt-0.5 truncate font-display text-base font-semibold">{part.name}</h3>
          <p className="text-xs text-muted-foreground">{part.brand}</p>
        </div>
        <div className="text-right">
          <p className="font-display text-sm font-bold">{formatIQD(part.price)}</p>
          <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
            part.condition === "New" ? "bg-blue-100 text-blue-700" :
            part.condition === "Refurbished" ? "bg-steel-200 text-steel-900" :
            "bg-muted text-muted-foreground"
          }`}>
            {part.condition}
          </span>
        </div>
      </div>

      <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">Fits:</span> {part.compatibility}
      </p>

      <div className="mt-3 flex items-center justify-between border-t pt-3 text-xs">
        <span className={`flex items-center gap-1 font-medium ${inStock ? "text-blue-700" : "text-muted-foreground"}`}>
          {inStock ? <CircleCheck className="h-3.5 w-3.5" /> : <CircleAlert className="h-3.5 w-3.5" />}
          {inStock ? `${part.inStock} in stock` : "Out of stock"}
        </span>
        <span className="flex items-center gap-1 text-muted-foreground">
          <Store className="h-3.5 w-3.5" /> {shops.length} {shops.length === 1 ? "shop" : "shops"}
        </span>
      </div>

      {shops.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {shops.slice(0, 3).map((s) => (
            <span key={s.id} className="rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
              {s.name} · {s.city}
            </span>
          ))}
          {shops.length > 3 && (
            <span className="text-[10px] text-muted-foreground">+{shops.length - 3} more</span>
          )}
        </div>
      )}
    </article>
  );
}
