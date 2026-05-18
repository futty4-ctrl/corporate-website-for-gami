"use client"

import Link from "next/link"
import { useState } from "react"

const footerLinkClass =
  "group flex items-center justify-between rounded-2xl border border-border/70 bg-white/60 px-4 py-3 text-sm text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-muted hover:text-primary hover:shadow-md active:scale-[0.98]"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-12 text-center md:grid-cols-[1.15fr_1fr_1fr] md:gap-10 md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center gap-5 md:items-start">
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
              aria-label="GAMI ホームへ戻る"
            >
              <img
                src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
                alt="GAMI"
                width={38}
                height={38}
                onError={() => setLogoError(true)}
                className="rounded-full"
              />

              <span className="font-serif text-xl tracking-[0.18em]">
                GAMI
              </span>
            </Link>

            <p className="max-w-[20rem] text-sm leading-8 tracking-wide text-muted-foreground md:max-w-none">
              <span className="text-base font-semibold text-foreground">
                未来より先に動く。
              </span>

              <br />

              物流運送事業と
              <br className="sm:hidden" />
              ヘッドスパ事業を軸に、
              <br />
              レスポンスと現場対応力を強みに
              <br className="sm:hidden" />
              展開する株式会社GAMI。
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              <span className="rounded-full border border-border bg-white px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm">
                物流運送
              </span>

              <span className="rounded-full border border-border bg-white px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm">
                ヘッドスパ
              </span>

              <span className="rounded-full border border-border bg-white px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm">
                発送代行
              </span>
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="mb-5 text-xs font-medium tracking-[0.28em] text-gold">
              事業内容
            </h3>

            <ul className="flex flex-col gap-2 text-left">
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
                <Link href="/headspa-franchise" className={footerLinkClass}>
                  <span>ヘッドスパフランチャイズ</span>
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
                  <span>ヘッドスパ専門店ゆう 本店</span>
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
                <Link href="/seihin" className={footerLinkClass}>
                  <span>
                    遺品整理・生前整理
                    <br className="sm:hidden" />
                    / リユース買取
                  </span>

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

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-medium tracking-[0.28em] text-gold">
              お問い合わせ
            </h3>

            <p className="mx-auto max-w-[20rem] text-sm leading-8 tracking-wide text-muted-foreground md:mx-0 md:max-w-none">
              物流の急ぎ案件、
              <br />
              化粧品関連のスポット対応、
              <br />
              各種事業相談まで
              <br className="sm:hidden" />
              お気軽にご連絡ください。
            </p>

            <div className="mt-5 flex flex-col gap-2 text-left">
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
                <span>電話：06-6115-9935</span>

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            <a href="fax:0661159936" className={`${footerLinkClass} mt-2`}>
  <span>FAX：06-6115-9936</span>

  <span
    aria-hidden="true"
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    →
  </span>
</a>

            <Link
              href="/company#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-xs font-bold tracking-[0.18em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg active:scale-95"
            >
              即レスで相談する
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-center sm:mt-16 sm:pt-8">
          <p className="text-[11px] tracking-wide text-muted-foreground">
            © 株式会社GAMI
          </p>
        </div>
      </div>
    </footer>
  )
}
