import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type ProjectCardProps = {
  title: string
  description: string
  role: string
  period?: string
  achievements: string[]
  technologies: string[]
  href: string
  links?: { text: string; href: string }[]
}

export function ProjectCard({
  title,
  description,
  role,
  period,
  achievements,
  technologies,
  href,
  links,
}: ProjectCardProps) {
  return (
    <div className="group border-l-4 border-border hover:border-accent pl-6 py-6 -ml-1 transition-all duration-300 hover:bg-accent/5 rounded-r">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
            {title}
          </h2>
          <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-accent transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Link>

      <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">
        {role} {period && `• ${period}`}
      </p>

      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

      <div className="space-y-6">
        <div>
          <h3 className="text-white font-semibold mb-2">achievements</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm text-gray-300 bg-gray-800/50 rounded"
              >
                {tech.toLowerCase()}
              </span>
            ))}
          </div>

        {links && links.length > 0 && (
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">links</h3>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover text-sm flex items-center gap-1.5 border border-accent/30 px-3 py-1.5 rounded hover:bg-accent/10 transition-all duration-200 group"
                >
                  {link.text}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
