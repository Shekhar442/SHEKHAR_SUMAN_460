"use client"

import { ExternalLink, Brain, MessageSquare, ScanFace, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { featuredProjects, sectionCopy } from "@/lib/portfolio/site-data"

const PROJECT_ICONS: Record<(typeof featuredProjects)[number]["icon"], LucideIcon> = {
  brain: Brain,
  messageSquare: MessageSquare,
  scanFace: ScanFace,
}

export function Projects() {
  const sectionRef = useSectionReveal<HTMLElement>()

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-secondary/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          {sectionCopy.projects.title}{" "}
          <span className="text-primary">{sectionCopy.projects.titleAccent}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          {sectionCopy.projects.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => {
            const Icon = PROJECT_ICONS[project.icon]
            return (
              <div
                key={project.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                    {project.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full text-primary hover:text-primary hover:bg-primary/10"
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
