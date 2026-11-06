"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const translateGroup = (title: string) => {
    const translations: Record<string, string> = {
      "Back-end": t.skills.groups.backend,
      "Front-end": t.skills.groups.frontend,
      "Banco de Dados & ORMs": t.skills.groups.databases,
      "Cloud & DevOps": t.skills.groups.cloud,
      "Mensageria & Cache": t.skills.groups.messaging,
      "Testes & Qualidade": t.skills.groups.testing,
      "Ferramentas": t.skills.groups.tools,
      "Engenharia de Software": t.skills.groups.engineering,
      "Games & Projetos Experimentais": t.skills.groups.games,
      "Princípios & Boas Práticas": t.skills.groups.principles,
    };

    return translations[title] ?? title;
  };

  const translateSkill = (name: string) => {
    const translations: Record<string, string> = {
      "Código Limpo": t.skills.practices.cleanCode,
      "Boas Práticas": t.skills.practices.bestPractices,
      "Arquitetura Limpa": t.skills.practices.cleanArchitecture,
      "Padrões de Projeto": t.skills.practices.designPatterns,
    };

    return translations[name] ?? name;
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-labelledby="skills-title"
      className="relative isolate scroll-mt-[76px] overflow-hidden border-b border-white/[0.08] bg-[#060C16] py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-[#4D83FF]/[0.05] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#8A76FF]/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div
          className={`mb-10 transition-all duration-1000 ease-out motion-reduce:transition-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-[12px] font-semibold tracking-[0.2em] text-[#8FAEFF]">
            // {t.skills.label}
          </span>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <h2
              id="skills-title"
              className="max-w-[850px] text-[clamp(2rem,3.5vw,3.2rem)] font-bold leading-[1.15] tracking-[-0.035em]"
            >
              <span className="text-[#E8EFFA]">
                {t.skills.titleStart}{" "}
              </span>

              <span className="bg-gradient-to-r from-[#4D83FF] to-[#8A76FF] bg-clip-text text-transparent">
                {t.skills.titleEnd}
              </span>
            </h2>

            <p className="shrink-0 text-[13px] font-medium tracking-[0.01em] text-[#8C9DB4] lg:text-right">
              {t.skills.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const isPrinciples =
              group.title === "Princípios & Boas Práticas";

            return (
              <div
                key={group.title}
                className={`min-w-0 rounded-xl border border-[#263448]/80 bg-[#0B1422]/85 px-4 py-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-[opacity,transform,border-color,box-shadow] duration-700 ease-out hover:border-[#4D83FF]/50 hover:shadow-[0_12px_35px_rgba(38,75,160,0.12)] motion-reduce:transition-none ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 90}ms`
                    : "0ms",
                }}
              >
                <h3 className="mb-4 text-[14px] font-semibold leading-none text-[#E8EFFA]">
                  {translateGroup(group.title)}
                </h3>

                {isPrinciples ? (
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex min-h-[38px] items-center justify-center gap-2 rounded-lg border border-[#2B3B52]/65 bg-[#111D2E] px-3 py-2 text-[12px] font-medium text-[#C9D5E6] transition-colors duration-300 hover:border-[#527FC7]/60 hover:bg-[#172842]"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6D98FF]"
                        />

                        <span className="whitespace-nowrap">
                          {translateSkill(skill.name)}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="grid items-start gap-x-1 gap-y-4"
                    style={{
                      gridTemplateColumns: `repeat(${group.skills.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        title={translateSkill(skill.name)}
                        className="group/skill flex min-w-0 flex-col items-center gap-1.5 text-center"
                      >
                        <div className="relative flex h-[34px] w-full items-center justify-center">
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute h-12 w-12 rounded-full bg-[#4D83FF]/80 opacity-0 blur-xl transition-opacity duration-500 group-hover/skill:opacity-100"
                          />

                          {skill.icon?.startsWith("https://") ? (
                            <Image
                              src={skill.icon}
                              alt=""
                              width={28}
                              height={28}
                              unoptimized
                              className="relative z-10 h-7 w-7 object-contain transition-transform duration-300 group-hover/skill:-translate-y-1 group-hover/skill:scale-110"
                            />
                          ) : skill.icon ? (
                            <i
                              className={`${skill.icon} relative z-10 text-[28px] leading-none transition-transform duration-300 group-hover/skill:-translate-y-1 group-hover/skill:scale-110`}
                              aria-hidden="true"
                            />
                          ) : null}
                        </div>

                        <span className="w-full text-[11px] font-bold leading-[1.25] text-[#A8B4C7]">
                          {translateSkill(skill.name)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}