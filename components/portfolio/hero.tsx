"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialIconLinks } from "@/components/portfolio/social-icon-links"
import { siteProfile } from "@/lib/portfolio/site-data"
import { scrollToSelector } from "@/lib/scroll"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary/30 bg-secondary shadow-lg md:h-32 md:w-32">
            <Image
              src={siteProfile.aboutImageSrc}
              alt={siteProfile.name}
              width={256}
              height={256}
              priority
              className="h-full w-full object-cover object-top dark:hidden"
            />
            <Image
              src={siteProfile.aboutImageSrcDark}
              alt={siteProfile.name}
              width={256}
              height={256}
              priority
              className="hidden h-full w-full object-cover object-top dark:block"
            />
          </div>
        </div>

        <div className="mb-6 inline-block">
          <span className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            {siteProfile.role}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Hi, I&apos;m{" "}
          <span className="text-primary">{siteProfile.name}</span>
        </h1>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
          {siteProfile.heroSummaryLabel}
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
          {siteProfile.heroTagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => scrollToSelector("#contact")}
          >
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary"
            onClick={() => scrollToSelector("#projects")}
          >
            View Projects
          </Button>
        </div>

        <SocialIconLinks />

        <div className="mt-16 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSelector("#about")}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
