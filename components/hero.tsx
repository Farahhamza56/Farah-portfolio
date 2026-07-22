"use client"

import Image from "next/image"
import { ExternalLink, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { actionButtonClass } from "@/components/action-button"
import { profile } from "@/lib/data"

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, oklch(0.95 0.03 245) 0%, oklch(1 0 0) 70%)",
        }}
      />
      <div aria-hidden className="blob left-[-6rem] top-[-4rem] h-80 w-80 bg-blue-400/25" />
      <div aria-hidden className="blob right-[-5rem] top-10 h-72 w-72 bg-cyan-300/25" />
      <div aria-hidden className="blob bottom-[-6rem] left-1/3 h-72 w-72 bg-violet-400/15" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-primary sm:text-xl">{profile.title}</p>

          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground lg:mx-0">
            {profile.intro}
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={actionButtonClass({ size: "lg" })}
            >
              <ExternalLink />
              View CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={actionButtonClass({ variant: "outline", size: "lg" })}
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={actionButtonClass({ variant: "outline", size: "lg" })}
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className={actionButtonClass({ variant: "ghost", size: "lg" })}
            >
              <Mail />
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-blue-500/30 via-cyan-400/20 to-violet-500/20 blur-2xl"
            />
            <div className="rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 p-1.5 shadow-xl shadow-blue-500/20">
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-card sm:h-72 sm:w-72">
                <Image
                  src={profile.photo || "/placeholder.svg"}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, 288px"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>
          {/* end photo */}
        </div>
      </div>
    </section>
  )
}
