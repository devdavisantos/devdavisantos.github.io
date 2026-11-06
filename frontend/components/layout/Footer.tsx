"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function Footer() {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    updateYear();

    const interval = window.setInterval(updateYear, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-white/[0.08] bg-[#050A11] px-6 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1440px] text-center">
        <p className="text-[11px] leading-relaxed text-[#8292A9] sm:text-[12px]">
          © 2023 - {currentYear ?? "—"} Davi Santos. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}