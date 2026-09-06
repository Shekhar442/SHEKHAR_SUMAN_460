"use client"

import { Award, Briefcase, GraduationCap, type LucideIcon } from "lucide-react"
import { ProfilePortrait } from "@/components/portfolio/profile-portrait"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { aboutStats, siteProfile } from "@/lib/portfolio/site-data"

const STAT_ICONS: Record<(typeof aboutStats)[number]["icon"], LucideIcon> = {
  briefcase: Briefcase,
  award: Award,
  graduationCap: GraduationCap,
}

export function About() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-mt-[var(--site-header-height)] pt-28 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          {siteProfile.aboutSubtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ProfilePortrait size="about" />

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {siteProfile.aboutHeading}
            </h3>
            {siteProfile.aboutParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-muted-foreground leading-relaxed ${
                  i === siteProfile.aboutParagraphs.length - 1 ? "mb-8" : "mb-6"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4">
              {aboutStats.map(({ icon, label, value }) => {
                const Icon = STAT_ICONS[icon]
                return (
                  <div
                    key={label}
                    className="text-center p-4 rounded-xl bg-secondary border border-border"
                  >
                    <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{value}</div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
