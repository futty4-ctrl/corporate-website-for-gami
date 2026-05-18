"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/logistics", label: "物流運送事業" },
  { href: "/headspa-franchise", label: "ヘッドスパ事業" },
  { href: "/seihin", label: "整理買取事業" },
  { href: "/company", label: "会社概要" },
]

const mobileLinkClass =
  "group flex items-center justify-between rounded-2xl border border-border/60 bg-white/70 px-4 py-4 text-sm tracking-wide text-foreground shadow-sm transition-all duration-300 hover:border-gold/40 hover:bg-muted hover:shadow-md active:scale-[0.98]"

export function Header() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const ctaLabel =
    pathname === "/seihin"
      ? "無料査定はこちら"
      : "即レスで相談する"

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    onScroll()

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky left-0 right-0 top-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? "border-white/10 bg-background/88 shadow-2xl backdrop-blur-2xl"
          : "border-transparent bg-background/72 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="GAMI ホーム"
        >
          <div className="overflow-hidden rounded-full border border-border/50 bg-white/80 p-1 shadow-sm transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-md">
            <img
              src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
              alt="GAMI"
              width={40}
              height={40}
              onError={() => setLogoError(true)}
              className="rounded-full object-cover"
            />
          </div>

          <div className="leading-none">
            <span className="block font-serif text-lg tracking-[0.24em] text-foreground sm:text-xl">
              GAMI
            </span>

            <span className="mt-1 block text-[10px] tracking-[0.18em] text-muted-foreground">
              未来より先に動く。
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="メインナビゲーション"
        >
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href))

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-[0.08em] transition-all duration-300 ${
                  active
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            )
          })}

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

          <a
            href="https://gamistore.base.shop/"
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-[0.08em] text-muted-foreground transition-colors hover:text-primary"
          >
            STORE
          </a>

          <Link
            href="/company#contact"
            className="group relative overflow-hidden rounded-full bg-amber-500 px-5 py-3 text-xs font-bold tracking-[0.16em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl active:scale-95"
          >
            <span className="relative z-10">{ctaLabel}</span>

            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-border/50 bg-white/70 text-foreground shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="border-t border-border/50 bg-background/96 px-4 py-5 shadow-2xl backdrop-blur-2xl sm:px-6 lg:hidden"
          aria-label="モバイルナビゲーション"
        >
          <Link
            href="/company#contact"
            className="mb-5 flex items-center justify-center rounded-full bg-amber-500 px-4 py-4 text-center text-sm font-bold tracking-[0.14em] text-white shadow-md transition-all duration-300 hover:bg-amber-600 active:scale-95"
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

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
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
                <span>
                  ヘッドスパ専門店ゆう
                  <br className="sm:hidden" />
                  本店
                </span>

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
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

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
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

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
