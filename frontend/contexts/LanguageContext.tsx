"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Language } from "@/i18n";

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: typeof dictionaries[Language] };
const LanguageContext = createContext<LanguageContextValue | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [restored, setRestored] = useState(false);
  useEffect(() => {
    try { const stored = localStorage.getItem("portfolio-language"); if (stored === "pt-BR" || stored === "en-US") setLanguage(stored); } catch {}
    setRestored(true);
  }, []);
  useEffect(() => {
    if (!restored) return;
    document.documentElement.lang = language;
    try { localStorage.setItem("portfolio-language", language); } catch {}
  }, [language, restored]);
  return <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { const value = useContext(LanguageContext); if (!value) throw new Error("useLanguage must be used within LanguageProvider"); return value; }