import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "大阪の発送代行・物流倉庫・流通加工なら株式会社GAMI",
  description:
    "大阪府守口市大日町1-8-18の約100坪倉庫を拠点に、発送代行・倉庫保管・流通加工・内職作業・シール貼り・セット組み・スポット出荷まで対応。",
  keywords: [
    "発送代行 大阪",
    "物流倉庫 大阪",
    "倉庫保管 大阪",
    "流通加工 大阪",
    "内職作業 大阪",
    "シール貼り 大阪",
    "セット組み 大阪",
    "守口 倉庫",
    "EC発送代行",
  ],
}

const serviceCards = [
  {
    title: "倉庫保管",
    body: "大阪府守口市大日町の約100坪倉庫で、小ロットから継続案件まで柔軟に保管します。",
  },
  {
    title: "発送代行",
    body: "EC商品、化粧品関連商材、返礼品、食品などの出荷作業を代行します。",
  },
  {
    title: "流通加工",
    body: "検品、梱包、シール貼り、封入、セット組みなど細かな手作業に対応します。",
  },
  {
    title: "利用運送",
    body: "第一種貨物利用運送事業の登録を活かし、配送まわりもまとめて相談できます。",
  },
]

const consultationCases = [
  "発送作業が追いつかない",
  "保管場所が足りない",
  "EC商品の発送代行を外注したい",
  "シール貼り・セット組みを任せたい",
  "スポット出荷を依頼したい",
  "化粧品関連商品の物流を相談したい",
]

const achievements = [
  "EC商品の発送代行",
  "化粧品関連商品の物流対応",
  "シール貼り・検品作業",
  "セット組み・封入作業",
  "ふるさと納税返礼品発送",
  "美容商材の保管・出荷",
  "スポット出荷案件",
  "小ロット物流対応",
]

const strengths = [
  {
    title: "レスポンス重視",
    body: "急ぎ案件でも、確認・判断・手配までをスピーディーに進めます。",
  },
  {
    title: "ワンストップ対応",
    body: "保管、検品、加工、梱包、発送までまとめて相談できます。",
  },
  {
    title: "スポット案件対応",
    body: "繁忙期、短納期、急な出荷など、波動のある案件にも柔軟に対応します。",
  },
  {
    title: "細かい手作業に強い",
    body: "シール貼り、セット組み、封入、検品など内職系の作業も対応できます。",
  },
]

const processSteps = [
  {
    step: "01",
    title: "お問い合わせ",
    body: "商品内容、物量、納期、希望作業をお聞かせください。",
  },
  {
    step: "02",
    title: "現状確認",
    body: "保管、加工、出荷頻度、配送条件などを整理します。",
  },
  {
    step: "03",
    title: "ご提案・お見積り",
    body: "必要な作業内容に合わせて物流体制と費用をご提案します。",
  },
  {
    step: "04",
    title: "運用開始",
    body: "保管・加工・発送の運用を開始します。",
  },
]

const areas = [
  "全国対応",
  "365日稼働",
  "最短即日対応",
  "発送代行",
  "倉庫保管",
  "流通加工",
  "内職作業",
  "小ロット歓迎",
  "スポット対応",
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

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-8 text-center lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:text-left">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.16em] text-amber-300 sm:text-sm sm:tracking-[0.22em]">
                  LOGISTICS / WAREHOUSE / SHIPPING
                </p>

                <h1 className="mx-auto mt-5 max-w-[9.5em] text-[2rem] font-bold leading-[1.16] tracking-[-0.05em] sm:max-w-none sm:text-6xl sm:leading-[1.05] lg:mx-0">
                  <span className="block">365日稼働倉庫</span>
                  <span className="block">発送代行ならGAMI</span>
                </h1>

                <p className="mx-auto mt-5 max-w-[19rem] text-[14px] leading-7 text-white/82 sm:max-w-3xl sm:text-lg sm:leading-9 lg:mx-0">
                  全国対応・365日稼働。
                  <br />
                  守口市大日町の約100坪物流倉庫を拠点に、
                  発送代行・倉庫保管・流通加工・内職作業までワンストップ対応。
                </p>

                <div className="mx-auto mt-7 flex max-w-[21rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                  <Link
                    href="/company#contact"
                    className="rounded-full bg-amber-500 px-7 py-4 text-center text-sm font-bold text-white shadow-lg transition hover:bg-amber-400"
                  >
                    見積りを依頼する
                  </Link>

                  <Link
                    href="/warehouse"
                    className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    倉庫紹介を見る
                  </Link>

                  <a
                    href="tel:0661159935"
                    className="hidden rounded-full border border-white/25 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:inline-flex"
                  >
                    電話で相談する
                  </a>
                </div>
              </div>
<div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-2 shadow-2xl">
  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
    <Image
      src="/images/hero-logistics.png"
      alt="GAMIの物流倉庫・梱包・発送代行"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 45vw"
      className="object-cover"
    />
  </div>
</div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-5 text-left backdrop-blur sm:rounded-[2rem] sm:p-6">
                <p className="text-sm font-bold tracking-[0.12em] text-amber-300 sm:tracking-[0.18em]">
                  こんなご相談に対応
                </p>

                <div className="mt-5 grid gap-3">
                  {consultationCases.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.08] px-4 py-4 text-sm leading-7 text-white/90 backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-gradient py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm">
              SERVICE
            </p>

            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              保管から出荷まで、
              <br />
              物流を一括で支える。
            </h2>

            <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
              複数業者に分けず、倉庫保管・検品・加工・梱包・配送までまとめて相談できます。
            </p>

            <div className="mt-10 grid gap-4 text-left md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((service) => (
                <div key={service.title} className="tech-card rounded-[2rem] p-6">
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

        <section className="bg-zinc-950 py-16 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 sm:text-sm">
                  RESPONSE / SPOT
                </p>

                <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                  急ぎの案件にも、
                  <br />
                  まず動く。
                </h2>

                <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-white/70 sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
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

        <section className="py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm">
  ACHIEVEMENTS
</p>

<h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
  こんな物流業務に
  <br />
  対応しています
</h2>

            <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
  発送代行・倉庫保管・流通加工・シール貼り・セット組み・検品作業まで対応。
  <br />
  小ロット案件やスポット出荷もお気軽にご相談ください。
</p>
<div className="mx-auto mt-6 flex max-w-[22rem] flex-wrap justify-center gap-2 sm:max-w-none lg:mx-0 lg:justify-start">
  {[
    "全国対応",
    "365日稼働",
    "最短即日対応",
  ].map((item) => (
    <span
      key={item}
      className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-sm"
    >
      {item}
    </span>
  ))}
</div>
            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {achievements.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-bold text-foreground shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
<section className="py-16 sm:py-24">
  <div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="text-center">
      <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm">
        CLIENTS
      </p>

      <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.03em] sm:text-5xl">
        ご相談いただく業種
      </h2>
    </div>

    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {[
        "EC事業者様",
        "美容・化粧品メーカー様",
        "通販事業者様",
        "食品関連事業者様",
        "アパレル事業者様",
        "輸入商材販売事業者様",
        "ふるさと納税関連事業者様",
        "スタートアップ企業様",
      ].map((item) => (
        <div
          key={item}
          className="rounded-3xl border border-border bg-card px-5 py-4 text-center shadow-sm"
        >
          <p className="font-bold">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>
        <section className="section-gradient py-16 sm:py-24">
  <div className="mx-auto max-w-6xl px-5 sm:px-6">
    <div className="text-center">
      <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm">
        SUPPORT
      </p>

      <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.03em] sm:text-5xl">
        こんな物流作業に対応
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
        保管から出荷までワンストップ対応。
        小ロット案件やスポット案件もお気軽にご相談ください。
      </p>
    </div>

    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {[
        "発送代行",
        "倉庫保管",
        "検品作業",
        "梱包作業",
        "シール貼り",
        "セット組み",
        "封入作業",
        "流通加工",
        "内職作業",
        "EC物流",
        "化粧品関連作業",
        "スポット出荷",
      ].map((item) => (
        <div
          key={item}
          className="rounded-3xl border border-border bg-white px-5 py-4 text-center shadow-sm"
        >
          <p className="font-bold">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>
        <section className="section-gradient py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm">
              WAREHOUSE
            </p>

            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              守口市大日町の
              <br />
              約100坪倉庫。
            </h2>

            <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-muted-foreground sm:max-w-3xl sm:text-base sm:leading-8 lg:mx-0">
              大阪府守口市大日町1-8-18を拠点に、保管・発送代行・流通加工・内職作業まで対応しています。
            </p>

            <div className="mt-10 grid gap-6 text-left lg:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-glass">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted sm:aspect-[16/10]">
                  <Image
                    src="/images/warehouse-moriguchi.jpg"
                    alt="GAMI守口倉庫外観"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold tracking-[0.18em] text-gold">
                    MORIGUCHI WAREHOUSE
                  </p>

                  <h3 className="mt-4 text-2xl font-bold leading-snug">
                    守口倉庫
                  </h3>

                  <p className="mt-3 text-sm font-bold leading-7 text-primary">
                    大阪府守口市大日町1-8-18
                  </p>

                  <p className="mt-4 text-sm leading-8 text-muted-foreground">
                    約100坪の倉庫で、小ロット案件・スポット案件・細かな手作業まで柔軟に対応します。
                  </p>

                  <Link
                    href="/warehouse"
                    className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-600"
                  >
                    倉庫紹介を見る
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-glass">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted sm:aspect-[16/10]">
                  <Image
                    src="/images/warehouse-moriguchi-inside.jpg"
                    alt="GAMI守口倉庫内観"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold tracking-[0.18em] text-gold">
                    PARTNER NETWORK
                  </p>

                  <h3 className="mt-4 text-2xl font-bold leading-snug">
                    全国物流ネットワーク
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-muted-foreground">
                    案件内容・配送エリアに応じて、福岡・神戸の提携倉庫も活用。
                    全国発送にも柔軟に対応しています。
                  </p>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps?q=大阪府守口市大日町1-8-18&output=embed"
              width="100%"
              height="350"
              loading="lazy"
              className="mt-8 rounded-[2rem] border-0"
            />
          </div>
        </section>

                <section className="py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm">
                GALLERY
              </p>

              <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
                実際の倉庫・作業風景
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
                保管・梱包・流通加工・出荷作業まで、実際の現場で丁寧に対応しています。
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { src: "/images/hero-logistics.png", alt: "GAMI物流倉庫" },
                { src: "/images/warehouse-osaka-inside.jpg", alt: "倉庫内観" },
                { src: "/images/warehouse-osaka.jpg", alt: "倉庫外観" },
                { src: "/images/moriguchi-warehouse.jpg", alt: "保管スペース" },
                { src: "/images/moriguchi-inside.jpg", alt: "梱包作業" },
                { src: "/images/warehouse-working.jpg", alt: "発送代行の作業風景" },
{ src: "/images/warehouse-exterior.jpg", alt: "倉庫外観" },
              ].map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12 lg:text-left">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm">
              FLOW
            </p>

            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
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
                  <p className="text-sm font-bold text-gold">
                    STEP {item.step}
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-snug">
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

        <section className="section-gradient py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-12">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold sm:text-sm">
              AREA
            </p>

            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.35] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
              全国対応・365日稼働
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              大阪守口の物流倉庫を拠点に、
              全国の発送代行・倉庫保管・流通加工に対応。
              小ロット案件やスポット案件も歓迎しています。
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-white px-4 py-2.5 text-sm font-bold shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-6 sm:py-24 lg:px-12">
            <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 sm:text-sm">
              CONTACT
            </p>

            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.03em] sm:text-5xl sm:leading-tight">
  物流業務を
  <br />
  無料相談する
</h2>

            <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-white/70 sm:max-w-2xl sm:text-base sm:leading-8">
  保管場所が足りない。
  <br />
  発送作業が追いつかない。
  <br />
  シール貼りやセット組みを外注したい。
  <br />
  そんな物流のお悩みをお気軽にご相談ください。

ご相談・お見積りは無料です。
</p>

            <div className="mx-auto mt-10 flex max-w-[21rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="/company#contact"
                className="rounded-full bg-amber-500 px-8 py-4 text-sm font-bold text-white transition hover:bg-amber-400"
              >
                見積りを依頼する
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
