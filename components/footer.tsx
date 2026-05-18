"use client"

import Link from "next/link"
import { useState } from "react"

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

            <p className="text-sm leading-7 tracking-wide text-muted-foreground">
              <span className="font-semibold text-foreground">
                未来より先に動く。
              </span>
              <br />
              物流運送事業とヘッドスパ事業を軸に、
              レスポンスと現場対応力を強みに展開する株式会社GAMI。
            </p>
          </div>

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
                <Link href="/headspa-franchise" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  ヘッドスパフランチャイズ
                </Link>
              </li>
              <li>
                <a href="https://www.yuheadspa.net/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  ヘッドスパ専門店ゆう 本店
                </a>
              </li>
              <li>
                <a href="https://styling-garage.jp" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  車事業
                </a>
              </li>
              <li>
                <Link href="/seihin" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  遺品整理・生前整理 / リユース買取
                </Link>
              </li>
              <li>
                <a href="https://gamistore.base.shop/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  オンラインショップ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-gold">
              お問い合わせ
            </h3>

            <p className="text-sm leading-8 tracking-wide text-muted-foreground">
              物流の急ぎ案件、化粧品関連のスポット対応、各種事業相談までお気軽にご連絡ください。
            </p>

            <a
              href="mailto:k_fuchigami@gamigami.email"
              className="mt-3 block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              k_fuchigami@gamigami.email
            </a>

            <div className="mt-2 text-sm text-muted-foreground">
              <p>
                TEL:{" "}
                <a href="tel:0661159935" className="transition-colors hover:text-primary">
                  06-6115-9935
                </a>
              </p>
              <p>FAX: 06-6115-9936</p>
            </div>

            <Link
              href="/company#contact"
              className="mt-5 inline-block w-full rounded-full bg-amber-500 px-6 py-3 text-center text-xs font-bold tracking-widest text-white transition-all hover:bg-amber-600 active:scale-95 sm:w-auto"
            >
              即レスで相談する
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center sm:mt-16 sm:pt-8">
          <p className="text-xs text-muted-foreground">
            © 株式会社GAMI
          </p>
        </div>
      </div>
    </footer>
  )
}
