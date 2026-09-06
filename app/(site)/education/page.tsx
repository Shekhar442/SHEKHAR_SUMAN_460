import type { Metadata } from "next"
import { Education } from "@/components/portfolio/education"

export const metadata: Metadata = {
  title: "Education",
  description:
    "MCA in Artificial Intelligence, BCA, NIELIT O Level, and professional certifications in data analytics and GenAI.",
}

export default function EducationPage() {
  return <Education />
}
