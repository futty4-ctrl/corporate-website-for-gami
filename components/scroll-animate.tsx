"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimate({
  children,
  className = "",
  delay = 0,
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const timerIds: number[] = []

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const timerId = window.setTimeout(() => {
          el.classList.add("animate-in")
        }, delay * 1000)

        timerIds.push(timerId)
        observer.unobserve(el)
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    )

    observer.observe(el)

    return () => {
      timerIds.forEach((timerId) => window.clearTimeout(timerId))
      observer.disconnect()
    }
  }, [delay])

  return (
    <div ref={ref} className={`scroll-fade-up will-change-transform ${className}`}>
      {children}
    </div>
  )
}
