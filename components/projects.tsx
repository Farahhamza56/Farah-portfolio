import { CheckCircle2, ExternalLink, FolderGit2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { projects } from "@/lib/data"

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-16 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="blob left-[-8rem] top-24 h-80 w-80 bg-violet-400/12" />
      <div aria-hidden className="blob right-[-8rem] bottom-16 h-80 w-80 bg-cyan-300/15" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Projects"
          description="A mix of mobile, machine learning, and software engineering projects built during my studies."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const cardClass =
              "glass-card flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"

            const inner = (
              <>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <FolderGit2 className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-primary/5 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Technologies
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4 text-sm">
                  {project.url ? (
                    <span className="inline-flex items-center gap-1.5 font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                      <ExternalLink className="h-4 w-4" />
                      {project.linkLabel ?? "View project"}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground/70">
                      Academic project
                    </span>
                  )}
                </div>
              </>
            )

            return (
              <Reveal key={project.name} delay={(i % 2) * 100} className="h-full">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} — ${project.linkLabel ?? "open project"} (opens in a new tab)`}
                    className={`${cardClass} group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
