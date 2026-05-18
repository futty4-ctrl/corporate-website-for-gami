"use client"

import Link from "next/link"
import { useState } from "react"

const footerLinkClass =
  "flex items-center justify-between rounded-2xl border border-border/70 bg-white/60 px-4 py-3 text-sm text-muted-foreground shadow-sm transition-all hover:border-gold/40 hover:bg-muted hover:text-primary active:scale-[0.98]"

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              aria-label="GAMI ホームへ戻る"
            >
              <img
                src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
                alt="GAMI"
                width={34}
                height={34}
                onError={() => setLogoError(true)}
              />
              <span className="font-serif text-lg tracking-widest">GAMI</span>
            </Link>

            <p className="text-sm leading-8 tracking-wide text-muted-foreground">
              <span className="font-semibold text-foreground">
                未来より先に動く。
              </span>
              <br />
              物流運送事業とヘッドスパ事業を軸に、
              <br className="sm:hidden" />
              レスポンスと現場対応力を強みに展開する株式会社GAMI。
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-gold">
              事業内容
            </h3>

            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/logistics" className={footerLinkClass}>
                  <span>物流運送事業</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>

              <li>
                <Link href="/headspa-franchise" className={footerLinkClass}>
                  <span>ヘッドスパフランチャイズ</span>
                  <span aria-hidden="true">→</span>
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
                  <span aria-hidden="true">→</span>
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
                  <span aria-hidden="true">→</span>
                </a>
              </li>

              <li>
                <Link href="/seihin" className={footerLinkClass}>
                  <span>遺品整理・生前整理 / リユース買取</span>
                  <span aria-hidden="true">→</span>
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
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-gold">
              お問い合わせ
            </h3>

            <p className="text-sm leading-8 tracking-wide text-muted-foreground">
              物流の急ぎ案件、
              <br />
              化粧品関連のスポット対応、
              <br />
              各種事業相談までお気軽にご連絡ください。
            </p>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href="mailto:k_fuchigami@gamigami.email"
                className={footerLinkClass}
              >
                <span>メールで相談する</span>
                <span aria-hidden="true">→</span>
              </a>

              <a href="tel:0661159935" className={footerLinkClass}>
                <span>電話：06-6115-9935</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              FAX: 06-6115-9936
            </p>

            <Link
              href="/company#contact"
              className="mt-5 inline-block w-full rounded-full bg-amber-500 px-6 py-3 text-center text-xs font-bold tracking-widest text-white transition-all hover:bg-amber-600 active:scale-95"
            >
              即レスで相談する
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center sm:mt-16 sm:pt-8">
          <p className="text-xs text-muted-foreground">© 株式会社GAMI</p>
        </div>
      </div>
    </footer>
  )
}
