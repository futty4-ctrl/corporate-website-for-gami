import Link from "next/link"
import { Phone, MessageCircle, FileText } from "lucide-react"

interface EstimateCtaProps {
  variant?: "default" | "compact" | "inline"
  title?: string
  description?: string
  className?: string
}

export function EstimateCta({
  variant = "default",
  title,
  description,
  className = "",
}: EstimateCtaProps) {
  const defaultTitle = "お見積り・ご相談"
  const defaultDescription = "まずはお気軽にお問い合わせください。無料でお見積りいたします。"

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
        <Link
          href="/company#contact"
          className="btn-glow inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-medium tracking-widest text-white shadow-lg transition-all active:scale-95 sm:px-6 sm:hover:scale-105 sm:hover:shadow-glass-hover touch-manipulation"
        >
          <FileText className="h-4 w-4" />
          お見積り
        </Link>
        <a
          href="tel:06-6115-9935"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-navy/30 bg-white px-5 py-2.5 text-sm font-medium tracking-wider text-navy transition-all active:scale-95 sm:px-6 sm:hover:bg-navy/5 touch-manipulation"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">06-6115-9935</span>
          <span className="sm:hidden">電話</span>
        </a>
        <a
          href="https://lin.ee/3QGIdCY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-green-500/30 bg-white px-5 py-2.5 text-sm font-medium tracking-wider text-green-600 transition-all active:scale-95 sm:px-6 sm:hover:bg-green-50 touch-manipulation"
        >
          <MessageCircle className="h-4 w-4" />
          LINE相談
        </a>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <Link
          href="/company#contact"
          className="btn-glow inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-2.5 text-sm font-medium tracking-widest text-white shadow-lg transition-all hover:scale-105 hover:shadow-glass-hover"
        >
          <FileText className="h-4 w-4" />
          お見積り
        </Link>
        <a
          href="tel:06-6115-9935"
          className="inline-flex items-center gap-2 text-sm tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone className="h-4 w-4" />
          06-6115-9935
        </a>
      </div>
    )
  }

  // default variant
  return (
    <section className={`relative py-16 px-4 text-center sm:px-6 ${className}`}>
      <div className="absolute inset-0 aurora-gradient opacity-90" />
      <div className="relative z-10 mx-auto max-w-xl">
        <h2 className="font-serif text-2xl tracking-wider text-balance text-white md:text-3xl">
          {title || defaultTitle}
        </h2>
        {description && (
          <p className="mt-4 text-sm leading-relaxed tracking-wide text-white/90 sm:text-base">
            {description}
          </p>
        )}
        {!description && (
          <p className="mt-4 text-sm leading-relaxed tracking-wide text-white/90 sm:text-base">
            {defaultDescription}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/company#contact"
            className="btn-glow w-full rounded-xl border-2 border-white/40 bg-white/10 px-8 py-3 text-sm font-medium tracking-widest text-white backdrop-blur-sm transition-all active:scale-95 sm:w-auto sm:px-10 sm:hover:bg-white/20 touch-manipulation"
          >
            お見積り・ご相談
          </Link>
          <a
            href="tel:06-6115-9935"
            className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-medium tracking-wider text-white backdrop-blur-sm transition-all active:scale-95 sm:w-auto sm:hover:bg-white/20 touch-manipulation"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">06-6115-9935</span>
            <span className="sm:hidden">電話をかける</span>
          </a>
          <a
            href="https://lin.ee/3QGIdCY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-medium tracking-wider text-white backdrop-blur-sm transition-all active:scale-95 sm:w-auto sm:hover:bg-white/20 touch-manipulation"
          >
            <MessageCircle className="h-4 w-4" />
            LINE相談
          </a>
        </div>
      </div>
    </section>
  )
}
