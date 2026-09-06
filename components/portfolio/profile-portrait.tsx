"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { siteProfile } from "@/lib/portfolio/site-data"

type ProfilePortraitProps = {
  size?: "hero" | "about"
  className?: string
}

export function ProfilePortrait({ size = "hero", className }: ProfilePortraitProps) {
  const isAbout = size === "about"

  return (
    <div
      className={cn(
        "relative mx-auto overflow-hidden rounded-2xl border border-border bg-secondary shadow-lg",
        isAbout
          ? "aspect-square w-full max-w-md rounded-3xl"
          : "h-36 w-36 md:h-44 md:w-44",
        className,
      )}
    >
      <Image
        src={siteProfile.aboutImageSrc}
        alt={siteProfile.name}
        width={isAbout ? 800 : 352}
        height={isAbout ? 800 : 352}
        priority
        className="h-full w-full object-cover object-top dark:hidden"
      />
      <Image
        src={siteProfile.aboutImageSrcDark}
        alt={siteProfile.name}
        width={isAbout ? 800 : 352}
        height={isAbout ? 800 : 352}
        priority
        className="hidden h-full w-full object-cover object-top dark:block"
      />
    </div>
  )
}
