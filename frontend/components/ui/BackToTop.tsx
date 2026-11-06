"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-[#4D83FF]/40 bg-[#101D30]/90 text-[#8FAEFF] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4D83FF] hover:bg-[#1A3155] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FAEFF] sm:bottom-8 sm:right-8 cursor-pointer
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      <ArrowUp size={19} strokeWidth={2} />
    </button>
  );
}