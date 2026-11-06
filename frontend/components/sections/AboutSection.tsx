"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
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
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#050A11] py-20 lg:py-45"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src="/images/globe.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#050A11] via-[#050A11]/80 to-[#050A11]/25"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#050A11]/60 via-transparent to-[#050A11]/80"
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-12">
        <div
          className={`transition-all duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-4">
            <span className="text-[12px] font-semibold tracking-[0.2em] text-[#8FAEFF]">
              // {t.about.label}
            </span>
          </div>

          <h2
            id="about-title"
            className="max-w-[700px] text-[clamp(2rem,2.8vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.035em]"
          >
            <span className="text-[#E8EFFA]">
              {t.about.titleStart}{" "}
            </span>

            <span className="bg-gradient-to-r from-[#4D83FF] to-[#8A76FF] bg-clip-text text-transparent">
              {t.about.titleEnd}
            </span>
          </h2>

          <div className="mt-6 max-w-[680px] space-y-5 text-[15px] leading-[1.85] text-[#A8B4C7] sm:text-[16px]">
            <p>{t.about.paragraph1}</p>

            <p>
              {t.about.paragraph2Start}{" "}
              <strong className="font-semibold text-[#DCE7F7]">
                {t.about.role}
              </strong>
              {t.about.paragraph2Middle}{" "}
              <strong className="font-semibold text-[#DCE7F7]">
                C# e .NET
              </strong>
              {t.about.paragraph2End}
            </p>

            <p>{t.about.paragraph3}</p>
          </div>
        </div>

        <div
          className={`relative flex min-h-[330px] items-center justify-center transition-all delay-200 duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[380px] lg:justify-end ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-12 opacity-0"
          }`}
        >
        </div>
      </div>
    </section>
  );
}