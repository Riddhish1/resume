import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "GLASS",
    description:
      "AI-powered MCP cybersecurity automation platform integrating security tools",
    role: "creator",
    period: "2025",
    achievements: [
      "developed architecture enabling intelligent tool selection, adaptive scanning, and automated exploit workflows",
      "built REST APIs for target analysis, tool chaining, parameter optimization, caching, and real-time process monitoring",
      "integrated major security tools with automated reporting",
    ],
    technologies: ["MCP", "REST APIs", "Security Tools"],
    href: "https://github.com/Riddhish1/Glass",
    links: [
      { text: "GitHub", href: "https://github.com/Riddhish1/Glass" },
      { text: "Demo", href: "https://www.youtube.com/watch?v=Ogpm1Fvv0bA" },
    ],
  },
  {
    title: "CogniScrape",
    description:
      "Intelligent web scraping with LLMs — a TypeScript library combining traditional scraping with LLMs for structured data extraction.",
    role: "creator",
    period: "2025–present",
    achievements: [
      "Dual LLM support: Ollama (local) and Google Gemini (cloud)",
      "Graph-based, composable node pipelines for reusable scraping flows",
      "Production-ready features: caching, retries, rate limiting, proxy rotation",
      "Schema validation with Zod and multi-format exports (JSON, CSV, XML, PDF)",
      "Browser automation via Playwright and RAG integration for improved accuracy",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Playwright",
      "Zod",
      "Gemini API",
      "Ollama",
      "RAG",
    ],
    href: "https://github.com/Riddhish1/CogniScrape",
    links: [
      { text: "GitHub", href: "https://github.com/Riddhish1/CogniScrape" },
      { text: "npm", href: "https://www.npmjs.com/package/cogniscrape" },
    ],
  },
  {
    title: "FADE",
    description:
      "Open-source AI code generation platform that transforms user prompts into working code with a live preview",
    role: "creator",
    period: "2025",
    achievements: [
      "interactive workspace with live chat and AI-assisted editing",
      "real-time deployment preview with seamless UI",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Gemini API"],
    href: "https://github.com/Riddhish1/FADE",
    links: [
      { text: "GitHub", href: "https://github.com/Riddhish1/FADE" },
      { text: "Live", href: "https://fade-liard.vercel.app/" },
    ],
  },
  {
    title: "Pixro",
    description:
      "Advanced webinar platform featuring AI-powered assistance, real-time streaming, and integrated payments",
    role: "creator",
    period: "2025",
    achievements: [
      "live webinar hosting with interactive chat and AI assistants",
      "secure authentication, attendee management, and role-based access control",
      "monetization via Stripe with analytics dashboard",
    ],
    technologies: ["Next.js", "PostgreSQL", "Stream.io", "Stripe", "Vapi.ai"],
    href: "https://github.com/Riddhish1/Pixiro",
    links: [
      { text: "GitHub", href: "https://github.com/Riddhish1/Pixiro" },
    ],
  },
  
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">
        <span className="text-accent mr-3 text-5xl font-light">/</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-16 leading-relaxed max-w-2xl">
        here are some of the projects i&apos;ve worked on. i love building tools
        that make developers&apos; lives easier and exploring new technologies
        along the way.
      </p>

      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
}
