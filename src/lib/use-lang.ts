import { useEffect, useState } from "react";

export type Lang = "en" | "ar";
const LANG_KEY = "chipfinder-lang";

export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const read = (): Lang => {
      const v = window.localStorage.getItem(LANG_KEY);
      return v === "ar" ? "ar" : "en";
    };
    const apply = (l: Lang) => {
      setLang(l);
      document.documentElement.setAttribute("lang", l);
      document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    };
    apply(read());
    const onStorage = (e: StorageEvent) => {
      if (e.key === LANG_KEY) apply(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  return lang;
}
