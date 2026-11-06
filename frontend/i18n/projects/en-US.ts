import type { ProjectTranslation } from "./types";
import type { projectsPtBR } from "./pt-BR";

export const projectsEnUS = {
  davanto: {
    title: "Davanto E-Commerce",
    description: "International e-commerce platform connecting consumers with products across multiple categories, offering a global shopping experience with support for multiple languages and currencies.",
  },

  "banco-krt": {
    title: "Banco KRT API",
    description: "Banking API for account management, featuring business validations, caching, messaging, and scalable architecture.",
  },
} satisfies Record<keyof typeof projectsPtBR, ProjectTranslation>;