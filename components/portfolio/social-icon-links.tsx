import { Github, Linkedin, Mail } from "lucide-react"
import { siteProfile } from "@/lib/portfolio/site-data"

type SocialIconLinksProps = {
  className?: string
  iconClassName?: string
}

export function SocialIconLinks({
  className = "flex items-center justify-center gap-6",
  iconClassName = "h-6 w-6",
}: SocialIconLinksProps) {
  return (
    <div className={className}>
      <a
        href={`mailto:${siteProfile.email}`}
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Email"
      >
        <Mail className={iconClassName} />
      </a>
      <a
        href={siteProfile.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className={iconClassName} />
      </a>
      <a
        href={siteProfile.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <Github className={iconClassName} />
      </a>
    </div>
  )
}
