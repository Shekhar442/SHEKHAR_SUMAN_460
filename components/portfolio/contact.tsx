"use client"

import { useState } from "react"
import { Mail, Linkedin, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel, FieldContent } from "@/components/ui/field"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { sectionCopy, siteProfile } from "@/lib/portfolio/site-data"

export function Contact() {
  const sectionRef = useSectionReveal<HTMLElement>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-secondary/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          {sectionCopy.contact.title}{" "}
          <span className="text-primary">{sectionCopy.contact.titleAccent}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          {sectionCopy.contact.subtitle}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {sectionCopy.contact.connectHeading}
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {sectionCopy.contact.connectBlurb}
            </p>

            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${siteProfile.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">{siteProfile.email}</p>
                </div>
              </a>

              <a
                href={siteProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground font-medium">{siteProfile.linkedinHandle}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">{siteProfile.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder="Your name"
                        required
                        className="bg-secondary border-border"
                      />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <FieldContent>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-secondary border-border"
                      />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>Subject</FieldLabel>
                    <FieldContent>
                      <Input
                        type="text"
                        placeholder="What's this about?"
                        required
                        className="bg-secondary border-border"
                      />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>Message</FieldLabel>
                    <FieldContent>
                      <Textarea
                        placeholder="Your message..."
                        required
                        rows={5}
                        className="bg-secondary border-border resize-none"
                      />
                    </FieldContent>
                  </Field>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </FieldGroup>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
