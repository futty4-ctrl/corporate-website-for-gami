import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroVideoSlider } from "@/components/hero-video-slider"
import { BusinessCard } from "@/components/business-card"
import { CredentialsSection } from "@/components/credentials-section"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimate } from "@/components/scroll-animate"
import { EstimateCta } from "@/components/estimate-cta"
import { IMAGES } from "@/lib/images"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamigami.net'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社GAMI",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-6-6115-9935",
    contactType: "customer service",
    email: "f_fuchigami@gamigami.email",
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
  sameAs: [],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "株式会社GAMI",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/company#contact`,
    },
    "query-input": "required name=search_term_string",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#business`,
  name: "株式会社GAMI",
  image: `${siteUrl}/images/logo.png`,
  url: siteUrl,
  telephone: "+81-6-6115-9935",
  email: "f_fuchigami@gamigami.email",
  address: {
    "@type": "PostalAddress",
    streetAddress: "大日町1-8-18",
    addressLocality: "守口市",
    addressRegion: "大阪府",
    postalCode: "570-0003",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.6937,
    longitude: 135.5023,
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "大阪",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "サービス",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "物流運送事業",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "利用運送・軽貨物運送",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "物流業務",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "物流コンサルティング",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "ヘッドスパ事業",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ヘッドスパ専門店運営",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ヘッドスパスクール",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "遺品整理・生前整理事業",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "遺品整理",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "生前整理",
            },
          },
        ],
      },
    ],
  },
}

const businesses = [
  {
    title: "物流運送事業",
    subtitle: "物流",
    description: "",
    descriptionItems: [
      "物流業務（入出庫、物流加工・保管等）",
      "物流コンサルティング",
      "利用運送 / 軽貨物運送",
      "EC支援 / ビジネスマッチング",
      "オリジナル梱包資材 企画・製作",
    ],
    href: "/logistics",
    imageSrc: IMAGES.cardLogistics,
    accentColor: "logistics" as const,
  },
  {
    title: "ヘッドスパ事業",
    subtitle: "ヘッドスパ",
    description: "",
    descriptionItems: [
      "ヘッドスパ専門店運営（2025現在 全国3店舗）",
      "独立開業支援 / フランチャイズ支援",
      "ヘッドスパスクール",
      "ストアコンサルティング",
      "出張サービス",
    ],
    href: "/school",
    imageSrc: IMAGES.cardSchool,
    accentColor: "spa" as const,
  },
  {
    title: "遺品整理・生前整理事業",
    subtitle: "遺品整理",
    description: "",
    descriptionItems: [
      "遺品整理 / 生前整理",
      "片付け・仕分け・整理 全般",
      "貴金属・時計等 買取対応",
      "資格保有の安心対応",
    ],
    href: "/seihin",
    imageSrc: IMAGES.cardSeihin,
    accentColor: "antiques" as const,
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <HeroVideoSlider />

        {/* Business Cards */}
        <section className="section-gradient py-12 px-4 sm:px-6 sm:py-24 lg:py-40">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="事業紹介"
                title="事業領域"
                catchCopy="物流・ヘッドスパ・遺品整理。"
                className="mb-16"
              />
            </ScrollAnimate>
            <div className="grid gap-10 md:grid-cols-3">
              {businesses.map((biz) => (
                <BusinessCard key={biz.href} {...biz} />
              ))}
            </div>
          </div>
        </section>

        <CredentialsSection />

        {/* CTA */}
        <EstimateCta
          title="お見積り・ご相談"
          description="物流・ヘッドスパ・遺品整理。どの事業についても、まずはお気軽にお問い合わせください。無料でお見積りいたします。"
        />
      </main>
      <Footer />
    </>
  )
}
