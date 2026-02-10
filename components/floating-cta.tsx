"use client"

import { MessageCircle } from "lucide-react"

export function FloatingCta() {
  return (
    <a
      href="https://lin.ee/3QGIdCY"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full aurora-gradient px-5 py-3 text-sm font-medium tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-glass-hover md:hidden"
      aria-label="LINEで相談"
    >
      <MessageCircle className="h-4 w-4" />
      <span>LINE相談</span>
    </a>
  )
}
