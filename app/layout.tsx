import React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"

import "./globals.css"
import { FloatingCta } from "@/components/floating-cta"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500", "700"],
  display: "swap",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  title: {
    default: "株式会社GAMI | 繋ぐ。癒す。想う。",
    template: "%s | 株式会社GAMI",
  },
  description:
    "株式会社GAMIは物流運送事業・ヘッドスパ事業・遺品整理・生前整理事業を展開するコーポレートグループです。確実な物流設計、癒しの極みをプロデュース、大切な想い出に寄り添います。",
  keywords: [
    "株式会社GAMI",
    "物流運送",
    "ヘッドスパ",
    "遺品整理",
    "生前整理",
    "物流業務",
    "EC支援",
    "大阪",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: '/',
    siteName: "株式会社GAMI",
    title: "株式会社GAMI | 繋ぐ。癒す。想う。",
    description:
      "株式会社GAMIは物流運送事業・ヘッドスパ事業・遺品整理・生前整理事業を展開するコーポレートグループです。",
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: '株式会社GAMI',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社GAMI | 繋ぐ。癒す。想う。",
    description:
      "株式会社GAMIは物流運送事業・ヘッドスパ事業・遺品整理・生前整理事業を展開するコーポレートグループです。",
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}
      >
        {children}
        <FloatingCta />
      </body>
    </html>
  )
}
