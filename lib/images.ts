/**
 * プロフェッショナルな高画質画像（Unsplash）
 * - 物流: 清潔感のある倉庫・ロジスティクス
 * - スパ: 高級感のあるリラクゼーション
 * - 遺品整理: 信頼感のある温かみ・想い
 */

const q = "auto=format&fit=crop&q=85"

export const IMAGES = {
  // Hero（16:9）物流: 清潔感・プロフェッショナル
  heroLogistics: `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&${q}`,
  // Hero（16:9）スパ: リラクゼーション・ヘッドスパ施術
  heroSpa: `/images/hero-spa.png`,
  // Hero（16:9）遺品整理: まごころを込めて、大切な思い出を整理します。
  heroSeihin: `/images/hero-seihin.png`,

  // Card（4:3）物流: 清潔感・整理された倉庫
  cardLogistics: `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&${q}`,
  // Card（4:3）スパ: リラクゼーション・ヘッドスパ施術
  cardSchool: `/images/card-school.png`,
  // Card（4:3）遺品整理: まごころを込めて、大切な思い出を整理します。
  cardSeihin: `/images/card-seihin.png`,

  placeholder:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' fill='%23f1f5f9'%3E%3Crect width='1200' height='800'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='24' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EImage%3C/text%3E%3C/svg%3E",
} as const
