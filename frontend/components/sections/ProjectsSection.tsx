"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/projects";
import ProjectCarousel from "@/components/projects/ProjectCarousel";

type ProjectFilter = "all" | ProjectCategory;

const filters: ProjectFilter[] = ["all", "web", "games", "arduino"];

const categories: ProjectCategory[] = [
  "web",
  "games",
  "arduino",
];

export default function ProjectsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const carouselsRef = useRef<
    Partial<Record<ProjectCategory, HTMLDivElement>>
  >({});

  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("all");

  const [isVisible, setIsVisible] = useState(false);

  const registerCarousel = useCallback(
    (
      category: ProjectCategory,
      element: HTMLDivElement | null
    ) => {
      if (element) {
        carouselsRef.current[category] = element;
      } else {
        delete carouselsRef.current[category];
      }
    },
    []
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.05,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const visibleCategories =
    activeFilter === "all"
      ? categories
      : categories.filter(
          (category) => category === activeFilter
        );

  const scrollCarousels = (
    direction: "left" | "right"
  ) => {
    visibleCategories.forEach((category) => {
      const container = carouselsRef.current[category];

      if (!container) return;

      const firstCard =
        container.firstElementChild as HTMLElement | null;

      if (!firstCard) return;

      const gap =
        parseFloat(
          window.getComputedStyle(container).columnGap
        ) || 0;

      const distance =
        firstCard.getBoundingClientRect().width + gap;

      container.scrollBy({
        left:
          direction === "left"
            ? -distance
            : distance,
        behavior: "smooth",
      });
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-title"
      className="relative isolate scroll-mt-[76px] overflow-hidden border-b border-white/[0.08] bg-[#050A11] py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#4D83FF]/[0.04] blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div
          className={`mb-5 flex flex-col gap-5 transition-all duration-1000 ease-out motion-reduce:transition-none lg:flex-row lg:items-end lg:justify-between ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#8FAEFF]">
              // {t.projects.label}
            </span>

            <h2
              id="projects-title"
              className="mt-1.5 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.035em] text-[#E8EFFA]"
            >
              {t.projects.title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div
              role="group"
              aria-label={t.projects.filterLabel}
              className="flex flex-wrap items-center gap-1 rounded-full border border-[#243247]/80 bg-[#0A1421] p-1"
            >
              {filters.map((filter) => {
                const selected = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={selected}
                    className={`cursor-pointer rounded-full px-4 py-2 text-[11px] font-medium transition-all duration-300 ${
                      selected
                        ? "bg-[#4D7DFF] text-white shadow-[0_3px_12px_rgba(77,125,255,0.25)]"
                        : "text-[#A8B4C7] hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {t.projects[filter]}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollCarousels("left")}
                aria-label={t.projects.previous}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#2B3A50] bg-[#0A1421] text-[#B5C3D7] transition-all duration-300 hover:border-[#527FC7] hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollCarousels("right")}
                aria-label={t.projects.next}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#2B3A50] bg-[#0A1421] text-[#B5C3D7] transition-all duration-300 hover:border-[#527FC7] hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          {visibleCategories.map((category) => (
            <ProjectCarousel
              key={category}
              category={category}
              projects={projects.filter(
                (project) => project.category === category
              )}
              registerCarousel={registerCarousel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}