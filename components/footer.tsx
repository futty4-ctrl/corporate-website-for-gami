"use client"

import Link from "next/link"
import { useState } from "react"

const footerLinkClass =
  "group flex items-center justify-between rounded-[1.6rem] border border-black/5 bg-white px-5 py-4 text-sm text-black/70 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300/40 hover:text-black hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] active:scale-[0.98]"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-black/5 bg-[#f8f8f6] text-black">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-14 text-center md:grid-cols-[1.15fr_1fr_1fr] md:gap-12 md:text-left">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
              aria-label="GAMI ホームへ戻る"
            >
              <img
                src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
                alt="GAMI"
                width={42}
                height={42}
                onError={() => setLogoError(true)}
                className="rounded-full"
              />

              <span className="font-serif text-2xl tracking-[0.22em]">
                GAMI
              </span>
            </Link>

            <p className="max-w-[24rem] text-sm leading-8 tracking-wide text-black/60 md:max-w-none">
              <span className="text-base font-semibold text-black">
                未来より先に動く。
              </span>
              <br />
              株式会社GAMIは、
              <br />
              物流運送事業を中心に、
              <br />
              倉庫保管・発送代行・流通加工まで対応。
              <br />
              ヘッドスパ事業・FC展開も行っています。
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {["物流運送", "発送代行", "倉庫保管", "流通加工"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/5 bg-white px-4 py-1.5 text-[11px] font-medium text-black/60 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold tracking-[0.30em] text-amber-500">
              BUSINESS
            </h3>

            <ul className="flex flex-col gap-3 text-left">
              <li>
                <Link href="/logistics" className={footerLinkClass}>
                  <span>物流運送事業</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
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
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>

              <li>
                <Link href="/headspa-franchise" className={footerLinkClass}>
                  <span>ヘッドスパFC</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>

              <li>
                <a
                  href="https://styling-garage.jp"
                  target="_blank"
                  rel="noreferrer"
                  className={footerLinkClass}
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
                  className={footerLinkClass}
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
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold tracking-[0.30em] text-amber-500">
              CONTACT
            </h3>

            <p className="mx-auto max-w-[22rem] text-sm leading-8 tracking-wide text-black/60 md:mx-0 md:max-w-none">
              倉庫保管、発送代行、
              <br />
              スポット出荷、流通加工、
              <br />
              ヘッドスパFC相談まで。
              <br />
              まずはお気軽にご相談ください。
            </p>

            <div className="mt-6 flex flex-col gap-3 text-left">
              <a
                href="mailto:k_fuchigami@gamigami.email"
                className={footerLinkClass}
              >
                <span>メールで相談する</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a href="tel:0661159935" className={footerLinkClass}>
                <span>TEL：06-6115-9935</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            <Link
              href="/company#contact"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-4 text-center text-sm font-bold tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl active:scale-95"
            >
              物流を相談する
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-black/5 pt-8 text-center">
          <p className="text-[11px] tracking-[0.12em] text-black/40">
            © GAMI INC.
          </p>
        </div>
      </div>
    </footer>
  )
}
