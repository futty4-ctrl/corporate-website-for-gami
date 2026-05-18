import React from "react"
import type { Metadata, Viewport } from "next"
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
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://gamigami.net"),

  title: {
    default: "株式会社GAMI｜未来より先に動く。",
    template: "%s｜株式会社GAMI",
  },

  description:
    "株式会社GAMIは、大阪を拠点に物流運送事業・ヘッドスパ事業を中心に展開。レスポンスと現場対応力を強みに、発送代行・倉庫保管・流通加工・美容事業まで幅広く対応しています。",

  keywords: [
    "株式会社GAMI",
    "物流会社 大阪",
    "発送代行",
    "倉庫保管",
    "流通加工",
    "EC発送代行",
    "物流運送",
    "ヘッドスパ",
    "ヘッドスパ専門店",
    "リユース買取",
    "生前整理",
    "遺品整理",
  ],

  authors: [
    {
      name: "株式会社GAMI",
    },
  ],

  creator: "株式会社GAMI",

  publisher: "株式会社GAMI",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://gamigami.net",
    siteName: "株式会社GAMI",

    title: "株式会社GAMI｜未来より先に動く。",

    description:
      "物流運送事業とヘッドスパ事業を軸に、レスポンスと現場対応力で事業を支える株式会社GAMI。発送代行・倉庫保管・流通加工・スポット出荷まで対応。",

    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社GAMI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "株式会社GAMI｜未来より先に動く。",

    description:
      "物流運送事業とヘッドスパ事業を軸に、レスポンスと現場対応力で事業を支える株式会社GAMI。",

    images: ["/ogp.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased bg-white text-[#0f172a]`}
      >
        {children}
      </body>
    </html>
  )
}
