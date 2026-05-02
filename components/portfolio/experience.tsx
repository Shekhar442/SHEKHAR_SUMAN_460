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
      className="py-24 px-6"
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
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 md:-translate-x-1/2 z-10" />

                <div
                  className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                    <div
                      className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {exp.company} • {exp.location}
                    </p>

                    <ul
                      className={`flex flex-col gap-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:items-end" : ""}`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
