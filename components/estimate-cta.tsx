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
          className="btn-glow inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-2.5 text-sm font-medium tracking-widest text-white shadow-lg transition-all hover:scale-105 hover:shadow-glass-hover"
        >
          <FileText className="h-4 w-4" />
          お見積り
        </Link>
        <a
          href="tel:06-6115-9935"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-navy/30 bg-white px-6 py-2.5 text-sm font-medium tracking-wider text-navy transition-all hover:bg-navy/5"
        >
          <Phone className="h-4 w-4" />
          06-6115-9935
        </a>
        <a
          href="https://lin.ee/3QGIdCY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-green-500/30 bg-white px-6 py-2.5 text-sm font-medium tracking-wider text-green-600 transition-all hover:bg-green-50"
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
            className="btn-glow rounded-xl border-2 border-white/40 bg-white/10 px-10 py-3 text-sm font-medium tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            お見積り・ご相談
          </Link>
          <a
            href="tel:06-6115-9935"
            className="flex items-center gap-2 text-sm tracking-wider text-white/80 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            06-6115-9935
          </a>
          <a
            href="https://lin.ee/3QGIdCY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-medium tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <MessageCircle className="h-4 w-4" />
            LINE相談
          </a>
        </div>
      </div>
    </section>
  )
}
