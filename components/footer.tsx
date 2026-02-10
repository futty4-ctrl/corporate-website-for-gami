"use client"

import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
                alt="GAMI"
                width={32}
                height={32}
                onError={() => setLogoError(true)}
              />
              <span className="font-serif text-lg tracking-widest">GAMI</span>
            </div>
            <p className="text-sm leading-8 tracking-wide text-muted-foreground">
              繋ぐ。癒す。想う。 株式会社GAMI
            </p>
          </div>

          {/* Business Links */}
          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-gold">
              事業内容
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/logistics" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  物流運送事業
                </Link>
              </li>
              <li>
                <Link href="/school" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  ヘッドスパ事業
                </Link>
              </li>
              <li>
                <Link href="/seihin" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  遺品整理・生前整理事業
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/company#contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-gold">
              お問い合わせ
            </h3>
            <p className="text-sm leading-8 tracking-wide text-muted-foreground">
              お気軽にご連絡ください。
            </p>
            <a
              href="mailto:f_fuchigami@gamigami.email"
              className="mt-3 block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              f_fuchigami@gamigami.email
            </a>
            <div className="mt-2 text-sm text-muted-foreground">
              <p>TEL: <a href="tel:06-6115-9935" className="transition-colors hover:text-primary">06-6115-9935</a></p>
              <p>FAX: 06-6115-9936</p>
            </div>
            <Link
              href="/company#contact"
              className="mt-4 inline-block aurora-gradient rounded-lg px-6 py-2 text-xs font-medium tracking-widest text-white transition-all hover:scale-105 hover:shadow-glass-hover"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 株式会社GAMI 無断転載を禁じます
          </p>
        </div>
      </div>
    </footer>
  )
}
