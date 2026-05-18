"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/logistics", label: "物流運送事業" },
  { href: "/headspa-franchise", label: "ヘッドスパ事業" },
  { href: "/seihin", label: "整理買取事業" },
  { href: "/company", label: "会社概要" },
]

const mobileLinkClass =
  "flex items-center justify-between rounded-2xl border border-border/60 bg-white/60 px-4 py-4 text-sm tracking-wide text-foreground transition-all hover:bg-muted active:scale-[0.98]"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const ctaLabel =
    pathname === "/seihin" ? "無料査定はこちら" : "即レスで相談する"

  return (
    <header className="sticky left-0 right-0 top-0 z-50 border-b border-white/10 glass-strong shadow-glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label="GAMI ホーム"
        >
          <img
            src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
            alt="GAMI"
            width={42}
            height={42}
            onError={() => setLogoError(true)}
          />

          <div className="leading-none">
            <span className="block font-serif text-lg tracking-[0.22em] text-foreground sm:text-xl">
              GAMI
            </span>

            <span className="mt-1 block text-[10px] tracking-[0.18em] text-muted-foreground">
              未来より先に動く。
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="メインナビゲーション"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.08em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://www.yuheadspa.net/"
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-[0.08em] text-muted-foreground transition-colors hover:text-primary"
          >
            ゆう本店
          </a>

          <a
            href="https://styling-garage.jp"
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-[0.08em] text-muted-foreground transition-colors hover:text-primary"
          >
            車事業
          </a>

          <Link
            href="/company#contact"
            className="shrink-0 rounded-full bg-amber-500 px-5 py-3 text-xs font-bold tracking-[0.14em] text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg active:scale-95"
          >
            {ctaLabel}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-border/50 bg-white/50 text-foreground transition-all hover:bg-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav
          className="border-t border-border/50 bg-background/95 px-4 py-5 backdrop-blur-xl sm:px-6 lg:hidden"
          aria-label="モバイルナビゲーション"
        >
          <Link
            href="/company#contact"
            className="mb-5 flex justify-center rounded-full bg-amber-500 px-4 py-4 text-center text-sm font-bold tracking-[0.12em] text-white shadow-md transition-all active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            {ctaLabel}
          </Link>

          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}

            <li>
              <a
                href="https://www.yuheadspa.net/"
                target="_blank"
                rel="noreferrer"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                <span>ヘッドスパ専門店ゆう 本店</span>
                <span aria-hidden="true">→</span>
              </a>
            </li>

            <li>
              <a
                href="https://styling-garage.jp"
                target="_blank"
                rel="noreferrer"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                <span>車事業</span>
                <span aria-hidden="true">→</span>
              </a>
            </li>

            <li>
              <a
                href="https://gamistore.base.shop/"
                target="_blank"
                rel="noreferrer"
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                <span>オンラインショップ</span>
                <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
