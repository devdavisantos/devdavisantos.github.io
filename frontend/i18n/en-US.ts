import type { ptBR } from "./pt-BR";

type DeepStrings<T> = { [K in keyof T]: T[K] extends string ? string : DeepStrings<T[K]> };
type Translation = DeepStrings<typeof ptBR>;

export const enUS = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    main: "Main navigation",
    mobile: "Mobile navigation",
    open: "Open menu",
    close: "Close menu",
    role: "Software Engineer"
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Software Engineer",
    description: "I'm passionate about programming and technology, driven by the curiosity to understand how things work and the joy of creating. From software development and gaming to arduino and cybersecurity, I'm always exploring new ideas and learning something new.",
    viewProjects: "View my projects",
    contact: "Get in touch",
    emailLabel: "Email",
  },
  about: {
    label: "ABOUT ME",
    titleStart: "Beyond the lines of",
    titleEnd: "code.",
    paragraph1: "I'm passionate about technology and understanding how things work. My interests go far beyond writing code: I enjoy exploring the world of computing, from software development, networking, and hardware to cybersecurity, electronics, and games.",
    paragraph2Start: "As a",
    role: "Software Engineer",
    paragraph2Middle: ", I have experience developing full-stack applications, with a focus on",
    paragraph2End: ", my primary tech stack. I build and improve systems, APIs, and integrations, following software engineering best practices, thoughtful architecture, and clean code, with performance, quality, and maintainability in mind.",
    paragraph3: "Outside of work, I continue exploring technology through personal projects, whether building applications, experimenting with arduino, studying computer security, or diving into game development. To me, programming is more than a profession: it's a passion that fuels my curiosity and constant desire to learn, experiment, and create.",
  },
  skills: {
    label: "SKILLS & TECHNOLOGIES",
    titleStart: "The tools behind what I",
    titleEnd: "build.",
    subtitle: "Always learning, always evolving.",

    groups: {
      backend: "Back-end",
      frontend: "Front-end",
      databases: "Databases & ORMs",
      cloud: "Cloud & DevOps",
      messaging: "Messaging & Cache",
      testing: "Testing & Quality",
      tools: "Tools",
      engineering: "Software Engineering",
      games: "Games & Experimental Projects",
      principles: "Principles & Best Practices",
    },

    practices: {
      cleanCode: "Clean Code",
      bestPractices: "Best Practices",
      cleanArchitecture: "Clean Architecture",
      designPatterns: "Design Patterns",
    },
  },
  projects: {
    label: "PROJECTS",
    title: "Featured projects",
    filterLabel: "Filter projects by category",

    all: "All",
    web: "Websites & APIs",
    games: "Games",
    arduino: "Arduino",

    previous: "Previous projects",
    next: "Next projects",

    viewProjects: "View projects",
    projectsOf: "Projects in",
    underConstruction: "Under construction",
    comingSoon: "New projects are currently in development and will be showcased soon.",

    previewOf: "Preview of",
    openProject: "Open",
    onGithub: "on GitHub",
    online: "online",
    viewCodeOf: "View source code for",
    viewCode: "View source code on GitHub",
    viewDemoOf: "View demo of",
    viewOnline: "View project online",

    categories: {
      web: {
        title: "Websites & APIs",
        description: "Web applications, APIs, and software solutions built for different needs.",
      },
      games: {
        title: "Games",
        description: "Game development projects exploring mechanics, programming, and creativity.",
      },
      arduino: {
        title: "Arduino",
        description: "Electronics and automation projects combining hardware and programming.",
      },
    },
  },
  footer: {
    rights: "All rights reserved."
  }
} satisfies Translation;