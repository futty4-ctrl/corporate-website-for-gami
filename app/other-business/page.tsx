import Link from "next/link"

export const metadata = {
  title: "その他事業 | 株式会社GAMI",
}

const businesses = [
  {
    title: "ヘッドスパ事業",
    description:
      "ヘッドスパ専門店ゆうを運営。完全個室・完全予約制のヘッドスパサービスを提供しています。",
    href: "https://www.yuheadspa.net/",
  },
  {
    title: "ヘッドスパFC事業",
    description:
      "ヘッドスパ専門店のフランチャイズ展開。開業支援・研修・店舗運営サポートを行っています。",
    href: "/headspa-franchise",
  },
  {
    title: "車事業",
    description:
      "車両販売・カスタム・カーライフサポートを展開しています。",
    href: "https://styling-garage.jp",
  },
  {
    title: "整理・買取事業",
    description:
      "遺品整理・生前整理・買取サービスを行っています。",
    href: "/seihin",
  },
]

export default function OtherBusinessPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="text-sm tracking-[0.2em] text-amber-300">
            OTHER BUSINESS
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
            その他事業
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            株式会社GAMIでは物流事業を主軸としながら、
            その他の事業も展開しています。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-6 md:grid-cols-2">
            {businesses.map((business) => (
              <div
                key={business.title}
                className="rounded-3xl border border-border bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold">
                  {business.title}
                </h2>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {business.description}
                </p>

                <Link
                  href={business.href}
                  className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 font-bold text-white"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
