import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "大阪の物流会社｜保管・流通加工・発送代行なら株式会社GAMI",
  description:
    "株式会社GAMIは大阪を拠点に、物流運送・倉庫保管・流通加工・発送代行・内職・梱包資材まで一括対応。定期案件からスポット案件まで、現場に合わせた物流体制をご提案します。",
  keywords: [
    "物流会社 大阪",
    "発送代行 大阪",
    "流通加工 大阪",
    "倉庫 保管 大阪",
    "利用運送 大阪",
    "内職 外注 大阪",
    "梱包 代行 大阪",
  ],
}

const coreServices = [
  {
    title: "物流業務を丸ごと任せられる体制",
    body: "定期・スポットを問わず、保管・入出庫・検品・流通加工・配送まで一括対応。複数業者に分ける手間をなくし、効率化とコスト削減を実現します。",
  },
  {
    title: "全国対応の利用運送ネットワーク",
    body: "軽貨物から大型車まで、全国各地へ最適な車両を手配可能。急な配送や波動のある案件にも柔軟に対応します。",
  },
  {
    title: "内職・流通加工まで一括対応",
    body: "セット組み・シール貼り・封入・梱包・検品など、人手が必要な作業も倉庫内で対応可能。作業から発送までをまとめて任せられます。",
  },
  {
    title: "化粧品対応可能な倉庫",
    body: "化粧品製造業許可を取得した倉庫で、化粧品に関わる急なスポット対応や保管・作業にも対応。品質管理が求められる商材もご相談いただけます。",
  },
]

const achievements = [
  "美容商材",
  "アパレル商品",
  "帽子・ファッション雑貨",
  "スパイス商品",
  "ふるさと納税返礼品",
  "化粧品関連商品",
]

const transportCases = [
  "急なスポット出荷を依頼したい",
  "定期発送を外注したい",
  "保管と配送をまとめて任せたい",
  "軽貨物〜大型車を手配したい",
  "流通加工や内職作業も任せたい",
  "化粧品関連の作業を相談したい",
]

const warehousePoints = [
  {
    title: "守口倉庫",
    lead: "小規模案件・機密性の高い保管に対応",
    body: "細かな管理が必要な商品や、柔軟な運用が求められる案件に適した倉庫です。入出庫、検品、保管、流通加工まで、現場に合わせて対応します。",
    images: [
      {
        src: "/images/moriguchi-warehouse.jpg",
        alt: "守口倉庫 外観",
      },
      {
        src: "/images/moriguchi-inside.jpg",
        alt: "守口倉庫 内観",
      },
    ],
  },
  {
    title: "大阪南倉庫",
    lead: "大量保管・パレット運用に対応",
    body: "物量のある案件や、長期保管・まとめ出荷に適した倉庫です。案件規模に応じて、守口倉庫と使い分けながら最適な物流体制をご提案します。",
    images: [
      {
        src: "/images/osaka-minami-warehouse.jpg",
        alt: "大阪南倉庫 外観",
      },
      {
        src: "/images/osaka-minami-inside.jpg",
        alt: "大阪南倉庫 内観",
      },
    ],
  },
]

const packingFeatures = [
  "大阪限定・法人向け対応",
  "ミリ単位で段ボールを作成可能",
  "コスト削減につながるご提案",
  "梱包資材全体の見直し相談にも対応",
]

const processSteps = [
  {
    step: "01",
    title: "お問い合わせ",
    body: "物流内容、物量、納期、ご希望の運用をお聞かせください。ざっくりしたご相談段階でも問題ありません。",
  },
  {
    step: "02",
    title: "ヒアリング・現状確認",
    body: "現在の課題、配送条件、保管の有無、流通加工の必要性などを整理し、最適な形を検討します。",
  },
  {
    step: "03",
    title: "ご提案・お見積り",
    body: "利用運送、倉庫保管、内職、段ボール提案まで含めて、必要な内容をまとめてご提案します。",
  },
  {
    step: "04",
    title: "手配・運用開始",
    body: "案件に応じて、軽貨物から大型車まで手配し、保管・加工・配送をスムーズにスタートします。",
  },
]

const strengths = [
  {
    title: "レスポンス重視",
    body: "急ぎ案件でも、確認・判断・手配までをスピーディーに進めます。まず動く姿勢を大切にしています。",
  },
  {
    title: "ワンストップ対応",
    body: "保管・流通加工・配送・資材提案まで一括対応。複数業者に分ける手間とコストを削減できます。",
  },
  {
    title: "全国対応の利用運送",
    body: "軽貨物から大型車まで、全国に最適な車両を手配可能。急な案件や波動にも柔軟に対応します。",
  },
  {
    title: "化粧品対応倉庫",
    body: "化粧品製造業許可を活かし、化粧品に関わる保管・作業・スポット対応もご相談いただけます。",
  },
]

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-amber-500 blur-3xl" />
            <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-orange-400 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-12 lg:py-28">
            <div className="grid gap-10 text-center lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:text-left">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-amber-300 sm:text-sm">
                  LOGISTICS
                  <br className="sm:hidden" />
                  WAREHOUSE / TRANSPORTATION
                </p>

                <h1 className="mx-auto mt-5 max-w-[21rem] text-[clamp(2.25rem,10vw,5.4rem)] font-bold leading-[1.18] tracking-[-0.04em] sm:max-w-none sm:leading-[1.12] lg:mx-0">
                  急ぎの物流も、
                  <br />
                  保管も加工も。
                  <br />
                  まず動く。
                </h1>

                <p className="mx-auto mt-7 max-w-[21rem] text-[15px] leading-[2.05] text-white/78 sm:max-w-3xl sm:text-lg sm:leading-9 lg:mx-0">
                  株式会社GAMIは、
                  <br />
                  倉庫保管・流通加工・発送代行・利用運送まで、
                  <br />
                  現場に合わせて一括対応する物流パートナーです。
                  <br />
                  レスポンスの早さと現場対応力で、
                  <br />
                  定期案件からスポット案件まで支えます。
                </p>

                <div className="mx-auto mt-9 flex max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                  <Link
                    href="/company#contact"
                    className="rounded-full bg-amber-500 px-7 py-4 text-center text-sm font-bold tracking-wide text-white shadow-lg transition hover:bg-amber-400"
                  >
                    即レスで相談する
                  </Link>

                  <a
                    href="tel:0661159935"
                    className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-bold tracking-wide text-white transition hover:bg-white/10"
                  >
                    電話で相談する
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 text-left backdrop-blur">
                <p className="text-sm font-bold tracking-[0.18em] text-amber-300">
                  こんなご相談に対応
                </p>

                <div className="mt-5 grid gap-3">
                  {transportCases.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-7 text-white/85"
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
            <div className="mx-auto max-w-3xl lg:mx-0">
              <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                SERVICE
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-tight sm:text-5xl sm:leading-tight">
                物流業務を、
                <br />
                丸ごと任せられる体制。
              </h2>

              <p className="mx-auto mt-6 max-w-[21rem] text-[15px] leading-[2.05] text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                配送だけではなく、
                <br />
                保管・検品・流通加工・内職・発送代行まで。
                <br />
                複数業者に分けず、
                <br />
                必要な工程をまとめてご相談いただけます。
              </p>
            </div>

            <div className="mt-10 grid gap-6 text-left md:grid-cols-2 xl:grid-cols-4">
              {coreServices.map((service) => (
                <div
                  key={service.title}
                  className="tech-card rounded-[2rem] p-7"
                >
                  <h3 className="text-xl font-bold text-foreground">
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
                <p className="text-sm font-semibold tracking-[0.24em] text-amber-300">
                  RESPONSE / SPOT
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-tight sm:text-5xl sm:leading-tight">
                  急な案件にも、
                  <br />
                  まず反応する。
                </h2>

                <p className="mx-auto mt-6 max-w-[21rem] text-[15px] leading-[2.05] text-white/70 sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                  GAMIが大切にしているのは、
                  <br />
                  レスポンスの早さです。
                  <br />
                  お客様のご要望によっては、
                  <br />
                  24時間365日の発送対応も行っています。
                  <br />
                  化粧品関連の急なスポット対応もご相談ください。
                </p>
              </div>

              <div className="grid gap-4 text-left sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-3xl font-bold text-amber-300">24/365</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    ご要望に応じて、24時間365日の発送対応も相談可能。
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-3xl font-bold text-amber-300">SPOT</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    急な出荷、繁忙期、短納期、スポット案件にも対応。
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-3xl font-bold text-amber-300">COSMETICS</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    化粧品製造業許可を活かし、化粧品関連の作業にも対応。
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-3xl font-bold text-amber-300">ONE STOP</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    保管、検品、加工、梱包、配送までまとめて相談可能。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                ACHIEVEMENTS
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                取扱実績・対応分野
              </h2>

              <p className="mx-auto mt-6 max-w-[21rem] text-[15px] leading-[2.05] text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                具体的なメーカー名は伏せたうえで、
                <br />
                取扱いイメージをご紹介します。
                <br />
                美容商材、アパレル、食品、返礼品、EC発送まで、
                <br className="hidden sm:block" />
                商材ごとの特性に合わせて対応します。
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {achievements.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-5 py-3 text-sm font-bold text-foreground shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gradient py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                WAREHOUSE NETWORK
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-tight sm:text-5xl sm:leading-tight">
                2つの倉庫で、
                <br />
                案件に合わせて対応。
              </h2>

              <p className="mx-auto mt-6 max-w-[21rem] text-[15px] leading-[2.05] text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                GAMIでは、
                <br />
                守口倉庫と大阪南倉庫の2拠点を活用し、
                <br />
                商品特性や物量に合わせた
                <br />
                保管・出荷体制をご提案します。
                <br />
                保管だけでなく、
                検品・梱包・流通加工までご相談いただけます。
              </p>
            </div>

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

                  <div className="p-7">
                    <p className="text-xs font-bold tracking-[0.22em] text-gold">
                      WAREHOUSE
                    </p>

                    <h3 className="mt-4 text-2xl font-bold text-foreground">
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
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-zinc-950 p-7 text-left text-white sm:p-9">
                <p className="text-sm font-semibold tracking-[0.24em] text-amber-300">
                  LIGHT WORK
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-tight">
                  内職・流通加工の
                  <br className="sm:hidden" />
                  外注も対応
                </h2>

                <p className="mt-5 text-sm leading-8 text-white/70">
                  セット組み、シール貼り、封入、梱包など、手作業が必要な工程にも対応。
                  小ロットから大量ロットまで、物流と合わせて効率的に運用できます。
                </p>

                <Link
                  href="/naishoku"
                  className="mt-8 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-400"
                >
                  内職・軽作業の詳細を見る
                </Link>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-7 text-left shadow-glass sm:p-9">
                <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                  DANBOARD
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-tight">
                  梱包資材の見直しも
                  <br className="sm:hidden" />
                 相談可能
                </h2>

                <p className="mt-5 text-sm leading-8 text-muted-foreground">
                  段ボールや梱包資材のコスト見直しもご相談いただけます。
                  商品サイズや発送方法に合わせて、物流全体の改善につながるご提案を行います。
                </p>

                <div className="mt-6 grid gap-3">
                  {packingFeatures.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-muted px-4 py-3 text-sm text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/danbo"
                  className="mt-8 inline-flex rounded-full aurora-gradient px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  段ボール見積りページへ
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-gradient py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                  FLOW
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-tight sm:text-5xl sm:leading-tight">
                  ご相談から
                  <br />
                  運用開始まで。
                </h2>

                <p className="mx-auto mt-6 max-w-[21rem] text-[15px] leading-[2.05] text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                  ざっくりした相談段階でも大丈夫です。
                  <br />
                  現状をお聞きし、必要な工程を整理したうえで、
                  <br className="hidden sm:block" />
                  最適な物流体制をご提案します。
                </p>
              </div>

              <div className="grid gap-4 text-left">
                {processSteps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-3xl border border-border bg-white/80 p-6 shadow-sm"
                  >
                    <p className="text-sm font-bold text-gold">{item.step}</p>

                    <h3 className="mt-2 text-lg font-bold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-8 text-muted-foreground">
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
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                STRENGTH
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-tight sm:text-5xl sm:leading-tight">
                GAMIが選ばれる理由
              </h2>

              <p className="mx-auto mt-6 max-w-[21rem] text-[15px] leading-[2.05] text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
                単なる運送ではなく、
                <br />
                物流全体を最適化するパートナーとして。
                <br />
                現場に寄り添った提案とスピード対応で選ばれています。
              </p>

              <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
                {strengths.map((strength) => (
                  <div
                    key={strength.title}
                    className="rounded-[2rem] border border-border bg-card p-7 shadow-sm"
                  >
                    <h3 className="text-xl font-bold text-foreground">
                      {strength.title}
                    </h3>

                    <p className="mt-3 text-sm leading-8 text-muted-foreground">
                      {strength.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 lg:px-12">
            <p className="text-sm font-semibold tracking-[0.24em] text-amber-300">
              CONTACT
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-tight sm:text-5xl sm:leading-tight">
              物流の急ぎ案件も、
              <br />
              まずはご相談ください。
            </h2>

            <p className="mx-auto mt-6 max-w-[21rem] text-[15px] leading-[2.05] text-white/70 sm:max-w-2xl sm:text-base sm:leading-8">
              定期案件・スポット案件を問わず、
              <br />
              最適な物流体制をご提案します。
              <br />
              どこまで任せられるか相談したい、
              <br />
              という段階でも問題ありません。
            </p>

            <div className="mx-auto mt-10 flex max-w-[22rem] flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="/company#contact"
                className="rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-amber-400"
              >
                即レスで相談する
              </Link>

              <a
                href="tel:0661159935"
                className="rounded-full border border-white/25 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
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
