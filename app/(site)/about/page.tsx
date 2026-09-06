import type { Metadata } from "next"
import { About } from "@/components/portfolio/about"

export const metadata: Metadata = {
  title: "About",
  description:
    "AI & Machine Learning Engineer and Indian Air Force veteran — background, career stats, and professional focus.",
}

export default function AboutPage() {
  return <About />
}
