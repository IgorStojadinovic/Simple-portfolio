export const profile = {
  name: "Igor Stojadinovic",
  role: "Fullstack developer",
  email: "igorstojadinovic.vs@gmail.com",
  github: "https://github.com/IgorStojadinovic",
  linkedin: "https://www.linkedin.com/in/igor-s-83002b240/",
}

export const skills = [
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { label: "Frontend frameworks", items: ["React", "Next.js"] },
  { label: "State management", items: ["Redux", "Zustand", "TanStack Query", "Context API"] },
  {
    label: "CMS & backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "REST APIs",
      "Headless CMS",
      "WordPress",
      "Prismic",
    ],
  },
  { label: "Styling", items: ["Tailwind CSS", "Bootstrap", "SASS/SCSS", "Styled Components"] },
  { label: "Design tools", items: ["Figma", "Photoshop"] },
  { label: "Animation", items: ["GreenSock (GSAP)", "Framer Motion", "CSS animations"] },
  { label: "DevOps / tools", items: ["Git/GitHub", "Jira", "CI/CD", "Webpack"] },
]

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  kind: "Personal" | "Client"
  href: string
  description: string
  stack: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    title: "Audiophile",
    kind: "Personal",
    href: "https://audiophile-prod.netlify.app/",
    description:
      "Fullstack store for audio gear, with product pages, a cart, checkout, and an admin panel for orders.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Prisma", "shadcn/ui", "React Hook Form"],
  },
  {
    title: "Finance Dashboard",
    kind: "Personal",
    href: "https://finance-dashboard-n7ab.onrender.com/",
    description:
      "Dashboard for budgets, expenses, and reports, with charts on a Node.js and Postgres backend.",
    stack: [
      "React",
      "Vite",
      "Tailwind",
      "Zustand",
      "React Query",
      "Chart.js",
      "Prisma",
      "PostgreSQL",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Ruess Group",
    kind: "Client",
    href: "https://ruess-group.com/en/",
    description:
      "Redesign of the site for Ruess Group, a B2B marketing agency based in Germany.",
    stack: ["Prismic", "Next.js", "SASS/SCSS"],
  },
  {
    title: "ONLYOFFICE",
    kind: "Client",
    href: "https://www.onlyoffice.com/",
    description:
      "Built pages and components for the official website, worked on the API documentation, and made plugins for the editors.",
    links: [
      { label: "Website", href: "https://www.onlyoffice.com/" },
      { label: "API docs", href: "https://api.onlyoffice.com/" },
    ],
    stack: ["Next.js", "JavaScript", "HTML", "CSS", "Docker", "Docosaurus"],
  },
]
