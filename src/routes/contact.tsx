import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageSquare, Phone } from "lucide-react";
import { useLang } from "@/lib/use-lang";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ChipFinder Iraq" },
      { name: "description", content: "Reach ChipFinder via Telegram or phone to suggest a shop or report an issue." },
      { property: "og:title", content: "Contact — ChipFinder Iraq" },
      { property: "og:description", content: "Reach ChipFinder via Telegram or phone." },
    ],
  }),
  component: ContactPage,
});

const T = {
  en: {
    back: "Back to ChipFinder",
    title: "Contact",
    intro: "ChipFinder is maintained by Ali Raed. If you'd like to suggest a shop, report an issue, or just say hi — reach out below.",
    telegram: "Telegram", telegramSub: "Fastest way to reach me. Tap to open chat.",
    phone: "Phone", phoneSub: "+964 780 386 1785 · calls & WhatsApp",
    builtBy: "Built by Ali Raed",
  },
  ar: {
    back: "الرجوع إلى ChipFinder",
    title: "تواصل",
    intro: "يدير ChipFinder علي رائد. لاقتراح محل أو الإبلاغ عن مشكلة أو لمجرد التحية — تواصل عبر القنوات أدناه.",
    telegram: "تيليغرام", telegramSub: "أسرع طريقة للوصول إليّ. اضغط لفتح المحادثة.",
    phone: "هاتف", phoneSub: "+964 780 386 1785 · مكالمات وواتساب",
    builtBy: "صنعه علي رائد",
  },
} as const;

function ContactPage() {
  const lang = useLang();
  const t = T[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 lg:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> {t.back}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 lg:px-6">
        <h1 className="font-display text-4xl font-bold">{t.title}</h1>
        <p className="mt-3 text-muted-foreground">{t.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="https://t.me/i64vn"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border bg-card p-5 transition hover:border-blue-500 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-600">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{t.telegram}</p>
                <p className="font-semibold">@i64vn</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t.telegramSub}</p>
          </a>

          <a
            href="tel:+9647803861785"
            className="group rounded-xl border bg-card p-5 transition hover:border-emerald-500 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-500/10 p-2.5 text-emerald-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{t.phone}</p>
                <p className="font-semibold">07803861785</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t.phoneSub}</p>
          </a>
        </div>
      </main>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-3xl px-4 py-6 text-xs text-muted-foreground lg:px-6">
          © {new Date().getFullYear()} ChipFinder Iraq · {t.builtBy}
        </div>
      </footer>
    </div>
  );
}
