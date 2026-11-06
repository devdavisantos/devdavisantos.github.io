"use client";

import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const navigationItems = [
  { id: "home", width: "w-[65px]" },
  { id: "about", width: "w-[65px]" },
  { id: "skills", width: "w-[60px]" },
  { id: "projects", width: "w-[85px]" },
] as const;

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigation = navigationItems.map((item) => ({
    ...item,
    label: t.nav[item.id],
  }));

  useEffect(() => {
    let animationFrameId = 0;

    const updateActiveSection = () => {
      const sections = navigationItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) return;

      const referencePoint = 76 + window.innerHeight * 0.25;

      let currentSection = sections[0].id;

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= referencePoint) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (reachedBottom) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#050A11]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 lg:px-12">

        <button
          type="button"
          onClick={() => handleNavigation("home")}
          className="group flex shrink-0 cursor-pointer items-center gap-2.5 text-left"
        >
          <Code2
            size={29}
            strokeWidth={2.2}
            className="text-[#4D83FF] transition-colors duration-300 group-hover:text-[#7AA2FF]"
          />

          <div className="flex flex-col">
            <span className="text-[18px] font-semibold leading-[19px] tracking-[-0.4px] text-white">
              Davi Santos
            </span>

            <span className="text-[13px] font-normal leading-[15px] tracking-[0.1px] text-[#A0AABD]">
              Software Developer
            </span>
          </div>
        </button>

        <nav
          aria-label="Navegação principal"
          className="hidden h-full shrink-0 items-center gap-3 lg:flex"
        >
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigation(item.id)}
              aria-current={
                activeSection === item.id ? "location" : undefined
              }
              className={`relative flex h-full shrink-0 cursor-pointer items-center justify-center text-[14px] font-medium transition-colors duration-300 ${item.width} ${
                activeSection === item.id
                  ? "text-white"
                  : "text-[#A7ADBA] hover:text-white"
              }`}
            >
              <span className="relative inline-flex h-full items-center justify-center whitespace-nowrap">
                {item.label}

                <span
                  className={`absolute bottom-[20px] left-0 h-[2px] w-full origin-center bg-[#5687FF] transition-transform duration-300 ${
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </span>
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">

          <div className="flex h-[34px] shrink-0 items-center rounded-lg border border-[#293548] bg-[#0B121E] p-[3px]">
            <button
              type="button"
              onClick={() => setLanguage("pt-BR")}
              aria-pressed={language === "pt-BR"}
              className={`flex h-full w-[53px] cursor-pointer items-center justify-center rounded-md border text-[11px] font-medium transition-colors duration-300 ${
                language === "pt-BR"
                  ? "border-[#36465D] bg-[#172235] text-white"
                  : "border-transparent text-[#8B96A8] hover:text-white"
              }`}
            >
              PT-BR
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en-US")}
              aria-pressed={language === "en-US"}
              className={`flex h-full w-[53px] cursor-pointer items-center justify-center rounded-md border text-[11px] font-medium transition-colors duration-300 ${
                language === "en-US"
                  ? "border-[#36465D] bg-[#172235] text-white"
                  : "border-transparent text-[#8B96A8] hover:text-white"
              }`}
            >
              EN-US
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="ml-1 flex h-[34px] w-[34px] shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[#293548] text-white lg:hidden"
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Navegação mobile"
          className="border-t border-white/[0.06] bg-[#080E18] px-6 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
                className={`cursor-pointer rounded-lg px-4 py-3 text-left text-sm transition-colors duration-200 ${
                  activeSection === item.id
                    ? "bg-[#14213A] text-[#6B97FF]"
                    : "text-[#A7ADBA] hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}