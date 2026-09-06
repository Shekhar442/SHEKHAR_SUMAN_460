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

export function getDocumentTheme(): ThemePreference {
  if (typeof document === "undefined") return "dark"
  const attr = document.documentElement.getAttribute("data-theme")
  if (attr === "light" || attr === "dark") return attr
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function resolveTheme(stored: ThemePreference | null): ThemePreference {
  if (stored) return stored
  return "dark"
}

/** Apply theme to <html>. Uses data-theme + .dark for Tailwind/CSS variables. */
export function applyTheme(theme: ThemePreference) {
  const root = document.documentElement
  root.setAttribute("data-theme", theme)
  if (theme === "dark") {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
  root.style.colorScheme = theme
}

export function persistTheme(theme: ThemePreference) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}

/** @deprecated use applyTheme */
export function applyThemeClass(theme: ThemePreference) {
  applyTheme(theme)
}
