import type { Metadata } from "next"
import { Skills } from "@/components/portfolio/skills"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills in Python, TensorFlow, PyTorch, computer vision, NLP, generative AI, and cloud tools.",
}

export default function SkillsPage() {
  return <Skills />
}
