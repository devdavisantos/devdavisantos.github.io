export type Skill = {
  name: string;
  icon?: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Back-end",
    skills: [
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
    ],
  },
  {
    title: "Front-end",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" }
    ],
  },
  {
    title: "Banco de Dados & ORMs",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Dapper", icon: "https://miro.medium.com/v2/resize:fit:1208/1*tclOKjhT841qPFXL-XWqSA.png" },
      { name: "Entity Framework", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25Ch0geNeADCGKX9GTmvHJjKM0fG0CjRmIFxvWBflSFfWLoewjMOe3bY&s=10" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
      { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
    ],
  },
  {
    title: "Mensageria & Cache",
    skills: [
      { name: "Service Bus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" },
      { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" }
    ]
  },
  {
    title: "Testes & Qualidade",
    skills: [
      { name: "xUnit", icon: "https://xunit.net/logo.svg" },
      { name: "Moq", icon: "https://avatars.githubusercontent.com/u/1434934?s=280&v=4" }
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
      { name: "Dbeaver", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fd/DBeaver_logo.png" },
      { name: "Excalidraw", icon: "https://images.seeklogo.com/logo-png/54/2/excalidraw-logo-png_seeklogo-548100.png" },
      { name: "DBDiagram", icon: "https://community.dbdiagram.io/uploads/default/original/1X/e74cdeee58b4327b87f9eac37493e349dce88050.png" }
    ],
  },
  {
    title: "Games & Hobbies",
    skills: [
      { name: "Unreal", icon: "devicon-unrealengine-original" },
      { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
      { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
      { name: "Arduino", icon: "devicon-arduino-plain colored" },
      { name: "Kali Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg" },
    ],
  },
  {
    title: "Princípios & Boas Práticas",
    skills: [
      { name: "SOLID", icon: "" },
      { name: "Clean Code", icon: "" },
      { name: "Clean Architecture", icon: "" },
      { name: "DDD", icon: "" },
      { name: "TDD", icon: "" },
      { name: "Design Patterns", icon: "" },
    ],
  },
];
