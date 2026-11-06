"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { categoryConfig } from "@/data/projectCategories";
import { getProjectTranslation } from "@/i18n/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const { t, language } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);

  const config = categoryConfig[project.category];
  const Icon = config.icon;

  const showImage = Boolean(project.image) && !imageFailed;
  const projectUrl = project.github || project.demo;

  const translation = getProjectTranslation(
    project.id,
    language
  );

  const projectTitle =
    translation?.title ?? project.title;

  const projectDescription =
    translation?.description ?? project.description;

  const imageContent = (
    <>
      {showImage && project.image ? (
        <Image
          src={project.image}
          alt={`${t.projects.previewOf} ${projectTitle}`}
          fill
          unoptimized
          sizes="(max-width: 768px) 85vw, (max-width: 1280px) 45vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#132A4A] via-[#0B1728] to-[#1B183B]">
          <Icon
            size={48}
            strokeWidth={1.2}
            className="text-[#6C96FF]/70"
          />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050A11]/25 to-transparent" />
    </>
  );

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[#263448]/80 bg-[#0A1420] p-2 transition-[border-color,box-shadow] duration-300 hover:border-[#4D83FF]/60 hover:shadow-[0_10px_35px_rgba(77,131,255,0.1)]">
      <div className="relative h-[125px] shrink-0 overflow-hidden rounded-lg bg-[#101B2B] sm:h-[135px] xl:h-[120px] 2xl:h-[145px]">
        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.projects.openProject} ${projectTitle} ${
              project.github
                ? t.projects.onGithub
                : t.projects.online
            }`}
            className="absolute inset-0 block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#8FAEFF]"
          >
            {imageContent}
          </a>
        ) : (
          imageContent
        )}

        <div className="absolute right-2 top-2 z-10 flex items-center gap-1.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.projects.viewCodeOf} ${projectTitle} ${t.projects.onGithub}`}
              title={t.projects.viewCode}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#668FFF]/60 bg-[#1C3765]/90 text-white shadow-[0_3px_12px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8BAAFF] hover:bg-[#4D7DFF] hover:shadow-[0_4px_16px_rgba(77,125,255,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FAEFF]"
            >
              <i
                className="devicon-github-original text-[18px]"
                aria-hidden="true"
              />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.projects.viewDemoOf} ${projectTitle}`}
              title={t.projects.viewOnline}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#668FFF]/60 bg-[#1C3765]/90 text-white shadow-[0_3px_12px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8BAAFF] hover:bg-[#4D7DFF] hover:shadow-[0_4px_16px_rgba(77,125,255,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FAEFF]"
            >
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-3">
        <h4 className="line-clamp-1 text-[13px] font-semibold leading-snug text-[#E8EFFA] sm:text-[14px]">
          {projectTitle}
        </h4>

        <p className="mt-1.5 line-clamp-3 min-h-[54px] text-[11px] leading-[1.55] text-[#9BAAC0] sm:text-[12px]">
          {projectDescription}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {project.technologies.slice(0, 8).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#29384D] bg-[#111D2B] px-2.5 py-1 text-[10px] leading-none text-[#B7C5D9]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}