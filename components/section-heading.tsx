"use client"

import { ScrollAnimate } from "@/components/scroll-animate"

interface SectionHeadingProps {
  sub: string
  title: string
  catchCopy?: string
  className?: string
}

export function SectionHeading({
  sub,
  title,
  catchCopy,
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollAnimate className={`text-center ${className}`}>
      <p className="text-[11px] font-semibold tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.2em]">
        {sub}
      </p>

      <h2 className="mx-auto mt-3 max-w-[34rem] text-[1.85rem] font-bold leading-[1.28] tracking-[-0.03em] text-foreground sm:text-4xl sm:leading-tight md:text-5xl">
        {title}
      </h2>

      {catchCopy && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
          {catchCopy}
        </p>
      )}
    </ScrollAnimate>
  )
}
