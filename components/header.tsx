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

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const ctaLabel =
    pathname === "/seihin" ? "無料査定はこちら" : "即レスで相談する"

  return (
    <header className="sticky left-0 right-0 top-0 z-50 glass-strong shadow-glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="GAMI ホーム"
        >
          <img
            src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
            alt="GAMI"
            width={40}
            height={40}
            onError={() => setLogoError(true)}
          />
          <div className="leading-none">
            <span className="block font-serif text-lg tracking-widest text-foreground">
              GAMI
            </span>
            <span className="mt-1 hidden text-[10px] tracking-[0.18em] text-muted-foreground sm:block">
              未来より先に動く。
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-4 lg:flex"
          aria-label="メインナビゲーション"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://www.yuheadspa.net/"
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            ゆう本店
          </a>

          <Link
            href="/company#contact"
            className="shrink-0 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold tracking-wide text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg active:scale-95"
          >
            {ctaLabel}
          </Link>
        </nav>

        <button
          type="button"
          className="flex touch-manipulation items-center justify-center p-2 text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          className="border-t border-border/50 glass-strong px-4 py-6 sm:px-6 lg:hidden"
          aria-label="モバイルナビゲーション"
        >
          <Link
            href="/company#contact"
            className="mb-5 flex justify-center rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-bold tracking-wide text-white shadow-md"
            onClick={() => setIsOpen(false)}
          >
            {ctaLabel}
          </Link>

          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm tracking-wider text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="https://www.yuheadspa.net/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm tracking-wider text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                ヘッドスパ専門店ゆう 本店
              </a>
            </li>

            <li>
              <a
                href="https://styling-garage.jp"
                target="_blank"
                rel="noreferrer"
                className="block text-sm tracking-wider text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                車事業
              </a>
            </li>

            <li>
              <a
                href="https://gamistore.base.shop/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm tracking-wider text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                オンラインショップ
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
