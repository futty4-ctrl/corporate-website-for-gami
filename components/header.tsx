"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/logistics", label: "物流運送事業" },
  { href: "https://www.yuheadspa.net/", label: "ヘッドスパ事業" },
  { href: "/headspa-franchise", label: "ヘッドスパFC" },
  { href: "https://styling-garage.jp", label: "車事業" },
  { href: "https://gamistore.base.shop/", label: "オンラインショップ" },
  { href: "/company", label: "会社概要" },
]

const mobileLinkClass =
  "group flex items-center justify-between rounded-[1.7rem] border border-black/5 bg-white px-5 py-5 text-[15px] font-medium tracking-wide text-foreground shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-amber-300/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] active:scale-[0.99]"

export function Header() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
          ? "border-black/5 bg-white/92 shadow-xl backdrop-blur-2xl"
          : "border-transparent bg-white/72 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="GAMI ホーム"
        >
          <div className="overflow-hidden rounded-full border border-black/5 bg-white p-1 shadow-sm transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-md">
            <img
              src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
              alt="GAMI"
              width={42}
              height={42}
              onError={() => setLogoError(true)}
              className="rounded-full object-cover"
            />
          </div>

          <div className="leading-none">
            <span className="block font-serif text-lg tracking-[0.24em] text-black sm:text-xl">
              GAMI
            </span>

            <span className="mt-1 block text-[10px] tracking-[0.18em] text-black/50">
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

            const external = link.href.startsWith("http")

            return (
              <Link
                key={link.href}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={`relative text-sm tracking-[0.08em] transition-all duration-300 ${
                  active
                    ? "font-semibold text-black"
                    : "text-black/60 hover:text-black"
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

          <Link
            href="/company#contact"
            className="group relative overflow-hidden rounded-full bg-amber-500 px-6 py-3 text-xs font-bold tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl active:scale-95"
          >
            <span className="relative z-10">物流を相談する</span>

            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-black/5 bg-white text-black shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md lg:hidden"
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
          className="border-t border-black/5 bg-[#f8f8f6] px-4 py-5 shadow-2xl backdrop-blur-2xl sm:px-6 lg:hidden"
          aria-label="モバイルナビゲーション"
        >
          <Link
            href="/company#contact"
            className="mb-5 flex items-center justify-center rounded-full bg-amber-500 px-4 py-5 text-center text-base font-bold tracking-[0.08em] text-white shadow-lg transition-all duration-300 hover:bg-amber-600 active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            物流を相談する
          </Link>

          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const external = link.href.startsWith("http")

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className={mobileLinkClass}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.label}</span>

                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-10 flex justify-center">
            <div className="rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-wide text-black shadow-sm">
              gamigami.net
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
