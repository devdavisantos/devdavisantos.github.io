import { ptBR } from "./pt-BR";
import { enUS } from "./en-US";

export type Language = "pt-BR" | "en-US";

export const dictionaries = {
  "pt-BR": ptBR,
  "en-US": enUS,
};