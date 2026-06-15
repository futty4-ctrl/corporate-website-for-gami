import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title:
    "大阪の発送代行・物流倉庫・流通加工なら株式会社GAMI｜守口100坪倉庫",
  description:
    "大阪府守口市大日町の約100坪物流倉庫。発送代行・倉庫保管・検品・梱包・シール貼り・セット組み・内職作業・流通加工まで対応。福岡・神戸の提携倉庫あり。化粧品製造業許可・第一種貨物利用運送事業にも対応。",
}

const heroBadges = ["発送代行", "倉庫保管", "流通加工", "内職作業"]

const problems = [
  "発送作業が追いつかない",
  "保管場所が足りない",
  "シール貼り・ラベル貼りを外注したい",
  "セット組みや封入作業を任せたい",
  "検品・梱包までまとめて依頼したい",
  "小ロットやスポット案件に対応してほしい",
]

const services = [
  "倉庫保管",
  "発送代行",
  "EC物流",
  "検品",
  "梱包",
  "シール貼り",
  "セット組み",
  "アッセンブリ",
  "封入作業",
  "内職作業",
  "流通加工",
  "化粧品関連作業",
]

const strengths = [
  {
    title: "大阪・守口の約100坪倉庫",
    body: "大阪府守口市大日町1-8-18の倉庫を拠点に、保管・出荷・加工作業まで柔軟に対応します。",
  },
  {
    title: "細かい手作業に強い",
    body: "シール貼り、セット組み、封入、検品、梱包など、手間のかかる作業を外注できます。",
  },
  {
    title: "小ロット・スポット歓迎",
    body: "まずは小さく始めたい案件や、繁忙期だけのスポット依頼もご相談ください。",
  },
  {
    title: "福岡・神戸の提携倉庫",
    body: "大阪を中心に、案件内容に応じて福岡・神戸の提携倉庫も活用できます。",
  },
  {
    title: "化粧品製造業許可あり",
    body: "化粧品関連商材の物流・流通加工も相談可能です。美容商材の対応実績もあります。",
  },
  {
    title: "第一種貨物利用運送対応",
    body: "保管や加工作業だけでなく、配送まわりのご相談もまとめて対応できます。",
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
  "第一種貨物利用運送事業登録",
  "古物商許可",
  "インボイス登録",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative min-h-[620px] overflow-hidden bg-zinc-900 text-white sm:min-h-[720px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          >
            <source src="/video/hero-logistics.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/48 to-black/82" />

          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl items-center justify-center px-5 py-16 text-center sm:min-h-[720px] sm:px-6 sm:py-20 lg:justify-start lg:text-left">
            <div className="mx-auto max-w-4xl lg:mx-0">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-amber-300 sm:text-sm sm:tracking-[0.28em]">
                LOGISTICS WAREHOUSE / OSAKA
              </p>

              <h1 className="mt-5 text-[2.15rem] font-bold leading-[1.18] tracking-[-0.04em] text-white sm:text-5xl sm:leading-tight lg:text-[5rem] lg:leading-[1.05]">
                <span className="block">大阪の物流倉庫・</span>
                <span className="block">発送代行なら</span>
                <span className="block">GAMI</span>
              </h1>

              <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-white/86 sm:max-w-[42rem] sm:text-lg sm:leading-9 lg:mx-0">
                守口市大日町の約100坪倉庫を拠点に、保管・発送代行・検品・梱包・シール貼り・セット組み・内職作業・流通加工まで一括対応。
              </p>

              <div className="mx-auto mt-7 grid max-w-[21rem] grid-cols-2 gap-2.5 sm:max-w-xl sm:grid-cols-4 sm:gap-3 lg:mx-0">
                {heroBadges.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/15 bg-white/12 px-3 py-2.5 text-center text-xs font-bold tracking-wide text-white/90 backdrop-blur sm:px-4 sm:py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-8 flex max-w-[21rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                <Link
                  href="/company#contact"
                  className="rounded-full bg-amber-500 px-7 py-4 text-center text-sm font-bold tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8"
                >
                  物流を無料相談する
                </Link>

                <Link
                  href="/warehouse"
                  className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-center text-sm font-bold tracking-wide text-white backdrop-blur transition hover:bg-white/20 sm:px-8"
                >
                  倉庫紹介を見る
                </Link>

                <a
                  href="tel:0661159935"
                  className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-center text-sm font-bold tracking-wide text-white backdrop-blur transition hover:bg-white/20 sm:px-8"
                >
                  電話で相談する
                </a>
              </div>

              <p className="mx-auto mt-5 max-w-[21rem] text-xs leading-6 text-white/65 sm:max-w-[34rem] lg:mx-0">
                小ロット・スポット案件・細かな手作業も、まずは内容をお聞かせください。
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

              <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                <span className="block">こんな物流作業で</span>
                <span className="block">困っていませんか？</span>
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
          </div>
        </section>

        <section className="bg-zinc-950 py-16 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="text-center lg:text-left">
                <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 sm:text-sm sm:tracking-[0.24em]">
                  SERVICE
                </p>

                <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                  <span className="block">保管から加工、</span>
                  <span className="block">発送まで一括対応。</span>
                </h2>

                <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-white/70 sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                  GAMIは物流運送事業を主軸に、倉庫保管・発送代行・検品・梱包・流通加工まで対応。特に、シール貼り・セット組み・封入作業などの細かな作業を増やしていきたいと考えています。
                </p>
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

                  {item.title.includes("守口") && (
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
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="text-center lg:text-left">
                <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.24em]">
                  WAREHOUSE
                </p>

                <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                  <span className="block">大阪府守口市の</span>
                  <span className="block">約100坪倉庫。</span>
                </h2>

                <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                  住所：大阪府守口市大日町1-8-18。大阪を中心に、保管・出荷・検品・梱包・流通加工まで対応します。福岡と神戸にも提携倉庫があるため、案件に応じた物流体制をご提案できます。
                </p>

                <Link
                  href="/warehouse"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-amber-600"
                >
                  倉庫紹介を見る
                </Link>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-glass sm:rounded-[2rem] sm:p-7">
                  <p className="text-xs font-bold tracking-[0.18em] text-gold sm:tracking-[0.2em]">
                    MORIGUCHI WAREHOUSE
                  </p>
                  <h3 className="mt-4 text-2xl font-bold">守口倉庫</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:leading-8">
                    約100坪の倉庫で、細かな管理が必要な商品や流通加工案件に対応。小ロットから継続案件までご相談ください。
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-7">
                    <p className="text-xs font-bold tracking-[0.18em] text-gold">
                      PARTNER
                    </p>
                    <h3 className="mt-4 text-xl font-bold">福岡提携倉庫</h3>
                  </div>

                  <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-7">
                    <p className="text-xs font-bold tracking-[0.18em] text-gold">
                      PARTNER
                    </p>
                    <h3 className="mt-4 text-xl font-bold">神戸提携倉庫</h3>
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

                <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                  <span className="block">許認可を活かした</span>
                  <span className="block">安心の物流対応。</span>
                </h2>

                <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-white/70 sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                  化粧品関連商材や配送まわりも含めて相談できる体制があります。保管・加工・発送まで、まずは案件内容をお聞かせください。
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
              発送代行、倉庫保管、検品、梱包、シール貼り、セット組み、内職作業、流通加工まで。小ロット・スポット案件もお気軽にご相談ください。
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
