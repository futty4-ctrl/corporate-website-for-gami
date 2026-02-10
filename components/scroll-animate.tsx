"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimate({ children, className = "", delay = 0 }: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("animate-in")
          }, delay * 1000)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`scroll-fade-up ${className}`}>
      {children}
    </div>
  )
}
