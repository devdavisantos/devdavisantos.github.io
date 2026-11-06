export type ProjectCategory = "web" | "games" | "arduino";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  // Websites & APIs
  {
    id: "davanto",
    title: "Davanto E-Commerce",
    description:
      "E-commerce internacional que conecta consumidores a produtos de diversas categorias, com experiência de compra global, suporte a diferentes idiomas e moedas.",
    category: "web",
    technologies: [".NET 10", "React", "RabbitMQ", "Redis", "Docker", "Cloudflare"],
    image: "/images/projects/webapi/davanto_store.png",
    github: "https://github.com/devdavisantos/DavantoEcommerce",
  },
  {
    id: "banco-krt",
    title: "API Banco KRT",
    description:
      "API bancária para gerenciamento de contas, com validações de negócio, cache, mensageria e arquitetura escalável.",
    category: "web",
    technologies: [".NET 8", "RabbitMQ", "Redis", "xUnit & Moq", "Docker"],
    image: "/images/projects/webapi/bank_krt.png",
    github: "https://github.com/devdavisantos/BancoKRT-API",
  },

  // Jogos - exemplos para substituir
  // {
  //   id: "",
  //   title: "",
  //   description:
  //     "",
  //   category: "games",
  //   technologies: [],
  //   image: "/images/projects/games/",
  // },

  // Arduino - exemplos para validar
  // {
  //   id: "",
  //   title: "",
  //   description:
  //     "",
  //   category: "arduino",
  //   technologies: [],
  //   image: "/images/projects/arduino/",
  // }
];
