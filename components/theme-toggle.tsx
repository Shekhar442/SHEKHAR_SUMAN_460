"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  applyThemeClass,
  getStoredTheme,
  persistTheme,
  resolveTheme,
  type ThemePreference,
} from "@/lib/theme"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<ThemePreference>("light")

  useEffect(() => {
    const resolved = resolveTheme(getStoredTheme())
    setTheme(resolved)
    applyThemeClass(resolved)
    setMounted(true)
  }, [])

  const isDark = theme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="shrink-0"
      disabled={!mounted}
      onClick={() => {
        const next: ThemePreference = isDark ? "light" : "dark"
        setTheme(next)
        applyThemeClass(next)
        persistTheme(next)
      }}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {!mounted ? (
        <span className="block h-5 w-5" aria-hidden />
      ) : isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}
