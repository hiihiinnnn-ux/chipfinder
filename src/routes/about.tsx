import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, MapPin, Wrench, Star, ArrowLeft, Mail } from "lucide-react";
import { SHOPS, ALL_CITIES } from "@/data/shops";
import { useLang } from "@/lib/use-lang";

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

const T = {
  en: {
    back: "Back to ChipFinder",
    title: "About ChipFinder",
    intro: "ChipFinder Iraq is a local directory that helps you find trusted computer shops, repair experts, custom PC builders and Apple service across every major Iraqi city.",
    shops: "Shops listed", cities: "Cities covered", rating: "Average rating",
    whyTitle: "Why it exists",
    whyBody: "Finding a reliable repair shop in Iraq usually means asking friends, scrolling Facebook groups, or just hoping the place near your house knows what they're doing. ChipFinder gathers them in one searchable place, with ratings, services, and directions on Google Maps.",
    doTitle: "What you can do here",
    doList: [
      "Search by city, service or shop name",
      "See ratings, review counts, opening hours and phone numbers",
      "Tap the map pin to get directions in Google Maps",
      "Sign in so your filters, theme and recent searches sync across devices",
      "Use your location to jump to the closest supported city",
    ],
    contactTitle: "Suggest a shop or report an issue",
    contactBody: "ChipFinder is maintained by Ali Raed. If you know a great shop that's missing, or something on the site looks wrong, reach out on Telegram or by phone.",
    builtBy: "Built by Ali Raed",
  },
  ar: {
    back: "الرجوع إلى ChipFinder",
    title: "عن ChipFinder",
    intro: "ChipFinder العراق هو دليل محلي يساعدك في العثور على محلات الكمبيوتر الموثوقة وخبراء الصيانة ومجمّعي الأجهزة وخدمة آبل في كل مدينة عراقية كبرى.",
    shops: "المحلات المدرجة", cities: "المدن المغطاة", rating: "متوسط التقييم",
    whyTitle: "لماذا أنشأناه",
    whyBody: "إيجاد محل صيانة موثوق في العراق يعني عادةً سؤال الأصدقاء أو البحث في مجموعات فيسبوك أو الأمل بأن المحل القريب يعرف ما يفعل. ChipFinder يجمعها في مكان واحد قابل للبحث، مع التقييمات والخدمات والاتجاهات على خرائط Google.",
    doTitle: "ماذا يمكنك أن تفعل هنا",
    doList: [
      "ابحث حسب المدينة أو الخدمة أو اسم المحل",
      "اطّلع على التقييمات وعدد المراجعات وأوقات العمل وأرقام الهاتف",
      "اضغط على دبوس الخريطة للحصول على الاتجاهات في Google Maps",
      "سجّل الدخول لمزامنة الفلاتر والمظهر والبحوث الأخيرة بين الأجهزة",
      "استخدم موقعك للانتقال إلى أقرب مدينة مدعومة",
    ],
    contactTitle: "اقترح محلاً أو أبلغ عن مشكلة",
    contactBody: "يدير ChipFinder علي رائد. إذا كنت تعرف محلاً رائعاً غير مدرج أو لاحظت خطأً في الموقع، تواصل عبر تيليغرام أو الهاتف.",
    builtBy: "صنعه علي رائد",
  },
} as const;

function AboutPage() {
  const lang = useLang();
  const t = T[lang];
  const totalShops = SHOPS.length;
  const totalCities = ALL_CITIES.length;
  const avgRating = (SHOPS.reduce((s, x) => s + x.rating, 0) / SHOPS.length).toFixed(2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-gradient-to-r from-steel-900 via-blue-700 to-steel-700 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 lg:px-6">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" /> {t.back}
          </Link>
          <span className="flex items-center gap-1.5 font-display text-base">
            <Cpu className="h-4 w-4" /> ChipFinder Iraq
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 lg:px-6">
        <h1 className="font-display text-4xl font-bold tracking-tight">{t.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat label={t.shops} value={`${totalShops}+`} icon={Wrench} />
          <Stat label={t.cities} value={`${totalCities}`} icon={MapPin} />
          <Stat label={t.rating} value={avgRating} icon={Star} />
        </div>

        <section className="mt-12 space-y-4 text-sm leading-relaxed">
          <h2 className="font-display text-2xl font-semibold">{t.whyTitle}</h2>
          <p>{t.whyBody}</p>
          <h2 className="font-display text-2xl font-semibold pt-4">{t.doTitle}</h2>
          <ul className="ms-5 list-disc space-y-1">
            {t.doList.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h2 className="font-display text-2xl font-semibold pt-4">{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
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
          © {new Date().getFullYear()} ChipFinder Iraq · {t.builtBy}
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
