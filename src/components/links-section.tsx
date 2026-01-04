import Link from "next/link"

const links = [
  { title: "email", href: "mailto:bonderiddhish@gmail.com" },
  { title: "github", href: "https://github.com/Riddhish1" },
  { title: "linkedin", href: "https://www.linkedin.com/in/riddhish-bonde-13299627b" },
  { title: "phone", href: "tel:+919022337207", displayTitle: "+91 9022337207" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up border-t border-border pt-12 mt-16">
      <h2 className="text-2xl font-bold mb-8 flex items-center text-white">
        <span className="text-accent mr-3 text-3xl font-light">/</span> connect
      </h2>
      <div className="flex flex-wrap gap-6 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-accent transition-all duration-200 relative group border-b border-transparent hover:border-accent pb-0.5"
          >
            {link.displayTitle || link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
