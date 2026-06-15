import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CredentialsSection } from "@/components/credentials-section"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "会社概要｜大阪の発送代行・物流倉庫なら株式会社GAMI",
  description:
    "株式会社GAMIの会社概要。大阪府守口市大日町の約100坪倉庫を拠点に、発送代行・倉庫保管・流通加工・内職作業に対応しています。",
  keywords: [
    "株式会社GAMI",
    "会社概要",
    "物流会社",
    "発送代行",
    "倉庫保管",
    "流通加工",
    "大阪",
    "守口",
    "お問い合わせ",
  ],
  openGraph: {
    title: "会社概要 | 株式会社GAMI",
    description:
      "大阪府守口市の物流会社。発送代行・倉庫保管・流通加工・内職作業に対応。",
    url: "/company",
    type: "website",
  },
  alternates: {
    canonical: "/company",
  },
}

const companyInfo = [
  { label: "会社名", value: "株式会社GAMI" },
  { label: "代表取締役", value: "淵上 和博" },
  { label: "設立", value: "2025年6月17日" },
  {
    label: "主要事業",
    value: "物流運送事業\n倉庫保管\n発送代行\n流通加工\n内職作業",
  },
  {
    label: "関連事業",
    value: "ヘッドスパ事業\n車事業\nオンラインショップ運営",
  },
  { label: "メールアドレス", value: "k_fuchigami@gamigami.email" },
  { label: "TEL", value: "06-6115-9935" },
  { label: "FAX", value: "06-6115-9936" },
  {
    label: "古物商許可",
    value: "大阪府公安委員会許可 第62229R076690号",
  },
  {
    label: "化粧品製造業許可",
    value: "認証倉庫 許可番号 27CZ201072",
  },
  {
    label: "第一種貨物利用運送事業",
    value: "貨物自動車運送（近運自貨第1190号）",
  },
  {
    label: "インボイス登録番号",
    value: "T9120001277055",
  },
  {
    label: "所在地（大阪本社）",
    value: "〒570-0003 大阪府守口市大日町1-8-18",
  },
  {
    label: "所在地（福岡支社）",
    value: "〒819-0014 福岡県福岡市西区豊浜2-20-20-2",
  },
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gamigami.net"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社GAMI",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description:
    "株式会社GAMIは大阪・福岡を拠点に、物流運送、発送代行、倉庫保管、流通加工、内職作業に対応しています。",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-6-6115-9935",
    contactType: "customer service",
    email: "k_fuchigami@gamigami.email",
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "大日町1-8-18",
    addressLocality: "守口市",
    addressRegion: "大阪府",
    postalCode: "570-0003",
    addressCountry: "JP",
  },
  knowsAbout: ["物流運送", "発送代行", "倉庫保管", "流通加工", "内職作業"],
  sameAs: [],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "会社概要",
      item: `${siteUrl}/company`,
    },
  ],
}

export default function CompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#111111] px-5 py-16 pt-24 text-white sm:px-6 sm:py-24 sm:pt-36">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-amber-500 blur-3xl" />
            <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-orange-400 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl text-center lg:text-left">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-amber-300 sm:text-sm sm:tracking-[0.22em]">
              COMPANY
            </p>

            <h1 className="mx-auto mt-5 max-w-[11em] text-[2.05rem] font-bold leading-[1.2] tracking-[-0.045em] text-white sm:max-w-none sm:text-6xl sm:leading-[1.08] lg:mx-0">
              <span className="block">大阪の物流会社</span>
              <span className="block">株式会社GAMI</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[22rem] text-[14px] leading-7 text-white/80 sm:max-w-2xl sm:text-base sm:leading-8 lg:mx-0">
              大阪府守口市大日町の約100坪倉庫を拠点に、
              発送代行・倉庫保管・流通加工・内職作業まで対応しています。
            </p>

            <div className="mx-auto mt-8 grid max-w-[21rem] grid-cols-2 gap-2.5 sm:max-w-xl sm:grid-cols-4 sm:gap-3 lg:mx-0">
              {["発送代行", "倉庫保管", "流通加工", "内職作業"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-3 text-center text-xs font-bold leading-5 tracking-[0.03em] text-white/85 backdrop-blur sm:px-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-28">
          <div className="mb-10 text-center sm:mb-16">
            <SectionHeading
              sub="COMPANY INFO"
              title="企業情報"
              className="mb-6"
            />

            <p className="text-sm leading-8 text-muted-foreground sm:text-base">
              株式会社GAMIの会社概要です。
              <br className="hidden sm:block" />
              物流のご相談は下部フォームよりお問い合わせください。
            </p>
          </div>

          <dl className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)] sm:rounded-[2rem]">
            {companyInfo.map((row, index) => (
              <div
                key={row.label}
                className={`flex flex-col gap-2 px-5 py-5 sm:flex-row sm:gap-10 sm:px-8 sm:py-6 ${
                  index !== companyInfo.length - 1
                    ? "border-b border-black/5"
                    : ""
                }`}
              >
                <dt
                  className={`w-full shrink-0 text-xs leading-6 tracking-[0.04em] sm:w-48 sm:text-sm ${
                    row.label === "主要事業"
                      ? "font-bold text-black"
                      : row.label === "関連事業"
                        ? "font-medium text-zinc-400"
                        : "font-medium text-black/50"
                  }`}
                >
                  {row.label}
                </dt>

                <dd
                  className={`whitespace-pre-line break-words ${
                    row.label === "主要事業"
                      ? "text-[15px] font-bold leading-8 text-black sm:text-base"
                      : row.label === "関連事業"
                        ? "text-sm leading-8 text-zinc-500"
                        : "text-sm leading-8 text-black/70"
                  }`}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-black/5 bg-[#f8f8f6] px-5 py-16 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 sm:mb-10">
              <SectionHeading
                sub="PHILOSOPHY"
                title="物流を、もっと動きやすく。"
                className="mb-6"
              />

              <p className="text-sm leading-8 text-muted-foreground sm:text-base">
                レスポンスと現場対応力で、企業の物流を前へ進めます。
              </p>
            </div>

            <p className="mx-auto max-w-[22rem] text-[14px] leading-8 text-muted-foreground sm:max-w-2xl sm:text-base sm:leading-[1.95]">
              株式会社GAMIは、物流運送事業を主軸に展開しています。
              倉庫保管、発送代行、流通加工、スポット対応、内職作業まで、
              現場に合わせて柔軟に対応します。
              <br className="hidden sm:block" />
              小ロット案件や細かな手作業も、まずはお気軽にご相談ください。
            </p>
          </div>
        </section>

        <CredentialsSection />

        <section
          id="contact"
          className="overflow-hidden px-4 py-16 sm:px-6 sm:py-28"
        >
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-10 text-center sm:mb-16">
              <SectionHeading
                sub="CONTACT"
                title="物流を相談する"
                className="mb-6"
              />

              <p className="text-sm leading-8 text-muted-foreground sm:text-base">
                倉庫保管、発送代行、スポット出荷、流通加工、内職作業まで。
                <br className="hidden sm:block" />
                まずはお気軽にご相談ください。
              </p>
            </div>

            <div className="w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
