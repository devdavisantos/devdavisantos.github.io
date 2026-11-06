"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Construction } from "lucide-react";
import type { Project, ProjectCategory } from "@/data/projects";
import { categoryConfig } from "@/data/projectCategories";
import ProjectCard from "./ProjectCard";

type ProjectCarouselProps = {
  category: ProjectCategory;
  projects: Project[];
  registerCarousel?: (
    category: ProjectCategory,
    element: HTMLDivElement | null
  ) => void;
};

export default function ProjectCarousel({
  category,
  projects,
  registerCarousel,
}: ProjectCarouselProps) {
  const { t } = useLanguage();

  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const config = categoryConfig[category];
  const Icon = config.icon;

  const hasProjects = projects.length > 0;

  const categoryTitle = t.projects.categories[category].title;
  const categoryDescription =
    t.projects.categories[category].description;

  useEffect(() => {
    const element = carouselRef.current;

    if (!element || !hasProjects) return;

    registerCarousel?.(category, element);

    return () => registerCarousel?.(category, null);
  }, [category, registerCarousel, hasProjects]);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollProjects = () => {
    if (!hasProjects) return;

    const element = carouselRef.current;

    if (!element) return;

    const firstCard =
      element.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const gap =
      parseFloat(
        window.getComputedStyle(element).columnGap
      ) || 0;

    const distance =
      firstCard.getBoundingClientRect().width + gap;

    const atEnd =
      element.scrollLeft + element.clientWidth >=
      element.scrollWidth - 2;

    element.scrollTo({
      left: atEnd ? 0 : element.scrollLeft + distance,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={sectionRef}
      className={`grid min-w-0 grid-cols-1 gap-2 transition-all duration-700 ease-out motion-reduce:transition-none lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div
        className={`relative flex min-h-[230px] flex-col justify-end overflow-hidden rounded-xl border border-[#263448]/80 bg-gradient-to-br ${config.background} p-5 lg:min-h-[280px] xl:p-6`}
      >
        <div className="pointer-events-none absolute -right-16 bottom-0 h-44 w-56 rotate-[-25deg] rounded-full bg-[#376CFF]/15 blur-[55px]" />

        <div className="pointer-events-none absolute -right-8 bottom-[-55px] h-36 w-56 rotate-[-25deg] border-t border-[#4679FF]/30" />

        <div className="relative z-10">
          <Icon
            size={34}
            strokeWidth={1.8}
            className="mb-4 text-[#5687FF]"
          />

          <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#F0F4FF]">
            {categoryTitle}
          </h3>

          <p className="mt-2 max-w-[240px] text-[12px] leading-[1.55] text-[#A5B3C8]">
            {categoryDescription}
          </p>

          <button
            type="button"
            onClick={scrollProjects}
            disabled={!hasProjects}
            className={`mt-4 inline-flex h-[34px] items-center gap-2 rounded-full border px-4 text-[11px] font-medium transition-all duration-300 ${
              hasProjects
                ? "cursor-pointer border-[#536985] bg-[#0B1525]/70 text-[#DCE7F7] hover:border-[#729CFF] hover:bg-[#1A3155]"
                : "cursor-not-allowed border-[#35445A] bg-[#0B1525]/40 text-[#697C97]"
            }`}
          >
            {t.projects.viewProjects}
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        aria-label={`${t.projects.projectsOf} ${categoryTitle}`}
        className={
          hasProjects
            ? "flex min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            : "flex min-h-[230px] min-w-0 items-center justify-center overflow-hidden"
        }
      >
        {hasProjects ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="w-[85%] min-w-0 shrink-0 snap-start sm:w-[calc((100%-8px)/2)] xl:w-[calc((100%-16px)/3)]"
            >
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="relative flex flex-col items-center justify-center gap-3 px-6 py-8 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute h-32 w-32 rounded-full bg-[#4D83FF]/10 blur-[55px]"
            />

            <Construction
              size={30}
              strokeWidth={1.5}
              className="relative text-[#638CDB]"
            />

            <h4 className="relative text-[16px] font-semibold tracking-[-0.02em] text-[#E8EFFA]">
              {t.projects.underConstruction}
            </h4>

            <p className="relative max-w-[300px] text-[12px] leading-[1.7] text-[#8C9DB4]">
              {t.projects.comingSoon}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}