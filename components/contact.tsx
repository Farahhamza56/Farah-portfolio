import { Mail, MapPin, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { profile } from "@/lib/data"

type ContactMethod = {
  label: string
  value: string
  icon: typeof Mail
  accent: string
  href?: string
}

// Email & Phone are static (no href) — displayed as plain text only.
// LinkedIn & GitHub are links that open in a new tab.
const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: profile.email,
    icon: Mail,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    label: "Phone",
    value: profile.phone,
    icon: Phone,
    accent: "from-cyan-500 to-blue-500",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.linkedin,
    icon: LinkedinIcon,
    accent: "from-blue-600 to-indigo-500",
  },
  {
    label: "GitHub",
    value: "View GitHub profile",
    href: profile.github,
    icon: GithubIcon,
    accent: "from-indigo-500 to-violet-500",
  },
]

const cardClass =
  "group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm backdrop-blur-md transition-all duration-300"
const interactiveClass =
  "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-16 overflow-hidden border-t border-border py-20 sm:py-28"
    >
      {/* soft colorful background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/50 via-background to-background" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="I'm currently exploring internships, bootcamps, and collaborative tech communities. Feel free to reach out through any of the channels below."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {contactMethods.map((method, i) => {
            const Icon = method.icon

            const inner = (
              <>
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${method.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {method.label}
                  </p>
                  <p className="truncate text-sm font-medium text-foreground">{method.value}</p>
                </div>
              </>
            )

            return (
              <Reveal key={method.label} delay={i * 80}>
                {method.href ? (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} ${interactiveClass}`}
                  >
                    {inner}
                  </a>
                ) : (
                  // Static, non-clickable card (no mailto/tel)
                  <div className={cardClass}>{inner}</div>
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={220}>
          <p className="mt-10 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Based in {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
