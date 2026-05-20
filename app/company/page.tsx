import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CredentialsSection } from "@/components/credentials-section"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社GAMIの会社概要・お問い合わせ。物流運送事業を中心に、倉庫保管・発送代行・流通加工・ヘッドスパ事業を展開。",
  keywords: [
    "株式会社GAMI",
    "会社概要",
    "物流会社",
    "発送代行",
    "倉庫保管",
    "大阪",
    "お問い合わせ",
  ],
  openGraph: {
    title: "会社概要 | 株式会社GAMI",
    description:
      "株式会社GAMIの会社概要・お問い合わせ。物流運送事業を中心に、倉庫保管・発送代行・流通加工・ヘッドスパ事業を展開。",
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
    value: "物流運送事業\nヘッドスパ事業",
  },

  {
    label: "関連事業",
    value: "車事業\nオンラインショップ運営",
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gamigami.net"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社GAMI",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,

  description:
    "株式会社GAMIは大阪・福岡を拠点に、物流運送、発送代行、倉庫保管、流通加工、ヘッドスパ事業を展開しています。",

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

  knowsAbout: [
    "物流運送",
    "発送代行",
    "倉庫保管",
    "流通加工",
    "ヘッドスパ",
  ],

  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "第一種貨物利用運送事業",
      credentialCategory: "許認可",
      recognizedBy: {
        "@type": "Organization",
        name: "近畿運輸局",
      },
      identifier: "近運自貨第1190号",
      description: "運送機関の種類：貨物自動車運送",
    },

    {
      "@type": "EducationalOccupationalCredential",
      name: "古物商許可",
      credentialCategory: "許認可",
      identifier: "大阪府公安委員会許可 第62229R076690号",
    },

    {
      "@type": "EducationalOccupationalCredential",
      name: "化粧品製造業許可",
      credentialCategory: "許認可",
      identifier: "27CZ201072",
    },
  ],

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
        <section className="relative overflow-hidden bg-[#111111] py-20 pt-28 text-white sm:py-24 sm:pt-36">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-amber-500 blur-3xl" />
            <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-orange-400 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:text-left">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-300">
              COMPANY
            </p>

            <h1 className="mx-auto mt-5 max-w-[20rem] font-serif text-[2.5rem] leading-[1.15] tracking-[0.02em] text-white sm:max-w-none sm:text-5xl md:text-6xl lg:mx-0">
              未来より先に動く。
            </h1>

            <p className="mx-auto mt-7 max-w-[32rem] text-[15px] leading-[2.05] text-white/80 sm:max-w-2xl sm:text-base sm:leading-8 lg:mx-0">
              物流運送を主軸に、
              倉庫保管・発送代行・流通加工まで一括対応。
              <br />
              スピードと現場対応力で、
              企業の物流を支える株式会社GAMI。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mb-16 text-center">
            <SectionHeading
              sub="COMPANY INFO"
              title="企業情報"
              className="mb-6"
            />

            <p className="text-sm leading-8 text-muted-foreground sm:text-base">
              株式会社GAMIの会社概要です。
              <br />
              ご不明点はお気軽にお問い合わせください。
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            {companyInfo.map((row, index) => (
              <div
                key={row.label}
                className={`flex flex-col gap-2 px-5 py-6 sm:flex-row sm:gap-10 sm:px-8 ${
                  index !== companyInfo.length - 1
                    ? "border-b border-black/5"
                    : ""
                }`}
              >
                <dt
                  className={`w-full shrink-0 text-xs tracking-wide sm:w-48 sm:text-sm ${
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
                  className={`whitespace-pre-line tracking-wide ${
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
          </div>
        </section>

        <section className="border-t border-black/5 bg-[#f8f8f6] px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-10 text-center">
              <SectionHeading
                sub="PHILOSOPHY"
                title="未来より先に動く。"
                className="mb-6"
              />

              <p className="text-sm leading-8 text-muted-foreground sm:text-base">
                レスポンスと現場対応力で、
                <br className="sm:hidden" />
                企業の物流を前へ進める。
              </p>
            </div>

            <p className="mx-auto max-w-[22rem] text-[15px] leading-[2.2] tracking-wide text-muted-foreground sm:max-w-2xl sm:text-base">
              株式会社GAMIは、
              物流運送事業を主軸に展開しています。
              <br />
              <br />
              倉庫保管、発送代行、流通加工、
              スポット対応まで、
              現場に合わせて柔軟に対応。
              <br />
              <br />
              ヘッドスパ事業やFC展開など、
              物流以外の関連事業も展開しながら、
              現場起点で事業を成長させています。
            </p>
          </div>
        </section>

        <CredentialsSection />

        <section
          id="contact"
          className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28"
        >
          <div className="mb-16 text-center">
            <SectionHeading
              sub="CONTACT"
              title="お問い合わせ"
              className="mb-6"
            />

            <p className="text-sm leading-8 text-muted-foreground sm:text-base">
              物流の急ぎ案件から、
              <br className="sm:hidden" />
              各種事業相談まで。
              <br />
              まずはお気軽にご相談ください。
            </p>
          </div>

          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  )
}
