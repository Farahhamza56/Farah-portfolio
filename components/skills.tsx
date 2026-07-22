import {
  Boxes,
  Brain,
  Code2,
  Database,
  Layers,
  Smartphone,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { skillGroups } from "@/lib/data"

const icons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Mobile Development": Smartphone,
  "AI & Machine Learning": Brain,
  "Web Development": Layers,
  Databases: Database,
  "Core Concepts": Boxes,
}

const gradients = [
  "from-blue-500 to-cyan-400",
  "from-cyan-500 to-teal-400",
  "from-indigo-500 to-blue-500",
  "from-violet-500 to-indigo-500",
  "from-sky-500 to-blue-500",
  "from-blue-600 to-violet-500",
]

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-16 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="blob right-[-6rem] top-20 h-72 w-72 bg-cyan-300/15" />
      <div aria-hidden className="blob left-[-6rem] bottom-10 h-72 w-72 bg-blue-400/15" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="A toolkit spanning software development, mobile, and data science — grouped by area of focus."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.category] ?? Code2
            return (
              <Reveal
                key={group.category}
                delay={i * 80}
                className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-primary/15 bg-primary/5 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/30 hover:bg-primary/10"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
