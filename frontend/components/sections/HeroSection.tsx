"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

type SocialLink = {
  label: string;
  href: string;
  external: boolean;
} & (
  | {
      type: "devicon";
      icon: string;
    }
  | {
      type: "lucide";
      icon: null;
    }
);

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/devdavisantos",
    icon: "devicon-github-original",
    type: "devicon",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/davisntdev/",
    icon: "devicon-linkedin-plain",
    type: "devicon",
    external: true,
  },
  // {
  //   label: "E-mail",
  //   href: "mailto:seu-email@exemplo.com",
  //   icon: null,
  //   type: "lucide",
  //   external: false,
  // },
] as const;

export default function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const sectionTop = entry.boundingClientRect.top;
        const sectionBottom = entry.boundingClientRect.bottom;

        const shouldShow =
          sectionTop <= window.innerHeight * 0.15 &&
          sectionBottom > window.innerHeight * 0.55;

        setIsVisible(shouldShow);
      },
      {
        threshold: Array.from(
          { length: 21 },
          (_, index) => index / 20
        ),
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[720px] items-center overflow-hidden border-b border-white/[0.06] bg-[#050A11] lg:min-h-[780px]"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#050A11] via-[#050A11]/95 to-[#050A11]/35" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#050A11] via-transparent to-[#050A11]/30" />

      <div className="mx-auto flex w-full max-w-[1440px] items-center px-6 py-24 sm:px-8 lg:px-12">
        <div
          className={`max-w-[620px] transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center gap-2">
            <span className="text-lg">👋</span>

            <span className="text-[15px] font-medium text-[#8FAEFF]">
              {t.hero.greeting}
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-[clamp(3.5rem,6vw,6rem)] font-bold leading-[1.05] tracking-[-0.055em]"
          >
            <span className="text-white">Davi </span>

            <span className="bg-gradient-to-r from-[#4D83FF] to-[#8A76FF] bg-clip-text text-transparent">
              Santos
            </span>
          </h1>

          <h2 className="mt-5 max-w-[540px] text-[clamp(1.25rem,2vw,1.8rem)] font-semibold leading-snug tracking-[-0.02em] text-[#DDE7F7]">
            {t.hero.role}
          </h2>

          <p className="mt-5 max-w-[530px] text-[15px] leading-[1.85] text-[#A8B4C7] sm:text-[16px]">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="group inline-flex h-[46px] cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#4D7DFF] px-6 text-[13px] font-semibold text-white shadow-[0_8px_30px_rgba(77,125,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6792FF] hover:shadow-[0_12px_35px_rgba(77,125,255,0.3)]"
            >
              {t.hero.viewProjects}

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group inline-flex h-[46px] cursor-pointer items-center justify-center gap-3 rounded-xl border border-[#596477] bg-[#0A111C]/60 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8FAEFF] hover:bg-[#142034]"
            >
              <MessageCircle size={17} />

              {t.hero.contact}
            </button> */}
          </div>

          <div className="mt-10 flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={
                  social.external
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={
                  social.type === "lucide"
                    ? t.hero.emailLabel
                    : social.label
                }
                className="inline-flex items-center justify-center text-[#A8B4C7] transition-all duration-300 hover:-translate-y-1 hover:text-[#6D98FF]"
              >
                {social.type === "devicon" ? (
                  <i
                    className={`${social.icon} text-[23px] leading-none`}
                    aria-hidden="true"
                  />
                ) : (
                  <Mail
                    size={23}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#4D83FF]/30 to-transparent" />
    </section>
  );
}