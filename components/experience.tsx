import { Briefcase, HeartHandshake } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { experiences, volunteering } from "@/lib/data"

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-t border-border bg-secondary/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Experience & Involvement"
          description="Hands-on training and community work that shaped my technical and collaborative skills."
        />

        <div className="space-y-10">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Professional Experience</h3>
            </div>
            <ol className="relative border-l border-border pl-6">
              {experiences.map((exp, i) => (
                <Reveal key={exp.role} delay={i * 100} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-blue-500 to-cyan-400 shadow-sm shadow-blue-500/40" />
                  <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="text-base font-semibold text-foreground">{exp.role}</h4>
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-primary">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2">
              <HeartHandshake className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Volunteering</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {volunteering.map((v, i) => (
                <Reveal
                  key={v.role}
                  delay={i * 80}
                  className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-foreground">{v.role}</h4>
                    {v.period && (
                      <span className="font-mono text-xs text-muted-foreground">{v.period}</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-primary">{v.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
