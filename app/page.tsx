import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title:
    "365日稼働の発送代行・物流倉庫｜1坪から対応｜株式会社GAMI",
  description:
    "大阪・福岡に物流拠点を持つ株式会社GAMI。365日稼働、1坪からの倉庫保管・小ロット発送・EC物流・検品・梱包・セット組み・流通加工・全国輸送まで対応。スモールビジネスも歓迎。",
}

const smallCases = [
  "1坪くらいだけ商品を置きたい",
  "在庫が段ボール数箱〜数十箱",
  "毎日の発送件数がまだ少ない",
  "ECを始めたばかり",
  "繁忙期だけお願いしたい",
  "検品・シール貼りだけお願いしたい",
]

const responsePoints = [
  {
    number: "01",
    title: "まず返す",
    body: "すぐに答えが出ない内容でも、まずご連絡します。お客様を待たせっぱなしにしないことを大切にしています。",
  },
  {
    number: "02",
    title: "すぐ動く",
    body: "急な出荷・予定変更・物流トラブルなどにも、できる限りスピード感を持って対応します。",
  },
  {
    number: "03",
    title: "できる方法を考える",
    body: "最初から断るのではなく、どうすれば対応できるか。お客様と一緒に方法を考えます。",
  },
]

const achievements = [
  {
    number: "01",
    title: "ふるさと納税返礼品",
    subtitle: "一括物流対応",
    body: "返礼品の保管・流通加工・梱包・発送まで、一連の物流業務に対応。",
  },
  {
    number: "02",
    title: "美容メーカー",
    subtitle: "商品セット組み",
    body: "美容メーカーの商品セット組みなど、細かな手作業を伴う物流業務に対応。",
  },
  {
    number: "03",
    title: "美容商材",
    subtitle: "商品化前検品",
    body: "商品化前の容器やパッケージなど、美容商材の検品実績があります。",
  },
  {
    number: "04",
    title: "EC物流",
    subtitle: "楽天・Yahoo!・Amazon",
    body: "各ECモールに対応した商品の保管・梱包・出荷など、EC物流をサポート。",
  },
  {
    number: "05",
    title: "アパレルメーカー",
    subtitle: "365日発送代行",
    body: "365日稼働の物流体制を活かし、アパレルメーカーの継続的な発送業務に対応。",
  },
  {
    number: "06",
    title: "食品関連",
    subtitle: "BtoB・EC発送",
    body: "食品関連商品の法人向け出荷から、ECのお客様向け発送まで対応。",
  },
  {
    number: "07",
    title: "全国輸送",
    subtitle: "輸送手配・コスト削減",
    body: "全国の輸送ネットワークを活用し、配送条件に合わせた輸送手配と物流コスト削減をご提案。",
  },
]

const services = [
  "発送代行",
  "EC物流",
  "倉庫保管",
  "BtoB出荷",
  "検品",
  "梱包",
  "シール貼り",
  "セット組み",
  "封入作業",
  "内職作業",
  "流通加工",
  "美容商材検品",
  "化粧品関連作業",
  "スポット出荷",
  "全国輸送手配",
  "365日対応",
]

const licenses = [
  "化粧品製造業許可",
  "第一種貨物利用運送事業",
  "古物商許可",
  "インボイス登録事業者",
]

const faqItems = [
  {
    q: "土日祝も出荷できますか？",
    a: "365日稼働しています。365日対応をご希望の場合は、出荷内容や運用方法について事前にご相談ください。",
  },
  {
    q: "1坪程度の保管でも依頼できますか？",
    a: "はい。歓迎しています。段ボール数箱程度や、物量がまだ少ない段階からでもお気軽にご相談ください。",
  },
  {
    q: "ECを始めたばかりでも大丈夫ですか？",
    a: "はい。個人事業主様、小規模EC事業者様、スタートアップ企業様など、スモールビジネスも応援しています。",
  },
  {
    q: "検品やセット組みだけでも依頼できますか？",
    a: "はい。検品・シール貼り・セット組み・梱包など、流通加工のみのご相談にも対応しています。",
  },
  {
    q: "急な出荷や物流トラブルも相談できますか？",
    a: "はい。まず状況をお聞かせください。GAMIはレスポンスを大切にし、できる限り迅速に対応方法を検討します。",
  },
  {
    q: "全国への配送や輸送手配も可能ですか？",
    a: "はい。全国の輸送ネットワークを活用し、荷物や配送条件に合わせた輸送手配にも対応しています。",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[560px] overflow-hidden bg-zinc-950 text-white sm:min-h-[720px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          >
            <source src="/video/hero-logistics.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl items-center px-5 py-14 sm:min-h-[720px] sm:px-6 sm:py-20">
            <div className="w-full max-w-4xl text-center lg:text-left">
              <p className="text-[11px] font-bold tracking-[0.2em] text-amber-300 sm:text-sm sm:tracking-[0.3em]">
                365 DAYS LOGISTICS
              </p>

              <h1 className="mt-4 text-[2.3rem] font-bold leading-[1.12] tracking-[-0.045em] sm:mt-6 sm:text-6xl lg:text-[4.8rem]">
                <span className="block">365日、</span>
                <span className="block">物流を止めない。</span>

                <span className="mt-4 block text-[1.7rem] leading-[1.25] text-amber-300 sm:mt-5 sm:text-4xl lg:text-[3rem]">
                  1坪から、
                  <br className="sm:hidden" />
                  ビジネスを支える。
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-[350px] text-[14px] leading-7 text-white/85 sm:mt-8 sm:max-w-2xl sm:text-base sm:leading-8 lg:mx-0">
                大阪・福岡の物流拠点から全国対応。
                <br />
                小ロット・スモールビジネスから、
                <br className="sm:hidden" />
                EC・BtoB物流まで。
              </p>

              <div className="mx-auto mt-8 flex max-w-[330px] flex-col gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                <Link
                  href="/company#contact"
                  className="flex min-h-[54px] items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:bg-amber-600"
                >
                  「これ頼める？」と相談する
                </Link>

                <Link
                  href="/warehouse"
                  className="flex min-h-[54px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-[14px] font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  物流拠点を見る
                </Link>
              </div>

              <div className="mx-auto mt-6 flex max-w-[350px] flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-bold text-white/75 sm:max-w-none sm:text-xs lg:mx-0 lg:justify-start">
                <span>✓ 365日稼働</span>
                <span>✓ 1坪から</span>
                <span>✓ 小ロット歓迎</span>
                <span>✓ 全国対応</span>
              </div>
            </div>
          </div>
        </section>

        {/* 365 DAYS */}
        <section className="bg-zinc-950 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div className="text-center lg:text-left">
                <p className="text-[11px] font-bold tracking-[0.2em] text-amber-300 sm:text-sm">
                  365 DAYS
                </p>

                <h2 className="mt-3 text-[2rem] font-bold leading-[1.2] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                  物流を止めない。
                  <br />
                  商機を止めない。
                </h2>

                <p className="mx-auto mt-5 max-w-[360px] text-[14px] leading-7 text-white/75 sm:max-w-xl sm:text-base sm:leading-8 lg:mx-0">
                  ビジネスチャンスを
                  <br className="sm:hidden" />
                  1分たりとも逃さないために。
                  <br />
                  <br />
                  GAMIは365日稼働する物流体制で、
                  <br />
                  EC発送・休日出荷・繁忙期などにも
                  <br className="sm:hidden" />
                  柔軟に対応します。
                </p>

                <p className="mx-auto mt-4 max-w-[360px] text-[11px] leading-5 text-white/45 sm:max-w-xl sm:text-xs lg:mx-0">
                  ※365日対応をご希望の案件は、
                  運用内容について事前にご相談ください。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["365", "365日稼働"],
                  ["1坪〜", "小規模保管"],
                  ["2拠点", "大阪・福岡"],
                  ["全国", "発送・輸送対応"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-7 text-center sm:rounded-3xl sm:p-8"
                  >
                    <p className="text-[1.8rem] font-bold leading-none text-amber-300 sm:text-4xl">
                      {number}
                    </p>
                    <p className="mt-3 text-[11px] font-bold sm:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SMALL BUSINESS */}
        <section className="bg-amber-50 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.18em] text-amber-600 sm:text-sm">
                SMALL BUSINESS
              </p>

              <h2 className="mt-3 text-[1.95rem] font-bold leading-[1.25] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                1坪から、
                <br />
                <span className="text-amber-600">大歓迎。</span>
              </h2>

              <p className="mx-auto mt-5 max-w-[360px] text-[14px] leading-7 text-muted-foreground sm:max-w-2xl sm:text-base sm:leading-8">
                小さなビジネスほど、
                <br className="sm:hidden" />
                本気で応援します。
                <br />
                「まだ物量が少ないから頼みにくい」
                <br />
                そんな段階からGAMIにご相談ください。
              </p>
            </div>

            <div className="mt-9 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {smallCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-amber-100 bg-white px-4 py-4 shadow-sm sm:rounded-3xl sm:p-6"
                >
                  <p className="flex items-start gap-2.5 text-[14px] font-bold leading-6 sm:text-sm sm:leading-7">
                    <span className="shrink-0 text-amber-500">✓</span>
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESPONSE */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div className="text-center lg:text-left">
                <p className="text-[11px] font-bold tracking-[0.18em] text-amber-600 sm:text-sm">
                  RESPONSE
                </p>

                <h2 className="mt-3 text-[2rem] font-bold leading-[1.2] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                  まず返す。
                  <br />
                  すぐ動く。
                </h2>

                <p className="mx-auto mt-5 max-w-[360px] text-[14px] leading-7 text-muted-foreground sm:max-w-xl sm:text-base sm:leading-8 lg:mx-0">
                  急なお困りごと、急なご相談、
                  <br />
                  そして物流トラブル。
                  <br />
                  <br />
                  困ったときにすぐ連絡が取れる。
                  <br />
                  GAMIはそんな物流会社であることを
                  <br className="sm:hidden" />
                  大切にしています。
                </p>
              </div>

              <div className="grid gap-3">
                {responsePoints.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:rounded-3xl sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 text-lg font-bold text-amber-500">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="text-[17px] font-bold sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-7 text-muted-foreground sm:mt-3 sm:text-sm sm:leading-7">
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

        {/* OSAKA LOGISTICS CENTER */}
        <section className="bg-zinc-950 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.18em] text-amber-300 sm:text-sm">
                OSAKA LOGISTICS CENTER
              </p>

              <h2 className="mt-3 text-[1.9rem] font-bold leading-[1.25] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                大阪物流センターを
                <br className="sm:hidden" />
                使う、3つの強み。
              </h2>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
                <p className="text-sm font-bold text-amber-300">
                  01 / LEAD TIME
                </p>

                <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                  EC物流に強い
                  <br />
                  リードタイム
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-white/70 sm:text-sm sm:leading-8">
                  大阪・守口を拠点に、関西はもちろん、
                  九州・関東など主要なEC商圏への
                  スピーディーな配送が可能。
                  多くのエリアで翌日配送を狙える立地を活かし、
                  ECビジネスのスピードを支えます。
                </p>

                <p className="mt-4 text-[11px] leading-5 text-white/40">
                  ※配送先・運送会社・出荷時間・商品条件等により、
                  翌日配送とならない場合があります。
                </p>
              </div>

              <div className="rounded-3xl border border-amber-400/30 bg-amber-400/[0.08] p-6 sm:p-8">
                <p className="text-sm font-bold text-amber-300">
                  02 / 365 DAYS
                </p>

                <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                  365日、
                  <br />
                  物流を動かす
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-white/70 sm:text-sm sm:leading-8">
                  ビジネスチャンスを
                  1分たりとも逃さないために。
                  土日祝を含む365日稼働体制で、
                  EC発送・繁忙期・休日出荷などにも
                  柔軟に対応します。
                </p>

                <p className="mt-4 text-[11px] leading-5 text-white/40">
                  ※365日対応をご希望の案件は、
                  運用内容について事前にご相談ください。
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
                <p className="text-sm font-bold text-amber-300">
                  03 / RESPONSE
                </p>

                <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                  困ったときの
                  <br />
                  レスポンス
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-white/70 sm:text-sm sm:leading-8">
                  急な出荷、予定変更、物流トラブル、
                  イレギュラーなご相談。
                  「まず返す。すぐ動く。」を大切にし、
                  困ったときに連絡が取れる物流会社を
                  目指しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.18em] text-amber-600 sm:text-sm">
                LOGISTICS EXPERIENCE
              </p>

              <h2 className="mt-3 text-[1.9rem] font-bold leading-[1.25] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                GAMIの
                <br className="sm:hidden" />
                物流・発送実績
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
                ECからメーカー物流、流通加工、
                <br className="sm:hidden" />
                全国輸送まで。
                <br />
                さまざまな物流業務に対応しています。
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((item, index) => (
                <div
                  key={item.number}
                  className={`rounded-3xl border p-6 shadow-sm sm:p-7 ${
                    index === 2
                      ? "border-amber-200 bg-amber-50"
                      : "border-border bg-card"
                  }`}
                >
                  <p className="text-xs font-bold tracking-[0.15em] text-amber-600">
                    CASE {item.number}
                  </p>

                  <h3 className="mt-3 text-[18px] font-bold leading-7 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[13px] font-bold text-amber-600 sm:text-sm">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-[14px] leading-7 text-muted-foreground sm:text-sm sm:leading-7">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TWO BASES */}
        <section className="bg-amber-50 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.18em] text-amber-600 sm:text-sm">
                LOGISTICS BASE
              </p>

              <h2 className="mt-3 text-[1.9rem] font-bold leading-[1.25] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                大阪・福岡、
                <br />
                2つの物流拠点。
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
                2つの物流拠点と全国の輸送ネットワークを活用し、
                <br className="hidden sm:block" />
                保管・加工・発送・輸送まで幅広く対応します。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
                <img
                  src="/images/warehouse-moriguchi.jpg"
                  alt="株式会社GAMI 大阪物流センター"
                  className="aspect-[16/10] w-full object-cover"
                />

                <div className="p-6 sm:p-8">
                  <p className="text-xs font-bold tracking-[0.15em] text-amber-600">
                    OSAKA
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    大阪物流センター
                  </h3>

                  <p className="mt-2 text-[13px] font-bold text-muted-foreground">
                    大阪府守口市 ｜ 約100坪 ｜ 365日稼働
                  </p>

                  <p className="mt-4 text-[14px] leading-7 text-muted-foreground sm:text-sm sm:leading-8">
                    EC物流・発送代行・保管・検品・流通加工など、
                    GAMIの物流業務を支える中心拠点。
                    1坪からのスモールビジネスにも対応します。
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex h-full min-h-[300px] flex-col justify-center">
                  <p className="text-xs font-bold tracking-[0.15em] text-amber-600">
                    FUKUOKA
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    福岡物流センター
                  </h3>

                  <p className="mt-2 text-[13px] font-bold text-muted-foreground">
                    福岡市中央区 ｜ 都心アクセス抜群
                  </p>

                  <p className="mt-4 text-[14px] leading-7 text-muted-foreground sm:text-sm sm:leading-8">
                    福岡市中央区の都心立地を活かした物流拠点。
                    大阪物流センターと連携し、
                    お客様の物流ニーズに合わせて柔軟に対応します。
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["福岡市中央区", "都心立地", "物流拠点"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full bg-amber-50 px-3 py-2 text-[11px] font-bold text-amber-700"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-zinc-950 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
              <div className="text-center lg:text-left">
                <p className="text-[11px] font-bold tracking-[0.18em] text-amber-300 sm:text-sm">
                  SERVICE
                </p>

                <h2 className="mt-3 text-[1.9rem] font-bold leading-[1.25] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                  保管・加工・発送・輸送。
                  <br />
                  まとめてGAMIへ。
                </h2>

                <p className="mx-auto mt-5 max-w-[360px] text-[14px] leading-7 text-white/70 sm:max-w-xl sm:text-base sm:leading-8 lg:mx-0">
                  商品を預かるだけではありません。
                  <br />
                  検品・セット組みなどの商品加工から、
                  <br className="sm:hidden" />
                  発送・全国輸送まで対応します。
                </p>

                <Link
                  href="/company#contact"
                  className="mt-7 inline-flex min-h-[54px] w-full max-w-[330px] items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:bg-amber-600 sm:w-auto"
                >
                  物流業務を相談する
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {services.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[56px] items-center rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-[12px] font-bold leading-5 text-white/85 sm:min-h-[62px] sm:rounded-2xl sm:px-5 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BEAUTY */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.18em] text-amber-600 sm:text-sm">
                    BEAUTY LOGISTICS
                  </p>

                  <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.3] tracking-[-0.04em] sm:text-4xl">
                    美容商材の
                    <br />
                    検品・流通加工にも。
                  </h2>
                </div>

                <div>
                  <p className="text-[14px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    美容メーカーの商品セット組みや、
                    商品化前の容器・パッケージなどの
                    <strong className="font-bold text-foreground">
                      美容商材検品の実績
                    </strong>
                    があります。
                    <br />
                    <br />
                    検品・シール貼り・セット組み・梱包・発送など、
                    商品に合わせた細かな作業にも対応します。
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "美容商材検品",
                      "セット組み",
                      "シール貼り",
                      "梱包",
                      "発送",
                      "化粧品製造業許可",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-2 text-[11px] font-bold shadow-sm sm:text-xs"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LICENSE */}
        <section className="bg-zinc-950 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div className="text-center lg:text-left">
                <p className="text-[11px] font-bold tracking-[0.18em] text-amber-300 sm:text-sm">
                  LICENSE
                </p>

                <h2 className="mt-3 text-[1.9rem] font-bold leading-[1.25] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                  幅広い物流に
                  <br />
                  対応するために。
                </h2>

                <p className="mx-auto mt-5 max-w-[360px] text-[14px] leading-7 text-white/70 sm:max-w-xl sm:text-base sm:leading-8 lg:mx-0">
                  各種許認可を活かし、
                  <br />
                  保管・加工・発送・輸送まで
                  <br className="sm:hidden" />
                  幅広く対応しています。
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {licenses.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-5 sm:rounded-3xl"
                  >
                    <p className="flex items-center gap-2 text-[14px] font-bold leading-6">
                      <span className="text-amber-400">✓</span>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-[11px] font-bold tracking-[0.18em] text-amber-600 sm:text-sm">
                FAQ
              </p>

              <h2 className="mt-3 text-[1.9rem] font-bold tracking-[-0.04em] sm:mt-4 sm:text-5xl">
                よくあるご質問
              </h2>
            </div>

            <div className="mt-9 space-y-3 sm:mt-10">
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6"
                >
                  <p className="text-[15px] font-bold leading-6 sm:text-base">
                    Q. {item.q}
                  </p>

                  <p className="mt-3 text-[14px] leading-7 text-muted-foreground sm:text-sm sm:leading-7">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-amber-50 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
            <p className="text-[11px] font-bold tracking-[0.18em] text-amber-600 sm:text-sm">
              CONTACT
            </p>

            <h2 className="mt-3 text-[2rem] font-bold leading-[1.25] tracking-[-0.04em] sm:mt-4 sm:text-5xl">
              物流で困ったら、
              <br />
              <span className="text-amber-600">まずGAMIへ。</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[360px] text-[14px] leading-7 text-muted-foreground sm:max-w-2xl sm:text-base sm:leading-8">
              365日稼働。
              <br />
              1坪からのスモールビジネスも歓迎。
              <br />
              <br className="sm:hidden" />
              急なお困りごとも、
              <br className="sm:hidden" />
              「これ頼める？」というご相談も。
              <br />
              まずはお気軽にお問い合わせください。
            </p>

            <div className="mx-auto mt-8 flex max-w-[330px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="/company#contact"
                className="flex min-h-[54px] items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:bg-amber-600"
              >
                「これ頼める？」と相談する
              </Link>

              <a
                href="tel:0661159935"
                className="flex min-h-[54px] items-center justify-center rounded-full border border-border bg-white px-7 py-3.5 text-[14px] font-bold transition hover:bg-muted"
              >
                電話で相談する
              </a>

              <a
                href="mailto:k_fuchigami@gamigami.email"
                className="flex min-h-[54px] items-center justify-center rounded-full border border-border bg-white px-7 py-3.5 text-[14px] font-bold transition hover:bg-muted"
              >
                メールで相談する
              </a>
            </div>

            <div className="mx-auto mt-6 flex max-w-[360px] flex-wrap justify-center gap-2 sm:max-w-none">
              {[
                "365日稼働",
                "1坪から",
                "大阪・福岡",
                "小ロット歓迎",
                "全国対応",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3 py-2 text-[11px] font-bold shadow-sm"
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
