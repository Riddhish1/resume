import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export type Item = {
  title: string
  href: string
  role: string
  period?: string
  description: string
}

type SectionListProps = {
  title: string
  items: Item[]
  viewAllHref?: string
  viewAllText?: string
}

export function SectionList({
  title,
  items,
  viewAllHref,
  viewAllText,
}: SectionListProps) {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
        <span className="text-accent mr-3 text-3xl font-light">/</span> {title}
      </h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.title} className="group border-l-2 border-transparent hover:border-accent pl-4 py-2 -ml-4 transition-all duration-300">
            <Link href={item.href} target="_blank">
              <h3 className="text-lg font-semibold mb-1.5 text-white group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
                {item.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </h3>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                {item.role} {item.period && `• ${item.period}`}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 mt-6 text-accent hover:underline group"
        >
          {viewAllText}{" "}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      )}
    </section>
  )
}
