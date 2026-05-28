import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cpu, ArrowLeft, CheckCircle2, Store, MapPin, Phone, Mail, Globe, Clock, Tag } from "lucide-react";
import { ALL_CITIES, ALL_TAGS } from "@/data/shops";

export const Route = createFileRoute("/list-shop")({
  head: () => ({
    meta: [
      { title: "List your shop — ChipFinder Iraq" },
      { name: "description", content: "Add your computer shop to ChipFinder Iraq and reach customers across Baghdad, Erbil, Basra, Hillah and more." },
      { property: "og:title", content: "List your shop — ChipFinder Iraq" },
      { property: "og:description", content: "Get your computer shop discovered by customers across Iraq." },
    ],
  }),
  component: ListShopPage,
});

type FormState = {
  name: string;
  ownerName: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: string;
  description: string;
  tags: string[];
};

function ListShopPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    ownerName: "",
    city: ALL_CITIES[0] ?? "Baghdad",
    address: "",
    phone: "",
    email: "",
    website: "",
    hours: "",
    description: "",
    tags: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleTag = (t: string) =>
    set("tags", form.tags.includes(t) ? form.tags.filter((x) => x !== t) : [...form.tags, t]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (form.name.trim().length < 2) return setError("Shop name is required.");
    if (form.ownerName.trim().length < 2) return setError("Owner name is required.");
    if (form.address.trim().length < 4) return setError("A real address helps customers find you.");
    if (!/^[+\d][\d\s\-()]{5,}$/.test(form.phone)) return setError("Please enter a valid phone number.");
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("Please enter a valid email.");
    if (form.tags.length === 0) return setError("Pick at least one service category.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-2xl px-4 py-20 text-center lg:px-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight">Submission received</h1>
          <p className="mt-3 text-muted-foreground">
            Thanks, <span className="font-medium text-foreground">{form.ownerName}</span> — we'll review{" "}
            <span className="font-medium text-foreground">{form.name}</span> and publish it to the {form.city} directory shortly.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/" className="rounded-md border bg-card px-4 py-2 text-sm font-medium hover:bg-muted">
              Back to directory
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ ...form, name: "", address: "", phone: "", email: "", website: "", hours: "", description: "", tags: [] });
              }}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-blue-600"
            >
              List another shop
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50 via-steel-100 to-background">
        <div className="mx-auto max-w-4xl px-4 py-10 lg:px-6 lg:py-14">
          <Link to="/" className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to directory
          </Link>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">List your shop on ChipFinder Iraq</h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground lg:text-lg">
            Reach thousands of customers searching for repairs, parts, custom builds and more across Iraq. It's free to get listed.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <Badge>Free listing</Badge>
            <Badge>Verified in 24h</Badge>
            <Badge>Customers in your city</Badge>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-4xl px-4 py-10 lg:px-6">
        <form onSubmit={onSubmit} className="grid gap-6 rounded-xl border bg-card p-6 shadow-sm">
          <SectionTitle icon={<Store className="h-4 w-4" />}>Shop details</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Shop name *">
              <input value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} placeholder="e.g. Baghdad Byte Lab" />
            </Field>
            <Field label="Owner / contact name *">
              <input value={form.ownerName} onChange={(e) => set("ownerName", e.target.value)} className={inputCls} placeholder="Your full name" />
            </Field>
          </div>

          <SectionTitle icon={<MapPin className="h-4 w-4" />}>Location</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="City *">
              <select value={form.city} onChange={(e) => set("city", e.target.value)} className={inputCls}>
                {ALL_CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Street address *">
              <input value={form.address} onChange={(e) => set("address", e.target.value)} className={inputCls} placeholder="Street, district, landmark" />
            </Field>
          </div>

          <SectionTitle icon={<Phone className="h-4 w-4" />}>Contact</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Phone *">
              <input value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} placeholder="+964 7xx xxx xxxx" />
            </Field>
            <Field label="Email" icon={<Mail className="h-3.5 w-3.5" />}>
              <input value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} placeholder="shop@example.com" />
            </Field>
            <Field label="Website" icon={<Globe className="h-3.5 w-3.5" />}>
              <input value={form.website} onChange={(e) => set("website", e.target.value)} className={inputCls} placeholder="https://…" />
            </Field>
            <Field label="Hours" icon={<Clock className="h-3.5 w-3.5" />}>
              <input value={form.hours} onChange={(e) => set("hours", e.target.value)} className={inputCls} placeholder="Sat–Thu · 10:00–22:00" />
            </Field>
          </div>

          <SectionTitle icon={<Tag className="h-4 w-4" />}>Services offered *</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((t) => {
              const active = form.tags.includes(t);
              return (
                <button
                  type="button"
                  key={t}
                  onClick={() => toggleTag(t)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    active ? "border-blue-700 bg-blue-700 text-white" : "border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <Field label="Tell customers about your shop">
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value.slice(0, 600))}
              rows={4}
              className={`${inputCls} resize-y`}
              placeholder="What makes your shop special? Brands, warranty, specialties…"
            />
            <p className="mt-1 text-right text-[11px] text-muted-foreground">{form.description.length}/600</p>
          </Field>

          {error && (
            <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}

          <div className="flex flex-col-reverse gap-2 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">By submitting you confirm the info is accurate.</p>
            <button type="submit" className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-blue-600">
              Submit listing
            </button>
          </div>
        </form>
      </section>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-[1600px] px-4 py-6 text-xs text-muted-foreground lg:px-6">
          Created by <span className="font-semibold text-blue-700">Ali Raed</span>
        </div>
      </footer>
    </div>
  );
}

const inputCls =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20";

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1 text-xs font-medium text-foreground">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}

function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 border-b pb-2 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
      {icon}
      {children}
    </h2>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-blue-700/20 bg-card px-3 py-1 text-blue-700">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {children}
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-blue-700/20 bg-gradient-to-r from-steel-900 via-blue-700 to-steel-700 text-primary-foreground shadow-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15 ring-1 ring-white/20 backdrop-blur">
            <Cpu className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">ChipFinder Iraq</span>
        </Link>
        <Link to="/" className="text-sm text-white/80 hover:text-white">Browse shops</Link>
      </div>
    </header>
  );
}
