"use client"

import { MessageCircle } from "lucide-react"

export function FloatingCta() {
  return (
    <a
      href="https://lin.ee/3QGIdCY"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full aurora-gradient px-4 py-2.5 text-sm font-medium tracking-wider text-white shadow-lg transition-all duration-300 active:scale-95 md:hidden touch-manipulation max-w-[calc(100vw-2rem)]"
      aria-label="LINEで相談"
    >
      <MessageCircle className="h-4 w-4" />
      <span>LINE相談</span>
    </a>
  )
}
