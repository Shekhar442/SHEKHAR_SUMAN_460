/**
 * Scroll section into view using CSS scroll-margin-top (--site-header-height).
 * Avoids measuring full <header> height when the mobile menu is open (which
 * used to inflate the offset and leave the previous section visible).
 */
export function scrollToSelector(selector: string, behavior: ScrollBehavior = "smooth") {
  const el = document.querySelector(selector)
  if (!el) return

  el.scrollIntoView({ behavior, block: "start", inline: "nearest" })
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, behavior })
}
