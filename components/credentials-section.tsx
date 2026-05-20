"use client"

import { ShieldCheck } from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"

const credentials = [
  "第一種貨物利用運送事業（貨物自動車運送／近運自貨第1190号）",
  "化粧品製造業許可認証倉庫（許可番号 27CZ201072）",
  "古物商 大阪府公安委員会許可 第62229R076690号",
  "運行管理者（貨物）",
  "第一種衛生管理者",
  "遺品整理士 / 生前整理アドバイザー",
  "インボイス登録番号 T9120001277055",
]

export function CredentialsSection() {
  return (
    <section className="border-t border-black/5 bg-[#f8f8f6] px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollAnimate className="mb-14 text-center sm:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-amber-500 sm:text-xs sm:tracking-[0.22em]">
            LICENSE / QUALIFICATION
          </p>

          <h2 className="mx-auto mt-4 max-w-[12em] text-[1.95rem] font-bold leading-[1.28] tracking-[-0.03em] text-black sm:max-w-none sm:text-4xl md:text-5xl">
            資格・許認可
          </h2>

          <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-[1.95] text-black/60 sm:max-w-2xl sm:text-base">
            物流運送事業を中心に、
            各事業に必要な資格・許認可を整えています。
          </p>
        </ScrollAnimate>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {credentials.map((item, i) => (
            <ScrollAnimate key={item} delay={i * 0.08}>
              <div className="group flex h-full items-start gap-4 rounded-[1.7rem] border border-black/5 bg-white px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)] sm:px-6 sm:py-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50">
                  <ShieldCheck className="h-5 w-5 text-amber-500" />
                </div>

                <span className="text-sm leading-7 text-black/75 sm:text-[15px] sm:leading-8">
                  {item}
                </span>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  )
}
