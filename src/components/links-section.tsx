import Link from "next/link"

const links = [
  { title: "email", href: "mailto:bonderiddhish@gmail.com" },
  { title: "github", href: "https://github.com/Riddhish1" },
  { title: "linkedin", href: "https://www.linkedin.com/in/riddhish-bonde-13299627b" },
  { title: "phone", href: "tel:+919022337207", displayTitle: "+91 9022337207" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> links
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-accent transition-colors duration-200"
          >
            {link.displayTitle || link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
