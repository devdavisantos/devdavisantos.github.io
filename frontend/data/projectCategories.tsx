import { Code2, Cpu, Gamepad2 } from "lucide-react";
import type { ProjectCategory } from "@/data/projects";

export const categoryConfig = {
  web: {
    title: "Websites & APIs",
    description:
      "Projetos de Aplicações Web, APIs e sistemas completos.",
    icon: Code2,
    background:
      "from-[#101E35] via-[#0B1729] to-[#0C1831]",
  },
  games: {
    title: "Jogos",
    description:
      "Projetos de Criação de Jogos.",
    icon: Gamepad2,
    background:
      "from-[#111A31] via-[#101A32] to-[#172449]",
  },
  arduino: {
    title: "Arduino",
    description:
      "Projetos de Eletrônica, Sensores e Automação com Arduino.",
    icon: Cpu,
    background:
      "from-[#101D33] via-[#0D192B] to-[#14254B]",
  },
} satisfies Record<
  ProjectCategory,
  {
    title: string;
    description: string;
    icon: typeof Code2;
    background: string;
  }
>;