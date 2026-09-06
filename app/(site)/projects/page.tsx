import type { Metadata } from "next"
import { Projects } from "@/components/portfolio/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "GitHub projects spanning conversational AI, RAG, speech recognition, agri-tech, and full-stack GenAI apps.",
}

export default function ProjectsPage() {
  return <Projects />
}
