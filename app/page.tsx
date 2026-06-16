import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title:
    "大阪の発送代行・物流倉庫・流通加工なら株式会社GAMI｜守口100坪倉庫",
  description:
    "大阪府守口市大日町の約100坪物流倉庫。365日稼働・全国対応。発送代行・倉庫保管・検品・梱包・シール貼り・セット組み・内職作業・流通加工まで対応。",
}

const problems = [
  "発送作業に時間が取られている",
  "倉庫スペースが不足している",
  "検品・シール貼りを外注したい",
  "セット組みや封入作業を任せたい",
  "急な出荷や繁忙期に対応できない",
  "小ロット案件を相談できる倉庫がない",
]

const services = [
  "365日稼働",
  "全国対応",
  "倉庫保管",
  "発送代行",
  "EC物流",
  "検品",
  "梱包",
  "シール貼り",
  "セット組み",
  "封入作業",
  "内職作業",
  "流通加工",
  "化粧品関連作業",
  "スポット出荷",
]

const strengths = [
  {
    title: "全国対応",
    body: "大阪を拠点に全国対応。発送代行・倉庫保管・流通加工・内職作業まで対応します。",
  },
  {
    title: "365日稼働倉庫",
    body: "土日祝や繁忙期も柔軟対応。急な出荷やスポット案件もご相談ください。",
  },
  {
    title: "約100坪の物流倉庫",
    body: "大阪府守口市大日町の倉庫を拠点に、保管から出荷まで一括対応します。",
  },
  {
    title: "細かな手作業に強い",
    body: "シール貼り・セット組み・封入・検品・梱包などの作業に対応します。",
  },
  {
    title: "小ロット・スポット歓迎",
    body: "まずは小さく始めたい案件や短期案件もお気軽にご相談ください。",
  },
  {
    title: "化粧品製造業許可・利用運送対応",
    body: "化粧品関連商材や配送手配までまとめて対応可能です。",
  },
]

const cases = [
  "EC商品の発送代行",
  "Amazon・楽天商品の出荷対応",
  "シール貼り・セット組み",
  "化粧品関連物流",
  "スポット出荷対応",
  "小ロット案件対応",
]

const licenses = [
  "化粧品製造業許可",
  "第一種貨物利用運送事業",
  "古物商許可",
  "インボイス登録事業者",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative min-h-[350px] overflow-hidden bg-zinc-900 text-white sm:min-h-[720px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          >
            <source src="/video/hero-logistics.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />

          <div className="relative z-10 mx-auto flex min-h-[350px] max-w-6xl items-center justify-center px-5 py-8 text-center sm:min-h-[720px] sm:px-6 sm:py-20 lg:justify-start lg:text-left">
            <div className="mx-auto max-w-4xl lg:mx-0">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-amber-300 sm:text-sm">
                LOGISTICS WAREHOUSE / OSAKA
              </p>

              <h1 className="mx-auto mt-4 max-w-[10em] text-[2rem] font-bold leading-[1.15] tracking-[-0.04em] text-white sm:max-w-none sm:text-5xl lg:mx-0 lg:text-[5rem] lg:leading-[1.05]">
                <span className="block">365日稼働倉庫</span>
                <span className="mt-2 block">発送代行ならGAMI</span>
              </h1>

              <p className="mx-auto mt-5 max-w-[22rem] text-[14px] leading-7 text-white/85 sm:max-w-[42rem] sm:text-lg sm:leading-9 lg:mx-0">
                全国対応・365日稼働。
                <br />
                守口市大日町の約100坪物流倉庫を拠点に、発送代行・倉庫保管・流通加工・内職作業まで一括対応。
              </p>

              <div className="mx-auto mt-5 flex max-w-[20rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                <Link
                  href="/company#contact"
                  className="rounded-full bg-amber-500 px-7 py-4 text-center text-sm font-bold text-white shadow-lg transition hover:bg-amber-600"
                >
                  物流を無料相談する
                </Link>

                <Link
                  href="/warehouse"
                  className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-center text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  倉庫紹介を見る
                </Link>
              </div>

              <p className="mx-auto mt-3 max-w-[22rem] text-xs leading-6 text-white/60 sm:max-w-[34rem] lg:mx-0">
                小ロット案件・スポット出荷もお気軽にご相談ください。
              </p>
            </div>
          </div>
        </section>

        <section className="section-gradient py-16 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.24em]">
                PROBLEM
              </p>

              <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.25] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                <span className="block">物流業務を外注して</span>
                <span className="block">本業に集中しませんか？</span>
              </h2>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-border bg-white/80 p-5 text-left shadow-sm sm:p-6"
                >
                  <p className="text-sm font-bold leading-7">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                全国対応・365日稼働。
                <br />
                発送代行から倉庫保管・流通加工・内職作業までワンストップ対応。
              </p>

              <Link
                href="/company#contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-amber-600"
              >
                まずは無料相談する
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 py-16 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="text-center lg:text-left">
                <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 sm:text-sm sm:tracking-[0.24em]">
                  SERVICE
                </p>

                <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                  <span className="block">365日稼働で、</span>
                  <span className="block">物流業務を一括対応。</span>
                </h2>

                <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-white/70 sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                  発送代行・倉庫保管・流通加工・内職作業まで。
                  全国対応で、小ロット案件や急なスポット出荷にも柔軟に対応します。
                </p>

                <Link
                  href="/company#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-amber-600"
                >
                  物流を無料相談する
                </Link>
              </div>

              <div className="grid gap-2.5 text-left sm:grid-cols-2 sm:gap-3">
                {services.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-bold leading-6 text-white/85 sm:px-5 sm:py-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.24em]">
                STRENGTH
              </p>

              <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                <span className="block">GAMIが物流で</span>
                <span className="block">選ばれる理由</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-border bg-card p-6 shadow-glass sm:rounded-[2rem] sm:p-7"
                >
                  <h3 className="text-lg font-bold leading-snug sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:leading-8">
                    {item.body}
                  </p>

                  {item.title.includes("倉庫") && (
                    <Link
                      href="/warehouse"
                      className="mt-5 inline-flex rounded-full bg-amber-500 px-5 py-3 text-xs font-bold text-white transition hover:bg-amber-600"
                    >
                      倉庫紹介を見る
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gradient py-16 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="text-center lg:text-left">
                <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.24em]">
                  WAREHOUSE
                </p>

                <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                  <span className="block">365日稼働の</span>
                  <span className="block">物流倉庫。</span>
                </h2>

                <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                  大阪府守口市大日町の約100坪物流倉庫。
                  <br />
                  全国対応・365日稼働。
                  <br />
                  発送代行・倉庫保管・流通加工・検品・梱包・シール貼り・セット組み・内職作業まで一括対応しています。
                  <br />
                  小ロット案件やスポット出荷もお気軽にご相談ください。
                </p>

                <div className="mx-auto mt-8 flex max-w-[21rem] flex-col gap-3 sm:max-w-none sm:flex-row lg:mx-0">
                  <Link
                    href="/warehouse"
                    className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-amber-600"
                  >
                    倉庫紹介を見る
                  </Link>

                  <Link
                    href="/company#contact"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-white px-8 py-4 text-sm font-bold text-foreground transition hover:bg-muted"
                  >
                    倉庫作業を相談する
                  </Link>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-glass sm:rounded-[2rem]">
                  <img
                    src="/images/warehouse-moriguchi.jpg"
                    alt="GAMI守口倉庫外観"
                    className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                  />

                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-bold tracking-[0.18em] text-gold">
                      MORIGUCHI WAREHOUSE
                    </p>

                    <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                      守口倉庫
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      約100坪の物流倉庫。保管・発送代行・流通加工・検品・梱包・内職作業までワンストップ対応。
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-sm sm:rounded-[2rem]">
                  <img
                    src="/images/warehouse-moriguchi-inside.jpg"
                    alt="GAMI守口倉庫内観"
                    className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
  {[
    "全国対応",
    "365日稼働",
    "小ロット歓迎",
    "スポット出荷対応",
  ].map((item) => (
    <div
      key={item}
      className="rounded-[1.75rem] border border-border bg-white p-5 text-center shadow-sm"
    >
      <p className="text-base font-bold">{item}</p>
    </div>
  ))}
</div>

                  <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:rounded-[2rem]">
                    <p className="text-xs font-bold tracking-[0.18em] text-gold">
                      PARTNER
                    </p>

                    <h3 className="mt-4 text-xl font-bold">神戸提携倉庫</h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      関西エリアの物流をサポート。保管・発送代行・流通加工に対応しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:text-left">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.24em]">
              CASE
            </p>

            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              物流対応実例
            </h2>

            <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
              EC商品、化粧品関連商材、スポット出荷、小ロット案件まで対応。
              発送代行や流通加工を外注したい企業様からのご相談をお待ちしています。
            </p>

            <div className="mt-9 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-border bg-card p-5 shadow-glass sm:p-6"
                >
                  <p className="text-sm font-bold leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 py-16 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="text-center lg:text-left">
                <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 sm:text-sm sm:tracking-[0.24em]">
                  LICENSE
                </p>

                <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                  <span className="block">許認可を活かした</span>
                  <span className="block">物流ワンストップ対応。</span>
                </h2>

                <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-white/70 sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                  化粧品製造業許可・第一種貨物利用運送事業・古物商許可を取得。
                  保管・流通加工・発送代行までワンストップで対応しています。
                </p>
              </div>

              <div className="grid gap-3 text-left sm:grid-cols-2">
                {licenses.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-6"
                  >
                    <p className="text-sm font-bold leading-7 text-white/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.24em]">
              CONTACT
            </p>

            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              <span className="block">物流のご相談は、</span>
              <span className="block">まずはGAMIへ。</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-muted-foreground sm:max-w-2xl sm:text-base sm:leading-8">
              全国対応・365日稼働。
              <br />
              発送代行・倉庫保管・流通加工・検品・梱包・シール貼り・セット組み・内職作業まで一括対応。
              <br />
              小ロット案件やスポット案件もお気軽にご相談ください。
            </p>

            <div className="mx-auto mt-8 flex max-w-[21rem] flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
              <Link
                href="/company#contact"
                className="rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-600"
              >
                物流を無料相談する
              </Link>

              <Link
                href="/warehouse"
                className="rounded-full border border-border px-8 py-4 text-sm font-bold text-foreground transition hover:bg-muted"
              >
                倉庫紹介を見る
              </Link>

              <a
                href="tel:0661159935"
                className="rounded-full border border-border px-8 py-4 text-sm font-bold text-foreground transition hover:bg-muted"
              >
                電話で相談する
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
