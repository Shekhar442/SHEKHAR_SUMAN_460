"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  applyTheme,
  getDocumentTheme,
  getStoredTheme,
  persistTheme,
  resolveTheme,
  type ThemePreference,
} from "@/lib/theme"

type ThemeContextValue = {
  theme: ThemePreference
  setTheme: (theme: ThemePreference) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>("dark")

  useEffect(() => {
    const initial = resolveTheme(getStoredTheme())
    setThemeState(initial)
    applyTheme(initial)
  }, [])

  const setTheme = useCallback((next: ThemePreference) => {
    setThemeState(next)
    applyTheme(next)
    persistTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    const current = getDocumentTheme()
    const next: ThemePreference = current === "dark" ? "light" : "dark"
    setThemeState(next)
    applyTheme(next)
    persistTheme(next)
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return ctx
}
