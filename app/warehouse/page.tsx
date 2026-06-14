import Link from "next/link"

export const metadata = {
  title: "倉庫紹介 | 株式会社GAMI",
  description:
    "大阪府守口市の約100坪倉庫。発送代行・倉庫保管・流通加工・内職作業に対応。",
}

const services = [
  "発送代行",
  "倉庫保管",
  "流通加工",
  "内職作業",
  "シール貼り",
  "検品",
  "セット組み",
  "梱包",
  "封入作業",
]

export default function WarehousePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-zinc-950 py-24 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="text-sm tracking-[0.2em] text-amber-300">
            WAREHOUSE
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
            守口物流センター
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-white/70">
            大阪府守口市大日町を拠点に、
            発送代行・倉庫保管・流通加工・内職作業を行っています。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border p-8">
              <h2 className="text-2xl font-bold">
                守口倉庫
              </h2>

              <div className="mt-6 space-y-3">
                <p>所在地：大阪府守口市大日町1-8-18</p>
                <p>倉庫面積：約100坪</p>
                <p>対応エリア：全国</p>
              </div>
            </div>

            <div className="rounded-3xl border p-8">
              <h2 className="text-2xl font-bold">
                提携倉庫
              </h2>

              <div className="mt-6 space-y-3">
                <p>福岡提携倉庫</p>
                <p>神戸提携倉庫</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-bold">
            対応業務
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border bg-white p-6 text-center font-semibold"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-bold">
            倉庫写真
          </h2>

          <p className="mt-6 text-muted-foreground">
            倉庫写真を追加予定
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-2xl bg-zinc-200" />
            <div className="aspect-video rounded-2xl bg-zinc-200" />
            <div className="aspect-video rounded-2xl bg-zinc-200" />
          </div>
        </div>
      </section>

      <section className="bg-amber-500 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-3xl font-bold">
            発送代行・流通加工のご相談はこちら
          </h2>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/company#contact"
              className="rounded-full bg-white px-8 py-4 font-bold text-black"
            >
              お問い合わせ
            </Link>

            <a
              href="tel:0661159935"
              className="rounded-full border border-white px-8 py-4 font-bold"
            >
              電話する
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
