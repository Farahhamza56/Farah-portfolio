import { GraduationCap, Languages, Sparkles, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { profile, languages } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="glass-card rounded-2xl p-8">
            <p className="text-pretty text-lg leading-relaxed text-foreground">{profile.intro}</p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{profile.summary}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Alexandria University</p>
                  <p className="text-sm text-muted-foreground">GPA 3.95 · Class of 2028</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Focus Areas</p>
                  <p className="text-sm text-muted-foreground">Software Engineering & Data Science</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={100} className="glass-card rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold text-foreground">Personal Strengths</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {profile.strengths.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200} className="glass-card rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold text-foreground">Languages</h3>
              </div>
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
