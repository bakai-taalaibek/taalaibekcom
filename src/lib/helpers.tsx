export const isElementDominant = (el: Element | null) => {
  if (el === null) {
    return 0
  }
  const vHeight = window.innerHeight || document.documentElement.clientHeight

  const rect = el.getBoundingClientRect()
  const elementTop = rect.top >= 0 ? rect.top : 0
  const elementBottom = rect.bottom >= vHeight ? vHeight : rect.bottom
  const elementHeightInViewPort = elementBottom - elementTop

  return elementHeightInViewPort / vHeight
}
