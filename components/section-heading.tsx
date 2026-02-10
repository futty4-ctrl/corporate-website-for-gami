"use client"

import { ScrollAnimate } from "@/components/scroll-animate"

interface SectionHeadingProps {
  sub: string
  title: string
  catchCopy?: string
  className?: string
}

export function SectionHeading({ sub, title, catchCopy, className = "" }: SectionHeadingProps) {
  return (
    <ScrollAnimate className={`text-center ${className}`}>
      <p className="text-xs font-medium tracking-[0.2em] text-gold">
        {sub}
      </p>
      <h2 className="mt-3 font-serif text-xl tracking-[0.08em] text-foreground sm:text-2xl md:text-3xl text-balance leading-relaxed">
        {title}
      </h2>
      {catchCopy && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed tracking-readable text-muted-foreground sm:mt-5 sm:leading-loose">
          {catchCopy.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br className="sm:hidden" />}
              {line}
            </span>
          ))}
        </p>
      )}
    </ScrollAnimate>
  )
}
