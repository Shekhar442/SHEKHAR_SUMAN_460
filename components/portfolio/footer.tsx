import { SocialIconLinks } from "@/components/portfolio/social-icon-links"
import { siteProfile } from "@/lib/portfolio/site-data"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteProfile.name}. All rights reserved.
        </p>

        <SocialIconLinks iconClassName="h-5 w-5" />
      </div>
    </footer>
  )
}
