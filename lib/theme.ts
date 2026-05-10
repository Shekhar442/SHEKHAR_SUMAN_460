export const THEME_STORAGE_KEY = "portfolio-theme"

export type ThemePreference = "light" | "dark"

export function getStoredTheme(): ThemePreference | null {
  if (typeof window === "undefined") return null
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY)
    if (v === "light" || v === "dark") return v
  } catch {
    /* ignore */
  }
  return null
}

export function getSystemDark(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export function resolveTheme(stored: ThemePreference | null): ThemePreference {
  if (stored) return stored
  return getSystemDark() ? "dark" : "light"
}

export function applyThemeClass(theme: ThemePreference) {
  const root = document.documentElement
  if (theme === "dark") root.classList.add("dark")
  else root.classList.remove("dark")
}

export function persistTheme(theme: ThemePreference) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}
