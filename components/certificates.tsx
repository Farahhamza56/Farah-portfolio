import { Award, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { certificates } from "@/lib/data"

export function Certificates() {
  return (
    <section id="certificates" className="relative scroll-mt-16 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="blob left-1/2 top-10 h-72 w-72 -translate-x-1/2 bg-blue-400/12" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificates"
          title="Certificates"
          description="Recognitions earned through coursework, training programs, and campus communities."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 80} className="h-full">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${cert.name} certificate from ${cert.issuer} (opens in a new tab)`}
                className="group glass-card flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Award className="h-5 w-5" />
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                </div>
                <h3 className="text-base font-semibold leading-snug text-foreground">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-auto pt-4 font-mono text-xs text-primary">{cert.date}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
