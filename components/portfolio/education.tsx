"use client"

import { GraduationCap, Award } from "lucide-react"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { certifications, education, sectionCopy } from "@/lib/portfolio/site-data"

export function Education() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          {sectionCopy.education.title}{" "}
          <span className="text-primary">{sectionCopy.education.titleAccent}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          {sectionCopy.education.subtitle}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="flex flex-col gap-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  {"specialization" in edu && edu.specialization ? (
                    <p className="text-primary text-sm font-medium mb-2">
                      Specialization: {edu.specialization}
                    </p>
                  ) : null}
                  <p className="text-muted-foreground text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-xs">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>

            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {cert.issuer.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                      {"issued" in cert && cert.issued ? ` · Issued ${cert.issued}` : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
