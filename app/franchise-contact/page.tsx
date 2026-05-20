import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  FileText,
  CircleCheck,
  TrendingUp,
  Wallet,
  Crown,
  BadgeCheck,
  Sparkles,
} from "lucide-react"
import FranchiseForm from "./franchise-form"

export const metadata: Metadata = {
  title: "ヘッドスパ専門店ゆう フランチャイズ無料相談 | 株式会社GAMI",
  description:
    "ヘッドスパ専門店ゆうのフランチャイズ無料相談ページ。高単価ヘッドスパモデル、開業相談、資料請求、導入相談を受け付けています。",
  alternates: {
    canonical: "/franchise-contact",
  },
}

const achievements = [
  {
    icon: TrendingUp,
    title: "本店 初年度売上",
    value: "760万円",
    text: "実店舗運営から生まれた、再現性を目指すモデル。",
  },
  {
    icon: Crown,
    title: "2年目以降",
    value: "年商1000万円超",
    text: "高単価 × 少人数制で安売りに頼らない運営設計。",
  },
  {
    icon: Wallet,
    title: "ワンオーナー最高月商",
    value: "200万円以上",
    text: "1日3名限定でも売上を作れる可能性。",
  },
]

const points = [
  "未経験からでも始められるか",
  "ウェットとドライのどちらが向いているか",
  "自宅・マンション・空きスペースで開業できるか",
  "必要な初期費用はどれくらいか",
  "利益が残るモデルになるか",
]

const reasons = [
  "無理な営業は行いません",
  "相談だけ・資料請求だけでもOK",
  "現状に合う導入形態を個別に案内",
]

export default function FranchiseContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[#fbfaf7]">
        <section className="relative overflow-hidden bg-[#111111] px-5 py-20 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-amber-500 blur-3xl" />
            <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-orange-400 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl">
            <Link
              href="/headspa-franchise"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              フランチャイズページに戻る
            </Link>

            <div className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.14em] text-white/90 backdrop-blur sm:text-xs sm:tracking-[0.18em]">
              FRANCHISE CONTACT
            </div>

            <h1 className="mt-6 text-[clamp(2rem,8.5vw,4.8rem)] font-bold leading-[1.12] tracking-[-0.045em] text-white sm:leading-[1.08]">
              ヘッドスパ専門店ゆう
              <br />
              フランチャイズ無料相談
            </h1>

            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-white/85 sm:text-base">
              高単価ヘッドスパモデルの導入相談を受付中。
              技術・空間・経営・集客導線まで含め、
              事業として成り立つ形を個別にご案内します。
            </p>

            <div className="mt-8 grid max-w-[24rem] grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-3">
              {["先着5社限定", "ウェット / ドライ両対応", "無理な営業なし"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center text-xs leading-5 text-white/90 backdrop-blur"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 lg:grid-cols-3">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[30px] bg-[#111111] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <item.icon className="h-5 w-5 text-amber-300" />
                  </div>

                  <p className="mt-5 text-sm leading-6 text-white/70">
                    {item.title}
                  </p>

                  <p className="mt-2 text-2xl font-bold leading-tight tracking-[-0.02em]">
                    {item.value}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-amber-500" />

                  <h2 className="text-xl font-bold leading-snug tracking-[-0.02em] text-[#111111]">
                    この無料相談でわかること
                  </h2>
                </div>

                <div className="mt-5 space-y-4">
                  {points.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <p className="text-sm leading-7 text-black/60">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-amber-500" />

                  <h2 className="text-xl font-bold leading-snug tracking-[-0.02em] text-[#111111]">
                    安心してご相談ください
                  </h2>
                </div>

                <div className="mt-5 space-y-4">
                  {reasons.map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />
                      <p className="text-sm leading-7 text-black/60">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8">
                <h2 className="text-xl font-bold leading-snug tracking-[-0.02em] text-[#111111]">
                  他の相談方法
                </h2>

                <div className="mt-6 space-y-4">
                  <a
                    href="https://lin.ee/3QGIdCY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-black/5 px-4 py-4 transition hover:bg-black/[0.02]"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 shrink-0 text-[#111111]" />

                      <div>
                        <p className="text-sm font-bold text-[#111111]">
                          LINEで相談
                        </p>

                        <p className="text-xs leading-5 text-black/50">
                          すぐ相談したい方向け
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:0661159935"
                    className="flex items-center justify-between rounded-2xl border border-black/5 px-4 py-4 transition hover:bg-black/[0.02]"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-[#111111]" />

                      <div>
                        <p className="text-sm font-bold text-[#111111]">
                          電話で相談
                        </p>

                        <p className="text-xs leading-5 text-black/50">
                          直接話して確認したい方向け
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8">
              <div className="inline-flex rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold leading-5 tracking-[0.02em] text-[#111111]">
                ＼ 先着5社限定 ／ 無料個別相談受付中
              </div>

              <div className="mt-5 flex items-center gap-3">
                <FileText className="h-5 w-5 shrink-0 text-[#111111]" />

                <h2 className="text-xl font-bold leading-snug tracking-[-0.02em] text-[#111111]">
                  無料相談フォーム
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-black/60">
                開業方法、必要資金、導入形態の向き不向きなどを、
                現状に合わせて個別にご案内します。
              </p>

              <div className="mt-6 rounded-2xl bg-[#fbfaf7] p-4">
                <p className="text-sm font-bold leading-6 text-[#111111]">
                  入力は30秒ほどで完了します
                </p>

                <p className="mt-2 text-xs leading-6 text-black/60">
                  まだ検討段階でも大丈夫です。まずは相談して、
                  あなたに合う形を整理しましょう。
                </p>
              </div>

              <FranchiseForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
