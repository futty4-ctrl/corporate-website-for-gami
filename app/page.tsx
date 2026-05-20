import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "株式会社GAMI｜物流運送・倉庫保管・発送代行",
  description:
    "株式会社GAMIは物流運送事業を中心に、倉庫保管、発送代行、検品、梱包、流通加工、スポット出荷に対応。ヘッドスパ事業をはじめ、整理買取、車事業、オンラインショップも展開しています。",
}

const logisticsFeatures = [
  "24時間365日の発送対応も相談可能",
  "急なスポット出荷・短納期案件に対応",
  "化粧品製造業許可を活かした化粧品関連対応",
  "倉庫保管・検品・梱包・流通加工まで一括対応",
  "EC発送・返礼品発送・食品発送にも対応",
  "レスポンス重視で確認から実行までが速い",
]

const logisticsCases = [
  "美容メーカー商品の発送代行",
  "人気キャップブランド商品のEC発送",
  "ふるさと納税返礼品のお米発送",
  "スパイス商品の全国発送",
  "化粧品関連商品の急なスポット対応",
  "セット組み・シール貼り・封入作業",
]

const warehouses = [
  {
    title: "守口倉庫",
    lead: "小規模案件・機密性の高い保管に対応",
    body:
      "細かな管理が必要な商品や、柔軟な運用が求められる案件に適した倉庫です。入出庫、検品、保管、流通加工まで、現場に合わせて対応します。",
    image: "/images/warehouse-moriguchi.jpg",
    subImage: "/images/warehouse-moriguchi-inside.jpg",
  },
  {
    title: "大阪南倉庫",
    lead: "大量保管・パレット運用に対応",
    body:
      "物量のある案件や、長期保管・まとめ出荷に適した倉庫です。案件規模に応じて、守口倉庫と使い分けながら最適な物流体制をご提案します。",
    image: "/images/warehouse-osaka.jpg",
    subImage: "/images/warehouse-osaka-inside.jpg",
  },
]

const headSpaLinks = [
  {
    title: "ヘッドスパ専門店ゆう 本店",
    body: "完全個室・完全予約制のヘッドスパ専門店。実店舗で培った技術・接客・空間設計が、GAMIの美容事業の核です。",
    href: "https://www.yuheadspa.net/",
    button: "本店サイトを見る",
  },
  {
    title: "ヘッドスパフランチャイズ",
    body: "店舗運営、技術研修、メニュー設計、開業支援まで。実店舗の経験をもとに、ヘッドスパ事業の展開を支援します。",
    href: "/headspa-franchise",
    button: "FC事業を見る",
  },
]

const otherBusinesses = [
  {
    title: "整理買取事業",
    body: "遺品整理・生前整理・買取まで一括対応。ご家族の想いに寄り添い、丁寧に対応します。",
    href: "/seihin",
    button: "詳細を見る",
  },
  {
    title: "車事業",
    body: "車両販売・カスタム・関連サービスを展開。暮らしと事業を支える車まわりの相談に対応します。",
    href: "https://styling-garage.jp",
    button: "詳細を見る",
  },
  {
    title: "オンラインショップ",
    body: "ギフト商品や関連商品をオンラインで販売。GAMIの関連サービスをWebからご利用いただけます。",
    href: "https://gamistore.base.shop/",
    button: "ショップを見る",
  },
]

const licenses = [
  "インボイス登録番号",
  "化粧品製造業許可証",
  "古物商許可証",
  "第一種貨物利用運送事業登録",
]

const qualifications = [
  "遺品整理士",
  "生前整理アドバイザー",
  "第一種衛生管理者",
  "運行管理者（貨物）",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative min-h-[640px] overflow-hidden bg-zinc-900 text-white sm:min-h-[680px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          >
            <source src="/video/hero-logistics.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

          <div className="relative z-10 mx-auto flex min-h-[640px] max-w-6xl items-center justify-center px-5 py-20 text-center sm:min-h-[680px] sm:px-6 lg:justify-start lg:text-left">
            <div className="mx-auto max-w-4xl lg:mx-0">
              <p className="text-[10px] font-semibold tracking-[0.24em] text-amber-300 sm:text-sm">
                GAMI INC.
                <br className="sm:hidden" />
                LOGISTICS COMPANY
              </p>

              <h1 className="mx-auto mt-5 text-center text-[clamp(2.2rem,8.2vw,5.8rem)] font-bold leading-[1.08] tracking-[-0.06em] text-white sm:text-7xl lg:mx-0 lg:text-left">
                物流で、
                <br />
                事業を前へ。
              </h1>

              <p className="mx-auto mt-7 max-w-[34rem] text-[15px] leading-8 text-white/88 sm:text-lg sm:leading-9 lg:mx-0">
                物流運送事業を中心に、倉庫保管・発送代行・流通加工まで対応。
                <br />
                ヘッドスパ事業をはじめ、複数事業を展開する株式会社GAMI。
              </p>

              <div className="mx-auto mt-9 flex max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                <Link
                  href="/company#contact"
                  className="rounded-full bg-amber-500 px-7 py-4 text-center text-sm font-bold tracking-wide text-white shadow-lg transition hover:bg-amber-400"
                >
                  即レスで相談する
                </Link>

                <Link
                  href="/logistics"
                  className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-center text-sm font-bold tracking-wide text-white backdrop-blur transition hover:bg-white/20"
                >
                  物流運送事業を見る
                </Link>
              </div>

              <div className="mx-auto mt-10 grid max-w-[22rem] gap-3 text-xs text-white/90 sm:max-w-none sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/15 px-4 py-3 backdrop-blur">
                  倉庫保管・発送代行
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/15 px-4 py-3 backdrop-blur">
                  スポット出荷に対応
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/15 px-4 py-3 backdrop-blur">
                  物流を主軸に事業展開
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-gradient py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                MAIN BUSINESS
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.35] tracking-tight sm:text-5xl sm:leading-tight">
                メインは物流運送。
                <br />
                次にヘッドスパ事業。
              </h2>

              <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-8 text-muted-foreground sm:max-w-3xl sm:text-base lg:mx-0">
                株式会社GAMIは、物流運送事業を主軸に展開しています。
                発送代行、倉庫保管、検品、梱包、流通加工まで、現場に合わせて柔軟に対応。
                ヘッドスパ事業では、実店舗運営とフランチャイズ展開を行っています。
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="tech-card rounded-[2rem] p-7 text-left sm:p-9">
                <p className="text-xs font-bold tracking-[0.24em] text-gold">
                  01 / MAIN BUSINESS
                </p>

                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  物流運送事業
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-muted-foreground sm:text-sm">
                  GAMIの中心事業です。発送代行、倉庫保管、検品、梱包、流通加工、スポット出荷まで一括対応。
                  お客様の要望によっては、24時間365日の発送対応も行っています。
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {logisticsFeatures.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/70 px-4 py-3 text-sm leading-7 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/logistics"
                  className="mt-8 inline-flex rounded-full aurora-gradient px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  物流運送事業を見る
                </Link>
              </div>

              <div className="tech-card rounded-[2rem] p-7 text-left sm:p-9">
                <p className="text-xs font-bold tracking-[0.24em] text-gold">
                  02 / BEAUTY BUSINESS
                </p>

                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  ヘッドスパ事業
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-muted-foreground sm:text-sm">
                  ヘッドスパ専門店ゆう本店の運営実績をもとに、店舗運営・技術・接客・空間づくりまで。
                  美容事業として、ヘッドスパの価値を広げています。
                </p>

                <div className="mt-7 grid gap-4">
                  {headSpaLinks.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-white/70 p-5"
                    >
                      <h4 className="font-bold">{item.title}</h4>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {item.body}
                      </p>

                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-4 inline-flex text-sm font-bold text-gold"
                      >
                        {item.button} →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:text-left">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold tracking-[0.24em] text-amber-300">
                  RESPONSE FIRST
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-[1.35] tracking-tight sm:text-5xl sm:leading-tight">
                  速さは、
                  <br />
                  信頼になる。
                </h2>

                <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-8 text-white/70 sm:max-w-3xl sm:text-base lg:mx-0">
                  GAMIが大切にしているのは、レスポンスの早さです。
                  判断、現場確認、手配、実行までの速度を上げ、お客様の機会損失を減らします。
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
                    急な出荷、繁忙期、短納期、化粧品関連のスポット対応にも対応。
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-3xl font-bold text-amber-300">EC</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    EC商品、食品、返礼品、美容商材など幅広い発送実績。
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-3xl font-bold text-amber-300">ONE STOP</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    保管、検品、梱包、加工、配送までまとめて相談可能。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                LOGISTICS CASE
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                物流対応実例
              </h2>

              <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-8 text-muted-foreground sm:max-w-3xl sm:text-base lg:mx-0">
                具体的なメーカー名は伏せたうえで、実際に近い取扱いイメージをご紹介します。
                美容、アパレル、食品、返礼品、EC発送まで幅広く対応しています。
              </p>
            </div>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
              {logisticsCases.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-border bg-card p-6 shadow-glass"
                >
                  <p className="text-sm font-bold leading-7 text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gradient py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                WAREHOUSE NETWORK
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.35] tracking-tight sm:text-5xl sm:leading-tight">
                2つの倉庫で、
                <br />
                案件ベースで対応。
              </h2>

              <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-8 text-muted-foreground sm:max-w-3xl sm:text-base lg:mx-0">
                GAMIでは、守口倉庫と大阪南倉庫の2拠点を活用し、商品特性や物量に合わせた保管・出荷体制をご提案します。
                検品・梱包・流通加工までご相談いただけます。
              </p>
            </div>

            <div className="mt-12 grid gap-8 text-left lg:grid-cols-2">
              {warehouses.map((warehouse) => (
                <div
                  key={warehouse.title}
                  className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-glass"
                >
                  <div className="grid gap-2 p-2">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-muted">
                      <Image
                        src={warehouse.image}
                        alt={warehouse.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-muted">
                      <Image
                        src={warehouse.subImage}
                        alt={`${warehouse.title} 内観`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
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
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:text-left">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <p className="text-sm font-semibold tracking-[0.24em] text-gold">
                OTHER BUSINESS
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                その他事業
              </h2>

              <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-8 text-muted-foreground sm:max-w-3xl sm:text-base lg:mx-0">
                物流運送事業とヘッドスパ事業を中心に、関連する事業を展開しています。
                こちらでは主な関連事業のみを簡潔にご紹介します。
              </p>
            </div>

            <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
              {otherBusinesses.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-white/80 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.body}
                  </p>

                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-5 inline-flex text-sm font-bold text-gold"
                  >
                    {item.button} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:text-left">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold tracking-[0.24em] text-amber-300">
                  LICENSE / QUALIFICATION
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-[1.35] tracking-tight sm:text-5xl sm:leading-tight">
                  信頼を支える
                  <br />
                  許認可・資格
                </h2>

                <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-8 text-white/70 sm:max-w-3xl sm:text-base lg:mx-0">
                  物流、美容、整理買取に関わる事業を、安心してご相談いただけるように。
                  必要な許認可・資格を整えています。
                </p>
              </div>

              <div className="grid gap-6 text-left sm:grid-cols-2">
                <div className="rounded-[2rem] border border-amber-300/20 bg-white/[0.06] p-7">
                  <h3 className="text-xl font-bold text-amber-300">許認可</h3>

                  <ul className="mt-6 space-y-4">
                    {licenses.map((item) => (
                      <li
                        key={item}
                        className="border-b border-white/10 pb-3 text-sm leading-7 text-white/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-amber-300/20 bg-white/[0.06] p-7">
                  <h3 className="text-xl font-bold text-amber-300">資格</h3>

                  <ul className="mt-6 space-y-4">
                    {qualifications.map((item) => (
                      <li
                        key={item}
                        className="border-b border-white/10 pb-3 text-sm leading-7 text-white/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
            <p className="text-sm font-semibold tracking-[0.24em] text-gold">
              CONTACT
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.35] tracking-tight sm:text-5xl sm:leading-tight">
              物流のご相談は、
              <br />
              まず即レスで。
            </h2>

            <p className="mx-auto mt-6 max-w-[34rem] text-[15px] leading-8 text-muted-foreground sm:max-w-2xl sm:text-base">
              倉庫保管、発送代行、スポット出荷、流通加工、ヘッドスパ事業、整理買取まで。
              まずは内容をお聞かせください。確認後、できるだけ早くご返信します。
            </p>

            <div className="mx-auto mt-9 flex max-w-[22rem] flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
              <Link
                href="/company#contact"
                className="rounded-full aurora-gradient px-8 py-4 text-sm font-bold text-white shadow-glass transition hover:opacity-90"
              >
                お問い合わせする
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
