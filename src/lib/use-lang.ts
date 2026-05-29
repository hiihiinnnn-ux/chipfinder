import { useCallback, useEffect, useState } from "react";

export type Lang = "en" | "ar";
const LANG_KEY = "chipfinder-lang";

const readStoredLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const v = window.localStorage.getItem(LANG_KEY);
  return v === "ar" ? "ar" : "en";
};

const applyLang = (l: Lang) => {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("lang", l);
  document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
};

const persistLang = (l: Lang) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LANG_KEY, l);
  applyLang(l);
  window.dispatchEvent(new CustomEvent<Lang>("chipfinder-lang-change", { detail: l }));
};

export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>(() => readStoredLang());
  useEffect(() => {
    const apply = (l: Lang) => {
      setLang(l);
      applyLang(l);
    };
    apply(readStoredLang());
    const onStorage = (e: StorageEvent) => {
      if (e.key === LANG_KEY) apply(readStoredLang());
    };
    const onLocalChange = (e: Event) => apply((e as CustomEvent<Lang>).detail);
    window.addEventListener("storage", onStorage);
    window.addEventListener("chipfinder-lang-change", onLocalChange);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("chipfinder-lang-change", onLocalChange);
    };
  }, []);
  return lang;
}

export function useLangState(): [Lang, (next: Lang | ((prev: Lang) => Lang)) => void] {
  const [lang, setLangValue] = useState<Lang>(() => readStoredLang());

  useEffect(() => {
    const apply = (l: Lang) => {
      setLangValue(l);
      applyLang(l);
    };
    apply(readStoredLang());
    const onStorage = (e: StorageEvent) => {
      if (e.key === LANG_KEY) apply(readStoredLang());
    };
    const onLocalChange = (e: Event) => apply((e as CustomEvent<Lang>).detail);
    window.addEventListener("storage", onStorage);
    window.addEventListener("chipfinder-lang-change", onLocalChange);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("chipfinder-lang-change", onLocalChange);
    };
  }, []);

  const setLang = useCallback((next: Lang | ((prev: Lang) => Lang)) => {
    setLangValue((prev) => {
      const resolved = typeof next === "function" ? next(prev) : next;
      persistLang(resolved);
      return resolved;
    });
  }, []);

  return [lang, setLang];
}
