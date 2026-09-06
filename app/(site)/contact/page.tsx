import type { Metadata } from "next"
import { Contact } from "@/components/portfolio/contact"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shekhar Suman via email, LinkedIn, or GitHub.",
}

export default function ContactPage() {
  return <Contact />
}
