import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, MapPin, Wrench, Star, ArrowLeft, Mail } from "lucide-react";
import { SHOPS, ALL_CITIES } from "@/data/shops";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ChipFinder Iraq — Iraq's Computer Shop Directory" },
      { name: "description", content: "ChipFinder Iraq helps people across Iraq find trusted computer shops, repair services, custom builds and gaming gear in their city." },
      { property: "og:title", content: "About ChipFinder Iraq" },
      { property: "og:description", content: "Find trusted computer shops across every major Iraqi city — Baghdad, Erbil, Basra, Mosul, Hillah and more." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const totalShops = SHOPS.length;
  const totalCities = ALL_CITIES.length;
  const avgRating = (SHOPS.reduce((s, x) => s + x.rating, 0) / SHOPS.length).toFixed(2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-gradient-to-r from-steel-900 via-blue-700 to-steel-700 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 lg:px-6">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to ChipFinder
          </Link>
          <span className="flex items-center gap-1.5 font-display text-base">
            <Cpu className="h-4 w-4" /> ChipFinder Iraq
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 lg:px-6">
        <h1 className="font-display text-4xl font-bold tracking-tight">About ChipFinder</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          ChipFinder Iraq is a local directory that helps you find trusted computer shops,
          repair experts, custom PC builders and Apple service across every major Iraqi city.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat label="Shops listed" value={`${totalShops}+`} icon={Wrench} />
          <Stat label="Cities covered" value={`${totalCities}`} icon={MapPin} />
          <Stat label="Average rating" value={avgRating} icon={Star} />
        </div>

        <section className="mt-12 space-y-4 text-sm leading-relaxed">
          <h2 className="font-display text-2xl font-semibold">Why it exists</h2>
          <p>
            Finding a reliable repair shop in Iraq usually means asking friends, scrolling Facebook groups,
            or just hoping the place near your house knows what they're doing. ChipFinder gathers them
            in one searchable place, with ratings, services, and directions on Google Maps.
          </p>
          <h2 className="font-display text-2xl font-semibold pt-4">What you can do here</h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>Search by city, service or shop name</li>
            <li>See ratings, review counts, opening hours and phone numbers</li>
            <li>Tap the map pin to get directions in Google Maps</li>
            <li>Sign in so your filters, theme and recent searches sync across devices</li>
            <li>Use your location to jump to the closest supported city</li>
          </ul>
          <h2 className="font-display text-2xl font-semibold pt-4">Suggest a shop or report an issue</h2>
          <p>
            ChipFinder is maintained by Ali Raed. If you know a great shop that's missing,
            or something on the site looks wrong, reach out on Telegram or by phone.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <a
              href="https://t.me/i64vn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-blue-600"
            >
              <Mail className="h-4 w-4" /> Telegram @i64vn
            </a>
            <a
              href="tel:+9647803861785"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              07803861785 · +964 780 386 1785
            </a>
          </div>

        </section>
      </main>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-muted-foreground lg:px-6">
          © {new Date().getFullYear()} ChipFinder Iraq · Built by Ali Raed
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Wrench }) {
  return (
    <div className="rounded-xl border bg-card p-4">
      <Icon className="h-5 w-5 text-blue-700" />
      <div className="mt-2 font-display text-2xl font-bold">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
