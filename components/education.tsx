import { GraduationCap, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { education } from "@/lib/data"

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 border-t border-border bg-secondary/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Education" title="Education" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <Reveal
              key={edu.degree}
              delay={i * 100}
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 text-white shadow-md">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-primary">{edu.institution}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {edu.details.map((d) => (
                      <li
                        key={d}
                        className="rounded-lg border border-primary/15 bg-primary/5 px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
