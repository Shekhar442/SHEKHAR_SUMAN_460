import type { Metadata } from "next"
import { Experience } from "@/components/portfolio/experience"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience as ML Engineer at Sveltetech, data science roles, and 20 years in the Indian Air Force.",
}

export default function ExperiencePage() {
  return <Experience />
}
