"use client"

import { Briefcase } from "lucide-react"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { experiences, sectionCopy } from "@/lib/portfolio/site-data"

export function Experience() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-mt-[var(--site-header-height)] pt-28 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          {sectionCopy.experience.title}{" "}
          <span className="text-primary">{sectionCopy.experience.titleAccent}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          {sectionCopy.experience.subtitle}
        </p>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ul className="m-0 list-none space-y-12 p-0">
            {experiences.map((exp, index) => {
              const isRight = index % 2 === 0
              return (
                <li key={`${exp.company}-${exp.period}`} className="relative">
                  <div
                    className="absolute left-4 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  />

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-4">
                    {isRight ? (
                      <>
                        <div className="hidden min-h-px md:block" aria-hidden />
                        <div className="pl-10 md:pl-0 md:pr-4">
                          <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                            <div className="mb-3 flex items-center gap-3">
                              <div className="rounded-lg bg-primary/10 p-2">
                                <Briefcase className="h-5 w-5 text-primary" />
                              </div>
                              <span className="text-sm font-medium text-primary">{exp.period}</span>
                            </div>

                            <h3 className="mb-1 text-xl font-semibold text-foreground">{exp.title}</h3>
                            <p className="mb-4 text-muted-foreground">
                              {exp.company} • {exp.location}
                            </p>

                            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="mt-1.5 text-primary">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </article>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="pl-10 md:pl-4 md:pr-0 md:text-right">
                          <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                            <div className="mb-3 flex items-center gap-3 md:flex-row-reverse md:justify-end">
                              <div className="rounded-lg bg-primary/10 p-2">
                                <Briefcase className="h-5 w-5 text-primary" />
                              </div>
                              <span className="text-sm font-medium text-primary">{exp.period}</span>
                            </div>

                            <h3 className="mb-1 text-xl font-semibold text-foreground">{exp.title}</h3>
                            <p className="mb-4 text-muted-foreground">
                              {exp.company} • {exp.location}
                            </p>

                            <ul className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 md:flex-row-reverse md:text-right"
                                >
                                  <span className="mt-1.5 text-primary">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </article>
                        </div>
                        <div className="hidden min-h-px md:block" aria-hidden />
                      </>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
