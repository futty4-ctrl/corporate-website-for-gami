import Link from "next/link"

export const metadata = {
  title: "守口倉庫紹介｜大阪の発送代行・流通加工なら株式会社GAMI",
  description:
    "大阪府守口市大日町1-8-18の約100坪倉庫。発送代行・倉庫保管・検品・梱包・シール貼り・セット組み・内職作業・流通加工に対応。福岡・神戸の提携倉庫も活用可能。",
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
  "EC物流",
  "スポット出荷",
  "化粧品関連作業",
]

const strengths = [
  {
    title: "約100坪の守口倉庫",
    body: "大阪府守口市大日町1-8-18を拠点に、保管・発送・加工作業まで対応します。",
  },
  {
    title: "細かい手作業に対応",
    body: "シール貼り、セット組み、封入、検品、梱包など、内職系の作業を外注できます。",
  },
  {
    title: "小ロット・スポット歓迎",
    body: "まずは少量から、繁忙期だけ、急な出荷だけなど柔軟にご相談いただけます。",
  },
  {
    title: "福岡・神戸にも提携倉庫",
    body: "大阪を中心に、案件内容に応じて福岡・神戸の提携倉庫も活用できます。",
  },
]

export default function WarehousePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-zinc-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 sm:text-sm sm:tracking-[0.24em]">
            WAREHOUSE / OSAKA MORIGUCHI
          </p>

          <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.25] tracking-[-0.04em] sm:text-6xl sm:leading-tight">
            <span className="block">大阪・守口の</span>
            <span className="block">約100坪倉庫</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-white/70 sm:max-w-3xl sm:text-base sm:leading-8">
            大阪府守口市大日町を拠点に、発送代行・倉庫保管・検品・梱包・シール貼り・セット組み・内職作業・流通加工まで対応しています。
          </p>

          <div className="mx-auto mt-8 flex max-w-[21rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Link
              href="/company#contact"
              className="rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-amber-600"
            >
              倉庫作業を相談する
            </Link>

            <a
              href="tel:0661159935"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              電話で相談する
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-bold tracking-[0.18em] text-amber-500">
                MORIGUCHI WAREHOUSE
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                守口倉庫
              </h2>

              <div className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  <span className="font-bold text-foreground">所在地：</span>
                  大阪府守口市大日町1-8-18
                </p>
                <p>
                  <span className="font-bold text-foreground">倉庫面積：</span>
                  約100坪
                </p>
                <p>
                  <span className="font-bold text-foreground">対応内容：</span>
                  保管・発送代行・検品・梱包・流通加工・内職作業
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-bold tracking-[0.18em] text-amber-500">
                PARTNER WAREHOUSE
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                提携倉庫
              </h2>

              <div className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                <p>福岡提携倉庫</p>
                <p>神戸提携倉庫</p>
                <p>
                  案件内容・物量・配送エリアに応じて、最適な物流体制をご提案します。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6 text-center sm:rounded-[2rem] sm:p-8">
            <p className="text-sm font-bold leading-7 text-amber-800">
              小ロット・スポット案件・細かい手作業も歓迎です。
              まずは「何を、どれくらい、いつまでに」だけでもご相談ください。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-amber-500 sm:text-sm">
              SERVICE
            </p>

            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] sm:text-5xl sm:leading-tight">
              対応できる倉庫作業
            </h2>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-border bg-white p-5 text-center text-sm font-bold shadow-sm sm:p-6"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-amber-500 sm:text-sm">
              STRENGTH
            </p>

            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] sm:text-5xl sm:leading-tight">
              GAMI倉庫の強み
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8"
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 sm:text-sm">
            PHOTO
          </p>

          <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] sm:text-5xl sm:leading-tight">
            倉庫写真
          </h2>

          <p className="mx-auto mt-5 max-w-[22rem] text-sm leading-7 text-white/65 sm:max-w-2xl">
  大阪府守口市大日町の約100坪倉庫。
  保管・発送代行・流通加工・内職作業に対応しています。
</p>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
  <img
    src="/images/warehouse-moriguchi.jpg"
    alt="GAMI守口倉庫外観"
    className="h-full w-full rounded-3xl object-cover"
  />

  <img
    src="/images/warehouse-moriguchi-inside.jpg"
    alt="GAMI守口倉庫内観"
    className="h-full w-full rounded-3xl object-cover"
  />
</div>
        </div>
      </section>

      <section className="bg-amber-500 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-[1.75rem] font-bold leading-[1.35] sm:text-4xl">
            <span className="block">発送代行・流通加工の</span>
            <span className="block">ご相談はこちら</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[22rem] text-sm leading-7 text-white/90 sm:max-w-2xl">
            保管場所が足りない、作業が追いつかない、内職作業を外注したい。
            そんな時はGAMIへご相談ください。
          </p>

          <div className="mx-auto mt-8 flex max-w-[21rem] flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
            <Link
              href="/company#contact"
              className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black shadow-lg"
            >
              お問い合わせ
            </Link>

            <a
              href="tel:0661159935"
              className="rounded-full border border-white px-8 py-4 text-sm font-bold text-white"
            >
              電話する
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
