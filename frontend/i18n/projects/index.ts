import type { Language } from "../index";
import { projectsPtBR } from "./pt-BR";
import { projectsEnUS } from "./en-US";
import type { ProjectTranslation } from "./types";

const translations: Record<
  Language,
  Record<string, ProjectTranslation>
> = {
  "pt-BR": projectsPtBR,
  "en-US": projectsEnUS,
};

export function getProjectTranslation(
  projectId: string,
  language: Language
): ProjectTranslation | undefined {
  return translations[language]?.[projectId];
}