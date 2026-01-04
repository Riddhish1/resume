"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function Navbar() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't trigger if any input elements are focused or if event target is an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return
      }

      switch (event.key.toLowerCase()) {
        case "h":
          router.push("/")
          break
        case "p":
          router.push("/projects")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  return (
    <nav className="flex items-center justify-between mb-16 text-sm border-b border-border pb-6">
      <div className="flex space-x-8">
        <Link
          href="/"
          className="text-gray-400 hover:text-accent transition-all duration-200 relative group flex items-center gap-2"
        >
          <span className="text-xs px-1.5 py-0.5 bg-accent/10 text-accent border border-accent/30 rounded font-medium">h</span>
          <span>home</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
        </Link>
        <Link
          href="/projects"
          className="text-gray-400 hover:text-accent transition-all duration-200 relative group flex items-center gap-2"
        >
          <span className="text-xs px-1.5 py-0.5 bg-accent/10 text-accent border border-accent/30 rounded font-medium">p</span>
          <span>projects</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  )
}
