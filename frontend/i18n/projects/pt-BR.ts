import type { ProjectTranslation } from "./types";

export const projectsPtBR = {
  davanto: {
    title: "Davanto E-Commerce",
    description: "E-commerce internacional que conecta consumidores a produtos de diversas categorias, com experiência de compra global, suporte a diferentes idiomas e moedas.",
  },

  "banco-krt": {
    title: "API Banco KRT",
    description: "API bancária para gerenciamento de contas, com validações de negócio, cache, mensageria e arquitetura escalável.",
  },
} satisfies Record<string, ProjectTranslation>;