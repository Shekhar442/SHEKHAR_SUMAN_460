"use client"

import { useState, useEffect, useLayoutEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteNav, siteProfile } from "@/lib/portfolio/site-data"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const syncHeaderOffsetVar = () => {
      const nav = document.querySelector("header nav")
      const row = nav?.querySelector(":scope > div.flex.items-center.justify-between")
      if (!(nav instanceof HTMLElement) || !(row instanceof HTMLElement)) return
      const cs = getComputedStyle(nav)
      const pt = parseFloat(cs.paddingTop) || 0
      const pb = parseFloat(cs.paddingBottom) || 0
      const h = Math.ceil(row.getBoundingClientRect().height + pt + pb)
      document.documentElement.style.setProperty("--site-header-height", `${h}px`)
    }

    syncHeaderOffsetVar()
    window.addEventListener("resize", syncHeaderOffsetVar)
    const ro = new ResizeObserver(syncHeaderOffsetVar)
    const nav = document.querySelector("header nav")
    if (nav) ro.observe(nav)

    return () => {
      window.removeEventListener("resize", syncHeaderOffsetVar)
      ro.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b bg-background/90 backdrop-blur-md ${
        isScrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            {siteProfile.logoInitials}
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {siteNav.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            {siteNav.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    isActive(href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
