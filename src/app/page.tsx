import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "GamutX",
    role: "full stack developer intern",
    period: "may 2025 - august 2025",
    description: " Developed the full-stack LMS using Next.js for the frontend and NestJS for a robust, modular backend architecture. Improved query operation performance by removing excessive foreign key constraints in the database schema.",
    href: "https://learn.gamutx.com/",
  },
]

const projectItems = [
  {
    title: "GLASS",
    role: "creator",
    description:
      "AI-powered MCP cybersecurity automation platform integrating security tools",
    href: "https://github.com/Riddhish1/Glass",
  },
  {
    title: "CogniScrape",
    description:
      "Intelligent web scraping with LLMs — a TypeScript library combining traditional scraping with LLMs for structured data extraction.",
    role: "creator",
    href: "https://github.com/Riddhish1/CogniScrape",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <LinksSection />
    </>
  )
}
