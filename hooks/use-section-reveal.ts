"use client"

import { useEffect, useRef } from "react"

type UseSectionRevealOptions<T extends HTMLElement> = {
  threshold?: number
  onIntersect?: (element: T) => void
}

/**
 * Observes when a section enters the viewport. Does not toggle opacity—Tailwind’s
 * `opacity-0` + tw-animate `fade-in` often never wins the cascade, which hid all sections.
 */
export function useSectionReveal<T extends HTMLElement>(
  options?: UseSectionRevealOptions<T>
) {
  const ref = useRef<T>(null)
  const onIntersectRef = useRef(options?.onIntersect)
  onIntersectRef.current = options?.onIntersect
  const threshold = options?.threshold ?? 0.1

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersectRef.current?.(el)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
