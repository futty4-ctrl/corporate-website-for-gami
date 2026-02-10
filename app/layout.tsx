import React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"

import "./globals.css"

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    siteName: "株式会社GAMI",
    title: "株式会社GAMI | 繋ぐ。癒す。想う。",
    description:
      "株式会社GAMIは物流運送事業・ヘッドスパ事業・遺品整理・生前整理事業を展開するコーポレートグループです。",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社GAMI | 繋ぐ。癒す。想う。",
    description:
      "株式会社GAMIは物流運送事業・ヘッドスパ事業・遺品整理・生前整理事業を展開するコーポレートグループです。",
  },
  alternates: {
    canonical: siteUrl,
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
      </body>
    </html>
  )
}
