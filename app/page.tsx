import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title:
    "大阪の発送代行・物流倉庫なら株式会社GAMI｜1坪・小ロットから対応",
  description:
    "大阪府守口市大日町の物流会社GAMI。1坪程度の倉庫保管・小ロット発送・EC物流・検品・梱包・シール貼り・セット組み・流通加工まで対応。スモールビジネスを物流から応援。365日稼働・全国対応。レスポンスを大切にしています。",
}

const problems = [
  "まだ物量が少なく物流会社に頼みにくい",
  "在庫が少量で倉庫を借りるほどではない",
  "発送作業に追われて本業に集中できない",
  "検品・シール貼りなどを外注したい",
  "繁忙期だけ発送を手伝ってほしい",
  "レスポンスの早い物流会社を探している",
]

const services = [
  "1坪からの倉庫保管",
  "小ロット発送",
  "発送代行",
  "EC物流",
  "倉庫保管",
  "検品",
  "梱包",
  "シール貼り",
  "セット組み",
  "封入作業",
  "内職作業",
  "流通加工",
  "化粧品関連作業",
  "スポット出荷",
  "365日稼働",
  "全国対応",
]

const strengths = [
  {
    title: "1坪から大歓迎",
    body: "段ボール数箱、1坪程度の保管からでも大丈夫です。物量が少ない段階からお気軽にご相談ください。",
  },
  {
    title: "スモールビジネスを応援",
    body: "ECを始めたばかりの方、個人事業主様、スタートアップ企業様も歓迎。小さく始めて、一緒に物流を育てます。",
  },
  {
    title: "レスポンスを大切に",
    body: "すぐ回答できない内容でも、まず返事をする。GAMIは、連絡の速さと安心感を大切にしています。",
  },
  {
    title: "365日稼働",
    body: "土日祝や繁忙期にも柔軟に対応。急な出荷やスポット案件についてもご相談ください。",
  },
  {
    title: "細かな手作業に強い",
    body: "シール貼り・セット組み・封入・検品・梱包など、人の手が必要な細かな作業にも対応します。",
  },
  {
    title: "物流をまとめて相談",
    body: "保管・加工・梱包・発送までワンストップ。複数業者へ依頼する手間を減らせます。",
  },
]

const cases = [
  "EC商品の発送代行",
  "Amazon・楽天商品の出荷",
  "1坪程度からの倉庫保管",
  "少量商品の保管・発送",
  "シール貼り",
  "セット組み",
  "検品・梱包",
  "封入作業",
  "化粧品関連物流",
  "美容商材の保管・発送",
  "食品関連商品の発送",
  "ふるさと納税返礼品発送",
  "スポット出荷",
  "スタートアップ物流",
  "流通加工全般",
]

const licenses = [
  "化粧品製造業許可",
  "第一種貨物利用運送事業",
  "古物商許可",
  "インボイス登録事業者",
]

const smallCases = [
  "在庫が段ボール20箱くらい",
  "1坪くらいだけ商品を置きたい",
  "毎日5〜10件程度だけ発送している",
  "繁忙期だけ手伝ってほしい",
  "シール貼りだけお願いしたい",
  "ECを始めたばかり",
]

const responsePoints = [
  {
    number: "01",
    title: "まず返事をする",
    body: "確認が必要な内容でも、まずご連絡します。",
  },
  {
    number: "02",
    title: "できる方法を考える",
    body: "最初から断るのではなく、どうすれば対応できるか一緒に考えます。",
  },
  {
    number: "03",
    title: "小回りを活かす",
    body: "距離の近さとスピード感を活かし、柔軟に対応します。",
  },
]

const faqItems = [
  {
    q: "1坪程度の保管でも依頼できますか？",
    a: "はい。歓迎しています。商品数や物量が少ない段階でもお気軽にご相談ください。",
  },
  {
    q: "ECを始めたばかりでも大丈夫ですか？",
    a: "はい。スタートアップ・個人事業主・小規模EC事業者様も応援しています。",
  },
  {
    q: "毎日の発送件数が少なくても大丈夫ですか？",
    a: "大丈夫です。少量の発送から始まる案件についてもご相談ください。",
  },
  {
    q: "シール貼りだけでも頼めますか？",
    a: "はい。保管や発送を伴わない流通加工・内職作業のみのご相談も歓迎しています。",
  },
  {
    q: "スポット出荷は可能ですか？",
    a: "可能です。繁忙期やキャンペーン時期など、短期間のご相談も承ります。",
  },
  {
    q: "全国発送できますか？",
    a: "はい。大阪守口物流センターを拠点に全国への発送に対応しています。",
  },
  {
    q: "まず相談だけでも大丈夫ですか？",
    a: "もちろんです。「これ頼める？」という段階からお気軽にお問い合わせください。",
  },
  {
    q: "見積りは無料ですか？",
    a: "はい。ご相談・お見積りは無料です。",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[500px] overflow-hidden bg-zinc-950 text-white sm:min-h-[700px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-65"
          >
            <source src="/video/hero-logistics.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />

          <div className="relative z-10 mx-auto flex min-h-[500px] max-w-6xl items-center px-5 py-10 sm:min-h-[700px] sm:px-6 sm:py-16">
            <div className="w-full max-w-3xl text-center lg:text-left">
              <p className="text-[10px] font-bold tracking-[0.22em] text-amber-300 sm:text-sm sm:tracking-[0.3em]">
                SMALL BUSINESS LOGISTICS
              </p>

              <h1 className="mt-4 text-[2.35rem] font-bold leading-[1.08] tracking-[-0.045em] sm:mt-6 sm:text-6xl lg:text-[5rem]">
                <span className="block">物流は、</span>
                <span className="mt-1 block text-amber-300">
                  1坪から。
                </span>
              </h1>

              <p className="mt-5 text-[17px] font-bold leading-7 sm:mt-7 sm:text-2xl sm:leading-9">
                小さなビジネスほど、
                <br className="sm:hidden" />
                本気で応援します。
              </p>

              <p className="mx-auto mt-4 max-w-[340px] text-[13px] leading-6 text-white/80 sm:mt-5 sm:max-w-2xl sm:text-base sm:leading-8 lg:mx-0">
                1坪程度の保管、小ロット発送、
                <br className="sm:hidden" />
                検品・梱包・シール貼り・セット組みまで。
                <br />
                「まだ物量が少ないから頼みにくい」
                <br className="sm:hidden" />
                そんな段階からご相談ください。
              </p>

              <div className="mx-auto mt-7 flex max-w-[320px] flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                <Link
                  href="/company#contact"
                  className="flex min-h-[52px] items-center justify-center rounded-full bg-amber-500 px-6 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:bg-amber-600 sm:px-8 sm:text-sm"
                >
                  「これ頼める？」と相談する
                </Link>

                <Link
                  href="/warehouse"
                  className="flex min-h-[52px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-[14px] font-bold text-white backdrop-blur transition hover:bg-white/20 sm:px-8 sm:text-sm"
                >
                  倉庫を見る
                </Link>
              </div>

              <div className="mx-auto mt-5 flex max-w-[330px] flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-bold text-white/70 sm:max-w-none sm:text-xs lg:mx-0 lg:justify-start">
                <span>✓ ご相談無料</span>
                <span>✓ 見積無料</span>
                <span>✓ 小ロット歓迎</span>
                <span>✓ 365日稼働</span>
              </div>
            </div>
          </div>
        </section>

        {/* SMALL BUSINESS */}
        <section className="bg-amber-50 py-14 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.18em] text-amber-600 sm:text-sm">
                SMALL START
              </p>

              <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.3] tracking-[-0.035em] sm:mt-4 sm:text-5xl">
                こんな小さな依頼でも
                <br />
                <span className="text-amber-600">
                  大丈夫です。
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[340px] text-[13px] leading-7 text-muted-foreground sm:max-w-2xl sm:text-base sm:leading-8">
                むしろ、そこからご相談ください。
                <br />
                GAMIはスモールビジネスを
                <br className="sm:hidden" />
                物流から応援します。
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {smallCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-amber-100 bg-white px-4 py-4 shadow-sm sm:rounded-3xl sm:p-6"
                >
                  <p className="flex items-start gap-2.5 text-[13px] font-bold leading-6 sm:text-sm sm:leading-7">
                    <span className="mt-[1px] text-amber-500">✓</span>
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center sm:mt-10">
              <Link
                href="/company#contact"
                className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center rounded-full bg-amber-500 px-6 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:bg-amber-600 sm:w-auto sm:px-9"
              >
                小さな案件を相談する
              </Link>
            </div>
          </div>
        </section>

        {/* RESPONSE */}
        <section className="bg-zinc-950 py-14 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
              <div className="text-center lg:text-left">
                <p className="text-[11px] font-bold tracking-[0.18em] text-amber-300 sm:text-sm">
                  RESPONSE
                </p>

                <h2 className="mt-3 text-[2rem] font-bold leading-[1.2] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                  まず返す。
                  <br />
                  すぐ動く。
                </h2>

                <p className="mx-auto mt-5 max-w-[340px] text-[13px] leading-7 text-white/70 sm:max-w-xl sm:text-base sm:leading-8 lg:mx-0">
                  GAMIが物流サービスと同じくらい
                  <br className="sm:hidden" />
                  大切にしているのが、
                  <strong className="font-bold text-white">
                    レスポンス
                  </strong>
                  です。
                  <br />
                  <br />
                  すぐ回答できない内容でも、
                  <br className="sm:hidden" />
                  まず返事をする。
                  <br />
                  お客様を待たせっぱなしにしないことを
                  <br className="sm:hidden" />
                  大切にしています。
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4">
                {responsePoints.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:rounded-3xl sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 text-lg font-bold text-amber-300 sm:text-xl">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="text-[16px] font-bold leading-6 sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[12px] leading-6 text-white/65 sm:mt-3 sm:text-sm sm:leading-7">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section-gradient py-14 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center lg:text-left">
              <p className="text-[11px] font-bold tracking-[0.18em] text-gold sm:text-sm">
                PROBLEM
              </p>

              <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.035em] sm:mt-4 sm:text-5xl">
                こんな物流のお悩み、
                <br />
                ありませんか？
              </h2>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-white/90 px-4 py-4 shadow-sm sm:rounded-3xl sm:px-5"
                >
                  <p className="flex items-start gap-2.5 text-[13px] font-bold leading-6 sm:text-sm sm:leading-7">
                    <span className="text-amber-500">✓</span>
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center sm:mt-10">
              <p className="mb-5 text-[13px] leading-7 text-muted-foreground sm:text-sm">
                「こんなこと頼めるかな？」
                <br />
                という段階でも大丈夫です。
              </p>

              <Link
                href="/company#contact"
                className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:bg-amber-600 sm:w-auto"
              >
                まずは無料相談する
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICE */}
        <section className="bg-zinc-950 py-14 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
              <div className="text-center lg:text-left">
                <p className="text-[11px] font-bold tracking-[0.18em] text-amber-300 sm:text-sm">
                  SERVICE
                </p>

                <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.3] tracking-[-0.035em] sm:mt-4 sm:text-5xl">
                  保管から発送まで、
                  <br />
                  まとめてお任せ。
                </h2>

                <p className="mx-auto mt-5 max-w-[340px] text-[13px] leading-7 text-white/70 sm:max-w-2xl sm:text-base sm:leading-8 lg:mx-0">
                  1坪程度の保管から発送代行、
                  <br className="sm:hidden" />
                  流通加工・内職作業まで。
                  <br />
                  小ロットやスポット案件にも
                  <br className="sm:hidden" />
                  柔軟に対応します。
                </p>

                <Link
                  href="/company#contact"
                  className="mt-7 inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:bg-amber-600 sm:w-auto"
                >
                  物流業務を相談する
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {services.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[52px] items-center rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-[12px] font-bold leading-5 text-white/85 sm:min-h-[58px] sm:rounded-2xl sm:px-5 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STRENGTH */}
        <section className="py-14 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center lg:text-left">
              <p className="text-[11px] font-bold tracking-[0.18em] text-gold sm:text-sm">
                OUR PROMISE
              </p>

              <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.035em] sm:mt-4 sm:text-5xl">
                GAMIが大切にする
                <br />
                6つのこと
              </h2>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:rounded-3xl sm:p-7"
                >
                  <h3 className="text-[16px] font-bold leading-6 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-7 text-muted-foreground sm:mt-4 sm:text-sm sm:leading-8">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAREHOUSE */}
        <section className="section-gradient py-14 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
              <div className="text-center lg:text-left">
                <p className="text-[11px] font-bold tracking-[0.18em] text-gold sm:text-sm">
                  WAREHOUSE
                </p>

                <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.3] tracking-[-0.035em] sm:mt-4 sm:text-5xl">
                  大阪・守口から
                  <br />
                  全国へ。
                </h2>

                <p className="mx-auto mt-5 max-w-[340px] text-[13px] leading-7 text-muted-foreground sm:max-w-2xl sm:text-base sm:leading-8 lg:mx-0">
                  大阪府守口市大日町の
                  <br className="sm:hidden" />
                  約100坪物流倉庫。
                  <br />
                  保管・加工・梱包・発送まで
                  <br className="sm:hidden" />
                  ワンストップで対応します。
                  <br />
                  1坪程度の保管も歓迎です。
                </p>

                <div className="mx-auto mt-7 flex max-w-[320px] flex-col gap-3 sm:max-w-none sm:flex-row lg:mx-0">
                  <Link
                    href="/warehouse"
                    className="flex min-h-[52px] items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:bg-amber-600"
                  >
                    倉庫紹介を見る
                  </Link>

                  <Link
                    href="/company#contact"
                    className="flex min-h-[52px] items-center justify-center rounded-full border border-border bg-white px-7 py-3.5 text-[14px] font-bold transition hover:bg-muted"
                  >
                    空きスペースを相談
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm sm:rounded-3xl">
                  <img
                    src="/images/warehouse-moriguchi.jpg"
                    alt="GAMI守口物流倉庫外観"
                    className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                  />

                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] font-bold tracking-[0.16em] text-gold sm:text-xs">
                      MORIGUCHI WAREHOUSE
                    </p>

                    <h3 className="mt-2 text-[18px] font-bold sm:mt-3 sm:text-2xl">
                      大阪守口物流センター
                    </h3>

                    <p className="mt-3 text-[13px] leading-7 text-muted-foreground sm:text-sm">
                      約100坪の物流倉庫。
                      <br />
                      1坪程度の保管から全国発送まで、
                      事業規模に合わせて対応します。
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm sm:rounded-3xl">
                  <img
                    src="/images/warehouse-moriguchi-inside.jpg"
                    alt="GAMI守口物流倉庫内観"
                    className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                  {[
                    "1坪から",
                    "365日稼働",
                    "小ロット歓迎",
                    "全国対応",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-border bg-white px-3 py-4 text-center shadow-sm sm:rounded-2xl sm:p-5"
                    >
                      <p className="text-[12px] font-bold sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE */}
        <section className="py-14 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center lg:text-left">
              <p className="text-[11px] font-bold tracking-[0.18em] text-gold sm:text-sm">
                CASE
              </p>

              <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.035em] sm:mt-4 sm:text-5xl">
                こんな物流業務に
                <br />
                対応しています
              </h2>

              <p className="mx-auto mt-5 max-w-[340px] text-[13px] leading-7 text-muted-foreground sm:max-w-2xl sm:text-base sm:leading-8 lg:mx-0">
                保管・発送代行・流通加工から
                <br className="sm:hidden" />
                細かな手作業まで。
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 lg:grid-cols-3">
              {cases.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[66px] items-center rounded-xl border border-border bg-card px-3.5 py-3 shadow-sm sm:min-h-[72px] sm:rounded-2xl sm:p-5"
                >
                  <p className="text-[12px] font-bold leading-5 sm:text-sm sm:leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="section-gradient py-14 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.18em] text-gold sm:text-sm">
                CLIENTS
              </p>

              <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.035em] sm:mt-4 sm:text-5xl">
                小さな事業者様から
                <br />
                メーカー様まで
              </h2>

              <p className="mx-auto mt-5 max-w-[340px] text-[13px] leading-7 text-muted-foreground sm:max-w-2xl sm:text-base">
                事業規模に関係なく、
                <br className="sm:hidden" />
                物流で困っている方をサポートします。
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 lg:grid-cols-4">
              {[
                "個人事業主様",
                "EC事業者様",
                "スタートアップ",
                "美容・化粧品",
                "通販事業者様",
                "食品関連",
                "アパレル",
                "メーカー様",
              ].map((item) => (
                <div
                  key={item}
                  className="flex min-h-[62px] items-center justify-center rounded-xl border border-border bg-white px-3 py-3 text-center shadow-sm sm:rounded-2xl sm:p-5"
                >
                  <p className="text-[12px] font-bold sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.18em] text-gold sm:text-sm">
                FAQ
              </p>

              <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.035em] sm:mt-4 sm:text-5xl">
                よくあるご質問
              </h2>
            </div>

            <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6"
                >
                  <p className="text-[14px] font-bold leading-6 sm:text-base">
                    {item.q}
                  </p>

                  <p className="mt-2.5 text-[13px] leading-7 text-muted-foreground sm:mt-3 sm:text-sm">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LICENSE */}
        <section className="bg-zinc-950 py-14 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div className="text-center lg:text-left">
                <p className="text-[11px] font-bold tracking-[0.18em] text-amber-300 sm:text-sm">
                  LICENSE
                </p>

                <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.3] tracking-[-0.035em] sm:mt-4 sm:text-5xl">
                  安心して任せられる
                  <br />
                  物流パートナーへ。
                </h2>

                <p className="mx-auto mt-5 max-w-[340px] text-[13px] leading-7 text-white/70 sm:max-w-2xl sm:text-base sm:leading-8 lg:mx-0">
                  許認可を活かし、
                  <br className="sm:hidden" />
                  保管・加工・発送まで対応します。
                </p>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                {licenses.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 sm:rounded-3xl sm:px-5"
                  >
                    <p className="flex items-center gap-2 text-[13px] font-bold leading-6 text-white sm:text-sm">
                      <span className="text-amber-400">✓</span>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NUMBERS */}
        <section className="section-gradient py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                ["1坪〜", "小規模保管歓迎"],
                ["365", "365日稼働"],
                ["100坪", "守口物流センター"],
                ["全国", "発送対応"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-border bg-white px-3 py-6 text-center shadow-sm sm:rounded-3xl sm:p-8"
                >
                  <p className="text-[2rem] font-bold leading-none text-amber-500 sm:text-5xl">
                    {number}
                  </p>

                  <p className="mt-2 text-[11px] font-bold leading-5 sm:text-base">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-14 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
            <p className="text-[11px] font-bold tracking-[0.18em] text-gold sm:text-sm">
              CONTACT
            </p>

            <h2 className="mt-3 text-[1.85rem] font-bold leading-[1.3] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
              「これ頼める？」
              <br />
              <span className="text-amber-600">
                からで大丈夫です。
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[340px] text-[13px] leading-7 text-muted-foreground sm:max-w-2xl sm:text-base sm:leading-8">
              1坪程度の保管、小ロット発送、
              <br className="sm:hidden" />
              検品・梱包・シール貼りなど、
              <br />
              小さなご相談も歓迎します。
              <br />
              <br />
              GAMIはレスポンスを
              <br className="sm:hidden" />
              大切にしています。
            </p>

            <div className="mx-auto mt-7 flex max-w-[320px] flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="/company#contact"
                className="flex min-h-[54px] items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:bg-amber-600"
              >
                「これ頼める？」と相談する
              </Link>

              <a
                href="tel:0661159935"
                className="flex min-h-[54px] items-center justify-center rounded-full border border-border px-7 py-3.5 text-[14px] font-bold transition hover:bg-muted"
              >
                電話で相談する
              </a>

              <a
                href="mailto:k_fuchigami@gamigami.email"
                className="flex min-h-[54px] items-center justify-center rounded-full border border-border px-7 py-3.5 text-[14px] font-bold transition hover:bg-muted"
              >
                メールで相談する
              </a>
            </div>

            <div className="mx-auto mt-6 flex max-w-[340px] flex-wrap justify-center gap-2 sm:max-w-none sm:gap-3">
              {[
                "相談無料",
                "見積無料",
                "1坪から",
                "小ロット歓迎",
                "365日稼働",
                "全国対応",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-muted px-3 py-2 text-[10px] font-bold sm:px-4 sm:text-xs"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
