import { skillCategories, sectionCopy } from "@/lib/portfolio/site-data"

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-[var(--site-header-height)] pt-28 pb-20 px-6 bg-secondary/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center rotate-[360deg]">
          {sectionCopy.skills.title}{" "}
          <span className="text-primary">{sectionCopy.skills.titleAccent}</span>
        </h2>
        <p className="text-muted-foreground text-center text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
          {sectionCopy.skills.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm shadow-foreground/5"
            >
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 pb-2 border-b border-border/80">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-1.5 list-none m-0 p-0">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="inline-flex max-w-full rounded-lg border border-primary/15 bg-primary/[0.06] px-2.5 py-1 text-xs font-medium text-foreground leading-snug dark:bg-primary/10 dark:border-primary/25">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
