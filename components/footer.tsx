"use client"

import Link from "next/link"
import { useState } from "react"

const footerLinkClass =
  "group flex items-center justify-between rounded-[1.25rem] border border-black/5 bg-white px-4 py-3.5 text-[14px] leading-6 tracking-[0.01em] text-black/70 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300/40 hover:text-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] active:scale-[0.98]"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-black/5 bg-[#f8f8f6] text-black">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 text-center md:grid-cols-[1.15fr_1fr_1fr] md:gap-10 md:text-left">
          <div className="flex flex-col items-center gap-5 md:items-start">
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
              aria-label="GAMI 物流トップへ戻る"
            >
              <img
                src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
                alt="GAMI"
                width={38}
                height={38}
                onError={() => setLogoError(true)}
                className="rounded-full sm:h-[42px] sm:w-[42px]"
              />

              <span className="text-[1.35rem] font-semibold tracking-[0.14em] sm:text-2xl sm:tracking-[0.2em]">
                GAMI
              </span>
            </Link>

            <p className="max-w-[21rem] text-sm leading-7 tracking-[0.01em] text-black/60 md:max-w-none">
              <span className="text-[15px] font-semibold leading-7 text-black">
                大阪の物流倉庫・発送代行ならGAMI。
              </span>
              <br />
              守口市大日町の約100坪倉庫を拠点に、
              <br />
              保管・発送代行・流通加工・内職作業まで対応。
              <br />
              福岡・神戸の提携倉庫も活用できます。
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {["発送代行", "倉庫保管", "流通加工", "内職作業"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/5 bg-white px-3 py-1.5 text-[10px] font-medium tracking-[0.02em] text-black/60 shadow-sm sm:px-4 sm:text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold tracking-[0.18em] text-amber-500 sm:tracking-[0.24em]">
              LOGISTICS
            </h3>

            <ul className="flex flex-col gap-2.5 text-left">
              <li>
                <Link href="/logistics" className={footerLinkClass}>
                  <span>物流サービス</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/company" className={footerLinkClass}>
                  <span>会社概要</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/other-business" className={footerLinkClass}>
                  <span>その他事業</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>

              <li>
                <a
                  href="https://www.yuheadspa.net/"
                  target="_blank"
                  rel="noreferrer"
                  className={footerLinkClass}
                >
                  <span>ヘッドスパ事業</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold tracking-[0.18em] text-amber-500 sm:tracking-[0.24em]">
              CONTACT
            </h3>

            <p className="mx-auto max-w-[21rem] text-sm leading-7 tracking-[0.01em] text-black/60 md:mx-0 md:max-w-none">
              発送代行、倉庫保管、検品、梱包、
              シール貼り、セット組み、内職作業、流通加工まで。
              まずはお気軽にご相談ください。
            </p>

            <div className="mt-5 flex flex-col gap-2.5 text-left">
              <a
                href="mailto:k_fuchigami@gamigami.email"
                className={footerLinkClass}
              >
                <span className="pr-3">メールで相談する</span>
                <span className="shrink-0 text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a href="tel:0661159935" className={footerLinkClass}>
                <span>電話で相談する</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <Link
              href="/company#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3.5 text-center text-sm font-bold tracking-[0.04em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl active:scale-95"
            >
              物流を無料相談する
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-black/5 pt-7 text-center">
          <p className="text-[10px] tracking-[0.08em] text-black/40">
            © GAMI INC.
          </p>
        </div>
      </div>
    </footer>
  )
}
