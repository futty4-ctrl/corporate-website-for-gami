"use client"

import Link from "next/link"
import { useState } from "react"

const footerLinkClass =
  "group flex items-center justify-between rounded-2xl border border-black/5 bg-white px-4 py-4 text-[14px] font-semibold leading-6 text-black/70 shadow-sm transition hover:border-amber-300/40 hover:text-black hover:shadow-md active:scale-[0.98]"

const serviceTags = ["発送代行", "倉庫保管", "流通加工", "内職作業"]

const areas = [
  "全国対応",
  "365日稼働",
  "発送代行",
  "倉庫保管",
  "流通加工",
  "内職作業",
  "検品",
  "梱包",
]

export function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="border-t border-black/5 bg-[#f8f8f6] text-black">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_1fr]">
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src={logoError ? "/placeholder-logo.svg" : "/images/logo.png"}
                alt="GAMI"
                width={42}
                height={42}
                onError={() => setLogoError(true)}
                className="rounded-full"
              />

              <span className="text-2xl font-semibold tracking-[0.18em]">
                GAMI
              </span>
            </Link>

            <p className="mx-auto mt-5 max-w-[22rem] text-sm leading-7 text-black/60 lg:mx-0">
              <span className="font-semibold text-black">
                大阪の物流倉庫・発送代行ならGAMI
              </span>
              <br />
              守口市大日町の約100坪倉庫を拠点に、保管・発送代行・流通加工・内職作業まで対応します。
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {serviceTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/5 bg-white px-3 py-1.5 text-[11px] font-medium text-black/60 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-black/5 bg-white p-4 text-left shadow-sm">
              <p className="text-xs font-bold tracking-[0.16em] text-amber-500">
                ADDRESS
              </p>
              <p className="mt-3 text-sm leading-7 text-black/65">
                〒570-0003
                <br />
                大阪府守口市大日町1-8-18
              </p>
              <p className="mt-2 text-xs leading-6 text-black/45">
                守口倉庫：約100坪
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-center text-xs font-bold tracking-[0.2em] text-amber-500 lg:text-left">
              MENU
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/logistics" className={footerLinkClass}>
                  <span>物流サービス</span>
                  <span>→</span>
                </Link>
              </li>

              <li>
                <Link href="/warehouse" className={footerLinkClass}>
                  <span>倉庫紹介</span>
                  <span>→</span>
                </Link>
              </li>

              <li>
                <Link href="/company" className={footerLinkClass}>
                  <span>会社概要・お問い合わせ</span>
                  <span>→</span>
                </Link>
              </li>

              <li>
                <Link href="/other-business" className={footerLinkClass}>
                  <span>その他事業</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <p className="text-xs font-bold tracking-[0.16em] text-amber-500">
                AREA
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-[#f8f8f6] px-3 py-1.5 text-[11px] font-medium text-black/55"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-center text-xs font-bold tracking-[0.2em] text-amber-500 lg:text-left">
              CONTACT
            </h3>

            <p className="mx-auto max-w-[22rem] text-sm leading-7 text-black/60 lg:mx-0">
              発送代行・倉庫保管・検品・梱包・シール貼り・セット組み・内職作業・流通加工まで。
              小ロット案件もお気軽にご相談ください。
            </p>

            <div className="mt-5 space-y-3">
              <Link href="/company#contact" className={footerLinkClass}>
                <span>フォームで相談する</span>
                <span>→</span>
              </Link>

              <a href="tel:0661159935" className={footerLinkClass}>
                <span>電話で相談する</span>
                <span>→</span>
              </a>

              <a
                href="mailto:k_fuchigami@gamigami.email"
                className={footerLinkClass}
              >
                <span>メールで相談する</span>
                <span>→</span>
              </a>
            </div>

            <Link
              href="/company#contact"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-amber-600 active:scale-[0.98]"
            >
              物流を無料相談する
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-black/5 pt-6 text-center">
          <p className="text-[11px] leading-6 text-black/40">
            © GAMI INC.
          </p>
        </div>
      </div>
    </footer>
  )
}
