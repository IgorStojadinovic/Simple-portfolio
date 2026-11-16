import { useEffect, useState, type CSSProperties, type RefCallback } from "react"

export function riseDelay(index: number): CSSProperties {
  return { "--i": index } as CSSProperties
}

export function useReveal<T extends HTMLElement>(): RefCallback<T> {
  const [node, setNode] = useState<T | null>(null)

  useEffect(() => {
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-in")
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          node.classList.add("is-in")
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [node])

  return setNode
}
