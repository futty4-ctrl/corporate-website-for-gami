import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimate } from "@/components/scroll-animate"
import { EstimateCta } from "@/components/estimate-cta"
import {
  Sparkles,
  GraduationCap,
  Store,
  Briefcase,
  Car,
  ExternalLink,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/lib/images"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamigami.net'

export const metadata: Metadata = {
  title: "ヘッドスパ事業",
  description:
    "ヘッドスパ専門店運営（2025現在 全国3店舗）、独立開業支援・フランチャイズ支援、ヘッドスパスクール、ストアコンサルティング、出張サービス。",
  keywords: [
    "ヘッドスパ",
    "ヘッドスパスクール",
    "開業支援",
    "フランチャイズ",
    "ストアコンサルティング",
    "出張ヘッドスパ",
    "リラクゼーション",
    "大阪",
  ],
  openGraph: {
    title: "ヘッドスパ事業 | 株式会社GAMI",
    description:
      "ヘッドスパ専門店運営（2025現在 全国3店舗）、独立開業支援・フランチャイズ支援、ヘッドスパスクール、ストアコンサルティング、出張サービス。",
    url: `${siteUrl}/school`,
    type: "website",
  },
  alternates: {
    canonical: '/school',
  },
}

const services = [
  {
    icon: Sparkles,
    title: "ヘッドスパ専門店運営（2025現在 全国3店舗）",
    description: "全国3拠点で直営店を展開。確かな技術力とホスピタリティでお客様の心と身体に安らぎをお届けします。",
  },
  {
    icon: Briefcase,
    title: "独立開業支援 / フランチャイズ支援",
    description: "開業までのロードマップ作成から、物件選定、資金計画、開業後の運営サポートまでトータルで支援。フランチャイズモデルもご用意しています。",
  },
  {
    icon: GraduationCap,
    title: "ヘッドスパスクール",
    description: "未経験から即戦力へ。理論と実践で、ヘッドスパのプロフェッショナルを育成します。",
  },
  {
    icon: Store,
    title: "ストアコンサルティング",
    description: "既存サロンの売上改善、メニュー構成、集客戦略、SNSマーケティングまで。店舗運営のあらゆる課題をコンサルティングします。",
  },
  {
    icon: Car,
    title: "出張サービス",
    description: "企業の福利厚生、イベント出展、高齢者施設への訪問など、出張でのヘッドスパにも対応しております。",
  },
]

const shopLinks = [
  { name: "本店", url: "https://www.yuheadspa.net/" },
  { name: "大阪店", url: "https://www.yuheadspa-osaka.net/" },
]

const headSpaServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "ヘッドスパ",
  provider: {
    "@type": "Organization",
    name: "株式会社GAMI",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://gamigami.net",
  },
  description:
    "ヘッドスパ専門店運営（2025現在 全国3店舗）、独立開業支援・フランチャイズ支援、ヘッドスパスクール、ストアコンサルティング、出張サービス。",
}

export default function SchoolPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(headSpaServiceSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-end">
          <Image
            src={IMAGES.heroSpa}
            alt="ヘッドスパ"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:pt-32">
            <div className="max-w-2xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4)]">
              <p className="font-mono text-lg font-medium uppercase tracking-[0.3em] text-white sm:text-xl md:text-2xl">
                Head Spa
              </p>
              <h1 className="mt-3 font-serif text-xl font-bold tracking-wider text-white sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
                ヘッドスパ事業
              </h1>
              <p className="mt-3 max-w-xl text-pretty text-xs leading-relaxed tracking-wide text-white sm:mt-4 sm:text-sm md:text-base">
                店舗運営・スクール・開業支援。ヘッドスパ事業をトータルプロデュースします。
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-gradient py-16 px-4 sm:px-6 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <ScrollAnimate>
              <SectionHeading
                sub="事業紹介"
                title="ヘッドスパ事業"
                catchCopy="癒しの極みをプロデュース。"
                className="mb-16"
              />
            </ScrollAnimate>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <ScrollAnimate key={s.title} className="h-full">
                  <div className="tech-card flex h-full flex-col gap-4 rounded-2xl p-4 sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <s.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-base font-medium tracking-wider text-foreground sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="flex-grow text-sm leading-relaxed tracking-wide text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
            <div className="mt-12">
              <EstimateCta variant="compact" />
            </div>
          </div>
        </section>

        {/* Shop Links */}
        <section className="border-t border-border bg-secondary/50 py-24 px-4 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <ScrollAnimate>
              <SectionHeading
                sub="店舗一覧"
                title="店舗情報"
                catchCopy=""
                className="mb-16"
              />
            </ScrollAnimate>
            <div className="grid gap-6 md:grid-cols-2">
              {shopLinks.map((shop) => (
                <a
                  key={shop.name}
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-card group flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                  <div>
                    <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
                      店舗
                    </p>
                    <p className="mt-1 font-serif text-xl tracking-wider text-foreground">
                      {shop.name}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <EstimateCta
          title="ヘッドスパ事業 お見積り・ご相談"
          description="店舗運営、スクール、開業支援など、まずはお気軽にお問い合わせください。無料でお見積り・ご相談を承ります。"
        />
      </main>
      <Footer />
    </>
  )
}
