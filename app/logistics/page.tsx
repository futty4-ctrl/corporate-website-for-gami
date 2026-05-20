import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "大阪の物流会社｜倉庫保管・発送代行・流通加工なら株式会社GAMI",
  description:
    "株式会社GAMIは大阪を拠点に、倉庫保管・発送代行・流通加工・利用運送・スポット出荷まで一括対応。定期案件から急ぎ案件まで、現場に合わせた物流体制をご提案します。",
  keywords: [
    "物流会社 大阪",
    "発送代行 大阪",
    "倉庫保管 大阪",
    "流通加工 大阪",
    "利用運送 大阪",
    "スポット出荷",
    "EC発送代行",
  ],
}

const serviceCards = [
  {
    title: "倉庫保管",
    body: "小ロットから大量保管まで、商品特性や物量に合わせて保管体制を調整します。",
  },
  {
    title: "発送代行",
    body: "EC発送、返礼品発送、美容商材、食品など、出荷業務をまとめて対応します。",
  },
  {
    title: "流通加工",
    body: "検品、梱包、シール貼り、封入、セット組みなど、手作業が必要な工程も相談可能です。",
  },
  {
    title: "利用運送",
    body: "軽貨物から大型車まで、案件に合わせた車両手配と配送ネットワークで対応します。",
  },
]

const consultationCases = [
  "急なスポット出荷を依頼したい",
  "倉庫保管と発送をまとめて任せたい",
  "EC商品の発送代行を外注したい",
  "流通加工や内職作業まで相談したい",
  "軽貨物〜大型車まで手配したい",
  "化粧品関連商品の保管・作業を相談したい",
]

const achievements = [
  "美容商材",
  "アパレル商品",
  "帽子・ファッション雑貨",
  "スパイス商品",
  "ふるさと納税返礼品",
  "化粧品関連商品",
]

const warehousePoints = [
  {
    title: "守口倉庫",
    lead: "小規模案件・機密性の高い保管に対応",
    body:
      "細かな管理が必要な商品や、柔軟な運用が求められる案件に適した倉庫です。入出庫、検品、保管、流通加工まで、現場に合わせて対応します。",
    images: [
      { src: "/images/moriguchi-warehouse.jpg", alt: "守口倉庫 外観" },
      { src: "/images/moriguchi-inside.jpg", alt: "守口倉庫 内観" },
    ],
  },
  {
    title: "大阪南倉庫",
    lead: "大量保管・パレット運用に対応",
    body:
      "物量のある案件や、長期保管・まとめ出荷に適した倉庫です。案件規模に応じて、守口倉庫と使い分けながら最適な物流体制をご提案します。",
    images: [
      { src: "/images/osaka-minami-warehouse.jpg", alt: "大阪南倉庫 外観" },
      { src: "/images/osaka-minami-inside.jpg", alt: "大阪南倉庫 内観" },
    ],
  },
]

const strengths = [
  {
    title: "レスポンス重視",
    body: "急ぎ案件でも、確認・判断・手配までをスピーディーに進めます。",
  },
  {
    title: "ワンストップ対応",
    body: "保管、検品、加工、梱包、配送までまとめて相談できます。",
  },
  {
    title: "スポット案件対応",
    body: "繁忙期、短納期、急な出荷など、波動のある案件にも柔軟に対応します。",
  },
  {
    title: "化粧品関連にも対応",
    body: "化粧品製造業許可を活かし、化粧品関連の保管・作業もご相談いただけます。",
  },
]

const processSteps = [
  {
    step: "01",
    title: "お問い合わせ",
    body: "物流内容、物量、納期、ご希望の運用をお聞かせください。",
  },
  {
    step: "02",
    title: "現状確認",
    body: "保管、配送、加工、出荷頻度などを整理し、必要な工程を確認します。",
  },
  {
    step: "03",
    title: "ご提案・お見積り",
    body: "倉庫保管、発送代行、流通加工、利用運送まで必要な内容をご提案します。",
  },
  {
    step: "04",
    title: "運用開始",
    body: "案件に応じて体制を整え、保管・加工・出荷をスムーズに開始します。",
  },
]

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#111111] text-white">
          <div className="absolute inset-0 opacity-45">
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-amber-500 blur-3xl" />
            <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-orange-400 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-12 lg:py-28">
            <div className="grid gap-10 text-center lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:text-left">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-amber-300 sm:text-sm sm:tracking-[0.22em]">
                  LOGISTICS / WAREHOUSE / SHIPPING
                </p>

                <h1 className="mx-auto mt-5 max-w-[7.4em] text-[clamp(2rem,9vw,5.2rem)] font-bold leading-[1.1] tracking-[-0.045em] sm:max-w-none sm:leading-[1.06] lg:mx-0">
                  物流運送業務を
                  <br />
                  一括で任せる。
                </h1>

                <p className="mx-auto mt-7 max-w-[34rem] text-[15px] leading-8 text-white/82 sm:max-w-3xl sm:text-lg sm:leading-9 lg:mx-0">
                  倉庫保管・発送代行・流通加工・利用運送まで。
                  <br className="hidden sm:block" />
                  企業の物流業務を一括対応する、大阪の物流パートナーです。
                </p>

                <div className="mx-auto mt-9 flex max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                  <Link
                    href="/company#contact"
                    className="rounded-full bg-amber-500 px-7 py-3.5 text-center text-sm font-bold tracking-[0.04em] text-white shadow-lg transition hover:bg-amber-400"
                  >
                    物流を相談する
                  </Link>

                  <a
                    href="tel:0661159935"
                    className="rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-bold tracking-[0.04em] text-white transition hover:bg-white/10"
                  >
                    電話で相談する
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 text-left backdrop-blur sm:p-6">
                <p className="text-sm font-bold tracking-[0.12em] text-amber-300 sm:tracking-[0.18em]">
                  こんなご相談に対応
                </p>

                <div className="mt-5 grid gap-3">
                  {consultationCases.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.08] px-4 py-4 text-sm leading-7 text-white/90 backdrop-blur sm:rounded-[1.7rem] sm:px-5 sm:py-5"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-gradient py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <p className="text-sm font-semibold tracking-[0.18em] text-gold sm:tracking-[0.22em]">
              SERVICE
            </p>

            <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.34] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              保管から出荷まで、
              <br />
              物流を一括で支える。
            </h2>

            <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-[1.95] text-muted-foreground sm:max-w-3xl sm:text-base lg:mx-0">
              複数業者に分けず、倉庫保管・検品・加工・梱包・配送までまとめて相談できます。
              現場の負担を減らし、事業のスピードを止めない物流体制をご提案します。
            </p>

            <div className="mt-10 grid gap-6 text-left md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((service) => (
                <div key={service.title} className="tech-card rounded-[2rem] p-6 sm:p-7">
                  <h3 className="text-xl font-bold leading-snug text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-muted-foreground">
                    {service.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-amber-300 sm:tracking-[0.22em]">
                  RESPONSE / SPOT
                </p>

                <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.34] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                  急ぎの案件にも、
                  <br />
                  まず動く。
                </h2>

                <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-[1.95] text-white/70 sm:text-base lg:mx-0">
                  GAMIが大切にしているのは、レスポンスの早さです。
                  急な出荷、繁忙期、短納期、スポット案件など、まず状況を確認し、できる形を探します。
                </p>
              </div>

              <div className="grid gap-4 text-left sm:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
                  >
                    <p className="text-xl font-bold leading-snug text-amber-300">
                      {item.title}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <p className="text-sm font-semibold tracking-[0.18em] text-gold sm:tracking-[0.22em]">
              ACHIEVEMENTS
            </p>

            <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.34] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              取扱実績・対応分野
            </h2>

            <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-[1.95] text-muted-foreground sm:max-w-3xl sm:text-base lg:mx-0">
              美容商材、アパレル、食品、返礼品、EC発送まで。
              商材ごとの特性に合わせ、保管・加工・出荷を柔軟に対応します。
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {achievements.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-bold text-foreground shadow-sm sm:px-5 sm:py-3"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gradient py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <p className="text-sm font-semibold tracking-[0.18em] text-gold sm:tracking-[0.22em]">
              WAREHOUSE NETWORK
            </p>

            <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.34] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              2つの倉庫で、
              <br />
              案件に合わせて対応。
            </h2>

            <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-[1.95] text-muted-foreground sm:max-w-3xl sm:text-base lg:mx-0">
              守口倉庫と大阪南倉庫の2拠点を活用し、商品特性や物量に合わせた保管・出荷体制をご提案します。
            </p>

            <div className="mt-12 grid gap-8 text-left lg:grid-cols-2">
              {warehousePoints.map((warehouse) => (
                <div
                  key={warehouse.title}
                  className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-glass"
                >
                  <div className="grid gap-2 p-2">
                    {warehouse.images.map((image) => (
                      <div
                        key={image.src}
                        className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-muted"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-bold tracking-[0.18em] text-gold sm:tracking-[0.22em]">
                      WAREHOUSE
                    </p>

                    <h3 className="mt-4 text-2xl font-bold leading-snug text-foreground">
                      {warehouse.title}
                    </h3>

                    <p className="mt-3 text-sm font-bold leading-7 text-primary">
                      {warehouse.lead}
                    </p>

                    <p className="mt-4 text-sm leading-8 text-muted-foreground">
                      {warehouse.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <p className="text-sm font-semibold tracking-[0.18em] text-gold sm:tracking-[0.22em]">
              FLOW
            </p>

            <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.34] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              ご相談から
              <br />
              運用開始まで。
            </h2>

            <div className="mt-10 grid gap-4 text-left md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-border bg-white/80 p-6 shadow-sm"
                >
                  <p className="text-sm font-bold text-gold">STEP {item.step}</p>

                  <h3 className="mt-2 text-lg font-bold leading-snug text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-8 text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 lg:px-12">
            <p className="text-sm font-semibold tracking-[0.18em] text-amber-300 sm:tracking-[0.22em]">
              CONTACT
            </p>

            <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.34] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              物流のご相談は、
              <br />
              まずはGAMIへ。
            </h2>

            <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-[1.95] text-white/70 sm:text-base">
              発送代行、倉庫保管、流通加工、スポット配送まで一括対応。
              まずは現在の課題や状況をお気軽にご相談ください。
            </p>

            <div className="mx-auto mt-10 flex max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="/company#contact"
                className="rounded-full bg-amber-500 px-8 py-3.5 text-sm font-bold tracking-[0.04em] text-white transition hover:bg-amber-400"
              >
                物流を相談する
              </Link>

              <a
                href="tel:0661159935"
                className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-bold tracking-[0.04em] text-white transition hover:bg-white/10"
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
