"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "物流トップ" },
  { href: "/logistics", label: "物流サービス" },
  { href: "/company", label: "会社概要" },
  { href: "/other-business", label: "その他事業" },
]

const mobileLinkClass =
  "group flex items-center justify-between rounded-[1.3rem] border border-black/5 bg-white px-4 py-4 text-[14px] font-medium leading-6 tracking-[0.02em] text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-amber-300/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] active:scale-[0.99]"

export function Header() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label="GAMI 物流トップ"
        >
          <div className="overflow-hidden rounded-full border border-black/5 bg-white p-1 shadow-sm transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-md">
            <img
              src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
              alt="GAMI"
              width={38}
              height={38}
              onError={() => setLogoError(true)}
              className="rounded-full object-cover sm:h-[42px] sm:w-[42px]"
            />
          </div>

          <div className="leading-none">
            <span className="block text-[15px] font-semibold tracking-[0.14em] text-black sm:text-lg sm:tracking-[0.2em]">
              GAMI
            </span>

            <span className="mt-1 block text-[9px] tracking-[0.08em] text-black/50 sm:text-[10px] sm:tracking-[0.14em]">
              大阪の物流倉庫・発送代行
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
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
                className={`relative text-sm tracking-[0.04em] transition-all duration-300 ${
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

          <a
            href="tel:0661159935"
            className="rounded-full border border-black/10 px-5 py-3 text-xs font-bold tracking-[0.08em] text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            電話相談
          </a>

          <Link
            href="/company#contact"
            className="group relative overflow-hidden rounded-full bg-amber-500 px-5 py-3 text-xs font-bold tracking-[0.08em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl active:scale-95"
          >
            <span className="relative z-10">物流を無料相談</span>
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-black/5 bg-white text-black shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav
          className="border-t border-black/5 bg-[#f8f8f6] px-4 py-4 shadow-2xl backdrop-blur-2xl sm:px-6 lg:hidden"
          aria-label="モバイルナビゲーション"
        >
          <Link
            href="/company#contact"
            className="mb-3 flex items-center justify-center rounded-full bg-amber-500 px-4 py-4 text-center text-sm font-bold tracking-[0.04em] text-white shadow-lg transition-all duration-300 hover:bg-amber-600 active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            物流を無料相談する
          </Link>

          <a
            href="tel:0661159935"
            className="mb-4 flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-4 text-center text-sm font-bold tracking-[0.04em] text-black shadow-sm active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            電話で相談する
          </a>

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
                    className="text-base transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <div className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold tracking-[0.08em] text-black shadow-sm">
              発送代行・流通加工・内職作業
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
