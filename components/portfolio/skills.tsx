"use client"

import { useCallback, useRef } from "react"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { skillCategories, sectionCopy } from "@/lib/portfolio/site-data"

export function Skills() {
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([])

  const animateBars = useCallback(() => {
    skillBarsRef.current.forEach((bar, index) => {
      if (bar) {
        setTimeout(() => {
          bar.style.width = bar.dataset.width || "0%"
        }, index * 50)
      }
    })
  }, [])

  const sectionRef = useSectionReveal<HTMLElement>({
    onIntersect: animateBars,
  })

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 bg-secondary/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          {sectionCopy.skills.title}{" "}
          <span className="text-primary">{sectionCopy.skills.titleAccent}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          {sectionCopy.skills.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const barOffset = skillCategories
              .slice(0, catIdx)
              .reduce((sum, c) => sum + c.skills.length, 0)

            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, skillIdx) => {
                    const idx = barOffset + skillIdx
                    return (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            ref={(el) => {
                              skillBarsRef.current[idx] = el
                            }}
                            data-width={`${skill.level}%`}
                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ width: "0%" }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
