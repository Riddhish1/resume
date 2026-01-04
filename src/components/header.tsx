import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-20 space-y-6">
      <h1 className="text-5xl font-bold mb-6 animate-fade-in text-white tracking-tight">
        <span className="inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          <ScrambleText text="Riddhish Bonde" />
        </span>
      </h1>
      <div className="flex flex-col gap-3 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-accent" />
          <span>Chennai, India</span>
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up text-gray-400 max-w-2xl">
        i’m a 20 y/o cs undergrad. i like building things and solving problems. 
        i’m into language design and theoretical computer science. when i’m not coding, i’m probably scrolling through github’s trending page or watching movies.
      </p>
    </header>
  )
}
