"use client"

import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfilePortrait } from "@/components/portfolio/profile-portrait"
import { SocialIconLinks } from "@/components/portfolio/social-icon-links"
import { siteProfile } from "@/lib/portfolio/site-data"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10 flex justify-center">
          <ProfilePortrait size="hero" />
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
            asChild
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary"
            asChild
          >
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>

        <SocialIconLinks />

        <div className="mt-16 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary transition-colors"
            asChild
          >
            <Link href="/about" aria-label="Go to about page">
              <ArrowDown className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
