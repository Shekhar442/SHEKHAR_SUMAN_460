/** Offset for fixed header so section titles aren’t hidden under the nav */
const HEADER_OFFSET_PX = 88

export function scrollToSelector(selector: string, behavior: ScrollBehavior = "smooth") {
  const el = document.querySelector(selector)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX
  window.scrollTo({ top: Math.max(0, top), behavior })
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, behavior })
}
