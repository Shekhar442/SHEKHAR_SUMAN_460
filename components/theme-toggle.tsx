"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md border-2 border-[#60a5fa] bg-[#1e3a8a] text-[#eff6ff] shadow-sm transition-colors hover:bg-[#2563eb] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93c5fd]"
    >
      {isDark ? (
        <Sun aria-hidden className="h-5 w-5 shrink-0" strokeWidth={2.5} />
      ) : (
        <Moon aria-hidden className="h-5 w-5 shrink-0" strokeWidth={2.5} />
      )}
    </button>
  )
}
